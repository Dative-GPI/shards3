import{g as Ae,t as Le,f as u,M as Ee,N as Re,z as m,l as o,s as Z,B as Te,x as I,O as Ue,P as Ge,F as Be,e as ze,Q as Me,o as M,j as H,k as x,n as ee,m as ae,p as le,q as te}from"./vue.esm-bundler-3a71544d.js";import{C as He,u as Q}from"./useColors-f8bf713a.js";import{_ as K,b as Fe,p as R,i as ne,e as Qe,j as _e,q as Je,g as W,B as X,d as Ke,u as Y,C as Ie,V as Pe,D as J,v as We,z as Xe,E as Ye,c as Ze}from"./FSRow-c6493f26.js";import{_ as qe}from"./FSCol-b5bd7e48.js";import{a as ea}from"./index-98ae0985.js";import{V as aa,m as la,u as ta,a as oe}from"./VLabel-391310ec.js";import{m as na,u as oa}from"./rounded-81fca583.js";import{b as E,c as sa,L as ra}from"./loader-b55f2f66.js";import{R as ua,V as ia}from"./index-fe6eebca.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const je=Ae({name:"FSSwitch",components:{FSSpan:K,FSRow:Fe,FSCol:qe},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:He.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:r,color:l,editable:t}=Le(e),i=Q().getVariants(l.value),c=Q().getBackground(),n=Q().getDark(),s=u(()=>({"--fs-switch-cursor":t.value?"pointer":"default","--fs-switch-translate-x":r.value?"8px":"-8px","--fs-switch-base-color":r.value?i.base:t.value?n.base:n.light,"--fs-switch-base-text":t.value?n.base:n.light,"--fs-switch-base-background":c.base})),b=u(()=>r.value?"text-button":"text-body");return{editable:t,style:s,font:b,onToggle:()=>{t.value&&a("update:value",!r.value)}}}});const xe=Symbol.for("vuetify:selection-control-group"),De=R({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:ne,trueIcon:ne,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Qe},..._e(),...na(),...Je()},"SelectionControlGroup"),ca=R({...De({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");W()({name:"VSelectionControlGroup",props:ca(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:r}=a;const l=E(e,"modelValue"),t=X(),i=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||i.value),n=new Set;return Ee(xe,{modelValue:l,forceUpdate:()=>{n.forEach(s=>s())},onForceUpdate:s=>{n.add(s),Re(()=>{n.delete(s)})}}),Ke({[e.defaultsTarget]:{color:m(e,"color"),disabled:m(e,"disabled"),density:m(e,"density"),error:m(e,"error"),inline:m(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:m(e,"falseIcon"),trueIcon:m(e,"trueIcon"),readonly:m(e,"readonly"),ripple:m(e,"ripple"),type:m(e,"type"),valueComparator:m(e,"valueComparator")}}),Y(()=>{var s;return o("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(s=r.default)==null?void 0:s.call(r)])}),{}}});const $e=R({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,..._e(),...De()},"VSelectionControl");function da(e){const a=ze(xe,void 0),{densityClasses:r}=oa(e),l=E(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),n=u({get(){const p=a?a.modelValue.value:l.value;return c.value?J(p).some(d=>e.valueComparator(d,t.value)):e.valueComparator(p,t.value)},set(p){if(e.readonly)return;const d=p?t.value:i.value;let f=d;c.value&&(f=p?[...J(l.value),d]:J(l.value).filter(v=>!e.valueComparator(v,t.value))),a?a.modelValue.value=f:l.value=f}}),{textColorClasses:s,textColorStyles:b}=We(u(()=>{if(!(e.error||e.disabled))return n.value?e.color:e.baseColor})),{backgroundColorClasses:y,backgroundColorStyles:k}=Xe(u(()=>n.value&&!e.error&&!e.disabled?e.color:void 0)),B=u(()=>n.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:r,trueValue:t,falseValue:i,model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,icon:B}}const se=W()({name:"VSelectionControl",directives:{Ripple:ua},inheritAttrs:!1,props:$e(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:r,slots:l}=a;const{group:t,densityClasses:i,icon:c,model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,trueValue:B}=da(e),p=X(),d=u(()=>e.id||`input-${p}`),f=Z(!1),v=Z(!1),g=Te();t==null||t.onForceUpdate(()=>{g.value&&(g.value.checked=n.value)});function C(S){f.value=!0,Ye(S.target,":focus-visible")!==!1&&(v.value=!0)}function P(){f.value=!1,v.value=!1}function F(S){e.readonly&&t&&Me(()=>t.forceUpdate()),n.value=S.target.checked}return Y(()=>{var j,h;const S=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[U,G]=Ie(r),q=o("input",I({ref:g,checked:n.value,disabled:!!(e.readonly||e.disabled),id:d.value,onBlur:P,onFocus:C,onInput:F,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:B.value,name:e.name,"aria-checked":e.type==="checkbox"?n.value:void 0},G),null);return o("div",I({class:["v-selection-control",{"v-selection-control--dirty":n.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":v.value,"v-selection-control--inline":e.inline},i.value,e.class]},U,{style:e.style}),[o("div",{class:["v-selection-control__wrapper",s.value],style:b.value},[(j=l.default)==null?void 0:j.call(l,{backgroundColorClasses:y,backgroundColorStyles:k}),Ue(o("div",{class:["v-selection-control__input"]},[((h=l.input)==null?void 0:h.call(l,{model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,inputNode:q,icon:c.value,props:{onFocus:C,onBlur:P,id:d.value}}))??o(Be,null,[c.value&&o(Pe,{key:"icon",icon:c.value},null),q])]),[[Ge("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),S&&o(aa,{for:d.value,clickable:!0,onClick:_=>_.stopPropagation()},{default:()=>[S]})])}),{isFocused:f,input:g}}}),ma=R({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...la(),...$e()},"VSwitch"),fa=W()({name:"VSwitch",inheritAttrs:!1,props:ma(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{attrs:r,slots:l}=a;const t=E(e,"indeterminate"),i=E(e,"modelValue"),{loaderClasses:c}=sa(e),{isFocused:n,focus:s,blur:b}=ta(e),y=Te(),k=u(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),B=X(),p=u(()=>e.id||`switch-${B}`);function d(){t.value&&(t.value=!1)}function f(v){var g,C;v.stopPropagation(),v.preventDefault(),(C=(g=y.value)==null?void 0:g.input)==null||C.click()}return Y(()=>{const[v,g]=Ie(r),C=oe.filterProps(e),P=se.filterProps(e);return o(oe,I({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":t.value},c.value,e.class]},v,C,{modelValue:i.value,"onUpdate:modelValue":F=>i.value=F,id:p.value,focused:n.value,style:e.style}),{...l,default:F=>{let{id:S,messagesId:U,isDisabled:G,isReadonly:q,isValid:j}=F;return o(se,I({ref:y},P,{modelValue:i.value,"onUpdate:modelValue":[h=>i.value=h,d],id:S.value,"aria-describedby":U.value,type:"checkbox","aria-checked":t.value?"mixed":void 0,disabled:G.value,readonly:q.value,onFocus:s,onBlur:b},g),{...l,default:h=>{let{backgroundColorClasses:_,backgroundColorStyles:w}=h;return o("div",{class:["v-switch__track",..._.value],style:w.value,onClick:f},null)},input:h=>{let{inputNode:_,icon:w,backgroundColorClasses:Ne,backgroundColorStyles:Oe}=h;return o(Be,null,[_,o("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":w||e.loading},e.inset?void 0:Ne.value],style:e.inset?void 0:Oe.value},[o(ea,null,{default:()=>[e.loading?o(ra,{name:"v-switch",active:!0,color:j.value===!1?void 0:k.value},{default:z=>l.loader?l.loader(z):o(ia,{active:z.isActive,color:z.color,indeterminate:!0,size:"16",width:"2"},null)}):w&&o(Pe,{key:w,icon:w,size:"x-small"},null)]})])])}})}})}),{}}});function va(e,a,r,l,t,i){return M(),H(qe,{width:"hug",height:"hug"},{default:x(()=>[o(Fe,{width:"hug",height:"hug"},{default:x(()=>[o(fa,I({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.value,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),e.$props.label?(M(),H(K,{key:0,class:"fs-switch-label",style:ee(e.style),font:e.font,onClick:e.onToggle},{default:x(()=>[ae(le(e.$props.label),1)]),_:1},8,["style","font","onClick"])):te("",!0)]),_:1}),e.$props.description?(M(),H(K,{key:0,class:"fs-switch-description",font:"text-overline",style:ee(e.style)},{default:x(()=>[ae(le(e.$props.description),1)]),_:1},8,["style"])):te("",!0)]),_:1})}const V=Ze(je,[["render",va]]);je.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const Ba={title:"Foundation/Switch",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},T=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Switch v-bind="args" v-model:value="args.value" />
</v-container>
`,D={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},$={args:{args:{editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},N={args:{args:{label:"Switch label",value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},O={args:{args:{label:"Switch label",editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},A={args:{args:{label:"Switch label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},L={args:{args:{label:"Switch label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})};var re,ue,ie;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    args: {
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Switch
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(ie=(ue=D.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var ce,de,me;$.parameters={...$.parameters,docs:{...(ce=$.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    args: {
      editable: false,
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Switch
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(me=(de=$.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var fe,ve,pe;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Switch label",
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Switch
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(pe=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:pe.source}}};var ge,be,ye;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Switch label",
      editable: false,
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Switch
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(ye=(be=O.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var Se,he,Ce;A.parameters={...A.parameters,docs:{...(Se=A.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Switch label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Switch
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(Ce=(he=A.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var Ve,ke,we;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    args: {
      label: "Switch label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      editable: false,
      value: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      Switch
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template
  })
}`,...(we=(ke=L.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};const Fa=["Solo","SoloNotEditable","Label","LabelNotEditable","Description","DescriptionNotEditable"];export{A as Description,L as DescriptionNotEditable,N as Label,O as LabelNotEditable,D as Solo,$ as SoloNotEditable,Fa as __namedExportsOrder,Ba as default};
