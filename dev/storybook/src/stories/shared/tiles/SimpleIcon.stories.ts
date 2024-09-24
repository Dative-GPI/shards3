import type { Meta, StoryObj } from '@storybook/vue3';

import FSSimpleTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSimpleTileUI.vue";
import { icon } from 'leaflet';

const meta = {
  title: 'Foundation/Shared/Tiles/SimpleIcon',
  component: FSSimpleTileUI,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSSimpleTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
      args: {
        values: [{
          id: "1",
          label: "Tile 1",
          code: "code"
        }, {
          id: "2",
          label: "Simple Icon tile 2",
          icon: "mdi-account",
          singleSelect: true
        }, {
          id: "3",
          label: "Simple Icon tile with color",
          bottomColor: ["#0000FF", "#FFFFFF"]
        }
      ],
        selected: [
          false,
          false,
          false
        ]
      }
    },
    render: (args, { argTypes }) => ({
    components: { FSSimpleTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>`
  })
}

