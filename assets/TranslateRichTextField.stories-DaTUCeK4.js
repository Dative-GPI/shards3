import{d as H,b as U,o as j,y as S,z as s,A as p,B as n,m as g,I as o,D as C,C as I,N,E,G as R,F as M}from"./vue.esm-bundler-DC82FEWN.js";import{F as D}from"./FSRichTextField-DnlOicGE.js";import{F as c}from"./FSButton-Do7vvvNJ.js";import{_ as f}from"./FSCol-B7HQy3FB.js";import{_ as $}from"./FSIcon-CBfle4ZR.js";import{F as O}from"./FSLoader-8B7k5XDA.js";import{_ as x}from"./FSRow-DoCXWKDP.js";import{_ as B}from"./FSSpan-CwfDYIua.js";import{u as W}from"./useLanguages-CGyTN8dQ.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSTextField-BJOz_lKI.js";import"./FSBaseField-Capz3MEE.js";import"./useColors-BCLFEGbK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DMal9AfS.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-NvTsfghw.js";import"./color-C5d3UYhE.js";import"./useRules-DS9e5-1Q.js";import"./VField-Blu283UA.js";import"./index-Drj2M_tW.js";import"./transition-DSqAHFz2.js";import"./VLabel-C0PlncZV.js";import"./VInput-CgdIt2Sd.js";import"./locale-BC9z6YbT.js";import"./VIcon-C6jgSf5f.js";import"./density-oYDdQVKs.js";import"./proxiedModel-BHphZos0.js";import"./loader-CIVpWd2w.js";import"./VProgressCircular-BvwZAexL.js";import"./anchor-D7FjyLmk.js";import"./rounded-jRyYRXzo.js";import"./VDefaultsProvider-CK2RW2y8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DI8u9ozT.js";import"./css-DYOPUjjE.js";import"./VDivider-nXfn8-bM.js";import"./FSClickable-BbRY9BmN.js";import"./FSCard-PwHP1R85.js";import"./dimensions-Dx7VlQQe.js";import"./elevation-xgrzvMGW.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-J8cSLWf9.js";const _=H({name:"FSTranslateRichTextField",components:{FSButton:c,FSCol:f,FSIcon:$,FSLoader:O,FSRichTextField:D,FSRow:x,FSSpan:B},props:{translationsExpanded:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},modelValue:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:t}){const{getMany:F,fetching:b,entities:T}=W(),a=U(e.translations),i='{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',y=d=>{if(!a.value)return i;const l=a.value.find(m=>m.languageCode===d);return!l||!l[e.property]?i:l[e.property].toString()},r=(d,l)=>{if(!a.value){a.value=[{languageCode:d,[e.property]:l}];return}const m=a.value.find(q=>q.languageCode===d);m?m[e.property]=l:a.value.push({languageCode:d,[e.property]:l})},v=()=>{e.editable&&t("update:translations",a.value),t("update:translationsExpanded",!1)},h=()=>{t("update:translationsExpanded",!1)};return j(()=>{F()}),{fetchingLanguages:b,languages:T,getTranslation:y,onCancelTranslations:h,onSubmitTranslations:v,setTranslation:r}}});function z(e,t,F,b,T,a){const i=S("FSRichTextField"),y=S("FSLoader");return e.$props.translationsExpanded?(s(),p(f,{key:0},{default:n(()=>[o(f,{gap:"16px"},{default:n(()=>[o(i,g({editable:!1,label:e.$tr("ui.translateRichTextField.defaultValue","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),e.fetchingLanguages?(s(),p(y,{key:0,width:"100%",height:"300px"})):C("",!0),(s(!0),I(M,null,N(e.languages,(r,v)=>(s(),p(i,g({editable:e.$props.editable,key:v,modelValue:e.getTranslation(r.code),ref_for:!0},e.$attrs,{"onUpdate:modelValue":h=>e.setTranslation(r.code,h)}),{label:n(()=>[o(x,{wrap:!1},{default:n(()=>[o(B,{class:"fs-translate-field-label",font:"text-overline"},{default:n(()=>[E(R(e.$tr("ui.translateRichTextField.translateIn","Translate in {0}",r.label)),1)]),_:2},1024),o($,null,{default:n(()=>[E(R(r.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1}),o(x,{wrap:!1},{default:n(()=>[o(c,{label:e.$tr("ui.translateRichTextField.cancelButton.label","Cancel"),"prepend-icon":"mdi-cancel",fullWidth:!0,onClick:e.onCancelTranslations},null,8,["label","onClick"]),e.$props.editable?(s(),p(c,{key:0,label:e.$tr("ui.translateRichTextField.validateButton.label","Validate translations"),color:"primary","prepend-icon":"mdi-check",fullWidth:!0,onClick:e.onSubmitTranslations},null,8,["label","onClick"])):C("",!0)]),_:1})]),_:1})):(s(),p(i,g({key:1,modelValue:e.$props.modelValue,editable:e.$props.editable},e.$attrs,{"onUpdate:modelValue":t[1]||(t[1]=r=>e.$emit("update:modelValue",r))}),{"append-inner":n(()=>[o(c,{label:e.$tr("ui.translateRichTextField.translateButton.label","Manage translations"),load:e.fetchingLanguages,color:"primary","prepend-icon":"mdi-translate",fullWidth:!0,onClick:t[0]||(t[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label","load"])]),_:1},16,["modelValue","editable"]))}const L=A(_,[["render",z]]);_.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; [key: string]: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const Ie={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{translateExpanded1:!1,value1:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations1:null,translateExpanded2:!0,value2:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations2:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}],translateExpanded3:!1,value3:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations3:[{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello there","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"en-US"},{label:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bonjour vous","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',languageCode:"fr-FR"}]}},render:(e,{argTypes:t})=>({components:{FSTranslateRichTextField:L,FSCol:f},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        label="Rich text translatable"
        :required="true"
        desciption="This is a rich text field"
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
    </FSCol>`})};var V,k,w;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    args: {
      translateExpanded1: false,
      value1: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
      translations1: null,
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
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const Ne=["Variations"];export{u as Variations,Ne as __namedExportsOrder,Ie as default};
