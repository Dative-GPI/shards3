import { Plugin } from "vue";

export const MapsPlugin: Plugin = {
  install: (_app, options: MapsOptions) => {
    const key = options?.key ?? import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    console.log("key", key);
    const maps = document.createElement("script");
    maps.setAttribute(
      "src",
      `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry,places`
    );

    let resolvePromise: (value: void) => void;
    let rejectPromise: (reason?: any) => void;

    const promise = new Promise<void>((resolve, reject) => {
      resolvePromise = resolve;
      rejectPromise = reject;
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
