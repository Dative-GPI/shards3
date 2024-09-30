import{d as B,b as N,y as q,z as s,A as m,B as n,m as v,L as o,C as H,N as I,E as g,G as x,F as U,D as _}from"./vue.esm-bundler-CxS4_7kK.js";import{F as j,e as b}from"./FSRichTextField-bHpkAZyJ.js";import{F as c}from"./FSButton-DAhZ0Raz.js";import{F as R}from"./FSIcon-C8jESFXA.js";import{_ as C}from"./FSSpan-3STIP-79.js";import{F as f}from"./FSCol-Co9r7Klj.js";import{_ as y}from"./FSRow-D546kqFt.js";import{u as X}from"./useAppLanguages-CfXI-emq.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSAutocompleteField-C5pC2bXV.js";import"./FSSearchField-BGiFLl4O.js";import"./FSTextField-CiQ29Gk9.js";import"./FSBaseField-ytGCUAbx.js";import"./useColors-CaDWSZLL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BEfrBPRQ.js";import"./useSlots-BHms3Yb6.js";import"./VSpacer-DaRxrr8q.js";import"./color-DpQhyQC8.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./index-D0m5TbR6.js";import"./transition-DZ-8zzo1.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./locale-DgxPCyxi.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./density-CY0EC5jE.js";import"./proxiedModel-DAUSUEYq.js";import"./form-lyoENh9E.js";import"./loader-BoG0AaGl.js";import"./VProgressCircular-BpEvERgl.js";import"./resizeObserver-CogQzEnD.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./useTranslations-ZMyFjr19.js";import"./FSDialogMenu-Dnvhdcsp.js";import"./FSCard-BjvZ5YiQ.js";import"./css-D18ueKtB.js";import"./VDialog-QbyZWgXc.js";import"./VOverlay-D-6__nW6.js";import"./dimensions-DBaG2oVF.js";import"./display-B-O23xq9.js";import"./lazy-DlJBGmKZ.js";import"./router-C4cLtMAM.js";import"./FSSlideGroup-DhNsnnDZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-3a_bTLDz.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./FSToggleSet-CxkDSH6T.js";import"./FSWrapGroup-DO-xnPll.js";import"./FSCheckbox-BYVnhWyO.js";import"./VSelectionControl-CGo5bYGX.js";import"./index-Dx6GtDlm.js";import"./FSFadeOut-BRxcyuMB.js";import"./FSLoader-DEfCEKzp.js";import"./elevation-8SXivnh1.js";import"./FSRadio-ClRwJSfH.js";import"./VList-CCKQMsMr.js";import"./ssrBoot-hTBI6W7o.js";import"./border-yULewhCr.js";import"./VImg-616TDJo4.js";import"./VSelect-B2uffud2.js";import"./VMenu-CCWiAq1W.js";import"./filter-_ePnXriG.js";import"./FSText-CnF0GPuv.js";import"./FSClickable-DxBn6HxC.js";const V=B({name:"FSTranslateRichTextField",components:{FSRichTextField:j,FSButton:c,FSIcon:R,FSSpan:C,FSCol:f,FSRow:y},props:{translationsExpanded:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:h}=X(),a=N(e.translations);return{languages:h,onCancelTranslations:()=>{t("update:translationsExpanded",!1)},onSubmitTranslations:()=>{e.editable&&t("update:translations",a.value),t("update:translationsExpanded",!1)},getTranslation:i=>{if(!a.value)return b;const r=a.value.find(p=>p.languageCode===i);return!r||!r[e.property]?b:r[e.property].toString()},setTranslation:(i,r)=>{if(!a.value){a.value=[{languageCode:i,[e.property]:r}];return}const p=a.value.find($=>$.languageCode===i);p?p[e.property]=r:a.value.push({languageCode:i,[e.property]:r})}}}});function A(e,t,h,a,k,w){const d=q("FSRichTextField");return e.$props.translationsExpanded?(s(),m(f,{key:0},{default:n(()=>[o(f,{gap:"16px"},{default:n(()=>[o(d,v({editable:!1,label:e.$tr("ui.translateRichTextField.defaultValue","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(s(!0),H(U,null,I(e.languages,(l,i)=>(s(),m(d,v({editable:e.$props.editable,key:i,modelValue:e.getTranslation(l.code),"onUpdate:modelValue":r=>e.setTranslation(l.code,r),ref_for:!0},e.$attrs),{label:n(()=>[o(y,{wrap:!1,align:"center-left"},{default:n(()=>[o(C,{class:"fs-translate-field-label",font:"text-overline"},{default:n(()=>[g(x(e.$tr("ui.translateRichTextField.translateIn","Translate in {0}",l.label)),1)]),_:2},1024),o(R,null,{default:n(()=>[g(x(l.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1}),o(y,{wrap:!1},{default:n(()=>[o(c,{prependIcon:"mdi-cancel",width:"100%",label:e.$tr("ui.translateRichTextField.cancelButton.label","Cancel"),onClick:e.onCancelTranslations},null,8,["label","onClick"]),e.$props.editable?(s(),m(c,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("ui.translateRichTextField.validateButton.label","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"])):_("",!0)]),_:1})]),_:1})):(s(),m(d,v({key:1,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=l=>e.$emit("update:modelValue",l))},e.$attrs),{"append-inner":n(()=>[o(c,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("ui.translateRichTextField.translateButton.label","Manage translations"),onClick:t[0]||(t[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["editable","modelValue"]))}const E=L(V,[["render",A]]);V.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const it={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{translateExpanded1:!1,value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations1:null,variableReferences:[{code:"temperature",defaultValue:0,typeName:"number"},{code:"weather",defaultValue:"XXX",typeName:"string"}],translateExpanded2:!0,value2:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations2:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}],translateExpanded3:!1,value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations3:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}]}},render:(e,{argTypes:t})=>({components:{FSTranslateRichTextField:E,FSCol:f},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(S=(T=u.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const st=["Variations"];export{u as Variations,st as __namedExportsOrder,it as default};
