import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'The Blessed Hour of the Night | Al Rahma Islamic Center of Phoenix',
    description: 'Discover the profound blessings of the last third of the night — when Allah descends and answers every sincere dua. A spiritual reflection from Al Rahma Islamic Center.',
};

export default function BlessedHourPage() {
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
                    background: linear-gradient(to top, rgba(5,10,30,0.95) 0%, rgba(5,10,30,0.5) 50%, rgba(5,10,30,0.15) 100%);
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
                    background: rgba(120, 160, 255, 0.18);
                    border: 1px solid rgba(120, 160, 255, 0.35);
                    color: #a0bcff;
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
                    color: rgba(200, 215, 255, 0.85);
                    font-size: 1.05rem;
                    font-style: italic;
                }
                .blog-body {
                    background: #080f24;
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
                    color: #e8eeff;
                    margin-bottom: 1.1rem;
                    padding-bottom: 0.6rem;
                    border-bottom: 1px solid rgba(120,160,255,0.18);
                }
                .blog-section p {
                    color: rgba(200, 215, 255, 0.82);
                    font-size: 1.05rem;
                    line-height: 1.85;
                    margin-bottom: 1.2rem;
                }
                .quran-block {
                    background: linear-gradient(135deg, rgba(20,30,80,0.7) 0%, rgba(10,20,55,0.9) 100%);
                    border: 1px solid rgba(120,160,255,0.22);
                    border-left: 4px solid #6a8fff;
                    border-radius: 16px;
                    padding: 2.5rem 2rem;
                    margin: 3rem 0;
                    text-align: center;
                }
                .quran-arabic {
                    font-size: clamp(1.6rem, 4vw, 2.2rem);
                    color: #c8d8ff;
                    line-height: 2;
                    direction: rtl;
                    font-family: 'Amiri', 'Traditional Arabic', serif;
                    margin-bottom: 1.2rem;
                    letter-spacing: 0.02em;
                }
                .quran-translation {
                    color: rgba(180, 200, 255, 0.75);
                    font-style: italic;
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 0.5rem;
                }
                .quran-ref {
                    display: inline-block;
                    background: rgba(100, 140, 255, 0.15);
                    color: #8aabff;
                    font-size: 0.78rem;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    padding: 0.25rem 0.85rem;
                    border-radius: 100px;
                    margin-top: 0.4rem;
                }
                .hadith-block {
                    background: linear-gradient(135deg, rgba(15,35,25,0.8) 0%, rgba(8,20,15,0.9) 100%);
                    border: 1px solid rgba(80,200,130,0.2);
                    border-left: 4px solid #50c882;
                    border-radius: 16px;
                    padding: 2rem 2rem;
                    margin: 2.5rem 0;
                }
                .hadith-block p {
                    color: rgba(180, 240, 200, 0.85) !important;
                    font-style: italic;
                    font-size: 1rem;
                    line-height: 1.8;
                    margin-bottom: 0.5rem !important;
                }
                .hadith-ref {
                    color: #50c882;
                    font-size: 0.8rem;
                    font-weight: 600;
                    letter-spacing: 0.06em;
                }
                .star-divider {
                    text-align: center;
                    color: rgba(120,160,255,0.4);
                    font-size: 1.2rem;
                    letter-spacing: 0.8rem;
                    margin: 3rem 0;
                }
                .cta-block {
                    background: linear-gradient(135deg, rgba(20,30,90,0.6), rgba(10,15,50,0.9));
                    border: 1px solid rgba(120,160,255,0.25);
                    border-radius: 20px;
                    padding: 2.5rem;
                    text-align: center;
                    margin-top: 4rem;
                }
                .cta-block h3 {
                    font-family: 'Lato', sans-serif;
                    color: #e8eeff;
                    font-size: 1.4rem;
                    margin-bottom: 0.75rem;
                }
                .cta-block p {
                    color: rgba(200,215,255,0.7);
                    font-size: 0.95rem;
                    line-height: 1.7;
                    margin-bottom: 1.5rem;
                }
                .btn-blog {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #3a5fff, #6a8fff);
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
                    box-shadow: 0 8px 30px rgba(80,120,255,0.35);
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.4rem;
                    color: rgba(160,180,255,0.7);
                    text-decoration: none;
                    font-size: 0.88rem;
                    font-weight: 600;
                    letter-spacing: 0.04em;
                    margin-bottom: 3rem;
                    transition: color 0.2s;
                }
                .back-link:hover { color: #a0bcff; }
                @media (max-width: 600px) {
                    .blog-container { padding: 2.5rem 1.2rem 4rem; }
                    .quran-block, .hadith-block { padding: 1.5rem 1.2rem; }
                }
            `}</style>

            {/* Hero */}
            <div className="blog-hero">
                <img src="/TheBlessedHourOfTheNight.webp" alt="The Blessed Hour of the Night" />
                <div className="blog-hero-overlay" />
                <div className="blog-hero-content">
                    <span className="blog-tag">✦ Night Prayer</span>
                    <h1 className="blog-hero-title">The Blessed Hour of the Night</h1>
                    <p className="blog-hero-subtitle">When the heavens open and every sincere heart is answered</p>
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
                            Every night, in the stillness before dawn, Allah — Most High, Most Merciful — draws near to His creation in a way that befits His Majesty. He calls out to those who are awake, who remember Him, who turn to Him with broken hearts and sincere words. This is not a metaphor. This is a promise from the One who does not break promises.
                        </p>
                        <p>
                            The last third of the night is among the most sacred times in Islam — a window of divine mercy, forgiveness, and answered prayers that comes to us every single night without exception. Yet most of us sleep through it, unaware of what is being offered.
                        </p>
                    </div>

                    <div className="star-divider">✦ ✦ ✦</div>

                    {/* Quran 1 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            وَمِنَ ٱلَّيْلِ فَتَهَجَّدْ بِهِۦ نَافِلَةً لَّكَ عَسَىٰٓ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا
                        </div>
                        <p className="quran-translation">
                            "And from the night, pray with it as additional worship for you; perhaps your Lord will resurrect you to a praised station."
                        </p>
                        <span className="quran-ref">Surah Al-Isra — 17:79</span>
                    </div>

                    {/* Allah Descends */}
                    <div className="blog-section">
                        <h2>Allah Descends in the Last Third of the Night</h2>
                        <p>
                            The Prophet Muhammad ﷺ informed us of something magnificent — that Allah the Almighty descends to the lowest heaven in the last third of every night. This is one of the most moving descriptions in all of hadith literature, and it should shake us from our sleep.
                        </p>

                        <div className="hadith-block">
                            <p>
                                "Our Lord, the Blessed and the Exalted, descends every night to the lowest heaven when the last third of the night remains, and says: 'Who calls upon Me, that I may answer him? Who asks of Me, that I may give to him? Who seeks My forgiveness, that I may forgive him?'"
                            </p>
                            <span className="hadith-ref">— Sahih al-Bukhari 1145 | Sahih Muslim 758</span>
                        </div>

                        <p>
                            Allah does not just wait for us to come to Him — He comes close to us. He calls out to us. He asks: <em>who needs Me tonight?</em> He is looking for those who will rise from their warm beds and stand before Him in the dark. This is not a small thing. This is the Lord of all creation personally inviting you.
                        </p>
                        <p>
                            No translator can fully capture what it means that the Creator of the heavens and the earth — the One who sustains every atom in existence — descends and asks: <em>Who will ask Me so that I may give?</em>
                        </p>
                    </div>

                    <div className="star-divider">✦ ✦ ✦</div>

                    {/* Quran 2 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            وَبِٱلْأَسْحَارِ هُمْ يَسْتَغْفِرُونَ
                        </div>
                        <p className="quran-translation">
                            "And in the hours before dawn, they would ask forgiveness."
                        </p>
                        <span className="quran-ref">Surah Adh-Dhariyat — 51:18</span>
                    </div>

                    {/* Dua & Forgiveness */}
                    <div className="blog-section">
                        <h2>Every Dua Is Answered</h2>
                        <p>
                            Many of us carry duas in our hearts for years — for healing, for provision, for guidance, for loved ones in hardship. We make these duas and sometimes wonder if they are heard. The answer is absolute: yes, every sincere dua reaches Allah. But the last third of the night is when He makes a special proclamation of answering.
                        </p>
                        <p>
                            This is the time to ask for the impossible. The job you need. The marriage that has been delayed. The child who has strayed. The illness that doctors cannot cure. The peace that no therapy can provide. Ask Allah in those hours — with tears, with humility, with certainty that He hears.
                        </p>

                        <div className="hadith-block">
                            <p>
                                "The closest that a servant is to his Lord is during the last part of the night, so if you are able to be among those who remember Allah at that time, then do so."
                            </p>
                            <span className="hadith-ref">— Sunan at-Tirmidhi 3579 | Authenticated by al-Albani</span>
                        </div>

                        <p>
                            Closeness to Allah — this is what the soul craves above all else. Not money, not status, not comfort. The soul was made for its Creator, and the last third of the night is where that closeness is found. The Prophet ﷺ did not say this is one option among many. He said if you are able, do not miss it.
                        </p>
                    </div>

                    <div className="star-divider">✦ ✦ ✦</div>

                    {/* Quran 3 */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            أَمَّنْ هُوَ قَٰنِتٌ ءَانَآءَ ٱلَّيْلِ سَاجِدًا وَقَآئِمًا يَحْذَرُ ٱلْـَٔاخِرَةَ وَيَرْجُوا۟ رَحْمَةَ رَبِّهِۦ
                        </div>
                        <p className="quran-translation">
                            "Is one who is devoutly obedient during periods of the night, prostrating and standing in prayer, fearing the Hereafter and hoping for the mercy of his Lord, [like one who does not]?"
                        </p>
                        <span className="quran-ref">Surah Az-Zumar — 39:9</span>
                    </div>

                    {/* Practical */}
                    <div className="blog-section">
                        <h2>How to Begin — Tonight</h2>
                        <p>
                            You do not need to be a scholar. You do not need to pray a hundred rak'ahs. Begin with two. Set your alarm 30 minutes before Fajr. Make wudu. Pray two rak'ahs of Tahajjud. Then sit in silence and speak to Allah — in whatever language your heart knows. Tell Him everything. He already knows, but He wants to hear it from you.
                        </p>
                        <p>
                            Allah described the people of Jannah before they entered it: they used to sleep only a little of the night, and in the hours before dawn, they asked for His forgiveness. <em>They were consistent.</em> Not perfect — consistent.
                        </p>
                        <p>
                            Start with one night this week. Then two. Then make it a habit that you guard more than any other. Because when the doors of the night open, the most merciful of all the merciful is waiting — and He is waiting for you.
                        </p>
                    </div>

                    <div className="star-divider">✦ ✦ ✦</div>

                    {/* Closing Quran */}
                    <div className="quran-block">
                        <div className="quran-arabic">
                            وَقُل رَّبِّ ٱغْفِرْ وَٱرْحَمْ وَأَنتَ خَيْرُ ٱلرَّٰحِمِينَ
                        </div>
                        <p className="quran-translation">
                            "And say: My Lord, forgive and have mercy, and You are the best of the merciful."
                        </p>
                        <span className="quran-ref">Surah Al-Mu'minun — 23:118</span>
                    </div>

                    {/* CTA */}
                    <div className="cta-block">
                        <h3>🌙 Join Us for Qiyam Al-Layl</h3>
                        <p>
                            Al Rahma Islamic Center hosts night prayers and special programs throughout the year. Join our community in seeking Allah's mercy together.
                        </p>
                        <Link href="/prayer-times" className="btn-blog">
                            View Prayer Times <i className="fas fa-arrow-right" />
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}
