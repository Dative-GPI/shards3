import type { Meta, StoryObj } from '@storybook/vue3';

import FSServiceAccountOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSServiceAccountOrganisationTileUI.vue";

const meta = {
  title: 'Foundation/Shared/Tiles/ServiceAccountOrganisation',
  component: FSServiceAccountOrganisationTileUI,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSServiceAccountOrganisationTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }],
      selected: [
        false,
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
  components: { FSServiceAccountOrganisationTileUI },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :imageId="serviceAccountOrganisation.imageId"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`
  })
}

export const Imageless: Story = {
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog"
      }],
      selected: [
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
  components: { FSServiceAccountOrganisationTileUI },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`
  })
}