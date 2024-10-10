import type { Meta, StoryObj } from '@storybook/vue3';

import FSSearchField from "@dative-gpi/foundation-shared-components/components/fields/FSSearchField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';

const meta = {
  title: 'Foundation/Shared/Input fields/SearchField',
  component: FSSearchField,
  subcomponents: { FSTextField },
  tags: ['autodocs'],
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" }
  },
} satisfies Meta<typeof FSSearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    modelValue: '',
    placeholder: 'Type here...',
    label: 'Search',
    clearable: true,
    hideHeader: false,
    editable: true,
  },
  render: (args, { argTypes }) => ({
    components: { FSSearchField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSSearchField
        v-model="args.modelValue"
        v-bind="args"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`
  })
}