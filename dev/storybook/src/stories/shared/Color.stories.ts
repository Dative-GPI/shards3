import type { Meta, StoryObj } from '@storybook/vue3';

import { VDivider } from 'vuetify/lib/components/index.mjs';

import FSColor from "@dative-gpi/foundation-shared-components/components/FSColor.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/Shared/Color',
  component: FSColor,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSColor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { VDivider, FSColor, FSSpan, FSRow },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;">
            <FSColor color="primary">
                <FSRow padding="8px 16px">
                    <FSSpan> Primary color </FSSpan>
                </FSRow>
            </FSColor>
        </div>
    </div>`
  })
}