import{F as l}from"./FSText-DXU50rpn.js";import{_ as o}from"./FSIcon-CEcP550-.js";import{_ as i}from"./FSSpan-D_j1_q9W.js";import{F as n}from"./FSTag-DaI486-m.js";import"./vue.esm-bundler-Cq4W5tyU.js";import"./useColors-nFEwMWzN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1riLSun.js";import"./useSlots-DT61BqFu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-DEg_ftav.js";import"./VIcon-DEItKADI.js";import"./color-DRHDjI8D.js";import"./tag-CMGfbRyB.js";import"./FSRow-unE_3RO6.js";import"./VBtn-BzEyEYeh.js";import"./border-9F-9anIp.js";import"./density-qG_glApz.js";import"./elevation-D7qOrqBH.js";import"./rounded-CT5UQ7DA.js";import"./group-Daa3BzEI.js";import"./proxiedModel-GwPoz8hG.js";import"./dimensions-DmQ2LvlH.js";import"./loader-BrBoJqhy.js";import"./VProgressCircular-D_7DfGyD.js";import"./locale-HbAtAWzw.js";import"./anchor-BydgbQy2.js";import"./router-DTnNLfUf.js";import"./index-CrjNNQA3.js";import"./VDefaultsProvider-BkmqrQ_Z.js";const A={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={render:()=>({components:{FSTag:n,FSText:l,FSSpan:i,FSIcon:o},template:`
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
}`,...(e=(r=a.parameters)==null?void 0:r.docs)==null?void 0:e.source}}};const B=["Variations"];export{a as Variations,B as __namedExportsOrder,A as default};
