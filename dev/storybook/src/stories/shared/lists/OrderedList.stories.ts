import type { Meta, StoryObj } from '@storybook/vue3';

import FSOrderedList from "@dative-gpi/foundation-shared-components/components/lists/FSOrderedList.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

const meta = {
  title: 'Foundation/Shared/Lists/OrderedList',
  component: FSOrderedList,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSOrderedList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      items: [
        {
          id: 1,
          label: "Item 1",
          icon: "mdi-home",
          description: "This is a description",
          color: "blue"
        },
        {
          id: 2,
          label: "Item 2",
          icon: "mdi-home",
          description: "This is a description",
          color: "red"
        },
        {
          id: 3,
          label: "Item 3",
          icon: "mdi-home",
          description: "This is a description",
          color: "light"
        },
        {
          id: 4,
          label: "Item 4",
          icon: "mdi-home",
          description: "This is a description",
          color: "red",
          selected: true
        },
        {
          id: 5,
          label: "Item 5",
          icon: "mdi-pencil",
          description: "This is a description",
          color: "red"
        }
      ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { 
      FSOrderedList,
      FSIcon,
    },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 80px;">
      <FSOrderedList
        :items="args.items"
        propsKey="id"
        :propsKeys="['label', 'icon', 'description']"
        :showIndex="true"
      >
        <template #icon="{ element }">
          <FSIcon
            :color="element.color"
          >
            {{ element.icon}}
          </FSIcon>
        </template>
      </FSOrderedList>
      _______________________________
      <FSOrderedList
        :items="args.items"
        propsKey="id"
        :propsKeys="['label', 'description']"
        :selectable="true"
      />
      _______________________________
      <FSOrderedList
        :items="args.items"
        propsKey="id"
        :propsKeys="['label', 'description']"
        :draggable="false"
      />
      _______________________________
      <FSOrderedList
        :items="args.items"
        propsKey="id"
        :propsKeys="['label', 'description']"
        :selectable="true"
        :draggable="false"
        color="red"
        :showIndex="true"
      />
    </div>`
  })
}