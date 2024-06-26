import type { RouteLocationRaw } from "vue-router";
export interface FSBreadcrumbItem {
  to?: RouteLocationRaw | null;
  disabled?: boolean | null;
  replace?: boolean | null;
  exact?: boolean | null;
  title: string | null;
  href?: string | null;
}