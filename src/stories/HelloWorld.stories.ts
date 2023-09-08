import type { Meta, StoryObj } from '@storybook/vue3';

import HelloWorld from '../components/HelloWorld.vue';

const meta = {
    title: 'Foundation-UI/HelloWorld',
    component: HelloWorld,
    tags: ['autodocs']
} satisfies Meta<typeof HelloWorld>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
