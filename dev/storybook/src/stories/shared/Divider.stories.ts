import type { Meta, StoryObj } from '@storybook/vue3';

import FSDivider from "@dative-gpi/foundation-shared-components/components/FSDivider.vue";

const meta = {
    title: 'Foundation/Shared/Divider',
    component: FSDivider,
    tags: ['autodocs'],
} satisfies Meta<typeof FSDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const WithText: Story = {
    args: {
        label: 'With Text'
    }
};