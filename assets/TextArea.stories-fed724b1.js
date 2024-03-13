import{j as g,d as V,s as he,l as Fe,o as Se,w as T,m as Ve,z as r,x as H,F as L,A as re,B as Te,a4 as qe,n as Y,g as Ce,I as q,J as C,K as v,P as _,S as P,L as G,M as J,N as R,W as Re,X as ke,Q as $e,R as Ae}from"./vue.esm-bundler-72feb788.js";import{_ as k}from"./FSSpan-0b48c446.js";import{_ as N}from"./FSCol-df85c70b.js";import{_ as W}from"./FSRow-ae483077.js";import{m as ze,f as Pe,V as Ge,a as Ie,u as Be}from"./VField-aa8d0612.js";import{u as He}from"./css-a2b3c3ca.js";import{u as Ne,C as Q}from"./useColors-1fcec14a.js";import{_ as Me}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Oe}from"./VSpacer-9ee9e868.js";import{m as De,u as Ue,V as le}from"./VInput-273bf99c.js";import{f as je}from"./forwardRefs-e658ad70.js";import{u as Ee}from"./locale-8250cc46.js";import{I as Ke}from"./index-348a046d.js";import{p as Le,j as Ye,k as _e,e as Je,H as Qe}from"./theme-1fe57d71.js";import{g as We,u as Xe}from"./useRender-c1d2bc01.js";import{T as Ze,F as ea}from"./FSForm-2b9048db.js";import"./useSlots-a83038d8.js";import"./index-71844868.js";import"./transition-b3b454fb.js";import"./color-564bd659.js";import"./tag-39781742.js";import"./loader-d80eacaf.js";import"./rounded-1c8889d4.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VIcon-cb64ea3c.js";import"./density-9047996c.js";import"./useTimeZone-809ffb6f.js";import"./useTranslations-3d964ba1.js";const aa=Le({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...De(),...ze()},"VTextarea"),ta=We()({name:"VTextarea",directives:{Intersect:Ke},inheritAttrs:!1,props:aa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:y,emit:S,slots:o}=s;const t=Ee(e,"modelValue"),{isFocused:n,focus:d,blur:b}=Ue(e),M=g(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),O=g(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function D(a,u){var l,f;!e.autofocus||!a||(f=(l=u[0].target)==null?void 0:l.focus)==null||f.call(l)}const i=V(),c=V(),x=he(""),w=V(),ce=g(()=>e.persistentPlaceholder||n.value||e.active);function U(){var a;w.value!==document.activeElement&&((a=w.value)==null||a.focus()),n.value||d()}function me(a){U(),S("click:control",a)}function pe(a){S("mousedown:control",a)}function ve(a){a.stopPropagation(),U(),Y(()=>{t.value="",_e(e["onClick:clear"],a)})}function ge(a){var l;const u=a.target;if(t.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const f=[u.selectionStart,u.selectionEnd];Y(()=>{u.selectionStart=f[0],u.selectionEnd=f[1]})}}const h=V(),$=V(+e.rows),j=g(()=>["plain","underlined"].includes(e.variant));Fe(()=>{e.autoGrow||($.value=+e.rows)});function F(){e.autoGrow&&Y(()=>{if(!h.value||!c.value)return;const a=getComputedStyle(h.value),u=getComputedStyle(c.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),f=h.value.scrollHeight,A=parseFloat(a.lineHeight),E=Math.max(parseFloat(e.rows)*A+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),K=parseFloat(e.maxRows)*A+l||1/0,p=Qe(f??0,E,K);$.value=Math.floor((p-l)/A),x.value=Je(p)})}Se(F),T(t,F),T(()=>e.rows,F),T(()=>e.maxRows,F),T(()=>e.density,F);let m;return T(h,a=>{a?(m=new ResizeObserver(F),m.observe(h.value)):m==null||m.disconnect()}),Ve(()=>{m==null||m.disconnect()}),Xe(()=>{const a=!!(o.counter||e.counter||e.counterValue),u=!!(a||o.details),[l,f]=Ye(y),{modelValue:A,...E}=le.filterProps(e),K=Pe(e);return r(le,H({ref:i,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":j.value},e.class],style:e.style},l,E,{centerAffix:$.value===1&&!j.value,focused:n.value}),{...o,default:p=>{let{id:z,isDisabled:Z,isDirty:ee,isReadonly:ye,isValid:be}=p;return r(Ge,H({ref:c,style:{"--v-textarea-control-height":x.value},onClick:me,onMousedown:pe,"onClick:clear":ve,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},K,{id:z.value,active:ce.value||ee.value,centerAffix:$.value===1&&!j.value,dirty:ee.value||e.dirty,disabled:Z.value,focused:n.value,error:be.value===!1}),{...o,default:xe=>{let{props:{class:ae,...te}}=xe;return r(L,null,[e.prefix&&r("span",{class:"v-text-field__prefix"},[e.prefix]),re(r("textarea",H({ref:w,class:ae,value:t.value,onInput:ge,autofocus:e.autofocus,readonly:ye.value,disabled:Z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:U,onBlur:b},te,f),null),[[Te("intersect"),{handler:D},null,{once:!0}]]),e.autoGrow&&re(r("textarea",{class:[ae,"v-textarea__sizer"],id:`${te.id}-sizer`,"onUpdate:modelValue":we=>t.value=we,ref:h,readonly:!0,"aria-hidden":"true"},null),[[qe,t.value]]),e.suffix&&r("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var z;return r(L,null,[(z=o.details)==null?void 0:z.call(o,p),a&&r(L,null,[r("span",null,null),r(Ie,{active:e.persistentCounter||n.value,value:M.value,max:O.value},o.counter)])])}:void 0})}),je({},i,c,w)}}),fe=Ce({name:"FSTextArea",components:{FSSpan:k,FSCol:N,FSRow:W},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:s,blurred:y,getMessages:S}=Be(),{isMobileSized:o}=He(),{getColors:t}=Ne(),n=t(Q.Error),d=t(Q.Light),b=t(Q.Dark),M=g(()=>{let i,c;if(!e.autoGrow){const x=o.value?30:42,w=o.value?16:20;c=`${x}px`,e.rows>1?i=`${x+(e.rows-1)*w}px`:i=`${x}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":d.dark,"--fs-text-area-color":b.base,"--fs-text-area-active-border-color":b.dark,"--fs-text-area-error-color":n.base,"--fs-text-area-error-border-color":n.base,"--fs-text-area-min-height":c,"--fs-text-area-height":i}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":d.base,"--fs-text-area-color":d.dark,"--fs-text-area-active-border-color":d.base,"--fs-text-area-min-height":c,"--fs-text-area-height":i}}),O=g(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),D=g(()=>e.messages??S(e.modelValue,e.rules));return{validateOn:s,messages:D,blurred:y,style:M,classes:O}}});function ra(e,s,y,S,o,t){return q(),C(N,null,{default:v(()=>[e.$props.hideHeader?R("",!0):_(e.$slots,"label",{key:0},()=>[r(W,{wrap:!1},{default:v(()=>[e.$props.label?(q(),C(k,{key:0,class:"fs-text-area-label",font:"text-overline",style:P(e.style)},{default:v(()=>[G(J(e.$props.label),1)]),_:1},8,["style"])):R("",!0),e.$props.label&&e.$props.required?(q(),C(k,{key:1,class:"fs-text-area-label",style:P([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:v(()=>[G(" * ")]),_:1},8,["style"])):R("",!0),r(Oe,{style:{"min-width":"40px"}}),e.messages.length>0?(q(),C(k,{key:2,class:"fs-text-area-messages",font:"text-overline",style:P(e.style)},{default:v(()=>[G(J(e.messages.join(", ")),1)]),_:1},8,["style"])):R("",!0)]),_:1})]),r(ta,H({clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,rows:e.$props.rows,hideDetails:!0,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[0]||(s[0]=n=>e.$emit("update:modelValue",n)),onBlur:s[1]||(s[1]=n=>e.blurred=!0)},e.$attrs),Re({_:2},[ke(e.$slots,(n,d)=>({name:d,fn:v(b=>[_(e.$slots,d,$e(Ae(b)))])}))]),1040,["style","class","rows","noResize","autoGrow","readonly","clearable","rules","validateOn","modelValue"]),_(e.$slots,"description",{},()=>[e.$props.description?(q(),C(k,{key:0,class:"fs-text-area-description",font:"text-underline",style:P(e.style)},{default:v(()=>[G(J(e.$props.description),1)]),_:1},8,["style"])):R("",!0)])]),_:3})}const X=Me(fe,[["render",ra]]);fe.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const Pa={title:"Foundation/Shared/Input fields/TextArea",component:X,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:s})=>({components:{FSTextArea:X,FSCol:N},props:Object.keys(s),setup(){return{...e}},template:`
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
    </FSCol>`})},B={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Ze}},render:(e,{argTypes:s})=>({components:{FSForm:ea,FSTextArea:X,FSCol:N,FSRow:W},props:Object.keys(s),setup(){return{...e}},template:`
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
}`,...(de=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Ga=["Variations","Rules"];export{B as Rules,I as Variations,Ga as __namedExportsOrder,Pa as default};
