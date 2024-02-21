import{D as R,j as k,d,G as $,H as T,W as x,U as H,I as c,L as g,z as B,y as O,O as U,P as _}from"./vue.esm-bundler-6746129d.js";import{u as f,C as i}from"./useColors-af9c4499.js";import{T as j}from"./rules-1d0b59d0.js";import{F as S}from"./FSTextField-7b3e4418.js";import{_ as q}from"./FSButton-35c738ab.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as P}from"./FSCol-7dad0d26.js";import{_ as z}from"./FSRow-40eef247.js";import{V as E}from"./VForm-6ea3dbb9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-dcffbbe6.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";import"./FSSpan-636f18e6.js";import"./VSpacer-a83300f0.js";import"./color-28636d86.js";import"./VTextField-259e5da4.js";import"./VField-7b300f30.js";import"./index-a55f475c.js";import"./transition-909f2bdc.js";import"./VInput-0d298506.js";import"./locale-6d7be75c.js";import"./VIcon-bfd3bf26.js";import"./density-0267c9a3.js";import"./loader-ad3b4aa2.js";import"./rounded-4ccd8171.js";import"./forwardRefs-e658ad70.js";import"./index-5d004ff4.js";import"./FSIcon-e171104f.js";import"./VBtn-28e6871b.js";import"./variant-06fe573f.js";import"./elevation-6127bd0f.js";import"./group-6b499f9e.js";import"./dimensions-b4b52e44.js";import"./router-6af7a2c9.js";import"./index-a12920e9.js";import"./VDefaultsProvider-4443303c.js";import"./VProgressCircular-91c9055e.js";import"./resizeObserver-2d06e994.js";import"./LexicalSelection.prod-bad52e97.js";const C=R({name:"FSPasswordField",components:{FSTextField:S,FSButton:q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const r=f().getColors(i.Light),t=f().getColors(i.Dark),a=k(!0),p=d(()=>e.editable?{"--fs-password-field-cursor":"pointer","--fs-password-field-color":t.base,"--fs-password-field-hover-color":t.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-color":r.dark,"--fs-password-field-hover-color":r.dark}),m=d(()=>a.value?"password":"text"),s=d(()=>a.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:i,type:m,icon:s,style:p,onToggle:()=>{e.editable&&(a.value=!a.value)}}}});function G(e,r,t,a,p,m){return $(),T(S,O({label:e.$props.label,description:e.$props.description,type:e.type,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),x({"append-inner":c(()=>[g(e.$slots,"append-inner",{},()=>[B(q,{variant:"icon",icon:e.icon,editable:e.$props.editable,color:e.ColorEnum.Dark,onClick:e.onToggle},null,8,["icon","editable","color","onClick"])])]),_:2},[H(e.$slots,(s,n)=>({name:n,fn:c(V=>[g(e.$slots,n,U(_(V)))])}))]),1040,["label","description","type","hideHeader","required","editable","modelValue"])}const u=D(C,[["render",G]]);C.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"append-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSPasswordField.vue"]};const $e={title:"Foundation/Shared/Input fields/PasswordField",component:u,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:u,FSCol:P},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:j}},render:(e,{argTypes:r})=>({components:{VForm:E,FSPasswordField:u,FSCol:P,FSRow:z},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const Te=["Variations","Rules"];export{l as Rules,o as Variations,Te as __namedExportsOrder,$e as default};
