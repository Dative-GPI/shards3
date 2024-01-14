import{n as V,t as R,l as x,f as i,q as $,u as T,L as B,M as _,v as u,x as f,B as D,D as z,E as O,A as U,G as j,y as I,z as N}from"./vue.esm-bundler-722d5586.js";import{C as p,u as v}from"./useTimeZone-e2d91037.js";import{F as q}from"./FSTextField-525dcab2.js";import{_ as P}from"./FSIcon-420cc903.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as C}from"./FSCol-73c0912e.js";import{_ as L}from"./FSRow-adbe3642.js";import{T as E,V as H}from"./FSTextFields-01d4cdfb.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-25dfede3.js";import"./VSpacer-14789593.js";import"./VIcon-3294e246.js";import"./VField-ef78f264.js";import"./index-debb29c6.js";import"./VInput-157b0d5f.js";import"./locale-4b40caf6.js";import"./rounded-0d60e9e4.js";import"./loader-40ab58f6.js";const k=V({name:"FSPasswordField",components:{FSTextField:q,FSIcon:P},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},color:{type:String,required:!1,default:p.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{editable:r}=R(e),a=x(!0),n=v().getColors(p.Light),d=v().getColors(p.Dark),c=i(()=>r.value?{"--fs-password-field-cursor":"pointer","--fs-password-field-base-text":d.base,"--fs-password-field-dark-text":d.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-base-text":n.dark,"--fs-password-field-dark-text":n.dark}),s=i(()=>a.value?"password":"text"),l=i(()=>a.value?"mdi-eye-off-outline":"mdi-eye-outline");return{type:s,icon:l,style:c,onToggle:()=>{r.value&&(a.value=!a.value)}}}});function K(e,r,a,n,d,c){return $(),T(q,j({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),B({"append-inner":u(()=>[f(e.$slots,"append-inner",{},()=>[D(P,{class:"fs-password-field-icon",size:"m",style:U(e.style),onClick:e.onToggle},{default:u(()=>[z(O(e.icon),1)]),_:1},8,["style","onClick"])])]),_:2},[_(e.$slots,(s,l)=>({name:l,fn:u(g=>[f(e.$slots,l,I(N(g)))])}))]),1040,["label","description","type","color","required","editable","modelValue"])}const m=G(k,[["render",K]]);k.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const pe={title:"Foundation/Shared/Input fields/PasswordField",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:"Hello there",value3:null,value4:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:m,FSCol:C},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSPasswordField
        label="Password - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        color="primary"
        label="Password - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        color="warning" :required="true"
        label="Required password - warning color"
        description="Description for this field"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},t={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:E}},render:(e,{argTypes:r})=>({components:{VForm:H,FSPasswordField:m,FSCol:C,FSRow:L},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid" v-lazy>
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
    </v-form>`})};var F,b,y;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: null,
      value4: "General Kenobi"
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
        label="Password - dark color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        color="primary"
        label="Password - primary color"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        color="warning" :required="true"
        label="Required password - warning color"
        description="Description for this field"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSPasswordField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var w,S,h;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      VForm,
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
    <v-form v-model="args.valid" v-lazy>
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
    </v-form>\`
  })
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const me=["Variations","Rules"];export{t as Rules,o as Variations,me as __namedExportsOrder,pe as default};
