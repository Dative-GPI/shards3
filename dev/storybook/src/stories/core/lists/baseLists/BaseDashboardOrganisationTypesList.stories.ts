import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDashboardOrganisationTypesList from "@dative-gpi/foundation-core-components/components/lists/dashboardOrganisationTypes/FSBaseDashboardOrganisationTypesList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseDashboardOrganisationTypesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDashboardOrganisationTypesList',
  component: FSBaseDashboardOrganisationTypesList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDashboardOrganisationTypesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDashboardOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'dashboardOrganisationTypes1'
  },
};
