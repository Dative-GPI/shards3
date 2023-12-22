import{f as r,p as pe,U as be,g as f,B as o,s as X,k as ne,F as T,X as we,Y as Ce,L as se,e as Ve,Z as Fe,m as xe,t as ke,n as L,q as z,u as I,v as Y,z as Z,C as J,D as K,E as Q}from"./vue.esm-bundler-29da8e49.js";import{p as U,d as Te,i as Be,b as O,v as ie,w as E,x as _e,C as D,u as $}from"./useColors-ad83dc40.js";import{_ as j}from"./FSSpan-46176227.js";import{_ as re}from"./FSRow-99784c66.js";import{_ as ue}from"./FSCol-322e7463.js";import{_ as Pe}from"./_plugin-vue_export-helper-c27b6911.js";import{a as Ie}from"./index-3038ad46.js";import{V as De,a as $e,u as Ae,b as W}from"./VInput-ee7ba7bd.js";import{I as ee,m as ce,g as M,p as qe,u as H,V as de,d as Ue,e as Re}from"./VIcon-8d401865.js";import{a as Ge,b as Ne}from"./rounded-6c346ce6.js";import{u as q}from"./locale-542d2ec8.js";import{R as Le,V as ze}from"./index-cd8a77ee.js";import{a as Ee,L as je}from"./loader-549251e9.js";import{F as Oe}from"./FSText-075b9c4d.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./resizeObserver-55bed5e2.js";const fe=Symbol.for("vuetify:selection-control-group"),ve=U({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:ee,trueIcon:ee,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Te},...ce(),...Ge(),...Be()},"SelectionControlGroup"),Me=U({...ve({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");M()({name:"VSelectionControlGroup",props:Me(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:i}=s;const l=q(e,"modelValue"),t=O(),u=r(()=>e.id||`v-selection-control-group-${t}`),c=r(()=>e.name||u.value),a=new Set;return pe(fe,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),be(()=>{a.delete(n)})}}),qe({[e.defaultsTarget]:{color:f(e,"color"),disabled:f(e,"disabled"),density:f(e,"density"),error:f(e,"error"),inline:f(e,"inline"),modelValue:l,multiple:r(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:f(e,"falseIcon"),trueIcon:f(e,"trueIcon"),readonly:f(e,"readonly"),ripple:f(e,"ripple"),type:f(e,"type"),valueComparator:f(e,"valueComparator")}}),H(()=>{var n;return o("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=i.default)==null?void 0:n.call(i)])}),{}}});const me=U({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ce(),...ve()},"VSelectionControl");function He(e){const s=Ve(fe,void 0),{densityClasses:i}=Ne(e),l=q(e,"modelValue"),t=r(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),u=r(()=>e.falseValue!==void 0?e.falseValue:!1),c=r(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=r({get(){const S=s?s.modelValue.value:l.value;return c.value?E(S).some(d=>e.valueComparator(d,t.value)):e.valueComparator(S,t.value)},set(S){if(e.readonly)return;const d=S?t.value:u.value;let v=d;c.value&&(v=S?[...E(l.value),d]:E(l.value).filter(m=>!e.valueComparator(m,t.value))),s?s.modelValue.value=v:l.value=v}}),{textColorClasses:n,textColorStyles:g}=Ue(r(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:h,backgroundColorStyles:w}=Re(r(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),F=r(()=>a.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:i,trueValue:t,falseValue:u,model:a,textColorClasses:n,textColorStyles:g,backgroundColorClasses:h,backgroundColorStyles:w,icon:F}}const le=M()({name:"VSelectionControl",directives:{Ripple:Le},inheritAttrs:!1,props:me(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const{group:t,densityClasses:u,icon:c,model:a,textColorClasses:n,textColorStyles:g,backgroundColorClasses:h,backgroundColorStyles:w,trueValue:F}=He(e),S=O(),d=r(()=>e.id||`input-${S}`),v=X(!1),m=X(!1),y=ne();t==null||t.onForceUpdate(()=>{y.value&&(y.value.checked=a.value)});function C(p){v.value=!0,_e(p.target,":focus-visible")!==!1&&(m.value=!0)}function B(){v.value=!1,m.value=!1}function x(p){e.readonly&&t&&Fe(()=>t.forceUpdate()),a.value=p.target.checked}return H(()=>{var P,b;const p=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[R,G]=ie(i),_=o("input",T({ref:y,checked:a.value,disabled:!!(e.readonly||e.disabled),id:d.value,onBlur:B,onFocus:C,onInput:x,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:F.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},G),null);return o("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":v.value,"v-selection-control--focus-visible":m.value,"v-selection-control--inline":e.inline},u.value,e.class]},R,{style:e.style}),[o("div",{class:["v-selection-control__wrapper",n.value],style:g.value},[(P=l.default)==null?void 0:P.call(l,{backgroundColorClasses:h,backgroundColorStyles:w}),we(o("div",{class:["v-selection-control__input"]},[((b=l.input)==null?void 0:b.call(l,{model:a,textColorClasses:n,textColorStyles:g,backgroundColorClasses:h,backgroundColorStyles:w,inputNode:_,icon:c.value,props:{onFocus:C,onBlur:B,id:d.value}}))??o(se,null,[c.value&&o(de,{key:"icon",icon:c.value},null),_])]),[[Ce("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),p&&o(De,{for:d.value,clickable:!0,onClick:k=>k.stopPropagation()},{default:()=>[p]})])}),{isFocused:v,input:y}}});const Xe=U({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...$e(),...me()},"VSwitch"),Ye=M()({name:"VSwitch",inheritAttrs:!1,props:Xe(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const t=q(e,"indeterminate"),u=q(e,"modelValue"),{loaderClasses:c}=Ee(e),{isFocused:a,focus:n,blur:g}=Ae(e),h=ne(),w=r(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),F=O(),S=r(()=>e.id||`switch-${F}`);function d(){t.value&&(t.value=!1)}function v(m){var y,C;m.stopPropagation(),m.preventDefault(),(C=(y=h.value)==null?void 0:y.input)==null||C.click()}return H(()=>{const[m,y]=ie(i),C=W.filterProps(e),B=le.filterProps(e);return o(W,T({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":t.value},c.value,e.class]},m,C,{modelValue:u.value,"onUpdate:modelValue":x=>u.value=x,id:S.value,focused:a.value,style:e.style}),{...l,default:x=>{let{id:p,messagesId:R,isDisabled:G,isReadonly:_,isValid:P}=x;return o(le,T({ref:h},B,{modelValue:u.value,"onUpdate:modelValue":[b=>u.value=b,d],id:p.value,"aria-describedby":R.value,type:"checkbox","aria-checked":t.value?"mixed":void 0,disabled:G.value,readonly:_.value,onFocus:n,onBlur:g},y),{...l,default:b=>{let{backgroundColorClasses:k,backgroundColorStyles:V}=b;return o("div",{class:["v-switch__track",...k.value],style:V.value,onClick:v},null)},input:b=>{let{inputNode:k,icon:V,backgroundColorClasses:ye,backgroundColorStyles:ge}=b;return o(se,null,[k,o("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":V||e.loading},e.inset?void 0:ye.value],style:e.inset?void 0:ge.value},[o(Ie,null,{default:()=>[e.loading?o(je,{name:"v-switch",active:!0,color:P.value===!1?void 0:w.value},{default:N=>l.loader?l.loader(N):o(ze,{active:N.isActive,color:N.color,indeterminate:!0,size:"16",width:"2"},null)}):V&&o(de,{key:V,icon:V,size:"x-small"},null)]})])])}})}})}),{}}}),he=xe({name:"FSSwitch",components:{FSSpan:j,FSRow:re,FSCol:ue},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:D.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:s}){const{value:i,color:l,editable:t}=ke(e),u=$().getColors(l.value),c=$().getColors(D.Background),a=$().getColors(D.Light),n=$().getColors(D.Dark),g=r(()=>t.value?{"--fs-switch-translate-x":i.value?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":i.value?u.base:n.base,"--fs-switch-thumb-color":c.base,"--fs-switch-color":n.base}:{"--fs-switch-translate-x":i.value?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":a.dark,"--fs-switch-thumb-color":c.base,"--fs-switch-color":a.dark}),h=r(()=>i.value?"text-button":"text-body");return{editable:t,style:g,font:h,onToggle:()=>{t.value&&s("update:value",!i.value)}}}});function Ze(e,s,i,l,t,u){return L(),z(ue,{width:"hug"},{default:I(()=>[o(re,{width:"hug",align:"center-left"},{default:I(()=>[o(Ye,T({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.value,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),Y(e.$slots,"default",{},()=>[e.$props.label?(L(),z(j,{key:0,class:"fs-switch-label",style:Z(e.style),font:e.font,onClick:e.onToggle},{default:I(()=>[J(K(e.$props.label),1)]),_:1},8,["style","font","onClick"])):Q("",!0)])]),_:3}),Y(e.$slots,"description",{},()=>[e.$props.description?(L(),z(j,{key:0,class:"fs-switch-description",font:"text-underline",style:Z(e.style)},{default:I(()=>[J(K(e.$props.description),1)]),_:1},8,["style"])):Q("",!0)])]),_:3})}const Se=Pe(he,[["render",Ze]]);he.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const vl={title:"Foundation/Shared/Toggles/Switch",component:Se,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},A={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:s})=>({components:{FSSwitch:Se,FSText:Oe},props:Object.keys(s),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Primary color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model:value="args.value1" />
        <FSSwitch v-model:value="args.value2" label="Second switch" />
        <FSSwitch v-model:value="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model:value="args.value4" color="success" />
        <FSSwitch v-model:value="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model:value="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :value="false" :editable="false" />
        <FSSwitch :value="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :value="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>`})};var te,ae,oe;A.parameters={...A.parameters,docs:{...(te=A.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
        <FSSwitch v-model:value="args.value1" />
        <FSSwitch v-model:value="args.value2" label="Second switch" />
        <FSSwitch v-model:value="args.value3" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Success color </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch v-model:value="args.value4" color="success" />
        <FSSwitch v-model:value="args.value5" color="success" label="Second switch" />
        <FSSwitch v-model:value="args.value6" color="success" label="Third switch"  description="Description of the third switch" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Primary color, uneditable </FSText>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <FSSwitch :value="false" :editable="false" />
        <FSSwitch :value="true"  :editable="false" label="Second switch (disabled)" />
        <FSSwitch :value="false" :editable="false" label="Third switch (disabled)" description="Description of the third switch" />
      </div>
    </div>\`
  })
}`,...(oe=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const ml=["Variations"];export{A as Variations,ml as __namedExportsOrder,vl as default};
