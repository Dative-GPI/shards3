import type { Meta, StoryObj } from '@storybook/vue3';

import FSGroupTile from "@dative-gpi/foundation-core-components/components/tiles/FSGroupTile.vue";

const meta = {
  title: 'Foundation/Core/Tiles/Group',
  component: FSGroupTile,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSGroupTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      values: [
          "1",
          "2"
      ],
      selected: [
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSGroupTile },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`
  })
}