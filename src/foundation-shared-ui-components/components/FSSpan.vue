<template>
    <span
        v-bind="$attrs"
        :class="fontClass"
    >
        <slot />
    </span>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { useMobile } from "@dative-gpi/foundation-shared-ui-components/composables";

export default defineComponent({
    name: "FSSpan",
    props: {
        textFont: {
            type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline">,
            required: false,
            default: "text-body"
        }
    },
    setup(props) {
        const fontClass = ref(`${props.textFont}-web`);

        useMobile().startWatch({
            value: fontClass,
            web: `${props.textFont}-web`,
            mobile: `${props.textFont}-mobile`
        });

        return {
            fontClass
        };
    }
});
</script>