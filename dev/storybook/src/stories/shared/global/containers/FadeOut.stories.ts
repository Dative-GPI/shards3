import type { Meta, StoryObj } from '@storybook/vue3';
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

const meta: Meta<typeof FSFadeOut> = {
  title: 'Foundation/Shared/Global/Containers/FadeOut',
  component: FSFadeOut,
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'text' },
    maskHeight: { control: 'text' },
    width: { control: 'text' },
    padding: { control: 'text' },
    scrollOutside: { control: 'boolean' },
    hideHorizontalOverflow: { control: 'boolean' },
    disableTopMask: { control: 'boolean' },
    disableBottomMask: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSFadeOut, FSCol },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 80px;">
        <FSFadeOut v-bind="args" style="border: 1px dotted;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 8 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 9 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 10 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 11 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 12 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 13 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 14 </div>
            <div style="display: flex; width: 72px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 15 </div>
          </FSCol>
        </FSFadeOut>
      </div>
    `,
  }),
  args: {
    height: '200px',
    width: '150px',
    padding: '0',
    scrollOutside: true,
    hideHorizontalOverflow: false,
    disableTopMask: false,
    disableBottomMask: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default usage of FSFadeOut with content items.',
      },
    },
  },
};

export const SmallContent: Story = {
  render: (args) => ({
    components: { FSFadeOut, FSCol },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 80px;">
        <FSFadeOut v-bind="args" style="border: 1px dotted;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
          </FSCol>
        </FSFadeOut>
      </div>
    `,
  }),
  args: {
    height: '200px',
    width: '150px',
  },
  parameters: {
    docs: {
      description: {
        story: 'If the content is smaller than the FSFadeOut, the container size fits the content.',
      },
    },
  },
};

export const DynamicContent: Story = {
  render: (args) => ({
    components: { FSFadeOut, FSCol, FSButton },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 80px;">
        <FSFadeOut v-bind="args" style="border: 1px dotted;">
          <FSCol style="background-color: plum; padding: 4px;">
            <FSButton icon="mdi-numeric-1" />
            <FSButton icon="mdi-numeric-2" />
            <FSButton icon="mdi-numeric-3" />
            <FSButton icon="mdi-numeric-4" />
          </FSCol>
        </FSFadeOut>
      </div>
    `,
  }),
  args: {
    height: '180px',
    width: '150px',
  },
  parameters: {
    docs: {
      description: {
        story: 'If the content starts to fit after mounting, the FSFadeOut automatically resizes to fit.',
      },
    },
  },
};

export const HideOverflow: Story = {
  render: (args) => ({
    components: { FSFadeOut, FSCol },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 80px;">
        <FSFadeOut v-bind="args" style="border: 1px dotted;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 150px; height: 100px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 150px; height: 100px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 150px; height: 100px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
          </FSCol>
        </FSFadeOut>
      </div>
    `,
  }),
  args: {
    height: '200px',
    width: '150px',
    hideHorizontalOverflow: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'With hideHorizontalOverflow set to true, the container will hide horizontal overflow.',
      },
    },
  },
};

export const WithoutScrollOutside: Story = {
  render: (args) => ({
    components: { FSFadeOut, FSCol },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 80px;">
        <FSFadeOut v-bind="args" style="border: 1px dotted;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 150px; height: 100px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 150px; height: 100px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 150px; height: 100px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
          </FSCol>
        </FSFadeOut>
      </div>
    `,
  }),
  args: {
    height: '200px',
    width: '150px',
    scrollOutside: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'With scrollOutside set to false, scrolling will occur inside the container.',
      },
    },
  },
};
