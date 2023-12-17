import{g as R,t as _,o as s,j as p,k as h,u as k,D as F,F as G}from"./vue.esm-bundler-df2b59eb.js";import{C as B}from"./useColors-91d774bf.js";import{_ as y}from"./FSRadio-b1d125bd.js";import{_ as O}from"./FSCol-d95b6bbf.js";import{c as C}from"./FSRow-a4346a5f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSIcon-f96262eb.js";const S=R({name:"FSRadioGroup",components:{FSRadio:y,FSCol:O},props:{values:{type:Array,required:!0,default:!1},value:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:B.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:l,color:u,editable:d}=_(e);return{color:u,editable:d,isSelected:r=>r==l.value,onToggle:r=>{r!=l.value&&a("update:value",r)}}}});function L(e,a,l,u,d,q){return s(),p(O,{width:"hug",height:"hug"},{default:h(()=>[(s(!0),k(G,null,F(e.$props.values,o=>(s(),p(y,{key:o.value,label:o.label,description:o.description,value:o.value,selected:e.isSelected(o.value),color:e.color,editable:e.editable,"onUpdate:value":e.onToggle},null,8,["label","description","value","selected","color","editable","onUpdate:value"]))),128))]),_:1})}const i=C(S,[["render",L]]);S.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"Array<{ value: String | Boolean | Number, label?: String, description?: string }>"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const E={title:"Foundation/RadioGroup",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value:0,values:[{value:0,label:"Option 1"},{value:1,label:"Option 2"},{value:2,label:"Option 3"}],color:"primary"}},render:(e,{argTypes:a})=>({components:{RadioGroup:i},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const P=["Labels","Descriptions"];export{t as Descriptions,n as Labels,P as __namedExportsOrder,E as default};
