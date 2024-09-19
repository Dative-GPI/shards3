import{d as B,b as N,z as H,A as s,B as m,C as n,m as v,v as o,D as q,N as I,G as g,H as x,F as U,E as j}from"./vue.esm-bundler-BwDfg4wG.js";import{F as X,e as b}from"./FSRichTextField-CODwHNqg.js";import{F as c}from"./FSButton-jJkg4qCi.js";import{F as R}from"./FSIcon-ChaYv6Le.js";import{_ as C}from"./FSSpan-H3zJ0Cfa.js";import{F as f}from"./FSCol-BEvj3we4.js";import{F as y}from"./FSRow-k5pgBhR1.js";import{u as _}from"./useAppLanguages-B-6SoLLG.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSAutocompleteField-BJE5Iw2_.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./useSlots-2JqallzA.js";import"./VSpacer-C5S3LEb3.js";import"./color-BnvS3YzF.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./useTranslations-CHmpEDXr.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./FSCard-ENPT7Hcj.js";import"./css-DTUiF03J.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./router-CeBnHAqN.js";import"./FSSlideGroup-FmBZXb1C.js";import"./uuid-DTaye2KM.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./FSCheckbox-Up-USX9A.js";import"./VSelectionControl-gUfFxYp8.js";import"./index-BBm8PRb1.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSLoader-CBedVZCM.js";import"./elevation-Ba-uT6Vw.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./filter-Cv_nnV1z.js";import"./FSText-CwwFvnOv.js";import"./FSClickable-Y_T-Cq-9.js";const V=B({name:"FSTranslateRichTextField",components:{FSRichTextField:X,FSButton:c,FSIcon:R,FSSpan:C,FSCol:f,FSRow:y},props:{translationsExpanded:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:h}=_(),a=N(e.translations);return{languages:h,onCancelTranslations:()=>{t("update:translationsExpanded",!1)},onSubmitTranslations:()=>{e.editable&&t("update:translations",a.value),t("update:translationsExpanded",!1)},getTranslation:i=>{if(!a.value)return b;const r=a.value.find(p=>p.languageCode===i);return!r||!r[e.property]?b:r[e.property].toString()},setTranslation:(i,r)=>{if(!a.value){a.value=[{languageCode:i,[e.property]:r}];return}const p=a.value.find($=>$.languageCode===i);p?p[e.property]=r:a.value.push({languageCode:i,[e.property]:r})}}}});function D(e,t,h,a,k,w){const d=H("FSRichTextField");return e.$props.translationsExpanded?(s(),m(f,{key:0},{default:n(()=>[o(f,{gap:"16px"},{default:n(()=>[o(d,v({editable:!1,label:e.$tr("ui.translateRichTextField.defaultValue","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(s(!0),q(U,null,I(e.languages,(l,i)=>(s(),m(d,v({editable:e.$props.editable,key:i,modelValue:e.getTranslation(l.code),"onUpdate:modelValue":r=>e.setTranslation(l.code,r),ref_for:!0},e.$attrs),{label:n(()=>[o(y,{wrap:!1,align:"center-left"},{default:n(()=>[o(C,{class:"fs-translate-field-label",font:"text-overline"},{default:n(()=>[g(x(e.$tr("ui.translateRichTextField.translateIn","Translate in {0}",l.label)),1)]),_:2},1024),o(R,null,{default:n(()=>[g(x(l.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1}),o(y,{wrap:!1},{default:n(()=>[o(c,{prependIcon:"mdi-cancel",width:"100%",label:e.$tr("ui.translateRichTextField.cancelButton.label","Cancel"),onClick:e.onCancelTranslations},null,8,["label","onClick"]),e.$props.editable?(s(),m(c,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("ui.translateRichTextField.validateButton.label","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"])):j("",!0)]),_:1})]),_:1})):(s(),m(d,v({key:1,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=l=>e.$emit("update:modelValue",l))},e.$attrs),{"append-inner":n(()=>[o(c,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("ui.translateRichTextField.translateButton.label","Manage translations"),onClick:t[0]||(t[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["editable","modelValue"]))}const E=A(V,[["render",D]]);V.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const nt={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{translateExpanded1:!1,value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations1:null,variableReferences:[{code:"temperature",defaultValue:0,typeName:"number"},{code:"weather",defaultValue:"XXX",typeName:"string"}],translateExpanded2:!0,value2:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations2:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}],translateExpanded3:!1,value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations3:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}]}},render:(e,{argTypes:t})=>({components:{FSTranslateRichTextField:E,FSCol:f},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        label="Rich text translatable"
        :required="true"
        desciption="This is a rich text field"
        :variableReferences="args.variableReferences"
        v-model:translationsExpanded="args.translateExpanded1"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translateExpanded2"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateRichTextField
        :editable="false"
        :rows="2"
        v-model:translationsExpanded="args.translateExpanded3"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>`})};var F,T,S;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      translateExpanded1: false,
      value1: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
      translations1: null,
      variableReferences: [{
        code: "temperature",
        defaultValue: 0,
        typeName: "number"
      }, {
        code: "weather",
        defaultValue: "XXX",
        typeName: "string"
      }],
      translateExpanded2: true,
      value2: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Hello there\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
      translations2: [{
        label: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Hello there\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
        languageCode: "en-US"
      }, {
        label: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Bonjour vous\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
        languageCode: "fr-FR"
      }],
      translateExpanded3: false,
      value3: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Hello there\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
      translations3: [{
        label: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Hello there\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
        languageCode: "en-US"
      }, {
        label: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Bonjour vous\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
        languageCode: "fr-FR"
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTranslateRichTextField,
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
      <FSTranslateRichTextField
        label="Rich text translatable"
        :required="true"
        desciption="This is a rich text field"
        :variableReferences="args.variableReferences"
        v-model:translationsExpanded="args.translateExpanded1"
        v-model="args.value1"
        v-model:translations="args.translations1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translateExpanded2"
        v-model="args.value2"
        v-model:translations="args.translations2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTranslateRichTextField
        :editable="false"
        :rows="2"
        v-model:translationsExpanded="args.translateExpanded3"
        v-model="args.value3"
        v-model:translations="args.translations3"
      />
    </FSCol>\`
  })
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const ot=["Variations"];export{u as Variations,ot as __namedExportsOrder,nt as default};
