import{m as f,n as c,q as b,J as v,K as g,F as y,u as F,v as q,x as S,y as N}from"./vue.esm-bundler-29da8e49.js";import{C as h}from"./useColors-ad83dc40.js";import{F as d}from"./FSTextField-5c145b19.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-46176227.js";import"./FSCol-322e7463.js";import"./FSRow-99784c66.js";import"./VSpacer-353093b4.js";import"./VIcon-8d401865.js";import"./index-3038ad46.js";import"./VInput-ee7ba7bd.js";import"./locale-542d2ec8.js";import"./rounded-6c346ce6.js";import"./loader-549251e9.js";const u=f({name:"FSNumberField",components:{FSTextField:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:h.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"]});function w(e,r,x,k,V,B){var t;return c(),b(d,y({type:"number",label:e.$props.label,description:e.$props.description,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:(t=e.$props.value)==null?void 0:t.toString(),"onUpdate:value":r[0]||(r[0]=l=>e.$emit("update:value",isNaN(parseFloat(l))?0:parseFloat(l)))},e.$attrs),v({_:2},[g(e.$slots,(l,o)=>({name:o,fn:F(m=>[q(e.$slots,o,S(N(m)))])}))]),1040,["label","description","color","required","editable","value"])}const p=$(u,[["render",w]]);u.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSNumberField.vue"]};const G={title:"Foundation/Shared/Input fields/NumberField",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:500,value3:null,value4:1500}},render:(e,{argTypes:r})=>({components:{FSNumberField:p},props:Object.keys(r),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSNumberField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value2" label="Number - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value3" label="Required number - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>`})};var i,n,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 500,
      value3: null,
      value4: 1500
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSNumberField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSNumberField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value2" label="Number - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value3" label="Required number - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value4" label="Uneditable" description="Uneditable description" :editable="false" />
    </div>\`
  })
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const H=["Variations"];export{a as Variations,H as __namedExportsOrder,G as default};
