import{m as f,n as v,q as b,G as c,H as g,C as y,v as F,y as q,I as S,J as N}from"./vue.esm-bundler-d10a8528.js";import{C as h}from"./VIcon-57787e8c.js";import{F as d}from"./FSTextField-cf637ab1.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSSpan-abccc23b.js";import"./FSCol-b1484c92.js";import"./index-a10acb8c.js";import"./VInput-45446a90.js";import"./locale-5c0ffb6b.js";import"./rounded-6f26bd38.js";import"./loader-d94ba622.js";import"./easing-9998643d.js";const u=f({name:"FSNumberField",components:{FSTextField:d},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Number,required:!1,default:null},color:{type:String,required:!1,default:h.Dark},required:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"]});function w(e,r,k,x,C,V){var o;return v(),b(d,y({type:"number",label:e.$props.label,description:e.$props.description,color:e.$props.color,required:e.$props.required,editable:e.$props.editable,value:(o=e.$props.value)==null?void 0:o.toString(),"onUpdate:value":r[0]||(r[0]=l=>e.$emit("update:value",isNaN(parseFloat(l))?0:parseFloat(l)))},e.$attrs),c({_:2},[g(e.$slots,(l,t)=>({name:t,fn:F(m=>[q(e.$slots,t,S(N(m)))])}))]),1040,["label","description","color","required","editable","value"])}const p=$(u,[["render",w]]);u.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSNumberField.vue"]};const J={title:"Foundation/Shared/Input fields/NumberField",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:500,value3:null,value4:1500}},render:(e,{argTypes:r})=>({components:{FSNumberField:p},props:Object.keys(r),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSNumberField v-model:value="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value2" label="Number - primary color" color="primary" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value3" label="Required number - warning color" color="warning" :required="true" description="Description for this field" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSNumberField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>`})};var n,i,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <FSNumberField v-model:value="args.value4" label="Uneditable" :editable="false" />
    </div>\`
  })
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const L=["Variations"];export{a as Variations,L as __namedExportsOrder,J as default};
