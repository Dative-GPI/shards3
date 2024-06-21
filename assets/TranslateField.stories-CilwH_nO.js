import{d as K,b as T,c as x,o as Q,y as J,z as F,C as V,K as n,O as W,P as q,B as r,m as X,F as w,L as $,M as Y,N as Z,A as ee,Q as ae,E as R,G as k}from"./vue.esm-bundler-DUki7rNA.js";import{F as te}from"./FSDialogSubmit-CRowM_MI.js";import{_ as g}from"./FSTextField-BZoPMSW0.js";import{F as j}from"./FSButton-GE9LRUiN.js";import{_ as O}from"./FSIcon-CSwom3lG.js";import{_}from"./FSSpan-DUTdSgpN.js";import{_ as v}from"./FSRow-CHgEOZQb.js";import{C as p,u as ne}from"./useColors-HWn2iBmk.js";import{u as re}from"./useLanguages-By-nF6LM.js";import{u as le}from"./useSlots-BZu_lZyn.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as c}from"./FSCol-BBaW1DrL.js";import{F as se}from"./FSForm-BLZ-2-aU.js";import{T as ie}from"./rules-YgaBz0hw.js";import"./FSFadeOut-BOJZDV1R.js";import"./uuid-DTaye2KM.js";import"./css-BPLLlL3Y.js";import"./FSDialog-Cln_XRXW.js";import"./FSCard-CqpJmiEC.js";import"./FSText-CE19e0tM.js";import"./VDialog-Bcb7rUCD.js";import"./VOverlay-p8XgrzUC.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-pAH_6Aah.js";import"./theme-BdipdDNo.js";import"./proxiedModel-C4hUsKQ6.js";import"./anchor-32zVg6UX.js";import"./color-B6JLWHIR.js";import"./dimensions-BRqNSfbQ.js";import"./display-D_CSHp09.js";import"./lazy-CXE1MfIY.js";import"./locale-BngQMCjE.js";import"./router-C5N3y4B3.js";import"./transition-CAmaHrck.js";import"./VDefaultsProvider-Dq1Infgw.js";import"./VSpacer-CujVv6t6.js";import"./useTranslations-LhdkJQ98.js";import"./VField-BJJocrwv.js";import"./index-zNldQLkd.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./VIcon-BfI5ony8.js";import"./tag-BAqPjmMA.js";import"./density-CE9JT2ZV.js";import"./loader-B-LDUF0l.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./rounded-CuOTz_ni.js";import"./useRules-ChvLepw4.js";import"./index-CeJtk2ua.js";import"./FSClickable-FCUZtikK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-cXrrETVr.js";import"./useAppTimeZone-BvKhOiUD.js";const A=K({name:"FSTranslateField",components:{FSDialogSubmit:te,FSTextField:g,FSButton:j,FSIcon:O,FSSpan:_,FSRow:v},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{getMany:y,fetching:h,entities:C}=re(),{getColors:b}=ne(),{slots:d}=le();delete d.append;const a=T(e.translations),l=T(!1),s=b(p.Light),E=b(p.Dark),N=x(()=>e.editable?{"--fs-translate-field-color":E.base}:{"--fs-translate-field-color":s.dark}),M=i=>{if(!a.value)return"";const o=a.value.find(u=>u.languageCode===i);return!o||!o[e.property]?"":o[e.property]},z=(i,o)=>{if(!a.value){a.value=[{languageCode:i,[e.property]:o}];return}const u=a.value.find(H=>H.languageCode===i);u?u[e.property]=o:a.value.push({languageCode:i,[e.property]:o})},G=()=>{l.value=!1,e.editable&&t("update:translations",a.value)};return Q(()=>{y()}),{fetchingLanguages:h,innerTranslations:a,ColorEnum:p,languages:C,dialog:l,slots:d,style:N,getTranslation:M,setTranslation:z,onSubmit:G}}});function de(e,t,y,h,C,b){const d=J("FSDialogSubmit");return F(),V(w,null,[n(g,X({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),W({append:r(()=>[n(j,{prependIcon:e.$props.buttonPrependIcon,label:e.$props.buttonLabel,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,load:e.fetchingLanguages,onClick:t[0]||(t[0]=a=>e.dialog=!0)},null,8,["prependIcon","label","appendIcon","variant","color","load"]),$(e.$slots,"append")]),_:2},[q(e.slots,(a,l)=>({name:l,fn:r(s=>[$(e.$slots,l,Y(Z(s)))])}))]),1040,["editable","modelValue"]),n(d,{title:e.$tr("ui.translate-field.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>e.dialog=a)},{body:r(()=>[n(c,{gap:"32px"},{default:r(()=>[n(g,{label:e.$tr("ui.translate-field.default-value","Default value"),editable:!1,modelValue:e.$props.modelValue},null,8,["label","modelValue"]),n(c,{gap:"16px"},{default:r(()=>[(F(!0),V(w,null,q(e.languages,(a,l)=>(F(),ee(g,{editable:e.$props.editable,key:l,modelValue:e.getTranslation(a.code),"onUpdate:modelValue":s=>e.setTranslation(a.code,s)},{label:r(()=>[n(v,{wrap:!1},{default:r(()=>[n(_,{class:"fs-translate-field-label",font:"text-overline",style:ae(e.style)},{default:r(()=>[R(k(e.$tr("ui.translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(O,null,{default:r(()=>[R(k(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const S=oe(A,[["render",de]]);A.__docgenInfo={displayName:"FSTranslateField",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateField.vue"]};const ga={title:"Foundation/Shared/Input fields/TranslateField",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:t})=>({components:{FSTranslateField:S,FSCol:c},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})},f={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:ie}},render:(e,{argTypes:t})=>({components:{FSForm:se,FSTranslateField:S,FSCol:c,FSRow:v},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSForm>`})};var I,B,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      translations1: null,
      value2: "Hello there",
      translations2: [{
        languageCode: "fr-FR",
        label: "Bonjour ici"
      }],
      value3: "General Kenobi",
      translations3: []
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
}`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var P,D,U;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(D=f.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const ca=["Variations","Rules"];export{f as Rules,m as Variations,ca as __namedExportsOrder,ga as default};
