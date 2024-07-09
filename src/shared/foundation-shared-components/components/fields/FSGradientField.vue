<template>
  <FSCol
    :style="style"
    class="fs-gradient-field"
  >
    <FSRow>
      <FSColorField
        :modelValue="$props.modelValue[0]"
        :required="required"
        :editable="editable"
        @update:modelValue="$emit('update:modelValue', [$event, $props.modelValue[1]])"
      />
      <FSColorField
        :modelValue="$props.modelValue[1]"
        :required="required"
        :editable="editable"
        @update:modelValue="$emit('update:modelValue', [$props.modelValue[0], $event])"
      />
    </FSRow>
    <FSBaseField
      :description="$props.description"
      :required="$props.required"
      :editable="$props.editable"
    >
      <v-select
        class="fs-select-field fs-gradient-select-field"
        variant="outlined"
        :items="items"
        :persistentClear="true"
        :hideDetails="true"
        :style="style"
        @update:modelValue="$emit('update:modelValue', JSON.parse($event))"
        v-bind="$attrs"
        :modelValue="JSON.stringify($props.modelValue)"
      >
        <template v-slot:selection="{ item }">
          <FSRow
            height="fill"
            width="100%"
            class="fs-gradient-field-preview"
            :style="{ '--fs-gradient-field-background': `linear-gradient(to right, ${JSON.parse(item.value)[0]}, ${JSON.parse(item.value)[1]})` }"
          >
            <span />
          </FSRow>
        </template>
        <template v-slot:item="{ item, props }">
          <v-list-item v-bind="props">
            <template #title>
              <FSRow
                height="fill"
                width="100%"
                padding="0 18px"
                class="fs-gradient-field-preview"
                :style="{ '--fs-gradient-field-background': `linear-gradient(to right, ${JSON.parse(item.value)[0]}, ${JSON.parse(item.value)[1]})` }"
              >
                <span />
              </FSRow>
            </template>
          </v-list-item>
        </template>
      </v-select>
    </FSBaseField>
  </FSCol>
</template>

<script lang="ts">
import { type PropType, defineComponent, computed, watch, ref } from "vue";

import FSColorField from "./FSColorField.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";
import FSCard from "../FSCard.vue";
import FSButton from "../FSButton.vue";
import FSBaseField from "./FSBaseField.vue";
import { useColors } from "../../composables";
import { ColorEnum } from "../../models";

export default defineComponent({
  name: "FSGradientField",
  components: {
    FSBaseField,
    FSButton,
    FSCard,
    FSColorField,
    FSCol,
    FSRow
  },
  props: {
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string]: string | null | undefined } => {
      if (!props.editable) {
        return {
          "--fs-select-field-cursor": "default",
          "--fs-select-field-border-color": lights.base,
          "--fs-select-field-color": lights.dark,
          "--fs-select-field-active-border-color": lights.base,
          '--fs-gradient-field-background': `linear-gradient(to right, ${props.modelValue[0]}, ${props.modelValue[1]})`
        };
      }
      return {
        "--fs-select-field-cursor": "pointer",
        "--fs-select-field-background-color": backgrounds.base,
        "--fs-select-field-border-color": lights.dark,
        "--fs-select-field-color": darks.base,
        "--fs-select-field-active-border-color": darks.dark,
        "--fs-select-field-error-border-color": errors.base,
        '--fs-gradient-field-background': `linear-gradient(to right, ${props.modelValue[0]}, ${props.modelValue[1]})`
      };
    });

    const items = [
      JSON.stringify(["#FF0000", "#00FF00"]),
      JSON.stringify(["#00FF00", "#0000FF"]),
      JSON.stringify(["#0000FF", "#FF0000"])
    ];

    return {
      style,
      items
    };
  }
});
</script>