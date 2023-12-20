import type { Meta, StoryObj } from '@storybook/vue3';

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSTag from "@dative-gpi/foundation-shared-components/components/FSTag.vue";

const meta = {
  title: 'Foundation/Shared/Tag',
  component: FSTag,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSTag, FSSpan, FSIcon },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary">
          <FSSpan> With slot </FSSpan>
        </FSTag>
        <FSTag color="warning">
          <FSSpan> With slot </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" :editable="false">
          <FSSpan> With slot </FSSpan>
        </FSTag>
        <FSTag color="light" textColor="dark" :editable="false">
          <FSSpan> With slot </FSSpan>
        </FSTag>
      </div>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary" variant="standard" label="With props" />
        <FSTag color="warning" variant="standard" label="With props" />
        <FSTag color="error"   variant="standard" label="With props" :editable="false" />
        <FSTag color="light"   textColor="dark" variant="standard" label="With props" :editable="false" />
      </div>
    </div>`
  })
}