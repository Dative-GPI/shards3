import{f as E,j as y,g as A,o as H,D as N,E as g,H as h,P as n,U as G,V,G as r,A as K,J as T,Q as C,R as M,S as z,F as x,W as J,K as q,L as w}from"./vue.esm-bundler-6f923154.js";import{F as Q}from"./FSDialogSubmit-c8140f02.js";import{_ as p}from"./FSTextField-add61627.js";import{F as D}from"./FSButton-ff673895.js";import{_ as P}from"./FSIcon-93774118.js";import{_ as U}from"./FSSpan-7bb94541.js";import{_ as c}from"./FSRow-64caadb9.js";import{C as i,u as W}from"./useColors-9144d90e.js";import{u as X}from"./useLanguages-b3fa3ff2.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as m}from"./FSCol-5ed907ac.js";import{F as Z}from"./FSForm-7d2059d4.js";import{T as ee}from"./rules-4629d4a0.js";import"./FSFadeOut-1de34239.js";import"./uuid-08309875.js";import"./css-0cf2e273.js";import"./FSDialog-289d6a40.js";import"./FSCard-32925b42.js";import"./FSText-eacee215.js";import"./useSlots-21493751.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./forwardRefs-e658ad70.js";import"./useRender-1cb09274.js";import"./theme-a8226b2e.js";import"./proxiedModel-c8904091.js";import"./anchor-52e92869.js";import"./color-a262cadc.js";import"./dimensions-dec12c77.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./locale-577543b5.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./transition-e76cd387.js";import"./VDefaultsProvider-a08a9a42.js";import"./VSpacer-54f0d5ce.js";import"./useTranslations-59cd146d.js";import"./VField-d1f54092.js";import"./index-4caca680.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./density-03404b67.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./rounded-1f8e51a9.js";import"./useRules-8e3c4a4a.js";import"./index-114ba00f.js";import"./FSClickable-e71ee20f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./useAppTimeZone-c6cf3192.js";const j=E({name:"FSTranslateField",components:{FSDialogSubmit:Q,FSTextField:p,FSButton:D,FSIcon:P,FSSpan:U,FSRow:c},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},translations:{type:Object,required:!1,default:()=>({})},buttonColor:{type:String,required:!1,default:i.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{getMany:F,fetching:v,entities:S}=X(),{getColors:f}=W(),s=y(e.translations??{}),a=y(!1),l=f(i.Light),o=f(i.Dark),O=A(()=>e.editable?{"--fs-translate-field-color":o.base}:{"--fs-translate-field-color":l.dark}),_=()=>{a.value=!1,e.editable&&t("update:translations",s.value)};return H(()=>{F()}),{fetchingLanguages:v,innerTranslations:s,ColorEnum:i,languages:S,dialog:a,style:O,onSubmit:_}}});function ae(e,t,F,v,S,f){const s=N("FSDialogSubmit");return g(),h(T,null,[n(p,K({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),G({append:r(()=>[C(e.$slots,"append",{},()=>[n(D,{prependIcon:e.$props.buttonPrependIcon,label:e.$props.buttonLabel,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,load:e.fetchingLanguages,onClick:t[0]||(t[0]=a=>e.dialog=!0)},null,8,["prependIcon","label","appendIcon","variant","color","load"])])]),_:2},[V(e.$slots,(a,l)=>({name:l,fn:r(o=>[C(e.$slots,l,M(z(o)))])}))]),1040,["editable","modelValue"]),n(s,{title:e.$tr("ui.translate-field.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>e.dialog=a)},{body:r(()=>[n(m,{gap:"32px"},{default:r(()=>[n(p,{label:e.$tr("ui.translate-field.default-value","Default value"),editable:!1,modelValue:e.$props.modelValue},null,8,["label","modelValue"]),n(m,{gap:"16px"},{default:r(()=>[(g(!0),h(T,null,V(e.languages,(a,l)=>(g(),x(p,{editable:e.$props.editable,key:l,modelValue:e.innerTranslations[a.code],"onUpdate:modelValue":o=>e.innerTranslations[a.code]=o},{label:r(()=>[n(c,{wrap:!1},{default:r(()=>[n(U,{class:"fs-translate-field-label",font:"text-overline",style:J(e.style)},{default:r(()=>[q(w(e.$tr("ui.translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(P,null,{default:r(()=>[q(w(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const b=Y(j,[["render",ae]]);j.__docgenInfo={displayName:"FSTranslateField",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ [key: string]: string }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateField.vue"]};const sa={title:"Foundation/Shared/Input fields/TranslateField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:{"fr-FR":"Bonjour ici"},value3:"General Kenobi",translations3:{}}},render:(e,{argTypes:t})=>({components:{FSTranslateField:b,FSCol:m},props:Object.keys(t),setup(){return{...e}},template:`
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
