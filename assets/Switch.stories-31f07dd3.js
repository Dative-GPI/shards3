import{g as Ne,t as Oe,f as u,N as Le,O as Re,A as m,m as o,s as Z,C as Te,y as I,P as Ee,Q as Ue,F as Be,e as Ge,R as ze,j as ee,o as M,k as H,l as D,n as ae,p as le,q as te,u as ne}from"./vue.esm-bundler-66d46254.js";import{C as Me,u as Q}from"./useColors-c3e7013c.js";import{_ as K,F as He,p as E,f as oe,d as Qe,i as _e,o as Je,g as W,A as X,c as Ke,u as Y,B as Ie,V as Pe,C as J,t as We,y as Xe,D as Ye,b as Ze}from"./FSRow-c0589bf9.js";import{F as ea}from"./FSCol-b1d44a51.js";import{a as aa}from"./index-2557a64d.js";import{V as la,m as ta,u as na,a as se}from"./VLabel-0aba8e74.js";import{m as oa,u as sa}from"./rounded-249030ea.js";import{b as R,c as ra,L as ua}from"./loader-72eca065.js";import{R as ia,V as ca}from"./index-26618c09.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";const qe=Ne({name:"FSSwitch",components:{FSSpan:K,FSRow:He,FSCol:ea},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:Me.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:r,color:l,editable:t}=Oe(e),i=Q().getVariants(l.value),c=Q().getBackground(),n=Q().getDark(),s=u(()=>({"--fs-switch-cursor":t.value?"pointer":"default","--fs-switch-translate-x":r.value?"8px":"-8px","--fs-switch-base-color":r.value?i.base:t.value?n.base:n.light,"--fs-switch-base-text":t.value?n.base:n.light,"--fs-switch-base-background":c.base})),b=u(()=>r.value?"text-button":"text-body");return{editable:t,style:s,font:b,onToggle:()=>{t.value&&a("update:value",!r.value)}}}});const Ae=Symbol.for("vuetify:selection-control-group"),De=E({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:oe,trueIcon:oe,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Qe},..._e(),...oa(),...Je()},"SelectionControlGroup"),da=E({...De({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");W()({name:"VSelectionControlGroup",props:da(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:r}=a;const l=R(e,"modelValue"),t=X(),i=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||i.value),n=new Set;return Le(Ae,{modelValue:l,forceUpdate:()=>{n.forEach(s=>s())},onForceUpdate:s=>{n.add(s),Re(()=>{n.delete(s)})}}),Ke({[e.defaultsTarget]:{color:m(e,"color"),disabled:m(e,"disabled"),density:m(e,"density"),error:m(e,"error"),inline:m(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:m(e,"falseIcon"),trueIcon:m(e,"trueIcon"),readonly:m(e,"readonly"),ripple:m(e,"ripple"),type:m(e,"type"),valueComparator:m(e,"valueComparator")}}),Y(()=>{var s;return o("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(s=r.default)==null?void 0:s.call(r)])}),{}}});const $e=E({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,..._e(),...De()},"VSelectionControl");function ma(e){const a=Ge(Ae,void 0),{densityClasses:r}=sa(e),l=R(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),n=u({get(){const p=a?a.modelValue.value:l.value;return c.value?J(p).some(d=>e.valueComparator(d,t.value)):e.valueComparator(p,t.value)},set(p){if(e.readonly)return;const d=p?t.value:i.value;let f=d;c.value&&(f=p?[...J(l.value),d]:J(l.value).filter(v=>!e.valueComparator(v,t.value))),a?a.modelValue.value=f:l.value=f}}),{textColorClasses:s,textColorStyles:b}=We(u(()=>{if(!(e.error||e.disabled))return n.value?e.color:e.baseColor})),{backgroundColorClasses:y,backgroundColorStyles:k}=Xe(u(()=>n.value&&!e.error&&!e.disabled?e.color:void 0)),T=u(()=>n.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:r,trueValue:t,falseValue:i,model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,icon:T}}const re=W()({name:"VSelectionControl",directives:{Ripple:ia},inheritAttrs:!1,props:$e(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:r,slots:l}=a;const{group:t,densityClasses:i,icon:c,model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,trueValue:T}=ma(e),p=X(),d=u(()=>e.id||`input-${p}`),f=Z(!1),v=Z(!1),g=Te();t==null||t.onForceUpdate(()=>{g.value&&(g.value.checked=n.value)});function C(S){f.value=!0,Ye(S.target,":focus-visible")!==!1&&(v.value=!0)}function P(){f.value=!1,v.value=!1}function B(S){e.readonly&&t&&ze(()=>t.forceUpdate()),n.value=S.target.checked}return Y(()=>{var A,h;const S=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[U,G]=Ie(r),q=o("input",I({ref:g,checked:n.value,disabled:!!(e.readonly||e.disabled),id:d.value,onBlur:P,onFocus:C,onInput:B,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:T.value,name:e.name,"aria-checked":e.type==="checkbox"?n.value:void 0},G),null);return o("div",I({class:["v-selection-control",{"v-selection-control--dirty":n.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":v.value,"v-selection-control--inline":e.inline},i.value,e.class]},U,{style:e.style}),[o("div",{class:["v-selection-control__wrapper",s.value],style:b.value},[(A=l.default)==null?void 0:A.call(l,{backgroundColorClasses:y,backgroundColorStyles:k}),Ee(o("div",{class:["v-selection-control__input"]},[((h=l.input)==null?void 0:h.call(l,{model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,inputNode:q,icon:c.value,props:{onFocus:C,onBlur:P,id:d.value}}))??o(Be,null,[c.value&&o(Pe,{key:"icon",icon:c.value},null),q])]),[[Ue("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),S&&o(la,{for:d.value,clickable:!0,onClick:_=>_.stopPropagation()},{default:()=>[S]})])}),{isFocused:f,input:g}}}),fa=E({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ta(),...$e()},"VSwitch"),va=W()({name:"VSwitch",inheritAttrs:!1,props:fa(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{attrs:r,slots:l}=a;const t=R(e,"indeterminate"),i=R(e,"modelValue"),{loaderClasses:c}=ra(e),{isFocused:n,focus:s,blur:b}=na(e),y=Te(),k=u(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),T=X(),p=u(()=>e.id||`switch-${T}`);function d(){t.value&&(t.value=!1)}function f(v){var g,C;v.stopPropagation(),v.preventDefault(),(C=(g=y.value)==null?void 0:g.input)==null||C.click()}return Y(()=>{const[v,g]=Ie(r),C=se.filterProps(e),P=re.filterProps(e);return o(se,I({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":t.value},c.value,e.class]},v,C,{modelValue:i.value,"onUpdate:modelValue":B=>i.value=B,id:p.value,focused:n.value,style:e.style}),{...l,default:B=>{let{id:S,messagesId:U,isDisabled:G,isReadonly:q,isValid:A}=B;return o(re,I({ref:y},P,{modelValue:i.value,"onUpdate:modelValue":[h=>i.value=h,d],id:S.value,"aria-describedby":U.value,type:"checkbox","aria-checked":t.value?"mixed":void 0,disabled:G.value,readonly:q.value,onFocus:s,onBlur:b},g),{...l,default:h=>{let{backgroundColorClasses:_,backgroundColorStyles:w}=h;return o("div",{class:["v-switch__track",..._.value],style:w.value,onClick:f},null)},input:h=>{let{inputNode:_,icon:w,backgroundColorClasses:je,backgroundColorStyles:xe}=h;return o(Be,null,[_,o("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":w||e.loading},e.inset?void 0:je.value],style:e.inset?void 0:xe.value},[o(aa,null,{default:()=>[e.loading?o(ua,{name:"v-switch",active:!0,color:A.value===!1?void 0:k.value},{default:z=>l.loader?l.loader(z):o(ca,{active:z.isActive,color:z.color,indeterminate:!0,size:"16",width:"2"},null)}):w&&o(Pe,{key:w,icon:w,size:"x-small"},null)]})])])}})}})}),{}}});function pa(e,a,r,l,t,i){const c=ee("FSRow"),n=ee("FSCol");return M(),H(n,{width:"hug",height:"hug"},{default:D(()=>[o(c,{width:"hug",height:"hug"},{default:D(()=>[o(va,I({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.value,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),e.$props.label?(M(),H(K,{key:0,class:"fs-switch-label",style:ae(e.style),font:e.font,onClick:e.onToggle},{default:D(()=>[le(te(e.$props.label),1)]),_:1},8,["style","font","onClick"])):ne("",!0)]),_:1}),e.$props.description?(M(),H(K,{key:0,class:"fs-switch-description",font:"text-overline",style:ae(e.style)},{default:D(()=>[le(te(e.$props.description),1)]),_:1},8,["style"])):ne("",!0)]),_:1})}const V=Ze(qe,[["render",pa]]);qe.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const Ba={title:"Foundation/Switch",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},F=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Switch v-bind="args" v-model:value="args.value" />
</v-container>
`,$={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:F})},j={args:{args:{editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:F})},x={args:{args:{label:"Switch label",value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:F})},N={args:{args:{label:"Switch label",editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:F})},O={args:{args:{label:"Switch label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:F})},L={args:{args:{label:"Switch label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:F})};var ue,ie,ce;$.parameters={...$.parameters,docs:{...(ue=$.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ce=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,me,fe;j.parameters={...j.parameters,docs:{...(de=j.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(fe=(me=j.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ve,pe,ge;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ge=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var be,ye,Se;N.parameters={...N.parameters,docs:{...(be=N.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var he,Ce,Ve;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ve=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ve.source}}};var ke,we,Fe;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Fe=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};const _a=["Solo","SoloNotEditable","Label","LabelNotEditable","Description","DescriptionNotEditable"];export{O as Description,L as DescriptionNotEditable,x as Label,N as LabelNotEditable,$ as Solo,j as SoloNotEditable,_a as __namedExportsOrder,Ba as default};
