import type { Meta, StoryObj } from '@storybook/vue3';

import Contrasts from './Contrasts.vue';

const meta = {
  title: 'Foundation/Shared/Global/Contrasts',
  component: Contrasts,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Contrasts>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {

};
