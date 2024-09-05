import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseUserOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/userOrganisations/FSBaseUserOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseUserOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseUserOrganisationsList',
  component: FSBaseUserOrganisationsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['users1', 'users2'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseUserOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'users1'
  },
};

export const Variant1: Story = {
  render: (args) => ({
    components: { FSBaseUserOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseUserOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'users2'
  },
};
