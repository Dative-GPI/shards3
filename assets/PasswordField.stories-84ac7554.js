import{E as R,d as k,e as i,H as x,I as V,W as T,X as $,J as g,n as _,O as F,Q as O,R as B,q as U}from"./vue.esm-bundler-7e157d2d.js";import{F as h}from"./FSTextField-f103263d.js";import{_ as P}from"./FSButton-e381f01a.js";import{u as j,C as u}from"./useColors-4000b712.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{T as E,F as H}from"./FSForm-6f7b1a67.js";import{_ as q}from"./FSCol-7c29272b.js";import{_ as I}from"./FSRow-db172e67.js";import"./FSSpan-225601c1.js";import"./useSlots-db3342e3.js";import"./VField-483d98e3.js";import"./index-bda29209.js";import"./useRender-91b27a68.js";import"./theme-67ffe9ae.js";import"./transition-b4c159ac.js";import"./VInput-1a2cc3a3.js";import"./locale-c9528b1a.js";import"./VIcon-f6cc7834.js";import"./color-e501cff3.js";import"./tag-831e49a1.js";import"./density-c657e4cb.js";import"./loader-7867d039.js";import"./rounded-fe596c98.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-5057dcd1.js";import"./VTextField-85193af7.js";import"./index-37e9655b.js";import"./FSCard-38a28c75.js";import"./css-b03ad87d.js";import"./FSIcon-0a8a35f6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTimeZone-3e466d1a.js";import"./useTranslations-cd0b055a.js";const C=R({name:"FSPasswordField",components:{FSTextField:h,FSButton:P},props:{modelValue:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{getColors:r}=j(),n=r(u.Light),d=r(u.Dark),s=k(!0),m=i(()=>e.editable?{"--fs-password-field-cursor":"pointer","--fs-password-field-color":d.base,"--fs-password-field-hover-color":d.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-color":n.dark,"--fs-password-field-hover-color":n.dark}),o=i(()=>s.value?"password":"text"),a=i(()=>s.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:u,type:o,icon:a,style:m,onToggle:()=>{e.editable&&(s.value=!s.value)}}}});function N(e,r,n,d,s,m){return x(),V(h,_({type:e.type,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),T({"append-inner":g(()=>[F(e.$slots,"append-inner",{},()=>[U(P,{variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,icon:e.icon,onClick:e.onToggle},null,8,["editable","color","icon","onClick"])])]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:g(c=>[F(e.$slots,a,O(B(c)))])}))]),1040,["type","editable","modelValue"])}const p=D(C,[["render",N]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPasswordField.vue"]};const he={title:"Foundation/Shared/Input fields/PasswordField",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:p,FSCol:q},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSPasswordField
        label="Password"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Required password, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Uneditable password, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:E}},render:(e,{argTypes:r})=>({components:{FSForm:H,FSPasswordField:p,FSCol:q,FSRow:I},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var v,f,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSPasswordField,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSPasswordField
        label="Password"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Required password, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Uneditable password, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,S,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSPasswordField,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSPasswordField
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const Pe=["Variations","Rules"];export{l as Rules,t as Variations,Pe as __namedExportsOrder,he as default};
