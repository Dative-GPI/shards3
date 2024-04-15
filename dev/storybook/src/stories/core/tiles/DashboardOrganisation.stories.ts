import type { Meta, StoryObj } from '@storybook/vue3';

import FSDashboardOrganisationTile from "@dative-gpi/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue";

const meta = {
  title: 'Foundation/Core/Tiles/DashboardOrganisation',
  component: FSDashboardOrganisationTile,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDashboardOrganisationTile>;

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
    components: { FSDashboardOrganisationTile },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`
  })
}