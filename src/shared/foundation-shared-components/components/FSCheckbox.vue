<template>
    <FSIcon
        class="fs-checkbox"
        size="checkbox"
        :style="style"
        @click="editable ? emit('update:value', !value) : null"
        v-bind="$attrs"
    >
        {{ value ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline" }}
    </FSIcon>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSIcon from "./FSIcon.vue";

export default defineComponent({
    name: "FSCheckbox",
    components: {
        FSIcon
    },
    props: {
        value: {
            type: Boolean,
            required: false,
            default: false
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["update:value"],
    setup(props, { emit }) {
        const { value, editable } = toRefs(props);

        const colors = useColors().getDark();

        const style = {
            "--cu": editable.value ? "pointer" : "default",
            "--lc": colors.light,
            "--bc": colors.base
        };

        return {
            value,
            editable,
            style,
            emit
        };
    }
});
</script>

<style lang="scss" scoped>
.fs-checkbox {
    cursor: var(--cu);
    color: var(--lc);
}
</style>