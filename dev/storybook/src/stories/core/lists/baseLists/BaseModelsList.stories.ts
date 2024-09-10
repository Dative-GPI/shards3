import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseModelsList from "@dative-gpi/foundation-core-components/components/lists/models/FSBaseModelsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseModelsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseModelsList',
  component: FSBaseModelsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['models1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseModelsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseModelsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'models1',
    modelValue: [],
  },
};
