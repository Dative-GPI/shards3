import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseScenarioOrganisationTypesList from "@dative-gpi/foundation-core-components/components/lists/scenarioOrganisationTypes/FSBaseScenarioOrganisationTypesList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseScenarioOrganisationTypesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseScenarioOrganisationTypesList',
  component: FSBaseScenarioOrganisationTypesList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['scenarioOrganisationTypes1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseScenarioOrganisationTypesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseScenarioOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'scenarioOrganisationTypes1',
    modelValue: [],
  },
};
