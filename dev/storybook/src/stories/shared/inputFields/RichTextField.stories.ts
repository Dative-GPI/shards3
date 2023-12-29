import type { Meta, StoryObj } from '@storybook/vue3';

import FSRichTextField from "@dative-gpi/foundation-shared-components/components/FSRichTextField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/RichTextField',
  component: FSRichTextField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSRichTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSRichTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSRichTextField />
    </FSCol>`
  })
}