import{e as g,d as V,s as he,g as Fe,o as Se,w as C,k as Ve,z as r,A as N,F as L,B as re,C as Ce,a3 as Te,v as Y,G as qe,I as T,J as q,K as v,M as _,S as G,N as P,O as J,L as R,V as Re,W as ke,P as Ae,Q as $e}from"./vue.esm-bundler-588e96c7.js";import{_ as k}from"./FSSpan-3793c562.js";import{_ as H}from"./FSCol-07ad80b8.js";import{_ as W}from"./FSRow-e442cab6.js";import{m as ze,f as Ge,V as Pe,a as Ie,u as Be}from"./VField-98fe1be9.js";import{u as Ne}from"./useBreakpoints-952345a0.js";import{u as He,C as Q}from"./useColors-0a17cef8.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Me}from"./VSpacer-18a01036.js";import{m as De,u as Ue,V as le}from"./VInput-4a9e0385.js";import{f as Ee}from"./forwardRefs-e658ad70.js";import{u as je}from"./locale-56b7257e.js";import{I as Ke}from"./index-c8d171e2.js";import{p as Le,i as Ye,j as _e,c as Je,A as Qe}from"./theme-6917f69d.js";import{g as We,u as Xe}from"./color-56e2ae46.js";import{T as Ze,F as ea}from"./FSForm-48ceba41.js";import"./useSlots-553f4fbf.js";import"./css-50f0aa1d.js";import"./index-5292658a.js";import"./transition-28907f24.js";import"./VIcon-56fbcc42.js";import"./loader-b5f87c49.js";import"./rounded-ef9fdb42.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./density-79e1d57e.js";import"./useTimeZone-b2704403.js";import"./useTranslations-d310d0e5.js";const aa=Le({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...De(),...ze()},"VTextarea"),ta=We()({name:"VTextarea",directives:{Intersect:Ke},inheritAttrs:!1,props:aa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:y,emit:S,slots:o}=s;const t=je(e,"modelValue"),{isFocused:n,focus:d,blur:b}=Ue(e),O=g(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),M=g(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function D(a,u){var l,f;!e.autofocus||!a||(f=(l=u[0].target)==null?void 0:l.focus)==null||f.call(l)}const i=V(),c=V(),x=he(""),w=V(),ce=g(()=>e.persistentPlaceholder||n.value||e.active);function U(){var a;w.value!==document.activeElement&&((a=w.value)==null||a.focus()),n.value||d()}function me(a){U(),S("click:control",a)}function pe(a){S("mousedown:control",a)}function ve(a){a.stopPropagation(),U(),Y(()=>{t.value="",_e(e["onClick:clear"],a)})}function ge(a){var l;const u=a.target;if(t.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const f=[u.selectionStart,u.selectionEnd];Y(()=>{u.selectionStart=f[0],u.selectionEnd=f[1]})}}const h=V(),A=V(+e.rows),E=g(()=>["plain","underlined"].includes(e.variant));Fe(()=>{e.autoGrow||(A.value=+e.rows)});function F(){e.autoGrow&&Y(()=>{if(!h.value||!c.value)return;const a=getComputedStyle(h.value),u=getComputedStyle(c.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),f=h.value.scrollHeight,$=parseFloat(a.lineHeight),j=Math.max(parseFloat(e.rows)*$+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),K=parseFloat(e.maxRows)*$+l||1/0,p=Qe(f??0,j,K);A.value=Math.floor((p-l)/$),x.value=Je(p)})}Se(F),C(t,F),C(()=>e.rows,F),C(()=>e.maxRows,F),C(()=>e.density,F);let m;return C(h,a=>{a?(m=new ResizeObserver(F),m.observe(h.value)):m==null||m.disconnect()}),Ve(()=>{m==null||m.disconnect()}),Xe(()=>{const a=!!(o.counter||e.counter||e.counterValue),u=!!(a||o.details),[l,f]=Ye(y),{modelValue:$,...j}=le.filterProps(e),K=Ge(e);return r(le,N({ref:i,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":E.value},e.class],style:e.style},l,j,{centerAffix:A.value===1&&!E.value,focused:n.value}),{...o,default:p=>{let{id:z,isDisabled:Z,isDirty:ee,isReadonly:ye,isValid:be}=p;return r(Pe,N({ref:c,style:{"--v-textarea-control-height":x.value},onClick:me,onMousedown:pe,"onClick:clear":ve,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},K,{id:z.value,active:ce.value||ee.value,centerAffix:A.value===1&&!E.value,dirty:ee.value||e.dirty,disabled:Z.value,focused:n.value,error:be.value===!1}),{...o,default:xe=>{let{props:{class:ae,...te}}=xe;return r(L,null,[e.prefix&&r("span",{class:"v-text-field__prefix"},[e.prefix]),re(r("textarea",N({ref:w,class:ae,value:t.value,onInput:ge,autofocus:e.autofocus,readonly:ye.value,disabled:Z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:U,onBlur:b},te,f),null),[[Ce("intersect"),{handler:D},null,{once:!0}]]),e.autoGrow&&re(r("textarea",{class:[ae,"v-textarea__sizer"],id:`${te.id}-sizer`,"onUpdate:modelValue":we=>t.value=we,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Te,t.value]]),e.suffix&&r("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var z;return r(L,null,[(z=o.details)==null?void 0:z.call(o,p),a&&r(L,null,[r("span",null,null),r(Ie,{active:e.persistentCounter||n.value,value:O.value,max:M.value},o.counter)])])}:void 0})}),Ee({},i,c,w)}}),fe=qe({name:"FSTextArea",components:{FSSpan:k,FSCol:H,FSRow:W},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:s,blurred:y,getMessages:S}=Be(),{isMobileSized:o}=Ne(),{getColors:t}=He(),n=t(Q.Error),d=t(Q.Light),b=t(Q.Dark),O=g(()=>{let i,c;if(!e.autoGrow){const x=o.value?30:42,w=o.value?16:20;c=`${x}px`,e.rows>1?i=`${x+(e.rows-1)*w}px`:i=`${x}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":d.dark,"--fs-text-area-color":b.base,"--fs-text-area-active-border-color":b.dark,"--fs-text-area-error-color":n.base,"--fs-text-area-error-border-color":n.base,"--fs-text-area-min-height":c,"--fs-text-area-height":i}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":d.base,"--fs-text-area-color":d.dark,"--fs-text-area-active-border-color":d.base,"--fs-text-area-min-height":c,"--fs-text-area-height":i}}),M=g(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),D=g(()=>e.messages??S(e.modelValue,e.rules));return{validateOn:s,messages:D,blurred:y,style:O,classes:M}}});function ra(e,s,y,S,o,t){return T(),q(H,null,{default:v(()=>[e.$props.hideHeader?R("",!0):_(e.$slots,"label",{key:0},()=>[r(W,{wrap:!1},{default:v(()=>[e.$props.label?(T(),q(k,{key:0,class:"fs-text-area-label",font:"text-overline",style:G(e.style)},{default:v(()=>[P(J(e.$props.label),1)]),_:1},8,["style"])):R("",!0),e.$props.label&&e.$props.required?(T(),q(k,{key:1,class:"fs-text-area-label",style:G([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:v(()=>[P(" * ")]),_:1},8,["style"])):R("",!0),r(Me,{style:{"min-width":"40px"}}),e.messages.length>0?(T(),q(k,{key:2,class:"fs-text-area-messages",font:"text-overline",style:G(e.style)},{default:v(()=>[P(J(e.messages.join(", ")),1)]),_:1},8,["style"])):R("",!0)]),_:1})]),r(ta,N({clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,rows:e.$props.rows,hideDetails:!0,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[0]||(s[0]=n=>e.$emit("update:modelValue",n)),onBlur:s[1]||(s[1]=n=>e.blurred=!0)},e.$attrs),Re({_:2},[ke(e.$slots,(n,d)=>({name:d,fn:v(b=>[_(e.$slots,d,Ae($e(b)))])}))]),1040,["style","class","rows","noResize","autoGrow","readonly","clearable","rules","validateOn","modelValue"]),_(e.$slots,"description",{},()=>[e.$props.description?(T(),q(k,{key:0,class:"fs-text-area-description",font:"text-underline",style:G(e.style)},{default:v(()=>[P(J(e.$props.description),1)]),_:1},8,["style"])):R("",!0)])]),_:3})}const X=Oe(fe,[["render",ra]]);fe.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const za={title:"Foundation/Shared/Input fields/TextArea",component:X,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:s})=>({components:{FSTextArea:X,FSCol:H},props:Object.keys(s),setup(){return{...e}},template:`
    <FSCol>
      <FSTextArea
        label="Text, auto grow (does not allow to set a base height)"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows, non resizeable"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Required text, 2 rows, resizeable"
        description="Description for this field"
        :autoGrow="false"
        :resize="true"
        :rows="2"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row, resizeable"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :resize="true"
        :rows="1"
        v-model="args.value4"
      />
    </FSCol>`})},B={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Ze}},render:(e,{argTypes:s})=>({components:{FSForm:ea,FSTextArea:X,FSCol:H,FSRow:W},props:Object.keys(s),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var se,oe,ne;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: null,
      value4: "General Kenobi\\r\\nYou are a bold one!"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextArea,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTextArea
        label="Text, auto grow (does not allow to set a base height)"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows, non resizeable"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Required text, 2 rows, resizeable"
        description="Description for this field"
        :autoGrow="false"
        :resize="true"
        :rows="2"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row, resizeable"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :resize="true"
        :rows="1"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(ne=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ue,ie,de;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTextArea,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(de=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Ga=["Variations","Rules"];export{B as Rules,I as Variations,Ga as __namedExportsOrder,za as default};
