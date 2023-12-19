import{_ as e}from"./FSIcon-27c19cbf.js";import{F as p}from"./FSSpan-abccc23b.js";import{_ as n}from"./FSTag-caa1569b.js";import"./vue.esm-bundler-d10a8528.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VIcon-57787e8c.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSRow-c01fca12.js";import"./VBtn-3a7ed80e.js";import"./rounded-6f26bd38.js";import"./group-6a276766.js";import"./locale-5c0ffb6b.js";import"./loader-d94ba622.js";import"./VDefaultsProvider-1a074de6.js";import"./index-915a05f1.js";import"./resizeObserver-6e691bac.js";const W={title:"Foundation/Shared/Tag",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={render:()=>({components:{FSTag:n,FSSpan:p,FSIcon:e},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary">
          <FSSpan> With slot </FSSpan>
        </FSTag>
        <FSTag color="secondary">
          <FSSpan> With slot </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" :editable="false">
          <FSSpan> With slot </FSSpan>
        </FSTag>
      </div>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary"   variant="standard" label="With props" />
        <FSTag color="secondary" variant="standard" label="With props" />
        <FSTag color="error"     variant="standard" label="With props" :editable="false" />
      </div>
    </div>`})};var o,t,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSTag,
      FSSpan,
      FSIcon
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary">
          <FSSpan> With slot </FSSpan>
        </FSTag>
        <FSTag color="secondary">
          <FSSpan> With slot </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" :editable="false">
          <FSSpan> With slot </FSSpan>
        </FSTag>
      </div>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary"   variant="standard" label="With props" />
        <FSTag color="secondary" variant="standard" label="With props" />
        <FSTag color="error"     variant="standard" label="With props" :editable="false" />
      </div>
    </div>\`
  })
}`,...(r=(t=a.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const _=["Variations"];export{a as Variations,_ as __namedExportsOrder,W as default};
