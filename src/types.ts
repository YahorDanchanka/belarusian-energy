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
  Nuclear, // АЭС
  Solar, // СЭС
}

export enum ResourceType {
  Wood,
  Turf,
  Coal,
  Oil,
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
  id: string
  type: StationType
  name: string
  year?: number
  region: Region
  owner?: string
  river?: string
  coords?: LatLng
  images?: string[]
  content?: string
}

export interface IResource {
  id: string
  type: ResourceType
  name: string
  year?: number
  region: Region
  coords?: LatLng
}

export type Pagination = IPaginationItem[]
export type PaginationItemValue = string | number

export interface IPaginationItem {
  iconUrl: string
  value: PaginationItemValue
}

export type Regions = IRegion[]

export interface IRegion {
  id: string | number
  neighbors: IRegion[]
  imageUrl: string
  coords: { top: number; left: number }
  fixed: { top: number; left: number }
}
