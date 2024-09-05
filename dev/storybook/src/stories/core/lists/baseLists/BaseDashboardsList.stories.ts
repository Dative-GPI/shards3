import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDashboardsList from "@dative-gpi/foundation-core-components/components/lists/dashboards/FSBaseDashboardsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseDashboardsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDashboardsList',
  component: FSBaseDashboardsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDashboardsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDashboardsList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'dashboards1'
  },
};
