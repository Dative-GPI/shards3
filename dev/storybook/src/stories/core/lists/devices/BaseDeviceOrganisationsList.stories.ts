import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseDeviceOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/devices/FSBaseDeviceOrganisationsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

import { TABLES } from '@dative-gpi/foundation-core-components/utils';

const meta: Meta<typeof FSBaseDeviceOrganisationsList> = {
  title: 'Foundation/Core/Lists/Devices/BaseDeviceOrganisationsList',
  component: FSBaseDeviceOrganisationsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
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
    tableCode: TABLES.DEVICES_SELECT,
    connectedOnly: false,
    singleSelect: false,
  },
};
