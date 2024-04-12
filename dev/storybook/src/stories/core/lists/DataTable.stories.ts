import type { Meta, StoryObj } from '@storybook/vue3';
import { GROUPS } from '@/mocks';

import FSDataTable from "@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue";
import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";

const meta = {
  title: 'Foundation/Core/Lists/DataTable',
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
      tableCode: "groups1",
      items: GROUPS,
      value: [],
      itemTo: (item: any) => ({ name: 'group', params: { groupId: item.id } }),
      clickRow: () => { console.log("clicked"); }
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDataTable, FSGroupTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`
  })
}