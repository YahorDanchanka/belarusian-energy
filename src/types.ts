import { RouteLocationRaw } from 'vue-router'

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
