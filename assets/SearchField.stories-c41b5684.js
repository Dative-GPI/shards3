import{n as v,t as h,l as F,q,u as V,L as C,M as $,v as i,x as d,B as I,G as k,y as w,z as B}from"./vue.esm-bundler-722d5586.js";import{C as u}from"./useTimeZone-e2d91037.js";import{F as c}from"./FSTextField-525dcab2.js";import{_ as f}from"./FSButton-c75448a6.js";import{_ as P}from"./FSIcon-420cc903.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as U}from"./FSCol-73c0912e.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-25dfede3.js";import"./FSRow-adbe3642.js";import"./VSpacer-14789593.js";import"./VIcon-3294e246.js";import"./VField-ef78f264.js";import"./index-debb29c6.js";import"./VInput-157b0d5f.js";import"./locale-4b40caf6.js";import"./rounded-0d60e9e4.js";import"./loader-40ab58f6.js";import"./VBtn-6a2a5334.js";import"./elevation-03171874.js";import"./group-a0dbf136.js";import"./VDefaultsProvider-ca83b848.js";import"./index-de6a3e08.js";import"./VProgressCircular-c301256c.js";import"./resizeObserver-c610ad12.js";const b=v({name:"FSSearchField",components:{FSTextField:c,FSButton:f,FSIcon:P},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},buttonPrependIcon:{type:String,required:!1,default:"mdi-magnify"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},modelValue:{type:String,required:!1,default:null},color:{type:String,required:!1,default:u.Dark},buttonColor:{type:String,required:!1,default:u.Primary},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{editable:n}=h(e),l=F(e.modelValue);return{innerValue:l,onUpdate:()=>{n.value&&r("update:modelValue",l.value)}}}});function D(e,r,n,l,g,T){return q(),V(c,k({label:e.$props.label,description:e.$props.description,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,modelValue:e.innerValue,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerValue=o)},e.$attrs),C({append:i(()=>[d(e.$slots,"append",{},()=>[I(f,{prependIcon:e.$props.buttonPrependIcon,label:e.$props.buttonLabel,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,editable:e.$props.editable,onClick:e.onUpdate},null,8,["prependIcon","label","appendIcon","variant","color","editable","onClick"])])]),_:2},[$(e.$slots,(o,t)=>({name:t,fn:i(y=>[d(e.$slots,t,w(B(y)))])}))]),1040,["label","description","color","required","editable","modelValue"])}const S=L(b,[["render",D]]);b.__docgenInfo={displayName:"FSSearchField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonPrependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-magnify"'}},{name:"buttonLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"append"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSearchField.vue"]};const ie={title:"Foundation/Shared/Input fields/SearchField",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(e,{argTypes:r})=>({components:{FSSearchField:S,FSCol:U},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSSearchField
        label="Search - dark color, primary button color, no button label"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        buttonLabel="Search"
        color="primary"
        label="Search - primary color, button label"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        buttonColor="warning"
        buttonPrependIcon="mdi-clover"
        buttonLabel="I'm feeling lucky"
        color="warning"
        label="Search - required - warning color, button label & icon"
        description="Description for this field"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})};var s,p,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Search",
      value3: null,
      value4: "Search"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSearchField,
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
      <FSSearchField
        label="Search - dark color, primary button color, no button label"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        buttonLabel="Search"
        color="primary"
        label="Search - primary color, button label"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        buttonColor="warning"
        buttonPrependIcon="mdi-clover"
        buttonLabel="I'm feeling lucky"
        color="warning"
        label="Search - required - warning color, button label & icon"
        description="Description for this field"
        :required="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField
        label="Uneditable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const de=["Variations"];export{a as Variations,de as __namedExportsOrder,ie as default};
