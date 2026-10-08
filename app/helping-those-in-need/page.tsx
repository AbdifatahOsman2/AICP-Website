import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Helping Those in Need | Al Rahma Islamic Center of Phoenix',
    description: 'Islam calls us to give — of our time, wealth, and knowledge. Discover the profound spiritual rewards of serving those in need, and join Al Rahma\'s volunteer community.',
};

export default function HelpingThoseInNeedPage() {
    return (
        <>
            <style>{`
                .blog-hero {
                    position: relative;
                    height: 60vh;
                    min-height: 420px;
                    display: flex;
                    align-items: flex-end;
                    overflow: hidden;
                }
                .blog-hero img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center top;
                }
                .blog-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(5,20,10,0.95) 0%, rgba(5,20,10,0.5) 50%, rgba(5,20,10,0.1) 100%);
                }
                .blog-hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 3rem 2rem;
                    max-width: 860px;
                    margin: 0 auto;
                    width: 100%;
                }
                .blog-tag {
                    display: inline-block;
                    background: rgba(80,200,130,0.15);
                    border: 1px solid rgba(80,200,130,0.3);
                    color: #80e8a8;
                    font-size: 0.75rem;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    padding: 0.35rem 1rem;
                    border-radius: 100px;
                    margin-bottom: 1rem;
                }
                .blog-hero-title {
                    font-family: 'Lato', sans-serif;
                    font-size: clamp(2rem, 5vw, 3.2rem);
                    font-weight: 900;
                    color: #ffffff;
                    line-height: 1.15;
                    margin: 0 0 0.75rem;
                }
                .blog-hero-subtitle {
                    color: rgba(180, 240, 200, 0.85);
                    font-size: 1.05rem;
                    font-style: italic;
                }
                .blog-body {
                    background: #060f0a;
                    min-height: 100vh;
                }
                .blog-container {
                    max-width: 780px;
                    margin: 0 auto;
                    padding: 4rem 2rem 6rem;
                }
                .blog-section {
                    margin-bottom: 3.5rem;
                }
                .blog-section h2 {
                    font-family: 'Lato', sans-serif;
                    font-size: 1.55rem;
                    font-weight: 700;
                    color: #e0f5ea;
                    margin-bottom: 1.1rem;
                    padding-bottom: 0.6rem;
                    border-bottom: 1px solid rgba(80,200,130,0.18);
                }
                .blog-section p {
                    color: rgba(190, 235, 210, 0.82);
                    font-size: 1.05rem;
                    line-height: 1.85;
                    margin-bottom: 1.2rem;
                }
                .quran-block {
                    background: linear-gradient(135deg, rgba(10,40,20,0.8) 0%, rgba(5,25,12,0.95) 100%);
                    border: 1px solid rgba(80,200,130,0.2);
                    border-left: 4px solid #50c882;
                    border-radius: 16px;
                    padding: 2.5rem 2rem;
                    margin: 3rem 0;
                    text-align: center;
                }
                .quran-arabic {
                    font-size: clamp(1.6rem, 4vw, 2.2rem);
                    color: #b0f0cc;
                    line-height: 2;
                    direction: rtl;
                    font-family: 'Amiri', 'Traditional Arabic', serif;
                    margin-bottom: 1.2rem;
                    letter-spacing: 0.02em;
                }
                .quran-translation {
                    color: rgba(160, 230, 190, 0.75);
                    font-style: italic;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 0.5rem;
                }
                .quran-ref {
                    display: inline-block;
                    background: rgba(80,200,130,0.12);
                    color: #60d890;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    padding: 0.25rem 0.85rem;
                    border-radius: 100px;
                    margin-top: 0.4rem;
                }
                .hadith-block {
                    background: linear-gradient(135deg, rgba(10,30,60,0.7) 0%, rgba(5,15,40,0.9) 100%);
                    border: 1px solid rgba(120,160,255,0.2);
                    border-left: 4px solid #6a8fff;
                    border-radius: 16px;
                    padding: 2rem 2rem;
                    margin: 2.5rem 0;
                }
                .hadith-block p {
                    color: rgba(180, 205, 255, 0.85) !important;
                    font-style: italic;
                    font-size: 1rem;
                    line-height: 1.8;
                    margin-bottom: 0.5rem !important;
                }
                .hadith-ref {
                    color: #8aabff;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                }
                .star-divider {
                    text-align: center;
                    color: rgba(80,200,130,0.35);
                    font-size: 1.2rem;
                    letter-spacing: 0.8rem;
                    margin: 3rem 0;
                }
                .giving-pillars {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.2rem;
                    margin: 2rem 0;
                }
                .pillar-card {
                    background: rgba(15,40,22,0.6);
                    border: 1px solid rgba(80,200,130,0.15);
                    border-radius: 14px;
                    padding: 1.5rem;
                    text-align: center;
                }
                .pillar-icon {
                    font-size: 1.8rem;
                    margin-bottom: 0.6rem;
                    display: block;
                }
                .pillar-card h4 {
                    color: #80e8a8;
                    font-size: 0.95rem;
                    font-weight: 700;
                    margin-bottom: 0.4rem;
                }
                .pillar-card p {
                    color: rgba(160,220,180,0.7) !important;
                    font-size: 0.85rem !important;
                    line-height: 1.5 !important;
                    margin: 0 !important;
                }
                .cta-block {
                    background: linear-gradient(135deg, rgba(10,50,25,0.7), rgba(5,25,12,0.95));
                    border: 1px solid rgba(80,200,130,0.25);
                    border-radius: 20px;
                    padding: 2.5rem;
                    text-align: center;
                    margin-top: 4rem;
                }
                .cta-block h3 {
                    font-family: 'Lato', sans-serif;
                    color: #e0f5ea;
                    font-size: 1.4rem;
                    margin-bottom: 0.75rem;
                }
                .cta-block p {
                    color: rgba(180,235,200,0.7);
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }
                .btn-blog {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #1a8f45, #50c882);
                    color: #fff;
                    font-weight: 700;
                    font-size: 0.9rem;
                    padding: 0.85rem 2rem;
                    border-radius: 100px;
                    text-decoration: none;
                    transition: transform 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.03em;
                }
                .btn-blog:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(50,200,100,0.3);
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: rgba(140,210,170,0.7);
                    text-decoration: none;
                    font-size: 0.88rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    margin-bottom: 3rem;
                    transition: color 0.2s;
                }
                .back-link:hover { color: #80e8a8; }
                @media (max-width: 600px) {
                    .blog-container { padding: 2.5rem 1.2rem 4rem; }
                    .quran-block, .hadith-block { padding: 1.5rem 1.2rem; }
                    .giving-pillars { grid-template-columns: 1fr; }
                }
            `}</style>

            {/* Hero */}
            <div className="blog-hero">
                <img src="/HelpThoseInNeed.webp" alt="Helping Those in Need" />
                <div className="blog-hero-overlay" />
                <div className="blog-hero-content">
                    <span className="blog-tag">♡ Community</span>
                    <h1 className="blog-hero-title">Helping Those in Need</h1>
                    <p className="blog-hero-subtitle">The blessings of giving — in wealth, in time, and in spirit</p>
                </div>
            </div>

            {/* Body */}
            <div className="blog-body">
                <div className="blog-container">

                    <Link href="/" className="back-link">
                        <i className="fas fa-arrow-left" /> Back to Home
                    </Link>

                    {/* Intro */}
                    <div className="blog-section">
                        <p>
                            Allah blessed you — perhaps with money, perhaps with health, perhaps with a kind heart, perhaps with knowledge. And with every blessing comes a question that Islam answers clearly: <em>what will you do with it?</em>
                        </p>
                        <p>
                            Giving is not charity in Islam. It is a pillar of character. It is a sign of gratitude. It is a protection against the love of this world consuming our hearts. And it is one of the most direct paths to the mercy of Allah Most High.
                        </p>
                    </div>

                    <div className="star-divider">♡ ♡ ♡</div>

                    {/* Quran 1 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            لَن تَنَالُوا۟ ٱلْبِرَّ حَتَّىٰ تُنفِقُوا۟ مِمَّا تُحِبُّونَ ۚ وَمَا تُنفِقُوا۟ مِن شَىْءٍ فَإِنَّ ٱللَّهَ بِهِۦ عَلِيمٌ
                        </div>
                        <p className="quran-translation">
                            "Never will you attain the good until you spend from that which you love. And whatever you spend — indeed, Allah is Knowing of it."
                        </p>
                        <span className="quran-ref">Surah Aal-Imran — 3:92</span>
                    </div>

                    {/* Islam & Giving */}
                    <div className="blog-section">
                        <h2>Islam's Vision of Generosity</h2>
                        <p>
                            Islam does not just encourage giving — it makes it one of the defining traits of a believer. The Quran pairs salah (prayer) with zakat (giving) more than any other two acts of worship, showing us that connecting with Allah and connecting with people are inseparable.
                        </p>
                        <p>
                            In the time of the Prophet ﷺ, the companions competed in giving. They gave their best dates, their finest garments, their properties. They understood that what they gave, they truly kept — because it was recorded with Allah. What they held back, they truly lost — because the world was always temporary.
                        </p>

                        <div className="giving-pillars">
                            <div className="pillar-card">
                                <span className="pillar-icon">💰</span>
                                <h4>Give Wealth</h4>
                                <p>Zakat, Sadaqah, supporting the masjid and those in hardship</p>
                            </div>
                            <div className="pillar-card">
                                <span className="pillar-icon">⏰</span>
                                <h4>Give Time</h4>
                                <p>Volunteer in your community, visit the sick, help the elderly</p>
                            </div>
                            <div className="pillar-card">
                                <span className="pillar-icon">📚</span>
                                <h4>Give Knowledge</h4>
                                <p>Teach what you know, mentor the youth, share beneficial reminders</p>
                            </div>
                        </div>
                    </div>

                    <div className="star-divider">♡ ♡ ♡</div>

                    {/* Quran 2 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            مَّثَلُ ٱلَّذِينَ يُنفِقُونَ أَمْوَٰلَهُمْ فِى سَبِيلِ ٱللَّهِ كَمَثَلِ حَبَّةٍ أَنۢبَتَتْ سَبْعَ سَنَابِلَ فِى كُلِّ سُنۢبُلَةٍ مِّا۟ئَةُ حَبَّةٍ
                        </div>
                        <p className="quran-translation">
                            "The example of those who spend their wealth in the way of Allah is like a seed that sprouts seven ears, in each ear is one hundred grains."
                        </p>
                        <span className="quran-ref">Surah Al-Baqarah — 2:261</span>
                    </div>

                    {/* The Best of People */}
                    <div className="blog-section">
                        <h2>The Best of People</h2>
                        <p>
                            The Prophet Muhammad ﷺ defined excellence not by lineage, not by wealth, not by position — but by benefit to others.
                        </p>

                        <div className="hadith-block">
                            <p>
                                "The best of people are those who are most beneficial to people."
                            </p>
                            <span className="hadith-ref">— Al-Mu'jam Al-Awsat by al-Tabarani | Classified as Hasan by al-Albani</span>
                        </div>

                        <p>
                            This hadith is a compass. Whenever you wonder what to do with your energy, your skills, your resources — return to this. The best version of you is the one who helps the most people. A smile. A meal. A ride to the masjid. A hand extended to someone falling. These are not small acts. In the scale of Allah, they may outweigh years of private worship.
                        </p>
                    </div>

                    <div className="star-divider">♡ ♡ ♡</div>

                    {/* Quran 3 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            وَمَا تُنفِقُوا۟ مِنْ خَيْرٍ فَلِأَنفُسِكُمْ ۚ وَمَا تُنفِقُونَ إِلَّا ٱبْتِغَآءَ وَجْهِ ٱللَّهِ
                        </div>
                        <p className="quran-translation">
                            "And whatever good you spend is for yourselves, and you do not spend except seeking the face of Allah."
                        </p>
                        <span className="quran-ref">Surah Al-Baqarah — 2:272</span>
                    </div>

                    {/* Giving Does Not Decrease */}
                    <div className="blog-section">
                        <h2>Giving Does Not Decrease Your Wealth</h2>
                        <p>
                            One of the most counterintuitive truths of our deen: sadaqah does not make you poorer. The Prophet ﷺ was explicit and repeated it in multiple ahadith. Giving opens rizq. It brings barakah into what remains. The hand that gives is always fuller than the one that holds back.
                        </p>

                        <div className="hadith-block">
                            <p>
                                "Charity does not decrease wealth. No one forgives another, but Allah increases his honor. And no one humbles himself for the sake of Allah, but Allah raises his status."
                            </p>
                            <span className="hadith-ref">— Sahih Muslim 2588</span>
                        </div>

                        <p>
                            This is not a promise from a human. This is a promise from Allah — the One who owns everything, who can give what He wills without any of it diminishing Him. Trust His promise. Give generously. Give regularly. Give even when it feels like you cannot afford to — because that is the very moment giving becomes most powerful.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="cta-block">
                        <h3>🤝 Serve With Al Rahma</h3>
                        <p>
                            Our community has ongoing volunteer opportunities — from food drives and school programs to masjid maintenance and youth mentorship. Every pair of hands counts. Join us and be among the best of people.
                        </p>
                        <Link href="/volunteer" className="btn-blog">
                            Volunteer With Us <i className="fas fa-arrow-right" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
