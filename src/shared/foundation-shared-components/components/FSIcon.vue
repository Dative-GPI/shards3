<template>
    <v-icon
        :class="size"
        v-bind="$attrs"
    >
        <slot />
    </v-icon>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "FSIcon",
    props: {
        size: {
            type: String as PropType<"s" | "m" | "checkbox">,
            required: false,
            default: "m"
        }
    },
    setup(props) {
        const { size } = toRefs(props);

        return {
            size: `fs-icon-${size.value}`
        };
    }
});
</script>

<style lang="scss" scoped>
@import "@dative-gpi/foundation-shared-components/styles/main.scss";

.fs-icon-s {
    font-size: 12px !important;
}

.fs-icon-m {
    @include mobile {
        font-size: 18px !important;
    }

    @include web {
        font-size: 24px !important;
    }
}

.fs-icon-checkbox {
    font-size: 22px !important;
}
</style>