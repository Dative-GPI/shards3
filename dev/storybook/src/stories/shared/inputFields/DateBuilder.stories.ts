import type { Meta, StoryObj } from '@storybook/vue3';
import FSDateBuilder from "@dative-gpi/foundation-shared-components/components/fields/FSDateBuilder.vue";
import { DateSetting, StructureLevel } from "@dative-gpi/foundation-shared-components/models";

const meta = {
  title: 'Foundation/Shared/Input fields/DateBuilder',
  component: FSDateBuilder,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDateBuilder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      start: "now - 30d",
      end: "now",
      structurelev: StructureLevel.AlertWidget,
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDateBuilder },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDateBuilder :startDate="args.start" :clearable="true" :hideHeader="false" :editable="true" :endDate="args.end" :structureLevel="args.structurelev"
        @update:startDate="console.log($event)"
        @update:endDate="console.log($event)" />
      </div>
    </div>`
  })
}