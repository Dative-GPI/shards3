import{g as R,t as k,o as s,j as p,k as _,B as G,F as h,I as B}from"./vue.esm-bundler-c3efb794.js";import{C}from"./VIcon-c46aeaeb.js";import{_ as y}from"./FSRadio-38a8347b.js";import{C as O}from"./FSCol-6013107c.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./FSIcon-c64176f8.js";import"./FSSpan-d98aa7bb.js";import"./FSRow-531aa6d1.js";const S=R({name:"FSRadioGroup",components:{FSRadio:y,FSCol:O},props:{values:{type:Array,required:!0,default:!1},value:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:C.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:l,color:u,editable:d}=k(e);return{color:u,editable:d,isSelected:r=>r==l.value,onToggle:r=>{r!=l.value&&a("update:value",r)}}}});function L(e,a,l,u,d,q){return s(),p(O,{width:"hug"},{default:_(()=>[(s(!0),G(B,null,h(e.$props.values,o=>(s(),p(y,{key:o.value,label:o.label,description:o.description,value:o.value,selected:e.isSelected(o.value),color:e.color,editable:e.editable,"onUpdate:value":e.onToggle},null,8,["label","description","value","selected","color","editable","onUpdate:value"]))),128))]),_:1})}const i=F(S,[["render",L]]);S.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"Array<{ value: String | Boolean | Number, label?: String, description?: string }>"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const P={title:"Foundation/Shared/RadioGroup",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value:0,values:[{value:0,label:"Option 1"},{value:1,label:"Option 2"},{value:2,label:"Option 3"}],color:"primary"}},render:(e,{argTypes:a})=>({components:{RadioGroup:i},props:Object.keys(a),setup(){return{...e}},template:`
        <RadioGroup v-bind="args" v-model:value="args.value" />
    `})},t={args:{args:{value:0,values:[{value:0,label:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{value:1,label:"Option 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{value:2,label:"Option 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],color:"primary"}},render:(e,{argTypes:a})=>({components:{RadioGroup:i},props:Object.keys(a),setup(){return{...e}},template:`
        <RadioGroup v-bind="args" v-model:value="args.value" />
    `})};var c,m,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      value: 0,
      values: [{
        value: 0,
        label: "Option 1"
      }, {
        value: 1,
        label: "Option 2"
      }, {
        value: 2,
        label: "Option 3"
      }],
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      RadioGroup
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <RadioGroup v-bind="args" v-model:value="args.value" />
    \`
  })
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {
      value: 0,
      values: [{
        value: 0,
        label: "Option 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }, {
        value: 1,
        label: "Option 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }, {
        value: 2,
        label: "Option 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }],
      color: "primary"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      RadioGroup
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
        <RadioGroup v-bind="args" v-model:value="args.value" />
    \`
  })
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const U=["Labels","Descriptions"];export{t as Descriptions,n as Labels,U as __namedExportsOrder,P as default};
