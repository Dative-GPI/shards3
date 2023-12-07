<template>
    <v-slide-group
        class="fs-slide-group"
        show-arrows
    >
        <FSRow>
            <v-slide-group-item v-for="(component, index) in $slots.default()" :key="index">
                <component :is="component" />
            </v-slide-group-item>
        </FSRow>
    </v-slide-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSSlideGroup",
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
@import "@dative-gpi/foundation-shared-components/styles/main.scss";
@import "@dative-gpi/foundation-shared-components/styles/main.scss";

.fs-slide-group {
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