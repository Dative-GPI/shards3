import type { Meta, StoryObj } from '@storybook/vue3';

import { VDivider } from 'vuetify/lib/components/index.mjs';

import FSEntityView from "@dative-gpi/foundation-shared-components/components/views/FSEntityView.vue";

const meta = {
  title: 'Foundation/Shared/views/EntityView',
  component: FSEntityView,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSEntityView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { VDivider, FSEntityView },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;">
            <FSEntityView
                title="title"
                subtitle="subtitle"
                imageId="1"
            />
        </div>
    </div>`
  })
}