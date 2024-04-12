import type { Meta, StoryObj } from '@storybook/vue3';

import FSDashboardOrganisationTypeTile from "@dative-gpi/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue";

const meta = {
  title: 'Foundation/Core/Tiles/DashboardOrganisationType',
  component: FSDashboardOrganisationTypeTile,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDashboardOrganisationTypeTile>;

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
    components: { FSDashboardOrganisationTypeTile },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`
  })
}