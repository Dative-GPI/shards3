import{F as l}from"./FSText-3a5d632d.js";import{_ as o}from"./FSIcon-1a3e04ae.js";import{_ as i}from"./FSSpan-e5b0fe90.js";import{_ as n}from"./FSTag-596ed0ed.js";import"./vue.esm-bundler-a6679ce1.js";import"./useColors-7bfbb133.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8c0eb56d.js";import"./useSlots-decb0027.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-8b39f3af.js";import"./color-3a7410fc.js";import"./useRender-af29532b.js";import"./tag-c6e00dba.js";import"./FSRow-cccb539d.js";import"./css-39e888cb.js";import"./VBtn-7c947ff4.js";import"./border-c8fc0b9b.js";import"./density-5c9f41ad.js";import"./elevation-643b3bb1.js";import"./rounded-289ab918.js";import"./group-a71d090a.js";import"./proxiedModel-8c3bd5c0.js";import"./dimensions-90886f46.js";import"./loader-837c299d.js";import"./intersectionObserver-68b7d7a3.js";import"./locale-06782a67.js";import"./router-d9b0c695.js";import"./index-9e1e9b7b.js";import"./VDefaultsProvider-7c4e7670.js";import"./VProgressCircular-f3d28a40.js";import"./resizeObserver-692bfe96.js";const G={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={render:()=>({components:{FSTag:n,FSText:l,FSSpan:i,FSIcon:o},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSTag color="primary">
          <FSSpan> Primary, full, editable </FSSpan>
        </FSTag>
        <FSTag color="success" variant="standard" :editable="false">
          <FSSpan> Success, standard, uneditable </FSSpan>
        </FSTag>
        <FSTag color="warning">
          <FSSpan> Warning, full, editable </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" variant="standard" :editable="false">
          <FSSpan> Error, standard, uneditable </FSSpan>
        </FSTag>
        <FSTag color="light" :editable="false">
          <FSSpan> Light, full, uneditable </FSSpan>
        </FSTag>
        <FSTag color="dark" variant="standard">
          <FSSpan> Dark, standard, editable </FSSpan>
        </FSTag>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary" variant="standard" :editable="false" label="Primary, standard, uneditable" />
        <FSTag color="success" label="Success, full, editable"     />
        <FSTag color="warning" variant="standard" :editable="false" label="Warning, standard, uneditable" />
        <FSTag color="error" label="Error, full, editable"       />
        <FSTag color="light" variant="standard" label="Light, standard, editable" />
        <FSTag color="dark" :editable="false" label="Dark, standard, uneditable" />
      </div>
    </div>`})};var t,r,e;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSTag,
      FSText,
      FSSpan,
      FSIcon
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSTag color="primary">
          <FSSpan> Primary, full, editable </FSSpan>
        </FSTag>
        <FSTag color="success" variant="standard" :editable="false">
          <FSSpan> Success, standard, uneditable </FSSpan>
        </FSTag>
        <FSTag color="warning">
          <FSSpan> Warning, full, editable </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" variant="standard" :editable="false">
          <FSSpan> Error, standard, uneditable </FSSpan>
        </FSTag>
        <FSTag color="light" :editable="false">
          <FSSpan> Light, full, uneditable </FSSpan>
        </FSTag>
        <FSTag color="dark" variant="standard">
          <FSSpan> Dark, standard, editable </FSSpan>
        </FSTag>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary" variant="standard" :editable="false" label="Primary, standard, uneditable" />
        <FSTag color="success" label="Success, full, editable"     />
        <FSTag color="warning" variant="standard" :editable="false" label="Warning, standard, uneditable" />
        <FSTag color="error" label="Error, full, editable"       />
        <FSTag color="light" variant="standard" label="Light, standard, editable" />
        <FSTag color="dark" :editable="false" label="Dark, standard, uneditable" />
      </div>
    </div>\`
  })
}`,...(e=(r=a.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const H=["Variations"];export{a as Variations,H as __namedExportsOrder,G as default};
