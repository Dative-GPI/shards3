import type { Meta, StoryObj } from '@storybook/vue3';

import FSSelectTimeZone from "@dative-gpi/foundation-shared-components/components/selects/FSSelectTimeZone.vue";

const meta = {
  title: 'Foundation/Shared/Selectors/SelectTimeZone',
  component: FSSelectTimeZone,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSSelectTimeZone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
};