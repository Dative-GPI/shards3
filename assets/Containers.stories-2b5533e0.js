import{F as m}from"./FSSlideGroup-69d20b29.js";import{_ as y}from"./FSWrapGroup-f89ae50b.js";import{F as v}from"./FSFadeOut-5c6a4e27.js";import{_ as b}from"./FSButton-662b4933.js";import{F as u}from"./FSColor-da627624.js";import{_ as f}from"./FSSpan-e91c3439.js";import{_ as i}from"./FSRow-fc81033b.js";import{_ as w}from"./FSCol-4074aa47.js";import"./vue.esm-bundler-37de1696.js";import"./FSButtonNextIcon-89706a01.js";import"./useColors-ba22af06.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-07d11e72.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useSlots-1bcfd838.js";import"./css-b545198d.js";import"./VSlideGroup-62b1ce2b.js";import"./index-3a20b1dd.js";import"./useRender-ccb83440.js";import"./display-62cdc35d.js";import"./group-bc028d0d.js";import"./proxiedModel-e8e26ca7.js";import"./tag-9d688242.js";import"./locale-ee313da6.js";import"./resizeObserver-8d36419f.js";import"./VIcon-122293c7.js";import"./color-efc02365.js";import"./vue-router-f501b7d2.js";import"./FSCard-40979aed.js";import"./VProgressCircular-aa80f032.js";import"./intersectionObserver-12fc3323.js";import"./FSIcon-486fd767.js";const ed={title:"Foundation/Shared/Global/Containers",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={render:()=>({components:{FSFadeOut:v,FSCol:w,FSButton:b},template:`
    <div style="display: flex; flex-direction: column; gap: 80px;">
      <div style="display: flex; gap: 80px;">
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
    `})},l={render:()=>({components:{FSWrapGroup:y,FSRow:i},template:`
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
    `})},o={render:()=>({components:{FSSlideGroup:m,FSRow:i},template:`
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
    `})},e={render:()=>({components:{FSColor:u,FSRow:i,FSSpan:f},template:`
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
}`,...(c=(r=l.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var h,s,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(x=(s=o.parameters)==null?void 0:s.docs)==null?void 0:x.source}}};var g,S,F;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(F=(S=e.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const id=["FadeOut","WrapGroup","SlideGroup","Color"];export{e as Color,d as FadeOut,o as SlideGroup,l as WrapGroup,id as __namedExportsOrder,ed as default};
