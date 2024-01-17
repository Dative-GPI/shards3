import type { Meta, StoryObj } from '@storybook/vue3';

import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/Shared/Image',
  component: FSImage,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      size1: {
        width: 80,
        height: 80
      }
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSImage, FSCol, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          style="border: 1px dotted black;"
          imageId="1"
          :width="args.size1.width"
          :height="args.size1.height"
        />
      </FSCol>
    </div>`
  })
}