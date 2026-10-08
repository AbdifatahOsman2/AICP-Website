/**
 * Standalone Test Script for Al Rahma Website Email Submissions
 * Run: node scripts/test-email.mjs
 */

import { Resend } from 'resend';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Load .env.local or .env if present
function loadEnv() {
  const envFiles = ['.env.local', '.env'];
  for (const file of envFiles) {
    const fullPath = path.resolve(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      content.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const [key, ...vals] = trimmed.split('=');
          if (key && vals.length > 0 && !process.env[key.trim()]) {
            process.env[key.trim()] = vals.join('=').trim().replace(/^["']|["']$/g, '');
          }
        }
      });
      console.log(`Loaded environment from ${file}`);
      break;
    }
  }
}

loadEnv();

const TO_EMAIL = process.env.ADMIN_EMAIL || 'backupabdifatah@gmail.com';
const resendKey = process.env.RESEND_API_KEY;
const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

console.log('----------------------------------------------------');
console.log(' Al Rahma Website — Email Dispatcher Test');
console.log('----------------------------------------------------');
console.log(`Target Recipient: ${TO_EMAIL}`);
console.log(`Resend API Key:   ${resendKey ? 'Detected (' + resendKey.substring(0, 6) + '...)' : 'Not detected'}`);
console.log(`SMTP / App Pass:  ${smtpPass ? 'Detected' : 'Not detected'}`);
console.log('----------------------------------------------------');

const testPayload = {
  subject: '[Test] Al Rahma Form Email Dispatcher Test',
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #0a2540;">Al Rahma Islamic Center of Phoenix</h2>
      <p>This is a test notification confirming that email dispatching to <strong>${TO_EMAIL}</strong> is working correctly!</p>
      <p>Timestamp: ${new Date().toLocaleString()}</p>
    </div>
  `
};

async function run() {
  if (resendKey) {
    console.log('Attempting delivery via Resend...');
    try {
      const resend = new Resend(resendKey);
      const res = await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Al Rahma Website <onboarding@resend.dev>',
        to: [TO_EMAIL],
        subject: testPayload.subject,
        html: testPayload.html
      });
      if (res.error) {
        console.error('Resend delivery failed:', res.error);
      } else {
        console.log('SUCCESS! Email sent via Resend. ID:', res.data?.id);
        return;
      }
    } catch (err) {
      console.error('Resend exception:', err.message);
    }
  }

  if (smtpPass) {
    console.log('Attempting delivery via SMTP (Gmail)...');
    try {
      const user = process.env.SMTP_USER || TO_EMAIL;
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass: smtpPass }
      });
      const info = await transporter.sendMail({
        from: `"Al Rahma Website" <${user}>`,
        to: TO_EMAIL,
        subject: testPayload.subject,
        html: testPayload.html
      });
      console.log('SUCCESS! Email sent via SMTP. Message ID:', info.messageId);
      return;
    } catch (err) {
      console.error('SMTP delivery failed:', err.message);
    }
  }

  console.log('\n[Notice] No active credentials found in .env or .env.local yet.');
  console.log('To send live emails to ' + TO_EMAIL + ', set either:');
  console.log('  1. RESEND_API_KEY="re_..." in .env.local or Netlify environment variables');
  console.log('  OR');
  console.log('  2. SMTP_PASS="your-16-char-gmail-app-password" in .env.local or Netlify');
}

run();
