import type { Meta, StoryObj } from '@storybook/vue3';

import WrapGroup from "@dative-gpi/foundation-shared-components/components/FSWrapGroup.vue";
import Button from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/WrapGroup',
  component: WrapGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof WrapGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    args: {
    }
  },
  render: (args, { argTypes }) => ({
    components: { WrapGroup, Button },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <WrapGroup v-bind="args">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
        <Button label="Button 4" />
        <Button label="Button 5" />
        <Button label="Button 6" />
        <Button label="Button 7" />
        <Button label="Button 8" />
        <Button label="Button 9" />
      </WrapGroup>
    `,
  })
};