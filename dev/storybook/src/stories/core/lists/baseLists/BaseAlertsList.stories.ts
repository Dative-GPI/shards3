import type { Meta, StoryObj } from '@storybook/vue3';

import FSBaseAlertsList from "@dative-gpi/foundation-core-components/components/lists/alerts/FSBaseAlertsList.vue";
import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';

const meta: Meta<typeof FSBaseAlertsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseAlertsList',
  component: FSBaseAlertsList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    tableCode: {
      control: 'select',
      options: ['alerts1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseAlertsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseAlertsList
        :tableCode="args.tableCode"
        :notAcknowledged="args.notAcknowledged"
        :hidePending="args.hidePending"
        :allowAcknowledge="args.allowAcknowledge"
        v-model="args.modelValue"
      />
    `,
  }),
  args: {
    tableCode: 'alerts1',
    notAcknowledged: false,
    hidePending: false,
    modelValue: [],
    allowAcknowledge: true,
  },
};
