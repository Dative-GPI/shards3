import type { Meta, StoryObj } from '@storybook/vue3';

import Contrasts from './Contrasts.vue';
import { useColors } from '@dative-gpi/foundation-shared-components/composables';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';

const meta = {
  title: 'Foundation/Shared/Global/Contrasts',
  component: Contrasts,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Contrasts>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
 export const BaseColors: Story = {
  render: () => ({
    components: { FSRow, FSCol, Contrasts },
    setup() {
      const allColors = useColors().getBasePaletteColors();
      return { allColors };
    },
    template: `
      <div>
        Colors : 
        <FSRow v-for="colorRow in allColors" :wrap="false">
          <FSCol v-for="color in colorRow">
            <Contrasts :color="color" />
          </FSCol>
        </FSRow>
      </div>
    `
  })
};
