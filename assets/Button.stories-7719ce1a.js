import{_ as $}from"./FSButton-37beb5c2.js";import{_ as nn}from"./FSIcon-27c19cbf.js";import{F as on}from"./FSSpan-abccc23b.js";import{F as n}from"./FSButtons-e33b5f46.js";import"./vue.esm-bundler-d10a8528.js";import"./VIcon-57787e8c.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSRow-c01fca12.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VBtn-3a7ed80e.js";import"./rounded-6f26bd38.js";import"./group-6a276766.js";import"./locale-5c0ffb6b.js";import"./loader-d94ba622.js";import"./VDefaultsProvider-1a074de6.js";import"./index-915a05f1.js";import"./resizeObserver-6e691bac.js";const xn={title:"Foundation/Shared/Button",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSButton:$,FSIcon:nn,FSSpan:on},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSButton color="primary">
            <template #prepend>
                <FSIcon size="m">
                    mdi-plus-circle-outline
                </FSIcon>
            </template>
            <FSSpan font="text-button">
                Create
            </FSSpan>
        </FSButton>
        <FSButton color="warning">
            <FSSpan font="text-button">
                Disable
            </FSSpan>
        </FSButton>
        <FSButton color="error">
            <FSSpan font="text-button">
                Remove
            </FSSpan>
            <template #append>
                <FSIcon size="m">
                    mdi-minus-circle-outline
                </FSIcon>
            </template>
        </FSButton>
        <FSButton color="success">
            <template #prepend>
                <FSIcon size="m">
                    mdi-pencil
                </FSIcon>
            </template>
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
      </div>
    </div>`})},e={args:n.FSButtonSearch},t={args:n.FSButtonSearchMini},r={args:n.FSButtonSearchIcon},a={args:n.FSButtonSave},s={args:n.FSButtonSaveMini},c={args:n.FSButtonSaveIcon},i={args:n.FSButtonCancel},p={args:n.FSButtonCancelMini},l={args:n.FSButtonCancelIcon},u={args:n.FSButtonRemove},S={args:n.FSButtonRemoveMini},m={args:n.FSButtonRemoveIcon};var d,F,B;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
                <FSIcon size="m">
                    mdi-plus-circle-outline
                </FSIcon>
            </template>
            <FSSpan font="text-button">
                Create
            </FSSpan>
        </FSButton>
        <FSButton color="warning">
            <FSSpan font="text-button">
                Disable
            </FSSpan>
        </FSButton>
        <FSButton color="error">
            <FSSpan font="text-button">
                Remove
            </FSSpan>
            <template #append>
                <FSIcon size="m">
                    mdi-minus-circle-outline
                </FSIcon>
            </template>
        </FSButton>
        <FSButton color="success">
            <template #prepend>
                <FSIcon size="m">
                    mdi-pencil
                </FSIcon>
            </template>
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
      </div>
    </div>\`
  })
}`,...(B=(F=o.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var v,g,I;e.parameters={...e.parameters,docs:{...(v=e.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearch
}`,...(I=(g=e.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var f,x,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearchMini
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,b,M;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearchIcon
}`,...(M=(b=r.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var R,h,P;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSave
}`,...(P=(h=a.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var _,w,z;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSaveMini
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var D,k,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSaveIcon
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var E,O,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancel
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var j,q,A;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancelMini
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,H,J;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancelIcon
}`,...(J=(H=l.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemove
}`,...(N=(L=u.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var Q,U,W;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveMini
}`,...(W=(U=S.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveIcon
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const yn=["Variations","Search","SearchMini","SearchIcon","Save","SaveMini","SaveIcon","Cancel","CancelMini","CancelIcon","Remove","RemoveMini","RemoveIcon"];export{i as Cancel,l as CancelIcon,p as CancelMini,u as Remove,m as RemoveIcon,S as RemoveMini,a as Save,c as SaveIcon,s as SaveMini,e as Search,r as SearchIcon,t as SearchMini,o as Variations,yn as __namedExportsOrder,xn as default};
