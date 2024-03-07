import type { Meta, StoryObj } from '@storybook/vue3';

import FSLoginPage from "@dative-gpi/foundation-shared-components/pages/FSLoginPage.vue";

const meta = {
    title: 'Foundation/Shared/Pages/LoginPage',
    component: FSLoginPage,
    tags: ['autodocs'],
} satisfies Meta<typeof FSLoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

