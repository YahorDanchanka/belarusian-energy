import { icon, Icon, IconOptions, latLng } from 'leaflet'
import { Info, Region, Stations, StationType } from 'src/types'

export const stationInfo: Info = [
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

export const stations: Stations = [
  {
    id: '1',
    type: StationType.Thermal,
    name: 'Минская ТЭЦ-4',
    year: 1977,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(53.87208, 27.405445),
  },
  {
    id: '2',
    type: StationType.Thermal,
    name: 'Минская ТЭЦ-5',
    year: 1999,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(53.626686, 27.949621),
  },
  {
    id: '3',
    type: StationType.Thermal,
    name: 'Гомельская ТЭЦ-2',
    year: 1979,
    region: Region.Gomel,
    owner: 'Белэнерго',
    coords: latLng(52.445041, 30.814631),
  },
  {
    id: '4',
    type: StationType.Thermal,
    name: 'Минская ТЭЦ-3',
    year: 1951,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(53.87732, 27.652554),
  },
  {
    id: '5',
    type: StationType.Thermal,
    name: 'Могилевская ТЭЦ-2',
    year: 1966,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    coords: latLng(53.814652, 30.338847),
  },
  {
    id: '6',
    type: StationType.Thermal,
    name: 'Гродненская ТЭЦ-2',
    year: 1951,
    region: Region.Grodno,
    owner: 'Белэнерго',
    coords: latLng(53.666153, 23.924557),
  },
  {
    id: '7',
    type: StationType.Thermal,
    name: 'Новополоцкая ТЭЦ',
    year: 1962,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(55.53043, 28.65617),
  },
  {
    id: '8',
    type: StationType.Thermal,
    name: 'Мозырская ТЭЦ',
    year: 1974,
    region: Region.Gomel,
    owner: 'Белэнерго',
    coords: latLng(51.90373, 29.29148),
  },
  {
    id: '9',
    type: StationType.Thermal,
    name: 'Бобруйская ТЭЦ-2',
    year: 1966,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    coords: latLng(53.189564, 29.205497),
  },
  {
    id: '10',
    type: StationType.Thermal,
    name: 'Светлогорская ТЭЦ',
    year: 1958,
    region: Region.Gomel,
    owner: 'Белэнерго',
    coords: latLng(52.628019, 29.769769),
  },
  {
    id: '',
    type: StationType.Thermal,
    name: 'Минская ТЭЦ-2',
    year: 1934,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(53.881982, 27.578082),
  },
  {
    id: '11',
    type: StationType.Thermal,
    name: 'Витебская ТЭЦ',
    year: 1954,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(55.169879, 30.13672),
  },
  {
    id: '12',
    type: StationType.Thermal,
    name: 'Оршанская ТЭЦ',
    year: 1963,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(54.483881, 30.391389),
  },
  {
    id: '13',
    type: StationType.Thermal,
    name: 'Борисовская ТЭЦ',
    year: 2014,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(54.191025, 28.491278),
  },
  {
    id: '14',
    type: StationType.Thermal,
    name: 'Жодинская ТЭЦ',
    year: 1951,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(54.095671, 28.353571),
  },
  {
    id: '15',
    type: StationType.Thermal,
    name: 'Лидская ТЭЦ',
    year: 1954,
    region: Region.Grodno,
    owner: 'Белэнерго',
    coords: latLng(53.90204, 25.293492),
  },
  {
    id: '16',
    type: StationType.Thermal,
    name: 'Жлобинская ТЭЦ',
    year: 1951,
    region: Region.Gomel,
    owner: 'Белэнерго',
    coords: latLng(52.90362, 30.012291),
  },
  {
    id: '17',
    type: StationType.Thermal,
    name: 'Пинская ТЭЦ',
    year: 1958,
    region: Region.Brest,
    owner: 'Белэнерго',
    coords: latLng(52.1294, 26.033671),
  },
  {
    id: '18',
    type: StationType.Thermal,
    name: 'Могилевская ТЭЦ-1',
    year: 1931,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    coords: latLng(53.889864, 30.292433),
  },
  {
    id: '19',
    type: StationType.Thermal,
    name: 'Могилевская ТЭЦ-3',
    year: 1983,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    coords: latLng(53.959756, 30.347665),
  },
  {
    id: '20',
    type: StationType.Thermal,
    name: 'Барановичская ТЭЦ',
    year: 1947,
    region: Region.Brest,
    owner: 'Белэнерго',
    coords: latLng(53.142579, 26.008239),
  },
  {
    id: '21',
    type: StationType.Thermal,
    name: 'Брестская ТЭЦ',
    year: 1948,
    region: Region.Brest,
    owner: 'Белэнерго',
    coords: latLng(53.142579, 26.008239),
  },
  {
    id: '22',
    type: StationType.Thermal,
    name: 'Бобруйская ТЭЦ-1',
    year: 1969,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    coords: latLng(53.189564, 29.205497),
  },
  {
    id: '23',
    type: StationType.Thermal,
    name: 'Полоцкая ТЭЦ',
    year: 1946,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(55.495082, 28.780175),
  },
  {
    id: '24',
    type: StationType.Thermal,
    name: 'Гомельская ТЭЦ-1',
    year: 1923,
    region: Region.Gomel,
    owner: 'Белэнерго',
    coords: latLng(52.414034, 31.004832),
  },
  {
    id: '25',
    type: StationType.Thermal,
    name: 'Молодечненская мини-ТЭЦ',
    year: 2001,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(54.299639, 26.81914),
  },
  {
    id: '26',
    type: StationType.Thermal,
    name: 'Солигорская ТЭЦ',
    year: 1962,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(52.79472, 27.46861),
  },
  {
    id: '27',
    type: StationType.Thermal,
    name: 'котельная «Осиповичи»',
    region: Region.Mogilev,
    owner: 'Белэнерго',
    coords: latLng(53.310048, 28.66101),
  },
  {
    id: '28',
    type: StationType.Thermal,
    name: 'Слуцкая мини-ТЭЦ',
    year: 1936,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(53.02502, 27.559532),
  },
  {
    id: '29',
    type: StationType.Hydroelectric,
    name: 'Витебская ГЭС',
    year: 2017,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Западная Двина',
    coords: latLng(55.251274, 30.160141),
  },
  {
    id: '30',
    type: StationType.Hydroelectric,
    name: 'Полоцкая ГЭС',
    year: 2017,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Западная Двина',
    coords: latLng(55.432838, 28.948185),
  },
  {
    id: '31',
    type: StationType.Hydroelectric,
    name: 'Гродненская ГЭС',
    year: 2012,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Неман',
    coords: latLng(53.645275, 23.973449),
  },
  {
    id: '32',
    type: StationType.Hydroelectric,
    name: 'Осиповичская ГЭС',
    year: 1953,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    river: 'Свислочь (приток Березины)',
    coords: latLng(53.357242, 28.679211),
  },
  {
    id: '33',
    type: StationType.Hydroelectric,
    name: 'Вилейская ГЭС',
    year: 1997,
    region: Region.Minsk,
    owner: 'Минскводоканал',
    river: 'Вилия',
    coords: latLng(54.492014, 26.893805),
  },
  {
    id: '34',
    type: StationType.Hydroelectric,
    name: 'Чигиринская ГЭС',
    year: 1957,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    river: 'Друть',
    coords: latLng(53.422949, 29.855905),
  },
  {
    id: '35',
    type: StationType.Hydroelectric,
    name: 'Гезгальская ГЭС',
    year: 1960,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Молчадь (река)',
    coords: latLng(53.600319, 25.374153),
  },
  {
    id: '36',
    type: StationType.Hydroelectric,
    name: 'Богинская ГЭС',
    year: 1995,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Дрисвята',
    coords: latLng(55.45298389, 26.78490389),
  },
  {
    id: '37',
    type: StationType.Hydroelectric,
    name: 'Клястицкая ГЭС',
    year: 1959,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Нища',
    coords: latLng(55.882982, 28.594392),
  },
  {
    id: '38',
    type: StationType.Hydroelectric,
    name: 'Волпянская ГЭС',
    year: 1955,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Россь',
    coords: latLng(53.3811, 24.39273),
  },
  {
    id: '39',
    type: StationType.Hydroelectric,
    name: 'Тетеринская ГЭС',
    year: 1955,
    region: Region.Mogilev,
    owner: 'Белэнерго',
    river: 'Друть',
    coords: latLng(54.166136, 29.779477),
  },
  {
    id: '40',
    type: StationType.Hydroelectric,
    name: 'Лепельская ГЭС',
    year: 1958,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Улла',
    coords: latLng(54.890486, 28.701286),
  },
  {
    id: '41',
    type: StationType.Hydroelectric,
    name: 'Рачунская ГЭС',
    year: 1959,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Ошмянка',
    coords: latLng(54.585792, 26.209441),
  },
  {
    id: '42',
    type: StationType.Hydroelectric,
    name: 'Браславская ГЭС',
    year: 1954,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Друйка',
    coords: latLng(55.576657, 26.685368),
  },
  {
    id: '43',
    type: StationType.Hydroelectric,
    name: 'Лукомльская ГЭС',
    year: 1969,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Лукомка',
    coords: latLng(54.71318, 29.19076),
  },
  {
    id: '44',
    type: StationType.Hydroelectric,
    name: 'Гомельская ГЭС',
    year: 1953,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Туржанка[A 1]',
    coords: latLng(55.301512, 28.775488),
  },
  {
    id: '45',
    type: StationType.Hydroelectric,
    name: 'Новосёлковская ГЭС',
    year: 1950,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Молчадь',
    coords: latLng(53.46819, 25.55068),
  },
  {
    id: '46',
    type: StationType.Hydroelectric,
    name: 'Добромысленская ГЭС',
    year: 2012,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    river: 'Черница (приток Лучосы)',
    coords: latLng(54.93586, 30.68084),
  },
  {
    id: '47',
    type: StationType.Hydroelectric,
    name: 'ГЭС Паперня',
    year: 1949,
    region: Region.Brest,
    owner: 'Белэнерго',
    river: 'Зельвянка',
    coords: latLng(52.89306, 24.86309),
  },
  {
    id: '48',
    type: StationType.Hydroelectric,
    name: 'Зельвенская ГЭС',
    year: 2006,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Зельвянка',
    coords: latLng(53.14628, 24.84076),
  },
  {
    id: '49',
    type: StationType.Hydroelectric,
    name: 'Яновская ГЭС',
    year: 1954,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Лоша (приток Ошмянки)',
    coords: latLng(54.60694, 26.04444),
  },
  {
    id: '50',
    type: StationType.Hydroelectric,
    name: 'Селявская ГЭС',
    year: 2004,
    region: Region.Minsk,
    owner: 'Белэнерго',
    river: 'Югна',
    coords: latLng(54.60491, 29.17612),
  },
  {
    id: '51',
    type: StationType.Hydroelectric,
    name: 'ГЭС Немново',
    year: 2017,
    region: Region.Grodno,
    owner: 'Белэнерго',
    river: 'Августовский канал',
    coords: latLng(53.86159, 23.74916),
  },
  {
    id: '52',
    type: StationType.Wind,
    name: 'Новогрудский ветропарк',
    year: 2012,
    region: Region.Minsk,
    coords: latLng(53.565827, 25.779935),
  },
  {
    id: '53',
    type: StationType.Wind,
    name: 'Ветропарк',
    year: 2015,
    region: Region.Grodno,
    coords: latLng(53.605282, 25.767765),
  },
  {
    id: '54',
    type: StationType.StateDistrict,
    name: 'Лукомльская ГРЭС',
    year: 1969,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(54.675829, 29.136721),
  },
  {
    id: '55',
    type: StationType.StateDistrict,
    name: 'Берёзовская ГРЭС',
    year: 1961,
    region: Region.Brest,
    owner: 'Белэнерго',
    coords: latLng(52.45516, 25.191064),
  },
  {
    id: '56',
    type: StationType.StateDistrict,
    name: 'Белорусская ГРЭС',
    year: 1930,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(54.69546, 30.494174),
  },
  {
    id: '57',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ «Северная», г. Гродно',
    year: 1973,
    region: Region.Grodno,
    owner: 'Белэнерго',
    coords: latLng(53.71286, 23.81981),
  },
  {
    id: '58',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ «Лунинец»',
    year: 2015,
    region: Region.Brest,
    owner: 'Белэнерго',
    coords: latLng(52.26508, 26.77497),
  },
  {
    id: '59',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ, г.Речица',
    year: 1921,
    region: Region.Gomel,
    owner: 'Белэнерго',
    coords: latLng(52.34811, 30.34944),
  },
  {
    id: '60',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ «Пружаны»',
    year: 2009,
    region: Region.Brest,
    owner: 'Белэнерго',
    coords: latLng(52.56739, 24.47732),
  },
  {
    id: '61',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ «Восточная», г. Витебск',
    year: 2000,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(55.19091, 30.25854),
  },
  {
    id: '62',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ «Барань»',
    year: 2013,
    region: Region.Vitebsk,
    owner: 'Белэнерго',
    coords: latLng(54.48004, 30.32455),
  },
  {
    id: '63',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ «Западная», г. Пинск',
    year: 1922,
    region: Region.Brest,
    owner: 'Белэнерго',
    coords: latLng(52.12878, 26.0335),
  },
  {
    id: '64',
    type: StationType.MiniThermal,
    name: 'мини-ТЭЦ «Вилейка»',
    year: 2007,
    region: Region.Minsk,
    owner: 'Белэнерго',
    coords: latLng(54.49226, 26.89445),
  },
  {
    id: '65',
    type: StationType.Nuclear,
    name: 'Белорусская АЭС',
    year: 2020,
    region: Region.Grodno,
    owner: 'Белэнерго',
    coords: latLng(54.752415, 26.088226),
  },
]

export function getColorByStationType(stationType: StationType): string {
  let color = '#'

  switch (stationType) {
    case StationType.Thermal:
      color += '8439b4'
      break
    case StationType.Hydroelectric:
      color += '00eaff'
      break
    case StationType.Wind:
      color += '299f58'
      break
    case StationType.Nuclear:
      color += 'e74c3c'
      break
    case StationType.Solar:
      color += 'ffde00'
      break
    default:
      color += '8439b4'
  }

  return color
}

/** Для кэширования */
const usedIcons: Icon<IconOptions>[] = []

export function createIcon(color: string): Icon {
  const iconUrl = `/images/markers/${color.slice(1)}.png`

  const foundIcon = usedIcons.find((usedIcon) => usedIcon.options.iconUrl === iconUrl)

  if (foundIcon) {
    return foundIcon
  }

  const createdIcon = icon({
    iconUrl: iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  })

  usedIcons.push(createdIcon)
  return createdIcon
}
