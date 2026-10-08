import React from 'react';
import type { Metadata } from 'next';
import { Header, Footer, StructuredData } from '@/components';
import '@/FAQ.css';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions (FAQ)',
    description:
        'Find answers to 120+ questions about Al Rahma Islamic Center of Phoenix (AICP) — daily prayer times, Jumu\'ah, Quran school, Arabic classes, zakat aid, marriage, janazah, and community services.',
    keywords:
        'al rahma faq, masjid phoenix faq, islamic center phoenix questions, prayer times phoenix, jummah prayer phoenix, arabic classes phoenix, zakat phoenix, muslim community phoenix faq',
    alternates: { canonical: 'https://masjidal-rahma.com/faq' },
    openGraph: {
        title: 'Frequently Asked Questions | Al Rahma Islamic Center of Phoenix',
        description:
            'Find answers to 120+ questions about prayer times, educational programs, community aid, and services at Al Rahma Islamic Center of Phoenix (AICP).',
        url: 'https://masjidal-rahma.com/faq',
        type: 'website',
    },
};

const MASJID_NAME = 'Al Rahma Islamic Center of Phoenix (AICP)';
const MASJID_SHORT = 'Al Rahma Islamic Center';
const MASJID_ADDRESS = '2916 E McDowell Rd, Unit 15, Phoenix, AZ 85008';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    icon: string;
    items: FAQItem[];
}

const faqData: FAQCategory[] = [
    {
        title: 'Prayer & Masjid Access',
        icon: 'fas fa-mosque',
        items: [
            {
                question: `Where is the masjid?`,
                answer: `${MASJID_NAME} is located at ${MASJID_ADDRESS}. The center is easily accessible from the I-10 and Loop 202 freeways and is situated in the heart of central Phoenix.`,
            },
            {
                question: `What time are the five daily prayers?`,
                answer: `${MASJID_SHORT} holds all five daily prayers (Fajr, Dhuhr, Asr, Maghrib, and Isha). Prayer times change daily based on the position of the sun. Visit the <a href="/prayer-times">Prayer Times page</a> for the current schedule.`,
            },
            {
                question: "What time is Jumu'ah (Friday prayer)?",
                answer: `${MASJID_SHORT} holds Jumu'ah prayer every Friday. Please check the <a href="/prayer-times">Prayer Times page</a> or our social media for the latest Khutbah start time.`,
            },
            {
                question: "Are there multiple Jumu'ah prayers?",
                answer: `Please contact ${MASJID_SHORT} directly at (602) 574-8750 or check our announcements for information on Jumu'ah prayer sessions and scheduling.`,
            },
            {
                question: `Is the masjid open for all five daily prayers?`,
                answer: `Yes, ${MASJID_SHORT} is open for all five daily prayers — Fajr, Dhuhr, Asr, Maghrib, and Isha — seven days a week. The community is welcome to pray in congregation at every salah.`,
            },
            {
                question: `Is there someone at the masjid for Fajr?`,
                answer: `Yes, ${MASJID_SHORT} is open for Fajr prayer daily. Community members gather for the early morning congregational prayer each day.`,
            },
            {
                question: `Can I pray there late at night?`,
                answer: `${MASJID_SHORT} is generally open from Fajr through Isha prayer. For late-night access outside of regular prayer hours, please contact the center at (602) 574-8750.`,
            },
            {
                question: `What are the Ramadan prayer times?`,
                answer: `During Ramadan, ${MASJID_SHORT} adjusts its schedule for Suhoor, Iftar, and Taraweeh prayers. Ramadan schedules are announced on our <a href="/prayer-times">Prayer Times page</a> and social media before the holy month begins.`,
            },
            {
                question: `When does Taraweeh start?`,
                answer: `Taraweeh prayers at ${MASJID_SHORT} begin after Isha prayer during the month of Ramadan. The exact time is posted on the <a href="/prayer-times">Prayer Times page</a> and social media each year.`,
            },
            {
                question: `Is Eid prayer held there?`,
                answer: `Yes, ${MASJID_SHORT} holds Eid al-Fitr and Eid al-Adha prayers. Eid prayer times and location details are announced in advance through our social media channels and at the masjid.`,
            },
            {
                question: `Where do we park?`,
                answer: `${MASJID_SHORT} has a parking lot available for visitors at ${MASJID_ADDRESS}. Parking is free. During large events like Jumu'ah and Eid, please arrive early to find parking and consider carpooling.`,
            },
            {
                question: `Is wudu (ablution) available?`,
                answer: `Yes, ${MASJID_SHORT} provides wudu (ablution) facilities on-site for both brothers and sisters. The facilities are clean and accessible before every prayer.`,
            },
            {
                question: `Is there a separate prayer area for women?`,
                answer: `Yes, ${MASJID_SHORT} has a dedicated women's prayer area that is clean, comfortable, and private. Sisters are welcome at all daily prayers and Jumu'ah.`,
            },
        ],
    },
    {
        title: 'Community & Belonging',
        icon: 'fas fa-users',
        items: [
            {
                question: `Are there people from my country at the masjid?`,
                answer: `${MASJID_SHORT} serves a beautifully diverse Muslim community in Phoenix. Members come from Somali, Arab, Afghan, Pakistani, Sudanese, South Asian, and many other backgrounds. Everyone is welcome regardless of nationality or ethnicity.`,
            },
            {
                question: `Are there Somali, Afghan, Sudanese, Arab, or Pakistani Muslims at the masjid?`,
                answer: `Yes, ${MASJID_SHORT} is home to a multicultural community including Somali, Afghan, Sudanese, Arab, Pakistani, and many other Muslim families. The diversity of the community is one of its greatest strengths.`,
            },
            {
                question: `Will people speak my language?`,
                answer: `${MASJID_SHORT} has community members who speak English, Arabic, Somali, Urdu, Pashto, Dari, and other languages. There is a strong likelihood you will find someone who speaks your language.`,
            },
            {
                question: `Is the community mostly immigrants or American-born?`,
                answer: `${MASJID_SHORT} is a blend of both immigrant families and American-born Muslims. This diversity creates a welcoming environment where different perspectives and experiences enrich the community.`,
            },
            {
                question: `Will my family feel comfortable?`,
                answer: `Yes, ${MASJID_SHORT} is a family-friendly environment. The community prioritizes making every family feel welcome, safe, and included. Programs exist for men, women, children, and youth of all ages.`,
            },
            {
                question: `Are there families with children?`,
                answer: `Yes, many families with children of all ages attend ${MASJID_SHORT}. The center offers children's programs, weekend classes, and youth activities that help families connect with one another.`,
            },
            {
                question: `Can my wife meet other Muslim women?`,
                answer: `Yes, ${MASJID_SHORT} has an active sisters' community. Women's halaqahs, classes, and community events provide regular opportunities for Muslim women to connect and support one another.`,
            },
            {
                question: `Can my children make Muslim friends?`,
                answer: `Yes, children at ${MASJID_SHORT} build lasting friendships through Islamic school programs, weekend classes, youth groups, and community events. The center is a gathering place for Muslim families.`,
            },
            {
                question: `Is the masjid welcoming to new families?`,
                answer: `Absolutely. ${MASJID_SHORT} actively welcomes new families to the community. Community members and leadership are happy to introduce newcomers, answer questions, and help families settle in.`,
            },
            {
                question: `Will someone introduce us to people?`,
                answer: `Yes, ${MASJID_SHORT} encourages community members to welcome and introduce newcomers. You can also speak with the imam or community leaders who will connect you with families and programs.`,
            },
            {
                question: `Is there a community WhatsApp group?`,
                answer: `${MASJID_SHORT} uses social media and messaging groups to keep the community informed about events, prayer times, and announcements. Ask at the masjid or contact us at (602) 574-8750 to be added.`,
            },
        ],
    },
    {
        title: 'Children & Youth',
        icon: 'fas fa-child',
        items: [
            {
                question: "Does the masjid have Qur'an classes for children?",
                answer: `Yes, ${MASJID_SHORT} offers Qur'an classes for children, including recitation (Tilawah) and memorization. Classes are taught by qualified instructors. Visit the <a href="/education">Education page</a> for enrollment details.`,
            },
            {
                question: `Is there a weekend madrasa?`,
                answer: `Yes, ${MASJID_SHORT} operates a weekend Islamic school (madrasa) where children learn Qur'an, Arabic, and Islamic studies. Visit the <a href="/education">Education page</a> or call (602) 574-8750 for the current schedule and registration.`,
            },
            {
                question: "How much does the children's program cost?",
                answer: `${MASJID_SHORT} strives to keep its children's programs affordable and accessible. Fees vary by program. Please visit the <a href="/register">Registration page</a> or contact the center at (602) 574-8750 for current pricing. Financial assistance may be available for families in need.`,
            },
            {
                question: `What ages do you accept?`,
                answer: `${MASJID_SHORT} offers programs for children of various age groups, typically starting from around age 5 through teenagers. Contact the center at (602) 574-8750 or check the <a href="/education">Education page</a> for age-specific program details.`,
            },
            {
                question: `Do you teach Arabic?`,
                answer: `Yes, ${MASJID_SHORT} offers Arabic language classes for children as part of its educational programs. Students learn reading, writing, and conversational Arabic. See the <a href="/education">Education page</a> for details.`,
            },
            {
                question: `Do you teach Islamic studies?`,
                answer: `Yes, ${MASJID_SHORT} offers Islamic studies classes covering topics such as Aqeedah (creed), Fiqh (jurisprudence), Seerah (prophetic biography), and Islamic manners. Visit the <a href="/education">Education page</a> for more information.`,
            },
            {
                question: "Is there a Hifz (Qur'an memorization) program?",
                answer: `${MASJID_SHORT} supports Qur'an memorization (Hifz) for dedicated students. Please contact the center at (602) 574-8750 to inquire about the current Hifz program availability, schedule, and enrollment.`,
            },
            {
                question: `Is there a youth group?`,
                answer: `Yes, ${MASJID_SHORT} has youth programs and activities designed for teenagers and young adults. These programs help Muslim youth build a strong Islamic identity and lasting friendships.`,
            },
            {
                question: `Are there activities for teenagers?`,
                answer: `Yes, ${MASJID_SHORT} organizes activities and programs specifically for teenagers, including youth halaqahs, community service projects, and social events to keep young Muslims engaged.`,
            },
            {
                question: `Are there Muslim summer programs?`,
                answer: `${MASJID_SHORT} offers summer programs and camps for children and youth. These programs include Qur'an study, Islamic education, and fun activities. Check our announcements or contact us for summer session details.`,
            },
            {
                question: `Are there sisters who teach girls?`,
                answer: `Yes, ${MASJID_SHORT} has female instructors who teach girls in a comfortable and supportive environment. This includes Qur'an, Arabic, and Islamic studies classes.`,
            },
            {
                question: `Can my children make friends here?`,
                answer: `Yes, children at ${MASJID_SHORT} regularly form friendships through classes, youth groups, and community events. The center is a vibrant place where Muslim children grow and learn together.`,
            },
            {
                question: `Do you have programs during school breaks?`,
                answer: `${MASJID_SHORT} often organizes special programs during school breaks, including winter and spring sessions. Follow our social media or contact us at (602) 574-8750 for upcoming break programs.`,
            },
            {
                question: `Does the masjid help children learn how to pray?`,
                answer: `Yes, ${MASJID_SHORT} teaches children how to perform salah (prayer) correctly as part of its Islamic education curriculum. Children learn the movements, supplications, and spiritual significance of prayer.`,
            },
        ],
    },
    {
        title: 'Newcomer & Settlement Support',
        icon: 'fas fa-hands-helping',
        items: [
            {
                question: `Does the masjid help immigrants?`,
                answer: `Yes, ${MASJID_SHORT} provides support services for immigrants and new arrivals in Phoenix. This includes community connections, referrals to local resources, and assistance navigating life in the United States. Visit our <a href="/community-aid">Community Aid page</a> to learn more.`,
            },
            {
                question: `Can someone help us find a job?`,
                answer: `${MASJID_SHORT} connects community members with employment resources and job opportunities through its network. Contact the center at (602) 574-8750 or visit the <a href="/community-aid">Community Aid page</a> for assistance.`,
            },
            {
                question: `Do you know employers hiring?`,
                answer: `${MASJID_SHORT} shares job openings and employment leads through community announcements when available. Reach out to the center at (602) 574-8750 to inquire about current opportunities.`,
            },
            {
                question: `Can someone help with a résumé?`,
                answer: `${MASJID_SHORT} can connect you with community volunteers who may assist with résumé writing and job application support. Contact the center at (602) 574-8750 to request help.`,
            },
            {
                question: `Is there English-language help?`,
                answer: `${MASJID_SHORT} helps connect community members with English-language learning resources in the Phoenix area. Contact the center at (602) 574-8750 to ask about current ESL support options.`,
            },
            {
                question: `Are there ESL (English as a Second Language) classes?`,
                answer: `${MASJID_SHORT} can help direct you to ESL classes available in the Phoenix area. The center works with community partners to support language learning for newcomers. Call (602) 574-8750 for referrals.`,
            },
            {
                question: `Can someone help us understand American schools?`,
                answer: `${MASJID_SHORT} has community members experienced with the American education system who can help families understand school enrollment, grades, and programs. Contact the center at (602) 574-8750 for guidance.`,
            },
            {
                question: `Can someone explain how healthcare works?`,
                answer: `${MASJID_SHORT} can connect newcomer families with community members and local resources who can help explain the American healthcare system, insurance options, and nearby clinics. Call (602) 574-8750 for assistance.`,
            },
            {
                question: `Is there assistance for families with low income?`,
                answer: `Yes, ${MASJID_SHORT} provides assistance to low-income families through its community aid programs, including zakat distribution and referrals to local social services. Visit the <a href="/community-aid">Community Aid page</a> or call (602) 574-8750.`,
            },
            {
                question: `Is there food assistance?`,
                answer: `Yes, ${MASJID_SHORT} provides food assistance to families in need through community programs and partnerships. Contact the center at (602) 574-8750 or visit the <a href="/community-aid">Community Aid page</a> for details.`,
            },
            {
                question: `Does the masjid have a food pantry?`,
                answer: `${MASJID_SHORT} offers food assistance programs for community members in need. Please contact the center at (602) 574-8750 to learn about current food distribution schedules and how to receive help.`,
            },
            {
                question: `Can we get clothing or household items?`,
                answer: `${MASJID_SHORT} periodically organizes drives for clothing, household goods, and essential items. Contact the center at (602) 574-8750 or check our social media for announcements about distribution events.`,
            },
            {
                question: `Does anyone help refugees or new arrivals?`,
                answer: `Yes, ${MASJID_SHORT} supports refugees and new arrivals through community resources, settlement guidance, and connections to local organizations. Reach out at (602) 574-8750 or visit the <a href="/community-aid">Community Aid page</a>.`,
            },
            {
                question: `Is there someone who speaks our language?`,
                answer: `${MASJID_SHORT} has community members and staff who speak English, Arabic, Somali, Urdu, Pashto, Dari, and other languages. The center strives to provide language support so every family can communicate comfortably.`,
            },
        ],
    },
    {
        title: "Women & Sisters' Community",
        icon: 'fas fa-female',
        items: [
            {
                question: "Is there a women's prayer area?",
                answer: `Yes, ${MASJID_SHORT} has a dedicated women's prayer area that is clean, comfortable, and private. Sisters have their own designated space for all daily prayers and Jumu'ah.`,
            },
            {
                question: "Is the women's area comfortable and private?",
                answer: `Yes, the women's prayer area at ${MASJID_SHORT} is designed to be comfortable, clean, and private. The center prioritizes providing a dignified space for sisters.`,
            },
            {
                question: "Are women allowed to attend Jumu'ah?",
                answer: `Yes, women are welcome to attend Jumu'ah prayer at ${MASJID_SHORT}. A separate prayer area is available for sisters during the Friday sermon and prayer.`,
            },
            {
                question: "Are there women's halaqahs (study circles)?",
                answer: `Yes, ${MASJID_SHORT} offers halaqahs (study circles) specifically for women. These sessions cover Qur'an study, Islamic topics, and spiritual development in a sisters-only environment.`,
            },
            {
                question: `Are there female Islamic teachers?`,
                answer: `Yes, ${MASJID_SHORT} has female Islamic teachers who lead classes and halaqahs for women and girls. Sisters can learn Qur'an, Arabic, and Islamic studies from qualified female instructors.`,
            },
            {
                question: "Are there Qur'an classes for women?",
                answer: `Yes, ${MASJID_SHORT} offers Qur'an recitation and study classes for women, taught in a comfortable sisters-only setting. Contact the center at (602) 574-8750 for schedule and enrollment.`,
            },
            {
                question: `Are there activities for mothers?`,
                answer: `Yes, ${MASJID_SHORT} organizes activities and programs for mothers, including parenting discussions, social gatherings, and community events. The center values supporting Muslim mothers in Phoenix.`,
            },
            {
                question: `Is there childcare during programs?`,
                answer: `${MASJID_SHORT} understands the needs of families with young children. Please contact the center at (602) 574-8750 to ask about childcare availability during specific classes and events.`,
            },
            {
                question: `Can women volunteer?`,
                answer: `Yes, women are encouraged to volunteer at ${MASJID_SHORT}. There are many volunteer opportunities for sisters, from teaching to event planning to community aid. Visit the <a href="/volunteer">Volunteer page</a> to get involved.`,
            },
            {
                question: "Is there a sisters' WhatsApp group?",
                answer: `${MASJID_SHORT} uses messaging groups to keep sisters connected. Ask at the masjid or contact the center at (602) 574-8750 to be added to the sisters' communication group.`,
            },
        ],
    },
    {
        title: 'Language & Communication',
        icon: 'fas fa-language',
        items: [
            {
                question: `Does the imam speak English?`,
                answer: `Yes, the imam at ${MASJID_SHORT} speaks English. Khutbahs and religious guidance are provided in English to serve the diverse Phoenix Muslim community. Visit the <a href="/imams">Imams page</a> to learn more.`,
            },
            {
                question: `Does the imam speak Arabic?`,
                answer: `Yes, the imam at ${MASJID_SHORT} speaks Arabic. Arabic is used in religious instruction, Qur'an recitation, and portions of the Khutbah. Visit the <a href="/imams">Imams page</a> for more details.`,
            },
            {
                question: `Does the imam speak Somali?`,
                answer: `${MASJID_SHORT} serves a large Somali community. Please contact the center at (602) 574-8750 to ask about Somali-speaking staff and community leaders.`,
            },
            {
                question: `Does the imam speak Urdu?`,
                answer: `Please contact ${MASJID_SHORT} at (602) 574-8750 to inquire about Urdu-speaking religious leaders and community members who can assist you.`,
            },
            {
                question: `Does the imam speak Pashto or Dari?`,
                answer: `${MASJID_SHORT} has a diverse community including Afghan members. Contact the center at (602) 574-8750 to ask about Pashto or Dari-speaking community leaders.`,
            },
            {
                question: `Can someone translate for us?`,
                answer: `Yes, ${MASJID_SHORT} has community members who can provide translation assistance in Arabic, Somali, Urdu, Pashto, Dari, and other languages. Contact the center at (602) 574-8750 for help.`,
            },
            {
                question: `Is the Khutbah in English or Arabic?`,
                answer: `The Friday Khutbah at ${MASJID_SHORT} is typically delivered in English and Arabic, making it accessible to the diverse community. Check with the center for specific details.`,
            },
            {
                question: `Are announcements available in multiple languages?`,
                answer: `${MASJID_SHORT} makes efforts to share important announcements in multiple languages to serve its diverse community. Follow the center's social media and messaging groups for multilingual updates.`,
            },
        ],
    },
    {
        title: 'Financial & Zakat Assistance',
        icon: 'fas fa-hand-holding-heart',
        items: [
            {
                question: `Does the masjid help people who are struggling financially?`,
                answer: `Yes, ${MASJID_SHORT} provides financial assistance to community members in need through zakat and sadaqah funds. Visit the <a href="/community-aid">Community Aid page</a> or call (602) 574-8750 to learn about available support.`,
            },
            {
                question: `Is there zakat assistance?`,
                answer: `Yes, ${MASJID_SHORT} distributes zakat funds to eligible community members. Assistance is available for those facing financial hardship. Contact the center at (602) 574-8750 or visit the <a href="/community-aid">Community Aid page</a> to apply.`,
            },
            {
                question: `How do I apply for assistance?`,
                answer: `To apply for financial assistance at ${MASJID_SHORT}, contact the center at (602) 574-8750 or visit in person. Staff will guide you through the application process and assess your needs confidentially.`,
            },
            {
                question: `Can you help with rent?`,
                answer: `${MASJID_SHORT} may be able to assist with emergency rent payments depending on fund availability. Contact the center at (602) 574-8750 to discuss your situation confidentially.`,
            },
            {
                question: `Can you help with food?`,
                answer: `Yes, ${MASJID_SHORT} provides food assistance to families in need. Contact the center at (602) 574-8750 or visit the <a href="/community-aid">Community Aid page</a> to request food assistance.`,
            },
            {
                question: `Can you help with utilities?`,
                answer: `${MASJID_SHORT} may be able to assist with utility bill payments on an emergency basis. Contact the center at (602) 574-8750 to discuss your situation and learn about available resources.`,
            },
            {
                question: `Can you help with transportation?`,
                answer: `${MASJID_SHORT} works to connect community members with transportation resources. Contact the center at (602) 574-8750 to discuss transportation needs and available community support.`,
            },
            {
                question: `Can you help with medical bills?`,
                answer: `${MASJID_SHORT} may be able to provide limited assistance with medical expenses or connect you with healthcare resources. Contact the center at (602) 574-8750 to discuss your situation confidentially.`,
            },
            {
                question: `Is emergency assistance available?`,
                answer: `Yes, ${MASJID_SHORT} offers emergency assistance for community members facing urgent financial needs. Contact the center immediately at (602) 574-8750 for emergency support.`,
            },
            {
                question: `Is assistance confidential?`,
                answer: `Yes, all financial assistance requests at ${MASJID_SHORT} are handled with complete confidentiality. The privacy and dignity of every community member is respected throughout the process.`,
            },
            {
                question: `Who qualifies for assistance?`,
                answer: `${MASJID_SHORT} evaluates assistance requests on a case-by-case basis according to Islamic guidelines for zakat and sadaqah distribution. Contact the center at (602) 574-8750 to discuss eligibility.`,
            },
        ],
    },
    {
        title: 'Marriage & Family Services',
        icon: 'fas fa-ring',
        items: [
            {
                question: `Does the masjid perform nikah (Islamic marriage)?`,
                answer: `Yes, ${MASJID_SHORT} performs nikah (Islamic marriage) ceremonies. The imam can officiate the religious marriage contract. Contact the center at (602) 574-8750 to schedule and discuss requirements.`,
            },
            {
                question: `Who can perform the nikah?`,
                answer: `The imam at ${MASJID_SHORT} is authorized to perform nikah ceremonies. Contact the center at (602) 574-8750 to arrange a meeting with the imam and discuss the nikah process.`,
            },
            {
                question: `What documents are needed for nikah?`,
                answer: `${MASJID_SHORT} requires valid identification and may require a civil marriage license depending on state requirements. Contact the center at (602) 574-8750 for the complete list of documents needed for your nikah.`,
            },
            {
                question: `Does the imam provide marriage counseling?`,
                answer: `Yes, the imam at ${MASJID_SHORT} provides Islamic marriage counseling for couples. Sessions are confidential and based on Islamic principles. Contact the center at (602) 574-8750 to schedule a meeting.`,
            },
            {
                question: `Can we talk to the imam privately about family problems?`,
                answer: `Yes, the imam at ${MASJID_SHORT} is available for private, confidential consultations about family matters. Contact the center at (602) 574-8750 to schedule a private appointment.`,
            },
            {
                question: `Are there programs for husbands and wives?`,
                answer: `${MASJID_SHORT} periodically organizes family and marriage enrichment programs. Follow the center's announcements or contact (602) 574-8750 to learn about upcoming couples' programs.`,
            },
            {
                question: `Are there family events?`,
                answer: `Yes, ${MASJID_SHORT} hosts family-friendly events throughout the year, including Eid celebrations, community dinners, and seasonal gatherings. Visit the <a href="/community">Community page</a> for upcoming events.`,
            },
            {
                question: `Can we find suitable spouses for our children?`,
                answer: `${MASJID_SHORT} is a community hub where Muslim families naturally connect. The imam and community leaders can facilitate introductions in a respectful, Islamic manner. Contact the center at (602) 574-8750.`,
            },
            {
                question: `Does the community help with marriage introductions?`,
                answer: `Yes, ${MASJID_SHORT} supports families seeking marriage introductions through the imam and community network. All introductions are handled with respect and in accordance with Islamic values. Contact (602) 574-8750.`,
            },
        ],
    },
    {
        title: 'Funeral, Janazah & Life Events',
        icon: 'fas fa-dove',
        items: [
            {
                question: `Does the masjid provide Janazah (funeral) services?`,
                answer: `Yes, ${MASJID_SHORT} provides full Janazah services including ghusl (washing), kafan (shrouding), Janazah prayer, and coordination with burial services. Contact the center immediately at (602) 574-8750 when needed.`,
            },
            {
                question: `Where is the Muslim cemetery?`,
                answer: `${MASJID_SHORT} can guide families to Muslim cemeteries in the Phoenix area. Contact the center at (602) 574-8750 for information about Muslim burial plots and cemetery locations.`,
            },
            {
                question: `Who do we call if someone dies?`,
                answer: `If a Muslim community member passes away, contact ${MASJID_SHORT} immediately at (602) 574-8750. The center will assist with Janazah arrangements, funeral prayer, and burial coordination.`,
            },
            {
                question: `Does the masjid help with burial arrangements?`,
                answer: `Yes, ${MASJID_SHORT} assists families with the entire Islamic burial process, including coordination with funeral homes, cemetery arrangements, and community support. Call (602) 574-8750 for immediate assistance.`,
            },
            {
                question: `Can the imam visit someone who is sick?`,
                answer: `Yes, the imam at ${MASJID_SHORT} is available to visit sick community members for prayer, du'a, and spiritual support. Contact the center at (602) 574-8750 to arrange a visit.`,
            },
            {
                question: `Does the community visit hospitalized Muslims?`,
                answer: `Yes, ${MASJID_SHORT} encourages visiting the sick (Iyaadah) as an important Islamic practice. Community members and the imam regularly visit hospitalized Muslims. Contact (602) 574-8750 to arrange a visit.`,
            },
            {
                question: `Can the masjid help with Aqeeqah?`,
                answer: `Yes, ${MASJID_SHORT} can assist families with Aqeeqah (the celebration and sacrifice for a newborn). Contact the center at (602) 574-8750 to discuss arrangements and guidance.`,
            },
            {
                question: `Can we hold an Islamic wedding or community event at the center?`,
                answer: `${MASJID_SHORT} may accommodate Islamic weddings and community events. Contact the center at (602) 574-8750 to inquire about space availability, scheduling, and any associated requirements.`,
            },
        ],
    },
    {
        title: 'Adult Islamic Education',
        icon: 'fas fa-book-open',
        items: [
            {
                question: "Are there adult Qur'an classes?",
                answer: `Yes, ${MASJID_SHORT} offers Qur'an recitation and study classes for adults at various levels. Whether you are a beginner or looking to improve your Tajweed, classes are available. Visit the <a href="/education">Education page</a> for details.`,
            },
            {
                question: `Are there Arabic classes for adults?`,
                answer: `Yes, ${MASJID_SHORT} offers Arabic language classes for adults, covering reading, writing, and conversational skills. Visit the <a href="/education">Education page</a> or call (602) 574-8750 for the current schedule.`,
            },
            {
                question: `Are there Islamic studies classes?`,
                answer: `Yes, ${MASJID_SHORT} provides Islamic studies classes for adults covering topics like Fiqh, Aqeedah, Seerah, and Tafseer. Visit the <a href="/education">Education page</a> for the current class schedule.`,
            },
            {
                question: `Are there halaqahs (study circles) for adults?`,
                answer: `Yes, ${MASJID_SHORT} holds regular halaqahs (study circles) for adults covering Qur'an, Hadith, and Islamic topics. These sessions are open to all community members.`,
            },
            {
                question: `Can new Muslims get religious guidance?`,
                answer: `Yes, ${MASJID_SHORT} warmly welcomes new Muslims (reverts) and provides one-on-one religious guidance, mentorship, and support. The imam and community members are available to help with your journey. Contact (602) 574-8750.`,
            },
            {
                question: `Are there classes for people who are learning how to pray?`,
                answer: `Yes, ${MASJID_SHORT} offers prayer instruction for adults who are new to Islam or want to improve their salah. The center provides patient, supportive guidance for learning the proper method of prayer.`,
            },
        ],
    },
    {
        title: 'Volunteering & Community Participation',
        icon: 'fas fa-heart',
        items: [
            {
                question: `Can new families volunteer?`,
                answer: `Yes, ${MASJID_SHORT} welcomes volunteers of all backgrounds, including new families. Volunteering is a great way to connect with the community and give back. Visit the <a href="/volunteer">Volunteer page</a> to sign up.`,
            },
            {
                question: `Are there community service opportunities?`,
                answer: `Yes, ${MASJID_SHORT} organizes regular community service projects including food drives, neighborhood cleanups, and charitable events. Visit the <a href="/volunteer">Volunteer page</a> to learn about current opportunities.`,
            },
            {
                question: `Can teenagers volunteer?`,
                answer: `Yes, ${MASJID_SHORT} encourages teenagers to volunteer. Youth volunteering builds leadership skills and strengthens community bonds. Visit the <a href="/volunteer">Volunteer page</a> for teen-friendly opportunities.`,
            },
            {
                question: `Are there food drives or charity events?`,
                answer: `Yes, ${MASJID_SHORT} organizes food drives, charity fundraisers, and community aid events throughout the year. Follow our social media or visit the <a href="/community">Community page</a> for upcoming events.`,
            },
            {
                question: `How can I get involved in the community?`,
                answer: `There are many ways to get involved at ${MASJID_SHORT}: attend prayers and classes, volunteer for events, join community groups, or donate. Visit the <a href="/volunteer">Volunteer page</a> or call (602) 574-8750 to start.`,
            },
        ],
    },
    {
        title: 'Safety, Inclusion & Trust',
        icon: 'fas fa-shield-alt',
        items: [
            {
                question: "Will people judge us because we're poor or new immigrants?",
                answer: `No. ${MASJID_SHORT} is built on the Islamic principles of equality, compassion, and brotherhood. Every person is valued regardless of economic status or immigration background. The community treats all members with dignity and respect.`,
            },
            {
                question: `Will people treat us differently because of our nationality?`,
                answer: `No. ${MASJID_SHORT} is a diverse, multicultural community where people of all nationalities and ethnic backgrounds pray, learn, and grow together. Discrimination has no place in the masjid.`,
            },
            {
                question: `Is the masjid safe for children?`,
                answer: `Yes, ${MASJID_SHORT} prioritizes the safety of all children. The center provides a secure environment for children during prayers, classes, and community events. Parents can feel confident about their children's wellbeing.`,
            },
            {
                question: `Can I speak privately with the imam?`,
                answer: `Yes, the imam at ${MASJID_SHORT} is available for private, confidential conversations. Whether you need spiritual guidance, personal advice, or family support, you can schedule a private meeting by calling (602) 574-8750.`,
            },
            {
                question: `Are financial assistance requests confidential?`,
                answer: `Yes, all financial assistance requests at ${MASJID_SHORT} are handled with strict confidentiality. The center respects the privacy and dignity of every person who seeks help.`,
            },
            {
                question: `Is the masjid welcoming regardless of ethnic background?`,
                answer: `Yes, ${MASJID_SHORT} welcomes every Muslim regardless of ethnic background, nationality, or race. The community reflects the universal brotherhood and sisterhood of Islam, united by faith.`,
            },
        ],
    },
    {
        title: 'Family Concerns & Belonging',
        icon: 'fas fa-home',
        items: [
            {
                question: `Will my children become too Americanized?`,
                answer: `${MASJID_SHORT} helps families balance cultural identity with life in America. Islamic education programs, youth groups, and community events reinforce Islamic values while helping children thrive in American society.`,
            },
            {
                question: `Will my daughter have Muslim friends?`,
                answer: `Yes, girls at ${MASJID_SHORT} build strong friendships through Islamic school, youth programs, and sisters' activities. The center provides a supportive environment for Muslim girls to grow and connect.`,
            },
            {
                question: `Will my son still want to attend the masjid as a teenager?`,
                answer: `${MASJID_SHORT} actively engages teenage boys through youth programs, mentorship, sports, and community activities. The center works to keep young men connected to their faith and community.`,
            },
            {
                question: `Will my wife feel isolated?`,
                answer: `No. ${MASJID_SHORT} has a welcoming sisters' community with regular halaqahs, social events, and support networks. Muslim women at the center form close bonds and support one another.`,
            },
            {
                question: `Will people treat us differently because of our background?`,
                answer: `No. ${MASJID_SHORT} is a diverse community where people of all backgrounds are treated equally. The masjid operates on the Islamic principle that all believers are brothers and sisters.`,
            },
            {
                question: `If we have a problem, is there someone here who will help us?`,
                answer: `Yes. ${MASJID_SHORT} has an imam, community leaders, and dedicated volunteers who are ready to help families in need. Whether you need spiritual guidance, social support, or practical assistance, help is available. Call (602) 574-8750.`,
            },
            {
                question: "Can this masjid become our family's community?",
                answer: `Absolutely. ${MASJID_SHORT} is a welcoming spiritual home for families in the Phoenix area. With daily prayers, educational programs, youth activities, and community events, the center offers everything a Muslim family needs to belong and thrive.`,
            },
        ],
    },
];

// Flatten all FAQ items for schema generation
const allFaqItems = faqData.flatMap((cat) => cat.items);

// Generate the FAQPage JSON-LD schema
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            // Strip HTML tags for the schema text
            text: item.answer.replace(/<[^>]*>/g, ''),
        },
    })),
};

export default function FAQPage() {
    return (
        <div className="faq-page">
            <StructuredData
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'FAQ', url: '/faq' },
                ]}
                additionalSchemas={[faqSchema]}
            />
            <Header />

            <main>
                {/* Hero */}
                <section className="faq-hero">
                    <div className="faq-hero-content">
                        <h1>Frequently Asked Questions</h1>
                        <p className="faq-hero-subtitle">
                            Find answers to common questions about Al Rahma Islamic Center of Phoenix — prayer times, programs, community services, and more.
                        </p>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="faq-content">
                    {faqData.map((category) => (
                        <div key={category.title} className="faq-category">
                            <div className="faq-category-header">
                                <div className="faq-category-icon">
                                    <i className={category.icon}></i>
                                </div>
                                <h2 className="faq-category-title">{category.title}</h2>
                            </div>
                            {category.items.map((item) => (
                                <details key={item.question} className="faq-item">
                                    <summary className="faq-question">{item.question}</summary>
                                    <div
                                        className="faq-answer"
                                        dangerouslySetInnerHTML={{ __html: item.answer }}
                                    />
                                </details>
                            ))}
                        </div>
                    ))}
                </section>

                {/* CTA */}
                <section className="faq-cta">
                    <div className="faq-cta-content">
                        <h2>Still Have Questions?</h2>
                        <p>
                            We'd love to hear from you. Reach out to Al Rahma Islamic Center of Phoenix and a community member will be happy to help.
                        </p>
                        <div className="faq-cta-buttons">
                            <a href="tel:+16025748750" className="faq-cta-btn primary">
                                <i className="fas fa-phone"></i> Call (602) 574-8750
                            </a>
                            <a href="/#contact" className="faq-cta-btn secondary">
                                <i className="fas fa-envelope"></i> Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
