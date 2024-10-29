import { type RouteLocation, useRouter } from "vue-router";

import { useAppHost } from "@dative-gpi/foundation-shared-services/composables";

export const useOpenTab = () => {
  const { host } = useAppHost();
  const router = useRouter();

  const handleOpenTabEvent = (event: MouseEvent, target: string | RouteLocation): void => {
    event.preventDefault();

    // If a new tab is requested, check if it comes from an extension and act accordingly
    if (event.ctrlKey || event.metaKey || event.button === 1) {
      openTab(target);
    }
    else {
      router.push(target);
    }
  };

  const openTab = (target: string | RouteLocation): void => {
    // Check if target is a href (string) or a to (RouteLocation), get the absolute url in either case
    const href = typeof target === "string" ? target : router.resolve(target).href;

    // If the app is in an iframe, open the link in a new tab with the parent iframe host
    if (window.top != window.self && host.value) {
      window.open(host.value + href, "_blank");
    }
    else {
      window.open(href, "_blank");
    }
  };

  return {
    handleOpenTabEvent,
    openTab
  };
}