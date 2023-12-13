import type { Meta, StoryObj } from '@storybook/vue3';

import Switch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";

const meta = {
  title: 'Foundation/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Switch v-bind="args" v-model:value="args.value" />
</v-container>
`;

export const Solo: Story = {
  args: {
    args: {
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Switch },
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
      editable: false,
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Switch },
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
      label: "Switch label",
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Switch },
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
      label: "Switch label",
      editable: false,
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Switch },
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
      label: "Switch label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Switch },
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
      label: "Switch label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      editable: false,
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Switch },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}