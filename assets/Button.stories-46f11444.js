import{_ as Sn}from"./FSButton-8beeb94f.js";import{_ as mn}from"./FSIcon-91e509a2.js";import{_ as Fn}from"./FSSpan-f8d57311.js";import{F as n}from"./FSButtons-484de730.js";import"./vue.esm-bundler-bf312605.js";import"./useColors-9da280d0.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSRow-25071905.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VBtn-aa67d9ce.js";import"./VIcon-0f430520.js";import"./rounded-66ea04d8.js";import"./group-0ed4b5d3.js";import"./locale-69c441bd.js";import"./loader-9bad023d.js";import"./VDefaultsProvider-98093e44.js";import"./index-8c347284.js";import"./resizeObserver-34e330da.js";const Vn={title:"Foundation/Shared/Button",component:Sn,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSButton:Sn,FSIcon:mn,FSSpan:Fn},template:`
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
    </div>`})},e={args:n.FSButtonSearch},t={args:n.FSButtonSearchMini},r={args:n.FSButtonSearchIcon},a={args:n.FSButtonSave},c={args:n.FSButtonSaveMini},s={args:n.FSButtonSaveIcon},i={args:n.FSButtonCancel},p={args:n.FSButtonCancelMini},u={args:n.FSButtonCancelIcon},l={args:n.FSButtonRemove},S={args:n.FSButtonRemoveMini},m={args:n.FSButtonRemoveIcon},F={args:n.FSButtonDocumentation},d={args:n.FSButtonDocumentationMini},B={args:n.FSButtonDocumentationIcon};var v,g,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(W=(U=l.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveMini
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,nn,on;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveIcon
}`,...(on=(nn=m.parameters)==null?void 0:nn.docs)==null?void 0:on.source}}};var en,tn,rn;F.parameters={...F.parameters,docs:{...(en=F.parameters)==null?void 0:en.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonDocumentation
}`,...(rn=(tn=F.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var an,cn,sn;d.parameters={...d.parameters,docs:{...(an=d.parameters)==null?void 0:an.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonDocumentationMini
}`,...(sn=(cn=d.parameters)==null?void 0:cn.docs)==null?void 0:sn.source}}};var pn,un,ln;B.parameters={...B.parameters,docs:{...(pn=B.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonDocumentationIcon
}`,...(ln=(un=B.parameters)==null?void 0:un.docs)==null?void 0:ln.source}}};const On=["Variations","Search","SearchMini","SearchIcon","Save","SaveMini","SaveIcon","Cancel","CancelMini","CancelIcon","Remove","RemoveMini","RemoveIcon","Documentation","DocumentationMini","DocumentationIcon"];export{i as Cancel,u as CancelIcon,p as CancelMini,F as Documentation,B as DocumentationIcon,d as DocumentationMini,l as Remove,m as RemoveIcon,S as RemoveMini,a as Save,s as SaveIcon,c as SaveMini,e as Search,r as SearchIcon,t as SearchMini,o as Variations,On as __namedExportsOrder,Vn as default};
