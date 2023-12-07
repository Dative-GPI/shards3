<template>
    <v-tab
        class="fs-tab"
        :ripple="false"
        :style="style"
        :slider-color="sliderColor"
        v-bind="$attrs"
    >
        <FSRow>
            <FSSpan class="fs-tab-label" :text="label">
                {{ label }}
            </FSSpan>
            <v-spacer />
            <FSSpan v-if="tag" class="fs-tab-tag" font="text-body">
                {{ tag }}
            </FSSpan>
        </FSRow>
    </v-tab>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTab",
    components: {
        FSSpan,
        FSRow
    },
    props: {
        label: {
            type: String,
            required: true
        },
        tag: {
            type: String,
            required: false,
            default: null
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        }
    },
    setup(props) {
        const { label, color } = toRefs(props);

        const colors = useColors().getVariants(color.value);
        const textColors = useColors().getText();

        const style = {
            "--lc": colors.light,
            "--bc": colors.base,
            "--dc": colors.dark,
            "--lt": textColors.base,
            "--bt": textColors.base,
            "--dt": textColors.dark
        };

        return {
            label,
            style,
            sliderColor: colors.base
        };
    }
});
</script>

<style lang="scss" scoped>
@import "@dative-gpi/foundation-shared-components/styles/main.scss";

.fs-tab {
    display: flex;
    padding: 0 16px;
    border-bottom: 1px solid var(--lt);
    color: var(--lt);
    justify-content: flex-start;

    &:hover {
        border-bottom: 1px solid var(--dt);

        .fs-tab-label {
            color: transparent;

            &:after {
                content: attr(text);
                position: absolute;
                color: var(--dt);

                @extend .text-button;
            }
        }
    }

    @include web {
        height: 48px;
    }

    @include mobile {
        height: 40px;
    }
}

.fs-tab-active {
    background-color: var(--lc) !important;
    color: var(--dt) !important;
    border-bottom: 0 !important;
}

.fs-tab-active .fs-tab-label {
    color: transparent;

    &:after {
        content: attr(text);
        position: absolute;
        color: var(--dt);

        @extend .text-button;
    }
}

.fs-tab-tag {
    padding: 0 8px;
    border-radius: 4px;
    background-color: var(--bc);
    color: var(--lc);

    @include web {
        min-width: 28px;
        height: 28px;
    }

    @include mobile {
        min-width: 24px;
        height: 24px;
    }
}

:deep(.v-btn__content) {
    width: 100%;
}
</style>