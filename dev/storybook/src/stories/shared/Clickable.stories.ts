import type { Meta, StoryObj } from '@storybook/vue3';

import FSClickable from "@dative-gpi/foundation-shared-components/components/FSClickable.vue";

const meta = {
  title: 'Foundation/Shared/Clickable',
  component: FSClickable,
  tags: ['autodocs'],
} satisfies Meta<typeof FSClickable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: (args) => ({
    components: { FSClickable },
    setup() {
      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSClickable v-bind="args">
            <FSText font="text-button">Obiwan kenobi</FSText>
            <FSText> - Hello there!</FSText>
        </FSClickable>
    </div>`
  })
}