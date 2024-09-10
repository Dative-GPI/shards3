import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseScenarioOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/scenarioOrganisations/FSBaseScenarioOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseScenarioOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationsList',
  component: FSBaseScenarioOrganisationsList,
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
    components: { FSBaseScenarioOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseScenarioOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'scenarioOrganisations1',
    modelValue: [],
  },
};
