import{D as R,j as k,d,G as $,H as T,W as x,U as H,I as c,L as g,z as B,y as O,O as U,P as _}from"./vue.esm-bundler-17cb12ce.js";import{u as f,C as i}from"./useColors-04b7b26f.js";import{T as j}from"./rules-8f4289e2.js";import{F as S}from"./FSTextField-867bbd59.js";import{_ as q}from"./FSButton-8130144f.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSCol-03fc1f3a.js";import{_ as E}from"./FSRow-9ce6aace.js";import{V as G}from"./VForm-59ed5e27.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c4ac2200.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";import"./FSSpan-2051def6.js";import"./VSpacer-bacd1ff2.js";import"./color-d421c344.js";import"./VTextField-99deef4a.js";import"./VField-d3cacb6a.js";import"./index-c6c13bcc.js";import"./transition-4d995a4a.js";import"./VInput-9e5eb041.js";import"./locale-2e51016c.js";import"./VIcon-343130ca.js";import"./density-cdecea01.js";import"./loader-8675b45d.js";import"./rounded-d330abbe.js";import"./forwardRefs-e658ad70.js";import"./index-c7efe106.js";import"./FSIcon-16c55386.js";import"./VBtn-7cd9fe35.js";import"./variant-1223b1b3.js";import"./elevation-cb67bcb5.js";import"./group-a63c5543.js";import"./dimensions-10b1de84.js";import"./router-021df22c.js";import"./index-acf26303.js";import"./VDefaultsProvider-1bba8b3c.js";import"./VProgressCircular-132e7099.js";import"./resizeObserver-e7ce026e.js";import"./LexicalSelection.prod-b0bd0f79.js";const C=R({name:"FSPasswordField",components:{FSTextField:S,FSButton:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const r=f().getColors(i.Light),t=f().getColors(i.Dark),a=k(!0),p=d(()=>e.editable?{"--fs-password-field-cursor":"pointer","--fs-password-field-color":t.base,"--fs-password-field-hover-color":t.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-color":r.dark,"--fs-password-field-hover-color":r.dark}),m=d(()=>a.value?"password":"text"),s=d(()=>a.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:i,type:m,icon:s,style:p,onToggle:()=>{e.editable&&(a.value=!a.value)}}}});function I(e,r,t,a,p,m){return $(),T(S,O({label:e.$props.label,description:e.$props.description,type:e.type,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),x({"append-inner":c(()=>[g(e.$slots,"append-inner",{},()=>[B(q,{variant:"icon",icon:e.icon,editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onToggle},null,8,["icon","editable","color","onClick"])])]),_:2},[H(e.$slots,(s,n)=>({name:n,fn:c(V=>[g(e.$slots,n,U(_(V)))])}))]),1040,["label","description","type","hideHeader","required","editable","modelValue"])}const u=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const $e={title:"Foundation/Shared/Input fields/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:u,FSCol:P},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:j}},render:(e,{argTypes:r})=>({components:{VForm:G,FSPasswordField:u,FSCol:P,FSRow:E},props:Object.keys(r),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
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
    </v-form>`})};var v,F,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var w,y,h;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    <v-form v-model="args.valid">
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
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const Te=["Variations","Rules"];export{l as Rules,o as Variations,Te as __namedExportsOrder,$e as default};
