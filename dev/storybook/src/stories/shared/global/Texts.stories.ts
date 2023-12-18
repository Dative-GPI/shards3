import type { Meta, StoryObj } from '@storybook/vue3';

import Span from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import Col from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Global/Texts',
  component: Span,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof Span>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFonts: Story = {
  args: {
  },
  render: (args, { argTypes }) => ({
    components: { Span, Col },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
      <Col>
        <Span font="text-h1"> text-h1</Span>
        <Span font="text-h2"> text-h2 </Span>
        <Span font="text-h3"> text-h3 </Span>
        <Span font="text-body"> text-body </Span>
        <Span font="text-button"> text-button </Span>
        <Span font="text-overline"> text-overline </Span>
        <Span font="text-underline"> text-underline </Span>
      </Col>`
  })
}