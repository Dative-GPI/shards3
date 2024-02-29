import{F as o}from"./FSButton-d1cb7f94.js";import{_ as p}from"./FSIcon-98d9a930.js";import{_ as S}from"./FSSpan-23926a6a.js";import"./vue.esm-bundler-a27e881e.js";import"./FSRow-e0b07355.js";import"./css-fb381997.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./useColors-64c3c523.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useSlots-f8c8bb5a.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./density-9e64face.js";import"./elevation-c3b2bd24.js";import"./rounded-acf264a5.js";import"./VIcon-05012a67.js";import"./group-9102b821.js";import"./locale-d8beded1.js";import"./dimensions-59e3b80b.js";import"./loader-34392cbd.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";const z={title:"Foundation/Shared/Button",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={render:()=>({components:{FSButton:o,FSIcon:p,FSSpan:S},template:`
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
