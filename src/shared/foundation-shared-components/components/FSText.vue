<template>
    <span
        :class="classes"
        :style="style"
        v-bind="$attrs"
    >
        <slot />
    </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export default defineComponent({
    name: "FSText",
    props: {
        font: {
            type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline" | "text-underline">,
            required: false,
            default: "text-body"
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Dark
        },
        variant: {
            type: String as PropType<"base" | "light" | "dark">,
            required: false,
            default: "dark"
        }
    },
    setup(props) {
        const { color, font, variant } = toRefs(props);

        const colors = useColors().getColors(color.value);

        const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
            switch (variant.value) {
                case "base": return {
                    "--fs-text-color": colors.base
                };
                case "light": return {
                    "--fs-text-color": colors.light
                };
                case "dark": return {
                    "--fs-text-color": colors.dark
                };
            }
        });

        const classes = computed((): string[] => ["fs-text", font.value]);

        return {
            classes,
            style
        };
    }
});
</script>