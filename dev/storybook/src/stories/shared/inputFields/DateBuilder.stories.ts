import type { Meta, StoryObj } from '@storybook/vue3';
import FSDateBuilder from "@dative-gpi/foundation-shared-components/components/fields/FSDateBuilder.vue";

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
      start: "alertstart",
      end: "alertend"
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
        <FSDateBuilder :startDate="args.start" :clearable="true" :hideHeader="false" :editable="true" :endDate="args.end" 
        variant="before-after"
        :lastPeriod="true"
        @update:startDate="console.log($event)"
        @update:endDate="console.log($event)" />
      </div>
    </div>`
  })
}