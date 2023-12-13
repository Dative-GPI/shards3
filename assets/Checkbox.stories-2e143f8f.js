import{g as U,t as W,f,j as k,o as y,k as h,l,m as q,n as v,p as C,q as S,u as _}from"./vue.esm-bundler-66d46254.js";import{C as X,u as j}from"./useColors-c3e7013c.js";import{F as Y}from"./FSIcon-a97ae0a7.js";import{_ as x,F as Z,b as ee}from"./FSRow-c0589bf9.js";import{F as ae}from"./FSCol-b1d44a51.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const M=U({name:"FSCheckbox",components:{FSIcon:Y,FSSpan:x,FSRow:Z,FSCol:ae},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:X.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:r,color:F,editable:t}=W(e),T=j().getVariants(F.value),s=j().getDark(),b=f(()=>({"--fs-checkbox-cursor":t.value?"pointer":"default","--fs-checkbox-base-color":t.value?r.value?T.base:s.base:s.light,"--fs-checkbox-base-text":t.value?s.base:s.light})),g=f(()=>r.value?"mdi-checkbox-marked":"mdi-checkbox-blank-outline"),Q=f(()=>r.value?"text-button":"text-body");return{style:b,icon:g,font:Q,onToggle:()=>{t.value&&a("update:value",!r.value)}}}});function ne(e,a,r,F,t,T){const s=k("FSIcon"),b=k("FSRow"),g=k("FSCol");return y(),h(g,{width:"hug",height:"hug"},{default:l(()=>[q(b,{width:"hug",height:"hug"},{default:l(()=>[q(s,{class:"fs-checkbox",size:"checkbox",style:v(e.style),onClick:e.onToggle},{default:l(()=>[C(S(e.icon),1)]),_:1},8,["style","onClick"]),e.$props.label?(y(),h(x,{key:0,class:"fs-checkbox-label",style:v(e.style),font:e.font,onClick:e.onToggle},{default:l(()=>[C(S(e.$props.label),1)]),_:1},8,["style","font","onClick"])):_("",!0)]),_:1}),e.$props.description?(y(),h(x,{key:0,class:"fs-checkbox-description",font:"text-overline",style:v(e.style)},{default:l(()=>[C(S(e.$props.description),1)]),_:1},8,["style"])):_("",!0)]),_:1})}const n=ee(M,[["render",ne]]);M.__docgenInfo={displayName:"FSCheckbox",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCheckbox.vue"]};const ie={title:"Foundation/Checkbox",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Checkbox v-bind="args" v-model:value="args.value" />
</v-container>
`,c={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:o})},p={args:{args:{value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:o})},u={args:{args:{label:"Checkbox label",value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:o})},i={args:{args:{label:"Checkbox label",value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:o})},d={args:{args:{label:"Checkbox label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:o})},m={args:{args:{label:"Checkbox label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1,editable:!1}},render:(e,{argTypes:a})=>({components:{Checkbox:n},props:Object.keys(a),setup(){return{...e}},template:o})};var O,N,V;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var L,$,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=($=p.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var B,E,D;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var I,R,z;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(z=(R=i.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var P,A,G;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(A=d.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const de=["Solo","SoloNotEditable","Label","LabelNotEditable","Description","DescriptionNotEditable"];export{d as Description,m as DescriptionNotEditable,u as Label,i as LabelNotEditable,c as Solo,p as SoloNotEditable,de as __namedExportsOrder,ie as default};
