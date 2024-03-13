import{d as ae,j as d,z as t,x as k,F as oe,g as se,I as F,J as x,K as p,P as $,S as q,V as ie,L as B,M as D,N as I}from"./vue.esm-bundler-72feb788.js";import{_ as T}from"./FSSpan-0b48c446.js";import{_ as R}from"./FSCol-df85c70b.js";import{_ as E}from"./FSRow-ae483077.js";import{C as h,u as re}from"./useColors-6caee65d.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{a as de}from"./index-1ae89502.js";import{V as ce}from"./VDefaultsProvider-45b29f9e.js";import{m as ue,u as me,V as N}from"./VInput-d8a8ef30.js";import{m as fe,V as z}from"./VSelectionControl-00322409.js";import{a as pe,L as he}from"./loader-dcf07c4a.js";import{u as A}from"./locale-6e33b40c.js";import{V as ve}from"./VIcon-7b60b4e1.js";import{V as Se}from"./VProgressCircular-aa529168.js";import{p as ge,q as we,j as ye}from"./theme-dfac1c87.js";import{g as be,u as Ve}from"./useRender-dfda60e7.js";import{F as Fe}from"./FSText-c27aeba2.js";import"./useSlots-a83038d8.js";import"./css-a2b3c3ca.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./color-20078b56.js";import"./transition-2c0bfa39.js";import"./density-849fb56f.js";import"./tag-4c4a02ef.js";import"./index-4726a84c.js";import"./rounded-98e7d656.js";import"./resizeObserver-a19810f7.js";const xe=ge({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ue(),...fe()},"VSwitch"),ke=be()({name:"VSwitch",inheritAttrs:!1,props:xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{attrs:i,slots:l}=r;const o=A(e,"indeterminate"),a=A(e,"modelValue"),{loaderClasses:c}=pe(e),{isFocused:S,focus:g,blur:C}=me(e),_=ae(),J=d(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),K=we(),G=d(()=>e.id||`switch-${K}`);function H(){o.value&&(o.value=!1)}function Q(u){var m,f;u.stopPropagation(),u.preventDefault(),(f=(m=_.value)==null?void 0:m.input)==null||f.click()}return Ve(()=>{const[u,m]=ye(i),f=N.filterProps(e),W=z.filterProps(e);return t(N,k({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},c.value,e.class]},u,f,{modelValue:a.value,"onUpdate:modelValue":w=>a.value=w,id:G.value,focused:S.value,style:e.style}),{...l,default:w=>{let{id:X,messagesId:Y,isDisabled:Z,isReadonly:ee,isValid:P}=w;const y={model:a,isValid:P};return t(z,k({ref:_},W,{modelValue:a.value,"onUpdate:modelValue":[n=>a.value=n,H],id:X.value,"aria-describedby":Y.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:Z.value,readonly:ee.value,onFocus:g,onBlur:C},m),{...l,default:n=>{let{backgroundColorClasses:b,backgroundColorStyles:s}=n;return t("div",{class:["v-switch__track",...b.value],style:s.value,onClick:Q},[l["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](y)]),l["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](y)])])},input:n=>{let{inputNode:b,icon:s,backgroundColorClasses:te,backgroundColorStyles:le}=n;return t(oe,null,[b,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading},e.inset?void 0:te.value],style:e.inset?void 0:le.value},[l.thumb?t(ce,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[l.thumb({...y,icon:s})]}):t(de,null,{default:()=>[e.loading?t(he,{name:"v-switch",active:!0,color:P.value===!1?void 0:J.value},{default:V=>l.loader?l.loader(V):t(Se,{active:V.isActive,color:V.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&t(ve,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}}),M=se({name:"FSSwitch",components:{FSSpan:T,FSCol:R,FSRow:E},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:h.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getColors:i}=re(),l=d(()=>i(e.color)),o=i(h.Background),a=i(h.Light),c=i(h.Dark),S=d(()=>e.editable?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?l.value.base:c.base,"--fs-switch-thumb-color":o.base,"--fs-switch-color":c.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":a.dark,"--fs-switch-thumb-color":o.base,"--fs-switch-color":a.dark}),g=d(()=>e.modelValue?"text-button":"text-body");return{style:S,font:g,onToggle:()=>{e.editable&&r("update:modelValue",!e.modelValue)}}}});function Te(e,r,i,l,o,a){return F(),x(R,{width:"hug"},{default:p(()=>[t(E,{width:"hug",align:"center-left"},{default:p(()=>[t(ke,k({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),$(e.$slots,"default",{},()=>[e.$props.label?(F(),x(T,{key:0,class:"fs-switch-label",style:q(e.style),font:e.font,onClick:ie(e.onToggle,["stop"])},{default:p(()=>[B(D(e.$props.label),1)]),_:1},8,["style","font","onClick"])):I("",!0)])]),_:3}),$(e.$slots,"description",{},()=>[e.$props.description?(F(),x(T,{key:0,class:"fs-switch-description",font:"text-underline",style:q(e.style)},{default:p(()=>[B(D(e.$props.description),1)]),_:1},8,["style"])):I("",!0)])]),_:3})}const O=ne(M,[["render",Te]]);M.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const tt={title:"Foundation/Shared/Toggles/Switch",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:r})=>({components:{FSSwitch:O,FSText:Fe},props:Object.keys(r),setup(){return{...e}},template:`
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
    </div>`})};var L,U,j;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(U=v.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};const lt=["Variations"];export{v as Variations,lt as __namedExportsOrder,tt as default};
