<template>
    <span
        class="fs-span"
        :class="font"
        v-bind="$attrs"
    >
        <slot />
    </span>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "FSSpan",
    props: {
        font: {
            type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline">,
            required: false,
            default: "text-body"
        }
    },
    setup(props) {
        const { font } = toRefs(props);
        
        return {
            font
        };
    }
});
</script>

<style lang="scss" scoped>
@import "@dative-gpi/foundation-shared-ui-components/styles/texts.scss";

.fs-span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>