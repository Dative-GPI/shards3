import{g as Re,t as Ee,f as u,O as Ue,P as Ge,z as m,l as o,s as Z,C as Fe,x as P,Q as ze,R as Me,I as Ie,e as He,S as Qe,o as M,j as H,k as D,q as ee,n as ae,m as le,p as te,u as ne}from"./vue.esm-bundler-c3efb794.js";import{C as oe,u as Q,p as E,e as se,d as Je,f as Pe,o as Ke,g as W,z as X,c as We,j as Y,A as $e,V as qe,B as J,t as Xe,y as Ye,D as Ze}from"./VIcon-c46aeaeb.js";import{S as K}from"./FSSpan-d98aa7bb.js";import{R as je}from"./FSRow-531aa6d1.js";import{C as De}from"./FSCol-6013107c.js";import{_ as ea}from"./_plugin-vue_export-helper-c27b6911.js";import{a as aa}from"./index-f39a8f63.js";import{V as la,m as ta,u as na,a as re}from"./VInput-53fffe8c.js";import{m as oa,u as sa}from"./rounded-c9feffd5.js";import{b as R,c as ra,L as ua}from"./loader-5b2fe5c8.js";import{R as ia,V as ca}from"./index-03576ef1.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const Ae=Re({name:"FSSwitch",components:{FSSpan:K,FSRow:je,FSCol:De},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},value:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:oe.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["update:value"],setup(e,{emit:a}){const{value:r,color:l,editable:t}=Ee(e),i=Q().getBackground(),c=Q().getVariants(l.value),n=Q().getVariants(oe.Dark),s=u(()=>({"--fs-switch-cursor":t.value?"pointer":"default","--fs-switch-translate-x":r.value?"8px":"-8px","--fs-switch-base-color":r.value?c.base:t.value?n.base:n.light,"--fs-switch-base-text":t.value?n.base:n.light,"--fs-switch-base-background":i.base})),b=u(()=>r.value?"text-button":"text-body");return{editable:t,style:s,font:b,onToggle:()=>{t.value&&a("update:value",!r.value)}}}});const Oe=Symbol.for("vuetify:selection-control-group"),xe=E({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:se,trueIcon:se,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Je},...Pe(),...oa(),...Ke()},"SelectionControlGroup"),da=E({...xe({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");W()({name:"VSelectionControlGroup",props:da(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:r}=a;const l=R(e,"modelValue"),t=X(),i=u(()=>e.id||`v-selection-control-group-${t}`),c=u(()=>e.name||i.value),n=new Set;return Ue(Oe,{modelValue:l,forceUpdate:()=>{n.forEach(s=>s())},onForceUpdate:s=>{n.add(s),Ge(()=>{n.delete(s)})}}),We({[e.defaultsTarget]:{color:m(e,"color"),disabled:m(e,"disabled"),density:m(e,"density"),error:m(e,"error"),inline:m(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:m(e,"falseIcon"),trueIcon:m(e,"trueIcon"),readonly:m(e,"readonly"),ripple:m(e,"ripple"),type:m(e,"type"),valueComparator:m(e,"valueComparator")}}),Y(()=>{var s;return o("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(s=r.default)==null?void 0:s.call(r)])}),{}}});const Ne=E({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...Pe(),...xe()},"VSelectionControl");function ma(e){const a=He(Oe,void 0),{densityClasses:r}=sa(e),l=R(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=u(()=>e.falseValue!==void 0?e.falseValue:!1),c=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),n=u({get(){const p=a?a.modelValue.value:l.value;return c.value?J(p).some(d=>e.valueComparator(d,t.value)):e.valueComparator(p,t.value)},set(p){if(e.readonly)return;const d=p?t.value:i.value;let f=d;c.value&&(f=p?[...J(l.value),d]:J(l.value).filter(v=>!e.valueComparator(v,t.value))),a?a.modelValue.value=f:l.value=f}}),{textColorClasses:s,textColorStyles:b}=Xe(u(()=>{if(!(e.error||e.disabled))return n.value?e.color:e.baseColor})),{backgroundColorClasses:y,backgroundColorStyles:k}=Ye(u(()=>n.value&&!e.error&&!e.disabled?e.color:void 0)),B=u(()=>n.value?e.trueIcon:e.falseIcon);return{group:a,densityClasses:r,trueValue:t,falseValue:i,model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,icon:B}}const ue=W()({name:"VSelectionControl",directives:{Ripple:ia},inheritAttrs:!1,props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:r,slots:l}=a;const{group:t,densityClasses:i,icon:c,model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,trueValue:B}=ma(e),p=X(),d=u(()=>e.id||`input-${p}`),f=Z(!1),v=Z(!1),g=Fe();t==null||t.onForceUpdate(()=>{g.value&&(g.value.checked=n.value)});function C(S){f.value=!0,Ze(S.target,":focus-visible")!==!1&&(v.value=!0)}function $(){f.value=!1,v.value=!1}function F(S){e.readonly&&t&&Qe(()=>t.forceUpdate()),n.value=S.target.checked}return Y(()=>{var j,h;const S=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[U,G]=$e(r),q=o("input",P({ref:g,checked:n.value,disabled:!!(e.readonly||e.disabled),id:d.value,onBlur:$,onFocus:C,onInput:F,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:B.value,name:e.name,"aria-checked":e.type==="checkbox"?n.value:void 0},G),null);return o("div",P({class:["v-selection-control",{"v-selection-control--dirty":n.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":f.value,"v-selection-control--focus-visible":v.value,"v-selection-control--inline":e.inline},i.value,e.class]},U,{style:e.style}),[o("div",{class:["v-selection-control__wrapper",s.value],style:b.value},[(j=l.default)==null?void 0:j.call(l,{backgroundColorClasses:y,backgroundColorStyles:k}),ze(o("div",{class:["v-selection-control__input"]},[((h=l.input)==null?void 0:h.call(l,{model:n,textColorClasses:s,textColorStyles:b,backgroundColorClasses:y,backgroundColorStyles:k,inputNode:q,icon:c.value,props:{onFocus:C,onBlur:$,id:d.value}}))??o(Ie,null,[c.value&&o(qe,{key:"icon",icon:c.value},null),q])]),[[Me("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),S&&o(la,{for:d.value,clickable:!0,onClick:I=>I.stopPropagation()},{default:()=>[S]})])}),{isFocused:f,input:g}}}),fa=E({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ta(),...Ne()},"VSwitch"),va=W()({name:"VSwitch",inheritAttrs:!1,props:fa(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{attrs:r,slots:l}=a;const t=R(e,"indeterminate"),i=R(e,"modelValue"),{loaderClasses:c}=ra(e),{isFocused:n,focus:s,blur:b}=na(e),y=Fe(),k=u(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),B=X(),p=u(()=>e.id||`switch-${B}`);function d(){t.value&&(t.value=!1)}function f(v){var g,C;v.stopPropagation(),v.preventDefault(),(C=(g=y.value)==null?void 0:g.input)==null||C.click()}return Y(()=>{const[v,g]=$e(r),C=re.filterProps(e),$=ue.filterProps(e);return o(re,P({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":t.value},c.value,e.class]},v,C,{modelValue:i.value,"onUpdate:modelValue":F=>i.value=F,id:p.value,focused:n.value,style:e.style}),{...l,default:F=>{let{id:S,messagesId:U,isDisabled:G,isReadonly:q,isValid:j}=F;return o(ue,P({ref:y},$,{modelValue:i.value,"onUpdate:modelValue":[h=>i.value=h,d],id:S.value,"aria-describedby":U.value,type:"checkbox","aria-checked":t.value?"mixed":void 0,disabled:G.value,readonly:q.value,onFocus:s,onBlur:b},g),{...l,default:h=>{let{backgroundColorClasses:I,backgroundColorStyles:w}=h;return o("div",{class:["v-switch__track",...I.value],style:w.value,onClick:f},null)},input:h=>{let{inputNode:I,icon:w,backgroundColorClasses:_e,backgroundColorStyles:Le}=h;return o(Ie,null,[I,o("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":w||e.loading},e.inset?void 0:_e.value],style:e.inset?void 0:Le.value},[o(aa,null,{default:()=>[e.loading?o(ua,{name:"v-switch",active:!0,color:j.value===!1?void 0:k.value},{default:z=>l.loader?l.loader(z):o(ca,{active:z.isActive,color:z.color,indeterminate:!0,size:"16",width:"2"},null)}):w&&o(qe,{key:w,icon:w,size:"x-small"},null)]})])])}})}})}),{}}});function pa(e,a,r,l,t,i){return M(),H(De,{width:"hug"},{default:D(()=>[o(je,{width:"hug",align:"center-left"},{default:D(()=>[o(va,P({class:"fs-switch","hide-details":"",inset:"",style:e.style,ripple:!1,modelValue:e.$props.value,"onUpdate:modelValue":e.onToggle},e.$attrs),null,16,["style","modelValue","onUpdate:modelValue"]),ee(e.$slots,"default",{},()=>[e.$props.label?(M(),H(K,{key:0,class:"fs-switch-label",style:ae(e.style),font:e.font,onClick:e.onToggle},{default:D(()=>[le(te(e.$props.label),1)]),_:1},8,["style","font","onClick"])):ne("",!0)])]),_:3}),ee(e.$slots,"description",{},()=>[e.$props.description?(M(),H(K,{key:0,class:"fs-switch-description",font:"text-underline",style:ae(e.style)},{default:D(()=>[le(te(e.$props.description),1)]),_:1},8,["style"])):ne("",!0)])]),_:3})}const V=ea(Ae,[["render",pa]]);Ae.__docgenInfo={displayName:"FSSwitch",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"value",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value"}],slots:[{name:"default"},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSwitch.vue"]};const Pa={title:"Foundation/Shared/Switch",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},T=`
<v-container fluid class="pa-0 ma-0" style="display: flex;">
  <Switch v-bind="args" v-model:value="args.value" />
</v-container>
`,A={args:{args:{value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},O={args:{args:{editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},x={args:{args:{label:"Switch label",value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},N={args:{args:{label:"Switch label",editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},_={args:{args:{label:"Switch label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})},L={args:{args:{label:"Switch label",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",editable:!1,value:!1}},render:(e,{argTypes:a})=>({components:{Switch:V},props:Object.keys(a),setup(){return{...e}},template:T})};var ie,ce,de;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,fe,ve;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var pe,ge,be;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(be=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ye,Se,he;N.parameters={...N.parameters,docs:{...(ye=N.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(he=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:he.source}}};var Ce,Ve,ke;_.parameters={..._.parameters,docs:{...(Ce=_.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(ke=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var we,Te,Be;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};const $a=["Solo","SoloNotEditable","Label","LabelNotEditable","Description","DescriptionNotEditable"];export{_ as Description,L as DescriptionNotEditable,x as Label,N as LabelNotEditable,A as Solo,O as SoloNotEditable,$a as __namedExportsOrder,Pa as default};
