import type { Meta, StoryObj } from '@storybook/vue3';

import SlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import Button from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta = {
  title: 'Foundation/SlideGroup',
  component: SlideGroup,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof SlideGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    args: {
    }
  },
  render: (args, { argTypes }) => ({
    components: { SlideGroup, Button },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <SlideGroup v-bind="args">
        <Button label="Button 1" />
        <Button label="Button 2" />
        <Button label="Button 3" />
        <Button label="Button 4" />
        <Button label="Button 5" />
        <Button label="Button 6" />
        <Button label="Button 7" />
        <Button label="Button 8" />
        <Button label="Button 9" />
      </SlideGroup>
    `,
  })
};