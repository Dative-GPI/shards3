import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import FSSimpleUserOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/userOrganisations/FSSimpleUserOrganisationsList.vue";
import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";
import FSTile from "@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue";

const meta: Meta<typeof FSSimpleUserOrganisationsList> = {
  title: "Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",
  component: FSSimpleUserOrganisationsList,
  subcomponents: { FSSimpleList, FSTile },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["column", "row"],
    },
    "click:edit": { action: "click:edit" },
    "click:remove": { action: "click:remove" }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSSimpleUserOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        direction="row"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `,
  }),
  args: {
    maxHeight: 100,
    showEdit: false,
    showRemove: false,
    showDraggable: false,
    direction: "row",
    itemLabel: "name",
    searchable: true,
    tileHeight: '60px',
    tileProps: (item) => ({
      onClick: () => action("onClick:item")(item),
    }),
    "click:edit": action("click:edit"),
    "click:remove": action("click:remove"),
  },
};

export const ListWithoutSearch: Story = {
  args: {
    maxHeight: 0,
    showEdit: true,
    showRemove: true,
    showDraggable: false,
    direction: "row",
    itemLabel: "name",
    searchable: false,
    tileHeight: '60px',
  },

  render: (args) => ({
    components: {
      FSSimpleUserOrganisationsList,
    },

    setup() {
      return {
        args
      };
    },

    template: `
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `,
  }),
};
