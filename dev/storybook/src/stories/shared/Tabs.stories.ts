import type { Meta, StoryObj } from '@storybook/vue3';

import Tabs from "@dative-gpi/foundation-shared-components/components/FSTabs.vue";
import Tab from "@dative-gpi/foundation-shared-components/components/FSTab.vue";

const meta = {
  title: 'Foundation/Shared/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Labels: Story = {
  args: {
    args: {
      tab: 0,
      color: "primary"
    }
  },
  render: (args, { argTypes }) => ({
    components: { Tabs, Tab },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
        <Tabs v-bind="args" v-model:tab="args.tab">
          <Tab label="Tab 1" :value="0" />
          <Tab label="Tab 2" :value="1" />
          <Tab label="Tab 3" :value="2" />
          <Tab label="Tab 4" :value="3" />
          <Tab label="Tab 5" :value="4" />
          <Tab label="Tab 6" :value="5" />
        </Tabs>
    `,
  })
};

export const Tags: Story = {
  args: {
    args: {
      color: "primary"
    }
  },
  render: (args, { argTypes }) => ({
    components: { Tabs, Tab },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab label="Tab 1" :value="0" tag="1" />
        <Tab label="Tab 2" :value="1" tag="2" />
        <Tab label="Tab 3" :value="2" tag="3" />
        <Tab label="Tab 4" :value="3" tag="4" />
        <Tab label="Tab 5" :value="4" tag="5" />
        <Tab label="Tab 6" :value="5" tag="6" />
      </Tabs>
    `,
  })
};

export const Icons: Story = {
  args: {
    args: {
      color: "warning"
    }
  },
  render: (args, { argTypes }) => ({
    components: { Tabs, Tab },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab label="Tab 1" :value="0" prependIcon="mdi-numeric-1-circle-outline" />
        <Tab label="Tab 2" :value="1" prependIcon="mdi-numeric-2-circle-outline" />
        <Tab label="Tab 3" :value="2" prependIcon="mdi-numeric-3-circle-outline" />
        <Tab label="Tab 4" :value="3" prependIcon="mdi-numeric-4-circle-outline" />
        <Tab label="Tab 5" :value="4" prependIcon="mdi-numeric-5-circle-outline" />
        <Tab label="Tab 6" :value="5" prependIcon="mdi-numeric-6-circle-outline" />
      </Tabs>
    `,
  })
}

export const MixNMatch: Story = {
  args: {
    args: {
      color: "error"
    }
  },
  render: (args, { argTypes }) => ({
    components: { Tabs, Tab },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <Tabs v-bind="args" v-model:tab="args.tab">
        <Tab :value="0" prependIcon="mdi-numeric-1-circle-outline" appendIcon="mdi-dice-1-outline" tag="1" />
        <Tab :value="1" label="Tab 2" appendIcon="mdi-dice-2-outline" tag="2" />
        <Tab :value="2" label="Tab 3" prependIcon="mdi-numeric-3-circle-outline" tag="3" />
        <Tab :value="3" label="Tab 4" prependIcon="mdi-numeric-4-circle-outline" appendIcon="mdi-dice-4-outline" />
        <Tab :value="4" label="Tab 5" prependIcon="mdi-numeric-5-circle-outline" appendIcon="mdi-dice-5-outline" tag="5" />
      </Tabs>
    `,
  })
}