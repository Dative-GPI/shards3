import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseScenariosList from "@dative-gpi/foundation-core-components/components/lists/scenarios/FSBaseScenariosList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseScenariosList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseScenariosList',
  component: FSBaseScenariosList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['scenarioOrganisations1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseScenariosList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseScenariosList
        v-model:modelValue="args.modelValue"
        :showAssociation="true"
        :tableCode="args.tableCode"
        :itemTo="null"
      />
    `,
  }),
  args: {
    tableCode: 'scenarioOrganisations1',
    modelValue: [],
  },
};
