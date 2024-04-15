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
      imageId: "1",
      source: ""
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
        :imageId="args.imageId"
        v-model="args.source"
      />
    </div>`
  })
}