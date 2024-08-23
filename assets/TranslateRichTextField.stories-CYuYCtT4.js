import{d as B,b as _,y as N,z as s,A as m,B as n,m as v,L as o,C as q,N as H,E as g,G as x,F as I,D as U}from"./vue.esm-bundler-BATn8cDU.js";import{F as j,e as b}from"./FSRichTextField-BdkKw8gd.js";import{F as c}from"./FSButton-CvqXFT9l.js";import{_ as C}from"./FSIcon-CM3DCfji.js";import{_ as R}from"./FSSpan-C8YxV3Vj.js";import{_ as f}from"./FSCol-D9tDKebi.js";import{_ as y}from"./FSRow-Gvoj2sTW.js";import{u as X}from"./useAppLanguages-j8CTq3mK.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSAutocompleteField-DBYsLacO.js";import"./FSSearchField-Dq9TC6Ol.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./useColors-BHn59yMM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./color-jM82jTdX.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./VInput-sarfrtTX.js";import"./locale-Cm_eUAdw.js";import"./VIcon-BgP_kyAH.js";import"./density-BzC6UB2b.js";import"./proxiedModel-D0bPfire.js";import"./loader-YJ_823dI.js";import"./VProgressCircular-Bi_qA2kG.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./useTranslations-C_i4rqaX.js";import"./FSDialogMenu-DtOsVGjc.js";import"./FSCard-DuDQq8Pz.js";import"./css-C5boehQC.js";import"./VDialog-BAAsSUMi.js";import"./VOverlay-D8zq6d1f.js";import"./dimensions-viHtPIHZ.js";import"./display-BemOzMYh.js";import"./lazy-Ck43itqa.js";import"./router-BSq-7NWC.js";import"./FSRadioGroup-DP5yQN2r.js";import"./FSRadio-BSf081hY.js";import"./VSelectionControl-OgAVLyH5.js";import"./index-RhlTNW4L.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSSlideGroup-BpTb0q2K.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CFGEqcRJ.js";import"./group-CBtViAyU.js";import"./FSWrapGroup-DvqdQnms.js";import"./FSCheckbox-D2VWjaLW.js";import"./FSFadeOut-CJjgZkSF.js";import"./FSLoader-Ccd0M2qp.js";import"./elevation-oWdkHiXv.js";import"./VSelect-Du7HAR1V.js";import"./VList-B1ruI7IS.js";import"./ssrBoot-DsRDMYEb.js";import"./border-BU-G8uSh.js";import"./VImg-euCAhqKz.js";import"./VMenu-BAsGaafY.js";import"./filter-E2nnWtO2.js";import"./FSClickable-B9o4BEyu.js";const V=B({name:"FSTranslateRichTextField",components:{FSRichTextField:j,FSButton:c,FSIcon:C,FSSpan:R,FSCol:f,FSRow:y},props:{translationsExpanded:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:h}=X(),a=_(e.translations);return{languages:h,onCancelTranslations:()=>{t("update:translationsExpanded",!1)},onSubmitTranslations:()=>{e.editable&&t("update:translations",a.value),t("update:translationsExpanded",!1)},getTranslation:i=>{if(!a.value)return b;const r=a.value.find(p=>p.languageCode===i);return!r||!r[e.property]?b:r[e.property].toString()},setTranslation:(i,r)=>{if(!a.value){a.value=[{languageCode:i,[e.property]:r}];return}const p=a.value.find($=>$.languageCode===i);p?p[e.property]=r:a.value.push({languageCode:i,[e.property]:r})}}}});function A(e,t,h,a,k,w){const d=N("FSRichTextField");return e.$props.translationsExpanded?(s(),m(f,{key:0},{default:n(()=>[o(f,{gap:"16px"},{default:n(()=>[o(d,v({editable:!1,label:e.$tr("ui.translateRichTextField.defaultValue","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(s(!0),q(I,null,H(e.languages,(l,i)=>(s(),m(d,v({editable:e.$props.editable,key:i,modelValue:e.getTranslation(l.code),"onUpdate:modelValue":r=>e.setTranslation(l.code,r),ref_for:!0},e.$attrs),{label:n(()=>[o(y,{wrap:!1},{default:n(()=>[o(R,{class:"fs-translate-field-label",font:"text-overline"},{default:n(()=>[g(x(e.$tr("ui.translateRichTextField.translateIn","Translate in {0}",l.label)),1)]),_:2},1024),o(C,null,{default:n(()=>[g(x(l.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1}),o(y,{wrap:!1},{default:n(()=>[o(c,{prependIcon:"mdi-cancel",width:"100%",label:e.$tr("ui.translateRichTextField.cancelButton.label","Cancel"),onClick:e.onCancelTranslations},null,8,["label","onClick"]),e.$props.editable?(s(),m(c,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("ui.translateRichTextField.validateButton.label","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"])):U("",!0)]),_:1})]),_:1})):(s(),m(d,v({key:1,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=l=>e.$emit("update:modelValue",l))},e.$attrs),{"append-inner":n(()=>[o(c,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("ui.translateRichTextField.translateButton.label","Manage translations"),onClick:t[0]||(t[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["editable","modelValue"]))}const E=L(V,[["render",A]]);V.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const at={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{translateExpanded1:!1,value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations1:null,variableReferences:[{code:"temperature",defaultValue:0,typeName:"number"},{code:"weather",defaultValue:"XXX",typeName:"string"}],translateExpanded2:!0,value2:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations2:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}],translateExpanded3:!1,value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations3:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}]}},render:(e,{argTypes:t})=>({components:{FSTranslateRichTextField:E,FSCol:f},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const nt=["Variations"];export{u as Variations,nt as __namedExportsOrder,at as default};
