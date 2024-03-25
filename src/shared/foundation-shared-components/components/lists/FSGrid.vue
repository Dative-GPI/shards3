<template>
    <div class="fs-grid-align">
        <FSRow v-for="gridItem in  gridItems"
            :width="gridWith">
            <FSCol :gap="16">
                <FSText font="text-h3">
                    {{ gridItem.categoryLabel }}
                </FSText>
                <FSCol :gap="0">
                    <FSRow v-for="item  in  gridItem.items"
                        class="fs-grid-item"
                        height="hug"
                        align="center-center">
                        <FSCol :gap="2"
                            class="pa-2">
                            <FSText :font="item.valueLeft ? 'text-overline' : 'text-body'">
                                {{ item.label }}
                            </FSText>
                            <FSRow>
                                <slot :name="'item-value-left.' + gridItem.categoryCode + '-' + item.code"
                                    v-bind="{ item }"
                                    v-if="item.valueLeft">
                                    <FSText font="text-body">{{ item.value }}</FSText>
                                </slot>
                            </FSRow>
                        </FSCol>
                        <v-spacer />
                        <FSRow align="center-right"
                            class="pa-2">
                            <slot :name="'item-value-right.' + gridItem.categoryCode + '-' + item.code"
                                v-bind="{ item }"
                                v-if="item.valueRight">
                                <FSText font="text-body">
                                    {{ item.value }}
                                </FSText>
                            </slot>
                        </FSRow>
                    </FSRow>
                </FSCol>
            </FSCol>
        </FSRow>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, Prop, PropType, ref } from "vue";

import { useSlots } from "@dative-gpi/foundation-shared-components/composables";
import FSDivider from "@dative-gpi/foundation-shared-components/components/FSDivider.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import { Item, GridItem } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
    name: "FSGrid",
    components: {
        FSDivider,
        FSText
    },
    props: {
        gridItems: {
            type: Array as PropType<GridItem[]>,
            default: [],
            required: false
        },
        cols: {
            type: Number as PropType<1 | 2>,
            required: false,
            default: "1"
        }
    },
    setup(props) {
        const { isExtraSmall } = useBreakpoints();

        const gridWith = computed(() => {
            console.log("cols", isExtraSmall.value);
            return props.cols == 2 && !isExtraSmall.value ? "48%" : "100%";
        });

        return {
            gridWith
        }
    }
})
</script>