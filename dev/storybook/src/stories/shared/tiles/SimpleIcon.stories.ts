import type { Meta, StoryObj } from '@storybook/vue3';

import FSSimpleIconTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSimpleIconTileUI.vue";

const meta = {
  title: 'Foundation/Shared/Tiles/SimpleIcon',
  component: FSSimpleIconTileUI,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSSimpleIconTileUI>;

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
          label: "Simple Icon tile 2"
        }, {
          id: "3",
          label: "Simple Icon tile with color",
          colors: ["#0000FF", "#FFFFFF"]
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
    components: { FSSimpleIconTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleIconTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        :label="entity.label"
        :code="entity.code"
        :color="entity.colors"
        v-model="args.selected[index]"
      />
    </div>`
  })
}

