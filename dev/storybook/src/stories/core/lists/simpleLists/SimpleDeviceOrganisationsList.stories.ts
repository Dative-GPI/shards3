import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import FSSimpleDeviceOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/deviceOrganisations/FSSimpleDeviceOrganisationsList.vue";
import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";
import FSTile from "@dative-gpi/foundation-shared-components/components/tiles/FSTile.vue";

const meta: Meta<typeof FSSimpleDeviceOrganisationsList> = {
  title: "Foundation/Core/Lists/Simple Lists/SimpleDeviceOrganisationsList",
  component: FSSimpleDeviceOrganisationsList,
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
    components: { FSSimpleDeviceOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
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
    direction: "column",
    itemLabel: "label",
    searchable: true,
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
    direction: "column",
    itemLabel: "label",
    searchable: false,
  },

  render: (args) => ({
    components: {
      FSSimpleDeviceOrganisationsList,
    },

    setup() {
      return {
        args
      };
    },

    template: `
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `,
  }),
};
