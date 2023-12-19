import{m as F,t as S,k as P,f as d,n as h,q,G as k,H as $,v as n,x as C,z as V,A as x,K as T,C as B,y as D,I,J as z}from"./vue.esm-bundler-d10a8528.js";import{C as p,u as N}from"./VIcon-57787e8c.js";import{F as v}from"./FSTextField-cf637ab1.js";import{_ as g}from"./FSIcon-27c19cbf.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-abccc23b.js";import"./FSCol-b1484c92.js";import"./index-a10acb8c.js";import"./VInput-45446a90.js";import"./locale-5c0ffb6b.js";import"./rounded-6f26bd38.js";import"./loader-d94ba622.js";import"./easing-9998643d.js";const y=F({name:"FSPasswordField",components:{FSTextField:v,FSIcon:g},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:String,required:!1,default:null},color:{type:String,required:!1,default:p.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e){const{editable:a}=S(e),r=P(!0),l=N().getVariants(p.Dark),i=d(()=>({"--fs-password-field-cursor":a.value?"pointer":"default","--fs-password-field-base-text":a.value?l.base:l.light,"--fs-password-field-dark-text":a.value?l.dark:l.light})),u=d(()=>r.value?"password":"text"),o=d(()=>r.value?"mdi-eye-off-outline":"mdi-eye-outline");return{type:u,icon:o,style:i,onToggle:()=>{a.value&&(r.value=!r.value)}}}});function O(e,a,r,l,i,u){return h(),q(v,B({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:e.$props.value,"onUpdate:value":a[0]||(a[0]=o=>e.$emit("update:value",o))},e.$attrs),k({"append-inner":n(()=>[C(g,{class:"fs-password-field-icon",size:"m",style:T(e.style),onClick:e.onToggle},{default:n(()=>[V(x(e.icon),1)]),_:1},8,["style","onClick"])]),_:2},[$(e.$slots,(o,t)=>({name:t,fn:n(w=>[D(e.$slots,t,I(z(w)))])}))]),1040,["label","description","type","color","required","editable","value"])}const b=R(y,[["render",O]]);y.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const Z={title:"Foundation/Shared/Input fields/PasswordField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"Password",value3:null,value4:"Password"}},render:(e,{argTypes:a})=>({components:{FSPasswordField:b},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSPasswordField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value2" label="Password - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value3" label="Required password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>`})};var m,f,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Password",
      value3: null,
      value4: "Password"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSPasswordField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSPasswordField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value2" label="Password - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value3" label="Required password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>\`
  })
}`,...(c=(f=s.parameters)==null?void 0:f.docs)==null?void 0:c.source}}};const ee=["Variations"];export{s as Variations,ee as __namedExportsOrder,Z as default};
