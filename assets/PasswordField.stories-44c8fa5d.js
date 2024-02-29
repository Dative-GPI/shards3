import{E as R,d as k,e as d,H as $,I as T,U as x,V as H,J as c,A as B,L as g,O,P as U,z as j}from"./vue.esm-bundler-a27e881e.js";import{F as S}from"./FSTextField-2674ecc2.js";import{F as q}from"./FSButton-1f4fb6d7.js";import{u as f,C as i}from"./useColors-64c3c523.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSCol-5941d279.js";import{_ as E}from"./FSRow-e0b07355.js";import{T as I,V as L}from"./VForm-b9b36940.js";import"./FSSpan-23926a6a.js";import"./useSlots-f8c8bb5a.js";import"./VSpacer-0b076bec.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./VIcon-05012a67.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./FSIcon-98d9a930.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./css-fb381997.js";import"./useTimeZone-035f95ae.js";import"./useTranslations-0799e799.js";const C=R({name:"FSPasswordField",components:{FSTextField:S,FSButton:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const r=f().getColors(i.Light),t=f().getColors(i.Dark),a=k(!0),p=d(()=>e.editable?{"--fs-password-field-cursor":"pointer","--fs-password-field-color":t.base,"--fs-password-field-hover-color":t.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-color":r.dark,"--fs-password-field-hover-color":r.dark}),m=d(()=>a.value?"password":"text"),s=d(()=>a.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:i,type:m,icon:s,style:p,onToggle:()=>{e.editable&&(a.value=!a.value)}}}});function N(e,r,t,a,p,m){return $(),T(S,B({label:e.$props.label,description:e.$props.description,type:e.type,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),x({"append-inner":c(()=>[g(e.$slots,"append-inner",{},()=>[j(q,{variant:"icon",icon:e.icon,editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onToggle},null,8,["icon","editable","color","onClick"])])]),_:2},[H(e.$slots,(s,n)=>({name:n,fn:c(V=>[g(e.$slots,n,O(U(V)))])}))]),1040,["label","description","type","hideHeader","required","editable","modelValue"])}const u=D(C,[["render",N]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const $e={title:"Foundation/Shared/Input fields/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:u,FSCol:P},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:I}},render:(e,{argTypes:r})=>({components:{VForm:L,FSPasswordField:u,FSCol:P,FSRow:E},props:Object.keys(r),setup(){return{...e}},template:`
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
