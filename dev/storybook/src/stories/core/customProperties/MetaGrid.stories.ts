import type { Meta, StoryObj } from '@storybook/vue3';

import FSMetaGrid from "@dative-gpi/foundation-core-components/components/customProperties/FSMetaGrid.vue";
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import { FilterType, PropertyDataType } from '@dative-gpi/foundation-shared-domain/enums';

const meta = {
  title: 'Foundation/Core/CustomProperties/MetaGrid',
  component: FSMetaGrid,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSMetaGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      items: [{
        label: "Permission 1",
        code: "permission1",
        value: "1",
        hideDefault: false
      }, {
        label: "Permission 2",
        code: "permission2",
        value: "2",
        hideDefault: false
      }, {
        label: "Permission 3",
        code: "permission3",
        value: "3",
        hideDefault: false
      }, {
        label: "Permission 4",
        code: "permission4",
        value: "4",
        hideDefault: false
      }, {
        label: "Permission 5",
        code: "permission5",
        value: "5",
        hideDefault: true
      },{
        label: "CustomString",
        code: "meta.property1",
        value: "",
        hideDefault: false
      }, {
        label: "CustomIcon",
        code: "meta.property2",
        value: "",
        hideDefault: true
      }],
      customProperties: [{
        id: "3",
        code: "property1",
        label: "CustomString",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.String,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: true,
        colorMap: [{
          priority: 2,
          filterType: FilterType.Equal,
          filterValues: ["Bingo"],
          color: "#00FF00"
        }, {
          priority: 1,
          filterType: FilterType.None,
          filterValues: [],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }, {
        id: "2",
        code: "property2",
        label: "CustomIcon",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Icon,
        addInInfos: true,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: true,
        colorMap: [{
          priority: 2,
          filterType: FilterType.Equal,
          filterValues: ["Bingo"],
          color: "#00FF00"
        }, {
          priority: 1,
          filterType: FilterType.None,
          filterValues: [],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }],
      meta: {
        property1: "meta1",
        property2: "mdi-ab-testing"
      }
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSMetaGrid, FSIcon },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSMetaGrid
          :items="args.items"
          :meta="args.meta"
          :customProperties="args.customProperties"
        >
          <template #header="{ item }">
            {{ item.label }}
          </template>
          <template #item-end="{ item }">
            {{ item.value }}
          </template>
          <template #header.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
          <template #item-end.permission1="{ item }">
            <FSIcon>
              mdi-check-circle
            </FSIcon>
          </template>
        </FSMetaGrid>
      </div>
    </div>`
  })
}