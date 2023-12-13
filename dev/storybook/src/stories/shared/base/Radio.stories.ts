import type { Meta, StoryObj } from '@storybook/vue3';

import Radio from "@dative-gpi/foundation-shared-components/components/FSRadio.vue";

const meta = {
  title: 'Foundation/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Radio v-bind="args" v-model:value="args.value" />
</v-container>
`;

export const Solo: Story = {
  args: {
    args: {
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Radio },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}

export const SoloNotEditable: Story = {
  args: {
    args: {
      value: false,
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Radio },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}

export const Label: Story = {
  args: {
    args: {
      label: "Radio label",
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Radio },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}

export const LabelNotEditable: Story = {
  args: {
    args: {
      label: "Radio label",
      value: false,
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Radio },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}

export const Description: Story = {
  args: {
    args: {
      label: "Radio label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Radio },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}

export const DescriptionNotEditable: Story = {
  args: {
    args: {
      label: "Radio label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false,
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Radio },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}