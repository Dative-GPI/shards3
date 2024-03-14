import type { Meta, StoryObj } from '@storybook/vue3';

import FSAccordionPanel from "@dative-gpi/foundation-shared-components/components/FSAccordionPanel.vue";
import FSAccordion from "@dative-gpi/foundation-shared-components/components/FSAccordion.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

const meta = {
  title: 'Foundation/Shared/Accordion',
  component: FSAccordion,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSAccordion, FSAccordionPanel, FSText, FSIcon },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSAccordion>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    First panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-emoticon-cool-outline
                  </FSIcon>
                  <FSText>
                    Hello there
                  </FSText>
                </template>
            </FSAccordionPanel>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    Second panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-robot-angry-outline
                  </FSIcon>
                  <FSText>
                    General kenobi
                  </FSText>
                </template>
            </FSAccordionPanel>
        </FSAccordion>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSAccordion>
            <FSAccordionPanel
              title="First panel"
              content="Hello there"
            />
            <FSAccordionPanel
              title="Second panel"
              content="General Kenobi"
            />
        </FSAccordion>
      </div>
    </div>`
  })
}