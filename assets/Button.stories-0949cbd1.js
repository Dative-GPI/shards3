import{F as o}from"./FSButton-03b2e657.js";import{_ as p}from"./FSIcon-2736b3f2.js";import{_ as S}from"./FSSpan-3793c562.js";import"./vue.esm-bundler-588e96c7.js";import"./FSRow-e442cab6.js";import"./css-50f0aa1d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./useColors-0a17cef8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useSlots-553f4fbf.js";import"./VBtn-b4a2fb00.js";import"./variant-5570e4c2.js";import"./density-79e1d57e.js";import"./elevation-1ac0f37f.js";import"./rounded-ef9fdb42.js";import"./VIcon-56fbcc42.js";import"./group-6ed4811d.js";import"./locale-56b7257e.js";import"./dimensions-e6c6eed7.js";import"./loader-b5f87c49.js";import"./router-cfd7314c.js";import"./index-50a29978.js";import"./VDefaultsProvider-3b96cb3b.js";import"./VProgressCircular-33868664.js";import"./resizeObserver-54460412.js";const z={title:"Foundation/Shared/Button",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={render:()=>({components:{FSButton:o,FSIcon:p,FSSpan:S},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButton color="primary">
          <template #prepend>
            <FSIcon> mdi-plus-circle-outline </FSIcon>
          </template>
          <FSSpan> Create </FSSpan>
        </FSButton>
        <FSButton color="warning">
          <FSSpan> Disable </FSSpan>
        </FSButton>
        <FSButton color="error">
          <FSSpan> Remove </FSSpan>
          <template #append>
            <FSIcon> mdi-minus-circle-outline </FSIcon>
          </template>
        </FSButton>
        <FSButton color="success">
          <template #prepend>
            <FSIcon> mdi-pencil </FSIcon>
          </template>
        </FSButton>
        <FSButton :editable="false">
          <FSSpan> Enable </FSSpan>
        </FSButton>
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButton
          color="primary"
          variant="full"
          prependIcon="mdi-plus-circle-outline"
          label="Create"
        />
        <FSButton
          color="warning"
          variant="full"
          label="Disable"
        />
        <FSButton
          color="error"
          variant="full"
          appendIcon="mdi-minus-circle-outline"
          label="Remove"
        />
        <FSButton
          color="success"
          variant="full"
          prependIcon="mdi-pencil"
        />
        <FSButton
          variant="full"
          label="Enable"
          :editable="false"
        />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButton
          color="primary"
          variant="icon"
          icon="mdi-plus-circle-outline"
        />
        <FSButton
          color="warning"
          variant="icon"
          icon="mdi-eye-off-outline"
        />
        <FSButton
          color="error"
          variant="icon"
          icon="mdi-minus-circle-outline"
        />
        <FSButton
          color="success"
          variant="icon"
          icon="mdi-pencil"
        />
        <FSButton
          variant="icon"
          icon="mdi-cancel"
          :editable="false"
        />
      </div>
    </div>`})},t={render:()=>({components:{FSButton:o,FSIcon:p,FSSpan:S},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButtonSearch />
        <FSButtonRemove />
        <FSButtonSave />
        <FSButtonCancel />
        <FSButtonDocumentation />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchMini />
        <FSButtonRemoveMini />
        <FSButtonSaveMini />
        <FSButtonCancelMini />
        <FSButtonDocumentationMini />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchIcon />
        <FSButtonRemoveIcon />
        <FSButtonSaveIcon />
        <FSButtonCancelIcon />
        <FSButtonDocumentationIcon />
      </div>
    </div>`})};var e,i,a;n.parameters={...n.parameters,docs:{...(e=n.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSButton,
      FSIcon,
      FSSpan
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButton color="primary">
          <template #prepend>
            <FSIcon> mdi-plus-circle-outline </FSIcon>
          </template>
          <FSSpan> Create </FSSpan>
        </FSButton>
        <FSButton color="warning">
          <FSSpan> Disable </FSSpan>
        </FSButton>
        <FSButton color="error">
          <FSSpan> Remove </FSSpan>
          <template #append>
            <FSIcon> mdi-minus-circle-outline </FSIcon>
          </template>
        </FSButton>
        <FSButton color="success">
          <template #prepend>
            <FSIcon> mdi-pencil </FSIcon>
          </template>
        </FSButton>
        <FSButton :editable="false">
          <FSSpan> Enable </FSSpan>
        </FSButton>
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButton
          color="primary"
          variant="full"
          prependIcon="mdi-plus-circle-outline"
          label="Create"
        />
        <FSButton
          color="warning"
          variant="full"
          label="Disable"
        />
        <FSButton
          color="error"
          variant="full"
          appendIcon="mdi-minus-circle-outline"
          label="Remove"
        />
        <FSButton
          color="success"
          variant="full"
          prependIcon="mdi-pencil"
        />
        <FSButton
          variant="full"
          label="Enable"
          :editable="false"
        />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButton
          color="primary"
          variant="icon"
          icon="mdi-plus-circle-outline"
        />
        <FSButton
          color="warning"
          variant="icon"
          icon="mdi-eye-off-outline"
        />
        <FSButton
          color="error"
          variant="icon"
          icon="mdi-minus-circle-outline"
        />
        <FSButton
          color="success"
          variant="icon"
          icon="mdi-pencil"
        />
        <FSButton
          variant="icon"
          icon="mdi-cancel"
          :editable="false"
        />
      </div>
    </div>\`
  })
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,r,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSButton,
      FSIcon,
      FSSpan
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButtonSearch />
        <FSButtonRemove />
        <FSButtonSave />
        <FSButtonCancel />
        <FSButtonDocumentation />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchMini />
        <FSButtonRemoveMini />
        <FSButtonSaveMini />
        <FSButtonCancelMini />
        <FSButtonDocumentationMini />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchIcon />
        <FSButtonRemoveIcon />
        <FSButtonSaveIcon />
        <FSButtonCancelIcon />
        <FSButtonDocumentationIcon />
      </div>
    </div>\`
  })
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const G=["Variations","Aliases"];export{t as Aliases,n as Variations,G as __namedExportsOrder,z as default};
