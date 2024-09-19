import{d as E,b as V,c as H,z as C,A as F,D as w,v as n,M as z,N as q,C as l,m as K,F as A,J as $,K as J,L as M,B as Q,O as W,G as x,H as R}from"./vue.esm-bundler-BwDfg4wG.js";import{F as X}from"./FSDialogSubmit-CvlTCn8G.js";import{F as Y}from"./FSTextArea-B8-GxTsB.js";import{F as j}from"./FSButton-jJkg4qCi.js";import{F as L}from"./FSIcon-ChaYv6Le.js";import{_ as O}from"./FSSpan-H3zJ0Cfa.js";import{F as y}from"./FSRow-k5pgBhR1.js";import{C as m,u as Z}from"./useColors-tmPxRJAs.js";import{u as _}from"./useAppLanguages-B-6SoLLG.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as b}from"./FSCol-BEvj3we4.js";import{F as te}from"./FSForm-Cy2PdXxq.js";import{T as ae}from"./rules-DMXcKxHO.js";import"./FSFadeOut-D8lX1YMU.js";import"./uuid-DTaye2KM.js";import"./css-DTUiF03J.js";import"./FSDialog-DdBcmhOt.js";import"./FSCard-ENPT7Hcj.js";import"./FSText-CwwFvnOv.js";import"./useSlots-2JqallzA.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-okNizC5Y.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";import"./useTranslations-CHmpEDXr.js";import"./FSBaseField-3b1naUZS.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./density-CY8ZwxUy.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./rounded-NuUWeCiM.js";import"./index-O1RQoaVh.js";import"./FSClickable-Y_T-Cq-9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./useDateFormat-B3lPS72n.js";import"./datesTools-BRWlXl6j.js";import"./useAppLanguageCode--ssgoHQ3.js";import"./useAppTimeZone-8KaETkN8.js";import"./time-DIVI7EoV.js";const G=E({name:"FSTranslateTextArea",components:{FSDialogSubmit:X,FSTextArea:Y,FSButton:j,FSIcon:L,FSSpan:O,FSRow:y},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-translate"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},property:{type:String,required:!1,default:"label"},translations:{type:Array,required:!1,default:()=>[]},buttonColor:{type:String,required:!1,default:m.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:h}=_(),{getColors:c}=Z(),v=V(!1),r=V(e.translations),s=c(m.Light),S=c(m.Dark),a=H(()=>e.editable?{"--fs-translate-field-color":S.base}:{"--fs-translate-field-color":s.dark});return{innerTranslations:r,ColorEnum:m,languages:h,dialog:v,style:a,getTranslation:u=>{if(!r.value)return"";const o=r.value.find(p=>p.languageCode===u);return!o||!o[e.property]?"":o[e.property]},setTranslation:(u,o)=>{if(!r.value){r.value=[{languageCode:u,[e.property]:o}];return}const p=r.value.find(N=>N.languageCode===u);p?p[e.property]=o:r.value.push({languageCode:u,[e.property]:o})},onSubmit:()=>{v.value=!1,e.editable&&t("update:translations",r.value)}}}});function re(e,t,h,c,v,r){const s=C("FSTextArea"),S=C("FSDialogSubmit");return F(),w(A,null,[n(s,K({editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),z({append:l(()=>[n(j,{height:"100%",style:{},prependIcon:e.$props.buttonPrependIcon,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,onClick:t[0]||(t[0]=a=>e.dialog=!0)},null,8,["prependIcon","appendIcon","variant","color"]),$(e.$slots,"append")]),_:2},[q(e.$slots,(a,i)=>({name:i,fn:l(d=>[$(e.$slots,i,J(M(d)))])}))]),1040,["editable","modelValue"]),n(S,{title:e.$tr("ui.translate-text-area.title","Handle translations"),submitButtonColor:e.$props.buttonColor,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":t[2]||(t[2]=a=>e.dialog=a)},{body:l(()=>[n(b,{gap:"32px"},{default:l(()=>[n(s,{label:e.$tr("ui.translate-text-area.default-value","Default value"),editable:!1,rows:e.$attrs.rows,modelValue:e.$props.modelValue},null,8,["label","rows","modelValue"]),n(b,{gap:"20px"},{default:l(()=>[(F(!0),w(A,null,q(e.languages,(a,i)=>(F(),Q(s,{editable:e.$props.editable,key:i,modelValue:e.getTranslation(a.code),rows:e.$attrs.rows,"onUpdate:modelValue":d=>e.setTranslation(a.code,d)},{label:l(()=>[n(y,{wrap:!1,align:"center-left"},{default:l(()=>[n(O,{font:"text-overline",style:W(e.style)},{default:l(()=>[x(R(e.$tr("ui.translate-field.translate-in","Translate in {0}",a.label)),1)]),_:2},1032,["style"]),n(L,null,{default:l(()=>[x(R(a.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["editable","modelValue","rows","onUpdate:modelValue"]))),128))]),_:1})]),_:1})]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const T=ee(G,[["render",re]]);G.__docgenInfo={displayName:"FSTranslateTextArea",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"mdi-translate"'}},{name:"buttonLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update:translations"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateTextArea.vue"]};const ut={title:"Foundation/Shared/Input fields/TranslateTextArea",component:T,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{value1:null,translations1:null,value2:"Hello there",translations2:[{languageCode:"fr-FR",label:"Bonjour ici"}],value3:"General Kenobi",translations3:[]}},render:(e,{argTypes:t})=>({components:{FSTranslateTextArea:T,FSCol:b},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateTextArea
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
        :rows="4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        :autoGrow="false"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})},g={args:{args:{valid:!1,value1:"",translations1:null,value2:"",translations2:null,rules:ae}},render:(e,{argTypes:t})=>({components:{FSForm:te,FSTranslateTextArea:T,FSCol:b,FSRow:y},props:Object.keys(t),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>`})};var k,B,I;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      FSTranslateTextArea,
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
      <FSTranslateTextArea
        label="Translation"
        v-model="args.value1"
        v-model:translations="args.translations1"
        :rows="4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Required translation, with description"
        description="Description for this field"
        :required="true"
        :autoGrow="false"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateTextArea
        label="Uneditable translation, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(I=(B=f.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var D,P,U;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      FSTranslateTextArea,
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
        <FSTranslateTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
          v-model="args.translations1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTranslateTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
          v-model="args.translations2"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(U=(P=g.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};const dt=["Variations","Rules"];export{g as Rules,f as Variations,dt as __namedExportsOrder,ut as default};
