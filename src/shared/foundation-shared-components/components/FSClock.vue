<template>
    
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { useColors, useDates } from "@dative-gpi/foundation-shared-components/composables";
import { useLanguageCode } from "@dative-gpi/foundation-shared-services/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSClock",
    props: {
    modelValue: {
      type: Array as PropType<Array<number>>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Dark
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorBase.Primary
    }
    },
    setup(props) {

    }
});
</script>