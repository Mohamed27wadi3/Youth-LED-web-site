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
    img: IMG.speaking,
  },
  {
    id: 'training-of-trainers',
    title: { en: 'Training of Trainers — Soft Skills', ar: 'تكوين المكوّنين — المهارات الناعمة' },
    cat: { en: 'Capacity building', ar: 'بناء القدرات' },
    kind: 'training',
    outcome: { en: 'Building facilitation capacity among young trainers.', ar: 'بناء قدرات التيسير لدى المكوّنين الشباب.' },
    img: IMG.tot,
  },
  {
    id: 'bac-fac-meetup',
    title: { en: 'BAC-FAC Meetup', ar: 'لقاء باك-فاك' },
    cat: { en: 'Peer learning', ar: 'التعلّم بين الأقران' },
    kind: 'community',
    outcome: { en: 'A peer meetup around the move from baccalaureate to university.', ar: 'لقاء بين الأقران حول الانتقال من البكالوريا إلى الجامعة.' },
    img: IMG.who,
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
    img: IMG.policy,
  },
  {
    id: 'job-hunting',
    title: { en: 'Job Hunting Skills & Tools', ar: 'مهارات وأدوات البحث عن عمل' },
    cat: { en: 'Employability', ar: 'قابلية التوظيف' },
    kind: 'training',
    outcome: { en: 'Practical tools for CVs, interviews and digital job search.', ar: 'أدوات عملية للسيرة الذاتية والمقابلات والبحث الرقمي عن عمل.' },
    img: IMG.job,
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
  image: string
  date?: B
  location?: B
  summary?: B
  topics?: B[]
  partner?: B
  href?: string
}

export const EVENTS: EventRecord[] = [
  { id: 'event-01', image: LOCAL_IMG.learn },
  { id: 'event-02', image: LOCAL_IMG.speak },
  { id: 'event-03', image: LOCAL_IMG.build },
  { id: 'event-04', image: LOCAL_IMG.connect },
  { id: 'event-05', image: LOCAL_IMG.bacMeetup },
  { id: 'event-06', image: LOCAL_IMG.publicSpeaking },
  { id: 'event-07', image: LOCAL_IMG.policyPaper },
  { id: 'event-08', image: LOCAL_IMG.governance },
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
