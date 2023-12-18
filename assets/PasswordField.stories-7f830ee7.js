import{g as $,t as T,C,f as i,o as V,j as E,E as N,F as h,k as d,l as B,m as j,p as O,n as D,x as z,q as I,G as _,H as R}from"./vue.esm-bundler-c3efb794.js";import{C as m,u as G}from"./VIcon-c46aeaeb.js";import{T as F}from"./FSTextField-390daac0.js";import{_ as q}from"./FSIcon-c64176f8.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-d98aa7bb.js";import"./FSCol-6013107c.js";import"./index-f39a8f63.js";import"./VInput-53fffe8c.js";import"./loader-5b2fe5c8.js";import"./rounded-c9feffd5.js";import"./easing-9998643d.js";const S=$({name:"FSPasswordField",components:{FSTextField:F,FSIcon:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:String,required:!1,default:null},color:{type:String,required:!1,default:m.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e){const{editable:a}=T(e),r=C(!0),p=i(()=>r.value?"password":"text"),c=i(()=>r.value?"mdi-eye-off-outline":"mdi-eye-outline"),t=G().getVariants(m.Dark),s=i(()=>({"--fs-password-field-cursor":a.value?"pointer":"default","--fs-password-field-base-text":a.value?t.base:t.light}));return{type:p,icon:c,style:s,onToggle:()=>{a.value&&(r.value=!r.value)}}}});function L(e,a,r,p,c,t){return V(),E(F,z({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:e.$props.value,"onUpdate:value":a[0]||(a[0]=s=>e.$emit("update:value",s))},e.$attrs),N({append:d(()=>[B(q,{class:"fs-password-field-icon",size:"m",style:D(e.style),onClick:e.onToggle},{default:d(()=>[j(O(e.icon),1)]),_:1},8,["style","onClick"])]),_:2},[h(e.$slots,(s,l)=>({name:l,fn:d(P=>[I(e.$slots,l,_(R(P)))])}))]),1040,["label","description","type","color","required","editable","value"])}const u=H(S,[["render",L]]);S.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const se={title:"Foundation/Shared/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},k=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <PasswordField v-bind="args" v-model:value="args.value" />
</v-container>
`,o={args:{args:{label:"Editable",value:"Password",color:"primary",editable:!0}},render:(e,{argTypes:a})=>({components:{PasswordField:u},props:Object.keys(a),setup(){return{...e}},template:k})},n={args:{args:{label:"Not editable",value:"Password",color:"warning",editable:!1}},render:(e,{argTypes:a})=>({components:{PasswordField:u},props:Object.keys(a),setup(){return{...e}},template:k})};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Editable",
      value: "Password",
      color: "primary",
      editable: true
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      PasswordField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,v,w;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Not editable",
      value: "Password",
      color: "warning",
      editable: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      PasswordField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const oe=["Editable","NotEditable"];export{o as Editable,n as NotEditable,oe as __namedExportsOrder,se as default};
