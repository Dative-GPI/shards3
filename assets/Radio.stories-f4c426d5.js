import{n as C,t as R,f,q as s,u as i,v as r,B as F,A as m,D as v,E as g,x as T,F as _,K as E,M as O,N as j}from"./vue.esm-bundler-722d5586.js";import{C as p,u as y}from"./useTimeZone-e2d91037.js";import{_ as V}from"./FSIcon-420cc903.js";import{_ as S}from"./FSSpan-25dfede3.js";import{_ as $}from"./FSRow-adbe3642.js";import{_ as c}from"./FSCol-73c0912e.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{F as L}from"./FSText-f2895473.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./VIcon-3294e246.js";const w=C({name:"FSRadio",components:{FSIcon:V,FSSpan:S,FSRow:$,FSCol:c},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:t}){const{value:n,selected:a,color:u,editable:o}=R(e),l=y().getColors(u.value),b=y().getColors(p.Light),h=y().getColors(p.Dark),P=f(()=>o.value?{"--fs-radio-cursor":a.value?"default":"pointer","--fs-radio-radio-color":a.value?l.base:h.base,"--fs-radio-color":h.base}:{"--fs-radio-cursor":"default","--fs-radio-radio-color":b.dark,"--fs-radio-color":b.dark}),I=f(()=>a.value?"mdi-radiobox-marked":"mdi-radiobox-blank"),A=f(()=>a.value?"text-button":"text-body");return{style:P,icon:I,font:A,onToggle:()=>{o.value&&(a.value||t("update:value",n.value))}}}});function U(e,t,n,a,u,o){return s(),i(c,{width:"hug"},{default:r(()=>[F($,{width:"hug",align:"center-left"},{default:r(()=>[F(V,{class:"fs-radio",style:m(e.style),onClick:e.onToggle},{default:r(()=>[v(g(e.icon),1)]),_:1},8,["style","onClick"]),T(e.$slots,"default",{},()=>[e.$props.label?(s(),i(S,{key:0,class:"fs-radio-label",style:m(e.style),font:e.font,onClick:e.onToggle},{default:r(()=>[v(g(e.$props.label),1)]),_:1},8,["style","font","onClick"])):_("",!0)])]),_:3}),T(e.$slots,"description",{},()=>[e.$props.description?(s(),i(S,{key:0,class:"fs-radio-description",font:"text-underline",style:m(e.style)},{default:r(()=>[v(g(e.$props.description),1)]),_:1},8,["style"])):_("",!0)])]),_:3})}const G=B(w,[["render",U]]);w.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};const N=C({name:"FSRadioGroup",components:{FSRadio:G,FSCol:c},props:{values:{type:Array,required:!0,default:!1},modelValue:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:t}){const{modelValue:n}=R(e);return{isSelected:o=>o==n.value,onToggle:o=>{o!=n.value&&t("update:modelValue",o)}}}});function W(e,t,n,a,u,o){return s(),i(c,{width:"hug"},{default:r(()=>[(s(!0),E(j,null,O(e.$props.values,l=>(s(),i(G,{key:l.value,label:l.label,description:l.description,value:l.value,selected:e.isSelected(l.value),color:e.$props.color,editable:e.$props.editable,"onUpdate:value":e.onToggle},null,8,["label","description","value","selected","color","editable","onUpdate:value"]))),128))]),_:1})}const D=B(N,[["render",W]]);N.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"Array<{ value: String | Boolean | Number, label?: String, description?: string }>"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const te={title:"Foundation/Shared/Toggles/Radio",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(e,{argTypes:t})=>({components:{FSRadioGroup:D,FSText:L},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>`})};var k,q,x;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(q=d.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};const le=["Variations"];export{d as Variations,le as __namedExportsOrder,te as default};
