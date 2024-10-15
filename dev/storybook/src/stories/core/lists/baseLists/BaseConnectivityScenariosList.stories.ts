import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseConnectivityScenariosList from "@dative-gpi/foundation-core-components/components/lists/connectivityScenarios/FSBaseConnectivityScenariosList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseConnectivityScenariosList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseConnectivityScenariosList',
  component: FSBaseConnectivityScenariosList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['connectivityScenarios1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseConnectivityScenariosList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseConnectivityScenariosList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
        :itemTo="null"
      />
    `,
  }),
  args: {
    tableCode: 'connectivityScenarios1',
    modelValue: [],
  },
};
