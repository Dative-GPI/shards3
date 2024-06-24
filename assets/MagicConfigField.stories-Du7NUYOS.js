import{d as w,c as f,y as s,z as g,A as v,B as d,q as M,K as o}from"./vue.esm-bundler-CLWyqtrq.js";import{M as l,u as V}from"./useMagicFieldProvider-DBuwESUQ.js";import{F as k,a as q}from"./FSButtonRemoveIcon-Bq_flxjz.js";import{F as I}from"./FSTranslateField-DaerCbPx.js";import{_ as r}from"./FSRow-B7tdsi71.js";import{b as $,I as N,D as B,N as c}from"./rules-BoPQyOiY.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as R}from"./FSCol-B1LPjIXg.js";import"./iframe-wePTj8HF.js";import"../sb-preview/runtime.js";import"./FSButton-xawrBwn0.js";import"./FSClickable-CX-mXFfM.js";import"./FSCard-CtrctGW7.js";import"./useColors-D61Fe1_L.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-bwyTeVCn.js";import"./css-Ca-HPGcF.js";import"./VProgressCircular-D5Exu0y-.js";import"./color-CiZ0sQz8.js";import"./useRender-BBsw_RbX.js";import"./resizeObserver-pTuJHNwh.js";import"./VIcon-CTYwU69W.js";import"./tag-CMDXkDN7.js";import"./FSSpan-C4Iz3qX9.js";import"./useSlots-YtBg7QOA.js";import"./FSIcon-nvjMvWEC.js";import"./FSDialogSubmit-CAO7B00K.js";import"./FSFadeOut-Cm2RoYLR.js";import"./uuid-DTaye2KM.js";import"./FSDialog-BR2gz5PN.js";import"./FSText-B9kmC_JD.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-3ec75IAg.js";import"./anchor-D3k-mERr.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./locale-DAz5thp-.js";import"./router-Bm0MCij7.js";import"./transition-D0Fyuczc.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./VSpacer-gQABP9En.js";import"./useTranslations-BiPIEqtB.js";import"./FSTextField-BJ0CYXhH.js";import"./VField-BXxuzAJZ.js";import"./index-3KSGAm21.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./rounded-BEQ3HMtY.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./useLanguages-CZGNnI5u.js";import"./base-BNnJ_ndD.js";import"./serviceFactory-D_XwB3_y.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BGJVwV03.js";import"./useAppTimeZone-CjMaOqrj.js";import"./time-DShBRzYX.js";const D=w({name:"FSMagicConfigField",components:{FSButtonRemoveIcon:k,FSTranslateField:I,FSButtonAddIcon:q,FSRow:r},props:{type:{type:Number,required:!1,default:l.TextField},labelDefault:{type:String,required:!1,default:null},value:{type:String,required:!1,default:null},translations:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["click:remove","click:add","update:value","update:labelDefault","update:translations"],setup(e,{emit:a}){const{get:u}=V(),m=f(()=>{switch(e.type){case l.NumberField:return[c.required()];case l.TextField:return[c.required()];case l.DateTimeField:return[B.required()];case l.IconField:return[N.required()];case l.TimeField:return[$.required()]}return[]}),p=f(()=>{switch(e.type){case l.NumberField:case l.DateTimeField:case l.TimeField:return e.value==null||isNaN(parseFloat(e.value))?null:parseFloat(e.value);case l.Switch:return e.value==null?null:e.value==="true";default:return e.value}});return{MagicFieldType:l,valueToInput:p,rules:m,inputToValue:t=>{switch(e.type){case l.NumberField:case l.Switch:case l.DateTimeField:case l.TimeField:if(t==null){a("update:value",null);break}a("update:value",t.toString());break;default:a("update:value",t);break}},get:u}}});function A(e,a,u,m,p,T){const t=s("FSTranslateField"),C=s("FSButtonRemoveIcon"),h=s("FSButtonAddIcon");return g(),v(r,null,{default:d(()=>[(g(),v(M(e.get(e.$props.type)),{class:"fs-magic-config-field-value",label:e.$tr("ui.magic-config-field.value","Value"),editable:e.$props.editable,required:!0,rules:e.rules,modelValue:e.valueToInput,"onUpdate:modelValue":e.inputToValue},null,8,["label","editable","rules","modelValue","onUpdate:modelValue"])),o(r,{gap:"24px"},{default:d(()=>[o(t,{label:e.$tr("ui.magic-config-field.label","Label"),editable:e.$props.editable,modelValue:e.$props.labelDefault,translations:e.$props.translations,"onUpdate:modelValue":a[0]||(a[0]=n=>e.$emit("update:labelDefault",n)),"onUpdate:translations":a[1]||(a[1]=n=>e.$emit("update:translations",n))},null,8,["label","editable","modelValue","translations"]),o(r,{class:"fs-magic-config-field-actions",width:"hug",wrap:!1},{default:d(()=>[o(C,{onClick:a[2]||(a[2]=n=>e.$emit("click:remove"))}),o(h,{onClick:a[3]||(a[3]=n=>e.$emit("click:add"))})]),_:1})]),_:1})]),_:1})}const S=x(D,[["render",A]]);D.__docgenInfo={displayName:"FSMagicConfigField",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MagicFieldType"},required:!1,defaultValue:{func:!1,value:"MagicFieldType.TextField"}},{name:"labelDefault",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"translations",type:{name:"{ languageCode: string; label: string }[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:labelDefault"},{name:"update:translations"},{name:"click:remove"},{name:"click:add"},{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSMagicConfigField.vue"]};const Ge={title:"Foundation/Shared/Input fields/MagicConfigField",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{labelDefault1:"NumberField",translations1:[],value1:"",labelDefault2:"Switch",translations2:[],value2:"",labelDefault3:"TextField",translations3:[],value3:"",labelDefault4:"DateTimeField",translations4:[],value4:"",labelDefault5:"IconField",translations5:[],value5:"",labelDefault6:"TimeField",translations6:[],value6:""}},render:(e,{argTypes:a})=>({components:{FSMagicConfigField:S,FSCol:R},props:Object.keys(a),setup(){return{...e}},template:`
    <FSCol>
      <FSMagicConfigField
        label="Number field"
        :type="1"
        v-model:translations="args.translations1"
        v-model:labelDefault="args.labelDefault1"
        v-model:value="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model:value="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model:value="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model:value="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model:value="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model:value="args.value6"
      />
    </FSCol>`})};var b,F,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    args: {
      labelDefault1: "NumberField",
      translations1: [],
      value1: "",
      labelDefault2: "Switch",
      translations2: [],
      value2: "",
      labelDefault3: "TextField",
      translations3: [],
      value3: "",
      labelDefault4: "DateTimeField",
      translations4: [],
      value4: "",
      labelDefault5: "IconField",
      translations5: [],
      value5: "",
      labelDefault6: "TimeField",
      translations6: [],
      value6: ""
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMagicConfigField,
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
      <FSMagicConfigField
        label="Number field"
        :type="1"
        v-model:translations="args.translations1"
        v-model:labelDefault="args.labelDefault1"
        v-model:value="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Switch"
        :type="2"
        v-model:translations="args.translations2"
        v-model:labelDefault="args.labelDefault2"
        v-model:value="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Text field"
        :type="3"
        v-model:translations="args.translations3"
        v-model:labelDefault="args.labelDefault3"
        v-model:value="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Date time field"
        :type="4"
        v-model:translations="args.translations4"
        v-model:labelDefault="args.labelDefault4"
        v-model:value="args.value4"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Icon field"
        :type="5"
        v-model:translations="args.translations5"
        v-model:labelDefault="args.labelDefault5"
        v-model:value="args.value5"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSMagicConfigField
        label="Time field"
        :type="6"
        v-model:translations="args.translations6"
        v-model:labelDefault="args.labelDefault6"
        v-model:value="args.value6"
      />
    </FSCol>\`
  })
}`,...(y=(F=i.parameters)==null?void 0:F.docs)==null?void 0:y.source}}};const He=["Variations"];export{i as Variations,He as __namedExportsOrder,Ge as default};
