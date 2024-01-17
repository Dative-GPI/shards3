<template>
    <v-breadcrumbs v-bind="$attrs" :style="style" :items="$props.items">
        <template #title="{ item }">
            <FSSpan :class="classes(item)">
                {{ item.title }}
            </FSSpan>
        </template>
        <template #divider>
            <FSIcon class="fs-breadcrumbs-divider" size="m">
                mdi-chevron-right
            </FSIcon>
        </template>
    </v-breadcrumbs>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";

export interface FSBreadcrumbItem {
    href: string | undefined,
    replace: boolean | undefined,
    to: string | undefined,
    exact: boolean | undefined,
    title: string,
    disabled: boolean
}

export default defineComponent({
    name: "FSBreadcrumbs",
    components: {
        FSSpan,
        FSIcon
    },
    props: {
        items: {
            type: Array as PropType<Array<FSBreadcrumbItem>>,
            required: true,
        }
    },
    setup() {
        const darks = useColors().getColors(ColorBase.Dark);

        const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
            "--fs-breadcrumbs-color": darks.dark,
            "--fs-breadcrumbs-active-color": darks.base,
            "--fs-breadcrumbs-disabled-color": darks.light
        });

        const classes = (item: FSBreadcrumbItem): string[] => {
            const classNames = ["fs-breadcrumbs-label"];
            if (item.disabled) {
                classNames.push("fs-breadcrumbs-label--disabled");
            }
            return classNames;
        };

        return {
            style,
            classes
        };
    }
})
</script>