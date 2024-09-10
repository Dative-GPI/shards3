import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseServiceAccountOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/serviceAccountOrganisations/FSBaseServiceAccountOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseServiceAccountOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseServiceAccountOrganisationsList',
  component: FSBaseServiceAccountOrganisationsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['serviceAccountOrganisations1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseServiceAccountOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseServiceAccountOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'serviceAccountOrganisations1',
    modelValue: [],
  },
};
