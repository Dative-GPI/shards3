import{g as y,o as F,j as q,E as N,F as $,x as S,k,q as E,G as T,H as B}from"./vue.esm-bundler-c3efb794.js";import{C}from"./VIcon-c46aeaeb.js";import{T as f}from"./FSTextField-390daac0.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-d98aa7bb.js";import"./FSCol-6013107c.js";import"./index-f39a8f63.js";import"./VInput-53fffe8c.js";import"./loader-5b2fe5c8.js";import"./rounded-c9feffd5.js";import"./easing-9998643d.js";const b=y({name:"FSNumberField",components:{FSTextField:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:C.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"]});function V(e,a,j,O,w,P){var t;return F(),q(f,S({type:"number",label:e.$props.label,description:e.$props.description,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:(t=e.$props.value)==null?void 0:t.toString(),"onUpdate:value":a[0]||(a[0]=l=>e.$emit("update:value",isNaN(parseFloat(l))?0:parseFloat(l)))},e.$attrs),N({_:2},[$(e.$slots,(l,o)=>({name:o,fn:k(v=>[E(e.$slots,o,T(B(v)))])}))]),1040,["label","description","color","required","editable","value"])}const s=h(b,[["render",V]]);b.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSNumberField.vue"]};const M={title:"Foundation/Shared/NumberField",component:s,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <NumberField v-bind="args" v-model:value="args.value" />
</v-container>
`,r={args:{args:{label:"Editable",value:null,color:"primary"}},render:(e,{argTypes:a})=>({components:{NumberField:s},props:Object.keys(a),setup(){return{...e}},template:g})},n={args:{args:{label:"Not editable",value:null,color:"warning",editable:!1}},render:(e,{argTypes:a})=>({components:{NumberField:s},props:Object.keys(a),setup(){return{...e}},template:g})};var u,i,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Editable",
      value: null,
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      NumberField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,m,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Not editable",
      value: null,
      color: "warning",
      editable: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      NumberField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Q=["Editable","NotEditable"];export{r as Editable,n as NotEditable,Q as __namedExportsOrder,M as default};
