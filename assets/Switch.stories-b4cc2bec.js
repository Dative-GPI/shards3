import{d as ae,e as i,z as t,x as $,F as se,j as oe,K as _,L as P,M as w,R as O,V as A,X as re,N as I,O as N,P as R}from"./vue.esm-bundler-a79f6a7e.js";import{_ as q}from"./FSSpan-6870f5d7.js";import{_ as K}from"./FSCol-bf5a0ca3.js";import{_ as X}from"./FSRow-997087e7.js";import{C as m,u as ie}from"./useColors-060213ee.js";import{u as ne}from"./useRules-f2fe91c3.js";import{_ as de}from"./_plugin-vue_export-helper-c27b6911.js";import{a as ue}from"./index-21b5e00b.js";import{V as ce}from"./VDefaultsProvider-151583b9.js";import{m as me,u as fe,V as z}from"./VInput-6b3c87b1.js";import{m as pe,V as L}from"./VSelectionControl-afed9b27.js";import{u as he,L as ve}from"./loader-5621d579.js";import{u as U}from"./proxiedModel-550eb350.js";import{V as Se}from"./VIcon-9404a2c9.js";import{V as ge}from"./VProgressCircular-e686f53b.js";import{p as we,s as ye,j as be}from"./theme-1ec486f5.js";import{g as Ve,u as Fe}from"./useRender-b11abf1d.js";import{F as xe}from"./FSText-fa0cf7e3.js";import"./useSlots-6a823081.js";import"./css-6f95cab1.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./locale-9003447c.js";import"./color-4fa560db.js";import"./transition-5598497b.js";import"./density-4d7bebe4.js";import"./tag-f688eb88.js";import"./index-755a3767.js";import"./VLabel-e2aed9e2.js";import"./intersectionObserver-ca237ead.js";import"./rounded-5d5afca1.js";import"./resizeObserver-c5cea584.js";const ke=we({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...me(),...pe()},"VSwitch"),Te=Ve()({name:"VSwitch",inheritAttrs:!1,props:ke(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{attrs:f,slots:l}=r;const o=U(e,"indeterminate"),a=U(e,"modelValue"),{loaderClasses:p}=he(e),{isFocused:n,focus:b,blur:d}=fe(e),u=ae(),V=i(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),F=ye(),h=i(()=>e.id||`switch-${F}`);function B(){o.value&&(o.value=!1)}function J(v){var S,g;v.stopPropagation(),v.preventDefault(),(g=(S=u.value)==null?void 0:S.input)==null||g.click()}return Fe(()=>{const[v,S]=be(f),g=z.filterProps(e),Q=L.filterProps(e);return t(z,$({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},p.value,e.class]},v,g,{modelValue:a.value,"onUpdate:modelValue":x=>a.value=x,id:h.value,focused:n.value,style:e.style}),{...l,default:x=>{let{id:W,messagesId:Y,isDisabled:Z,isReadonly:ee,isValid:D}=x;const k={model:a,isValid:D};return t(L,$({ref:u},Q,{modelValue:a.value,"onUpdate:modelValue":[c=>a.value=c,B],id:W.value,"aria-describedby":Y.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:Z.value,readonly:ee.value,onFocus:b,onBlur:d},S),{...l,default:c=>{let{backgroundColorClasses:T,backgroundColorStyles:s}=c;return t("div",{class:["v-switch__track",...T.value],style:s.value,onClick:J},[l["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](k)]),l["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](k)])])},input:c=>{let{inputNode:T,icon:s,backgroundColorClasses:te,backgroundColorStyles:le}=c;return t(se,null,[T,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading},e.inset?void 0:te.value],style:e.inset?void 0:le.value},[l.thumb?t(ce,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[l.thumb({...k,icon:s})]}):t(ue,null,{default:()=>[e.loading?t(ve,{name:"v-switch",active:!0,color:D.value===!1?void 0:V.value},{default:C=>l.loader?l.loader(C):t(ge,{active:C.isActive,color:C.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&t(Se,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}}),G=oe({name:"FSSwitch",components:{FSSpan:q,FSCol:K,FSRow:X},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:m.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:f,blurred:l,getMessages:o}=ne(),{getColors:a}=ie(),p=i(()=>a(e.color)),n=a(m.Background),b=a(m.Error),d=a(m.Light),u=a(m.Dark),V=i(()=>e.editable?h.value.length?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":b.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":u.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?p.value.base:d.dark,"--fs-switch-thumb-color":n.base,"--fs-switch-color":u.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":e.modelValue?p.value.light:d.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":d.dark}),F=i(()=>e.modelValue?"text-button":"text-body"),h=i(()=>e.messages??o(e.modelValue,e.rules));return{validateOn:f,messages:h,blurred:l,style:V,font:F,onToggle:()=>{e.editable&&r("update:modelValue",!e.modelValue)}}}});function Ce(e,r,f,l,o,a){return _(),P(K,{width:"hug"},{default:w(()=>[t(X,{width:"hug",align:"center-left"},{default:w(()=>[t(Te,$({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","rules","validateOn","modelValue","onUpdate:modelValue"]),O(e.$slots,"default",{},()=>[e.$props.label?(_(),P(q,{key:0,class:"fs-switch-label",style:A(e.style),font:e.font,onClick:re(e.onToggle,["stop"])},{default:w(()=>[I(N(e.$props.label),1)]),_:1},8,["style","font","onClick"])):R("",!0)])]),_:3}),O(e.$slots,"description",{},()=>[e.$props.description?(_(),P(q,{key:0,class:"fs-switch-description",font:"text-underline",style:A(e.style)},{default:w(()=>[I(N(e.$props.description),1)]),_:1},8,["style"])):R("",!0)])]),_:3})}const H=de(G,[["render",Ce]]);G.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const rt={title:"Foundation/Shared/Toggles/Switch",component:H,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:r})=>({components:{FSSwitch:H,FSText:xe},props:Object.keys(r),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :modelValue="false" :editable="false" />
        <FSSwitch :modelValue="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :modelValue="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>`})};var j,E,M;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    args: {
      value1: false,
      value2: false,
      value3: false,
      value4: true,
      value5: false,
      value6: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSwitch,
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
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value1" />
        <FSSwitch v-model="args.value2" label="Second switch" />
        <FSSwitch v-model="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model="args.value4" color="success" />
        <FSSwitch v-model="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :modelValue="false" :editable="false" />
        <FSSwitch :modelValue="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :modelValue="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>\`
  })
}`,...(M=(E=y.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const it=["Variations"];export{y as Variations,it as __namedExportsOrder,rt as default};