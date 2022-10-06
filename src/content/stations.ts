import { Info } from 'src/types'

export const stations: Info = [
  {
    caption: 'АЭС',
    iconUrl: '/images/stations/nuclear-plant.png',
    titleIconUrl: '/images/stations/atom.png',
    content:
      'Атомная электростанция — электростанция, на которой атомная (ядерная) энергия преобразуется в электрическую.<br> В ядерном реакторе распадается Уран-235, при этом выделяется огромное количество тепловой энергии, она кипятит воду, пар под давлением крутит турбину, которая вращает электрогенератор, который вырабатывает электричество.<br> Энергия, выделяемая в активной зоне реактора, передаётся теплоносителю первого контура. Далее теплоноситель поступает в теплообменник (парогенератор), где нагревает до кипения воду второго контура. Полученный при этом пар поступает в турбины, вращающие электрогенераторы.',
  },
  {
    caption: 'ВЭС',
    iconUrl: '/images/stations/wind-power.png',
    titleIconUrl: '/images/stations/wind.png',
    content:
      'Ветряная электростанция — несколько ветроэлектрических установок, собранных в одном или нескольких местах и объединённых в единую сеть.<br> Таким образом, используемая энергия ветра является преобразованной в механическую энергию Солнца. Устройства, преобразующие энергию ветра в полезную механическую, электрическую или тепловую виды энергии, называются ветроэнергетическими установками (ВЭУ), или ветроустановками. ВЭУ могут быть предназначены для непосредственного выполнения механической работы или для производства электроэнергии. В последнем случае они приводят в действие электрогенератор и в совокупности с ним называются ветроэлектрогенераторами.',
  },
  {
    caption: 'ГЭС',
    iconUrl: '/images/stations/hydro-power.png',
    titleIconUrl: '/images/stations/lake.png',
    content:
      'Гидроэлектростанция — электростанция, использующая в качестве источника энергии движение водных масс в русловых водотоках.<br> Электростанция преобразует механическую энергию потока воды в электрическую энергию посредством гидравлических турбин, вращающих электрические генераторы.<br> Для эффективного производства электроэнергии на ГЭС необходимы два основных фактора: гарантированная обеспеченность водой круглый год и возможно большие уклоны реки.<br> Мощность крупнейших ГЭС — до нескольких ГВт.',
  },
  {
    caption: 'ТЭЦ',
    iconUrl: '/images/stations/industry.png',
    titleIconUrl: '/images/stations/geothermal-energy.png',
    content:
      'Тепловая электростанция — электростанция, вырабатывающая электрическую энергию за счёт преобразования химической энергии топлива в процессе сжигания в тепловую.<br> Раскаленный газ устремляется по газоходу и нагревает воду, проходящую по специальным трубкам котла. При нагревании вода превращается в перегретый пар, который поступает в паровую турбину. Пар поступает внутрь турбины и начинает вращать лопатки турбины, которые связаны с ротором генератора. Энергия пара превращается в механическую энергию. В генераторе механическая энергия переходит в электрическую, ротор продолжает вращаться, создавая в обмотках статора переменный электрический ток.',
  },
  {
    caption: 'СЭС',
    iconUrl: '/images/stations/solar-energy.png',
    titleIconUrl: '/images/stations/solar-panel.png',
    content:
      'Солнечная электростанция — инженерное сооружение, преобразующее солнечную радиацию в электрическую энергию. Способы преобразования солнечной энергии различны и зависят от конструкции электростанции.<br> По принципу работы солнечная батарея представляет собой фотоэлектрический генератор постоянного тока, который использует эффект преобразования лучистой энергии в электрическую. Точнее, в солнечных батареях использовано свойство полупроводников на основе кристаллов кремния. Фотоэлектрический элемент использует технологию преобразования солнечной энергии непосредственно в электричество.',
  },
]