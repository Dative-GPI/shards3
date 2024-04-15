import{z as f,x,j as w,e as i,I as s,J as u,K as r,L as m,X as T,P as b,Q as S,S as R,M as $,R as z,Z as A,F as L}from"./vue.esm-bundler-43a473fd.js";import{_}from"./FSIcon-0563dc08.js";import{_ as h}from"./FSSpan-f049a07d.js";import{_ as g}from"./FSCol-3eed52f7.js";import{_ as P}from"./FSRow-ba466629.js";import{C as d,u as M}from"./useColors-a0d41f52.js";import{u as U}from"./useRules-b8c9f7a6.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{m as W,V as J}from"./VSelectionControl-380f46a9.js";import{p as K}from"./theme-b11eeaee.js";import{g as Q,u as X}from"./useRender-d2bddd17.js";import{F as Z}from"./FSText-e0cd8299.js";import"./css-18b0cf8e.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./tag-2aee60b4.js";import"./useSlots-e98bc591.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./density-c9a73c91.js";import"./proxiedModel-7eeaa9ef.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";const H=K({...W({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Y=Q()({name:"VRadio",props:H(),setup(e,o){let{slots:t}=o;return X(()=>f(J,x(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),t)),{}}}),G=w({name:"FSRadio",components:{FSIcon:_,FSSpan:h,FSCol:g,FSRow:P},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:[String,Boolean,Number],required:!0},selected:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:d.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){const{validateOn:t,blurred:p,getMessages:a}=U(),{getColors:n}=M(),l=i(()=>n(e.color)),v=n(d.Error),F=n(d.Light),y=n(d.Dark),I=i(()=>e.editable?V.value.length?{"--fs-radio-cursor":"pointer","--fs-radio-radio-color":v.base,"--fs-radio-color":y.base}:{"--fs-radio-cursor":e.selected?"default":"pointer","--fs-radio-radio-color":e.selected?l.value.base:y.base,"--fs-radio-color":y.base}:{"--fs-radio-cursor":"default","--fs-radio-radio-color":e.selected?l.value.light:F.base,"--fs-radio-color":F.dark}),E=i(()=>e.selected?"mdi-radiobox-marked":"mdi-radiobox-blank"),j=i(()=>e.selected?"text-button":"text-body"),V=i(()=>e.messages??a(e.modelValue,e.rules));return{validateOn:t,messages:V,blurred:p,style:I,icon:E,font:j,onToggle:()=>{e.editable&&(e.selected||o("update:modelValue",e.modelValue))}}}});function ee(e,o,t,p,a,n){return s(),u(g,{width:"hug"},{default:r(()=>[f(Y,x({"hide-details":"",ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.selected,onClick:o[0]||(o[0]=T(()=>{},["prevent"])),onBlur:o[1]||(o[1]=l=>e.blurred=!0)},e.$attrs),{input:r(()=>[f(P,{align:"center-left",width:"hug",style:m(e.style),onClick:T(e.onToggle,["stop"])},{default:r(()=>[f(_,{class:"fs-radio",size:"l",style:m(e.style)},{default:r(()=>[b(S(e.icon),1)]),_:1},8,["style"]),R(e.$slots,"default",{},()=>[e.$props.label?(s(),u(h,{key:0,class:"fs-radio-label",style:m(e.style),font:e.font},{default:r(()=>[b(S(e.$props.label),1)]),_:1},8,["style","font"])):$("",!0)])]),_:3},8,["style","onClick"])]),_:3},16,["rules","validateOn","modelValue"]),R(e.$slots,"description",{},()=>[e.$props.description?(s(),u(h,{key:0,class:"fs-radio-description",font:"text-underline",style:m(e.style)},{default:r(()=>[b(S(e.$props.description),1)]),_:1},8,["style"])):$("",!0)])]),_:3})}const N=B(G,[["render",ee]]);G.__docgenInfo={displayName:"FSRadio",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!0},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadio.vue"]};const O=w({name:"FSRadioGroup",components:{FSRadio:N,FSCol:g},props:{values:{type:Array,required:!0,default:!1},modelValue:{type:[String,Boolean,Number],required:!1,default:0},color:{type:String,required:!1,default:d.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){return{isSelected:a=>a==e.modelValue,onToggle:a=>{a!=e.modelValue&&o("update:modelValue",a)}}}});function oe(e,o,t,p,a,n){return s(),u(g,{width:"hug"},{default:r(()=>[(s(!0),z(L,null,A(e.$props.values,(l,v)=>(s(),u(N,{key:v,label:l.label,description:l.description,selected:e.isSelected(l.value),color:e.$props.color,editable:e.$props.editable,modelValue:l.value,"onUpdate:modelValue":e.onToggle},null,8,["label","description","selected","color","editable","modelValue","onUpdate:modelValue"]))),128))]),_:1})}const D=B(O,[["render",oe]]);O.__docgenInfo={displayName:"FSRadioGroup",exportName:"default",description:"",tags:{},props:[{name:"values",type:{name:"{ value: string | boolean | number, label?: string, description?: string }[]"},required:!0,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string|boolean|number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRadioGroup.vue"]};const qe={title:"Foundation/Shared/Toggles/Radio",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,value2:0,value3:1,options1:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options2:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}],options3:[{value:0},{value:1,label:"Second option"},{value:2,label:"Third option",description:"Description of the third option"}]}},render:(e,{argTypes:o})=>({components:{FSRadioGroup:D,FSText:Z},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <FSRadioGroup :values="args.options1" v-model="args.value1" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Warning color </FSText>
      <FSRadioGroup :values="args.options2" v-model="args.value2" color="warning" />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <FSRadioGroup :values="args.options3" v-model="args.value3" :editable="false" />
    </div>`})};var q,k,C;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(C=(k=c.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const ke=["Variations"];export{c as Variations,ke as __namedExportsOrder,qe as default};
