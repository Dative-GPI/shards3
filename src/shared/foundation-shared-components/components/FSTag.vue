<template>
    <FSRow
        class="fs-tag"
        width="hug"
        height="hug"
        :style="style"
        v-bind="$attrs"
    >
        <FSSpan>
            {{ label }}
        </FSSpan>
        <v-btn
            v-if="editable"
            class="fs-tag-button"
            :ripple="false"
            @click="emit('remove')"
        >
            <FSIcon size="s">
                mdi-close
            </FSIcon>
        </v-btn>
    </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

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
        full: {
            type: Boolean,
            required: false,
            default: true
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
    setup(props, { emit }) {
        const { label, full, color, editable } = toRefs(props);

        const colors = useColors().getVariants(color.value);

        const style = {
            "--lc": full.value ? colors.base : colors.light,
            "--bc": colors.base,
            "--dc": colors.dark,
            "--lt": full.value ? colors.light : colors.base,
            "--bt": colors.light,
            "--dt": colors.light
        };

        return {
            label,
            editable,
            style,
            emit
        };
    }
});
</script>

<style lang="scss" scoped>
@import "@dative-gpi/foundation-shared-components/styles/main.scss";

.fs-tag {
    padding: 0 8px;
    border-radius: 2px;
    background-color: var(--lc);
    color: var(--lt);

    @include web {
        height: 28px;
    }

    @include mobile {
        height: 24px;
    }
}

.fs-tag-button {
    padding: 0;
    margin: 4px 0;
    border-radius: 2px;
    box-shadow: none !important;
    background-color: var(--lc);
    color: var(--lt);

    &:hover {
        background-color: var(--bc);
        color: var(--bt);
    }

    &:active {
        background-color: var(--dc);
        color: var(--dt);
    }

    @include web {
        min-width: 20px !important;
        height: 20px !important;
    }

    @include mobile {
        min-width: 20px !important;
        height: 16px !important;
    }
}
</style>