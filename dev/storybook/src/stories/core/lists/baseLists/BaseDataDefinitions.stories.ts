import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDataDefinitionsList from "@dative-gpi/foundation-core-components/components/lists/dataDefinitions/FSBaseDataDefinitionsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseDataDefinitionsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDataDefinitionsList',
  component: FSBaseDataDefinitionsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['dataDefinitions1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDataDefinitionsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'dataDefinitions1',
  },
};
