

import { Mantra } from './types';

// Images
export const HERO_IMAGE = "https://images.unsplash.com/photo-1600609842388-3e4b7c8d9638?q=80&w=2500&auto=format&fit=crop"; 
export const PANDIT_IMAGE = "https://i.ibb.co/DH8nf75Q/Babaji.png"; 

export const CONTACT_INFO = {
  phone: "+91 98XXX XXXXX",
  whatsapp: "+91 99XXX XXXXX",
  email: "contact@ambikajyotish.com",
  address: "Ambika Jyotish Kendra, C/O Pandit Anil Kumar Vyas, Near Nyay Mandir, Vadodara, Gujarat - 390001",
};

export const MANTRAS: Mantra[] = [
  {
    sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
    english: "Om Bhur Bhuva Swaha, Tat Savitur Varenyam, Bhargo Devasya Dhimahi, Dhiyo Yo Nah Prachodayat",
    meaning: "We meditate on the glory of the Creator; Who has created the Universe; Who is worthy of Worship; Who is the embodiment of Knowledge and Light; Who is the remover of all Sin and Ignorance; May He enlighten our Intellect."
  },
  {
    sanskrit: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय माऽमृतात्॥",
    english: "Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam, Urvarukamiva Bandhanan Mrityormukshiya Mamritat",
    meaning: "We worship the Three-Eyed Lord Shiva who is fragrant and who nourishes and nurtures all beings. As is the ripened cucumber freed from its bondage (to the creeper), may He liberate us from death for the sake of immortality."
  },
  {
    sanskrit: "ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय । ॐ शान्तिः शान्तिः शान्तिः ॥",
    english: "Om Asato Ma Sadgamaya, Tamaso Ma Jyotirgamaya, Mrtyorma Amrtam Gamaya",
    meaning: "Lead me from the unreal to the real, lead me from darkness to light, lead me from death to immortality. Om Peace, Peace, Peace."
  },
  {
    sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    english: "Vakratunda Mahakaya Suryakoti Samaprabha, Nirvighnam Kuru Me Deva Sarvakaryeshu Sarvada",
    meaning: "O Lord Ganesha, of huge body with a curved trunk, who shines like a million suns, please remove all obstacles from my work, always."
  }
];

export const TRANSLATIONS = {
  EN: {
    nav: { home: "Home", about: "About", services: "Services", pujas: "Pujas", vastu: "Vastu", epuja: "E-Puja", reviews: "Reviews", contact: "Contact", book: "Book Now" },
    hero: { title: "Where Destiny Meets Divine Will", subtitle: "Bridge the gap between human effort and divine grace.", cta1: "Book Consultation", cta2: "Explore Pujas", trust: "Trusted by 2000+ Devotees" },
    headings: { services: "Divine Services", latestReviews: "Devotee Experiences", about: "The Legacy", promise: "The Ambika Promise" },
    home: {
      servicesTitle: "Divine Services",
      servicesSubtitle: "Ancient wisdom tailored for modern problems. Choose your path to clarity.",
      ctaTitle: "Start Your Journey Towards Clarity",
      ctaSubtitle: "Book a consultation today and let the stars guide your path to success and peace.",
      ctaBtn1: "Contact Us Now",
      ctaBtn2: "Call Panditji",
      reviewsTitle: "What Devotees Say",
      reviewsBtn: "See All Reviews",
      aboutTitle: "Meet the Acharya",
      aboutDesc: "Pandit Anil Kumar Vyas is a Gold Medalist Jyotish Visharad with over two decades of rigorous Sadhana. Inheriting the lineage of Nadi Jyotish and Tantra Shastra, he provides solutions that are 100% Shastra-Suddha.",
      aboutLink: "Learn More About Panditji"
    },
    aboutPage: {
      title: "Pandit Anil Kumar Vyas",
      subtitle: "The Legacy",
      tagline: "Custodian of Vedic Tradition",
      desc: "Pandit Anil Kumar Vyas is not merely an astrologer; he is a custodian of the Vedic tradition. With over 25 years of rigorous Sadhana, he stands as a beacon of spiritual guidance in Vadodara.",
      eduTitle: "Educational Excellence",
      edu1: "Jyotish Visharad: Gold Medalist from Bharatiya Vidya Bhavan.",
      edu2: "Karmakand Bhaskar: Certified in Rigvedic and Yajurvedic rituals from Kashi (Varanasi).",
      edu3: "Vastu Shastri: Advanced certification in Residential & Industrial Vastu.",
      lineageTitle: "The Lineage",
      lineageDesc: "Hailing from a traditional Brahmin family of North Gujarat, Panditji inherited the secret knowledge of Nadi Jyotish and Tantra Shastra (Sattvic) from his forefathers.",
      missionTitle: "Our Mission",
      missionDesc: "To demystify astrology and make high-quality Vedic rituals accessible to the common man without superstition."
    },
    servicesData: [
      { name: "Sampurna Kundali Vishleshan", description: "Comprehensive analysis of 12 houses. Covers Career, Finance, Health, Marriage, and Children. Includes D-9 (Navamsa) & D-10 charts.", duration: "60 Mins", price: "₹1,500" },
      { name: "Varshphal (Yearly Report)", description: "A detailed roadmap for the upcoming 12 months based on the Solar Return Chart (Tajik Shastra).", duration: "45 Mins", price: "₹1,100" },
      { name: "Vivah Milan (Match Making)", description: "Beyond just Gun-Milan. We check Nadi Dosh, Bhakoot Dosh, Manglik status, and mental compatibility. Verdict: Yes/No/Remedial.", duration: "Report", price: "₹701" },
      { name: "Career & Business Consult", description: "\"Job or Business?\" \"When will I get promoted?\" \"Is this partnership lucky?\" Specific analysis of the 10th House.", duration: "30 Mins", price: "₹900" },
      { name: "Child/Education Consult", description: "Guidance on stream selection (Science/Commerce/Arts), concentration issues, and foreign study prospects.", duration: "30 Mins", price: "₹800" },
      { name: "Prashna Jyotish (Horary)", description: "For those without birth details. Ask 1 specific question (e.g., \"Where is my lost ring?\" \"Will I win this court case?\").", duration: "15 Mins", price: "₹500" },
      { name: "Muhurat Calculation", description: "Finding the most auspicious time for Marriage, Griha Pravesh, Shop Opening, or C-Section Delivery.", duration: "Report", price: "₹500" }
    ],
    pujasData: [
      {
        title: "Dosha Nivaran (Remedial Pujas)", description: "Essential for removing planetary blockages.",
        items: [
          { name: "Kaal Sarp Dosh Nivaran", whoNeedsIt: "Frequent failures, snake dreams, no savings, sudden health issues.", vidhi: "Ganpati Pujan, Rahu-Ketu Jaap (18,000), Naag-Naagin Visarjan, Havan.", priceStandard: "₹2,500", pricePremium: "₹5,100", priceExtra: "Maha-Anushthan (3 Days): ₹21,000" },
          { name: "Mangal Dosh Shanti", whoNeedsIt: "'Manglik' individuals facing marriage delays or divorce threats.", vidhi: "Kumbh Vivah (for females) or Ark Vivah (for males) to nullify the dosha.", priceStandard: "₹3,100", pricePremium: "₹6,500" },
          { name: "Pitra Dosh Nivaran", whoNeedsIt: "Pattern of unhappiness, lack of male progeny, constant family fights.", vidhi: "Pind Daan, Vishnu Tarpan, Narayan Bali Havan. Performed ideally at river banks.", pricePremium: "₹7,500 (Includes Brahmin Bhojan Dakshina)" },
          { name: "Chandal Dosh / Gandmool Shanti", whoNeedsIt: "Born in specific Nakshatras (Ashwini, Revati, etc.) or Guru-Rahu conjunction.", vidhi: "Nakshatra Shanti Havan using water from 27 different places (symbolic).", pricePremium: "₹5,100" }
        ]
      },
      {
        title: "Wealth & Prosperity (Lakshmi Pujas)", description: "For business growth and financial stability.",
        items: [
          { name: "Shree Yantra Sthapana & Puja", whoNeedsIt: "Attracting abundance through ultimate geometry.", vidhi: "Prana-Pratistha of Meru Shree Yantra with Kumkum Archana (1008 names).", priceStandard: "₹3,500 (Excl. Yantra cost)" },
          { name: "Vyapar Vridhi Havan", whoNeedsIt: "Removes 'Nazar' (Evil Eye) from business premises and boosts sales.", vidhi: "Lakshmi-Ganesh Havan + Kanakdhara Stotra Recitation.", priceStandard: "₹5,100" },
          { name: "Kuber Mantra Jaap", whoNeedsIt: "Unlocking blocked money and clearing debts.", vidhi: "1.25 Lakh Jaap of Lord Kuber (The Treasurer of Gods).", priceStandard: "Call for Quote" }
        ]
      },
      {
        title: "Health & Protection (Raksha Pujas)", description: "For critical illness, accidents, and legal enemies.",
        items: [
          { name: "Mahamrityunjaya Anushthan", whoNeedsIt: "For avoiding untimely death (Akaal Mrityu) and curing terminal illnesses.", vidhi: "Laghu (21k Jaap) or Maha (1.25L Jaap).", priceStandard: "₹11,000 (Laghu)", priceExtra: "₹51,000 (Maha - 7 Days)" },
          { name: "Baglamukhi Puja (Shatru Nashak)", whoNeedsIt: "Victory in court cases, politics, and silencing enemies.", vidhi: "Use of Turmeric (Haldi) rosary and Yellow flowers. Strictly Tantrokt Vidhi.", priceStandard: "₹21,000" },
          { name: "Rudrabhishek", whoNeedsIt: "General well-being and peace.", vidhi: "Jal (Water), Dudh (Milk), Ghee, or Laghu Rudri.", priceStandard: "Starts from ₹2,100" }
        ]
      }
    ],
    vastuData: [
      { service: "Residential Vastu", scope: "Apartment/Flat/Bungalow analysis.", deliverables: "Map marking + Remedy List", price: "₹2,500 (Up to 1500 sq ft)" },
      { service: "Commercial Vastu", scope: "Shop/Office/Showroom. Focus on Cash box and Owner seating.", deliverables: "Layout Correction + Yantra placement", price: "₹5,100" },
      { service: "Industrial Vastu", scope: "Factories/Warehouses. Focus on Machinery placement and Raw material flow.", deliverables: "Detailed Report", price: "₹11,000" },
      { service: "Plot Selection", scope: "Visiting a potential land site to check soil energy and direction.", deliverables: "Buy/No-Buy Verdict", price: "₹2,100 / visit" }
    ],
    epujaData: {
      title: "E-Puja for Global Devotees",
      subtitle: "Don't let distance disconnect you from your roots. Experience authentic Vedic rituals from the comfort of your home abroad.",
      steps: [
         { title: "Consultation", desc: "Video call with Panditji to decide the Puja." },
         { title: "Sankalp", desc: "Live Sankalp using your Name, Gotra & Location." },
         { title: "Live Streaming", desc: "Watch the Havan via Zoom/Google Meet." },
         { title: "Prasad Shipping", desc: "Raksha Sutra & Vibhuti couriered to you." },
      ],
      packagesTitle: "Popular NRI Packages",
      packagesSubtitle: "Tailored for your convenience and time zone.",
      packages: [
        { name: "Birthday Ayush Havan", price: "$151 USD", features: ["Longevity Prayers", "Cake Cutting Timing", "Digital Photos"] },
        { name: "Graha Shanti", price: "$201 USD", sub: "Visa & Immigration", features: ["Visa Problem Solving", "Career Stability", "Legal Victory"] },
        { name: "Annual Family Welfare", price: "$301 USD", features: ["Complete Protection", "Health & Wealth", "Ancestral Peace"] },
      ]
    },
    reviewsData: [
      { id: 1, name: "Rajesh Patel", location: "Vadodara, Gujarat", rating: 5, text: "Panditji's prediction was 100% accurate regarding my business. The Vyapar Vridhi Havan changed the energy of my shop completely.", date: "Sept 2023", service: "Business Consult", image: "https://randomuser.me/api/portraits/men/32.jpg" },
      { id: 2, name: "Sneha Desai", location: "Mumbai, MH", rating: 5, text: "I was very skeptical about online pujas, but the E-Puja service was seamless. The video quality was great and I felt the vibrations sitting in Mumbai.", date: "Oct 2023", service: "E-Puja", image: "https://randomuser.me/api/portraits/women/44.jpg" },
      { id: 3, name: "Amitabh Verma", location: "London, UK", rating: 5, text: "The Vastu consultation for my new home in London was detailed. Panditji used Google Earth to analyze directions perfectly.", date: "Aug 2023", service: "Vastu Shastra", image: "https://randomuser.me/api/portraits/men/85.jpg" },
      { id: 4, name: "Priya Singh", location: "Ahmedabad", rating: 4, text: "Very humble and knowledgeable person. Doesn't scare you like other astrologers. Highly recommended for marriage matching.", date: "Nov 2023", service: "Vivah Milan", image: "https://randomuser.me/api/portraits/women/65.jpg" },
      { id: 5, name: "Vikram Mehta", location: "Surat", rating: 5, text: "The Kaal Sarp Dosh Nivaran puja was conducted with such purity. I felt a weight lift off my shoulders immediately.", date: "Dec 2023", service: "Dosha Nivaran", image: "https://randomuser.me/api/portraits/men/22.jpg" },
      { id: 6, name: "Anjali Gupta", location: "Vadodara", rating: 5, text: "Best astrologer in Vadodara. His advice is practical and spiritual. No unnecessary gemstones suggested.", date: "Jan 2024", service: "Kundali Analysis", image: "https://randomuser.me/api/portraits/women/12.jpg" }
    ],
    contactPage: {
      title: "Connect with Divine",
      desc: "Ready to resolve life's complexities? Reach out to us for bookings or inquiries. Panditji is available for consultation by appointment.",
      visit: "Visit Us",
      call: "Call / WhatsApp",
      email: "Email",
      paymentTitle: "Payment Information",
      paymentImportant: "Important: 50% Advance is mandatory to confirm your Slot and book Brahmins.",
      bankDetails: "Bank Transfer Details"
    },
    footer: {
      brandDesc: "Where Your Destiny Meets Divine Intervention. We bridge the gap between human effort (Purusharth) and divine grace (Kripa).",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      rights: "Ambika Jyotish Kendra. All Rights Reserved.",
      design: "Designed with Devotion."
    }
  },
  HI: {
    nav: { home: "गृह", about: "परिचय", services: "सेवाएं", pujas: "पूजा", vastu: "वास्तु", epuja: "ई-पूजा", reviews: "समीक्षाएं", contact: "संपर्क", book: "बुक करें" },
    hero: { title: "जहां भाग्य का मिलन होता है ईश्वरीय इच्छा से", subtitle: "मानवीय प्रयास और ईश्वरीय कृपा के बीच की दूरी को पाटें।", cta1: "परामर्श बुक करें", cta2: "पूजा देखें", trust: "2000+ भक्तों द्वारा विश्वसनीय" },
    headings: { services: "दिव्य सेवाएं", latestReviews: "भक्तों के अनुभव", about: "परंपरा", promise: "अंबिका का वादा" },
    home: {
      servicesTitle: "दिव्य सेवाएं",
      servicesSubtitle: "आधुनिक समस्याओं के लिए प्राचीन ज्ञान। स्पष्टता के लिए अपना रास्ता चुनें।",
      ctaTitle: "स्पष्टता की ओर अपनी यात्रा शुरू करें",
      ctaSubtitle: "आज ही परामर्श बुक करें और सितारों को सफलता और शांति की ओर अपना मार्ग प्रशस्त करने दें।",
      ctaBtn1: "अभी संपर्क करें",
      ctaBtn2: "पंडितजी को कॉल करें",
      reviewsTitle: "भक्त क्या कहते हैं",
      reviewsBtn: "सभी समीक्षाएं देखें",
      aboutTitle: "आचार्य से मिलें",
      aboutDesc: "पंडित अनिल कुमार व्यास एक स्वर्ण पदक विजेता ज्योतिष विशारद हैं, जिन्होंने दो दशकों से अधिक की कठोर साधना की है। नाड़ी ज्योतिष और तंत्र शास्त्र की वंशावली को विरासत में लेते हुए, वे ऐसे समाधान प्रदान करते हैं जो 100% शास्त्र-शुद्ध हैं।",
      aboutLink: "पंडितजी के बारे में और जानें"
    },
    aboutPage: {
      title: "पंडित अनिल कुमार व्यास",
      subtitle: "विरासत",
      tagline: "वैदिक परंपरा के संरक्षक",
      desc: "पंडित अनिल कुमार व्यास केवल एक ज्योतिषी नहीं हैं; वे वैदिक परंपरा के संरक्षक हैं। 25 वर्षों से अधिक की कठोर साधना के साथ, वे वडोदरा में आध्यात्मिक मार्गदर्शन के एक प्रकाश स्तंभ के रूप में खड़े हैं।",
      eduTitle: "शैक्षिक उत्कृष्टता",
      edu1: "ज्योतिष विशारद: भारतीय विद्या भवन से स्वर्ण पदक विजेता।",
      edu2: "कर्मकांड भास्कर: काशी (वाराणसी) से ऋग्वेदिक और यजुर्वेद अनुष्ठानों में प्रमाणित।",
      edu3: "वास्तु शास्त्री: आवासीय और औद्योगिक वास्तु में उन्नत प्रमाणन।",
      lineageTitle: "वंशावली",
      lineageDesc: "उत्तरी गुजरात के एक पारंपरिक ब्राह्मण परिवार से आने वाले, पंडितजी ने अपने पूर्वजों से नाड़ी ज्योतिष और तंत्र शास्त्र (सात्विक) का गुप्त ज्ञान विरासत में प्राप्त किया।",
      missionTitle: "हमारा मिशन",
      missionDesc: "ज्योतिष को रहस्यमुक्त करना और अंधविश्वास के बिना आम आदमी के लिए उच्च गुणवत्ता वाले वैदिक अनुष्ठानों को सुलभ बनाना।"
    },
    servicesData: [
      { name: "सम्पूर्ण कुंडली विश्लेषण", description: "12 भावों का व्यापक विश्लेषण। करियर, वित्त, स्वास्थ्य, विवाह और बच्चों को शामिल करता है। डी-9 (नवमांश) और डी-10 चार्ट शामिल हैं।", duration: "60 मिनट", price: "₹1,500" },
      { name: "वर्षफल (वार्षिक रिपोर्ट)", description: "सौर वापसी चार्ट (ताजिक शास्त्र) के आधार पर आगामी 12 महीनों के लिए एक विस्तृत रोडमैप।", duration: "45 मिनट", price: "₹1,100" },
      { name: "विवाह मिलान", description: "सिर्फ गुण-मिलान से परे। हम नाड़ी दोष, भकूट दोष, मांगलिक स्थिति और मानसिक अनुकूलता की जांच करते हैं। निर्णय: हां/नहीं/उपाय।", duration: "रिपोर्ट", price: "₹701" },
      { name: "करियर और व्यापार परामर्श", description: "\"नौकरी या व्यापार?\" \"मुझे पदोन्नति कब मिलेगी?\" \"क्या यह साझेदारी भाग्यशाली है?\" 10वें भाव का विशिष्ट विश्लेषण।", duration: "30 मिनट", price: "₹900" },
      { name: "बाल/शिक्षा परामर्श", description: "स्ट्रीम चयन (विज्ञान/वाणिज्य/कला), एकाग्रता के मुद्दों और विदेशी अध्ययन की संभावनाओं पर मार्गदर्शन।", duration: "30 मिनट", price: "₹800" },
      { name: "प्रश्न ज्योतिष", description: "उन लोगों के लिए जिनके पास जन्म विवरण नहीं है। 1 विशिष्ट प्रश्न पूछें (जैसे, \"मेरी खोई हुई अंगूठी कहां है?\" \"क्या मैं यह अदालती मामला जीतूंगा?\")।", duration: "15 मिनट", price: "₹500" },
      { name: "मुहूर्त गणना", description: "विवाह, गृह प्रवेश, दुकान खोलने या सी-सेक्शन डिलीवरी के लिए सबसे शुभ समय खोजना।", duration: "रिपोर्ट", price: "₹500" }
    ],
    pujasData: [
      {
        title: "दोष निवारण (उपचारात्मक पूजा)", description: "ग्रहीय बाधाओं को दूर करने के लिए आवश्यक।",
        items: [
          { name: "काल सर्प दोष निवारण", whoNeedsIt: "बार-बार असफलताएं, सांप के सपने, कोई बचत नहीं, अचानक स्वास्थ्य समस्याएं।", vidhi: "गणपति पूजन, राहु-केतु जाप (18,000), नाग-नागिन विसर्जन, हवन।", priceStandard: "₹2,500", pricePremium: "₹5,100", priceExtra: "महा-अनुष्ठान (3 दिन): ₹21,000" },
          { name: "मंगल दोष शांति", whoNeedsIt: "'मांगलिक' व्यक्ति विवाह में देरी या तलाक के खतरों का सामना कर रहे हैं।", vidhi: "दोष को रद्द करने के लिए कुंभ विवाह (महिलाओं के लिए) या अर्क विवाह (पुरुषों के लिए)।", priceStandard: "₹3,100", pricePremium: "₹6,500" },
          { name: "पितृ दोष निवारण", whoNeedsIt: "दुख का पैटर्न, पुरुष संतान की कमी, लगातार पारिवारिक झगड़े।", vidhi: "पिंड दान, विष्णु तर्पण, नारायण बलि हवन। आदर्श रूप से नदी के किनारे किया जाता है।", pricePremium: "₹7,500 (ब्राह्मण भोजन दक्षिणा शामिल)" },
          { name: "चांडाल दोष / गंडमूल शांति", whoNeedsIt: "विशिष्ट नक्षत्रों (अश्विनी, रेवती, आदि) या गुरु-राहु युति में जन्म।", vidhi: "27 विभिन्न स्थानों (प्रतीकात्मक) से पानी का उपयोग करके नक्षत्र शांति हवन।", pricePremium: "₹5,100" }
        ]
      },
      {
        title: "धन और समृद्धि (लक्ष्मी पूजा)", description: "व्यापार वृद्धि और वित्तीय स्थिरता के लिए।",
        items: [
          { name: "श्री यंत्र स्थापना और पूजा", whoNeedsIt: "परम ज्यामिति के माध्यम से प्रचुरता को आकर्षित करना।", vidhi: "कुंकुम अर्चना (1008 नाम) के साथ मेरु श्री यंत्र की प्राण-प्रतिष्ठा।", priceStandard: "₹3,500 (यंत्र लागत को छोड़कर)" },
          { name: "व्यापार वृद्धि हवन", whoNeedsIt: "व्यावसायिक परिसर से 'नज़र' (बुरी नज़र) को हटाता है और बिक्री को बढ़ाता है।", vidhi: "लक्ष्मी-गणेश हवन + कनकधारा स्तोत्र पाठ।", priceStandard: "₹5,100" },
          { name: "कुबेर मंत्र जाप", whoNeedsIt: "रुके हुए धन को अनलॉक करना और ऋणों को साफ़ करना।", vidhi: "भगवान कुबेर (देवताओं के कोषाध्यक्ष) का 1.25 लाख जाप।", priceStandard: "उद्धरण के लिए कॉल करें" }
        ]
      },
      {
        title: "स्वास्थ्य और सुरक्षा (रक्षा पूजा)", description: "गंभीर बीमारी, दुर्घटनाओं और कानूनी दुश्मनों के लिए।",
        items: [
          { name: "महामृत्युंजय अनुष्ठान", whoNeedsIt: "अकाल मृत्यु से बचने और लाइलाज बीमारियों को ठीक करने के लिए।", vidhi: "लघु (21k जाप) या महा (1.25L जाप)।", priceStandard: "₹11,000 (लघु)", priceExtra: "₹51,000 (महा - 7 दिन)" },
          { name: "बगलामुखी पूजा (शत्रु नाशक)", whoNeedsIt: "अदालती मामलों, राजनीति और दुश्मनों को चुप कराने में जीत।", vidhi: "हल्दी माला और पीले फूलों का उपयोग। सख्ती से तंत्रोक्त विधि।", priceStandard: "₹21,000" },
          { name: "रुद्राभिषेक", whoNeedsIt: "सामान्य कल्याण और शांति।", vidhi: "जल, दूध, घी, या लघु रुद्री।", priceStandard: "₹2,100 से शुरू" }
        ]
      }
    ],
    vastuData: [
      { service: "आवासीय वास्तु", scope: "अपार्टमेंट/फ्लैट/बंगला विश्लेषण।", deliverables: "मानचित्र अंकन + उपाय सूची", price: "₹2,500 (1500 वर्ग फुट तक)" },
      { service: "वाणिज्यिक वास्तु", scope: "दुकान/कार्यालय/शोरूम। कैश बॉक्स और मालिक के बैठने पर ध्यान दें।", deliverables: "लेआउट सुधार + यंत्र प्लेसमेंट", price: "₹5,100" },
      { service: "औद्योगिक वास्तु", scope: "कारखाने/गोदाम। मशीनरी प्लेसमेंट और कच्चे माल के प्रवाह पर ध्यान दें।", deliverables: "विस्तृत रिपोर्ट", price: "₹11,000" },
      { service: "प्लॉट चयन", scope: "मिट्टी की ऊर्जा और दिशा की जांच करने के लिए संभावित भूमि स्थल का दौरा करना।", deliverables: "खरीदें/नहीं खरीदें निर्णय", price: "₹2,100 / यात्रा" }
    ],
    epujaData: {
      title: "वैश्विक भक्तों के लिए ई-पूजा",
      subtitle: "दूरी को आपको अपनी जड़ों से अलग न करने दें। विदेश में अपने घर के आराम से प्रामाणिक वैदिक अनुष्ठानों का अनुभव करें।",
      steps: [
         { title: "परामर्श", desc: "पूजा तय करने के लिए पंडितजी के साथ वीडियो कॉल।" },
         { title: "संकल्प", desc: "आपके नाम, गोत्र और स्थान का उपयोग करके लाइव संकल्प।" },
         { title: "लाइव स्ट्रीमिंग", desc: "ज़ूम/गूगल मीट के माध्यम से हवन देखें।" },
         { title: "प्रसाद शिपिंग", desc: "रक्षा सूत्र और विभूति आपको कूरियर की जाती है।" },
      ],
      packagesTitle: "लोकप्रिय एनआरआई पैकेज",
      packagesSubtitle: "आपकी सुविधा और समय क्षेत्र के लिए तैयार।",
      packages: [
        { name: "जन्मदिन आयुष हवन", price: "$151 USD", features: ["दीर्घायु प्रार्थना", "केक काटने का समय", "डिजिटल तस्वीरें"] },
        { name: "ग्रह शांति", price: "$201 USD", sub: "वीज़ा और आप्रवासन", features: ["वीज़ा समस्या समाधान", "कैरियर स्थिरता", "कानूनी जीत"] },
        { name: "वार्षिक परिवार कल्याण", price: "$301 USD", features: ["पूर्ण सुरक्षा", "स्वास्थ्य और धन", "पैतृक शांति"] },
      ]
    },
    reviewsData: [
      { id: 1, name: "राजेश पटेल", location: "वडोदरा, गुजरात", rating: 5, text: "मेरे व्यवसाय के संबंध में पंडितजी की भविष्यवाणी 100% सटीक थी। व्यापार वृद्धि हवन ने मेरी दुकान की ऊर्जा को पूरी तरह से बदल दिया।", date: "सितंबर 2023", service: "व्यापार परामर्श", image: "https://randomuser.me/api/portraits/men/32.jpg" },
      { id: 2, name: "स्नेहा देसाई", location: "मुंबई, महाराष्ट्र", rating: 5, text: "मैं ऑनलाइन पूजा के बारे में बहुत संशय में थी, लेकिन ई-पूजा सेवा निर्बाध थी। वीडियो की गुणवत्ता बहुत अच्छी थी और मैंने मुंबई में बैठे हुए कंपन महसूस किया।", date: "अक्टूबर 2023", service: "ई-पूजा", image: "https://randomuser.me/api/portraits/women/44.jpg" },
      { id: 3, name: "अमिताभ वर्मा", location: "लंदन, यूके", rating: 5, text: "लंदन में मेरे नए घर के लिए वास्तु परामर्श विस्तृत था। पंडितजी ने दिशाओं का पूरी तरह से विश्लेषण करने के लिए गूगल अर्थ का उपयोग किया।", date: "अगस्त 2023", service: "वास्तु शास्त्र", image: "https://randomuser.me/api/portraits/men/85.jpg" },
      { id: 4, name: "प्रिया सिंह", location: "अहमदाबाद", rating: 4, text: "बहुत ही विनम्र और ज्ञानी व्यक्ति। अन्य ज्योतिषियों की तरह आपको डराते नहीं हैं। विवाह मिलान के लिए अत्यधिक अनुशंसित।", date: "नवंबर 2023", service: "विवाह मिलान", image: "https://randomuser.me/api/portraits/women/65.jpg" },
      { id: 5, name: "विक्रम मेहता", location: "सूरत", rating: 5, text: "काल सर्प दोष निवारण पूजा इतनी पवित्रता के साथ आयोजित की गई थी। मुझे तुरंत अपने कंधों से बोझ उतरता हुआ महसूस हुआ।", date: "दिसंबर 2023", service: "दोष निवारण", image: "https://randomuser.me/api/portraits/men/22.jpg" },
      { id: 6, name: "अंजलि गुप्ता", location: "वडोदरा", rating: 5, text: "वडोदरा में सर्वश्रेष्ठ ज्योतिषी। उनकी सलाह व्यावहारिक और आध्यात्मिक है। कोई अनावश्यक रत्न नहीं सुझाए गए।", date: "जनवरी 2024", service: "कुंडली विश्लेषण", image: "https://randomuser.me/api/portraits/women/12.jpg" }
    ],
    contactPage: {
      title: "दिव्य से जुड़ें",
      desc: "जीवन की जटिलताओं को हल करने के लिए तैयार हैं? बुकिंग या पूछताछ के लिए हमसे संपर्क करें। पंडितजी नियुक्ति द्वारा परामर्श के लिए उपलब्ध हैं।",
      visit: "हमें मिलें",
      call: "कॉल / व्हाट्सएप",
      email: "ईमेल",
      paymentTitle: "भुगतान जानकारी",
      paymentImportant: "महत्वपूर्ण: अपने स्लॉट और ब्राह्मणों को बुक करने के लिए 50% अग्रिम अनिवार्य है।",
      bankDetails: "बैंक हस्तांतरण विवरण"
    },
    footer: {
      brandDesc: "जहां आपका भाग्य ईश्वरीय हस्तक्षेप से मिलता है। हम मानवीय प्रयास (पुरुषार्थ) और ईश्वरीय कृपा (कृपा) के बीच की खाई को पाटते हैं।",
      quickLinks: "त्वरित लिंक",
      contactUs: "हमसे संपर्क करें",
      rights: "अंबिका ज्योतिष केंद्र। सर्वाधिकार सुरक्षित।",
      design: "भक्ति के साथ बनाया गया।"
    }
  },
  SA: {
    nav: { home: "गृहम्", about: "परिचयः", services: "सेवाः", pujas: "पूजाः", vastu: "वास्तु", epuja: "ई-पूजा", reviews: "समीक्षाः", contact: "संपर्कः", book: "आरक्षणम् कुरु" },
    hero: { title: "यत्र भाग्यं दैवेच्छया मिलति", subtitle: "पुरुषार्थस्य दैवकृपायाः च सेतुबंधनम् कुरु।", cta1: "परामर्शम् कुरु", cta2: "पूजाः पश्य", trust: "२०००+ भक्ताः विश्वसन्ति" },
    headings: { services: "दिव्य सेवाः", latestReviews: "भक्तानुभवाः", about: "परंपरा", promise: "अंबिका प्रतिज्ञा" },
    home: {
      servicesTitle: "दिव्य सेवाः",
      servicesSubtitle: "आधुनिक समस्यानां कृते प्राचीन ज्ञानम्। स्पष्टतायै स्वमार्गं चिनुत।",
      ctaTitle: "स्पष्टतां प्रति यात्रां आरभत",
      ctaSubtitle: "अद्यैव परामर्शं आरक्षयतु, नक्षत्राणि सफलतां शान्तिं च प्रति भवतां मार्गं प्रदर्शयन्तु।",
      ctaBtn1: "संपर्कं कुरुत",
      ctaBtn2: "पण्डितवर्येण सह वदतु",
      reviewsTitle: "भक्ताः किं वदन्ति",
      reviewsBtn: "सर्वाः समीक्षाः पश्यतु",
      aboutTitle: "आचार्यं मिलतु",
      aboutDesc: "पण्डितः अनिलकुमार व्यासः स्वर्णपदकविजेता ज्योतिषविशारदः अस्ति, येन द्वयोः दशकयोः अधिका कठोरा साधना कृता। नाडीज्योतिषस्य तन्त्रशास्त्रस्य च परम्परां प्राप्य सः तादृशानि समाधानानि यच्छति यानि १००% शास्त्रशुद्धानि सन्ति।",
      aboutLink: "पण्डितवर्यस्य विषय अधिकं जानन्तु"
    },
    aboutPage: {
      title: "पण्डितः अनिलकुमार व्यासः",
      subtitle: "परंपरा",
      tagline: "वैदिक परंपरायाः संरक्षकः",
      desc: "पण्डितः अनिलकुमार व्यासः न केवलं ज्योतिषी अस्ति; सः वैदिक परम्परायाः संरक्षकः अस्ति। २५ वर्षेभ्यः अधिकायाः कठोरायाः साधनायाः सह सः वडोदरा नगरे आध्यात्मिकमार्गदर्शनस्य प्रकाशस्तम्भः इव तिष्ठति।",
      eduTitle: "शैक्षिक उत्कृष्टता",
      edu1: "ज्योतिष विशारदः - भारतीय विद्या भवनात् स्वर्णपदकविजेता।",
      edu2: "कर्मकाण्ड भास्करः - काशी (वाराणसी) तः ऋग्वेदिक-यजुर्वेद-अनुष्ठानेषु प्रमाणितः।",
      edu3: "वास्तु शास्त्री - आवासीय- औद्योगिक-वास्तु-विषये उन्नत-प्रमाणपत्रम्।",
      lineageTitle: "वंशपरंपरा",
      lineageDesc: "उत्तरगुजरातस्य एकस्मात् पारम्परिकब्राह्मणकुलात् आगच्छन् पण्डितजी स्वपूर्वजेभ्यः नाडीज्योतिषस्य तन्त्रशास्त्रस्य (सात्त्विक) च गुप्तज्ञानं प्राप्तवान्।",
      missionTitle: "अस्माकं लक्ष्यम्",
      missionDesc: "ज्योतिषस्य रहस्यं दूरीकर्तुं अन्धविश्वासं विना सामान्यजनानां कृते उच्चगुणवत्तायुक्तानां वैदिकअनुष्ठानानां सुलभताम् आनयितुं च।"
    },
    servicesData: [
      { name: "सम्पूर्ण कुण्डली विश्लेषणम्", description: "१२ भावानां व्यापकं विश्लेषणम्। करियर, वित्त, स्वास्थ्य, विवाह, सन्तानान् च समाविशति। डी-९ (नवमांश) तथा डी-१० चार्ट समाविष्टौ।", duration: "६० निमेषाः", price: "₹१,५००" },
      { name: "वर्षफलम् (वार्षिक प्रतिवेदनम्)", description: "सौर-वापसी-चार्ट (ताजिक शास्त्र) आधारिकृत्य आगामी १२ मासानां विस्तृतं मार्गचित्रम्।", duration: "४५ निमेषाः", price: "₹१,१००" },
      { name: "विवाह मिलनम्", description: "केवलं गुण-मिलनात् परम्। वयं नाडी दोषं, भकूट दोषं, माङ्गलिक स्थितिं, मानसिक अनुकूलतां च पश्यामः। निर्णयः - आम/न/उपायः।", duration: "प्रतिवेदनम्", price: "₹७०१" },
      { name: "करियर एवं व्यापार परामर्शः", description: "नौकरी वा व्यवसायः? मम पदोन्नतिः कदा भविष्यति? किं एषा साझेदारी भाग्यशाली अस्ति? दशम भावस्य विशिष्ट विश्लेषणम्।", duration: "३० निमेषाः", price: "₹९००" },
      { name: "बाल/शिक्षा परामर्शः", description: "स्ट्रीम चयन (विज्ञान/वाणिज्य/कला), एकाग्रता समस्याः, विदेश अध्ययन सम्भावनाः च उपरि मार्गदर्शनम्।", duration: "३० निमेषाः", price: "₹८००" },
      { name: "प्रश्न ज्योतिषः", description: "येषां समीपे जन्मविवरणं नास्ति। १ विशिष्ट प्रश्नं पृच्छतु (यथा - मम लुप्तं मुद्रिका कुत्र अस्ति? किं अहं एतत् न्यायालय प्रकरणं जेष्यामि?)।", duration: "१५ निमेषाः", price: "₹५००" },
      { name: "मुहूर्त गणना", description: "विवाह, गृह प्रवेश, दुकान उद्घाटन, सी-सेक्शन प्रसव वा कृते शुभ समयं अन्वेषणम्।", duration: "प्रतिवेदनम्", price: "₹५००" }
    ],
    pujasData: [
      {
        title: "दोष निवारणम् (उपचारात्मक पूजाः)", description: "ग्रहबाधाः दूरीकर्तुं आवश्यकम्।",
        items: [
          { name: "काल सर्प दोष निवारणम्", whoNeedsIt: "पुनः पुनः असफलताः, सर्प स्वप्नाः, धनसंचयः नास्ति, अकस्मात् स्वास्थ्य समस्याः।", vidhi: "गणपति पूजनम्, राहु-केतु जापः (१८,०००), नाग-नागिन विसर्जनम्, हवनम्।", priceStandard: "₹२,५००", pricePremium: "₹५,१००", priceExtra: "महा-अनुष्ठानम् (३ दिनानि) - ₹२१,०००" },
          { name: "मङ्गल दोष शान्तिः", whoNeedsIt: "'माङ्गलिक' जनाः ये विवाहे विलम्बं वा विवाहविच्छेदस्य भयं अनुभवन्ति।", vidhi: "दोषं दूरीकर्तुं कुम्भ विवाहः (स्त्रीणां कृते) वा अर्क विवाहः (पुरुषाणां कृते)।", priceStandard: "₹३,१००", pricePremium: "₹६,५००" },
          { name: "पितृ दोष निवारणम्", whoNeedsIt: "दुःखस्य प्रतिरूपम्, पुरुष संततेः अभावः, निरन्तरं पारिवारिक कलहः।", vidhi: "पिण्ड दानम्, विष्णु तर्पणम्, नारायण बलि हवनम्। नदीतटे क्रियते।", pricePremium: "₹७,५०० (ब्राह्मण भोजन दक्षिणा सह)" },
          { name: "चाण्डाल दोष / गण्डमूल शान्तिः", whoNeedsIt: "विशिष्ट नक्षत्रेषु (अश्विनी, रेवती, आदि) वा गुरु-राहु युतौ जन्म।", vidhi: "२७ विभिन्न स्थानेभ्यः (प्रतीकात्मक) जलं उपयुज्य नक्षत्र शान्ति हवनम्।", pricePremium: "₹५,१००" }
        ]
      },
      {
        title: "धनं एवं समृद्धिः (लक्ष्मी पूजाः)", description: "व्यापार वृद्धये वित्तीय स्थिरतायै च।",
        items: [
          { name: "श्री यन्त्र स्थापना एवं पूजा", whoNeedsIt: "परम ज्यामिति माध्यमेन प्रचुरतां आकर्षितुम्।", vidhi: "कुंकुम अर्चना (१००८ नामानि) सह मेरु श्री यन्त्रस्य प्राण-प्रतिष्ठा।", priceStandard: "₹३,५०० (यन्त्र मूल्यं विना)" },
          { name: "व्यापार वृद्धि हवनम्", whoNeedsIt: "व्यावसायिक परिसरात् 'दृष्टिदोषं' दूरीकरोति विक्रयं च वर्धयति।", vidhi: "लक्ष्मी-गणेश हवनम् + कनकधारा स्तोत्र पाठः।", priceStandard: "₹५,१००" },
          { name: "कुबेर मन्त्र जापः", whoNeedsIt: "अवरुद्धं धनं प्राप्तुं ऋणं च दूरीकर्तुम्।", vidhi: "भगवान् कुबेरस्य (देवतानां कोषाध्यक्षः) १.२५ लक्ष जापः।", priceStandard: "मूल्याय सम्पर्कं कुरुत" }
        ]
      },
      {
        title: "स्वास्थ्यं एवं सुरक्षा (रक्षा पूजाः)", description: "गम्भीर रोगाय, दुर्घटनायै, कानूनी शत्रुभ्यः च।",
        items: [
          { name: "महामृत्युंजय अनुष्ठानम्", whoNeedsIt: "अकाल मृत्योः रक्षणाय असाध्य रोगाणां निवारणाय च।", vidhi: "लघु (२१ सहस्र जापः) वा महा (१.२५ लक्ष जापः)।", priceStandard: "₹११,००० (लघु)", priceExtra: "₹५१,००० (महा - ७ दिनानि)" },
          { name: "बगलामुखी पूजा (शत्रु नाशक)", whoNeedsIt: "न्यायालय प्रकरणेषु, राजनीतौ, शत्रून् शान्तं कर्तुं च विजयः।", vidhi: "हरिद्रा माला तथा पीत पुष्पाणां प्रयोगः। तन्त्रोक्त विधिः।", priceStandard: "₹२१,०००" },
          { name: "रुद्राभिषेकः", whoNeedsIt: "सामान्य कल्याणं शान्तिः च।", vidhi: "जलम्, दुग्धम्, घृतम्, वा लघु रुद्री।", priceStandard: "₹२,१०० तः आरभ्यते" }
        ]
      }
    ],
    vastuData: [
      { service: "आवासीय वास्तु", scope: "अपार्टमेंट/फ्लैट/बंगला विश्लेषणम्।", deliverables: "मानचित्र अंकनम् + उपाय सूची", price: "₹२,५०० (१५०० वर्ग फुट पर्यन्तम्)" },
      { service: "वाणिज्यिक वास्तु", scope: "दुकान/कार्यालय/शोरूम। धन पेटिका तथा स्वामिनः आसनं प्रति ध्यानम्।", deliverables: "विन्यास सुधारः + यन्त्र स्थापनम्", price: "₹५,१००" },
      { service: "औद्योगिक वास्तु", scope: "कारखाना/गोदाम। यन्त्र स्थापनं तथा कच्चा मालस्य प्रवाहं प्रति ध्यानम्।", deliverables: "विस्तृत प्रतिवेदनम्", price: "₹११,०००" },
      { service: "भूखण्ड चयनम्", scope: "मृत्तिकायाः ऊर्जां दिशं च परीक्षितुं सम्भावित भूमि स्थलस्य निरीक्षणम्।", deliverables: "क्रय/न क्रय निर्णयः", price: "₹२,१०० / यात्रा" }
    ],
    epujaData: {
      title: "वैश्विक भक्तेभ्यः ई-पूजा",
      subtitle: "दूरत्वं भवन्तं भवताम् मूलेभ्यः पृथक् न करोतु। विदेशे स्वगृहस्य आरामे प्रामाणिक वैदिक अनुष्ठानानां अनुभवं कुरुत।",
      steps: [
         { title: "परामर्शः", desc: "पूजां निश्चितुं पण्डितवर्येण सह वीडियो वार्ता।" },
         { title: "संकल्पः", desc: "भवताम् नाम, गोत्रं, स्थानं च उपयुज्य जीवन्तः संकल्पः।" },
         { title: "प्रत्यक्ष प्रसारणम्", desc: "ज़ूम/गूगल मीट माध्यमेन हवनं पश्यन्तु।" },
         { title: "प्रसाद प्रेषणम्", desc: "रक्षा सूत्रं विभूतिः च भवते प्रेष्यते।" },
      ],
      packagesTitle: "लोकप्रिय एनआरआई पैकेजोः",
      packagesSubtitle: "भवताम् सुविधायै समय क्षेत्राय च सज्जीकृतम्।",
      packages: [
        { name: "जन्मदिन आयुष हवनम्", price: "$१५१ USD", features: ["दीर्घायु प्रार्थना", "केक कर्तन समयः", "डिजिटल चित्राणि"] },
        { name: "ग्रह शान्तिः", price: "$२०१ USD", sub: "वीज़ा एवं आप्रवासन", features: ["वीज़ा समस्या समाधानम्", "कैरियर स्थिरता", "कानूनी विजयः"] },
        { name: "वार्षिक परिवार कल्याणम्", price: "$३०१ USD", features: ["पूर्ण सुरक्षा", "स्वास्थ्यं एवं धनम्", "पैतृक शान्तिः"] },
      ]
    },
    reviewsData: [
      { id: 1, name: "राजेश पटेलः", location: "वडोदरा, गुजरात", rating: 5, text: "मम व्यवसायस्य विषय पण्डितवर्यस्य भविष्यवाणी १००% सत्य आसीत्। व्यापार वृद्धि हवनेन मम दुकानस्य ऊर्जा पूर्णतया परिवर्तिता।", date: "सितम्बर २०२३", service: "व्यापार परामर्शः", image: "https://randomuser.me/api/portraits/men/32.jpg" },
      { id: 2, name: "स्नेहा देसाई", location: "मुम्बई, महाराष्ट्र", rating: 5, text: "अहं ऑनलाइन पूजा विषय बहु संशये आसम्, किन्तु ई-पूजा सेवा अति उत्तमा आसीत्। वीडियो गुणवत्ता उत्तमा आसीत् तथा मया मुम्बई नगरे उपविश्य कम्पनं अनुभूतम्।", date: "अक्टूबर २०२३", service: "ई-पूजा", image: "https://randomuser.me/api/portraits/women/44.jpg" },
      { id: 3, name: "अमिताभ वर्मा", location: "लन्दन, यूके", rating: 5, text: "लन्दन नगरे मम नूतन गृहस्य वास्तु परामर्शः विस्तृतः आसीत्। पण्डितवर्येण दिशानां पूर्णतया विश्लेषणं कर्तुं गूगल अर्थ उपयुक्त्तम्।", date: "अगस्त २०२३", service: "वास्तु शास्त्रम्", image: "https://randomuser.me/api/portraits/men/85.jpg" },
      { id: 4, name: "प्रिया सिंह", location: "अहमदाबाद", rating: 4, text: "अति विनम्रः ज्ञानी च जनः। अन्य ज्योतिषिणः इव भवन्तं न भाययति। विवाह मिलनस्य कृते अत्यधिकं अनुशंसितम्।", date: "नवम्बर २०२३", service: "विवाह मिलनम्", image: "https://randomuser.me/api/portraits/women/65.jpg" },
      { id: 5, name: "विक्रम मेहता", location: "सूरत", rating: 5, text: "काल सर्प दोष निवारण पूजा अति पवित्रता सह आयोजिता आसीत्। मया शीघ्रमेव स्वस्कन्धयोः भारः अपगतः इव अनुभूतम्।", date: "दिसम्बर २०२३", service: "दोष निवारणम्", image: "https://randomuser.me/api/portraits/men/22.jpg" },
      { id: 6, name: "अंजलि गुप्ता", location: "वडोदरा", rating: 5, text: "वडोदरा नगरे सर्वश्रेष्ठः ज्योतिषी। तस्य परामर्शः व्यावहारिकः आध्यात्मिकः च अस्ति। कोऽपि अनावश्यकः रत्नः न सूचितः।", date: "जनवरी २०२४", service: "कुण्डली विश्लेषणम्", image: "https://randomuser.me/api/portraits/women/12.jpg" }
    ],
    contactPage: {
      title: "दैवेन सह सम्बध्यताम्",
      desc: "जीवनस्य जटिलताः समाधातुं सज्जाः? आरक्षणाय वा पूछताछाय अस्मान् सम्पर्कं कुरुत। पण्डितवर्यः नियुक्त्या परामर्शाय उपलब्धः अस्ति।",
      visit: "अस्मान् मिलतु",
      call: "कॉल / व्हाट्सएप",
      email: "ईमेल",
      paymentTitle: "भुगतान सूचना",
      paymentImportant: "महत्वपूर्णम्: स्व-स्थानं ब्राह्मणांश्च आरक्षितुं ५०% अग्रिमधनं अनिवार्यम् अस्ति।",
      bankDetails: "बैंक हस्तांतरण विवरणम्"
    },
    footer: {
      brandDesc: "यत्र भवताम् भाग्यं ईश्वरीय हस्तक्षेपेण मिलति। वयं मानवीय प्रयास (पुरुषार्थ) ईश्वरीय कृपा (कृपा) च मध्ये सेतुं बन्धयामः।",
      quickLinks: "त्वरित लिंक",
      contactUs: "अस्मान् सम्पर्कं कुरुत",
      rights: "अम्बिका ज्योतिष केन्द्र। सर्वाधिकार सुरक्षित।",
      design: "भक्त्या निर्मितम्।"
    }
  }
};