import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseRoleOrganisationTypesList from "@dative-gpi/foundation-core-components/components/lists/roleOrganisationTypes/FSBaseRoleOrganisationTypesList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseRoleOrganisationTypesList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseRoleOrganisationTypesList',
  component: FSBaseRoleOrganisationTypesList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['roleOrganisationTypes1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseRoleOrganisationTypesList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseRoleOrganisationTypesList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
      />
    `,
  }),
  args: {
    tableCode: 'roleOrganisationTypes1',
    modelValue: [],
  },
};
