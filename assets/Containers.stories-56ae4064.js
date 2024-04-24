import{F as y}from"./FSSlideGroup-3bf9e88b.js";import{_ as F}from"./FSWrapGroup-53ffd2f5.js";import{F as v}from"./FSFadeOut-6d4fdcb4.js";import{_ as b}from"./FSButton-aca46646.js";import{F as u}from"./FSColor-6804a1f7.js";import{_ as f}from"./FSSpan-dff588c4.js";import{_ as e}from"./FSRow-547598b4.js";import{_ as w}from"./FSCol-0a323bdc.js";import"./vue.esm-bundler-0c8496bd.js";import"./FSButtonNextIcon-1274b69a.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useSlots-d0001844.js";import"./css-0fb78066.js";import"./VSlideGroup-8312a613.js";import"./index-5d52efe8.js";import"./useRender-8701d95b.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./proxiedModel-19525b39.js";import"./tag-0cc02cbd.js";import"./locale-4d9bcfcb.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./color-e947437a.js";import"./useDebounce-9a2b81c6.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./VProgressCircular-91035e99.js";import"./FSIcon-e8919096.js";const id={title:"Foundation/Shared/Global/Containers",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={render:()=>({components:{FSFadeOut:v,FSCol:w,FSButton:b},template:`
    <div style="display: flex; flex-direction: column; gap: 80px;">
      <div style="display: flex; gap: 80px;">
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" style="width: 150px; border: 2px dotted black;">
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
          </FSFadeout>
          FSFadeOut scrollbar is hidden but its space is reserved
        </div>
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut maskHeight="128px" height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" maskHeight="128px" style="width: 150px; border: 2px dotted black;">
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
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            </FSCol>
          </FSFadeout>
          If the content is smaller than the FSFadeOut, the container size fit the content
        </div>
      </div>
      <div style="display: flex; gap: 80px;">
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="180px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <FSButton icon="mdi-numeric-1" />
              <FSButton icon="mdi-numeric-2" />
              <FSButton icon="mdi-numeric-3" />
              <FSButton icon="mdi-numeric-4" />
            </FSCol>
          </FSFadeout>
          If the content starts to fit after mounting, the mask and scrollbar disappear
        </div>
      </div>
    </div>
    `})},l={render:()=>({components:{FSWrapGroup:F,FSRow:e},template:`
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
    `})},o={render:()=>({components:{FSSlideGroup:y,FSRow:e},template:`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 01 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 02 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 03 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 04 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 05 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 06 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 07 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 08 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 09 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 10 </div>
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
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 01 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 02 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 03 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 04 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 05 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 06 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 07 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 08 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 09 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 10 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 11 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 12 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 13 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 14 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 15 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup arrows take the container's height on desktop, but are hidden on mobile
      </div>
    </div>
    `})},i={render:()=>({components:{FSColor:u,FSRow:e,FSSpan:f},template:`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; gap: 20px;">
        <FSColor color="primary" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Primary </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="success" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Success </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="warning" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Warning </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="error" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Error </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="light" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Light </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="dark" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Dark </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="#FF0000" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> #FF0000 </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="#00FF00" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> #00FF00 </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="#0000FF" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> #0000FF </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
      </div>
    </div>`})};var a,p,t;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSFadeOut,
      FSCol,
      FSButton
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 80px;">
      <div style="display: flex; gap: 80px;">
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" style="width: 150px; border: 2px dotted black;">
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
          </FSFadeout>
          FSFadeOut scrollbar is hidden but its space is reserved
        </div>
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut maskHeight="128px" height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" maskHeight="128px" style="width: 150px; border: 2px dotted black;">
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
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="200px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 1 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 2 </div>
              <div style="display: flex; width: 54px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 3 </div>
            </FSCol>
          </FSFadeout>
          If the content is smaller than the FSFadeOut, the container size fit the content
        </div>
      </div>
      <div style="display: flex; gap: 80px;">
        <div style="display: flex; flex-direction: column;">
          <pre>&lt;FSFadeOut height="200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
          <FSFadeOut height="180px" style="width: 150px; border: 2px dotted black;">
            <FSCol style="background-color: plum; padding: 4px;">
              <FSButton icon="mdi-numeric-1" />
              <FSButton icon="mdi-numeric-2" />
              <FSButton icon="mdi-numeric-3" />
              <FSButton icon="mdi-numeric-4" />
            </FSCol>
          </FSFadeout>
          If the content starts to fit after mounting, the mask and scrollbar disappear
        </div>
      </div>
    </div>
    \`
  })
}`,...(t=(p=d.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var n,r,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSWrapGroup,
      FSRow
    },
    template: \`
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
    \`
  })
}`,...(c=(r=l.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var h,x,s;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSSlideGroup,
      FSRow
    },
    template: \`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSSlideGroup style="width: 500px; height: 150px;"&gt;
  &lt;FSRow width="fill" height="hug" /&gt;
&lt;/FSSlideGroup&gt;</pre>
        <FSSlideGroup style="width: 500px; height: 150px; border: 2px dotted black;">
          <FSRow width="fill" style="background-color: palegreen; padding: 4px;">
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 01 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 02 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 03 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 04 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 05 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 06 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 07 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 08 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 09 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 10 </div>
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
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 01 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 02 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 03 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 04 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 05 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 06 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 07 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 08 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 09 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 10 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 11 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 12 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 13 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 14 </div>
            <div style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"> item 15 </div>
          </FSRow>
        </FSSlideGroup>
        FSSlideGroup arrows take the container's height on desktop, but are hidden on mobile
      </div>
    </div>
    \`
  })
}`,...(s=(x=o.parameters)==null?void 0:x.docs)==null?void 0:s.source}}};var g,S,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSColor,
      FSRow,
      FSSpan
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <div style="display: flex; gap: 20px;">
        <FSColor color="primary" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Primary </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="success" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Success </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="warning" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Warning </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="error" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Error </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="light" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Light </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="dark" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> Dark </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
      </div>
      <div style="display: flex; gap: 20px;">
        <FSColor color="#FF0000" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> #FF0000 </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="#00FF00" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> #00FF00 </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
        <FSColor color="#0000FF" style="padding: 4px;">
          <template #default="{ color, colors }">
            <FSRow>
              <FSSpan> #0000FF </FSSpan>
              <FSSpan style="padding: 0 2px; background-color: var(--fs-color-base); color: var(--fs-color-light)"> Light </FSSpan>
              <FSSpan style="color: var(--fs-color-base)"> Base </FSSpan>
              <FSSpan style="color: var(--fs-color-dark)"> Dark </FSSpan>
            </FSRow>
          </template>
        </FSColor>
      </div>
    </div>\`
  })
}`,...(m=(S=i.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};const ed=["FadeOut","WrapGroup","SlideGroup","Color"];export{i as Color,d as FadeOut,o as SlideGroup,l as WrapGroup,ed as __namedExportsOrder,id as default};
