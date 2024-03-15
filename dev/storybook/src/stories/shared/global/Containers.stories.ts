import type { StoryObj } from '@storybook/vue3';

import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSWrapGroup from "@dative-gpi/foundation-shared-components/components/FSWrapGroup.vue";
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSColor from "@dative-gpi/foundation-shared-components/components/FSColor.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Global/Containers',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FadeOut: Story = {
  render: () => ({
    components: { FSFadeOut, FSCol },
    template: `
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut height="200px" style="width: 150px; border: 2px dotted black;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSCol>
        </FSFadeout>
        FSFadeOut scrollbar is hidden but its space is reserved
      </div>
      <div style="display: flex; flex-direction: column;">
      <pre>&lt;FSFadeOut maskHeight="128" height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut height="200px" maskHeight="128" style="width: 150px; border: 2px dotted black;">
          <FSCol style="background-color: plum; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSCol>
        </FSFadeout>
      </div>
    </div>
    `,
  })
};

export const WrapGroup: Story = {
  render: () => ({
    components: { FSWrapGroup, FSRow },
    template: `
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSWrapGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSWrapGroup&gt;</pre>
        <FSWrapGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSWrapGroup>
        FSWrapGroup content is forced to shrink to allow wrapping
      </div>
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSWrapGroup style="width: 200px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSWrapGroup&gt;</pre>
        <FSWrapGroup style="width: 200px; height: 150px; border: 2px dotted black;">
          <FSRow style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSWrapGroup>
        FSWrapGroup slides on mobile instead of wrapping
      </div>
    </div>
    `,
  })
};

export const SlideGroup: Story = {
  render: () => ({
    components: { FSSlideGroup, FSRow },
    template: `
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup children can fill it
      </div>
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 200px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 200px; height: 150px; border: 2px dotted black;">
          <FSRow style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 4 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 5 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 6 </div>
            <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 7 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup arrows take the container's height on desktop, but are hidden on mobile
      </div>
    </div>
    `,
  })
};

export const Color: Story = {
  render: () => ({
    components: { FSColor, FSIcon, FSSpan },
    template: `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; gap: 20px;">
        <FSColor color="primary" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Primary </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="success" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Success </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="warning" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Warning </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="error" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Error </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="light" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Light </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="dark" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> Dark </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="#FF0000" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #FF0000 </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="#00FF00" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #00FF00 </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
        <FSColor color="#0000FF" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSSpan> #0000FF </FSSpan>
            <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
            <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
            <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
          </template>
        </FSColor>
      </div>
    </div>`
  })
};