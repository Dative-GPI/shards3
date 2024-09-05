import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseFoldersList from "@dative-gpi/foundation-core-components/components/lists/folders/FSBaseFoldersList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseFoldersList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseFoldersList',
  component: FSBaseFoldersList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseFoldersList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseFoldersList
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'folders1'
  },
};
