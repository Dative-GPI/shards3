<template>
    <v-breadcrumbs v-bind="$attrs" :style="style" :items="$props.items">
        <template #title="{ item }">
            <FSSpan :class="getClass(item)">
                {{ item.title }}
            </FSSpan>
        </template>
    </v-breadcrumbs>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export interface FSBreadcrumbItem {
    href: string | undefined
    replace: boolean | undefined
    to: string | undefined
    exact: boolean | undefined,
    title: string,
    disabled: boolean
}

export default defineComponent({
    name: "FSBreadcrumbs",
    components: {
        FSSpan,
        FSIcon,
        FSRow
    },
    props: {
        items: {
            type: Array as PropType<Array<FSBreadcrumbItem>>,
            required: true,
        }
    },
    setup() {
        const dark = useColors().getDark();

        const style = {
            "--fs-breadcrumbs-light-text": dark.light,
            "--fs-breadcrumbs-base-text" : dark.base,
            "--fs-breadcrumbs-dark-text" : dark.dark
        };

        const getClass = (item: FSBreadcrumbItem): string => {
            if (item.disabled) {
                return "fs-breadcrumbs-label--disabled";
            }
            return "fs-breadcrumbs-label";
        };

        return {
            style,
            getClass
        };
    }
})
</script>