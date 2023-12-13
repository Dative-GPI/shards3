<template>
    <FSRow
        class="fs-tag"
        width="hug"
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

        const style = computed(() => ({
            "--fs-tag-light-color": full.value ? colors.base : colors.light,
            "--fs-tag-base-color" : colors.base,
            "--fs-tag-dark-color" : colors.dark,
            "--fs-tag-light-text" : full.value ? colors.light : colors.base,
            "--fs-tag-base-text"  : colors.light,
            "--fs-tag-dark-text"  : colors.light
        }));

        return {
            label,
            editable,
            style,
            emit
        };
    }
});
</script>