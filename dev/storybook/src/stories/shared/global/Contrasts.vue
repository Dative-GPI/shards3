<template>
  <FSRow>
    <FSCol
      align="center-center"
      :style="{
        backgroundColor: colors.light,
        color: colors.lightContrast,
        height: '100px'
      }"
    >
      <div style="font-weight: bold;">
        {{ colors.light }}
      </div>
      <div style="font-weight: bold;">
        {{ colors.lightContrast }}
      </div>
    </FSCol>
    <FSCol
        align="center-center"
        :style="{
          backgroundColor: colors.soft,
          color: colors.softContrast,
          height: '100px'
        }"
    >
      <div style="font-weight: bold;">
        {{ colors.soft }}
      </div>
      <div style="font-weight: bold;">
        {{ colors.softContrast }}
      </div>
    </FSCol>
    <FSCol
        align="center-center"
        :style="{
          backgroundColor: colors.base,
          color: colors.baseContrast,
          height: '100px'
        }"
    >
      <div style="font-weight: bold;">
        {{ colors.base }}
      </div>
      <div style="font-weight: bold;">
        {{ colors.baseContrast }}
      </div>
    </FSCol>
    <FSCol
        align="center-center"
        :style="{
          backgroundColor: colors.dark,
          color: colors.darkContrast,
          height: '100px'
        }"
    >
      <div style="font-weight: bold;">
        {{ colors.dark }}
      </div>
      <div style="font-weight: bold;">
        {{ colors.darkContrast }}
      </div>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import Color from "color";

import { useColors } from '@dative-gpi/foundation-shared-components/composables';

export default defineComponent({
    name: 'Contrasts',
    components: {
    },
    props: {
        color: {
            type: String,
            required: false,
            default: '#F0FFF0'
        },
    },
    setup(props) {
        const { getColors } = useColors();

        const colors = computed(() => getColors(props.color));

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