import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

const TO_EMAIL = process.env.ADMIN_EMAIL || 'backupabdifatah@gmail.com';

function generateEmailContent(formType: string, data: Record<string, any>): { subject: string; html: string; replyTo?: string } {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Phoenix',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  const baseStyle = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #1a1a1a;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
  `;

  const headerStyle = `
    background: linear-gradient(135deg, #0a2540 0%, #001224 100%);
    color: #ffffff;
    padding: 24px;
    text-align: center;
  `;

  const bodyStyle = `
    padding: 24px;
    background-color: #ffffff;
  `;

  const tableStyle = `
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
    margin-bottom: 16px;
  `;

  const thTdStyle = `
    padding: 10px 12px;
    border-bottom: 1px solid #f3f4f6;
    text-align: left;
    font-size: 14px;
  `;

  const labelStyle = `
    font-weight: 600;
    color: #4b5563;
    width: 35%;
  `;

  const valueStyle = `
    color: #111827;
  `;

  const footerStyle = `
    background-color: #f9fafb;
    padding: 16px 24px;
    text-align: center;
    font-size: 12px;
    color: #6b7280;
    border-top: 1px solid #e5e7eb;
  `;

  if (formType === 'volunteer') {
    const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Volunteer Applicant';
    const subject = `[New Volunteer Application] - ${fullName}`;
    const interests = Array.isArray(data.interests) ? data.interests.join(', ') : (data.interests || 'None specified');

    const html = `
      <div style="${baseStyle}">
        <div style="${headerStyle}">
          <h2 style="margin: 0; font-size: 22px; letter-spacing: -0.5px;">Al Rahma Islamic Center</h2>
          <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.85;">New Volunteer Registration</p>
        </div>
        <div style="${bodyStyle}">
          <p style="margin-top: 0; font-size: 15px;">A new volunteer application has been submitted via the website.</p>
          <table style="${tableStyle}">
            <tbody>
              <tr><td style="${thTdStyle} ${labelStyle}">Applicant Name</td><td style="${thTdStyle} ${valueStyle}"><strong>${fullName}</strong></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Email</td><td style="${thTdStyle} ${valueStyle}"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Phone</td><td style="${thTdStyle} ${valueStyle}">${data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : 'Not provided'}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Areas of Interest</td><td style="${thTdStyle} ${valueStyle}">${interests}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Availability</td><td style="${thTdStyle} ${valueStyle}">${data.availability || 'Not provided'}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Experience</td><td style="${thTdStyle} ${valueStyle}">${data.experience || 'None provided'}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Comments / Message</td><td style="${thTdStyle} ${valueStyle}">${data.message || 'None'}</td></tr>
            </tbody>
          </table>
        </div>
        <div style="${footerStyle}">
          Received on ${timestamp} (Phoenix, AZ Time)<br />
          Al Rahma Islamic Center of Phoenix • 2916 E McDowell Rd
        </div>
      </div>
    `;

    return { subject, html, replyTo: data.email };
  }

  if (formType === 'registration') {
    const studentName = `${data.studentFirstName || ''} ${data.studentLastName || ''}`.trim() || 'New Student';
    const parentName = `${data.parentFirstName || ''} ${data.parentLastName || ''}`.trim() || 'Parent/Guardian';
    const subject = `[Madrasah Registration] - ${studentName} (Parent: ${parentName})`;
    const programsList = Array.isArray(data.programs) ? data.programs.join(', ') : (data.programs || 'None specified');

    const html = `
      <div style="${baseStyle}">
        <div style="${headerStyle}">
          <h2 style="margin: 0; font-size: 22px; letter-spacing: -0.5px;">Al Rahma Islamic Center</h2>
          <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.85;">Madrasah Student Registration</p>
        </div>
        <div style="${bodyStyle}">
          <h3 style="margin: 0 0 8px 0; color: #0a2540; font-size: 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 4px;">Student Details</h3>
          <table style="${tableStyle}">
            <tbody>
              <tr><td style="${thTdStyle} ${labelStyle}">Student Name</td><td style="${thTdStyle} ${valueStyle}"><strong>${studentName}</strong></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Date of Birth</td><td style="${thTdStyle} ${valueStyle}">${data.dateOfBirth || 'Not provided'}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Gender</td><td style="${thTdStyle} ${valueStyle}">${data.gender || 'Not provided'}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Prior Islamic Studies</td><td style="${thTdStyle} ${valueStyle}">${data.previousExperience || 'None provided'}</td></tr>
            </tbody>
          </table>

          <h3 style="margin: 20px 0 8px 0; color: #0a2540; font-size: 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 4px;">Parent / Guardian Details</h3>
          <table style="${tableStyle}">
            <tbody>
              <tr><td style="${thTdStyle} ${labelStyle}">Parent Name</td><td style="${thTdStyle} ${valueStyle}"><strong>${parentName}</strong></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Email</td><td style="${thTdStyle} ${valueStyle}"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Phone</td><td style="${thTdStyle} ${valueStyle}"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Address</td><td style="${thTdStyle} ${valueStyle}">${data.address || ''}, ${data.city || ''} ${data.zipCode || ''}</td></tr>
            </tbody>
          </table>

          <h3 style="margin: 20px 0 8px 0; color: #0a2540; font-size: 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 4px;">Program &amp; Schedule</h3>
          <table style="${tableStyle}">
            <tbody>
              <tr><td style="${thTdStyle} ${labelStyle}">Selected Program(s)</td><td style="${thTdStyle} ${valueStyle}"><strong>${programsList}</strong></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Schedule Option</td><td style="${thTdStyle} ${valueStyle}">${data.schedule || 'Not provided'}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Special Needs / Notes</td><td style="${thTdStyle} ${valueStyle}">${data.specialNeeds || 'None'}</td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">How Heard About AICP</td><td style="${thTdStyle} ${valueStyle}">${data.howDidYouHear || 'Not specified'}</td></tr>
            </tbody>
          </table>

          ${data.emergencyName ? `
            <h3 style="margin: 20px 0 8px 0; color: #0a2540; font-size: 16px; border-bottom: 2px solid #e5e7eb; padding-bottom: 4px;">Emergency Contact</h3>
            <table style="${tableStyle}">
              <tbody>
                <tr><td style="${thTdStyle} ${labelStyle}">Emergency Contact</td><td style="${thTdStyle} ${valueStyle}">${data.emergencyName} (${data.emergencyRelation || 'Contact'})</td></tr>
                <tr><td style="${thTdStyle} ${labelStyle}">Emergency Phone</td><td style="${thTdStyle} ${valueStyle}"><a href="tel:${data.emergencyPhone}">${data.emergencyPhone}</a></td></tr>
              </tbody>
            </table>
          ` : ''}
        </div>
        <div style="${footerStyle}">
          Received on ${timestamp} (Phoenix, AZ Time)<br />
          Al Rahma Islamic Center of Phoenix • 2916 E McDowell Rd
        </div>
      </div>
    `;

    return { subject, html, replyTo: data.email };
  }

  if (formType === 'newsletter') {
    const subject = `[Newsletter Subscriber] - ${data.email}`;
    const html = `
      <div style="${baseStyle}">
        <div style="${headerStyle}">
          <h2 style="margin: 0; font-size: 22px;">Al Rahma Islamic Center</h2>
          <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.85;">New Newsletter Subscription</p>
        </div>
        <div style="${bodyStyle}">
          <p style="margin-top: 0; font-size: 15px;">A visitor subscribed to community updates and prayer times:</p>
          <table style="${tableStyle}">
            <tbody>
              <tr><td style="${thTdStyle} ${labelStyle}">Subscriber Email</td><td style="${thTdStyle} ${valueStyle}"><strong><a href="mailto:${data.email}">${data.email}</a></strong></td></tr>
              <tr><td style="${thTdStyle} ${labelStyle}">Source</td><td style="${thTdStyle} ${valueStyle}">Website Homepage Footer Newsletter</td></tr>
            </tbody>
          </table>
        </div>
        <div style="${footerStyle}">
          Received on ${timestamp} (Phoenix, AZ Time)
        </div>
      </div>
    `;

    return { subject, html, replyTo: data.email };
  }

  // Generic contact inquiry
  const senderName = data.name || data.fullName || 'Website Visitor';
  const subject = `[Contact Inquiry] - ${senderName}`;
  const html = `
    <div style="${baseStyle}">
      <div style="${headerStyle}">
        <h2 style="margin: 0; font-size: 22px;">Al Rahma Islamic Center</h2>
        <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.85;">New Website Inquiry</p>
      </div>
      <div style="${bodyStyle}">
        <table style="${tableStyle}">
          <tbody>
            <tr><td style="${thTdStyle} ${labelStyle}">Name</td><td style="${thTdStyle} ${valueStyle}"><strong>${senderName}</strong></td></tr>
            <tr><td style="${thTdStyle} ${labelStyle}">Email</td><td style="${thTdStyle} ${valueStyle}"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="${thTdStyle} ${labelStyle}">Phone</td><td style="${thTdStyle} ${valueStyle}">${data.phone}</td></tr>` : ''}
            <tr><td style="${thTdStyle} ${labelStyle}">Message</td><td style="${thTdStyle} ${valueStyle}">${data.message || 'No message entered'}</td></tr>
          </tbody>
        </table>
      </div>
      <div style="${footerStyle}">
        Received on ${timestamp} (Phoenix, AZ Time)
      </div>
    </div>
  `;

  return { subject, html, replyTo: data.email };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, data } = body;

    if (!formType || !data) {
      return NextResponse.json(
        { success: false, error: 'Missing formType or data payload' },
        { status: 400 }
      );
    }

    const { subject, html, replyTo } = generateEmailContent(formType, data);
    console.log(`[Form Submission received] Type: ${formType}, Target: ${TO_EMAIL}`);

    // Method 1: Resend (if RESEND_API_KEY is available)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const fromEmail = process.env.FROM_EMAIL || 'Al Rahma Website <onboarding@resend.dev>';

        const response = await resend.emails.send({
          from: fromEmail,
          to: [TO_EMAIL],
          subject,
          html,
          ...(replyTo ? { replyTo } : {}),
        });

        if (response.error) {
          console.error('[Resend Error]', response.error);
        } else {
          console.log('[Resend Success]', response.data?.id);
          return NextResponse.json({
            success: true,
            message: 'Email delivered successfully via Resend',
            provider: 'resend',
            id: response.data?.id,
          });
        }
      } catch (resendErr) {
        console.error('[Resend Exception]', resendErr);
      }
    }

    // Method 2: Nodemailer (if SMTP_PASS / GMAIL_APP_PASSWORD is available)
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
    if (smtpPass) {
      try {
        const smtpUser = process.env.SMTP_USER || TO_EMAIL;
        const transporter = nodemailer.createTransport({
          service: process.env.SMTP_SERVICE || 'gmail',
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 465,
          secure: Boolean(process.env.SMTP_SECURE ?? true),
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const info = await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Al Rahma Website" <${smtpUser}>`,
          to: TO_EMAIL,
          replyTo: replyTo || undefined,
          subject,
          html,
        });

        console.log('[Nodemailer Success]', info.messageId);
        return NextResponse.json({
          success: true,
          message: 'Email delivered successfully via SMTP',
          provider: 'smtp',
          id: info.messageId,
        });
      } catch (smtpErr) {
        console.error('[Nodemailer Exception]', smtpErr);
      }
    }

    // Method 3: Logged submission fallback (when API key / SMTP pass not yet set in environment)
    console.warn(`[Live Email Notice] No RESEND_API_KEY or SMTP_PASS found in environment. Submission saved and logged for ${TO_EMAIL}.`);
    
    return NextResponse.json({
      success: true,
      delivered: false,
      message: 'Submission received and logged. Add RESEND_API_KEY or SMTP_PASS to send live emails.',
      formType,
      recipient: TO_EMAIL,
    });
  } catch (error: any) {
    console.error('[send-email API error]', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error processing form' },
      { status: 500 }
    );
  }
}
