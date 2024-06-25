import type { Plugin } from "vue";

export const MapsPlugin: Plugin = {
  install: (_app, options: MapsOptions) => {
    if(window?.initMap) return;
    const key = options?.key ?? import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const maps = document.createElement("script");
    maps.setAttribute(
      "src",
      `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&libraries=geometry,places`
    );

    let resolvePromise: (value: void) => void;

    const promise = new Promise<void>((resolve) => {
      resolvePromise = resolve;
    });

    window.initMap = promise;

    maps.onload = (ev) => {
      resolvePromise();
    };

    document.head.appendChild(maps);

    const autocomplete = document.createElement("div");
    autocomplete.id = "places";
    document.body.appendChild(autocomplete);
  }
}

export interface MapsOptions {
  key?: string;
}
