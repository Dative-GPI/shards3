<template>
    <div>
        <FSButton
            label="ThisIsACoreButton"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

export default defineComponent({
    name: "FSCoreButton",
    components: {
        FSButton
    },
    props: {
    },
    setup(props) {
        return {
        };
    }
});
</script>

