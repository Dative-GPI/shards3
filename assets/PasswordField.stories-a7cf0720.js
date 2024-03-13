import{g as R,d as k,j as i,I as x,J as V,W as T,X as $,K as g,x as _,P as F,Q as j,R as B,z as O}from"./vue.esm-bundler-72feb788.js";import{F as h}from"./FSTextField-a3210dbc.js";import{_ as P}from"./FSButton-ead951eb.js";import{u as U,C as u}from"./useColors-6caee65d.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{T as E,F as I}from"./FSForm-dad81425.js";import{_ as C}from"./FSCol-df85c70b.js";import{_ as K}from"./FSRow-ae483077.js";import"./FSSpan-0b48c446.js";import"./useSlots-a83038d8.js";import"./VField-127bd01f.js";import"./index-1ae89502.js";import"./useRender-dfda60e7.js";import"./theme-dfac1c87.js";import"./transition-2c0bfa39.js";import"./VInput-d8a8ef30.js";import"./locale-6e33b40c.js";import"./VIcon-7b60b4e1.js";import"./color-20078b56.js";import"./tag-4c4a02ef.js";import"./density-849fb56f.js";import"./loader-dcf07c4a.js";import"./rounded-98e7d656.js";import"./forwardRefs-e658ad70.js";import"./VSpacer-3481543d.js";import"./VTextField-6c3de945.js";import"./index-2f035a23.js";import"./vue-router-c36f9e85.js";import"./FSCard-619e60a0.js";import"./css-a2b3c3ca.js";import"./FSIcon-072b4761.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTimeZone-809ffb6f.js";import"./useTranslations-3d964ba1.js";const q=R({name:"FSPasswordField",components:{FSTextField:h,FSButton:P},props:{modelValue:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{getColors:r}=U(),n=r(u.Light),d=r(u.Dark),s=k(!0),m=i(()=>e.editable?{"--fs-password-field-cursor":"pointer","--fs-password-field-color":d.base,"--fs-password-field-hover-color":d.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-color":n.dark,"--fs-password-field-hover-color":n.dark}),o=i(()=>s.value?"password":"text"),a=i(()=>s.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:u,type:o,icon:a,style:m,onToggle:()=>{e.editable&&(s.value=!s.value)}}}});function N(e,r,n,d,s,m){return x(),V(h,_({type:e.type,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),T({"append-inner":g(()=>[F(e.$slots,"append-inner",{},()=>[O(P,{variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,icon:e.icon,onClick:e.onToggle},null,8,["editable","color","icon","onClick"])])]),_:2},[$(e.$slots,(o,a)=>({name:a,fn:g(c=>[F(e.$slots,a,j(B(c)))])}))]),1040,["type","editable","modelValue"])}const p=D(q,[["render",N]]);q.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPasswordField.vue"]};const Pe={title:"Foundation/Shared/Input fields/PasswordField",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:p,FSCol:C},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:E}},render:(e,{argTypes:r})=>({components:{FSForm:I,FSPasswordField:p,FSCol:C,FSRow:K},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const Ce=["Variations","Rules"];export{l as Rules,t as Variations,Ce as __namedExportsOrder,Pe as default};
