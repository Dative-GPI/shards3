import type { Meta, StoryObj } from '@storybook/vue3';

import FSEditImage from "@dative-gpi/foundation-shared-components/components/FSEditImage.vue";

const meta = {
  title: 'Foundation/Shared/EditImage',
  component: FSEditImage,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSEditImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      imageId1: "1",
      source1: "",
      source2: null
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSEditImage },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSEditImage
        height="96px"
        width="96px"
        :imageId="args.imageId1"
        v-model="args.source1"
      />
      <FSEditImage
        height="96px"
        width="96px"
        v-model="args.source2"
      />
    </div>`
  })
}