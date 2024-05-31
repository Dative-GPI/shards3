import type { Meta, StoryObj } from '@storybook/vue3';
import { GROUPS } from '@/mocks';

import FSDataTable from "@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue";
import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";
import FSSlideGroup from '@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue';
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";

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
      items: [ ...GROUPS, {
        id: "3",
        organisationId: "1",
        imageId: "1",
        icon: "mdi-numeric-1-circle",
        code: undefined,
        label: "With undefined filtrable/sortable",
        tags: ['tag 1', 'tag 2', 'tag 3', 'tag 4', 'tag 5', 'tag 6', 'tag 7', 'tag 8', 'tag 9', 'tag 10'],
        path: [],
        groupsIds: ["10", "11"],
        deviceOrganisationsIds: ["10", "11", "12"],
        modelsIds: [],
        recursiveGroupsIds: ["10", "11"],
        recursiveDeviceOrganisationsIds: ["10", "11", "12"],
        recursiveModelsIds: []
      }],
      value: [],
      itemTo: (item: any) => ({ name: 'group', params: { groupId: item.id } }),
      clickRow: () => { console.log("clicked"); }
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDataTable, FSGroupTileUI, FSSlideGroup, FSTagGroup },
    props: Object.keys(argTypes),
    setup() {
      const getColor = (row: any) => {
        if (row) {
          if (row.code === "number1") {
            return "primary";
          }
          else {
            return "success";
          }
        }
      }
      return { ...args, getColor };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          rowGap="4px"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
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