import{F as l}from"./FSText-4ee7bf26.js";import{_ as o}from"./FSIcon-97799824.js";import{_ as i}from"./FSSpan-4bf272e8.js";import{_ as n}from"./FSTag-ce90b19a.js";import"./vue.esm-bundler-82a4b45a.js";import"./useColors-698e8610.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-380662da.js";import"./useSlots-f55d2513.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./css-c39c4a6e.js";import"./VIcon-cdae09b0.js";import"./color-616211f8.js";import"./useRender-9b5fad83.js";import"./tag-c823df72.js";import"./FSRow-2ccfd21b.js";import"./VBtn-68d719d2.js";import"./border-7fe0702c.js";import"./density-d6a10252.js";import"./elevation-2177f5c6.js";import"./rounded-523f3a06.js";import"./group-a18b2437.js";import"./proxiedModel-6f61b602.js";import"./dimensions-7b60e06e.js";import"./loader-80aadcba.js";import"./VProgressCircular-86578fb4.js";import"./resizeObserver-bcc9c76e.js";import"./locale-c97048b2.js";import"./router-7318af59.js";import"./index-0f4b4beb.js";import"./VDefaultsProvider-d7814c60.js";const B={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={render:()=>({components:{FSTag:n,FSText:l,FSSpan:i,FSIcon:o},template:`
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
}`,...(e=(r=a.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const G=["Variations"];export{a as Variations,G as __namedExportsOrder,B as default};
