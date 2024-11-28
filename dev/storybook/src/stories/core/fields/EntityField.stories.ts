import { ref, watch } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

import { EntityType } from '@dative-gpi/foundation-shared-domain/enums';
import FSEntityField from "@dative-gpi/foundation-core-components/components/entities/FSEntityField.vue";

const meta = {
  title: 'Foundation/Core/EntityField',
  component: FSEntityField,
  tags: ['autodocs'],
} satisfies Meta<typeof FSEntityField>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  args: {
    label: "Entity selection",
    modelValue: [],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
  render: (args) => ({
    components: { FSEntityField },
    setup() {
      const entityType = ref(args.entityType)
      const value = ref<string[]>(args.modelValue)

      watch(() => args.entityType, (value) => {
        entityType.value = value;
      }, { immediate: true });

      watch(() => args.modelValue, (value) => {
        value.value = value;
      }, { immediate: true });

      return { args, entityType, value };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
        <FSEntityField
          v-bind="args" 
          v-model="value" 
          v-model:entityType="entityType"
        >
            <FSText font="text-button">Obiwan kenobi</FSText>
            <FSText> - Hello there!</FSText>
        </FSEntityField>
    </div>`
  })
}

export const Empty: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
}


export const AllTypes: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [],
  },
}


export const One: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection with single select",
    modelValue: ["1"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
    singleSelect: true
  },
}


export const Five: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
}


export const TenNoList: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    entityType: EntityType.Device,
    showEntities: false,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
}