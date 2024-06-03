import{F as l}from"./FSText-0819f919.js";import{_ as o}from"./FSIcon-212b990d.js";import{_ as i}from"./FSSpan-3df08200.js";import{F as n}from"./FSTag-d96d667c.js";import"./vue.esm-bundler-838daa40.js";import"./useColors-9d29fce3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./useSlots-6ce8c1a9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./css-67cfec15.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./useRender-f6a4770d.js";import"./tag-d73e64d5.js";import"./FSRow-753b58e5.js";import"./VBtn-a5dad0d3.js";import"./border-749eb26c.js";import"./density-e1cdced2.js";import"./elevation-c2192325.js";import"./rounded-94d04543.js";import"./group-d31dd239.js";import"./proxiedModel-3239cc3c.js";import"./dimensions-be952165.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./locale-5633e5ee.js";import"./anchor-dbd6e54f.js";import"./router-d69bdbea.js";import"./index-a755b9d6.js";import"./VDefaultsProvider-a165414e.js";const G={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={render:()=>({components:{FSTag:n,FSText:l,FSSpan:i,FSIcon:o},template:`
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
