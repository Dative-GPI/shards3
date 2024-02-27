import{D as R,j as k,d,G as $,H as T,S as x,U as H,I as c,L as g,y as B,z as O,O as U,P as _}from"./vue.esm-bundler-7bc65811.js";import{u as f,C as i}from"./useColors-6dff70d5.js";import{T as j}from"./rules-041f2544.js";import{F as h}from"./FSTextField-28e527db.js";import{_ as q}from"./FSButton-f8d3e800.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSCol-8dc0322a.js";import{_ as E}from"./FSRow-ae4caba9.js";import{V as G}from"./VForm-1b38991a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-0a9d2dbd.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./FSSpan-7f9d89a0.js";import"./VSpacer-fb0a701e.js";import"./color-3023c34d.js";import"./VTextField-cc6b25a7.js";import"./VField-cd628e22.js";import"./index-76211fed.js";import"./transition-188ceb13.js";import"./VInput-06509b07.js";import"./locale-6f1bd0c0.js";import"./VIcon-866a2873.js";import"./density-54967683.js";import"./loader-04f0a6eb.js";import"./rounded-2bba334c.js";import"./forwardRefs-e658ad70.js";import"./index-77a5f257.js";import"./FSIcon-149b00a8.js";import"./VBtn-5c223d6a.js";import"./variant-9510412f.js";import"./elevation-8ccaa6df.js";import"./group-71a10606.js";import"./dimensions-d0734457.js";import"./router-7d0819d1.js";import"./index-97233025.js";import"./VDefaultsProvider-04b34a8e.js";import"./VProgressCircular-ab3499a8.js";import"./resizeObserver-c41c61f0.js";import"./LexicalSelection.prod-b0bd0f79.js";const C=R({name:"FSPasswordField",components:{FSTextField:h,FSButton:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const r=f().getColors(i.Light),t=f().getColors(i.Dark),a=k(!0),p=d(()=>e.editable?{"--fs-password-field-cursor":"pointer","--fs-password-field-color":t.base,"--fs-password-field-hover-color":t.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-color":r.dark,"--fs-password-field-hover-color":r.dark}),m=d(()=>a.value?"password":"text"),s=d(()=>a.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:i,type:m,icon:s,style:p,onToggle:()=>{e.editable&&(a.value=!a.value)}}}});function I(e,r,t,a,p,m){return $(),T(h,O({label:e.$props.label,description:e.$props.description,type:e.type,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),x({"append-inner":c(()=>[g(e.$slots,"append-inner",{},()=>[B(q,{variant:"icon",icon:e.icon,editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onToggle},null,8,["icon","editable","color","onClick"])])]),_:2},[H(e.$slots,(s,n)=>({name:n,fn:c(V=>[g(e.$slots,n,U(_(V)))])}))]),1040,["label","description","type","hideHeader","required","editable","modelValue"])}const u=D(C,[["render",I]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const $e={title:"Foundation/Shared/Input fields/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:u,FSCol:P},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(b=(F=o.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var w,y,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(S=(y=l.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Te=["Variations","Rules"];export{l as Rules,o as Variations,Te as __namedExportsOrder,$e as default};
