import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseLocationsList from "@dative-gpi/foundation-core-components/components/lists/locations/FSBaseLocationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseLocationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseLocationsList',
  component: FSBaseLocationsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseLocationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseLocationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'locations1'
  },
};
