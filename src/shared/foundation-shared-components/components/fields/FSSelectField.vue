<template>
  <FSCol>
    <slot
      v-if="!$props.hideHeader"
      name="label"
    >
      <FSRow :wrap="false">
        <FSSpan
          v-if="$props.label"
          class="fs-select-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-select-field-label"
          style="margin-left: -8px;"
          font="text-overline"
          :ellipsis="false"
          :style="style"
        >
          *
        </FSSpan>
        <v-spacer style="min-width: 40px;" />
        <FSSpan
          v-if="messages.length > 0"
          class="fs-select-field-messages"
          font="text-overline"
          :style="style"
        >
          {{ messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <v-select
      class="fs-select-field"
      variant="outlined"
      :menuIcon="null"
      :style="style"
      :listProps="listStyle"
      :hideDetails="true"
      :items="$props.items"
      :itemTitle="$props.itemTitle"
      :itemValue="$props.itemValue"
      :readonly="!$props.editable"
      :clearable="$props.editable && !!$props.modelValue"
      :returnObject="$props.returnObject"
      :rules="$props.rules"
      :validateOn="validateOn"
      :modelValue="$props.modelValue"
      v-model:menu="menu"
      @update:modelValue="(value) => $emit('update:modelValue', value)"
      @click="isExtraSmall ? openMobileOverlay() : null"
      @blur="blurred = true"
      v-bind="$attrs"
    >
      <template
        v-for="(_, name) in slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
      <template #clear>
        <slot name="clear">
          <FSButton
            v-if="$props.editable && $props.modelValue"
            icon="mdi-close"
            variant="icon"
            :color="ColorEnum.Dark"
            @click="$emit('update:modelValue', null)"
          />
        </slot>
      </template>
      <template #append-inner>
        <slot name="append-inner">
          <FSButton
            icon="mdi-chevron-down"
            @click="isExtraSmall ? openMobileOverlay() : null"
            variant="icon"
            :editable="$props.editable"
            :color="ColorEnum.Dark"
          />
        </slot>
      </template>
    </v-select>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-select-field-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
  <v-dialog
    max-height="60%"
    v-model="menuMobile"
  >
    <FSCard
      :elevation="'true'"
      padding="24px 8px 24px 24px"
      width="fill"
      gap="24px"
    >
      <FSFadeOut height="60vh">
        <FSCol
          v-if="$props.multiple"
          gap="12px"
        >
          <FSRow v-for="(item, index) in $props.items">
            <FSCheckbox
              :modelValue="$props.modelValue?.includes(item[$props.itemValue])"
              :label="item[$props.itemTitle]"
              :editable="$props.editable"
              @update:modelValue="() => onMobileCheckBoxChange(item[$props.itemValue], modelValue)"
            />
          </FSRow>
        </FSCol>
        <FSRadioGroup
          v-else
          gap="12px"
          :values="$props.items.map((item: any) => ({ value: item[$props.itemValue], label: item[$props.itemTitle] }))"
          :modelValue="$props.modelValue"
          :editable="$props.editable"
          @update:modelValue="onMobileRadioGroupSubmit"
        />
      </FSFadeOut>
    </FSCard>
  </v-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";
import FSCard from "../FSCard.vue";
import FSRadioGroup from "../FSRadioGroup.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSFadeOut from "../FSFadeOut.vue";

export default defineComponent({
  name: "FSSelectField",
  components: {
    FSButton,
    FSSpan,
    FSCol,
    FSRow,
    FSCard,
    FSRadioGroup,
    FSCheckbox,
    FSFadeOut
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    itemTitle: {
      type: String,
      required: false,
      default: "label"
    },
    modelValue: {
      type: [Array, String, Number] as PropType<(string | number)[] | string | number | null>,
      required: false,
      default: null
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    returnObject: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const { validateOn, blurred, getMessages } = useRules();
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const menu = ref(false);
    const menuMobile = ref(false);

    const backgrounds = getColors(ColorEnum.Background);
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-select-field-cursor"             : "default",
          "--fs-select-field-border-color"       : lights.base,
          "--fs-select-field-color"              : lights.dark,
          "--fs-select-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-select-field-cursor"             : "pointer",
        "--fs-select-field-background-color"   : backgrounds.base,
        "--fs-select-field-border-color"       : lights.dark,
        "--fs-select-field-color"              : darks.base,
        "--fs-select-field-active-border-color": darks.dark,
        "--fs-select-field-error-color"        : errors.base,
        "--fs-select-field-error-border-color" : errors.base
      };
    });

    const listStyle = computed((): any => {
      return {
        style: style.value
      };
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const openMobileOverlay = () => {
      if (!props.editable) {
        return;
      }
      menu.value = false;
      menuMobile.value = true;
    };

    const onMobileRadioGroupSubmit = (modelValue: any) => {
      ctx.emit('update:modelValue', modelValue)
      menuMobile.value = false;
    };

    const onMobileCheckBoxChange = (value: any, modelValue: any) => {
      const innerValue = ref(modelValue);
      if (modelValue?.includes(value)) {
        innerValue.value = modelValue.filter((item: any) => item !== value);
      }
      else {
        innerValue.value = modelValue ? [...modelValue, value] : [value];
      }
      ctx.emit('update:modelValue', innerValue.value);
    };

    return {
      openMobileOverlay,
      onMobileRadioGroupSubmit,
      onMobileCheckBoxChange,
      isExtraSmall,
      validateOn,
      ColorEnum,
      listStyle,
      messages,
      blurred,
      slots,
      menu,
      menuMobile,
      style
    };
  }
});
</script>