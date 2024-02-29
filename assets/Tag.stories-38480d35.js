import{F as l}from"./FSText-8dc1b884.js";import{_ as o}from"./FSIcon-98d9a930.js";import{_ as i}from"./FSSpan-23926a6a.js";import{_ as n}from"./FSTag-699e161b.js";import"./vue.esm-bundler-a27e881e.js";import"./useColors-64c3c523.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-40a9efa2.js";import"./useSlots-f8c8bb5a.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-05012a67.js";import"./color-17bc18af.js";import"./FSRow-e0b07355.js";import"./css-fb381997.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./rounded-acf264a5.js";import"./group-9102b821.js";import"./locale-d8beded1.js";import"./dimensions-59e3b80b.js";import"./loader-34392cbd.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";const q={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={render:()=>({components:{FSTag:n,FSText:l,FSSpan:i,FSIcon:o},template:`
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
    </div>`})};var t,e,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(e=a.parameters)==null?void 0:e.docs)==null?void 0:r.source}}};const z=["Variations"];export{a as Variations,z as __namedExportsOrder,q as default};
