import { RouteLocationRaw } from "vue-router";
export interface FSBreadcrumbItem {
  to?: RouteLocationRaw,
  disabled?: boolean,
  replace?: boolean,
  exact?: boolean,
  title: string,
  href?: string
}