import{d as ae,j as d,z as t,x as k,F as oe,g as se,K as F,L as x,M as p,R as $,V as q,X as ie,N as B,O as D,P as I}from"./vue.esm-bundler-0a1af505.js";import{_ as T}from"./FSSpan-50615fe3.js";import{_ as j}from"./FSCol-5b91b447.js";import{_ as O}from"./FSRow-852c6353.js";import{C as h,u as re}from"./useColors-128f3c4d.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{a as de}from"./index-d90e6acb.js";import{V as ce}from"./VDefaultsProvider-0c713390.js";import{m as ue,u as me,V as N}from"./VInput-32e7bd1c.js";import{m as fe,V as z}from"./VSelectionControl-ad73d0a2.js";import{u as pe,L as he}from"./loader-92dc0f32.js";import{u as A}from"./proxiedModel-7a45f3f8.js";import{V as ve}from"./VIcon-a19d44fc.js";import{V as Se}from"./VProgressCircular-1c311cd8.js";import{p as ge,q as we,j as ye}from"./theme-2d24b19c.js";import{g as be,u as Ve}from"./useRender-cc726afb.js";import{F as Fe}from"./FSText-9a3c7352.js";import"./useSlots-de2ef136.js";import"./css-415780ec.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./locale-767f04a5.js";import"./color-68d45c69.js";import"./transition-c9646b8b.js";import"./density-99d9a31c.js";import"./tag-e48f136a.js";import"./index-0339a920.js";import"./intersectionObserver-bdfff18f.js";import"./rounded-94c7156f.js";import"./resizeObserver-86c9045a.js";const xe=ge({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ue(),...fe()},"VSwitch"),ke=be()({name:"VSwitch",inheritAttrs:!1,props:xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{attrs:i,slots:l}=r;const o=A(e,"indeterminate"),a=A(e,"modelValue"),{loaderClasses:c}=pe(e),{isFocused:S,focus:g,blur:C}=me(e),_=ae(),K=d(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),X=we(),G=d(()=>e.id||`switch-${X}`);function H(){o.value&&(o.value=!1)}function J(u){var m,f;u.stopPropagation(),u.preventDefault(),(f=(m=_.value)==null?void 0:m.input)==null||f.click()}return Ve(()=>{const[u,m]=ye(i),f=N.filterProps(e),Q=z.filterProps(e);return t(N,k({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},c.value,e.class]},u,f,{modelValue:a.value,"onUpdate:modelValue":w=>a.value=w,id:G.value,focused:S.value,style:e.style}),{...l,default:w=>{let{id:W,messagesId:Y,isDisabled:Z,isReadonly:ee,isValid:P}=w;const y={model:a,isValid:P};return t(z,k({ref:_},Q,{modelValue:a.value,"onUpdate:modelValue":[n=>a.value=n,H],id:W.value,"aria-describedby":Y.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:Z.value,readonly:ee.value,onFocus:g,onBlur:C},m),{...l,default:n=>{let{backgroundColorClasses:b,backgroundColorStyles:s}=n;return t("div",{class:["v-switch__track",...b.value],style:s.value,onClick:J},[l["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](y)]),l["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](y)])])},input:n=>{let{inputNode:b,icon:s,backgroundColorClasses:te,backgroundColorStyles:le}=n;return t(oe,null,[b,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading},e.inset?void 0:te.value],style:e.inset?void 0:le.value},[l.thumb?t(ce,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[l.thumb({...y,icon:s})]}):t(de,null,{default:()=>[e.loading?t(he,{name:"v-switch",active:!0,color:P.value===!1?void 0:K.value},{default:V=>l.loader?l.loader(V):t(Se,{active:V.isActive,color:V.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&t(ve,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}}),E=se({name:"FSSwitch",components:{FSSpan:T,FSCol:j,FSRow:O},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:h.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getColors:i}=re(),l=d(()=>i(e.color)),o=i(h.Background),a=i(h.Light),c=i(h.Dark),S=d(()=>e.editable?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?l.value.base:c.base,"--fs-switch-thumb-color":o.base,"--fs-switch-color":c.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":a.dark,"--fs-switch-thumb-color":o.base,"--fs-switch-color":a.dark}),g=d(()=>e.modelValue?"text-button":"text-body");return{style:S,font:g,onToggle:()=>{e.editable&&r("update:modelValue",!e.modelValue)}}}});function Te(e,r,i,l,o,a){return F(),x(j,{width:"hug"},{default:p(()=>[t(O,{width:"hug",align:"center-left"},{default:p(()=>[t(ke,k({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),$(e.$slots,"default",{},()=>[e.$props.label?(F(),x(T,{key:0,class:"fs-switch-label",style:q(e.style),font:e.font,onClick:ie(e.onToggle,["stop"])},{default:p(()=>[B(D(e.$props.label),1)]),_:1},8,["style","font","onClick"])):I("",!0)])]),_:3}),$(e.$slots,"description",{},()=>[e.$props.description?(F(),x(T,{key:0,class:"fs-switch-description",font:"text-underline",style:q(e.style)},{default:p(()=>[B(D(e.$props.description),1)]),_:1},8,["style"])):I("",!0)])]),_:3})}const M=ne(E,[["render",Te]]);E.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const at={title:"Foundation/Shared/Toggles/Switch",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:r})=>({components:{FSSwitch:M,FSText:Fe},props:Object.keys(r),setup(){return{...e}},template:`
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
    </div>`})};var L,R,U;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const ot=["Variations"];export{v as Variations,ot as __namedExportsOrder,at as default};
