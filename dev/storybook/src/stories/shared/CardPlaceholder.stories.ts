import type { Meta, StoryObj } from '@storybook/vue3';

import FSCardPlaceholder from "@dative-gpi/foundation-shared-components/components/FSCardPlaceholder.vue";

const meta = {
  title: 'Foundation/Shared/CardPlaceholder',
  component: FSCardPlaceholder,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSCardPlaceholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSCardPlaceholder },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <FSCardPlaceholder
            icon="mdi-plus-circle-outline"
            label="Click here to start"
        />
    </div>`
  })
}