import { getCurrentInstance } from 'vue';
import { createVuetify, VuetifyOptions } from "vuetify";

export const useVuetify = () => {
    const vm = getCurrentInstance();

    return vm?.proxy?.$vuetify || undefined;
};