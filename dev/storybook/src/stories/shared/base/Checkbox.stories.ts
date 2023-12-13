import type { Meta, StoryObj } from '@storybook/vue3';

import Checkbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";

const meta = {
  title: 'Foundation/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const template = `
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Checkbox v-bind="args" v-model:value="args.value" />
</v-container>
`;

export const Solo: Story = {
  args: {
    args: {
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Checkbox },
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
    components: { Checkbox },
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
      label: "Checkbox label",
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Checkbox },
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
      label: "Checkbox label",
      value: false,
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Checkbox },
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
      label: "Checkbox label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Checkbox },
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
      label: "Checkbox label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false,
      editable: false
    }
  },
  render: (args, { argTypes }) => ({
    components: { Checkbox },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template
  })
}