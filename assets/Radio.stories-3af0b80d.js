import{g as k,j as u,K as r,L as i,M as n,z as S,V as f,X as b,N as g,O as v,R as h,P as F,Q as P,Z as D,F as E}from"./vue.esm-bundler-0a1af505.js";import{_ as q}from"./FSIcon-6a7ab6e0.js";import{_ as y}from"./FSSpan-50615fe3.js";import{_ as m}from"./FSCol-202c8297.js";import{_ as x}from"./FSRow-43a88505.js";import{C as c,u as I}from"./useColors-90958e24.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import{F as O}from"./FSText-9ed86449.js";import"./VIcon-4501998f.js";import"./color-84472fbe.js";import"./theme-8d83670f.js";import"./useRender-76465e3d.js";import"./tag-6ffe4ba6.js";import"./useSlots-de2ef136.js";import"./css-72b65878.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const C=k({name:"FSRadio",components:{FSIcon:q,FSSpan:y,FSCol:m,FSRow:x},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:c.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){const{getColors:l}=I(),s=u(()=>l(e.color)),o=l(c.Light),d=l(c.Dark),t=u(()=>e.editable?{"--fs-radio-cursor":e.selected?"default":"pointer","--fs-radio-radio-color":e.selected?s.value.base:d.base,"--fs-radio-color":d.base}:{"--fs-radio-cursor":"default","--fs-radio-radio-color":o.dark,"--fs-radio-color":o.dark}),G=u(()=>e.selected?"mdi-radiobox-marked":"mdi-radiobox-blank"),N=u(()=>e.selected?"text-button":"text-body");return{style:t,icon:G,font:N,onToggle:()=>{e.editable&&(e.selected||a("update:modelValue",e.modelValue))}}}});function j(e,a,l,s,o,d){return r(),i(m,{width:"hug"},{default:n(()=>[S(x,{width:"hug",align:"center-left"},{default:n(()=>[S(q,{class:"fs-radio",size:"l",style:f(e.style),onClick:b(e.onToggle,["stop"])},{default:n(()=>[g(v(e.icon),1)]),_:1},8,["style","onClick"]),h(e.$slots,"default",{},()=>[e.$props.label?(r(),i(y,{key:0,class:"fs-radio-label",style:f(e.style),font:e.font,onClick:b(e.onToggle,["stop"])},{default:n(()=>[g(v(e.$props.label),1)]),_:1},8,["style","font","onClick"])):F("",!0)])]),_:3}),h(e.$slots,"description",{},()=>[e.$props.description?(r(),i(y,{key:0,class:"fs-radio-description",font:"text-underline",style:f(e.style)},{default:n(()=>[g(v(e.$props.description),1)]),_:1},8,["style"])):F("",!0)])]),_:3})}const $=R(C,[["render",j]]);C.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};const w=k({name:"FSRadioGroup",components:{FSRadio:$,FSCol:m},props:{values:{type:Array,required:!0,default:!1},modelValue:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:c.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:a}){return{isSelected:o=>o==e.modelValue,onToggle:o=>{o!=e.modelValue&&a("update:modelValue",o)}}}});function z(e,a,l,s,o,d){return r(),i(m,{width:"hug"},{default:n(()=>[(r(!0),P(E,null,D(e.$props.values,t=>(r(),i($,{key:t.value,label:t.label,description:t.description,selected:e.isSelected(t.value),color:e.$props.color,editable:e.$props.editable,modelValue:t.value,"onUpdate:modelValue":e.onToggle},null,8,["label","description","selected","color","editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})}const B=R(w,[["render",z]]);w.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"{ value: String | Boolean | Number, label?: String, description?: string }[]"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const re={title:"Foundation/Shared/Toggles/Radio",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(e,{argTypes:a})=>({components:{FSRadioGroup:B,FSText:O},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>`})};var T,V,_;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const ie=["Variations"];export{p as Variations,ie as __namedExportsOrder,re as default};
