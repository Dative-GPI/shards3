import type { Meta, StoryObj } from "@storybook/vue3";

import FSBaseDevicesExplorer from "@dative-gpi/foundation-core-components/components/explorers/FSBaseDevicesExplorer.vue";
import FSDataTable from "@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue";

const meta: Meta<typeof FSBaseDevicesExplorer> = {
  title: "Foundation/Core/Explorers/BaseDevicesExplorer",
  component: FSBaseDevicesExplorer,
  subcomponents: { FSDataTable },
  tags: ["autodocs"],
  argTypes: {
    tableCode: {
      control: "select",
      options: ["devicesExplorer1", "devicesExplorer2"],
    },
    deviceExplorerElementFilters: {
      control: "object",
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    tableCode: "devicesExplorer1",
    deviceExplorerElementFilters: {
      root: true
    }
  },
  render: (args) => ({
    components: { FSBaseDevicesExplorer },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDevicesExplorer
        :tableCode="args.tableCode"
        :deviceExplorerElementFilters="args.deviceExplorerElementFilters"
        v-model:modelValue="args.modelValue"
      />
    `,
  }),
};
