import{d as oe,e as n,z as l,A as k,F as se,E as ie,H as F,I as x,J as f,L as $,R as B,S as re,M as D,N as q,K as I}from"./vue.esm-bundler-a27e881e.js";import{_ as C}from"./FSSpan-23926a6a.js";import{_ as E}from"./FSRow-e0b07355.js";import{_ as M}from"./FSCol-5941d279.js";import{C as p,u as h}from"./useColors-64c3c523.js";import{_ as ne}from"./_plugin-vue_export-helper-c27b6911.js";import{a as de}from"./index-a4e785fb.js";import{V as ce}from"./VDefaultsProvider-6b0a994a.js";import{m as ue,u as me,V as N}from"./VInput-97b04c8f.js";import{m as fe,V as A}from"./VSelectionControl-1d98a60e.js";import{a as pe,L as he}from"./loader-d45e9b6f.js";import{u as z}from"./locale-d8beded1.js";import{V as ve}from"./VIcon-2e68f29b.js";import{V as Se}from"./VProgressCircular-21a2049c.js";import{p as ge,b as we,i as ye}from"./theme-40a9efa2.js";import{g as be,u as Ve}from"./color-2740292e.js";import{F as Fe}from"./FSText-8dc1b884.js";import"./useSlots-f8c8bb5a.js";import"./css-fb381997.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./transition-91aa1796.js";import"./density-9e64face.js";import"./index-d3298e01.js";import"./rounded-acf264a5.js";import"./resizeObserver-f6ddbc93.js";const xe=ge({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ue(),...fe()},"VSwitch"),ke=be()({name:"VSwitch",inheritAttrs:!1,props:xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{attrs:d,slots:t}=i;const o=z(e,"indeterminate"),a=z(e,"modelValue"),{loaderClasses:S}=pe(e),{isFocused:g,focus:T,blur:H}=me(e),_=oe(),J=n(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),K=we(),G=n(()=>e.id||`switch-${K}`);function Q(){o.value&&(o.value=!1)}function W(c){var u,m;c.stopPropagation(),c.preventDefault(),(m=(u=_.value)==null?void 0:u.input)==null||m.click()}return Ve(()=>{const[c,u]=ye(d),m=N.filterProps(e),X=A.filterProps(e);return l(N,k({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},S.value,e.class]},c,m,{modelValue:a.value,"onUpdate:modelValue":w=>a.value=w,id:G.value,focused:g.value,style:e.style}),{...t,default:w=>{let{id:Y,messagesId:Z,isDisabled:ee,isReadonly:te,isValid:P}=w;const y={model:a,isValid:P};return l(A,k({ref:_},X,{modelValue:a.value,"onUpdate:modelValue":[r=>a.value=r,Q],id:Y.value,"aria-describedby":Z.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:ee.value,readonly:te.value,onFocus:T,onBlur:H},u),{...t,default:r=>{let{backgroundColorClasses:b,backgroundColorStyles:s}=r;return l("div",{class:["v-switch__track",...b.value],style:s.value,onClick:W},[t["track-true"]&&l("div",{key:"prepend",class:"v-switch__track-true"},[t["track-true"](y)]),t["track-false"]&&l("div",{key:"append",class:"v-switch__track-false"},[t["track-false"](y)])])},input:r=>{let{inputNode:b,icon:s,backgroundColorClasses:le,backgroundColorStyles:ae}=r;return l(se,null,[b,l("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading},e.inset?void 0:le.value],style:e.inset?void 0:ae.value},[t.thumb?l(ce,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[t.thumb({...y,icon:s})]}):l(de,null,{default:()=>[e.loading?l(he,{name:"v-switch",active:!0,color:P.value===!1?void 0:J.value},{default:V=>t.loader?t.loader(V):l(Se,{active:V.isActive,color:V.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&l(ve,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}}),O=ie({name:"FSSwitch",components:{FSSpan:C,FSRow:E,FSCol:M},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:p.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:i}){const d=n(()=>h().getColors(e.color)),t=h().getColors(p.Background),o=h().getColors(p.Light),a=h().getColors(p.Dark),S=n(()=>e.editable?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?d.value.base:a.base,"--fs-switch-thumb-color":t.base,"--fs-switch-color":a.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":o.dark,"--fs-switch-thumb-color":t.base,"--fs-switch-color":o.dark}),g=n(()=>e.modelValue?"text-button":"text-body");return{style:S,font:g,onToggle:()=>{e.editable&&i("update:modelValue",!e.modelValue)}}}});function Ce(e,i,d,t,o,a){return F(),x(M,{width:"hug"},{default:f(()=>[l(E,{width:"hug",align:"center-left"},{default:f(()=>[l(ke,k({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),$(e.$slots,"default",{},()=>[e.$props.label?(F(),x(C,{key:0,class:"fs-switch-label",style:B(e.style),font:e.font,onClick:re(e.onToggle,["stop"])},{default:f(()=>[D(q(e.$props.label),1)]),_:1},8,["style","font","onClick"])):I("",!0)])]),_:3}),$(e.$slots,"description",{},()=>[e.$props.description?(F(),x(C,{key:0,class:"fs-switch-description",font:"text-underline",style:B(e.style)},{default:f(()=>[D(q(e.$props.description),1)]),_:1},8,["style"])):I("",!0)])]),_:3})}const j=ne(O,[["render",Ce]]);O.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const Ze={title:"Foundation/Shared/Toggles/Switch",component:j,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},v={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:i})=>({components:{FSSwitch:j,FSText:Fe},props:Object.keys(i),setup(){return{...e}},template:`
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
