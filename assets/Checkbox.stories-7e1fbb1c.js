import{g as X,t as Y,f as b,o as g,j as f,k as t,l as S,n as k,m as y,p as h,q as T}from"./vue.esm-bundler-3a71544d.js";import{C as Z,u as q}from"./useColors-f8bf713a.js";import{F as H}from"./FSIcon-7efa0d30.js";import{_ as v,b as J,c as ee}from"./FSRow-c6493f26.js";import{_ as K}from"./FSCol-b5bd7e48.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const M=X({name:"FSCheckbox",components:{FSIcon:H,FSSpan:v,FSRow:J,FSCol:K},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:Z.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:o,color:C,editable:r}=Y(e),x=q().getVariants(C.value),l=q().getDark(),Q=b(()=>({"--fs-checkbox-cursor":r.value?"pointer":"default","--fs-checkbox-base-color":r.value?o.value?x.base:l.base:l.light,"--fs-checkbox-base-text":r.value?l.base:l.light})),U=b(()=>o.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),W=b(()=>o.value?"text-button":"text-body");return{style:Q,icon:U,font:W,onToggle:()=>{r.value&&a("update:value",!o.value)}}}});function ae(e,a,o,C,r,x){return g(),f(K,{width:"hug",height:"hug"},{default:t(()=>[S(J,{width:"hug",height:"hug"},{default:t(()=>[S(H,{class:"fs-checkbox",size:"checkbox",style:k(e.style),onClick:e.onToggle},{default:t(()=>[y(h(e.icon),1)]),_:1},8,["style","onClick"]),e.$props.label?(g(),f(v,{key:0,class:"fs-checkbox-label",style:k(e.style),font:e.font,onClick:e.onToggle},{default:t(()=>[y(h(e.$props.label),1)]),_:1},8,["style","font","onClick"])):T("",!0)]),_:1}),e.$props.description?(g(),f(v,{key:0,class:"fs-checkbox-description",font:"text-overline",style:k(e.style)},{default:t(()=>[y(h(e.$props.description),1)]),_:1},8,["style"])):T("",!0)]),_:1})}const n=ee(M,[["render",ae]]);M.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};const ue={title:"Foundation/Checkbox",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Checkbox v-bind="args" v-model:value="args.value" />
</v-container>
`,c={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},p={args:{args:{value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},u={args:{args:{label:"Checkbox label",value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},i={args:{args:{label:"Checkbox label",value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},d={args:{args:{label:"Checkbox label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})},m={args:{args:{label:"Checkbox label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:s})};var _,j,F;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(F=(j=c.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var O,N,V;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(N=p.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var L,$,B;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(B=($=u.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var E,w,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var R,z,I;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(I=(z=d.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var P,A,G;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(A=m.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const ie=["Solo","SoloNotEditable","Label","LabelNotEditable","Description","DescriptionNotEditable"];export{d as Description,m as DescriptionNotEditable,u as Label,i as LabelNotEditable,c as Solo,p as SoloNotEditable,ie as __namedExportsOrder,ue as default};
