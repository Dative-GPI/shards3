import{f as E,j as y,g as A,o as H,D as N,E as g,H as h,P as n,U as G,V,G as r,A as K,J as T,Q as C,R as M,S as z,F as x,W as J,K as q,L as w}from"./vue.esm-bundler-f632b118.js";import{F as Q}from"./FSDialogSubmit-105732b2.js";import{_ as p}from"./FSTextField-58ff63bb.js";import{F as D}from"./FSButton-08a91e21.js";import{_ as P}from"./FSIcon-8032a9d1.js";import{_ as U}from"./FSSpan-4ac1bb71.js";import{_ as c}from"./FSRow-76f4ad1e.js";import{C as i,u as W}from"./useColors-5866e399.js";import{u as X}from"./useLanguages-6ae3a1a1.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as m}from"./FSCol-606e8271.js";import{F as Z}from"./FSForm-483c0cbb.js";import{T as ee}from"./rules-78f81f7e.js";import"./FSFadeOut-391a4266.js";import"./uuid-08309875.js";import"./css-185b4786.js";import"./FSDialog-f76245ee.js";import"./FSCard-491552ba.js";import"./FSText-09696756.js";import"./useSlots-de625f75.js";import"./VDialog-27cf76eb.js";import"./VOverlay-a0789f47.js";import"./forwardRefs-e658ad70.js";import"./useRender-e08116dd.js";import"./theme-7fcd5c30.js";import"./proxiedModel-4a0e4d22.js";import"./anchor-559036f7.js";import"./color-8a5e0dbc.js";import"./dimensions-655ad4fc.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./locale-4446cda9.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./transition-c0ed457c.js";import"./VDefaultsProvider-e2787342.js";import"./VSpacer-f52c9222.js";import"./useTranslations-f6aba3ae.js";import"./VField-d1df4052.js";import"./index-f6c0e33a.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./VIcon-31ae1cc1.js";import"./tag-f52d5248.js";import"./density-2a21ba5c.js";import"./loader-288cfa26.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./rounded-83656db8.js";import"./useRules-89bf8a4c.js";import"./index-c976eaf6.js";import"./FSClickable-4011125f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./useAppTimeZone-3909e5e4.js";const j=E({name:"FSTranslateField",components:{FSDialogSubmit:Q,FSTextField:p,FSButton:D,FSIcon:P,FSSpan:U,FSRow:c},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},translations:{type:Object,required:!1,default:()=>({})},buttonColor:{type:String,required:!1,default:i.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{getMany:F,fetching:v,entities:S}=X(),{getColors:f}=W(),s=y(e.translations??{}),a=y(!1),l=f(i.Light),o=f(i.Dark),O=A(()=>e.editable?{"--fs-translate-field-color":o.base}:{"--fs-translate-field-color":l.dark}),_=()=>{a.value=!1,e.editable&&t("update:translations",s.value)};return H(()=>{F()}),{fetchingLanguages:v,innerTranslations:s,ColorEnum:i,languages:S,dialog:a,style:O,onSubmit:_}}});function ae(e,t,F,v,S,f){const s=N("FSDialogSubmit");return g(),h(T,null,[n(p,K({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),G({append:r(()=>[C(e.$slots,"append",{},()=>[n(D,{prependIcon:e.$props.buttonPrependIcon,label:e.$props.buttonLabel,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,load:e.fetchingLanguages,onClick:t[0]||(t[0]=a=>e.dialog=!0)},null,8,["prependIcon","label","appendIcon","variant","color","load"])])]),_:2},[V(e.$slots,(a,l)=>({name:l,fn:r(o=>[C(e.$slots,l,M(z(o)))])}))]),1040,["editable","modelValue"]),n(s,{title:e.$tr("ui.translate-field.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>e.dialog=a)},{body:r(()=>[n(m,{gap:"32px"},{default:r(()=>[n(p,{label:e.$tr("ui.translate-field.default-value","Default value"),editable:!1,modelValue:e.$props.modelValue},null,8,["label","modelValue"]),n(m,{gap:"16px"},{default:r(()=>[(g(!0),h(T,null,V(e.languages,(a,l)=>(g(),x(p,{editable:e.$props.editable,key:l,modelValue:e.innerTranslations[a.code],"onUpdate:modelValue":o=>e.innerTranslations[a.code]=o},{label:r(()=>[n(c,{wrap:!1},{default:r(()=>[n(U,{class:"fs-translate-field-label",font:"text-overline",style:J(e.style)},{default:r(()=>[q(w(e.$tr("ui.translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(P,null,{default:r(()=>[q(w(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const b=Y(j,[["render",ae]]);j.__docgenInfo={displayName:"FSTranslateField",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ [key: string]: string }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateField.vue"]};const sa={title:"Foundation/Shared/Input fields/TranslateField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:{"fr-FR":"Bonjour ici"},value3:"General Kenobi",translations3:{}}},render:(e,{argTypes:t})=>({components:{FSTranslateField:b,FSCol:m},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},u={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:ee}},render:(e,{argTypes:t})=>({components:{FSForm:Z,FSTranslateField:b,FSCol:m,FSRow:c},props:Object.keys(t),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var $,R,k;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      translations1: null,
      value2: "Hello there",
      translations2: {
        "fr-FR": "Bonjour ici"
      },
      value3: "General Kenobi",
      translations3: {}
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateField,
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
      <FSTranslateField
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateField
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var I,B,L;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      translations1: null,
      value2: "",
      translations2: null,
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTranslateField,
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
        <FSTranslateField
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateField
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(L=(B=u.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const ia=["Variations","Rules"];export{u as Rules,d as Variations,ia as __namedExportsOrder,sa as default};
