<template>
    <v-text-field
        class="fs-text-field"
        variant="outlined"
        hide-details
        v-bind="$attrs"
    >
    </v-text-field>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
    name: "FSTextField",
    components: {
        FSSpan,
        FSRow,
        FSCol
    },
    props: {
        label: {
            type: String,
            required: false,
            default: null
        },
        description: {
            type: String,
            required: false,
            default: null
        },
        value: {
            type: String,
            required: false,
            default: null
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: null
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    setup(props, { emit }) {
        return {
        };
    }
});
</script>