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
        <FSColor color="primary" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        success #6DE038
        <FSColor color="success" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        warning #E6A52E
        <FSColor color="warning" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        error #E01212
        <FSColor color="error" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        light #E1E2E3
        <FSColor color="light" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        dark #3F4040
        <FSColor color="dark" :border="false" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>`,
  })
};