export type B = { en: string; ar: string }

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=75`

export const IMG = {
  hero: u('1515187029135-18ee286d815b', 2200),
  who: u('1521737852567-6949f3f9f2b5', 1800),
  learn: u('1531545514256-b1400bc00f31'),
  speak: u('1587825140708-dfaf72ae4b04'),
  build: u('1586936893354-362ad6ae47ba'),
  connect: u('1522202176988-66273c2fd55f'),
  green: u('1785828900337-9297370b0f67', 2000),
  join: u('1648250537652-a648421c588c', 2000),
  cta: u('1558008258-3256797b43f3', 2000),
  speaking: u('1544531586-fde5298cdd40'),
  tot: u('1523240795612-9a054b0db644'),
  policy: u('1620325867502-221cfb5faa5f'),
  conf: u('1531058020387-3be344556be6'),
  job: u('1620326079720-500ba364af6a'),
  brain: u('1758691736804-4e88c52ad58b'),
}

export const LOGO = new URL('./assets/attachment-1.png', import.meta.url).href

export const LOCAL_IMG = {
  learn: new URL('./assets/events/learn-tot-2025-2.jpg', import.meta.url).href,
  speak: new URL('./assets/events/speak-gov-2.jpg', import.meta.url).href,
  build: new URL('./assets/events/build-tot-rihal.jpg', import.meta.url).href,
  connect: new URL('./assets/events/connect-workshop.jpeg', import.meta.url).href,
  bacMeetup: new URL('./assets/events/event-bac-meetup.jpg', import.meta.url).href,
  publicSpeaking: new URL('./assets/events/event-public-speaking.jpg', import.meta.url).href,
  policyPaper: new URL('./assets/events/event-policy-paper.jpg', import.meta.url).href,
  governance: new URL('./assets/events/event-governance.jpg', import.meta.url).href,
  personalBranding: new URL('./assets/events/event-personal-branding.jpg', import.meta.url).href,
  cyberSecurity: new URL('./assets/events/project-cyber-security.jpg', import.meta.url).href,
}

export const NAV: { path: string; label: B }[] = [
  { path: '/about', label: { en: 'About', ar: 'من نحن' } },
  { path: '/what-we-do', label: { en: 'What We Do', ar: 'ماذا نفعل' } },
  { path: '/projects', label: { en: 'Projects', ar: 'المشاريع' } },
  { path: '/impact', label: { en: 'Impact', ar: 'الأثر' } },
  { path: '/international', label: { en: 'International', ar: 'دولي' } },
  { path: '/team', label: { en: 'Team', ar: 'الفريق' } },
  { path: '/news', label: { en: 'News', ar: 'الأخبار' } },
]

export const CONTACT = {
  email: 'youthledz@gmail.com',
  phone: '+213 552 377 319',
  instagram: 'youthledalgeria_off',
}

export const STATS: { n: number; s: string; label: B }[] = [
  { n: 7, s: '+', label: { en: 'Provinces', ar: 'ولايات' } },
  { n: 500, s: '+', label: { en: 'Beneficiaries reached', ar: 'مستفيد تم الوصول إليهم' } },
  { n: 50, s: '+', label: { en: 'Active volunteers', ar: 'متطوع نشط' } },
  { n: 60, s: '+', label: { en: 'Activities conducted', ar: 'نشاط منجز' } },
  { n: 2018, s: '', label: { en: 'Founded', ar: 'سنة التأسيس' } },
]

export const PILLARS: {
  key: string
  word: B
  line: B
  desc: B
  tags: B[]
  img: string
  crop: string
}[] = [
  {
    key: 'learn',
    word: { en: 'LEARN', ar: 'تعلّم' },
    line: { en: 'Training & leadership skills', ar: 'التدريب ومهارات القيادة' },
    desc: {
      en: 'Practical training, life skills and leadership development, delivered through non-formal education and learning by doing.',
      ar: 'تدريب عملي ومهارات حياتية وتنمية للقيادة، عبر التعليم غير النظامي والتعلّم بالممارسة.',
    },
    tags: [
      { en: 'Practical skills', ar: 'مهارات عملية' },
      { en: 'Life skills', ar: 'مهارات حياتية' },
      { en: 'Learning by doing', ar: 'التعلّم بالممارسة' },
    ],
    img: LOCAL_IMG.learn,
    crop: '50% 42%',
  },
  {
    key: 'speak',
    word: { en: 'SPEAK', ar: 'تحدّث' },
    line: { en: 'Dialogue, debate and youth participation', ar: 'الحوار والنقاش ومشاركة الشباب' },
    desc: {
      en: 'Public speaking, debate and structured dialogue that give young people a real voice with peers, institutions and decision-makers.',
      ar: 'خطابة ونقاش وحوار منظّم يمنح الشباب صوتاً حقيقياً أمام أقرانهم والمؤسسات وصنّاع القرار.',
    },
    tags: [
      { en: 'Public speaking', ar: 'الخطابة' },
      { en: 'Debate', ar: 'النقاش' },
      { en: 'Youth voice', ar: 'صوت الشباب' },
    ],
    img: LOCAL_IMG.speak,
    crop: '50% 40%',
  },
  {
    key: 'build',
    word: { en: 'BUILD', ar: 'ابنِ' },
    line: { en: 'Initiatives, entrepreneurship and job creation', ar: 'المبادرات وريادة الأعمال وخلق فرص العمل' },
    desc: {
      en: 'Young people design, test and launch projects: community solutions, social enterprises and ideas that create work.',
      ar: 'يصمّم الشباب مبادراتهم ويختبرونها ويطلقونها: حلول مجتمعية ومشاريع اجتماعية وأفكار تخلق فرص العمل.',
    },
    tags: [
      { en: 'Entrepreneurship', ar: 'ريادة الأعمال' },
      { en: 'Innovation', ar: 'الابتكار' },
      { en: 'Community solutions', ar: 'حلول مجتمعية' },
    ],
    img: LOCAL_IMG.build,
    crop: '50% 45%',
  },
  {
    key: 'connect',
    word: { en: 'CONNECT', ar: 'تواصل' },
    line: { en: 'Experience exchange and networking', ar: 'تبادل الخبرات وبناء الشبكات' },
    desc: {
      en: 'Mentorship, exchange and partnerships across wilayas and borders, so every initiative has a network behind it.',
      ar: 'إرشاد وتبادل وشراكات عبر الولايات والحدود، لتجد كل مبادرة شبكة تسندها.',
    },
    tags: [
      { en: 'Mentorship', ar: 'الإرشاد' },
      { en: 'Youth exchanges', ar: 'التبادل الشبابي' },
      { en: 'Partnerships', ar: 'الشراكات' },
    ],
    img: LOCAL_IMG.connect,
    crop: '50% 38%',
  },
]

export const STAGES: { word: B; desc: B }[] = [
  {
    word: { en: 'POTENTIAL', ar: 'الإمكانات' },
    desc: { en: 'Every young person carries ideas, energy and ambition.', ar: 'كل شاب وشابة يحمل أفكاراً وطاقة وطموحاً.' },
  },
  {
    word: { en: 'SKILLS', ar: 'المهارات' },
    desc: {
      en: 'Practical training and non-formal learning turn ambition into capability.',
      ar: 'التدريب العملي والتعلّم غير النظامي يحوّلان الطموح إلى قدرة.',
    },
  },
  {
    word: { en: 'LEADERSHIP', ar: 'القيادة' },
    desc: {
      en: 'Confidence, communication and responsibility grow through doing.',
      ar: 'تنمو الثقة والتواصل والمسؤولية بالممارسة.',
    },
  },
  {
    word: { en: 'INITIATIVES', ar: 'المبادرات' },
    desc: {
      en: 'Young people design and launch projects that answer real needs.',
      ar: 'يصمّم الشباب مشاريع تجيب عن احتياجات حقيقية ويطلقونها.',
    },
  },
  {
    word: { en: 'IMPACT', ar: 'الأثر' },
    desc: {
      en: 'Communities benefit, and the network grows stronger.',
      ar: 'تستفيد المجتمعات وتزداد الشبكة قوة.',
    },
  },
]

export const GOALS: { title: B; desc: B }[] = [
  {
    title: { en: 'Youth Leadership', ar: 'القيادة الشبابية' },
    desc: { en: 'Build confidence, communication and civic engagement.', ar: 'بناء الثقة والتواصل والمشاركة المدنية.' },
  },
  {
    title: { en: 'Employability', ar: 'قابلية التوظيف' },
    desc: { en: 'Support young people with soft skills and digital readiness.', ar: 'دعم الشباب بالمهارات الناعمة والجاهزية الرقمية.' },
  },
  {
    title: { en: 'Entrepreneurship', ar: 'ريادة الأعمال' },
    desc: { en: 'Encourage youth-led projects and economic initiatives.', ar: 'تشجيع المشاريع والمبادرات الاقتصادية التي يقودها الشباب.' },
  },
  {
    title: { en: 'Dialogue & Participation', ar: 'الحوار والمشاركة' },
    desc: {
      en: 'Connect young people with institutional stakeholders and decision-makers.',
      ar: 'ربط الشباب بالأطراف المؤسساتية وصنّاع القرار.',
    },
  },
  {
    title: { en: 'Green Action & Sustainability', ar: 'العمل الأخضر والاستدامة' },
    desc: { en: 'Advance circular economy and environmental education.', ar: 'النهوض بالاقتصاد الدائري والتربية البيئية.' },
  },
  {
    title: { en: 'National Network Growth', ar: 'توسيع الشبكة الوطنية' },
    desc: { en: 'Strengthen local bureaux, volunteers and regional reach.', ar: 'تعزيز المكاتب المحلية والمتطوعين والانتشار الجهوي.' },
  },
]

export const WORKS: { title: B; desc: B }[] = [
  {
    title: { en: 'Practical Training & Workshops', ar: 'التدريب العملي وورشات العمل' },
    desc: { en: 'Skills learned by doing, in rooms where everyone takes part.', ar: 'مهارات تُكتسب بالممارسة، في قاعات يشارك فيها الجميع.' },
  },
  {
    title: { en: 'Experience Exchange & Mentorship', ar: 'تبادل الخبرات والإرشاد' },
    desc: { en: 'Peers and mentors share what has worked, and what has not.', ar: 'يتشارك الأقران والمرشدون ما نجح وما لم ينجح.' },
  },
  {
    title: { en: 'Structured Policy Dialogue', ar: 'حوار سياساتي منظّم' },
    desc: { en: 'Young voices prepared and heard by institutions and decision-makers.', ar: 'أصوات شبابية مُعدّة ومسموعة لدى المؤسسات وصنّاع القرار.' },
  },
  {
    title: { en: 'Strategic Partnerships', ar: 'شراكات استراتيجية' },
    desc: { en: 'Local and international partners open doors for every initiative.', ar: 'شركاء محليون ودوليون يفتحون الأبواب أمام كل مبادرة.' },
  },
]

export type Project = {
  id: string
  title: B
  cat: B
  kind: 'training' | 'entrepreneurship' | 'dialogue' | 'community'
  outcome: B
  img: string
}

export const PROJECTS: Project[] = [
  {
    id: 'cyber-security-workshop',
    title: { en: 'Cyber Security Workshop', ar: 'تكوين الأمن السيبراني' },
    cat: { en: 'Digital skills', ar: 'المهارات الرقمية' },
    kind: 'training',
    outcome: { en: 'A Youth LED workshop covering threat detection, network security, data protection and compliance and risk.', ar: 'ورشة لشباب ليد حول كشف التهديدات وأمن الشبكات وحماية البيانات والامتثال والمخاطر.' },
    img: LOCAL_IMG.cyberSecurity,
  },
  {
    id: 'green-impact',
    title: { en: 'Green Impact', ar: 'الأثر الأخضر' },
    cat: { en: 'Green entrepreneurship', ar: 'ريادة الأعمال الخضراء' },
    kind: 'entrepreneurship',
    outcome: { en: '300+ young people engaged and sensitised; 115 participants trained.', ar: 'أكثر من 300 شاب وشابة تم إشراكهم وتحسيسهم، و115 مشاركاً تم تدريبهم.' },
    img: IMG.green,
  },
  {
    id: 'public-speaking',
    title: { en: 'Public Speaking Workshop', ar: 'ورشة الخطابة' },
    cat: { en: 'Communication', ar: 'التواصل' },
    kind: 'dialogue',
    outcome: { en: 'Structured practice in speaking with clarity and confidence.', ar: 'تدريب منظّم على التحدث بوضوح وثقة.' },
    img: LOCAL_IMG.publicSpeaking,
  },
  {
    id: 'training-of-trainers',
    title: { en: 'Training of Trainers — Soft Skills', ar: 'تكوين المكوّنين — المهارات الناعمة' },
    cat: { en: 'Capacity building', ar: 'بناء القدرات' },
    kind: 'training',
    outcome: { en: 'Building facilitation capacity among young trainers.', ar: 'بناء قدرات التيسير لدى المكوّنين الشباب.' },
    img: LOCAL_IMG.learn,
  },
  {
    id: 'bac-fac-meetup',
    title: { en: 'BAC-FAC Meetup', ar: 'لقاء باك-فاك' },
    cat: { en: 'Peer learning', ar: 'التعلّم بين الأقران' },
    kind: 'community',
    outcome: { en: 'A peer meetup around the move from baccalaureate to university.', ar: 'لقاء بين الأقران حول الانتقال من البكالوريا إلى الجامعة.' },
    img: LOCAL_IMG.bacMeetup,
  },
  {
    id: 'design-thinking-games',
    title: { en: 'Creating Games for Children with Design Thinking', ar: 'ابتكار ألعاب للأطفال بالتفكير التصميمي' },
    cat: { en: 'Innovation', ar: 'الابتكار' },
    kind: 'entrepreneurship',
    outcome: { en: 'Design thinking applied to a real product for children.', ar: 'تطبيق التفكير التصميمي على منتج حقيقي موجّه للأطفال.' },
    img: IMG.brain,
  },
  {
    id: 'policy-paper',
    title: { en: 'Writing a Policy Paper', ar: 'كتابة ورقة سياساتية' },
    cat: { en: 'Policy dialogue', ar: 'الحوار السياساتي' },
    kind: 'dialogue',
    outcome: { en: 'Turning youth perspectives into structured recommendations.', ar: 'تحويل وجهات نظر الشباب إلى توصيات منظّمة.' },
    img: LOCAL_IMG.policyPaper,
  },
  {
    id: 'job-hunting',
    title: { en: 'Job Hunting Skills & Tools', ar: 'مهارات وأدوات البحث عن عمل' },
    cat: { en: 'Employability', ar: 'قابلية التوظيف' },
    kind: 'training',
    outcome: { en: 'Practical tools for CVs, interviews and digital job search.', ar: 'أدوات عملية للسيرة الذاتية والمقابلات والبحث الرقمي عن عمل.' },
    img: LOCAL_IMG.personalBranding,
  },
  {
    id: 'revade',
    title: { en: 'REVADE', ar: 'ريفاد' },
    cat: { en: 'Project', ar: 'مشروع' },
    kind: 'community',
    outcome: { en: 'Project details to be confirmed with Youth LED Algeria.', ar: 'تفاصيل المشروع في انتظار تأكيدها من جمعية شباب ليد الجزائر.' },
    img: IMG.conf,
  },
]

export type EventRecord = {
  id: string
  title?: B
  image?: string
  date?: B
  location?: B
  summary?: B
  topics?: B[]
  organiser?: B
  facilitator?: B
  participants?: B
  notes?: B
  partner?: B
  href?: string
}

export const EVENTS: EventRecord[] = [
  {
    id: 'tot-soft-skills-closing-2026',
    title: { en: 'Closing the Training of Trainers in Soft Skills', ar: 'اختتام تدريب المدربين في المهارات الناعمة' },
    date: { en: '19 September 2026', ar: '19 سبتمبر 2026' },
    location: { en: 'Konrad-Adenauer-Stiftung office, Algiers', ar: 'مقر مؤسسة كونراد أديناور، مكتب الجزائر' },
    summary: { en: 'A closing meeting to exchange training experiences, review the ToT learning journey and strengthen the transfer of soft skills to young people in Algeria.', ar: 'لقاء ختامي لتبادل تجارب التدريب ومراجعة مكتسبات مسار تدريب المدربين وتعزيز نقل المهارات الناعمة إلى شباب آخرين في الجزائر.' },
    organiser: { en: 'Youth LED Algeria', ar: 'شباب ليد الجزائر' },
    facilitator: { en: 'Idir Nasser BELKEBIR', ar: 'إدير ناصر بلكبير' },
    participants: { en: 'ToT participants; no complete attendance list published.', ar: 'المشاركون في مسار تدريب المدربين؛ لم تُنشر قائمة كاملة للحضور.' },
    partner: { en: 'Konrad-Adenauer-Stiftung Algérie', ar: 'مؤسسة كونراد أديناور الجزائر' },
    href: 'https://dz.linkedin.com/in/meriem-benbouabdellah-a30650421',
  },
  {
    id: 'bac-fac-meetups-2026',
    title: { en: 'BAC-FAC Meetups', ar: 'لقاءات باك-فاك' },
    image: LOCAL_IMG.bacMeetup,
    date: { en: '16 July 2026, from 09:30', ar: '16 جويلية 2026، ابتداءً من 09:30' },
    location: { en: 'Arzaki Taboudoucht Cultural Centre, Ben Aknoun, Algiers', ar: 'المركز الثقافي أرزقي تابودوشت، بن عكنون، الجزائر' },
    summary: { en: 'A guidance meetup connecting new baccalaureate graduates with university and professional experience to support informed choices.', ar: 'لقاء توجيهي يربط الناجحين الجدد في البكالوريا بأصحاب التجارب الجامعية والمهنية لمساعدتهم على بناء اختيارات واعية.' },
    organiser: { en: 'Youth LED Algeria, co-organiser', ar: 'شباب ليد الجزائر، شريك في التنظيم' },
    participants: { en: '2026 baccalaureate graduates, parents, students, graduates and young professionals.', ar: 'حاملو بكالوريا 2026، الأولياء، الطلبة، الخريجون والمهنيون الشباب.' },
    partner: { en: 'DZ Young Leaders, Arzaki Taboudoucht Cultural Centre, LEAP DZ, YIXIN E-Santé and ELEVENT Youth Clubs', ar: 'DZ Young Leaders والمركز الثقافي أرزقي تابودوشت وLEAP DZ وYIXIN E-Santé وELEVENT Youth Clubs' },
    href: 'https://dz.linkedin.com/company/youthledalgeria',
  },
  {
    id: 'project-management-public-speaking-2026',
    title: { en: 'Project Management & Public Speaking Essentials', ar: 'أساسيات إدارة المشاريع والتحدث أمام الجمهور' },
    image: LOCAL_IMG.publicSpeaking,
    date: { en: '16 June 2026, 09:30', ar: '16 جوان 2026، 09:30' },
    summary: { en: 'A practical workshop on community needs, SMART planning, monitoring and evaluation, and confident project presentation.', ar: 'ورشة عملية حول تحديد احتياجات المجتمع والتخطيط بمنهجية SMART والمتابعة والتقييم وتقديم المشاريع بثقة.' },
    facilitator: { en: 'BELHAMRA Hamid', ar: 'حميد بلحمرة' },
    participants: { en: 'Young people, students, volunteers, initiative builders and people interested in leadership and community work.', ar: 'شباب وطلبة ومتطوعون ورواد مبادرات ومهتمون بالقيادة والعمل المجتمعي.' },
    href: 'https://www.linkedin.com/posts/youthledalgeria_youthledalgeria-projectmanagement-publicspeaking-activity-7489823763392413696-Dv47',
  },
  {
    id: 'save-earth-game-2026',
    title: { en: 'Save the Earth, One Game at a Time 2026', ar: 'أنقذ الأرض، لعبة واحدة في كل مرة 2026' },
    date: { en: '9-10 May 2026', ar: '9-10 ماي 2026' },
    location: { en: 'Lot N° 214, Pins Maritimes, Cité les Mandarines, Mohammadia', ar: 'القطعة رقم 214، الصنوبر البحري، حي اليوسفي، المحمدية' },
    summary: { en: 'A two-day design-thinking experience for co-creating environmental awareness games for children through prototyping, testing and teamwork.', ar: 'تجربة على مدى يومين لتصميم ألعاب تعليمية ترفع الوعي البيئي لدى الأطفال باستخدام التفكير التصميمي والنمذجة والاختبار والعمل الجماعي.' },
    topics: [{ en: 'Design thinking', ar: 'التفكير التصميمي' }, { en: 'Environmental education', ar: 'التربية البيئية' }, { en: 'Teamwork', ar: 'العمل الجماعي' }],
    participants: { en: 'Youth, educators, association members, students, facilitators and community leaders; 15 places announced, not confirmed attendance.', ar: 'شباب ومربون وأعضاء جمعيات وطلبة وميسّرون وقادة مجتمعيون؛ أُعلن عن 15 مكاناً دون إثبات عدد الحضور.' },
    partner: { en: 'AXXAM Business Hub', ar: 'AXXAM Business Hub' },
    href: 'https://www.linkedin.com/posts/youthledalgeria_savetheearthonegameatatime2026-environmentaleducation-activity-7465869079510220800-jejT',
  },
  {
    id: 'personal-branding-linkedin',
    title: { en: 'Personal Branding & LinkedIn Optimization Workshop', ar: 'بناء الهوية المهنية وتحسين حساب LinkedIn' },
    image: LOCAL_IMG.personalBranding,
    summary: { en: 'A practical session on professional identity, LinkedIn profiles and professional communication with direct profile work.', ar: 'جلسة تطبيقية لتحديد الهوية المهنية وتحسين ملفات LinkedIn وتطوير التواصل المهني مع تطبيق مباشر على حسابات المشاركين.' },
    facilitator: { en: 'Rihal Na', ar: 'ريهال نا' },
    participants: { en: 'Professionals, students and freelancers.', ar: 'مهنيون وطلبة ومستقلون.' },
    href: 'https://www.linkedin.com/posts/rihal-na_what-an-incredible-session-it-was-an-activity-7297731017002352641-dEJ6',
  },
  {
    id: 'lcoy-algeria-2023',
    title: { en: 'LCOY Algeria 2023', ar: 'مؤتمر الشباب المحلي للمناخ 2023' },
    date: { en: '16-17 October 2023', ar: '16-17 أكتوبر 2023' },
    summary: { en: 'A youth climate conference on climate action, organic waste recovery, climate finance, and loss and damage.', ar: 'مؤتمر شبابي حول العمل المناخي وتثمين النفايات العضوية وتمويل المناخ والخسائر والأضرار.' },
    organiser: { en: 'Youth LED Algeria, organiser', ar: 'شباب ليد الجزائر، المنظمة' },
    topics: [{ en: 'Youth climate action', ar: 'العمل المناخي الشبابي' }, { en: 'Climate finance', ar: 'تمويل المناخ' }],
    partner: { en: 'AOEE; Selma Bichbich for two side sessions', ar: 'AOEE؛ وسلمى بيشبش في جلستين جانبيتين' },
    href: 'https://www.linkedin.com/posts/algerian-organization-of-energy-engineers-aoee_aoee-lcoy2023-activity-7119929385557602304-wbW8',
  },
  {
    id: 'green-impact',
    title: { en: 'Green Impact', ar: 'الأثر الأخضر' },
    date: { en: 'Launched in 2022; activities documented in 2023', ar: 'أُطلق في 2022؛ وُثقت الأنشطة في 2023' },
    summary: { en: 'A project connecting plastic pollution awareness with circular economy and green entrepreneurship through training, field action and project support.', ar: 'مشروع يربط التوعية بالتلوث البلاستيكي بالاقتصاد الدائري وريادة الأعمال الخضراء عبر التدريب والعمل الميداني ومواكبة المشاريع.' },
    topics: [{ en: 'Circular economy', ar: 'الاقتصاد الدائري' }, { en: 'Green entrepreneurship', ar: 'ريادة الأعمال الخضراء' }],
    partner: { en: 'UNDP/GEF Small Grants Programme, AND and Entrepreneurship House at Mila University Centre', ar: 'PNUD وبرنامج منح GEF وAND ودار المقاولاتية بالمركز الجامعي بميلة' },
    notes: { en: 'Reported figures are kept separate because groups may overlap.', ar: 'تم إبقاء الأرقام منفصلة لاحتمال تداخل الفئات.' },
    href: 'https://www.undp.org/fr/algeria/actualites/renforcer-les-capacites-des-jeunes-dans-lentreprenariat-vert',
  },
  {
    id: 'glass-room-community-edition',
    title: { en: 'The Glass Room Community Edition', ar: 'The Glass Room Community Edition' },
    date: { en: '6-8 February 2020', ar: '6-8 فيفري 2020' },
    location: { en: 'Algiers', ar: 'الجزائر العاصمة' },
    summary: { en: 'Hosting of The Glass Room Community Edition exhibition in Algiers.', ar: 'استضافة نسخة The Glass Room Community Edition في الجزائر العاصمة.' },
    organiser: { en: 'Youth LED Algeria, host', ar: 'شباب ليد الجزائر، المضيف' },
    href: 'https://www.theglassroom.org/past-events/',
  },
  {
    id: 'tot-soft-skills-2025',
    title: { en: 'Training of Trainers on Soft Skills - ToT2025', ar: 'تدريب المدربين على المهارات الناعمة - ToT2025' },
    image: LOCAL_IMG.learn,
    date: { en: '2025; in-person days not precisely dated', ar: 'نسخة 2025؛ اليومان الحضوريان غير مؤرخين بدقة' },
    summary: { en: 'A trainer development path using facilitation, learning by doing and interactive methods to transfer soft skills.', ar: 'مسار لتأهيل المدربين على التيسير والتعلم بالممارسة والطرق التفاعلية ونقل المهارات الناعمة.' },
    organiser: { en: 'Youth LED Algeria', ar: 'شباب ليد الجزائر' },
    facilitator: { en: 'Idir Nasser BELKEBIR', ar: 'إدير ناصر بلكبير' },
    partner: { en: 'Konrad-Adenauer-Stiftung Algérie', ar: 'مؤسسة كونراد أديناور الجزائر' },
    href: 'https://www.linkedin.com/posts/youthledalgeria_youthledalgeria-tot2025-softskills-activity-7392924771191263232-B8Ne',
  },
  {
    id: 'revade-2022',
    title: { en: 'Participation in REVADE 2022', ar: 'المشاركة في REVADE 2022' },
    date: { en: '10-13 October 2022', ar: '10-13 أكتوبر 2022' },
    location: { en: 'SAFEX, Algiers', ar: 'صافكس، الجزائر' },
    organiser: { en: 'Youth LED Algeria, participant within Green Impact activities', ar: 'شباب ليد الجزائر، مشاركة ضمن أنشطة الأثر الأخضر' },
    notes: { en: 'Participation, not organisation of the exhibition.', ar: 'مشاركة وليست تنظيمًا للمعرض.' },
    href: 'https://www.undp.org/fr/algeria/actualites/renforcer-les-capacites-des-jeunes-dans-lentreprenariat-vert',
  },
  {
    id: 'revade-catalogue-2024',
    title: { en: 'REVADE 2024 Catalogue Listing', ar: 'الإدراج في كتالوج REVADE 2024' },
    date: { en: '18-21 November 2024', ar: '18-21 نوفمبر 2024' },
    location: { en: 'SAFEX, Algiers', ar: 'صافكس، الجزائر' },
    summary: { en: 'Youth LED Algeria is listed in the associations section of the official catalogue; the listing alone does not establish activity details or attendance.', ar: 'أُدرجت جمعية شباب ليد الجزائر في قسم الجمعيات بالكتالوج الرسمي؛ ولا يثبت الإدراج وحده تفاصيل الأنشطة أو الحضور.' },
    href: 'https://revade.dz/bilan-catalogues/Catalogue%20REVADE%208e-1.pdf',
  },
  {
    id: 'empoweru-bootcamp',
    title: { en: 'EmpowerU Bootcamp', ar: 'مخيم EmpowerU التدريبي' },
    summary: { en: 'Interactive workshops in communication, leadership and civic participation using discussion, role play and project-based learning.', ar: 'سلسلة ورش تفاعلية في التواصل والقيادة والمشاركة المدنية تعتمد النقاش ولعب الأدوار والتعلم بالمشاريع.' },
    participants: { en: 'Algerian youth aged 18-30, especially underrepresented backgrounds.', ar: 'شباب جزائريون من 18 إلى 30 سنة، خاصة من خلفيات أقل تمثيلاً.' },
    notes: { en: 'Date and location must be completed before publishing a dated event card.', ar: 'يجب استكمال التاريخ والمكان قبل نشر بطاقة مؤرخة.' },
    href: 'https://youthproaktiv.org/wp-content/uploads/2024/10/COLLECTION-OF-BEST-PRACTICES_compressed-1.pdf',
  },
]

export const BOARD: B[] = [
  { en: 'President', ar: 'الرئيس' },
  { en: 'General Secretary', ar: 'الأمين العام' },
  { en: 'Project Manager', ar: 'مدير المشاريع' },
  { en: 'Communication Manager', ar: 'مسؤول الاتصال' },
  { en: 'Treasurer', ar: 'أمين المال' },
  { en: 'Wilaya Coordinator', ar: 'منسّق الولايات' },
]

export type TeamMember = {
  id: string
  name?: string
  role: B
  department?: B
  bio?: B
  image?: string
  linkedin?: string
}

export const TEAM_MEMBERS: TeamMember[] = BOARD.map((role, index) => ({ id: `board-${index + 1}`, role }))

export const DEPARTMENTS: { name: B; desc: B; skills: B[]; img: string }[] = [
  {
    name: { en: 'Training & Capacity Building', ar: 'التكوين وبناء القدرات' },
    desc: { en: 'Designs and delivers workshops, trainings and mentoring programmes.', ar: 'تصمّم وتنفّذ الورشات والدورات وبرامج الإرشاد.' },
    skills: [{ en: 'Facilitation', ar: 'التيسير' }, { en: 'Curriculum design', ar: 'تصميم المحتوى' }, { en: 'Mentoring', ar: 'الإرشاد' }],
    img: IMG.learn,
  },
  {
    name: { en: 'Digital Creation & Social Media', ar: 'الإبداع الرقمي ووسائل التواصل' },
    desc: { en: 'Tells the story of every activity through visuals, video and social channels.', ar: 'تروي قصة كل نشاط عبر الصور والفيديو والمنصات الاجتماعية.' },
    skills: [{ en: 'Visual design', ar: 'التصميم البصري' }, { en: 'Video & photo', ar: 'الفيديو والصورة' }, { en: 'Community management', ar: 'إدارة المجتمع' }],
    img: IMG.brain,
  },
  {
    name: { en: 'Human Resources & Communication', ar: 'الموارد البشرية والاتصال' },
    desc: { en: 'Recruits, supports and coordinates volunteers and internal communication.', ar: 'تستقطب المتطوعين وتدعمهم وتنسّق الاتصال الداخلي.' },
    skills: [{ en: 'Volunteer care', ar: 'رعاية المتطوعين' }, { en: 'Coordination', ar: 'التنسيق' }, { en: 'Internal comms', ar: 'الاتصال الداخلي' }],
    img: IMG.connect,
  },
  {
    name: { en: 'Project Planning & Management', ar: 'تخطيط المشاريع وإدارتها' },
    desc: { en: 'Turns ideas into structured projects with clear timelines and outcomes.', ar: 'تحوّل الأفكار إلى مشاريع منظّمة بجداول ونتائج واضحة.' },
    skills: [{ en: 'Planning', ar: 'التخطيط' }, { en: 'Monitoring', ar: 'المتابعة' }, { en: 'Reporting', ar: 'إعداد التقارير' }],
    img: IMG.policy,
  },
  {
    name: { en: 'Finance & Logistics', ar: 'المالية واللوجستيك' },
    desc: { en: 'Keeps budgets transparent and events running smoothly.', ar: 'تضمن شفافية الميزانيات وسلاسة تنظيم الفعاليات.' },
    skills: [{ en: 'Budgeting', ar: 'الميزانية' }, { en: 'Event logistics', ar: 'لوجستيك الفعاليات' }, { en: 'Accountability', ar: 'المساءلة' }],
    img: IMG.conf,
  },
]

export const VALUES: { name: B; desc: B }[] = [
  { name: { en: 'AGENCY', ar: 'الفاعلية' }, desc: { en: 'Youth as actors, not beneficiaries.', ar: 'الشباب فاعلون، لا مجرد مستفيدين.' } },
  { name: { en: 'INTEGRITY', ar: 'النزاهة' }, desc: { en: 'Responsible action and transparent collaboration.', ar: 'عمل مسؤول وتعاون شفاف.' } },
  { name: { en: 'LEARNING', ar: 'التعلّم' }, desc: { en: 'Continuous development through experience.', ar: 'تطوّر مستمر عبر التجربة.' } },
  { name: { en: 'COURAGE', ar: 'الشجاعة' }, desc: { en: 'Confidence to act, test ideas and move forward.', ar: 'الثقة في المبادرة واختبار الأفكار والمضيّ قدماً.' } },
  { name: { en: 'COLLABORATION', ar: 'التعاون' }, desc: { en: 'Progress through shared effort.', ar: 'التقدّم بالجهد المشترك.' } },
  { name: { en: 'INCLUSION', ar: 'الشمول' }, desc: { en: 'Opportunities across backgrounds and communities.', ar: 'فرص متاحة عبر مختلف الخلفيات والمجتمعات.' } },
]

export const CAPS: B[] = [
  { en: 'Youth mobilisation', ar: 'تعبئة الشباب' },
  { en: 'Workshop facilitation', ar: 'تيسير الورشات' },
  { en: 'Training delivery', ar: 'تنفيذ التكوين' },
  { en: 'Non-formal education', ar: 'التعليم غير النظامي' },
  { en: 'Community engagement', ar: 'الانخراط المجتمعي' },
  { en: 'Communication & media', ar: 'الاتصال والإعلام' },
  { en: 'Event organisation', ar: 'تنظيم الفعاليات' },
  { en: 'Project implementation', ar: 'تنفيذ المشاريع' },
  { en: 'Networking', ar: 'بناء الشبكات' },
  { en: 'Youth dialogue', ar: 'الحوار الشبابي' },
  { en: 'Entrepreneurship education', ar: 'التعليم الريادي' },
  { en: 'Cross-cultural exchange', ar: 'التبادل بين الثقافات' },
]

export const INTL: B[] = [
  { en: 'Youth Exchanges', ar: 'التبادل الشبابي' },
  { en: 'Training & Networking', ar: 'التدريب وبناء الشبكات' },
  { en: 'Capacity Building', ar: 'بناء القدرات' },
  { en: 'Experience Exchange', ar: 'تبادل الخبرات' },
  { en: 'Transnational Youth Initiatives', ar: 'مبادرات شبابية عابرة للحدود' },
  { en: 'Strategic Partnerships', ar: 'شراكات استراتيجية' },
  { en: 'Intercultural Dialogue', ar: 'الحوار بين الثقافات' },
  { en: 'Youth Participation', ar: 'المشاركة الشبابية' },
]

export const STORIES: { cat: B; title: B; img: string }[] = [
  {
    cat: { en: 'Projects', ar: 'المشاريع' },
    title: { en: 'Green ideas, real local action: inside Green Impact', ar: 'أفكار خضراء وعمل محلي حقيقي: داخل «الأثر الأخضر»' },
    img: IMG.green,
  },
  {
    cat: { en: 'Training', ar: 'التكوين' },
    title: { en: 'From participant to facilitator: Training of Trainers', ar: 'من مشارك إلى ميسّر: تكوين المكوّنين' },
    img: IMG.tot,
  },
  {
    cat: { en: 'Youth Stories', ar: 'قصص شبابية' },
    title: { en: 'Finding a voice: the Public Speaking Workshop', ar: 'اكتشاف الصوت: ورشة الخطابة' },
    img: IMG.speaking,
  },
  {
    cat: { en: 'Events', ar: 'فعاليات' },
    title: { en: 'BAC-FAC Meetup: peers guiding peers', ar: 'لقاء باك-فاك: أقران يرشدون أقرانهم' },
    img: IMG.who,
  },
]

export type FieldStory = {
  id: string
  image: string
  category?: B
  title?: B
  summary?: B
  date?: B
  location?: B
  href?: string
}

export const FIELD_STORIES: FieldStory[] = [
  { id: 'field-01', image: LOCAL_IMG.learn },
  { id: 'field-02', image: LOCAL_IMG.speak },
  { id: 'field-03', image: LOCAL_IMG.build },
  { id: 'field-04', image: LOCAL_IMG.connect },
]

export const OPPS: { type: B; title: B; status: 'OPEN' | 'UPCOMING' | 'CLOSED' }[] = [
  { type: { en: 'Volunteering', ar: 'التطوع' }, title: { en: 'Join a local bureau as a volunteer', ar: 'انضمّ إلى مكتب محلي كمتطوع' }, status: 'OPEN' },
  { type: { en: 'Training', ar: 'التكوين' }, title: { en: 'Soft skills training cycle', ar: 'دورة تكوينية في المهارات الناعمة' }, status: 'UPCOMING' },
  { type: { en: 'Youth Exchanges', ar: 'التبادل الشبابي' }, title: { en: 'International exchange call', ar: 'نداء للمشاركة في تبادل دولي' }, status: 'UPCOMING' },
  { type: { en: 'Events', ar: 'فعاليات' }, title: { en: 'Community meetup', ar: 'لقاء مجتمعي' }, status: 'CLOSED' },
]
