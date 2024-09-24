<template>
  <v-tabs
    selectedClass="fs-tab-active"
    class="fs-tabs"
    :sliderColor="$props.color"
    :showArrows="true"
    :style="style"
    :grow="true"
    :modelValue="$props.tab"
    @update:modelValue="onUpdateTab($event)"
    v-bind="$attrs"
  >
    <slot/>
  </v-tabs>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, type StyleValue } from "vue";
import { useRouter } from "vue-router";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSTabs",
  props: {
    tab: {
      type: [String, Number] as PropType<string | number>,
      required: false,
      default: 0
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    recordNavigation: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:tab"],
  setup(props, { emit }) {
    const { getColors } = useColors();
    const router = useRouter();

    const colors = computed(() => getColors(props.color));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => ({
      "--fs-group-color"                : darks.soft,
      "--fs-group-hover-color"          : darks.dark,
      "--fs-tab-border-color"           : lights.dark,
      "--fs-tab-hover-border-color"     : darks.dark,
      "--fs-tab-active-background-color": colors.value.light,
      "--fs-tab-tag-background-color"   : colors.value.base,
      "--fs-tab-tag-color"              : colors.value.baseContrast!
    }));

    const onUpdateTab = (tab: number): void => {
      if (props.recordNavigation) {
        router.replace({ query: { tab: tab.toString() } });
      }
      emit("update:tab", tab);
    }

    onMounted((): void => {
      if (props.recordNavigation && router.currentRoute.value.query.tab) {
        emit("update:tab", router.currentRoute.value.query.tab);
      }
    });

    return {
      style,
      onUpdateTab
    };
  }
});
</script>