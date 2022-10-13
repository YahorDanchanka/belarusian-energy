export type People = IPerson[]

export interface IPerson {
  name: string
  position: string
  imageUrl: string
  content: string
}

export const people: People = [
  {
    name: 'Николай Наумович Анисимов',
    position: 'Главный инженер, директор Гомельской ТЭЦ с 1939 по 1962 год',
    imageUrl: '/images/people/anisimov.png',
    content:
      'Без малого 40 лет Николай Анисимов отдал выбранной профессии, пройдя путь от инженера до управляющего энергосистемой Гомельской области. Как сказал генеральный директор “Гомельэнерго” на открытии мемориала, приходящее на смену поколение должно не только добросовестно трудиться, но и помнить своих предшественников.',
  },
  {
    name: 'Игорь Николаевич Александров',
    position: 'Релейщик',
    imageUrl: '/images/people/alexandrov.png',
    content:
      'Стал первым отечественным релейщиком.<br> В послевоенные годы он возглавлял центральную службу РЗА «Белглавэнерго», был верен ему все последующие 20 лет, когда работал уже главным инженером «Белглавэнерго».',
  },
  {
    name: 'Анатолий Владимирович Бондар',
    position: 'Инженер',
    imageUrl: '/images/people/bondar.png',
    content:
      'Выпускник специализации «Ядерные энергетические установки». Молодым специалистом ушел получил бесценный опыт реализации атомных проектов в Советском Союзе, затем и за границей.<br> В свои годы, поработав инженером за границей, удостоился возможности стать главным инженером-проектировщиком Беларусской АЭС.',
  },
  {
    name: 'Виктор Павлович Панков',
    position: 'Энергетик Республики Беларусь',
    imageUrl: '/images/people/pankov.png',
    content:
      'Посвятил Белорусской энергосистеме более 50 лет жизни и внес вклад в совершенствование энергетического производства, повышение его эффективности. Под его непосредственным руководством были введены в работу и успешно эксплуатировались основные мощности крупнейшей электростанции области – Могилевской ТЭЦ-2',
  },
  {
    name: 'Георгий Николаевич Хартанович',
    position: 'Руководитель Энергосистемы РБ',
    imageUrl: '/images/people/hartanovich.png',
    content:
      'Отдал работе на посту руководителя Белорусской энергосистемы двадцать три года. В период его руководства были построены крупные ТЭС и ТЭЦ в областных городах и промышленных центрах. Высокий профессионализм, преданность делу, на удивление коммуникабельный характер позволили Георгию Николаевичу воплотить в реальность многие планы и мечты.',
  },
]
