import type { Meta, StoryObj } from '@storybook/vue3';

import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSStatus from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSStatus.vue";
import type { FSDeviceStatusGroup, FSModelStatus } from '@dative-gpi/foundation-shared-components/models';

const meta = {
  title: 'Foundation/Shared/Status',
  component: FSStatus,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof FSStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

const modelStatus: FSModelStatus = {
  id: 'testId',
  label: 'testLabel',
  index: 1,
  showDefault: false
}

const statusGroup: FSDeviceStatusGroup = {
  label: 'testLabelValue',
  value: '70',
  unit: '°C',
  icon: 'mdi-thermometer',
  color: '#E01515',
  sourceTimestamp: 1726547886000,
  enqueuedTimestamp: 1726547952000,
  processedTimestamp: 1726547958156,
}

export const Default: Story = {
  args: {
    modelStatus: modelStatus,
    statusGroup: statusGroup,
    size: '32',
    padding: '8px',
  },
  render: (args, { argTypes }) => ({
    components: { FSStatus, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSStatus 
        :modelStatus="args.modelStatus" 
        :statusGroup="args.statusGroup" 
        :size="args.size",
        :padding="args.padding"
      />`
  })
}
