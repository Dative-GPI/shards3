<template>
    <v-tabs
        class="fs-tabs"
        selected-class="fs-tab-active"
        show-arrows
        grow
        :style="style"
        :modelValue="tab"
        @update:modelValue="(v) => emit('update:tab', v)"
        v-bind="$attrs"
    >
        <slot v-bind="{ color }" />
    </v-tabs>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-ui-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-ui-components/themes";

export default defineComponent({
    name: "FSTabs",
    props: {
        tab: {
            type: Number,
            required: false,
            default: 0
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        }
    },
    emits: ["update:tab"],
    setup(props, { emit }) {
        const { tab, color } = toRefs(props);

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
            tab,
            color,
            style,
            emit
        };
    }
});
</script>

<style lang="scss" scoped>
@import "@dative-gpi/foundation-shared-ui-components/styles/main.scss";
@import "@dative-gpi/foundation-shared-ui-components/styles/main.scss";

.fs-tabs {
    display: flex;
    width: 100%;

    @include web {
        height: 48px;
    }

    @include mobile {
        height: 40px;
    }
}

:deep(.v-slide-group__prev--disabled) {
    color: var(--lt) !important;
}

:deep(.v-slide-group__prev),
:deep(.v-slide-group__next) {
    transition: background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1 1 0 !important;
    color: var(--bt);

    min-width: 24px !important;
    width: 24px !important;

    @include touchscreen {
        display: none;
    }
}

:deep(.v-slide-group__prev:hover),
:deep(.v-slide-group__next:hover) {
    background-color: var(--lc);
    color: var(--dt);
}
</style>