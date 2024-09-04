import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseGroupsList from "@dative-gpi/foundation-core-components/components/lists/groups/FSBaseGroupsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseGroupsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseGroupsList',
  component: FSBaseGroupsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseGroupsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseGroupsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'groups1'
  },
};
