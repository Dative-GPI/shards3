import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseChartsList from "@dative-gpi/foundation-core-components/components/lists/charts/FSBaseChartsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseChartsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseChartsList',
  component: FSBaseChartsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['charts1'],
    },
    args: {
      selecteds: []
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseChartsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `,
  }),
  args: {
    tableCode: 'charts1',
  },
};
