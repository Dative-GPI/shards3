import type { Meta, StoryObj } from '@storybook/vue3';

import Breadcrumbs from "@dative-gpi/foundation-shared-components/components/FSBreadcrumbs.vue";

const meta = {
  title: 'Foundation/Shared/Breadcrumbs',
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
        items1: [
            { title: "First (clickable)", disabled: false, to: "/first" },
            { title: "Second (disabled)", disabled: true },
            { title: "Third (clickable)", disabled: false, to: "/third" },
            { title: "Last (active)", disabled: true }
        ],
        items2: [
            { title: "First",  disabled: false, to: "/first" },
            { title: "Second", disabled: true },
            { title: "Last with a really long name", disabled: true }
        ],
        items3: [
            { title: "First", disabled: false, to: "/first" },
            { title: "Second with a really long name", disabled: true },
            { title: "Last", disabled: true }
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