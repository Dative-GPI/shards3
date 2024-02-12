import type { Meta, StoryObj } from '@storybook/vue3';

import FSDataTable from "@dative-gpi/foundation-shared-components/components/lists/FSDataTable.vue";

const meta = {
  title: 'Foundation/Shared/Lists/DataTable',
  component: FSDataTable,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      headers1: [{
        text: "Column 1 - sortable",
        value: "column1",
        index: 0,
        hidden: false,
        width: "100px",
        sortable: true,
        filterable: true
      }, {
        text: "Column 2",
        value: "column2",
        index: 1,
        hidden: false,
        width: "80px"
      }, {
        text: "Column 3",
        value: "column3",
        index: 2,
        hidden: false,
        width: "120px",
        sortable: true,
        filterable: true
      }],
      items1: Array.from(Array(80).keys()).map((i) => ({
        id: i.toString(),
        column1: `Row ${i + 1} - Column 1`,
        column2: `Row ${i + 1} - Column 2`,
        column3: { text: `Row ${i + 1} - Column 3`, value: i + 1  }
      })),
      value1: []
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDataTable },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :showSelect="true"
          :items="args.items1"
          v-model:headers="args.headers1"
          v-model="args.value1"
        >
          <template #item.column3="{ item }">
            {{ item.column3.text }}
          </template>
        </FSDataTable>
      </div>
    </div>`
  })
}