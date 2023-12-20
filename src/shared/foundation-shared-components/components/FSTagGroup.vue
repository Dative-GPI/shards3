<template>
    <FSWrapGroup v-bind="$attrs">
        <FSTag
            v-for="(tag, index) in $props.tags"
            :key="index"
            :label="tag"
            :variant="$props.variant"
            :color="$props.color"
            :textColor="$props.textColor"
            :editable="$props.editable"
            @remove="() => $emit('remove', tag)"
        />
        <slot name="default" />
    </FSWrapGroup>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSWrapGroup from "./FSWrapGroup.vue";
import FSTag from "./FSTag.vue";

export interface FSTagItem {
    label: string,
    variant: "standard" | "full",
    color: ColorBase,
    editable: boolean
}

export default defineComponent({
    name: "FSTagGroup",
    components: {
        FSWrapGroup,
        FSTag
    },
    props: {
        tags: {
            type: Array as PropType<Array<String>>,
            required: false,
            default: () => []
        },
        variant: {
            type: String as PropType<"standard" | "full">,
            required: false,
            default: "full"
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        },
        textColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: null
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    }
});
</script>