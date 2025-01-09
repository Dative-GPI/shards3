import type { Meta, StoryObj } from '@storybook/vue3';

import { EntityType } from '@dative-gpi/foundation-shared-domain/enums';

import FSSelectEntitiesList from "@dative-gpi/foundation-core-components/components/entities/FSSelectEntitiesList.vue";
import FSDialogSelectEntities from '@dative-gpi/foundation-core-components/components/entities/FSDialogSelectEntities.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';

const meta: Meta<typeof FSSelectEntitiesList> = {
  title: 'Foundation/Core/Lists/SelectEntitiesList',
  component: FSSelectEntitiesList,
  tags: ['autodocs'],
  argTypes: {
    'onUpdate:modelValue': { action: 'update:modelValue' },
    'onUpdate:selecteds': { action: 'update:selecteds' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DeviceOrganisations: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    `,
  }),
  args: {
    entityType: EntityType.Device,
    modelValue: ["1"],
  },
};

export const Groups: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        :entityType="args.entityType"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    `,
  }),
  args: {
    entityType: EntityType.Group,
    modelValue: []
  },
};

export const Dialog: Story = {
  render: (args) => ({
    components: { FSDialogSelectEntities, FSButton },
    setup() {
      return { args };
    },
    template: `
      <FSDialogSelectEntities
        :entityType="args.entityType"
        v-model:selecteds="args.selecteds"
        v-model:modelValue="args.modelValue"
        @update:selecteds="args['onUpdate:selecteds']"
        @update:modelValue="args['onUpdate:modelValue']"
      />
      <FSButton
        @click="args.modelValue = true"
        label="Open Dialog"
      />
    `,
  }),
  args: {
    entityType: EntityType.Group,
    selecteds: [],
    modelValue: false
  },
};
