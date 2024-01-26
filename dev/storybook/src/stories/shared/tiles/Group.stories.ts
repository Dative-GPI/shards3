import type { Meta, StoryObj } from '@storybook/vue3';

import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";

const meta = {
  title: 'Foundation/Shared/Tiles/Group',
  component: FSGroupTileUI,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSGroupTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
      args: {
        values: [{
          id: "1",
          label: "Can't hold us",
          code: "Macklemore & Ryan Lewis",
          imageId: "1"
        }],
        selected: [
          false
        ]
      }
    },
    render: (args, { argTypes }) => ({
    components: { FSGroupTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTileUI
        v-for="(group, index) in args.values"
        :key="index"
        :imageId="group.imageId"
        :label="group.label"
        :code="group.code"
        v-model="args.selected[index]"
      />
    </div>`
  })
}