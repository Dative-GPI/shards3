import{d as R,b as k,c as d,z as x,A as V,M as T,N as $,B as g,m as _,I as F,J as B,K as O,L as U}from"./vue.esm-bundler-BSyvBTC9.js";import{F as h}from"./FSTextField-BKDOMXYp.js";import{F as P}from"./FSButton-BNq-0lOE.js";import{u as j,C as u}from"./useColors-DlnF7i6T.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSForm-CVvlYXog.js";import{_ as C}from"./FSCol-YmDykHL-.js";import{_ as E}from"./FSRow-CVY2l52N.js";import{T as I}from"./rules-Bn2gOiel.js";import"./FSBaseField-_Isn_Ha_.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSClickable-DdK5daMz.js";import"./FSCard-D-fFYNec.js";import"./css-DLfrm0pR.js";import"./FSIcon-D23Cpf0F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./useDateFormat-CNSspUCn.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";import"./useAppTimeZone-D_npl1cn.js";import"./time-uorXHrJ8.js";const q=R({name:"FSPasswordField",components:{FSTextField:h,FSButton:P},props:{modelValue:{type:String,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{getColors:r}=j(),n=r(u.Light),i=r(u.Dark),o=k(!0),m=d(()=>e.editable?{"--fs-password-field-cursor":"pointer","--fs-password-field-color":i.base,"--fs-password-field-hover-color":i.dark}:{"--fs-password-field-cursor":"default","--fs-password-field-color":n.dark,"--fs-password-field-hover-color":n.dark}),s=d(()=>o.value?"password":"text"),a=d(()=>o.value?"mdi-eye-off-outline":"mdi-eye-outline");return{ColorEnum:u,type:s,icon:a,style:m,onToggle:()=>{e.editable&&(o.value=!o.value)}}}});function K(e,r,n,i,o,m){return x(),V(h,_({type:e.type,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),T({"append-inner":g(()=>[U(P,{variant:"icon",editable:e.$props.editable,color:e.ColorEnum.Dark,icon:e.icon,onClick:e.onToggle},null,8,["editable","color","icon","onClick"]),F(e.$slots,"append-inner")]),_:2},[$(e.$slots,(s,a)=>({name:a,fn:g(c=>[F(e.$slots,a,B(O(c)))])}))]),1040,["type","editable","modelValue"])}const p=D(q,[["render",K]]);q.__docgenInfo={displayName:"FSPasswordField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append-inner"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSPasswordField.vue"]};const Oe={title:"Foundation/Shared/Input fields/PasswordField",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:"Hello there",value3:"General Kenobi"}},render:(e,{argTypes:r})=>({components:{FSPasswordField:p,FSCol:C},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},l={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:I}},render:(e,{argTypes:r})=>({components:{FSForm:N,FSPasswordField:p,FSCol:C,FSRow:E},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const Ue=["Variations","Rules"];export{l as Rules,t as Variations,Ue as __namedExportsOrder,Oe as default};
