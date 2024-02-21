import{D as C,d,G as n,H as s,I as l,z as b,K as f,R as h,M as g,N as v,L as F,J as T,Q as D,U as P,F as E}from"./vue.esm-bundler-6746129d.js";import{C as p,u as y}from"./useColors-af9c4499.js";import"./rules-1d0b59d0.js";import{_ as q}from"./FSIcon-e171104f.js";import{_ as S}from"./FSSpan-636f18e6.js";import{_ as x}from"./FSRow-40eef247.js";import{_ as c}from"./FSCol-7dad0d26.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{F as I}from"./FSText-0291b8bd.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-dcffbbe6.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";import"./VIcon-bfd3bf26.js";import"./color-28636d86.js";import"./LexicalSelection.prod-bad52e97.js";const $=C({name:"FSRadio",components:{FSIcon:q,FSSpan:S,FSRow:x,FSCol:c},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const i=d(()=>y().getColors(e.color)),r=y().getColors(p.Light),o=y().getColors(p.Dark),m=d(()=>e.editable?{"--fs-radio-cursor":e.selected?"default":"pointer","--fs-radio-radio-color":e.selected?i.value.base:o.base,"--fs-radio-color":o.base}:{"--fs-radio-cursor":"default","--fs-radio-radio-color":r.dark,"--fs-radio-color":r.dark}),t=d(()=>e.selected?"mdi-radiobox-marked":"mdi-radiobox-blank"),N=d(()=>e.selected?"text-button":"text-body");return{style:m,icon:t,font:N,onToggle:()=>{e.editable&&(e.selected||a("update:modelValue",e.modelValue))}}}});function z(e,a,i,r,o,m){return n(),s(c,{width:"hug"},{default:l(()=>[b(x,{width:"hug",align:"center-left"},{default:l(()=>[b(q,{class:"fs-radio",size:"l",style:f(e.style),onClick:h(e.onToggle,["stop"])},{default:l(()=>[g(v(e.icon),1)]),_:1},8,["style","onClick"]),F(e.$slots,"default",{},()=>[e.$props.label?(n(),s(S,{key:0,class:"fs-radio-label",style:f(e.style),font:e.font,onClick:h(e.onToggle,["stop"])},{default:l(()=>[g(v(e.$props.label),1)]),_:1},8,["style","font","onClick"])):T("",!0)])]),_:3}),F(e.$slots,"description",{},()=>[e.$props.description?(n(),s(S,{key:0,class:"fs-radio-description",font:"text-underline",style:f(e.style)},{default:l(()=>[g(v(e.$props.description),1)]),_:1},8,["style"])):T("",!0)])]),_:3})}const w=R($,[["render",z]]);$.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};const G=C({name:"FSRadioGroup",components:{FSRadio:w,FSCol:c},props:{values:{type:Array,required:!0,default:!1},modelValue:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){return{isSelected:o=>o==e.modelValue,onToggle:o=>{o!=e.modelValue&&a("update:modelValue",o)}}}});function L(e,a,i,r,o,m){return n(),s(c,{width:"hug"},{default:l(()=>[(n(!0),D(E,null,P(e.$props.values,t=>(n(),s(w,{key:t.value,label:t.label,description:t.description,selected:e.isSelected(t.value),color:e.$props.color,editable:e.$props.editable,modelValue:t.value,"onUpdate:modelValue":e.onToggle},null,8,["label","description","selected","color","editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})}const B=R(G,[["render",L]]);G.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"{ value: String | Boolean | Number, label?: String, description?: string }[]"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const ne={title:"Foundation/Shared/Toggles/Radio",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(e,{argTypes:a})=>({components:{FSRadioGroup:B,FSText:I},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>`})};var V,_,k;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>\`
  })
}`,...(k=(_=u.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const re=["Variations"];export{u as Variations,re as __namedExportsOrder,ne as default};
