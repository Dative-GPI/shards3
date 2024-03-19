<template>
    <FSRow>
        <FSCol align="center-center"
            :style="{
                backgroundColor: colors[(i - 1) * 2][1],
                color: colors[(i - 1) * 2 + 1][1],
                height: '100px',
            }"
            v-for="i in colors.length / 2">
            <div style="font-weight: bold;">
                {{ colors[(i - 1) * 2][0] }}
            </div>
        </FSCol>
    </FSRow>
    <FSRow>
        <FSCol align=""
            v-for="i in colors.length / 2">
            <div>
                Background : {{ describeColor(colors[(i - 1) * 2][1]) }}
            </div>
            <div>
                Text : {{ describeColor(colors[(i - 1) * 2 + 1][1]) }}
            </div>
        </FSCol>
    </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import Color from "color";

import { useColors } from '@dative-gpi/foundation-shared-components/composables';

export default defineComponent({
    name: 'Color2',
    components: {
    },
    props: {
        color: {
            type: String,
            required: false,
            default: 'primary'
        },
    },
    setup(props) {
        const { getColors } = useColors();

        const colors = computed(() => Object.entries(getColors(props.color)));

        const describeColor = (color: string) => {
            const c = new Color(color);
            return {
                h: c.hue().toFixed(2),
                s: c.saturationv().toFixed(2),
                b: c.value().toFixed(2),
                d: c.isDark(),
            }
        }

        return {
            describeColor,
            colors,
        }
    }
})

</script>