import{m as _,t as C,f as v,n as i,q as d,v as s,x as b,K as m,z as S,A as g,y as F,B as h,F as z,H as A,L as O}from"./vue.esm-bundler-d10a8528.js";import{C as y,u as k}from"./VIcon-57787e8c.js";import{_ as $}from"./FSIcon-27c19cbf.js";import{F as c}from"./FSSpan-abccc23b.js";import{_ as V}from"./FSRow-c01fca12.js";import{_ as f}from"./FSCol-b1484c92.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const G=_({name:"FSRadio",components:{FSIcon:$,FSSpan:c,FSRow:V,FSCol:f},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:y.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:l}){const{value:r,selected:a,color:u,editable:t}=C(e),n=k().getVariants(u.value),o=k().getVariants(y.Dark),x=v(()=>({"--fs-radio-cursor":t.value&&!a.value?"pointer":"default","--fs-radio-base-color":t.value?a.value?n.base:o.base:o.light,"--fs-radio-base-text":t.value?o.base:o.light})),I=v(()=>a.value?"mdi-radiobox-marked":"mdi-radiobox-blank"),P=v(()=>a.value?"text-button":"text-body");return{style:x,icon:I,font:P,onToggle:()=>{t.value&&(a.value||l("update:value",r.value))}}}});function j(e,l,r,a,u,t){return i(),d(f,{width:"hug"},{default:s(()=>[b(V,{width:"hug",align:"center-left"},{default:s(()=>[b($,{class:"fs-radio",size:"checkbox",style:m(e.style),onClick:e.onToggle},{default:s(()=>[S(g(e.icon),1)]),_:1},8,["style","onClick"]),F(e.$slots,"default",{},()=>[e.$props.label?(i(),d(c,{key:0,class:"fs-radio-label",style:m(e.style),font:e.font,onClick:e.onToggle},{default:s(()=>[S(g(e.$props.label),1)]),_:1},8,["style","font","onClick"])):h("",!0)])]),_:3}),F(e.$slots,"description",{},()=>[e.$props.description?(i(),d(c,{key:0,class:"fs-radio-description",font:"text-underline",style:m(e.style)},{default:s(()=>[S(g(e.$props.description),1)]),_:1},8,["style"])):h("",!0)])]),_:3})}const N=B(G,[["render",j]]);G.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};const w=_({name:"FSRadioGroup",components:{FSRadio:N,FSCol:f},props:{values:{type:Array,required:!0,default:!1},value:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:y.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:l}){const{value:r,color:a,editable:u}=C(e);return{color:a,editable:u,isSelected:o=>o==r.value,onToggle:o=>{o!=r.value&&l("update:value",o)}}}});function E(e,l,r,a,u,t){return i(),d(f,{width:"hug"},{default:s(()=>[(i(!0),z(O,null,A(e.$props.values,n=>(i(),d(N,{key:n.value,label:n.label,description:n.description,value:n.value,selected:e.isSelected(n.value),color:e.color,editable:e.editable,"onUpdate:value":e.onToggle},null,8,["label","description","value","selected","color","editable","onUpdate:value"]))),128))]),_:1})}const D=B(w,[["render",E]]);w.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"Array<{ value: String | Boolean | Number, label?: String, description?: string }>"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"value",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const Z={title:"Foundation/Shared/Toggles/Radio",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(e,{argTypes:l})=>({components:{FSRadioGroup:D,FSSpan:c},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSpan> First set of options </FSSpan>
      <FSRadioGroup :values="args.options1" v-model:value="args.value1" />
      <FSSpan> Second set of options (secondary color) </FSSpan>
      <FSRadioGroup :values="args.options2" v-model:value="args.value2" color="secondary" />
      <FSSpan> Third set of options (disabled) </FSSpan>
      <FSRadioGroup :values="args.options3" v-model:value="args.value3" :editable="false" />
    </div>`})};var q,R,T;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: 0,
      value3: 1,
      options1: [{
        value: 0
      }, {
        value: 1,
        label: "Second option"
      }, {
        value: 2,
        label: "Third option",
        description: "Description of the third option"
      }],
      options2: [{
        value: 0
      }, {
        value: 1,
        label: "Second option"
      }, {
        value: 2,
        label: "Third option",
        description: "Description of the third option"
      }],
      options3: [{
        value: 0
      }, {
        value: 1,
        label: "Second option"
      }, {
        value: 2,
        label: "Third option",
        description: "Description of the third option"
      }]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSRadioGroup,
      FSSpan
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSSpan> First set of options </FSSpan>
      <FSRadioGroup :values="args.options1" v-model:value="args.value1" />
      <FSSpan> Second set of options (secondary color) </FSSpan>
      <FSRadioGroup :values="args.options2" v-model:value="args.value2" color="secondary" />
      <FSSpan> Third set of options (disabled) </FSSpan>
      <FSRadioGroup :values="args.options3" v-model:value="args.value3" :editable="false" />
    </div>\`
  })
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const ee=["Variations"];export{p as Variations,ee as __namedExportsOrder,Z as default};
