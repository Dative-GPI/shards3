import{m as S,t as P,k as h,f as n,n as q,q as k,J as $,K as C,u as i,B as x,C as V,D as B,z as T,F as D,v as U,x as z,y as I}from"./vue.esm-bundler-29da8e49.js";import{C as u,u as m}from"./useColors-ad83dc40.js";import{F as y}from"./FSTextField-5c145b19.js";import{_ as b}from"./FSIcon-f37b61fc.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-46176227.js";import"./FSCol-322e7463.js";import"./FSRow-99784c66.js";import"./VSpacer-353093b4.js";import"./VIcon-8d401865.js";import"./index-3038ad46.js";import"./VInput-ee7ba7bd.js";import"./locale-542d2ec8.js";import"./rounded-6c346ce6.js";import"./loader-549251e9.js";const w=S({name:"FSPasswordField",components:{FSTextField:y,FSIcon:b},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:String,required:!1,default:null},color:{type:String,required:!1,default:u.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e){const{editable:r}=P(e),a=h(!0),t=m().getColors(u.Light),d=m().getColors(u.Dark),p=n(()=>r.value?{"--fs-password-field-cursor":"pointer","--fs-password-field-base-text":d.base,"--fs-password-field-dark-text":d.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-base-text":t.dark,"--fs-password-field-dark-text":t.dark}),o=n(()=>a.value?"password":"text"),s=n(()=>a.value?"mdi-eye-off-outline":"mdi-eye-outline");return{type:o,icon:s,style:p,onToggle:()=>{r.value&&(a.value=!a.value)}}}});function R(e,r,a,t,d,p){return q(),k(y,D({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:e.$props.value,"onUpdate:value":r[0]||(r[0]=o=>e.$emit("update:value",o))},e.$attrs),$({"append-inner":i(()=>[x(b,{class:"fs-password-field-icon",size:"m",style:T(e.style),onClick:e.onToggle},{default:i(()=>[V(B(e.icon),1)]),_:1},8,["style","onClick"])]),_:2},[C(e.$slots,(o,s)=>({name:s,fn:i(f=>[U(e.$slots,s,z(I(f)))])}))]),1040,["label","description","type","color","required","editable","value"])}const F=N(w,[["render",R]]);w.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const re={title:"Foundation/Shared/Input fields/PasswordField",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:"Password",value3:null,value4:"Password"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:F},props:Object.keys(r),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSPasswordField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value2" label="Password - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value3" label="Required password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>`})};var c,v,g;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      <FSPasswordField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>\`
  })
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};const ae=["Variations"];export{l as Variations,ae as __namedExportsOrder,re as default};
