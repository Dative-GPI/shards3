import type { Meta, StoryObj } from '@storybook/vue3';

import RadioGroup from "@dative-gpi/foundation-shared-components/components/FSRadioGroup.vue";

const meta = {
  title: 'Foundation/Shared/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Labels: Story = {
  args: {
    args: {
        value: 0,
        values: [
            { value: 0, label: "Option 1" },
            { value: 1, label: "Option 2" },
            { value: 2, label: "Option 3" }
        ],
        color: "primary"
    }
  },
  render: (args, { argTypes }) => ({
    components: { RadioGroup },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
        <RadioGroup v-bind="args" v-model:value="args.value" />
    `,
  })
};

export const Descriptions: Story = {
  args: {
    args: {
        value: 0,
        values: [
            { value: 0, label: "Option 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { value: 1, label: "Option 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  },
            { value: 2, label: "Option 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  }
        ],
        color: "primary"
    }
  },
  render: (args, { argTypes }) => ({
    components: { RadioGroup },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
        <RadioGroup v-bind="args" v-model:value="args.value" />
    `,
  })
};