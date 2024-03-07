import type { Meta, StoryObj } from '@storybook/vue3';

import FSLanguageSetter from "@dative-gpi/foundation-shared-components/pages/FSLanguageSetter.vue";

const meta = {
  title: 'Foundation/Shared/Selects/LanguageSetter',
  component: FSLanguageSetter,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSLanguageSetter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSLanguageSetter },
    template: `<FSLanguageSetter />`
  })
}