import type { Meta, StoryObj } from '@storybook/vue3';

import Tabs from "@dative-gpi/foundation-shared-ui-components/components/FSTabs.vue";
import Tab from "@dative-gpi/foundation-shared-ui-components/components/FSTab.vue";

const meta = {
  title: 'Foundation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
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
          <template #default="{ color }">
            <Tab label="Tab 1" :value="0" :color="color" />
            <Tab label="Tab 2" :value="1" :color="color" />
            <Tab label="Tab 3" :value="2" :color="color" />
          </template>
        </Tabs>
    `,
  })
};

export const WithTags: Story = {
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
      <Tabs v-bind="args">
        <template #default="{ color }">
          <Tab label="Tab 1"   :value="0" :color="color" tag="1" />
          <Tab label="Tab 2"   :value="1" :color="color" tag="2" />
          <Tab label="Tab 3"   :value="2" :color="color" tag="3" />
          <Tab label="Tab 4"   :value="3" :color="color" />
          <Tab label="Tab 5"   :value="4" :color="color" tag="5" />
          <Tab label="Tab 99+" :value="5" :color="color" tag="99+" />
        </template>
      </Tabs>
    `,
  })
};

export const ShowArrows: Story = {
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
      <Tabs v-bind="args">
        <template #default="{ color }">
          <Tab label="Tab 1: This tab has a long name" :value="0" :color="color" tag="First" />
          <Tab label="Tab 2: This tab has a long name" :value="1" :color="color" />
          <Tab label="Tab 3: This tab has a long name" :value="2" :color="color" />
          <Tab label="Tab 4: This tab has a long name" :value="3" :color="color" />
          <Tab label="Tab 5: This tab has a long name" :value="4" :color="color" />
          <Tab label="Tab 6: This tab has a long name" :value="5" :color="color" />
          <Tab label="Tab 7: This tab has a long name" :value="6" :color="color" />
          <Tab label="Tab 8: This tab has a long name" :value="7" :color="color" />
          <Tab label="Tab 9: This tab has a long name" :value="8" :color="color" tag="Last" />
        </template>
      </Tabs>
    `,
  })
};