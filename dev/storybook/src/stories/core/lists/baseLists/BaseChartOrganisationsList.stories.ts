import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseChartOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseChartOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList',
  component: FSBaseChartOrganisationsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['chartOrganisations1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseChartOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'chartOrganisations1',
  },
};
