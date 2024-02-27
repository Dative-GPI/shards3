import{_ as mn}from"./FSButton-f8d3e800.js";import{_ as Sn}from"./FSIcon-149b00a8.js";import{_ as Fn}from"./FSSpan-7f9d89a0.js";import{F as n}from"./FSButton-5cc866a8.js";import"./vue.esm-bundler-7bc65811.js";import"./useColors-6dff70d5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-041f2544.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./theme-0a9d2dbd.js";import"./FSRow-ae4caba9.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VBtn-5c223d6a.js";import"./variant-9510412f.js";import"./color-3023c34d.js";import"./density-54967683.js";import"./elevation-8ccaa6df.js";import"./rounded-2bba334c.js";import"./VIcon-866a2873.js";import"./group-71a10606.js";import"./locale-6f1bd0c0.js";import"./dimensions-d0734457.js";import"./loader-04f0a6eb.js";import"./router-7d0819d1.js";import"./index-97233025.js";import"./VDefaultsProvider-04b34a8e.js";import"./VProgressCircular-ab3499a8.js";import"./resizeObserver-c41c61f0.js";const Nn={title:"Foundation/Shared/Button",component:mn,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSButton:mn,FSIcon:Sn,FSSpan:Fn},template:`
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
    </div>`})},e={args:n.FSButtonSearch},t={args:n.FSButtonSearchMini},r={args:n.FSButtonSearchIcon},a={args:n.FSButtonSave},c={args:n.FSButtonSaveMini},s={args:n.FSButtonSaveIcon},i={args:n.FSButtonCancel},p={args:n.FSButtonCancelMini},u={args:n.FSButtonCancelIcon},l={args:n.FSButtonRemove},m={args:n.FSButtonRemoveMini},S={args:n.FSButtonRemoveIcon},F={args:n.FSButtonDocumentation},d={args:n.FSButtonDocumentationMini},B={args:n.FSButtonDocumentationIcon};var v,g,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(g=o.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,y,b;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearch
}`,...(b=(y=e.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,M,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearchMini
}`,...(C=(M=t.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var D,P,R;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearchIcon
}`,...(R=(P=r.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var h,_,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSave
}`,...(w=(_=a.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var E,k,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSaveMini
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var O,T,j;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSaveIcon
}`,...(j=(T=s.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var q,z,A;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancel
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancelMini
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancelIcon
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Q,U,W;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemove
}`,...(W=(U=l.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveMini
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,nn,on;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveIcon
}`,...(on=(nn=S.parameters)==null?void 0:nn.docs)==null?void 0:on.source}}};var en,tn,rn;F.parameters={...F.parameters,docs:{...(en=F.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonDocumentation
}`,...(rn=(tn=F.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var an,cn,sn;d.parameters={...d.parameters,docs:{...(an=d.parameters)==null?void 0:an.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonDocumentationMini
}`,...(sn=(cn=d.parameters)==null?void 0:cn.docs)==null?void 0:sn.source}}};var pn,un,ln;B.parameters={...B.parameters,docs:{...(pn=B.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonDocumentationIcon
}`,...(ln=(un=B.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};const Qn=["Variations","Search","SearchMini","SearchIcon","Save","SaveMini","SaveIcon","Cancel","CancelMini","CancelIcon","Remove","RemoveMini","RemoveIcon","Documentation","DocumentationMini","DocumentationIcon"];export{i as Cancel,u as CancelIcon,p as CancelMini,F as Documentation,B as DocumentationIcon,d as DocumentationMini,l as Remove,S as RemoveIcon,m as RemoveMini,a as Save,s as SaveIcon,c as SaveMini,e as Search,r as SearchIcon,t as SearchMini,o as Variations,Qn as __namedExportsOrder,Nn as default};
