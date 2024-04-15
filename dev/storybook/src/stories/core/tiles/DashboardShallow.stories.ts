import type { Meta, StoryObj } from '@storybook/vue3';

import FSDashboardShallowTile from "@dative-gpi/foundation-core-components/components/tiles/FSDashboardShallowTile.vue";

const meta = {
  title: 'Foundation/Core/Tiles/DashboardShallow',
  component: FSDashboardShallowTile,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDashboardShallowTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      values: [
          "1",
          "2",
          "3"
      ],
      selected: [
        false,
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDashboardShallowTile },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`
  })
}