<template>
    <FSRow
        class="fs-buttons-row"
        height="hug"
        v-bind="$attrs"
    >
        <slot />
    </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSButtonsRow",
    components: {
        FSRow
    },
    props: {

    },
    setup(props) {
        return {

        };
    }
});
</script>

<style lang="scss" scoped>

</style>