import{g as Z,t as ee,f as b,o as f,j as g,k as t,l as S,n as k,m as y,p as h,q as T,u as q}from"./vue.esm-bundler-c3efb794.js";import{C as j,u as O}from"./VIcon-c46aeaeb.js";import{_ as K}from"./FSIcon-c64176f8.js";import{S as v}from"./FSSpan-d98aa7bb.js";import{R as M}from"./FSRow-531aa6d1.js";import{C as Q}from"./FSCol-6013107c.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const U=Z({name:"FSCheckbox",components:{FSIcon:K,FSSpan:v,FSRow:M,FSCol:Q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:j.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:r,color:C,editable:o}=ee(e),x=O().getVariants(C.value),l=O().getVariants(j.Dark),W=b(()=>({"--fs-checkbox-cursor":o.value?"pointer":"default","--fs-checkbox-base-color":o.value?r.value?x.base:l.base:l.light,"--fs-checkbox-base-text":o.value?l.base:l.light})),X=b(()=>r.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),Y=b(()=>r.value?"text-button":"text-body");return{style:W,icon:X,font:Y,onToggle:()=>{o.value&&a("update:value",!r.value)}}}});function ne(e,a,r,C,o,x){return f(),g(Q,{width:"hug"},{default:t(()=>[S(M,{width:"hug",align:"center-left"},{default:t(()=>[S(K,{class:"fs-checkbox",size:"checkbox",style:k(e.style),onClick:e.onToggle},{default:t(()=>[y(h(e.icon),1)]),_:1},8,["style","onClick"]),T(e.$slots,"default",{},()=>[e.$props.label?(f(),g(v,{key:0,class:"fs-checkbox-label",style:k(e.style),font:e.font,onClick:e.onToggle},{default:t(()=>[y(h(e.$props.label),1)]),_:1},8,["style","font","onClick"])):q("",!0)])]),_:3}),T(e.$slots,"description",{},()=>[e.$props.description?(f(),g(v,{key:0,class:"fs-checkbox-description",font:"text-underline",style:k(e.style)},{default:t(()=>[y(h(e.$props.description),1)]),_:1},8,["style"])):q("",!0)])]),_:3})}const n=ae(U,[["render",ne]]);U.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};const me={title:"Foundation/Shared/Checkbox",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Checkbox v-bind="args" v-model:value="args.value" />
</v-container>
`,c={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},p={args:{args:{value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},u={args:{args:{label:"Checkbox label",value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},i={args:{args:{label:"Checkbox label",value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},d={args:{args:{label:"Checkbox label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},m={args:{args:{label:"Checkbox label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})};var N,F,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    args: {
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var $,L,_;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    args: {
      value: false,
      editable: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(_=(L=p.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var B,E,w;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Checkbox label",
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(w=(E=u.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var D,R,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Checkbox label",
      value: false,
      editable: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(I=(R=i.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var z,P,A;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Checkbox label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(A=(P=d.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Checkbox label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false,
      editable: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Checkbox
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const be=["Solo","SoloNotEditable","Label","LabelNotEditable","Description","DescriptionNotEditable"];export{d as Description,m as DescriptionNotEditable,u as Label,i as LabelNotEditable,c as Solo,p as SoloNotEditable,be as __namedExportsOrder,me as default};
