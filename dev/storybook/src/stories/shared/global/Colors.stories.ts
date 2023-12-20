import type { StoryObj } from '@storybook/vue3';

import FSColor from "@dative-gpi/foundation-shared-components/components/FSColor.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

const meta = {
  title: 'Foundation/Shared/Global/Colors',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTheme: Story = {
  render: () => ({
    components: { FSColor, FSRow },
    template: `
    <div style="display: flex; flex-wrap: wrap; gap: 20px;  margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        primary #0059E5
        <FSColor color="primary" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark-color);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        success #EB1313
        <FSColor color="success" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark-color);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        warning #FFB833
        <FSColor color="warning" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark-color);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        error #EB1313
        <FSColor color="error" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark-color);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        background #EB1313
        <FSColor color="background" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark-color);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        light #DEE0E3
        <FSColor color="light" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark-color);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        dark #4D4D4D
        <FSColor color="dark" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base-color);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark-color);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>`,
  })
};