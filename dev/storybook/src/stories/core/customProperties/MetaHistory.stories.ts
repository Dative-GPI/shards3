import type { Meta, StoryObj } from '@storybook/vue3';

import { FilterType, PropertyDataType } from '@dative-gpi/foundation-shared-domain/enums';
import FSMetaHistory from "@dative-gpi/foundation-core-components/components/customProperties/FSMetaHistory.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Core/CustomProperties/MetaHistory',
  component: FSMetaHistory,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSMetaHistory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      customProperty: {
        id: "1",
        code: "code",
        label: "Number",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Number,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: FilterType.MoreOrEqual,
          filterValues: [5],
          color: "#0000FF"
        }, {
          priority: 2,
          filterType: FilterType.MoreOrEqual,
          filterValues: [50],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSMetaHistory, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>`
  })
};