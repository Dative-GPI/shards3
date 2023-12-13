<template>
    <v-window
        class="fs-window"
        :modelValue="$props.tab"
        v-bind="$attrs"
    >
        <v-window-item v-for="(component, index) in $slots.default()" :key="index">
            <component :is="component" />
        </v-window-item>
    </v-window>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FSWindow",
    props: {
        tab: {
            type: Number,
            required: false,
            default: 0
        }
    }
});
</script>