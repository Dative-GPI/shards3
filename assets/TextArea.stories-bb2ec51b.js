import{e as g,d as V,s as pe,l as ve,o as ge,w as q,m as be,A as s,B as z,F as O,C as Y,D as xe,a7 as ye,n as D,j as he,I as we,J,K as Q,L as M,Y as Fe,Z as Se,W as Ve,Q as qe,R as Ce,N as Te}from"./vue.esm-bundler-01006032.js";import{m as Re,f as $e,V as ke,a as Ae,F as ze}from"./VField-f1a9daf9.js";import{u as Be}from"./useRules-54978858.js";import{u as Ge}from"./css-279a0029.js";import{u as Pe,C as $}from"./useColors-13ed6ee6.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{F as He}from"./FSButton-be94d44f.js";import{m as Ne,u as Oe,V as W}from"./VInput-50bb839f.js";import{f as De}from"./forwardRefs-e658ad70.js";import{u as Me}from"./proxiedModel-69023448.js";import{I as Ue}from"./index-4a977ff0.js";import{p as Ee,l as je,n as Ke,c as Le,a as Ye}from"./theme-a26d2375.js";import{g as Je,u as Qe}from"./useRender-4bcbb6ac.js";import{F as We}from"./FSForm-836a750d.js";import{_ as re}from"./FSCol-c97fad61.js";import{_ as Ze}from"./FSRow-83e75060.js";import{T as Xe}from"./rules-2181b330.js";import"./FSSpan-6e79caf3.js";import"./useSlots-e0d7ab7c.js";import"./VSpacer-78b81ef3.js";import"./index-491d6eb9.js";import"./transition-9c7eb302.js";import"./VLabel-f27c70ae.js";import"./color-8c62b342.js";import"./tag-1f5f74bd.js";import"./loader-878147ed.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./locale-903ef8d8.js";import"./anchor-1cd9d9ab.js";import"./rounded-9001edc0.js";import"./VDefaultsProvider-d99c6ff5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-a0c1e9ef.js";import"./FSCard-8fcd8e1e.js";import"./FSIcon-15b738c8.js";import"./density-d09a1492.js";import"./dimensions-4232d0fa.js";import"./useAppTimeZone-08db9497.js";import"./useTranslations-e38f43a5.js";const _e=Ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ne(),...Re()},"VTextarea"),ea=Je()({name:"VTextarea",directives:{Intersect:Ue},inheritAttrs:!1,props:_e(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:b,emit:F,slots:o}=r;const t=Me(e,"modelValue"),{isFocused:d,focus:n,blur:v}=Oe(e),S=g(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),B=g(()=>{if(b.maxlength)return b.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function G(a,u){var l,c;!e.autofocus||!a||(c=(l=u[0].target)==null?void 0:l.focus)==null||c.call(l)}const i=V(),m=V(),x=pe(""),y=V(),oe=g(()=>e.persistentPlaceholder||d.value||e.active);function P(){var a;y.value!==document.activeElement&&((a=y.value)==null||a.focus()),d.value||n()}function se(a){P(),F("click:control",a)}function ne(a){F("mousedown:control",a)}function ue(a){a.stopPropagation(),P(),D(()=>{t.value="",Ke(e["onClick:clear"],a)})}function ie(a){var l;const u=a.target;if(t.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const c=[u.selectionStart,u.selectionEnd];D(()=>{u.selectionStart=c[0],u.selectionEnd=c[1]})}}const h=V(),C=V(+e.rows),I=g(()=>["plain","underlined"].includes(e.variant));ve(()=>{e.autoGrow||(C.value=+e.rows)});function w(){e.autoGrow&&D(()=>{if(!h.value||!m.value)return;const a=getComputedStyle(h.value),u=getComputedStyle(m.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),c=h.value.scrollHeight,T=parseFloat(a.lineHeight),H=Math.max(parseFloat(e.rows)*T+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),N=parseFloat(e.maxRows)*T+l||1/0,p=Ye(c??0,H,N);C.value=Math.floor((p-l)/T),x.value=Le(p)})}ge(w),q(t,w),q(()=>e.rows,w),q(()=>e.maxRows,w),q(()=>e.density,w);let f;return q(h,a=>{a?(f=new ResizeObserver(w),f.observe(h.value)):f==null||f.disconnect()}),be(()=>{f==null||f.disconnect()}),Qe(()=>{const a=!!(o.counter||e.counter||e.counterValue),u=!!(a||o.details),[l,c]=je(b),{modelValue:T,...H}=W.filterProps(e),N=$e(e);return s(W,z({ref:i,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":I.value},e.class],style:e.style},l,H,{centerAffix:C.value===1&&!I.value,focused:d.value}),{...o,default:p=>{let{id:R,isDisabled:E,isDirty:j,isReadonly:de,isValid:ce}=p;return s(ke,z({ref:m,style:{"--v-textarea-control-height":x.value},onClick:se,onMousedown:ne,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},N,{id:R.value,active:oe.value||j.value,centerAffix:C.value===1&&!I.value,dirty:j.value||e.dirty,disabled:E.value,focused:d.value,error:ce.value===!1}),{...o,default:me=>{let{props:{class:K,...L}}=me;return s(O,null,[e.prefix&&s("span",{class:"v-text-field__prefix"},[e.prefix]),Y(s("textarea",z({ref:y,class:K,value:t.value,onInput:ie,autofocus:e.autofocus,readonly:de.value,disabled:E.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:P,onBlur:v},L,c),null),[[xe("intersect"),{handler:G},null,{once:!0}]]),e.autoGrow&&Y(s("textarea",{class:[K,"v-textarea__sizer"],id:`${L.id}-sizer`,"onUpdate:modelValue":fe=>t.value=fe,ref:h,readonly:!0,"aria-hidden":"true"},null),[[ye,t.value]]),e.suffix&&s("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var R;return s(O,null,[(R=o.details)==null?void 0:R.call(o,p),a&&s(O,null,[s("span",null,null),s(Ae,{active:e.persistentCounter||d.value,value:S.value,max:B.value,disabled:e.disabled},o.counter)])])}:void 0})}),De({},i,m,y)}}),le=he({name:"FSTextArea",components:{FSBaseField:ze},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:r,blurred:b,getMessages:F}=Be(),{isMobileSized:o}=Ge(),{getColors:t}=Pe(),d=t($.Error),n=t($.Light),v=t($.Dark),S=g(()=>{let i,m;if(!e.autoGrow){const x=o.value?30:34,y=o.value?16:20;m=`${x}px`,e.rows>1?i=`${x+(e.rows-1)*y}px`:i=`${x}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":n.dark,"--fs-text-area-color":v.base,"--fs-text-area-active-border-color":v.dark,"--fs-text-area-error-border-color":d.base,"--fs-text-area-min-height":m,"--fs-text-area-height":i}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":n.base,"--fs-text-area-color":n.dark,"--fs-text-area-active-border-color":n.base,"--fs-text-area-min-height":m,"--fs-text-area-height":i}}),B=g(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),G=g(()=>e.messages??F(e.modelValue,e.rules));return{validateOn:r,ColorEnum:$,messages:G,blurred:b,classes:B,style:S}}});function aa(e,r,b,F,o,t){const d=we("FSBaseField");return J(),Q(d,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:M(()=>[s(ea,z({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,hideDetails:!0,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[1]||(r[1]=n=>e.$emit("update:modelValue",n)),onBlur:r[2]||(r[2]=n=>e.blurred=!0)},e.$attrs),Fe({clear:M(()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(J(),Q(He,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:r[0]||(r[0]=n=>e.$emit("update:modelValue",null))},null,8,["color"])):Te("",!0)]),_:2},[Se(e.$slots,(n,v)=>({name:v,fn:M(S=>[Ve(e.$slots,v,qe(Ce(S)))])}))]),1040,["style","class","rows","noResize","autoGrow","readonly","clearable","rules","validateOn","modelValue"])]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const U=Ie(le,[["render",aa]]);le.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const ja={title:"Foundation/Shared/Input fields/TextArea",component:U,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},k={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:r})=>({components:{FSTextArea:U,FSCol:re},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},A={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Xe}},render:(e,{argTypes:r})=>({components:{FSForm:We,FSTextArea:U,FSCol:re,FSRow:Ze},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSForm>`})};var Z,X,_;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(_=(X=k.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var ee,ae,te;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Ka=["Variations","Rules"];export{A as Rules,k as Variations,Ka as __namedExportsOrder,ja as default};