import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseRoleOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/roleOrganisations/FSBaseRoleOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseRoleOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseRoleOrganisationsList',
  component: FSBaseRoleOrganisationsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['roleOrganisations1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseRoleOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseRoleOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'roleOrganisations1',
    modelValue: [],
  },
};
