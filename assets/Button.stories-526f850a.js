import{B as F}from"./FSButton-51769087.js";import{_ as se}from"./FSIcon-c64176f8.js";import{S as ce}from"./FSSpan-d98aa7bb.js";import{F as e}from"./FSButtons-21af51fc.js";import"./vue.esm-bundler-c3efb794.js";import"./VIcon-c46aeaeb.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSRow-531aa6d1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VBtn-34cdb178.js";import"./rounded-c9feffd5.js";import"./loader-5b2fe5c8.js";import"./VDefaultsProvider-48f77b38.js";import"./index-03576ef1.js";const Ce={title:"Foundation/Shared/Button",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:e.FSButtonSearch},r={args:e.FSButtonSearchMini},o={args:e.FSButtonSearchIcon},t={args:e.FSButtonSave},a={args:e.FSButtonSaveMini},s={args:e.FSButtonSaveIcon},c={args:e.FSButtonCancel},p={args:e.FSButtonCancelMini},m={args:e.FSButtonCancelIcon},i={args:e.FSButtonRemove},u={args:e.FSButtonRemoveMini},S={args:e.FSButtonRemoveIcon},l={args:{args:{full:!1,color:"primary"}},render:(g,{argTypes:B})=>({components:{Button:F,Icon:se,Span:ce},props:Object.keys(B),setup(){return{...g}},template:`
    <div style="display: flex;">
        <Button v-bind="args">
            <template #prepend>
                <Icon size="m">
                    mdi-plus-circle-outline
                </Icon>
            </template>
            <Span font="text-button">
                Create
            </Span>
        </Button>
    </div>`})},d={args:{args:{full:!1,color:"warning"}},render:(g,{argTypes:B})=>({components:{Button:F,Icon:se,Span:ce},props:Object.keys(B),setup(){return{...g}},template:`
    <v-container fluid class="pa-0 ma-0" style="display: flex;">
        <Button v-bind="args">
            <Span font="text-button">
                Remove
            </Span>
            <template #append>
                <Icon size="m">
                    mdi-minus-circle-outline
                </Icon>
            </template>
        </Button>
    </v-container>`})};var v,I,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearch
}`,...(f=(I=n.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var y,M,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearchMini
}`,...(C=(M=r.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var P,R,h;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSearchIcon
}`,...(h=(R=o.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var b,x,k;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSave
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var O,T,_;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSaveMini
}`,...(_=(T=a.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var j,z,w;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonSaveIcon
}`,...(w=(z=s.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var A,E,q;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancel
}`,...(q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var D,G,H;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancelMini
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonCancelIcon
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var N,Q,U;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemove
}`,...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveMini
}`,...(X=(W=u.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: FSButtonsProps.FSButtonRemoveIcon
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,re;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    args: {
      full: false,
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Button,
      Icon,
      Span
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex;">
        <Button v-bind="args">
            <template #prepend>
                <Icon size="m">
                    mdi-plus-circle-outline
                </Icon>
            </template>
            <Span font="text-button">
                Create
            </Span>
        </Button>
    </div>\`
  })
}`,...(re=(ne=l.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,te,ae;d.parameters={...d.parameters,docs:{...(oe=d.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    args: {
      full: false,
      color: "warning"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Button,
      Icon,
      Span
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <v-container fluid class="pa-0 ma-0" style="display: flex;">
        <Button v-bind="args">
            <Span font="text-button">
                Remove
            </Span>
            <template #append>
                <Icon size="m">
                    mdi-minus-circle-outline
                </Icon>
            </template>
        </Button>
    </v-container>\`
  })
}`,...(ae=(te=d.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Pe=["Search","SearchMini","SearchIcon","Save","SaveMini","SaveIcon","Cancel","CancelMini","CancelIcon","Remove","RemoveMini","RemoveIcon","PrependIcon","AppendIcon"];export{d as AppendIcon,c as Cancel,m as CancelIcon,p as CancelMini,l as PrependIcon,i as Remove,S as RemoveIcon,u as RemoveMini,t as Save,s as SaveIcon,a as SaveMini,n as Search,o as SearchIcon,r as SearchMini,Pe as __namedExportsOrder,Ce as default};
