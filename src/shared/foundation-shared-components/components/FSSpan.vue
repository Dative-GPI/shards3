<template>
    <span
        :class="'fs-span ' + $props.font"
        v-bind="$attrs"
    >
        <slot />
    </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
    name: "FSSpan",
    props: {
        font: {
            type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline" | "text-underline">,
            required: false,
            default: "text-body"
        }
    }
});
</script>