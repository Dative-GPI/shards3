import { defineAsyncComponent } from "vue";

import { MagicFieldType } from "../models/magicFields";

const FIELDS = {
  [MagicFieldType.NumberField]    : defineAsyncComponent(() => import("../components/fields/FSNumberField.vue")),
  [MagicFieldType.TextField]      : defineAsyncComponent(() => import("../components/fields/FSTextField.vue")),
  [MagicFieldType.Switch]         : defineAsyncComponent(() => import("../components/FSSwitch.vue")),
  [MagicFieldType.DateTimeField]  : defineAsyncComponent(() => import("../components/fields/FSDateTimeField.vue")),
  [MagicFieldType.IconField]      : defineAsyncComponent(() => import("../components/fields/FSIconField.vue")),
  [MagicFieldType.TimeField]      : defineAsyncComponent(() => import("../components/fields/FSTimeField.vue")),
  [MagicFieldType.TimeStepField]  : defineAsyncComponent(() => import("../components/fields/FSTimeStepField.vue")),
  [MagicFieldType.PlotPerField]   : defineAsyncComponent(() => import("../components/selects/chartSelectors/FSPlotPerSelector.vue")),
};

export const useMagicFieldProvider = () => {
  const get = (code: keyof typeof FIELDS) => {
    return FIELDS[code];
  };

  return {
    get
  };
};