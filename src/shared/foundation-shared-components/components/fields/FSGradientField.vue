<template>
  <FSCol
    :style="style"
    class="fs-gradient-field"
  >
    <FSBaseField
      :label="$props.label"
      :description="$props.description"
      :required="$props.required"
      :editable="$props.editable"
      v-bind="$attrs"
    >
      <FSRow>
        <FSColorField
          :modelValue="$props.modelValue[0]"
          :required="$props.required"
          :editable="$props.editable"
          @update:modelValue="$emit('update:modelValue', [$event, $props.modelValue[1]])"
        />
        <FSColorField
          :modelValue="$props.modelValue[1]"
          :required="$props.required"
          :editable="$props.editable"
          @update:modelValue="$emit('update:modelValue', [$props.modelValue[0], $event])"
        />
      </FSRow>
      <FSSelectField
        class="fs-gradient-select-field"
        :items="items"
        :style="style"
        @update:modelValue="$emit('update:modelValue', JSON.parse($event))"
        :clearable="false"
        :editable="$props.editable"
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
                class="fs-gradient-field-preview"
                :style="{ '--fs-gradient-field-background': `linear-gradient(to right, ${JSON.parse(item.value)[0]}, ${JSON.parse(item.value)[1]})` }"
              >
                <span />
              </FSRow>
            </template>
          </v-list-item>
        </template>
      </FSSelectField>
    </FSBaseField>
  </FSCol>
</template>

<script lang="ts">
import { type PropType, defineComponent, computed } from "vue";

import FSColorField from "./FSColorField.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";
import FSBaseField from "./FSBaseField.vue";
import { useColors } from "../../composables";
import FSSelectField from "./FSSelectField.vue";
import { ColorEnum } from "../../models";

export default defineComponent({
  name: "FSGradientField",
  components: {
    FSBaseField,
    FSColorField,
    FSCol,
    FSRow,
    FSSelectField
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
    presets: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [
        '["#9400D3","#4B0082"]', '["#c84e89","#F15F79"]', '["#00F5A0","#00D9F5"]',
        '["#F7941E","#004E8F"]', '["#72C6EF","#004E8F"]', '["#FD8112","#0085CA"]',
        '["#bf5ae0","#a811da"]', '["#00416A","#E4E5E6"]', '["#fbed96","#abecd6"]',
        '["#FFE000","#799F0C"]', '["#F7F8F8","#ACBB78"]', '["#334d50","#cbcaa5"]',
        '["#799F0C","#ACBB78"]', '["#ffe259","#ffa751"]', '["#00416A","#E4E5E6"]',
        '["#FFE000","#799F0C"]', '["#acb6e5","#86fde8"]', '["#536976","#292E49"]',
        '["#B79891","#94716B"]', '["#9796f0","#fbc7d4"]', '["#BBD2C5","#536976"]',
        '["#076585","#fff"]', '["#00467F","#A5CC82"]', '["#000C40","#607D8B"]',
        '["#1488CC","#2B32B2"]', '["#ec008c","#fc6767"]', '["#cc2b5e","#753a88"]',
        '["#2193b0","#6dd5ed"]', '["#e65c00","#F9D423"]', '["#2b5876","#4e4376"]',
        '["#314755","#26a0da"]', '["#ff6e7f","#bfe9ff"]', '["#e52d27","#b31217"]',
        '["#603813","#b29f94"]', '["#16A085","#F4D03F"]', '["#D31027","#EA384D"]',
        '["#EDE574","#E1F5C4"]', '["#02AAB0","#00CDAC"]', '["#DA22FF","#9733EE"]',
        '["#348F50","#56B4D3"]', '["#3CA55C","#B5AC49"]', '["#003973","#E5E5BE"]',
        '["#E55D87","#5FC3E4"]', '["#403B4A","#E7E9BB"]', '["#F09819","#EDDE5D"]',
        '["#FF512F","#DD2476"]', '["#AA076B","#61045F"]', '["#1A2980","#26D0CE"]',
        '["#FF512F","#F09819"]', '["#1D2B64","#F8CDDA"]', '["#4CB8C4","#3CD3AD"]',
        '["#DD5E89","#F7BB97"]', '["#EB3349","#F45C43"]', '["#1D976C","#93F9B9"]',
        '["#FF8008","#FFC837"]', '["#16222A","#3A6073"]', '["#1F1C2C","#928DAB"]',
        '["#614385","#516395"]', '["#4776E6","#8E54E9"]', '["#085078","#85D8CE"]',
        '["#2BC0E4","#EAECC6"]', '["#134E5E","#71B280"]', '["#5C258D","#4389A2"]',
        '["#757F9A","#D7DDE8"]', '["#232526","#414345"]', '["#1CD8D2","#93EDC7"]',
        '["#3D7EAA","#FFE47A"]', '["#283048","#859398"]', '["#24C6DC","#514A9D"]',
        '["#DC2424","#4A569D"]', '["#ED4264","#FFEDBC"]', '["#DAE2F8","#D6A4A4"]',
        '["#ECE9E6","#FFFFFF"]', '["#7474BF","#348AC7"]', '["#EC6F66","#F3A183"]',
        '["#5f2c82","#49a09d"]', '["#C04848","#480048"]', '["#e43a15","#e65245"]',
        '["#414d0b","#727a17"]', '["#FC354C","#0ABFBC"]', '["#4b6cb7","#182848"]',
        '["#f857a6","#ff5858"]', '["#a73737","#7a2828"]', '["#d53369","#cbad6d"]',
        '["#e9d362","#333333"]', '["#DE6262","#FFB88C"]', '["#666600","#999966"]',
        '["#FFEEEE","#DDEFBB"]', '["#EFEFBB","#D4D3DD"]', '["#c21500","#ffc500"]',
        '["#215f00","#e4e4d9"]', '["#50C9C3","#96DEDA"]', '["#616161","#9bc5c3"]',
        '["#ddd6f3","#faaca8"]', '["#5D4157","#A8CABA"]', '["#E6DADA","#274046"]',
        '["#f2709c","#ff9472"]', '["#DAD299","#B0DAB9"]', '["#D3959B","#BFE6BA"]',
        '["#00d2ff","#3a7bd5"]'
      ]
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getColors } = useColors();

    const baseColors = getColors(ColorEnum.Primary);

    const style = computed((): { [key: string]: string | null | undefined } => {
      return {
        '--fs-gradient-field-background': `linear-gradient(to right, ${props.modelValue[0]}, ${props.modelValue[1]})`
      };
    });

    const items = [
      JSON.stringify([baseColors.dark, baseColors.light]),
      JSON.stringify([baseColors.baseContrast, baseColors.base]),
      JSON.stringify([baseColors.soft, baseColors.dark]),
      ...props.presets
    ];

    return {
      style,
      items
    };
  }
});
</script>