import{z as f,x as C,g as x,j as i,K as s,L as u,M as r,V as m,a3 as V,N as y,O as b,R as T,P as R,Q as z,Y as A,F as L}from"./vue.esm-bundler-e580dd1f.js";import{_ as w}from"./FSIcon-4fed0819.js";import{_ as S}from"./FSSpan-73185be3.js";import{_ as g}from"./FSCol-fcea4dc1.js";import{_}from"./FSRow-50904d6e.js";import{C as d,u as M}from"./useColors-b2cb658b.js";import{u as U}from"./useRules-a8018b0f.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{m as W,V as K}from"./VSelectionControl-682aab8c.js";import{p as Q}from"./theme-a3bb880e.js";import{g as Y,u as H}from"./useRender-16acb9c4.js";import{F as J}from"./FSText-62d9f6c8.js";import"./VIcon-bb9e7f8a.js";import"./color-0af6d6f5.js";import"./tag-fa7badbe.js";import"./useSlots-a039f59b.js";import"./css-ca36ed75.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./density-be1d42ad.js";import"./proxiedModel-3aca154f.js";import"./index-a22223d0.js";import"./VLabel-a546dd45.js";const X=Q({...W({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Z=Y()({name:"VRadio",props:X(),setup(e,o){let{slots:t}=o;return H(()=>f(K,C(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),t)),{}}}),P=x({name:"FSRadio",components:{FSIcon:w,FSSpan:S,FSCol:g,FSRow:_},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:d.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{validateOn:t,blurred:p,getMessages:l}=U(),{getColors:n}=M(),a=i(()=>n(e.color)),D=n(d.Error),h=n(d.Light),v=n(d.Dark),E=i(()=>e.editable?F.value.length?{"--fs-radio-cursor":"pointer","--fs-radio-radio-color":D.base,"--fs-radio-color":v.base}:{"--fs-radio-cursor":e.selected?"default":"pointer","--fs-radio-radio-color":e.selected?a.value.base:v.base,"--fs-radio-color":v.base}:{"--fs-radio-cursor":"default","--fs-radio-radio-color":e.selected?a.value.light:h.base,"--fs-radio-color":h.dark}),I=i(()=>e.selected?"mdi-radiobox-marked":"mdi-radiobox-blank"),j=i(()=>e.selected?"text-button":"text-body"),F=i(()=>e.messages??l(e.modelValue,e.rules));return{validateOn:t,messages:F,blurred:p,style:E,icon:I,font:j,onToggle:()=>{e.editable&&(e.selected||o("update:modelValue",e.modelValue))}}}});function ee(e,o,t,p,l,n){return s(),u(g,{width:"hug"},{default:r(()=>[f(Z,C({"hide-details":"",ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.selected,onClick:o[0]||(o[0]=V(()=>{},["prevent"])),onBlur:o[1]||(o[1]=a=>e.blurred=!0)},e.$attrs),{input:r(()=>[f(_,{align:"center-left",width:"hug",style:m(e.style),onClick:V(e.onToggle,["stop"])},{default:r(()=>[f(w,{class:"fs-radio",size:"l",style:m(e.style)},{default:r(()=>[y(b(e.icon),1)]),_:1},8,["style"]),T(e.$slots,"default",{},()=>[e.$props.label?(s(),u(S,{key:0,class:"fs-radio-label",style:m(e.style),font:e.font},{default:r(()=>[y(b(e.$props.label),1)]),_:1},8,["style","font"])):R("",!0)])]),_:3},8,["style","onClick"])]),_:3},16,["rules","validateOn","modelValue"]),T(e.$slots,"description",{},()=>[e.$props.description?(s(),u(S,{key:0,class:"fs-radio-description",font:"text-underline",style:m(e.style)},{default:r(()=>[y(b(e.$props.description),1)]),_:1},8,["style"])):R("",!0)])]),_:3})}const G=B(P,[["render",ee]]);P.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};const N=x({name:"FSRadioGroup",components:{FSRadio:G,FSCol:g},props:{values:{type:Array,required:!0,default:!1},modelValue:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:d.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){return{isSelected:l=>l==e.modelValue,onToggle:l=>{l!=e.modelValue&&o("update:modelValue",l)}}}});function oe(e,o,t,p,l,n){return s(),u(g,{width:"hug"},{default:r(()=>[(s(!0),z(L,null,A(e.$props.values,a=>(s(),u(G,{key:a.value,label:a.label,description:a.description,selected:e.isSelected(a.value),color:e.$props.color,editable:e.$props.editable,modelValue:a.value,"onUpdate:modelValue":e.onToggle},null,8,["label","description","selected","color","editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})}const O=B(N,[["render",oe]]);N.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"{ value: String | Boolean | Number, label?: String, description?: string }[]"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const qe={title:"Foundation/Shared/Toggles/Radio",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(e,{argTypes:o})=>({components:{FSRadioGroup:O,FSText:J},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>`})};var $,q,k;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(k=(q=c.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};const ke=["Variations"];export{c as Variations,ke as __namedExportsOrder,qe as default};
