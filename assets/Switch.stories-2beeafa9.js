import{f as r,p as pe,J as be,j as f,B as o,s as J,l as ne,G as T,O as we,P as Ve,N as se,e as Ce,I as Fe,n as xe,t as ke,q as L,u as j,v as I,x as K,A as Q,D as W,E as X,F as Y}from"./vue.esm-bundler-722d5586.js";import{p as R,d as Te,h as Be,b as z,s as ie,w as E,D as Pe,C as D,u as $}from"./useTimeZone-e2d91037.js";import{_ as O}from"./FSSpan-25dfede3.js";import{_ as re}from"./FSRow-adbe3642.js";import{_ as ue}from"./FSCol-73c0912e.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";import{c as Ie}from"./index-debb29c6.js";import{d as De,a as $e,u as Ae,V as Z}from"./VInput-157b0d5f.js";import{I as ee,m as ce,g as M,p as qe,a as H,V as de,u as Re,e as Ue}from"./VIcon-3294e246.js";import{a as Ge,b as Ne}from"./rounded-0d60e9e4.js";import{u as q}from"./locale-4b40caf6.js";import{R as Le}from"./index-de6a3e08.js";import{a as je,L as Ee}from"./loader-40ab58f6.js";import{V as Oe}from"./VProgressCircular-c301256c.js";import{F as ze}from"./FSText-f2895473.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./resizeObserver-c610ad12.js";const fe=Symbol.for("vuetify:selection-control-group"),me=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:ee,trueIcon:ee,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Te},...ce(),...Ge(),...Be()},"SelectionControlGroup"),Me=R({...me({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");M()({name:"VSelectionControlGroup",props:Me(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:i}=s;const l=q(e,"modelValue"),t=z(),u=r(()=>e.id||`v-selection-control-group-${t}`),c=r(()=>e.name||u.value),a=new Set;return pe(fe,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),be(()=>{a.delete(n)})}}),qe({[e.defaultsTarget]:{color:f(e,"color"),disabled:f(e,"disabled"),density:f(e,"density"),error:f(e,"error"),inline:f(e,"inline"),modelValue:l,multiple:r(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:f(e,"falseIcon"),trueIcon:f(e,"trueIcon"),readonly:f(e,"readonly"),ripple:f(e,"ripple"),type:f(e,"type"),valueComparator:f(e,"valueComparator")}}),H(()=>{var n;return o("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=i.default)==null?void 0:n.call(i)])}),{}}});const ve=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...ce(),...me()},"VSelectionControl");function He(e){const s=Ce(fe,void 0),{densityClasses:i}=Ne(e),l=q(e,"modelValue"),t=r(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),u=r(()=>e.falseValue!==void 0?e.falseValue:!1),c=r(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=r({get(){const S=s?s.modelValue.value:l.value;return c.value?E(S).some(d=>e.valueComparator(d,t.value)):e.valueComparator(S,t.value)},set(S){if(e.readonly)return;const d=S?t.value:u.value;let m=d;c.value&&(m=S?[...E(l.value),d]:E(l.value).filter(v=>!e.valueComparator(v,t.value))),s?s.modelValue.value=m:l.value=m}}),{textColorClasses:n,textColorStyles:g}=Re(r(()=>{if(!(e.error||e.disabled))return a.value?e.color:e.baseColor})),{backgroundColorClasses:h,backgroundColorStyles:w}=Ue(r(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),F=r(()=>a.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:i,trueValue:t,falseValue:u,model:a,textColorClasses:n,textColorStyles:g,backgroundColorClasses:h,backgroundColorStyles:w,icon:F}}const le=M()({name:"VSelectionControl",directives:{Ripple:Le},inheritAttrs:!1,props:ve(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const{group:t,densityClasses:u,icon:c,model:a,textColorClasses:n,textColorStyles:g,backgroundColorClasses:h,backgroundColorStyles:w,trueValue:F}=He(e),S=z(),d=r(()=>e.id||`input-${S}`),m=J(!1),v=J(!1),y=ne();t==null||t.onForceUpdate(()=>{y.value&&(y.value.checked=a.value)});function V(p){m.value=!0,Pe(p.target,":focus-visible")!==!1&&(v.value=!0)}function B(){m.value=!1,v.value=!1}function x(p){e.readonly&&t&&Fe(()=>t.forceUpdate()),a.value=p.target.checked}return H(()=>{var _,b;const p=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[U,G]=ie(i),P=o("input",T({ref:y,checked:a.value,disabled:!!(e.readonly||e.disabled),id:d.value,onBlur:B,onFocus:V,onInput:x,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:F.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},G),null);return o("div",T({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":v.value,"v-selection-control--inline":e.inline},u.value,e.class]},U,{style:e.style}),[o("div",{class:["v-selection-control__wrapper",n.value],style:g.value},[(_=l.default)==null?void 0:_.call(l,{backgroundColorClasses:h,backgroundColorStyles:w}),we(o("div",{class:["v-selection-control__input"]},[((b=l.input)==null?void 0:b.call(l,{model:a,textColorClasses:n,textColorStyles:g,backgroundColorClasses:h,backgroundColorStyles:w,inputNode:P,icon:c.value,props:{onFocus:V,onBlur:B,id:d.value}}))??o(se,null,[c.value&&o(de,{key:"icon",icon:c.value},null),P])]),[[Ve("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),p&&o(De,{for:d.value,clickable:!0,onClick:k=>k.stopPropagation()},{default:()=>[p]})])}),{isFocused:m,input:y}}});const Je=R({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...$e(),...ve()},"VSwitch"),Ke=M()({name:"VSwitch",inheritAttrs:!1,props:Je(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{attrs:i,slots:l}=s;const t=q(e,"indeterminate"),u=q(e,"modelValue"),{loaderClasses:c}=je(e),{isFocused:a,focus:n,blur:g}=Ae(e),h=ne(),w=r(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),F=z(),S=r(()=>e.id||`switch-${F}`);function d(){t.value&&(t.value=!1)}function m(v){var y,V;v.stopPropagation(),v.preventDefault(),(V=(y=h.value)==null?void 0:y.input)==null||V.click()}return H(()=>{const[v,y]=ie(i),V=Z.filterProps(e),B=le.filterProps(e);return o(Z,T({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":t.value},c.value,e.class]},v,V,{modelValue:u.value,"onUpdate:modelValue":x=>u.value=x,id:S.value,focused:a.value,style:e.style}),{...l,default:x=>{let{id:p,messagesId:U,isDisabled:G,isReadonly:P,isValid:_}=x;return o(le,T({ref:h},B,{modelValue:u.value,"onUpdate:modelValue":[b=>u.value=b,d],id:p.value,"aria-describedby":U.value,type:"checkbox","aria-checked":t.value?"mixed":void 0,disabled:G.value,readonly:P.value,onFocus:n,onBlur:g},y),{...l,default:b=>{let{backgroundColorClasses:k,backgroundColorStyles:C}=b;return o("div",{class:["v-switch__track",...k.value],style:C.value,onClick:m},null)},input:b=>{let{inputNode:k,icon:C,backgroundColorClasses:ye,backgroundColorStyles:ge}=b;return o(se,null,[k,o("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":C||e.loading},e.inset?void 0:ye.value],style:e.inset?void 0:ge.value},[o(Ie,null,{default:()=>[e.loading?o(Ee,{name:"v-switch",active:!0,color:_.value===!1?void 0:w.value},{default:N=>l.loader?l.loader(N):o(Oe,{active:N.isActive,color:N.color,indeterminate:!0,size:"16",width:"2"},null)}):C&&o(de,{key:C,icon:C,size:"x-small"},null)]})])])}})}})}),{}}}),he=xe({name:"FSSwitch",components:{FSSpan:O,FSRow:re,FSCol:ue},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:D.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:s}){const{modelValue:i,color:l,editable:t}=ke(e),u=$().getColors(l.value),c=$().getColors(D.Background),a=$().getColors(D.Light),n=$().getColors(D.Dark),g=r(()=>t.value?{"--fs-switch-translate-x":i.value?"8px":"-8px","--fs-switch-cursor":"pointer","--fs-switch-track-color":i.value?u.base:n.base,"--fs-switch-thumb-color":c.base,"--fs-switch-color":n.base}:{"--fs-switch-translate-x":i.value?"8px":"-8px","--fs-switch-cursor":"default","--fs-switch-track-color":a.dark,"--fs-switch-thumb-color":c.base,"--fs-switch-color":a.dark}),h=r(()=>i.value?"text-button":"text-body");return{editable:t,style:g,font:h,onToggle:()=>{t.value&&s("update:modelValue",!i.value)}}}});function Qe(e,s,i,l,t,u){return L(),j(ue,{width:"hug"},{default:I(()=>[o(re,{width:"hug",align:"center-left"},{default:I(()=>[o(Ke,T({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),K(e.$slots,"default",{},()=>[e.$props.label?(L(),j(O,{key:0,class:"fs-switch-label",style:Q(e.style),font:e.font,onClick:e.onToggle},{default:I(()=>[W(X(e.$props.label),1)]),_:1},8,["style","font","onClick"])):Y("",!0)])]),_:3}),K(e.$slots,"description",{},()=>[e.$props.description?(L(),j(O,{key:0,class:"fs-switch-description",font:"text-underline",style:Q(e.style)},{default:I(()=>[W(X(e.$props.description),1)]),_:1},8,["style"])):Y("",!0)])]),_:3})}const Se=_e(he,[["render",Qe]]);he.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const vl={title:"Foundation/Shared/Toggles/Switch",component:Se,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},A={args:{args:{value1:!1,value2:!1,value3:!1,value4:!0,value5:!1,value6:!1}},render:(e,{argTypes:s})=>({components:{FSSwitch:Se,FSText:ze},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(oe=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const hl=["Variations"];export{A as Variations,hl as __namedExportsOrder,vl as default};
