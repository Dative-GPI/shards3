import{F}from"./FSSlideGroup-ddac1e24.js";import{F as m}from"./FSWrapGroup-a40e4a86.js";import{F as v}from"./FSFadeOut-1de34239.js";import{F as b}from"./FSButton-ff673895.js";import{F as u}from"./FSColor-10199f8b.js";import{_ as f}from"./FSSpan-7bb94541.js";import{_ as e}from"./FSRow-64caadb9.js";import{_ as w}from"./FSCol-5ed907ac.js";import"./vue.esm-bundler-6f923154.js";import"./uuid-08309875.js";import"./useColors-9144d90e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useSlots-21493751.js";import"./css-0cf2e273.js";import"./VSlideGroup-60f1b829.js";import"./index-4caca680.js";import"./useRender-1cb09274.js";import"./display-1e14778f.js";import"./goto-4db1c431.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./group-91945d16.js";import"./tag-a7b67944.js";import"./resizeObserver-e79b2f69.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./VProgressCircular-78df7425.js";import"./FSIcon-93774118.js";const id={title:"Foundation/Shared/Global/Containers",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={render:()=>({components:{FSFadeOut:v,FSCol:w,FSButton:b},template:`
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
    `})},l={render:()=>({components:{FSWrapGroup:m,FSRow:e},template:`
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
    `})},o={render:()=>({components:{FSSlideGroup:F,FSRow:e},template:`
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
}`,...(s=(x=o.parameters)==null?void 0:x.docs)==null?void 0:s.source}}};var g,S,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const ed=["FadeOut","WrapGroup","SlideGroup","Color"];export{i as Color,d as FadeOut,o as SlideGroup,l as WrapGroup,ed as __namedExportsOrder,id as default};
