import{d as ae,e as d,z as t,A as k,F as oe,E as se,H as F,I as x,J as p,L as $,R as B,S as ie,M as D,N as q,K as I}from"./vue.esm-bundler-a27e881e.js";import{_ as T}from"./FSSpan-23926a6a.js";import{_ as E}from"./FSRow-e0b07355.js";import{_ as M}from"./FSCol-5941d279.js";import{C as h,u as re}from"./useColors-64c3c523.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{a as de}from"./index-1c023ca5.js";import{V as ce}from"./VDefaultsProvider-34413012.js";import{m as ue,u as me,V as N}from"./VInput-932b5afe.js";import{m as fe,V as A}from"./VSelectionControl-cdba1a53.js";import{a as pe,L as he}from"./loader-34392cbd.js";import{u as z}from"./locale-d8beded1.js";import{V as ve}from"./VIcon-05012a67.js";import{V as Se}from"./VProgressCircular-e23b48e3.js";import{p as ge,b as we,i as ye}from"./theme-40a9efa2.js";import{g as be,u as Ve}from"./color-17bc18af.js";import{F as Fe}from"./FSText-5f7ad050.js";import"./useSlots-f8c8bb5a.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./transition-91aa1796.js";import"./density-9e64face.js";import"./index-d3298e01.js";import"./rounded-acf264a5.js";import"./resizeObserver-f6ddbc93.js";const xe=ge({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ue(),...fe()},"VSwitch"),ke=be()({name:"VSwitch",inheritAttrs:!1,props:xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{attrs:i,slots:l}=r;const o=z(e,"indeterminate"),a=z(e,"modelValue"),{loaderClasses:c}=pe(e),{isFocused:S,focus:g,blur:C}=me(e),_=ae(),H=d(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),J=we(),K=d(()=>e.id||`switch-${J}`);function G(){o.value&&(o.value=!1)}function Q(u){var m,f;u.stopPropagation(),u.preventDefault(),(f=(m=_.value)==null?void 0:m.input)==null||f.click()}return Ve(()=>{const[u,m]=ye(i),f=N.filterProps(e),W=A.filterProps(e);return t(N,k({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},c.value,e.class]},u,f,{modelValue:a.value,"onUpdate:modelValue":w=>a.value=w,id:K.value,focused:S.value,style:e.style}),{...l,default:w=>{let{id:X,messagesId:Y,isDisabled:Z,isReadonly:ee,isValid:P}=w;const y={model:a,isValid:P};return t(A,k({ref:_},W,{modelValue:a.value,"onUpdate:modelValue":[n=>a.value=n,G],id:X.value,"aria-describedby":Y.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:Z.value,readonly:ee.value,onFocus:g,onBlur:C},m),{...l,default:n=>{let{backgroundColorClasses:b,backgroundColorStyles:s}=n;return t("div",{class:["v-switch__track",...b.value],style:s.value,onClick:Q},[l["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](y)]),l["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](y)])])},input:n=>{let{inputNode:b,icon:s,backgroundColorClasses:te,backgroundColorStyles:le}=n;return t(oe,null,[b,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading},e.inset?void 0:te.value],style:e.inset?void 0:le.value},[l.thumb?t(ce,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[l.thumb({...y,icon:s})]}):t(de,null,{default:()=>[e.loading?t(he,{name:"v-switch",active:!0,color:P.value===!1?void 0:H.value},{default:V=>l.loader?l.loader(V):t(Se,{active:V.isActive,color:V.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&t(ve,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}}),O=se({name:"FSSwitch",components:{FSSpan:T,FSRow:E,FSCol:M},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:h.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{getColors:i}=re(),l=d(()=>i(e.color)),o=i(h.Background),a=i(h.Light),c=i(h.Dark),S=d(()=>e.editable?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?l.value.base:c.base,"--fs-switch-thumb-color":o.base,"--fs-switch-color":c.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":a.dark,"--fs-switch-thumb-color":o.base,"--fs-switch-color":a.dark}),g=d(()=>e.modelValue?"text-button":"text-body");return{style:S,font:g,onToggle:()=>{e.editable&&r("update:modelValue",!e.modelValue)}}}});function Te(e,r,i,l,o,a){return F(),x(M,{width:"hug"},{default:p(()=>[t(E,{width:"hug",align:"center-left"},{default:p(()=>[t(ke,k({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),$(e.$slots,"default",{},()=>[e.$props.label?(F(),x(T,{key:0,class:"fs-switch-label",style:B(e.style),font:e.font,onClick:ie(e.onToggle,["stop"])},{default:p(()=>[D(q(e.$props.label),1)]),_:1},8,["style","font","onClick"])):I("",!0)])]),_:3}),$(e.$slots,"description",{},()=>[e.$props.description?(F(),x(T,{key:0,class:"fs-switch-description",font:"text-underline",style:B(e.style)},{default:p(()=>[D(q(e.$props.description),1)]),_:1},8,["style"])):I("",!0)])]),_:3})}const j=ne(O,[["render",Te]]);O.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const Ze={title:"Foundation/Shared/Toggles/Switch",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:r})=>({components:{FSSwitch:j,FSText:Fe},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(U=(R=v.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const et=["Variations"];export{v as Variations,et as __namedExportsOrder,Ze as default};
