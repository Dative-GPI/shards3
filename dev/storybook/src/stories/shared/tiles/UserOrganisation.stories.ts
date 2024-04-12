import type { Meta, StoryObj } from '@storybook/vue3';

import FSUserOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue";

const meta = {
  title: 'Foundation/Shared/Tiles/UserOrganisation',
  component: FSUserOrganisationTileUI,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSUserOrganisationTileUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
    args: {
      args: {
        values: [{
          id: "1",
          name: "Jean Martin",
          userType: 0,
          imageId: "1",
          admin: true
        }, {
          id: "2",
          label: "Service user",
          userType: 1,
          roleLabel: "Service administrator",
          roleIcon: "mdi-cog",
          imageId: "1",
          admin: false
        }, {
          id: "3",
          name: "Juano Alphonso Santos de la Cruz de la Balina",
          userType: 0,
          roleLabel: "User",
          roleIcon: "mdi-account-outline",
          imageId: "1",
          admin: false
        }],
        selected: [
          false,
          false,
          false
        ]
      }
    },
    render: (args, { argTypes }) => ({
    components: { FSUserOrganisationTileUI },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :label="userOrganisation.label"
        :userType="userOrganisation.userType"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
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
        name: "Jean Martin",
        userType: 0,
        admin: true
      }, {
        id: "2",
        label: "Service user",
        userType: 1,
        roleLabel: "Service administrator",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Juano Alphonso Santos de la Cruz de la Balina",
        userType: 0,
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [
        false,
        false
      ]
    }
  },
  render: (args, { argTypes }) => ({
  components: { FSUserOrganisationTileUI },
  props: Object.keys(argTypes),
  setup() {
    return { ...args };
  },
  template: `
  <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
    <FSUserOrganisationTileUI
      v-for="(userOrganisation, index) in args.values"
      :key="index"
      :name="userOrganisation.name"
      :label="userOrganisation.label"
      :userType="userOrganisation.userType"
      :roleIcon="userOrganisation.roleIcon"
      :roleLabel="userOrganisation.roleLabel"
      :admin="userOrganisation.admin"
      v-model="args.selected[index]"
    />
  </div>`
})
}