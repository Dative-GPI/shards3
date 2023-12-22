<template>
    <FSCol width="hug">
        <FSRadio
            v-for="item in $props.values"
            :key="item.value"
            :label="item.label"
            :description="item.description"
            :value="item.value"
            :selected="isSelected(item.value)"
            :color="$props.color"
            :editable="$props.editable"
            @update:value="onToggle"
        />
    </FSCol>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSRadio from "./FSRadio.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
    name: "FSRadioGroup",
    components: {
        FSRadio,
        FSCol
    },
    props: {
        values: {
            type: Array as PropType<Array<{ value: String | Boolean | Number, label?: String, description?: string }>>,
            required: true,
            default: false
        },
        value: {
            type: [String, Boolean, Number],
            required: false,
            default: 0
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["update:value"],
    setup(props, { emit }) {
        const { value } = toRefs(props);

        const isSelected = (item: String | Boolean | Number): boolean => {
            return item == value.value;
        };

        const onToggle = (item: String | Boolean | Number): void => {
            if (item != value.value) {
                emit("update:value", item);
            }
        };

        return {
            isSelected,
            onToggle
        };
    }
});
</script>