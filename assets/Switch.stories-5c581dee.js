import{d as se,e as i,A as t,B as $,F as oe,j as re,J as _,K as P,L as y,R as A,M as I,S as ie,U as N,V as O,N as R}from"./vue.esm-bundler-857e5af7.js";import{_ as q}from"./FSSpan-9f7a3096.js";import{_ as J}from"./FSCol-439c812a.js";import{_ as K}from"./FSRow-e30f1dcc.js";import{C as m,u as ne}from"./useColors-17643043.js";import{u as de}from"./useRules-b3d475c7.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";import{a as ce}from"./index-900eb6c5.js";import{V as me}from"./VDefaultsProvider-e6a6e57a.js";import{m as fe,u as pe,V as M}from"./VInput-7e8bc521.js";import{m as he,V as U}from"./VSelectionControl-ac658b6e.js";import{u as ve,L as Se}from"./loader-c881e63b.js";import{u as E}from"./proxiedModel-c6c1514f.js";import{V as ge}from"./VIcon-77d6c341.js";import{V as we}from"./VProgressCircular-b85c805e.js";import{p as ye,I as be,s as Ve,l as Fe}from"./theme-d5133154.js";import{g as xe,u as ke}from"./useRender-1606c976.js";import{F as Te}from"./FSText-0e9e862b.js";import"./useSlots-8bee1a74.js";import"./css-ab2bdb81.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./locale-54c2c8ba.js";import"./color-3025502c.js";import"./transition-8ae71e6c.js";import"./density-9a54c498.js";import"./dimensions-946cb0c4.js";import"./tag-41ce785e.js";import"./index-1a539509.js";import"./VLabel-5378811f.js";import"./rounded-751db039.js";import"./resizeObserver-3e02ea9a.js";const Ce=ye({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...fe(),...he()},"VSwitch"),_e=xe()({name:"VSwitch",inheritAttrs:!1,props:Ce(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{attrs:f,slots:l}=r;const o=E(e,"indeterminate"),a=E(e,"modelValue"),{loaderClasses:p}=ve(e),{isFocused:n,focus:V,blur:d}=pe(e),u=se(),h=be&&window.matchMedia("(forced-colors: active)").matches,F=i(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),v=Ve(),B=i(()=>e.id||`switch-${v}`);function H(){o.value&&(o.value=!1)}function Q(S){var g,w;S.stopPropagation(),S.preventDefault(),(w=(g=u.value)==null?void 0:g.input)==null||w.click()}return ke(()=>{const[S,g]=Fe(f),w=M.filterProps(e),X=U.filterProps(e);return t(M,$({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":o.value},p.value,e.class]},S,w,{modelValue:a.value,"onUpdate:modelValue":x=>a.value=x,id:B.value,focused:n.value,style:e.style}),{...l,default:x=>{let{id:Y,messagesId:Z,isDisabled:ee,isReadonly:te,isValid:D}=x;const k={model:a,isValid:D};return t(U,$({ref:u},X,{modelValue:a.value,"onUpdate:modelValue":[c=>a.value=c,H],id:Y.value,"aria-describedby":Z.value,type:"checkbox","aria-checked":o.value?"mixed":void 0,disabled:ee.value,readonly:te.value,onFocus:V,onBlur:d},g),{...l,default:c=>{let{backgroundColorClasses:T,backgroundColorStyles:s}=c;return t("div",{class:["v-switch__track",h?void 0:T.value],style:s.value,onClick:Q},[l["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[l["track-true"](k)]),l["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[l["track-false"](k)])])},input:c=>{let{inputNode:T,icon:s,backgroundColorClasses:le,backgroundColorStyles:ae}=c;return t(oe,null,[T,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":s||e.loading},e.inset||h?void 0:le.value],style:e.inset?void 0:ae.value},[l.thumb?t(me,{defaults:{VIcon:{icon:s,size:"x-small"}}},{default:()=>[l.thumb({...k,icon:s})]}):t(ce,null,{default:()=>[e.loading?t(Se,{name:"v-switch",active:!0,color:D.value===!1?void 0:F.value},{default:C=>l.loader?l.loader(C):t(we,{active:C.isActive,color:C.color,indeterminate:!0,size:"16",width:"2"},null)}):s&&t(ge,{key:String(s),icon:s,size:"x-small"},null)]})])])}})}})}),{}}}),W=re({name:"FSSwitch",components:{FSSpan:q,FSCol:J,FSRow:K},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:m.Primary},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:f,blurred:l,getMessages:o}=de(),{getColors:a}=ne(),p=i(()=>a(e.color)),n=a(m.Background),V=a(m.Error),d=a(m.Light),u=a(m.Dark),h=i(()=>e.editable?v.value.length?{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":V.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":u.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":e.modelValue?p.value.base:d.dark,"--fs-switch-thumb-color":n.base,"--fs-switch-color":u.base}:{"--fs-switch-translate-x":e.modelValue?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":e.modelValue?p.value.light:d.base,"--fs-switch-thumb-color":n.base,"--fs-switch-color":d.dark}),F=i(()=>e.modelValue?"text-button":"text-body"),v=i(()=>e.messages??o(e.modelValue,e.rules));return{validateOn:f,messages:v,blurred:l,style:h,font:F,onToggle:()=>{e.editable&&r("update:modelValue",!e.modelValue)}}}});function Pe(e,r,f,l,o,a){return _(),P(J,{width:"hug"},{default:y(()=>[t(K,{width:"hug",align:"center-left"},{default:y(()=>[t(_e,$({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","rules","validateOn","modelValue","onUpdate:modelValue"]),A(e.$slots,"default",{},()=>[e.$props.label?(_(),P(q,{key:0,class:"fs-switch-label",style:I(e.style),font:e.font,onClick:ie(e.onToggle,["stop"])},{default:y(()=>[N(O(e.$props.label),1)]),_:1},8,["style","font","onClick"])):R("",!0)])]),_:3}),A(e.$slots,"description",{},()=>[e.$props.description?(_(),P(q,{key:0,class:"fs-switch-description",font:"text-underline",style:I(e.style)},{default:y(()=>[N(O(e.$props.description),1)]),_:1},8,["style"])):R("",!0)])]),_:3})}const G=ue(W,[["render",Pe]]);W.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const nt={title:"Foundation/Shared/Toggles/Switch",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},b={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:r})=>({components:{FSSwitch:G,FSText:Te},props:Object.keys(r),setup(){return{...e}},template:`
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
    </div>`})};var L,z,j;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(j=(z=b.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};const dt=["Variations"];export{b as Variations,dt as __namedExportsOrder,nt as default};
