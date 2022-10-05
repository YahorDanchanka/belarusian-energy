import { RouteLocationRaw } from 'vue-router'

export type Menu = IMenuItem[]

export interface IMenuItem {
  caption: string
  to: RouteLocationRaw
}
