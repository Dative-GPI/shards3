import{F}from"./FSSlideGroup-66499013.js";import{_ as m}from"./FSWrapGroup-78dfd04f.js";import{F as v}from"./FSFadeOut-072298de.js";import{_ as b}from"./FSButton-58d7615b.js";import{F as u}from"./FSColor-f874a965.js";import{_ as f}from"./FSIcon-1a3e04ae.js";import{_ as k}from"./FSSpan-e5b0fe90.js";import{_ as y}from"./FSRow-cccb539d.js";import{_ as w}from"./FSCol-c92bf913.js";import"./vue.esm-bundler-a6679ce1.js";import"./FSButtonNextIcon-38eef036.js";import"./useColors-7bfbb133.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8c0eb56d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useSlots-decb0027.js";import"./css-39e888cb.js";import"./VSlideGroup-3b5b0f7a.js";import"./index-3965c569.js";import"./useRender-af29532b.js";import"./display-4e3f6834.js";import"./group-a71d090a.js";import"./proxiedModel-8c3bd5c0.js";import"./tag-c6e00dba.js";import"./locale-06782a67.js";import"./resizeObserver-692bfe96.js";import"./VIcon-8b39f3af.js";import"./color-3a7410fc.js";import"./vue-router-c202c6d9.js";import"./FSCard-3545869e.js";import"./VProgressCircular-f3d28a40.js";import"./intersectionObserver-68b7d7a3.js";const ad={title:"Foundation/Shared/Global/Containers",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={render:()=>({components:{FSFadeOut:v,FSCol:w,FSButton:b},template:`
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
              <FSButton label="1" />
              <FSButton label="2" />
              <FSButton label="3" />
              <FSButton label="4" />
            </FSCol>
          </FSFadeout>
          If the content starts to fit after mounting, the mask and scrollbar disappear
        </div>
      </div>
    </div>
    `})},l={render:()=>({components:{FSWrapGroup:m,FSRow:y},template:`
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
    `})},o={render:()=>({components:{FSSlideGroup:F,FSRow:y},template:`
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
    `})},e={render:()=>({components:{FSColor:u,FSIcon:f,FSSpan:k},template:`
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
    </div>`})};var a,i,p;d.parameters={...d.parameters,docs:{...(a=d.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
              <FSButton label="1" />
              <FSButton label="2" />
              <FSButton label="3" />
              <FSButton label="4" />
            </FSCol>
          </FSFadeout>
          If the content starts to fit after mounting, the mask and scrollbar disappear
        </div>
      </div>
    </div>
    \`
  })
}`,...(p=(i=d.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var t,n,r;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(n=l.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var c,h,s;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(s=(h=o.parameters)==null?void 0:h.docs)==null?void 0:s.source}}};var x,g,S;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(g=e.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const id=["FadeOut","WrapGroup","SlideGroup","Color"];export{e as Color,d as FadeOut,o as SlideGroup,l as WrapGroup,id as __namedExportsOrder,ad as default};
