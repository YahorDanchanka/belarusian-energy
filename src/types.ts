import { RouteLocationRaw } from 'vue-router'
import { LatLng } from 'leaflet'

export type Menu = IMenuItem[]

export interface IMenuItem {
  caption: string
  to: RouteLocationRaw
}

export type Info = IInfoItem[]

export interface IInfoItem {
  caption: string
  iconUrl: string
  titleIconUrl: string
  content: string
}

export type Social = ISocialLink[]

export interface ISocialLink {
  icon: string
  href: string
}

export type Legend = ILegendCategory[]

export interface ILegendCategory {
  name: string
  items: { color: string; caption: string }[]
}

export enum StationType {
  Thermal, // ТЭЦ
  Hydroelectric, // ГЭС
  Wind, // ВЭС
  StateDistrict, // ГРЭС
  MiniThermal, // МТЭЦ
}

export enum Region {
  Brest,
  Gomel,
  Grodno,
  Mogilev,
  Minsk,
  Vitebsk,
}

export type Stations = IStation[]

export interface IStation {
  type: StationType
  name: string
  year: number
  region: Region
  owner: string
  river?: string
  coords?: LatLng
}
