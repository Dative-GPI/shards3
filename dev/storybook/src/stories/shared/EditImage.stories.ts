import type { Meta, StoryObj } from '@storybook/vue3';
import { action } from "@storybook/addon-actions";

import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSEditImage from "@dative-gpi/foundation-shared-components/components/FSEditImage.vue";
import FSEditImageUI from '@dative-gpi/foundation-shared-components/components/FSEditImageUI.vue';

const meta = {
  title: 'Foundation/Shared/EditImage/EditImage',
  component: FSEditImage,
  parameters: {
    docs: {
      description: {
        component: 'EditImage will fetch the image from Foundation API by asking the gateway.'
      }
    }
  },
  subcomponents: { FSEditImageUI },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'full']
    },
    "onUpdate:modelValue": { action: "update:modelValue" }
  }
} satisfies Meta<typeof FSEditImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageId: "1",
    modelValue: null,
    height: 96,
    width: 96,
    label: 'Edit Image',
    variant: 'standard',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue")
  },
  render: (args, { argTypes }) => ({
    components: { FSEditImage, FSButton },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSEditImage 
        :imageId="args.imageId"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />`
  })
}
