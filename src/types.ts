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
