import type { Meta, StoryObj } from '@storybook/vue3';

import FSLink from "@dative-gpi/foundation-shared-components/components/FSLink.vue";

const meta = {
  title: 'Foundation/Shared/Link',
  component: FSLink,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSLink },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink
          :to="{ name: 'Home', query: { search: 'Device' } }"
          label="Using RouteLocation from vue-router"
        />
        <FSLink
          href="https://www.google.fr"
          label="Using Google URL"
        />
      </div>
    `,
  })
};