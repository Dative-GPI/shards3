import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDataCategoriesList from "@dative-gpi/foundation-core-components/components/lists/dataCategories/FSBaseDataCategoriesList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseDataCategoriesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDataCategoriesList',
  component: FSBaseDataCategoriesList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['dataCategories1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDataCategoriesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDataCategoriesList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'dataCategories1',
  },
};
