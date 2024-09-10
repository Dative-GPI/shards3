import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseChartOrganisationTypesList from "@dative-gpi/foundation-core-components/components/lists/chartOrganisationTypes/FSBaseChartOrganisationTypesList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseChartOrganisationTypesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseChartOrganisationTypesList',
  component: FSBaseChartOrganisationTypesList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['chartOrganisationTypes1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseChartOrganisationTypesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'chartOrganisationTypes1',
  },
};
