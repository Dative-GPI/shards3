import{F as o}from"./FSButton-95139452.js";import{_ as c}from"./FSIcon-be851c75.js";import{_ as S}from"./FSSpan-6a5d69b6.js";import"./vue.esm-bundler-47273a21.js";import"./useColors-446eeb5a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-f5c4efdb.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./theme-7e191b90.js";import"./FSRow-89f60060.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-38d974b0.js";import"./VBtn-1e7a5476.js";import"./variant-8064ce1f.js";import"./density-52b016fa.js";import"./elevation-522a2612.js";import"./rounded-8d3cef66.js";import"./VIcon-f933c800.js";import"./group-0f5e58b6.js";import"./locale-5c4d4b03.js";import"./dimensions-699818e3.js";import"./loader-c1abc016.js";import"./router-843ca95a.js";import"./index-2c0500ae.js";import"./VDefaultsProvider-6a122c68.js";import"./VProgressCircular-c2680c11.js";import"./resizeObserver-87306138.js";const H={title:"Foundation/Shared/Button",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={render:()=>({components:{FSButton:o,FSIcon:c,FSSpan:S},template:`
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
    </div>`})},t={render:()=>({components:{FSButton:o,FSIcon:c,FSSpan:S},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButtonSearch />
        <FSButtonRemove />
        <FSButtonSave />
        <FSButtonCancel />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchMini />
        <FSButtonRemoveMini />
        <FSButtonSaveMini />
        <FSButtonCancelMini />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchIcon />
        <FSButtonRemoveIcon />
        <FSButtonSaveIcon />
        <FSButtonCancelIcon />
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
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,r,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchMini />
        <FSButtonRemoveMini />
        <FSButtonSaveMini />
        <FSButtonCancelMini />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSButtonSearchIcon />
        <FSButtonRemoveIcon />
        <FSButtonSaveIcon />
        <FSButtonCancelIcon />
      </div>
    </div>\`
  })
}`,...(p=(r=t.parameters)==null?void 0:r.docs)==null?void 0:p.source}}};const J=["Variations","Aliases"];export{t as Aliases,n as Variations,J as __namedExportsOrder,H as default};
