<template>
    <FSRow
        class="fs-tag"
        width="hug"
        align="center-left"
        :style="style"
        v-bind="$attrs"
    >
        <slot name="default">
            <FSSpan class="fs-tag-label">
                {{ $props.label }}
            </FSSpan>
        </slot>
        <slot name="button">
            <v-btn
                v-if="editable"
                class="fs-tag-button"
                :ripple="false"
                @click="$emit('remove')"
            >
                <FSIcon size="s">
                    mdi-close
                </FSIcon>
            </v-btn>
        </slot>
    </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTag",
    components: {
        FSIcon,
        FSSpan,
        FSRow
    },
    props: {
        label: {
            type: String,
            required: true
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
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["remove"],
    setup(props) {
        const { variant, color, editable } = toRefs(props);

        const colors = useColors().getVariants(color.value);

        const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => ({
            "--fs-tag-light-color": ["full"].includes(variant.value) ? colors.base : colors.light,
            "--fs-tag-base-color" : colors.base,
            "--fs-tag-dark-color" : colors.dark,
            "--fs-tag-light-text" : ["full"].includes(variant.value) ? colors.light : colors.base,
            "--fs-tag-base-text"  : colors.light,
            "--fs-tag-dark-text"  : colors.light
        }));

        return {
            editable,
            style
        };
    }
});
</script>