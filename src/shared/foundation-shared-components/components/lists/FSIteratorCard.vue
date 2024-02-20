<template>
  <FSCard
    class="fs-iterator-card"
    padding="12px"
    width="100%"
  >
    <FSCol>
      <FSRow
        v-for="(header, index) in $props.headers"
        align="center-left"
        :key="index"
      >
        <slot :name="`header.${header.value}`" v-bind="{ header }">
          <FSRow
            align="center-left"
            width="50%"
          >
            <FSText
              font="text-button"
            >
              {{ header.text }}
            </FSText>
          </FSRow>
        </slot>
        <slot :name="`item.${header.value}`" v-bind="{ item: $props.item }">
          <FSRow
            align="center-left"
            width="50%"
          >
            <FSText>
              {{ $props.item[header.value] }}
            </FSText>
          </FSRow>
        </slot>
      </FSRow>
    </FSCol>
    <FSContainer
      v-if="$props.showSelect"
      class="fs-iterator-card-checkbox"
      :border="false"
    >
      <FSCheckbox
        :color="$props.color"
        :modelValue="$props.modelValue"
        @update:modelValue="() => $emit('update:modelValue', $props.item)"
      />
    </FSContainer>
  </FSCard>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, onMounted, PropType, ref, Slot, watch } from "vue";
import { useRouter } from "vue-router";

import { ColorEnum, FSDataTableColumn, FSDataTableFilter, FSDataTableOrder } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints, useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";

import FSContainer from "../FSContainer.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSCard from "../FSCard.vue";
import FSText from "../FSText.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSIteratorCard",
  components: {
    FSContainer,
    FSCheckbox,
    FSCard,
    FSText,
    FSRow
  },
  props: {
    headers: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    itemTo: {
      type: Function,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String as PropType<ColorEnum>,
      required: false,
      default: ColorEnum.Primary
    },
    showSelect: {
      type: Boolean,
      required: false,
      default: true
    }
  }
});
</script>