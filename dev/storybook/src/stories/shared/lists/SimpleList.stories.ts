import { ref, watch } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";

const meta = {
  title: 'Foundation/Shared/Lists/SimpleList',
  component: FSSimpleList,
  tags: ['autodocs'],
} satisfies Meta<typeof FSSimpleList>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  args: {
    items: [
      {
        id: "1",
        imageId: "1",
        label: "Test 1"
      },
      {
        id: "2",
        imageId: "2",
        label: "Test 2"
      },
      {
        id: "3",
        icon: "mdi-account",
        label: "Test 3"
      },
      {
        id: "4",
        label: "Test 4"
      },
    ],
    tileProps: (item) => ({
      leftColor: item.id == "1" ? "red" : null,
      bottomColor: item.id == "3" ? "blue" : null,
    })
  },
  render: (args) => ({
    components: { FSSimpleList },
    setup() {

      return { args, };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
        <FSSimpleList v-bind="args" />
    </div>`
  })
}

export const Default = BaseStory;

export const DragAndDrop: Story = {
  args: {
    items: [
      {
        id: "1",
        imageId: "1",
        label: "Test 1"
      },
      {
        id: "2",
        imageId: "2",
        label: "Test 2"
      },
      {
        id: "3",
        icon: "mdi-account",
        label: "Test 3"
      },
      {
        id: "4",
        label: "Test 4"
      },
    ],
    showDraggable: true,
  },
  render: (args) => ({
    components: { FSSimpleList },
    setup() {

      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
        <FSSimpleList
          v-bind="args"
        />
    </div>`
  })
}