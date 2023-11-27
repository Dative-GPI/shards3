<template>
    <v-window-item
        class="fs-window-item"
        v-bind="$attrs"
    >
        <slot />
    </v-window-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FSWindowItem"
});
</script>