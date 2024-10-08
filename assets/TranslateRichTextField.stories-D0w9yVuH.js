import{d as N,b as _,y as g,z as s,A as p,C as o,m as c,N as l,E as H,O as q,H as x,I as b,G as I,F as U}from"./vue.esm-bundler-CWdIlc2r.js";import{F as j}from"./FSButtonCancelLabel-B6O0Wm4i.js";import{F as L,e as F}from"./FSRichTextField-BMrq8Tnv.js";import{F as f}from"./FSButton-C0E8ILJw.js";import{F as V}from"./FSIcon-kERq0rd3.js";import{_ as E}from"./FSSpan-Bnbdrku6.js";import{F as u}from"./FSCol-CvoATp5Q.js";import{_ as v}from"./FSRow-BnsweOMX.js";import{u as X}from"./useAppLanguages-DQ8w8vvs.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./FSAutocompleteField-BsuqiUNA.js";import"./FSSearchField-OYD9-eLG.js";import"./FSTextField-JGjjGRZ0.js";import"./FSBaseField-D0m8YJR6.js";import"./useSlots-zwOl0abH.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./useRules-CY0rKEBQ.js";import"./useBreakpoints-INFVV7da.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./VIcon-Bo7R9vIQ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSDialogMenu-pzU7lUOk.js";import"./FSCard-BOEac87c.js";import"./css-BWDYXGFo.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./router-lEm-a6ws.js";import"./FSSlideGroup-CDRvV-qZ.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BAVwN0SI.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./FSToggleSet-XllH3ja9.js";import"./FSWrapGroup-Cj-lYBpD.js";import"./FSCheckbox-BnhjVDBp.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-DxMiSoxL.js";import"./FSLoader-DzvXQnnL.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-vYSNhBy9.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-B1CQJS6i.js";import"./VMenu-OPxqXTkz.js";import"./filter-pNTMaczj.js";import"./FSText-BprvNhQU.js";import"./FSClickable-DTqk3LMl.js";const R=N({name:"FSTranslateRichTextField",components:{FSButtonCancelLabel:j,FSRichTextField:L,FSButton:f,FSIcon:V,FSSpan:E,FSCol:u,FSRow:v},props:{translationsExpanded:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:r}){const{languages:y}=X(),n=_(e.translations);return{languages:y,onCancelTranslations:()=>{r("update:translationsExpanded",!1)},onSubmitTranslations:()=>{e.editable&&r("update:translations",n.value),r("update:translationsExpanded",!1)},getTranslation:t=>{if(!n.value)return F;const a=n.value.find(i=>i.languageCode===t);return!a||!a[e.property]?F:a[e.property].toString()},setTranslation:(t,a)=>{if(!n.value){n.value=[{languageCode:t,[e.property]:a}];return}const i=n.value.find(B=>B.languageCode===t);i?i[e.property]=a:n.value.push({languageCode:t,[e.property]:a})}}}});function A(e,r,y,n,w,$){const d=g("FSRichTextField"),h=g("FSButtonCancelLabel");return e.$props.translationsExpanded?(s(),p(u,{key:0},{default:o(()=>[l(u,{gap:"16px"},{default:o(()=>[l(d,c({editable:!1,label:e.$tr("ui.translate-rich-text-field.default-value","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(s(!0),H(I,null,q(e.languages,(t,a)=>(s(),p(d,c({editable:e.$props.editable,key:a,modelValue:e.getTranslation(t.code),"onUpdate:modelValue":i=>e.setTranslation(t.code,i),ref_for:!0},e.$attrs),{label:o(()=>[l(v,{wrap:!1,align:"center-left"},{default:o(()=>[l(E,{class:"fs-translate-field-label",font:"text-overline"},{default:o(()=>[x(b(e.$tr("ui.translate-rich-text-field.translate-in","Translate in {0}",t.label)),1)]),_:2},1024),l(V,null,{default:o(()=>[x(b(t.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1}),l(v,{wrap:!1},{default:o(()=>[l(h,{prependIcon:"mdi-cancel",width:"100%",onClick:e.onCancelTranslations},null,8,["onClick"]),e.$props.editable?(s(),p(f,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("ui.translate-rich-text-field.validate-button.label","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"])):U("",!0)]),_:1})]),_:1})):(s(),p(d,c({key:1,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[1]||(r[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),{"append-inner":o(()=>[l(f,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("ui.translate-rich-text-field.translate-button.label","Manage translations"),onClick:r[0]||(r[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["editable","modelValue"]))}const k=O(R,[["render",A]]);R.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const dt={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:k,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{translateExpanded1:!1,value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations1:null,variableReferences:[{code:"temperature",defaultValue:0,typeName:"number"},{code:"weather",defaultValue:"XXX",typeName:"string"}],translateExpanded2:!0,value2:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations2:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}],translateExpanded3:!1,value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations3:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}]}},render:(e,{argTypes:r})=>({components:{FSTranslateRichTextField:k,FSCol:u},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})};var T,S,C;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(C=(S=m.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const pt=["Variations"];export{m as Variations,pt as __namedExportsOrder,dt as default};
