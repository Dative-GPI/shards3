import{F as y}from"./FSSlideGroup-7e073bee.js";import{_ as m}from"./FSWrapGroup-f739e08e.js";import{F as v}from"./FSFadeOut-7f21eda2.js";import{F as b}from"./FSColor-68f3f874.js";import{_ as u}from"./FSIcon-149b00a8.js";import{_ as f}from"./FSSpan-7f9d89a0.js";import{_ as F}from"./FSRow-ae4caba9.js";import{_ as k}from"./FSCol-8dc0322a.js";import"./vue.esm-bundler-7bc65811.js";import"./useColors-6dff70d5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-041f2544.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./theme-0a9d2dbd.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VSlideGroup-0be92b69.js";import"./index-76211fed.js";import"./color-3023c34d.js";import"./display-3f93751e.js";import"./group-71a10606.js";import"./locale-6f1bd0c0.js";import"./VIcon-866a2873.js";import"./resizeObserver-c41c61f0.js";import"./LexicalSelection.prod-b0bd0f79.js";const X={title:"Foundation/Shared/Global/Containers",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={render:()=>({components:{FSFadeOut:v,FSCol:k},template:`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSFadeOut style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut style="width: 150px; height: 200px; border: 2px dotted black;">
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
      <pre>&lt;FSFadeOut maskHeight="128" style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut maskHeight="128" style="width: 150px; height: 200px; border: 2px dotted black;">
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
    `})},d={render:()=>({components:{FSWrapGroup:m,FSRow:F},template:`
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
    `})},o={render:()=>({components:{FSSlideGroup:y,FSRow:F},template:`
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
    `})},a={render:()=>({components:{FSColor:b,FSIcon:u,FSSpan:f},template:`
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
    </div>`})};var e,p,i;l.parameters={...l.parameters,docs:{...(e=l.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSFadeOut,
      FSCol
    },
    template: \`
    <div style="display: flex; gap: 80px; margin-bottom: 80px;">
      <div style="display: flex; flex-direction: column;">
        <pre>&lt;FSFadeOut style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut style="width: 150px; height: 200px; border: 2px dotted black;">
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
      <pre>&lt;FSFadeOut maskHeight="128" style="height: 200px"&gt;
  &lt;FSCol width="fill" height="hug" /&gt;
&lt;/FSFadeOut&gt;</pre>
        <FSFadeOut maskHeight="128" style="width: 150px; height: 200px; border: 2px dotted black;">
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
    \`
  })
}`,...(i=(p=l.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var t,n,r;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(n=d.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var c,s,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    \`
  })
}`,...(h=(s=o.parameters)==null?void 0:s.docs)==null?void 0:h.source}}};var g,x,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSColor,
      FSIcon,
      FSSpan
    },
    template: \`
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
    </div>\`
  })
}`,...(S=(x=a.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const Y=["FadeOut","WrapGroup","SlideGroup","Color"];export{a as Color,l as FadeOut,o as SlideGroup,d as WrapGroup,Y as __namedExportsOrder,X as default};
