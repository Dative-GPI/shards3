import{g as R,t as q,j as c,o as s,k as m,l as h,v as k,E as _,F as C}from"./vue.esm-bundler-66d46254.js";import{C as G}from"./useColors-c3e7013c.js";import{F as B}from"./FSRadio-6fb9f58f.js";import{F as L}from"./FSCol-b1d44a51.js";import{b as T}from"./FSRow-c0589bf9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSIcon-a97ae0a7.js";const O=R({name:"FSRadioGroup",components:{FSRadio:B,FSCol:L},props:{values:{type:Array,required:!0,default:!1},value:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:G.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:l,color:u,editable:d}=q(e);return{color:u,editable:d,isSelected:o=>o==l.value,onToggle:o=>{o!=l.value&&a("update:value",o)}}}});function j(e,a,l,u,d,F){const p=c("FSRadio"),o=c("FSCol");return s(),m(o,{width:"hug",height:"hug"},{default:h(()=>[(s(!0),k(C,null,_(e.$props.values,r=>(s(),m(p,{key:r.value,label:r.label,description:r.description,value:r.value,selected:e.isSelected(r.value),color:e.color,editable:e.editable,"onUpdate:value":e.onToggle},null,8,["label","description","value","selected","color","editable","onUpdate:value"]))),128))]),_:1})}const i=T(O,[["render",j]]);O.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"Array<{ value: String | Boolean | Number, label?: String, description?: string }>"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const U={title:"Foundation/RadioGroup",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value:0,values:[{value:0,label:"Option 1"},{value:1,label:"Option 2"},{value:2,label:"Option 3"}],color:"primary"}},render:(e,{argTypes:a})=>({components:{RadioGroup:i},props:Object.keys(a),setup(){return{...e}},template:`
        <RadioGroup v-bind="args" v-model:value="args.value" />
    `})},t={args:{args:{value:0,values:[{value:0,label:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{value:1,label:"Option 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{value:2,label:"Option 3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],color:"primary"}},render:(e,{argTypes:a})=>({components:{RadioGroup:i},props:Object.keys(a),setup(){return{...e}},template:`
        <RadioGroup v-bind="args" v-model:value="args.value" />
    `})};var v,g,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const x=["Labels","Descriptions"];export{t as Descriptions,n as Labels,x as __namedExportsOrder,U as default};
