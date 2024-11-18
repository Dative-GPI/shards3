import{d as L,a as N,y as b,z as s,A as p,C as o,N as l,m as y,G as U,I as _,O,D as F,E as T,H as A}from"./vue.esm-bundler-D3ngFwGY.js";import{F as D}from"./FSButtonCancelLabel-DSbuQW_M.js";import{e as V,F as G}from"./FSRichTextField-D_4gzBZm.js";import{F as x}from"./FSButton-D8KNVcat.js";import{F as X}from"./FSIcon-C0akNC9K.js";import{_ as $}from"./FSSpan-BETzK1-3.js";import{F as d}from"./FSCol-CVj0zcU5.js";import{_ as c}from"./FSRow-CYD73_tT.js";import{u as M}from"./useAppLanguages-siB11whh.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./FSAutocompleteField-B1f-d-lL.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./useSlots-BM37IFiq.js";import"./useRules-BmSxRe3B.js";import"./useBreakpoints-DbdoA89o.js";import"./VField-Ddzu1ph-.js";import"./index-D1hHR51g.js";import"./color-D4nM6Ihv.js";import"./transition-DtcXiLpW.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./locale-R8GaLlvb.js";import"./VIcon-DBlUULm8.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./form-thVqu4eJ.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./useTranslations-Dmqoe3Kp.js";import"./VList-_wRy0k6Y.js";import"./FSCard-BZyb3dNk.js";import"./css-BOQ-6X_w.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSCheckbox-BdK031Hz.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";import"./FSText-CcQBLJU9.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";const q=L({name:"FSTranslateRichTextField",components:{FSButtonCancelLabel:D,FSRichTextField:G,FSButton:x,FSIcon:X,FSSpan:$,FSCol:d,FSRow:c},props:{translationsExpanded:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},modelValue:{type:[Object,String],required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},property:{type:String,required:!1,default:"label"}},emits:["update:translationsExpanded","update:modelValue","update:translations"],setup(e,{emit:t}){const{languages:h}=M(),r=N(e.translations);return{languages:h,onCancelTranslations:()=>{t("update:translationsExpanded",!1)},onSubmitTranslations:()=>{e.editable&&t("update:translations",r.value),t("update:translationsExpanded",!1)},getTranslation:n=>{if(!r.value)return V;const a=r.value.find(i=>i.languageCode===n);return!a||!a[e.property]?V:a[e.property]},setTranslation:(n,a)=>{if(!r.value){r.value=[{languageCode:n,[e.property]:a}];return}const i=r.value.find(I=>I.languageCode===n);i?i[e.property]=a:r.value.push({languageCode:n,[e.property]:a})}}}});function z(e,t,h,r,B,j){const m=b("FSRichTextField"),g=b("FSButtonCancelLabel");return e.$props.translationsExpanded?(s(),p(d,{key:0},{default:o(()=>[l(d,{gap:"16px"},{default:o(()=>[l(m,y({editable:!1,label:e.$tr("translate-rich-text-field.default-value","Default value"),modelValue:e.$props.modelValue},e.$attrs),null,16,["label","modelValue"]),(s(!0),U(_,null,O(e.languages,(n,a)=>(s(),p(m,y({editable:e.$props.editable,key:a,modelValue:e.getTranslation(n.code),"onUpdate:modelValue":i=>e.setTranslation(n.code,i),ref_for:!0},e.$attrs),{label:o(()=>[l(c,{wrap:!1,align:"center-left"},{default:o(()=>[l($,{class:"fs-translate-field-label",font:"text-overline"},{default:o(()=>[F(T(e.$tr("translate-rich-text-field.translate-in","Translate in {0}",n.label)),1)]),_:2},1024),l(X,null,{default:o(()=>[F(T(n.icon),1)]),_:2},1024)]),_:2},1024)]),_:2},1040,["editable","modelValue","onUpdate:modelValue"]))),128))]),_:1}),l(c,{wrap:!1},{default:o(()=>[l(g,{prependIcon:"mdi-cancel",width:"100%",onClick:e.onCancelTranslations},null,8,["onClick"]),e.$props.editable?(s(),p(x,{key:0,prependIcon:"mdi-check",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.validate","Validate translations"),onClick:e.onSubmitTranslations},null,8,["label","onClick"])):A("",!0)]),_:1})]),_:1})):(s(),p(m,y({key:1,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),{"append-inner":o(()=>[l(x,{prependIcon:"mdi-translate",color:"primary",width:"100%",label:e.$tr("translate-rich-text-field.manage-translations","Manage translations"),onClick:t[0]||(t[0]=()=>e.$emit("update:translationsExpanded",!0))},null,8,["label"])]),_:1},16,["editable","modelValue"]))}const v=W(q,[["render",z]]);q.__docgenInfo={displayName:"FSTranslateRichTextField",exportName:"default",description:"",tags:{},props:[{name:"translationsExpanded",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"{ [key: string]: any } | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:`{
  languageCode: string;
  [key: string]: string | object | null;
}[]`},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"property",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"update:modelValue"},{name:"update:translationsExpanded"},{name:"update:translations"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTranslateRichTextField.vue"]};const ft={title:"Foundation/Shared/Input fields/TranslateRichTextField",component:v,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:translations":{action:"update:translations"},"onUpdate:translationsExpanded":{action:"update:translationsExpanded"}}},u={args:{translationsExpanded:!1,modelValue:'{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Click ","type":"text","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"here","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"link","version":1,"rel":"noreferrer","target":"_blank","title":"","url":"https://www.dative-gpi.com/"},{"detail":0,"format":0,"mode":"normal","style":"","text":" to visit a marvelous website","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',translations:[],variableReferences:[{code:"temperature",defaultValue:0,typeName:"number"},{code:"weather",defaultValue:"XXX",typeName:"string"}],label:"Rich text translatable",required:!0,editable:!0,property:"label",description:"This is a rich text field"},render:(e,{argTypes:t})=>({components:{FSTranslateRichTextField:v,FSCol:d},props:Object.keys(t),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})},f={args:{translationsExpanded:!1,modelValue:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Current weather : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"A nice home is a ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"French villa ",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:"with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"arched windows",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" that allow plenty of natural light to flood the spacious, open interiors. ",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Inside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},translations:[{text:{root:{children:[{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h1"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Météo actuelle : ",type:"text",version:1},{type:"variable",version:1,code:"weather",defaultValue:"XXX"},{detail:0,format:0,mode:"normal",style:"",text:" (",type:"text",version:1},{type:"variable",version:1,code:"temperature",defaultValue:0},{detail:0,format:0,mode:"normal",style:"",text:" °C)",type:"text",version:1}],direction:"ltr",format:"center",indent:0,type:"heading",version:1,tag:"h3"},{children:[{detail:0,format:0,mode:"normal",style:"",text:"Une belle maison est une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"villa française",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" avec un immense ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"jardin",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", entourée de verdure luxuriante et de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fleurs",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" éclatantes. La villa possède une élégante ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"façade en pierre",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et de grandes ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"fenêtres",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1},{children:[{detail:0,format:0,mode:"normal",style:"",text:"À l'intérieur, la villa offre de ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"hauts plafonds",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:", des ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"poutres en bois",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et un mobilier ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"rustique",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" et chaleureux. La ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"terrasse",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" extérieure est idéale pour dîner, et une ",type:"text",version:1},{detail:0,format:1,mode:"normal",style:"",text:"piscine",type:"text",version:1},{detail:0,format:0,mode:"normal",style:"",text:" scintillante invite à la détente lors des journées ensoleillées.",type:"text",version:1}],direction:"ltr",format:"",indent:0,type:"paragraph",version:1}],direction:"ltr",format:"",indent:0,type:"root",version:1}},languageCode:"fr-FR"},{text:null,languageCode:"it-IT"},{text:null,languageCode:"en-GB"},{text:null,languageCode:"es-ES"}],variableReferences:[{code:"temperature",defaultValue:0,label:"Température"},{code:"weather",defaultValue:"XXX",label:"Weather"}],label:"Rich text translatable",required:!0,editable:!0,property:"text",description:"This is a rich text field"},render:(e,{argTypes:t})=>({components:{FSTranslateRichTextField:v,FSCol:d},props:Object.keys(t),setup(){return{args:e}},template:`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`})};var E,S,w;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    translationsExpanded: false,
    modelValue: "{\\"root\\":{\\"children\\":[{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"Click \\",\\"type\\":\\"text\\",\\"version\\":1},{\\"children\\":[{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\"here\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"link\\",\\"version\\":1,\\"rel\\":\\"noreferrer\\",\\"target\\":\\"_blank\\",\\"title\\":\\"\\",\\"url\\":\\"https://www.dative-gpi.com/\\"},{\\"detail\\":0,\\"format\\":0,\\"mode\\":\\"normal\\",\\"style\\":\\"\\",\\"text\\":\\" to visit a marvelous website\\",\\"type\\":\\"text\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"paragraph\\",\\"version\\":1}],\\"direction\\":\\"ltr\\",\\"format\\":\\"\\",\\"indent\\":0,\\"type\\":\\"root\\",\\"version\\":1}}",
    translations: [],
    variableReferences: [{
      code: "temperature",
      defaultValue: 0,
      typeName: "number"
    }, {
      code: "weather",
      defaultValue: "XXX",
      typeName: "string"
    }],
    label: 'Rich text translatable',
    required: true,
    editable: true,
    property: 'label',
    description: 'This is a rich text field'
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
        args
      };
    },
    template: \`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(w=(S=u.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,k,R;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    translationsExpanded: false,
    modelValue: {
      "root": {
        "children": [{
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "A nice home",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "center",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h1"
        }, {
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "Current weather : ",
            "type": "text",
            "version": 1
          }, {
            "type": "variable",
            "version": 1,
            "code": "weather",
            "defaultValue": "XXX"
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": " (",
            "type": "text",
            "version": 1
          }, {
            "type": "variable",
            "version": 1,
            "code": "temperature",
            "defaultValue": 0
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": " °C)",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "center",
          "indent": 0,
          "type": "heading",
          "version": 1,
          "tag": "h3"
        }, {
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "A nice home is a ",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 1,
            "mode": "normal",
            "style": "",
            "text": "French villa ",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large ",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 1,
            "mode": "normal",
            "style": "",
            "text": "arched windows",
            "type": "text",
            "version": 1
          }, {
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": " that allow plenty of natural light to flood the spacious, open interiors. ",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        }, {
          "children": [{
            "detail": 0,
            "format": 0,
            "mode": "normal",
            "style": "",
            "text": "Inside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.",
            "type": "text",
            "version": 1
          }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "paragraph",
          "version": 1
        }],
        "direction": "ltr",
        "format": "",
        "indent": 0,
        "type": "root",
        "version": 1
      }
    },
    translations: [{
      "text": {
        "root": {
          "children": [{
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Une belle maison",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "center",
            "indent": 0,
            "type": "heading",
            "version": 1,
            "tag": "h1"
          }, {
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Météo actuelle : ",
              "type": "text",
              "version": 1
            }, {
              "type": "variable",
              "version": 1,
              "code": "weather",
              "defaultValue": "XXX"
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " (",
              "type": "text",
              "version": 1
            }, {
              "type": "variable",
              "version": 1,
              "code": "temperature",
              "defaultValue": 0
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " °C)",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "center",
            "indent": 0,
            "type": "heading",
            "version": 1,
            "tag": "h3"
          }, {
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "Une belle maison est une ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "villa française",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " avec un immense ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "jardin",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": ", entourée de verdure luxuriante et de ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "fleurs",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " éclatantes. La villa possède une élégante ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "façade en pierre",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " et de grandes ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "fenêtres",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "",
            "indent": 0,
            "type": "paragraph",
            "version": 1
          }, {
            "children": [{
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": "À l'intérieur, la villa offre de ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "hauts plafonds",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": ", des ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "poutres en bois",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " et un mobilier ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "rustique",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " et chaleureux. La ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "terrasse",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " extérieure est idéale pour dîner, et une ",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 1,
              "mode": "normal",
              "style": "",
              "text": "piscine",
              "type": "text",
              "version": 1
            }, {
              "detail": 0,
              "format": 0,
              "mode": "normal",
              "style": "",
              "text": " scintillante invite à la détente lors des journées ensoleillées.",
              "type": "text",
              "version": 1
            }],
            "direction": "ltr",
            "format": "",
            "indent": 0,
            "type": "paragraph",
            "version": 1
          }],
          "direction": "ltr",
          "format": "",
          "indent": 0,
          "type": "root",
          "version": 1
        }
      },
      "languageCode": "fr-FR"
    }, {
      "text": null,
      "languageCode": "it-IT"
    }, {
      "text": null,
      "languageCode": "en-GB"
    }, {
      "text": null,
      "languageCode": "es-ES"
    }],
    variableReferences: [{
      code: "temperature",
      defaultValue: 0,
      label: "Température"
    }, {
      code: "weather",
      defaultValue: "XXX",
      label: "Weather"
    }],
    label: 'Rich text translatable',
    required: true,
    editable: true,
    property: 'text',
    description: 'This is a rich text field'
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
        args
      };
    },
    template: \`
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>\`
  })
}`,...(R=(k=f.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const yt=["Default","TranslationObject"];export{u as Default,f as TranslationObject,yt as __namedExportsOrder,ft as default};
