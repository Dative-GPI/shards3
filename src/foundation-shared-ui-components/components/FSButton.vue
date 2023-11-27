<template>
    <v-btn
        class="fs-button"
        :ripple="false"
        :style="style"
        v-bind="$attrs"
    >
        <FSRow width="hug">
            <FSIcon v-if="icon" size="m">
                {{ icon }}
            </FSIcon>
            <FSSpan v-if="label" :text="label">
                {{ label }}
            </FSSpan>
        </FSRow>
    </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-ui-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-ui-components/themes";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSButton",
    components: {
        FSSpan,
        FSIcon,
        FSRow
    },
    props: {
        icon: {
            type: String,
            required: false,
            default: null
        },
        label: {
            type: String,
            required: false,
            default: null
        },
        full: {
            type: Boolean,
            required: false,
            default: false
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        }
    },
    setup(props) {
        const { label, full, color } = toRefs(props);

        const colors = useColors().getVariants(color.value);

        const style = {
            "--pa": label.value ? "0 16px" : "0",
            "--lc": full.value ? colors.base : colors.light,
            "--bc": colors.base,
            "--dc": colors.dark,
            "--lt": full.value ? colors.light : colors.base,
            "--bt": colors.light,
            "--dt": colors.light
        };

        return {
            icon: props.icon,
            label,
            style
        };
    }
});
</script>

<style lang="scss" scoped>
@import "@dative-gpi/foundation-shared-ui-components/styles/main.scss";

.fs-button {
    padding: var(--pa);
    border-radius: 4px;
    box-shadow: none !important;
    border: 1px solid var(--bc);
    background-color: var(--lc);
    color: var(--lt);

    &:hover {
        background-color: var(--bc);
        color: var(--bt);

        & .fs-span {
            color: transparent;

            &:after {
                content: attr(text);
                position: absolute;
                color: var(--bt);

                @extend .text-button;
            }
        }
    }

    &:active {
        border-color: var(--dc);
        background-color: var(--dc);
    }

    @include web {
        min-width: 48px !important;
        height: 48px !important;
    }

    @include mobile {
        min-width: 36px !important;
        height: 36px !important;
    }
}
</style>