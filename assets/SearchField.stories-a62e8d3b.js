import{m as f,k as v,n as b,q as g,G as S,H as y,v as o,x as h,C as F,y as q,I as $,J as w}from"./vue.esm-bundler-d10a8528.js";import{C as I}from"./VIcon-57787e8c.js";import{F as s}from"./FSTextField-cf637ab1.js";import{_ as u}from"./FSButton-37beb5c2.js";import{_ as V}from"./FSIcon-27c19cbf.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-abccc23b.js";import"./FSCol-b1484c92.js";import"./index-a10acb8c.js";import"./VInput-45446a90.js";import"./locale-5c0ffb6b.js";import"./rounded-6f26bd38.js";import"./loader-d94ba622.js";import"./easing-9998643d.js";import"./FSRow-c01fca12.js";import"./VBtn-3a7ed80e.js";import"./group-6a276766.js";import"./VDefaultsProvider-1a074de6.js";import"./index-915a05f1.js";import"./resizeObserver-6e691bac.js";const p=f({name:"FSSearchField",components:{FSTextField:s,FSButton:u,FSIcon:V},props:{buttonPrependIcon:{type:String,required:!1,default:"mdi-magnify"},buttonLabel:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:String,required:!1,default:null},color:{type:String,required:!1,default:I.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e){return{innerValue:v(e.value)}}});function B(e,r,C,L,P,x){return b(),g(s,F({label:e.$props.label,description:e.$props.description,type:e.type,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:e.innerValue,"onUpdate:value":r[1]||(r[1]=l=>e.innerValue=l)},e.$attrs),S({append:o(()=>[h(u,{variant:"standard",prependIcon:e.$props.buttonPrependIcon,label:e.$props.buttonLabel,color:e.$props.color,onClick:r[0]||(r[0]=()=>e.$emit("update:value",e.innerValue))},null,8,["prependIcon","label","color"])]),_:2},[y(e.$slots,(l,t)=>({name:t,fn:o(c=>[q(e.$slots,t,$(w(c)))])}))]),1040,["label","description","type","color","required","editable","value"])}const m=k(p,[["render",B]]);p.__docgenInfo={displayName:"FSSearchField",exportName:"default",description:"",tags:{},props:[{name:"buttonPrependIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-magnify"'}},{name:"buttonLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSearchField.vue"]};const re={title:"Foundation/Shared/Input fields/SearchField",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:"Search",value3:null,value4:"Search"}},render:(e,{argTypes:r})=>({components:{FSSearchField:m},props:Object.keys(r),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSearchField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value2" buttonLabel="Search" label="Search - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value3" buttonLabel="I'm feeling lucky" buttonPrependIcon="mdi-clover" label="Search password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>`})};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <FSSearchField v-model:value="args.value3" buttonLabel="I'm feeling lucky" buttonPrependIcon="mdi-clover" label="Search password - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSearchField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>\`
  })
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const ae=["Editable"];export{a as Editable,ae as __namedExportsOrder,re as default};
