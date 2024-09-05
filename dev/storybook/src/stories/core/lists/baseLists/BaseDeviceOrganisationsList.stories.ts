import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDeviceOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/deviceOrganisations/FSBaseDeviceOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseDeviceOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList',
  component: FSBaseDeviceOrganisationsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['devices1', 'devices2'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseDeviceOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDeviceOrganisationsList
        v-model:modelValue="args.modelValue"
        :tableCode="args.tableCode"
        :connectedOnly="args.connectedOnly"
        :singleSelect="args.singleSelect"
      />
    `,
  }),
  args: {
    modelValue: [],
    tableCode: 'devices1',
    connectedOnly: false,
    singleSelect: false,
  },
};
