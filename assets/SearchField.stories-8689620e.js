import{m as y,t as S,k as h,n as F,q,J as V,K as I,u as i,B as $,F as w,v as C,x as k,y as B}from"./vue.esm-bundler-29da8e49.js";import{C as u}from"./useColors-ad83dc40.js";import{F as m}from"./FSTextField-5c145b19.js";import{_ as c}from"./FSButton-0eb4a04f.js";import{_ as P}from"./FSIcon-f37b61fc.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-46176227.js";import"./FSCol-322e7463.js";import"./FSRow-99784c66.js";import"./VSpacer-353093b4.js";import"./VIcon-8d401865.js";import"./index-3038ad46.js";import"./VInput-ee7ba7bd.js";import"./locale-542d2ec8.js";import"./rounded-6c346ce6.js";import"./loader-549251e9.js";import"./VBtn-121c840b.js";import"./group-ef24a5b8.js";import"./VDefaultsProvider-293b550d.js";import"./index-cd8a77ee.js";import"./resizeObserver-55bed5e2.js";const f=y({name:"FSSearchField",components:{FSTextField:m,FSButton:c,FSIcon:P},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},buttonPrependIcon:{type:String,required:!1,default:"mdi-magnify"},buttonLabel:{type:String,required:!1,default:null},buttonAppendIcon:{type:String,required:!1,default:null},buttonVariant:{type:String,required:!1,default:"standard"},value:{type:String,required:!1,default:null},color:{type:String,required:!1,default:u.Dark},buttonColor:{type:String,required:!1,default:u.Primary},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{editable:t}=S(e),l=h(e.value);return{innerValue:l,onUpdate:()=>{t.value&&a("update:value",l.value)}}}});function U(e,a,t,l,v,D){return F(),q(m,w({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:e.innerValue,"onUpdate:value":a[0]||(a[0]=n=>e.innerValue=n)},e.$attrs),V({append:i(()=>[$(c,{prependIcon:e.$props.buttonPrependIcon,label:e.$props.buttonLabel,appendIcon:e.$props.buttonAppendIcon,variant:e.$props.buttonVariant,color:e.$props.buttonColor,editable:e.$props.editable,onClick:e.onUpdate},null,8,["prependIcon","label","appendIcon","variant","color","editable","onClick"])]),_:2},[I(e.$slots,(n,o)=>({name:o,fn:i(g=>[C(e.$slots,o,k(B(g)))])}))]),1040,["label","description","type","color","required","editable","value"])}const b=L(f,[["render",U]]);f.__docgenInfo={displayName:"FSSearchField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonPrependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-magnify"'}},{name:"buttonLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonAppendIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"buttonVariant",values:["standard","full","icon"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"value",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"buttonColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSearchField.vue"]};const le={title:"Foundation/Shared/Input fields/SearchField",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(e,{argTypes:a})=>({components:{FSSearchField:b},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSearchField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value2" buttonLabel="Search" label="Search - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value3" buttonLabel="I'm feeling lucky" buttonPrependIcon="mdi-clover" buttonColor="warning" label="Search password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>`})};var d,s,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      FSSearchField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSearchField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value2" buttonLabel="Search" label="Search - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value3" buttonLabel="I'm feeling lucky" buttonPrependIcon="mdi-clover" buttonColor="warning" label="Search password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>\`
  })
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const te=["Variations"];export{r as Variations,te as __namedExportsOrder,le as default};
