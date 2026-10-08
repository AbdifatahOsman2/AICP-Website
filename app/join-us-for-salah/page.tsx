import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Join Us for Salah | Al Rahma Islamic Center of Phoenix',
    description: 'Salah is the pillar of the deen. Come pray with the brothers at Al Rahma Islamic Center — five times a day, every day. View prayer times and join us.',
};

export default function JoinUsForSalahPage() {
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
                    object-position: center;
                }
                .blog-hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(15,8,2,0.97) 0%, rgba(15,8,2,0.55) 50%, rgba(15,8,2,0.1) 100%);
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
                    background: rgba(230,160,60,0.15);
                    border: 1px solid rgba(230,160,60,0.3);
                    color: #f5c878;
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
                    color: rgba(245, 220, 160, 0.85);
                    font-size: 1.05rem;
                    font-style: italic;
                }
                .blog-body {
                    background: #0a0704;
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
                    color: #fdf0d5;
                    margin-bottom: 1.1rem;
                    padding-bottom: 0.6rem;
                    border-bottom: 1px solid rgba(230,160,60,0.18);
                }
                .blog-section p {
                    color: rgba(240, 220, 175, 0.82);
                    font-size: 1.05rem;
                    line-height: 1.85;
                    margin-bottom: 1.2rem;
                }
                .quran-block {
                    background: linear-gradient(135deg, rgba(40,25,5,0.9) 0%, rgba(25,12,2,0.98) 100%);
                    border: 1px solid rgba(230,160,60,0.2);
                    border-left: 4px solid #e6a03c;
                    border-radius: 16px;
                    padding: 2.5rem 2rem;
                    margin: 3rem 0;
                    text-align: center;
                }
                .quran-arabic {
                    font-size: clamp(1.6rem, 4vw, 2.2rem);
                    color: #f5d898;
                    line-height: 2;
                    direction: rtl;
                    font-family: 'Amiri', 'Traditional Arabic', serif;
                    margin-bottom: 1.2rem;
                    letter-spacing: 0.02em;
                }
                .quran-translation {
                    color: rgba(240, 210, 150, 0.75);
                    font-style: italic;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 0.5rem;
                }
                .quran-ref {
                    display: inline-block;
                    background: rgba(230,160,60,0.12);
                    color: #e6a03c;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    padding: 0.25rem 0.85rem;
                    border-radius: 100px;
                    margin-top: 0.4rem;
                }
                .hadith-block {
                    background: linear-gradient(135deg, rgba(10,25,50,0.8) 0%, rgba(5,12,30,0.95) 100%);
                    border: 1px solid rgba(100,140,255,0.2);
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
                    color: rgba(230,160,60,0.4);
                    font-size: 1.2rem;
                    letter-spacing: 0.8rem;
                    margin: 3rem 0;
                }
                .prayer-times-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
                    gap: 1rem;
                    margin: 2rem 0;
                }
                .prayer-card {
                    background: rgba(40,25,5,0.6);
                    border: 1px solid rgba(230,160,60,0.15);
                    border-radius: 14px;
                    padding: 1.2rem 1rem;
                    text-align: center;
                }
                .prayer-icon {
                    font-size: 1.4rem;
                    margin-bottom: 0.4rem;
                    display: block;
                }
                .prayer-card h4 {
                    color: #f5c878;
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-bottom: 0.2rem;
                }
                .prayer-card p {
                    color: rgba(240,200,130,0.6) !important;
                    font-size: 0.78rem !important;
                    line-height: 1.4 !important;
                    margin: 0 !important;
                    font-style: italic;
                }
                .brotherhood-block {
                    background: linear-gradient(135deg, rgba(35,20,5,0.7), rgba(20,10,2,0.95));
                    border: 1px solid rgba(230,160,60,0.2);
                    border-radius: 16px;
                    padding: 2rem;
                    margin: 2rem 0;
                }
                .brotherhood-block ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .brotherhood-block li {
                    color: rgba(240,220,175,0.85);
                    font-size: 1rem;
                    line-height: 1.7;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid rgba(230,160,60,0.08);
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                }
                .brotherhood-block li:last-child { border-bottom: none; }
                .brotherhood-block li span { color: #e6a03c; font-weight: 700; flex-shrink: 0; }
                .cta-block {
                    background: linear-gradient(135deg, rgba(45,25,5,0.7), rgba(25,12,2,0.98));
                    border: 1px solid rgba(230,160,60,0.3);
                    border-radius: 20px;
                    padding: 2.5rem;
                    text-align: center;
                    margin-top: 4rem;
                }
                .cta-block h3 {
                    font-family: 'Lato', sans-serif;
                    color: #fdf0d5;
                    font-size: 1.4rem;
                    margin-bottom: 0.75rem;
                }
                .cta-block p {
                    color: rgba(240,215,155,0.7);
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }
                .btn-blog {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #b07020, #e6a03c);
                    color: #0a0704;
                    font-weight: 800;
                    font-size: 0.9rem;
                    padding: 0.85rem 2rem;
                    border-radius: 100px;
                    text-decoration: none;
                    transition: transform 0.2s, box-shadow 0.2s;
                    letter-spacing: 0.03em;
                }
                .btn-blog:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 30px rgba(200,130,30,0.35);
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: rgba(210,175,110,0.7);
                    text-decoration: none;
                    font-size: 0.88rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    margin-bottom: 3rem;
                    transition: color 0.2s;
                }
                .back-link:hover { color: #f5c878; }
                @media (max-width: 600px) {
                    .blog-container { padding: 2.5rem 1.2rem 4rem; }
                    .quran-block, .hadith-block { padding: 1.5rem 1.2rem; }
                    .prayer-times-grid { grid-template-columns: repeat(3, 1fr); }
                }
            `}</style>

            {/* Hero */}
            <div className="blog-hero">
                <img src="/JoinUsForSalah.webp" alt="Join Us for Salah" />
                <div className="blog-hero-overlay" />
                <div className="blog-hero-content">
                    <span className="blog-tag">🕌 Daily Prayers</span>
                    <h1 className="blog-hero-title">Join Us for Salah</h1>
                    <p className="blog-hero-subtitle">Five times a day, the call goes out — and the brothers of Al Rahma answer</p>
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
                            Five times every day, from before sunrise to deep into the night, the call to prayer echoes across Phoenix. The adhan does not ask how busy you are. It does not check your schedule or your mood. It calls — and the question is always the same: <em>will you answer?</em>
                        </p>
                        <p>
                            Salah is the pillar that holds the entire deen upright. The Prophet ﷺ said that the covenant between a man and his Lord is salah — and whoever abandons it has broken the covenant. But more than obligation, salah is a gift: five moments each day when the world stops and you stand before the One who created it all.
                        </p>
                    </div>

                    <div className="star-divider">☾ ☾ ☾</div>

                    {/* Quran 1 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            إِنَّ ٱلصَّلَوٰةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَٰبًا مَّوْقُوتًا
                        </div>
                        <p className="quran-translation">
                            "Indeed, prayer has been decreed upon the believers at specified times."
                        </p>
                        <span className="quran-ref">Surah An-Nisa — 4:103</span>
                    </div>

                    {/* The Five Prayers */}
                    <div className="blog-section">
                        <h2>The Five Daily Prayers</h2>
                        <p>
                            Each of the five prayers has its own character, its own time, its own place in the day. Together they form a rhythm that anchors the believer to his Lord from the moment he wakes until he sleeps.
                        </p>

                        <div className="prayer-times-grid">
                            <div className="prayer-card">
                                <span className="prayer-icon">🌅</span>
                                <h4>Fajr</h4>
                                <p>Before sunrise — begin each day with Allah</p>
                            </div>
                            <div className="prayer-card">
                                <span className="prayer-icon">☀️</span>
                                <h4>Dhuhr</h4>
                                <p>Midday — a pause at the peak of the day</p>
                            </div>
                            <div className="prayer-card">
                                <span className="prayer-icon">🌤️</span>
                                <h4>Asr</h4>
                                <p>Afternoon — the guarded prayer</p>
                            </div>
                            <div className="prayer-card">
                                <span className="prayer-icon">🌇</span>
                                <h4>Maghrib</h4>
                                <p>After sunset — gratitude for the day</p>
                            </div>
                            <div className="prayer-card">
                                <span className="prayer-icon">🌙</span>
                                <h4>Isha</h4>
                                <p>Night — the closing covenant</p>
                            </div>
                        </div>

                        <p>
                            Allah did not make the prayers random or burdensome. They are perfectly spaced through the day — a design that keeps the remembrance of Allah woven into every chapter of your waking hours. From the quiet dark of Fajr to the stillness of Isha, every prayer is a door back to Him.
                        </p>
                    </div>

                    <div className="star-divider">☾ ☾ ☾</div>

                    {/* Quran 2 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            حَٰفِظُوا۟ عَلَى ٱلصَّلَوَٰتِ وَٱلصَّلَوٰةِ ٱلْوُسْطَىٰ وَقُومُوا۟ لِلَّهِ قَٰنِتِينَ
                        </div>
                        <p className="quran-translation">
                            "Maintain with care the prayers and the middle prayer, and stand before Allah devoutly obedient."
                        </p>
                        <span className="quran-ref">Surah Al-Baqarah — 2:238</span>
                    </div>

                    {/* Jama'ah */}
                    <div className="blog-section">
                        <h2>The Power of Praying in Congregation</h2>
                        <p>
                            The reward for praying in congregation is not slightly better than praying alone. The Prophet ﷺ told us it is 27 times greater. Twenty-seven times. This is not a small multiplication — it is an extraordinary gift that Allah placed in the simple act of walking to the masjid and standing shoulder to shoulder with your brothers.
                        </p>

                        <div className="hadith-block">
                            <p>
                                "The prayer in congregation is twenty-seven times better than the prayer performed alone."
                            </p>
                            <span className="hadith-ref">— Sahih al-Bukhari 645 | Sahih Muslim 650</span>
                        </div>

                        <p>
                            But jama'ah is more than reward multiplication. It is community. It is brotherhood. It is standing in straight rows — equalizing the king and the pauper, the scholar and the student — all bowing to the same Lord. The masjid is not just a place of worship; it is a place where Muslim men become brothers.
                        </p>
                    </div>

                    <div className="star-divider">☾ ☾ ☾</div>

                    {/* Quran 3 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            إِنَّمَا يَعْمُرُ مَسَٰجِدَ ٱللَّهِ مَنْ ءَامَنَ بِٱللَّهِ وَٱلْيَوْمِ ٱلْـَٔاخِرِ وَأَقَامَ ٱلصَّلَوٰةَ
                        </div>
                        <p className="quran-translation">
                            "The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day, and establish prayer."
                        </p>
                        <span className="quran-ref">Surah At-Tawbah — 9:18</span>
                    </div>

                    {/* Reasons to Come */}
                    <div className="blog-section">
                        <h2>Why Come to Al Rahma?</h2>
                        <p>
                            Al Rahma Islamic Center is your masjid. Our doors open for every prayer, every day. Whether you are a regular or you have not stepped into a masjid in years — you are welcome here. No judgment. No questions. Just the adhān, the rows, and the mercy of Allah waiting for you.
                        </p>

                        <div className="brotherhood-block">
                            <ul>
                                <li><span>🕌</span> All five daily prayers held with congregation</li>
                                <li><span>🤲</span> Jumu'ah Khutbah every Friday — check times on our prayer page</li>
                                <li><span>👥</span> A welcoming brotherhood of men from all backgrounds</li>
                                <li><span>📍</span> Located at 2916 E McDowell Rd, Phoenix AZ 85008</li>
                                <li><span>🌙</span> Tarawih prayers during Ramadan and special night programs</li>
                            </ul>
                        </div>
                    </div>

                    {/* Closing hadith */}
                    <div className="hadith-block">
                        <p>
                            "The first thing that the servant will be held accountable for on the Day of Resurrection will be the prayer. If it is sound, then the rest of his deeds will be sound. And if it is corrupted, then the rest of his deeds will be corrupted."
                        </p>
                        <span className="hadith-ref">— Sunan at-Tirmidhi 413 | Al-Mundhiri: Sahih</span>
                    </div>

                    {/* CTA */}
                    <div className="cta-block">
                        <h3>🕌 Come Pray With Us Today</h3>
                        <p>
                            View today's prayer times for Al Rahma Islamic Center — accurate, real-time times for Phoenix, AZ. Don't miss Fajr. Don't miss Juma'ah. Don't miss the opportunity to stand before your Lord with your brothers.
                        </p>
                        <Link href="/prayer-times" className="btn-blog">
                            View Prayer Times <i className="fas fa-clock" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
