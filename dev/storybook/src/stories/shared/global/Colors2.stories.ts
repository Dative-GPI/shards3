import type { Meta, StoryObj } from '@storybook/vue3';

import Colors2 from './Colors2.vue';

const meta = {
  title: 'Foundation/Shared/Global/Colors2',
  component: Colors2,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof Colors2>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {

};
