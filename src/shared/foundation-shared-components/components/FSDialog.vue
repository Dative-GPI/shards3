<template>
  <v-dialog
    transition="dialog-bottom-transition"
    :width="width"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <FSCard
      padding="24px 8px 24px 24px"
      gap="24px"
      :color="$props.color"
      :class="classes"
    >
      <template
        #header
      >
        <FSCol
          padding="0 16px 0 0"
        >
          <FSRow
            align="center-left"
            :wrap="false"
          >
            <FSText
              font="text-h2"
            >
              {{ $props.title }}
            </FSText>
            <v-spacer />
            <FSButton
              icon="mdi-close"
              variant="icon"
              :color="ColorEnum.Dark"
              @click="$emit('update:modelValue', false)"
            />
          </FSRow>
          <FSText
            v-if="$props.subtitle"
          >
            {{ $props.subtitle }}
          </FSText>
        </FSCol>
      </template>
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
    </FSCard>
  </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSButton from "./FSButton.vue";
import FSCard from "./FSCard.vue";
import FSText from "./FSText.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialog",
  components: {
    FSButton,
    FSCard,
    FSText,
    FSRow
  },
  props: {
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fit-content"
    },
    cardClasses: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { isExtraSmall } = useBreakpoints();

    const classes = computed((): string[] => {
      const classNames = ["fs-dialog"];
      if (props.cardClasses) {
        if (Array.isArray(props.cardClasses)) {
          classNames.push(...props.cardClasses);
        }
        else {
          classNames.push(props.cardClasses);
        }
      }
      if (isExtraSmall.value) {
        classNames.push("fs-dialog-mobile");
      }
      return classNames;
    });

    const width = computed((): string => {
      if (isExtraSmall.value) {
        return "100%";
      }
      return sizeToVar(props.width);
    });

    return {
      isExtraSmall,
      ColorEnum,
      classes,
      width
    };
  }
});
</script>