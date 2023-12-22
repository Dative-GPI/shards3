import type { Meta, StoryObj } from '@storybook/vue3';

import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Global/Texts',
  component: FSSpan,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
} satisfies Meta<typeof FSSpan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllFonts: Story = {
  render: () => ({
    components: { FSSpan, FSCol },
    template: `
      <FSCol>
        <FSSpan font="text-h1"> text-h1</FSSpan>
        <FSSpan font="text-h2"> text-h2 </FSSpan>
        <FSSpan font="text-h3"> text-h3 </FSSpan>
        <FSSpan font="text-body"> text-body </FSSpan>
        <FSSpan font="text-button"> text-button </FSSpan>
        <FSSpan font="text-overline"> text-overline </FSSpan>
        <FSSpan font="text-underline"> text-underline </FSSpan>
      </FSCol>`
  })
}

export const VTextDirective: Story = {
  render: () => ({
    components: { FSSpan, FSCol },
    template: `
      <FSCol>
        <pre>&lt;FSSpan font="text-body"&gt;
  Jumped a line
  Again Tabulated   3 Spaces
&lt;/FSSpan&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body">
          Jumped a line
          Again Tabulated   3 Spaces
        </FSSpan>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <pre>&lt;FSSpan font="text-body" v-text="'\\r\\nJumped a line\\r\\nAgain\\tTabulated   3 Spaces'" /&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body" v-text="'\\r\\nJumped a line\\r\\nAgain\\tTabulated   3 Spaces'" />
      </FSCol>`
  })
}