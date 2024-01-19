import type { Meta, StoryObj } from '@storybook/vue3';

import FSDataTable from "@dative-gpi/foundation-shared-components/components/FSDataTable.vue";

const meta = {
  title: 'Foundation/Shared/DataTable',
  component: FSDataTable,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDataTable },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px;">
        <FSDataTable>

        </FSDataTable>
    </div>`
  })
}