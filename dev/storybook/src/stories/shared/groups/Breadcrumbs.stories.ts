import type { Meta, StoryObj } from '@storybook/vue3';

import Breadcrumbs from "@dative-gpi/foundation-shared-components/components/FSBreadcrumbs.vue";

const meta = {
  title: 'Foundation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    args: {
        items: [
            { title: "First", disabled: false, active: false },
            { title: "Second", disabled: false, active: false },
            { title: "Third", disabled: true, active: true }
        ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { Breadcrumbs },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
        <Breadcrumbs v-bind="args" />
    `,
  })
};