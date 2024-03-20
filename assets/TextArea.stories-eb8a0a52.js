import{j as g,d as V,s as he,l as Fe,o as Se,w as T,m as Ve,z as r,x as N,F as L,A as re,B as Te,a6 as qe,n as Y,g as Ce,K as q,L as C,M as v,R as _,V as P,N as G,O as J,P as R,Y as Re,Z as ke,S as $e,U as Ae}from"./vue.esm-bundler-0a1af505.js";import{_ as k}from"./FSSpan-50615fe3.js";import{_ as H}from"./FSCol-5b91b447.js";import{_ as Q}from"./FSRow-852c6353.js";import{m as ze,f as Pe,V as Ge,a as Be,u as Ie}from"./VField-66cf1d8d.js";import{u as Ne}from"./css-415780ec.js";import{u as He,C as Z}from"./useColors-b80ccbdd.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Me}from"./VSpacer-a7d8920b.js";import{m as Ue,u as De,V as le}from"./VInput-32e7bd1c.js";import{f as je}from"./forwardRefs-e658ad70.js";import{u as Ee}from"./proxiedModel-7a45f3f8.js";import{I as Ke}from"./index-80f01c5b.js";import{p as Le,j as Ye,k as _e,e as Je,J as Ze}from"./theme-2d24b19c.js";import{g as Qe,u as We}from"./useRender-cc726afb.js";import{T as Xe,F as ea}from"./FSForm-e653f81c.js";import"./useSlots-de2ef136.js";import"./index-d90e6acb.js";import"./transition-c9646b8b.js";import"./color-68d45c69.js";import"./tag-e48f136a.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./locale-767f04a5.js";import"./rounded-94c7156f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./VIcon-a19d44fc.js";import"./density-99d9a31c.js";import"./useTimeZone-9d6731ed.js";import"./useTranslations-c047d5be.js";const aa=Le({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ue(),...ze()},"VTextarea"),ta=Qe()({name:"VTextarea",directives:{Intersect:Ke},inheritAttrs:!1,props:aa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:y,emit:S,slots:s}=o;const t=Ee(e,"modelValue"),{isFocused:n,focus:d,blur:b}=De(e),O=g(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),M=g(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function U(a,u){var l,f;!e.autofocus||!a||(f=(l=u[0].target)==null?void 0:l.focus)==null||f.call(l)}const i=V(),c=V(),x=he(""),w=V(),ce=g(()=>e.persistentPlaceholder||n.value||e.active);function D(){var a;w.value!==document.activeElement&&((a=w.value)==null||a.focus()),n.value||d()}function me(a){D(),S("click:control",a)}function pe(a){S("mousedown:control",a)}function ve(a){a.stopPropagation(),D(),Y(()=>{t.value="",_e(e["onClick:clear"],a)})}function ge(a){var l;const u=a.target;if(t.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const f=[u.selectionStart,u.selectionEnd];Y(()=>{u.selectionStart=f[0],u.selectionEnd=f[1]})}}const h=V(),$=V(+e.rows),j=g(()=>["plain","underlined"].includes(e.variant));Fe(()=>{e.autoGrow||($.value=+e.rows)});function F(){e.autoGrow&&Y(()=>{if(!h.value||!c.value)return;const a=getComputedStyle(h.value),u=getComputedStyle(c.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),f=h.value.scrollHeight,A=parseFloat(a.lineHeight),E=Math.max(parseFloat(e.rows)*A+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),K=parseFloat(e.maxRows)*A+l||1/0,p=Ze(f??0,E,K);$.value=Math.floor((p-l)/A),x.value=Je(p)})}Se(F),T(t,F),T(()=>e.rows,F),T(()=>e.maxRows,F),T(()=>e.density,F);let m;return T(h,a=>{a?(m=new ResizeObserver(F),m.observe(h.value)):m==null||m.disconnect()}),Ve(()=>{m==null||m.disconnect()}),We(()=>{const a=!!(s.counter||e.counter||e.counterValue),u=!!(a||s.details),[l,f]=Ye(y),{modelValue:A,...E}=le.filterProps(e),K=Pe(e);return r(le,N({ref:i,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":j.value},e.class],style:e.style},l,E,{centerAffix:$.value===1&&!j.value,focused:n.value}),{...s,default:p=>{let{id:z,isDisabled:X,isDirty:ee,isReadonly:ye,isValid:be}=p;return r(Ge,N({ref:c,style:{"--v-textarea-control-height":x.value},onClick:me,onMousedown:pe,"onClick:clear":ve,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},K,{id:z.value,active:ce.value||ee.value,centerAffix:$.value===1&&!j.value,dirty:ee.value||e.dirty,disabled:X.value,focused:n.value,error:be.value===!1}),{...s,default:xe=>{let{props:{class:ae,...te}}=xe;return r(L,null,[e.prefix&&r("span",{class:"v-text-field__prefix"},[e.prefix]),re(r("textarea",N({ref:w,class:ae,value:t.value,onInput:ge,autofocus:e.autofocus,readonly:ye.value,disabled:X.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:D,onBlur:b},te,f),null),[[Te("intersect"),{handler:U},null,{once:!0}]]),e.autoGrow&&re(r("textarea",{class:[ae,"v-textarea__sizer"],id:`${te.id}-sizer`,"onUpdate:modelValue":we=>t.value=we,ref:h,readonly:!0,"aria-hidden":"true"},null),[[qe,t.value]]),e.suffix&&r("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var z;return r(L,null,[(z=s.details)==null?void 0:z.call(s,p),a&&r(L,null,[r("span",null,null),r(Be,{active:e.persistentCounter||n.value,value:O.value,max:M.value},s.counter)])])}:void 0})}),je({},i,c,w)}}),fe=Ce({name:"FSTextArea",components:{FSSpan:k,FSCol:H,FSRow:Q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:o,blurred:y,getMessages:S}=Ie(),{isMobileSized:s}=Ne(),{getColors:t}=He(),n=t(Z.Error),d=t(Z.Light),b=t(Z.Dark),O=g(()=>{let i,c;if(!e.autoGrow){const x=s.value?30:42,w=s.value?16:20;c=`${x}px`,e.rows>1?i=`${x+(e.rows-1)*w}px`:i=`${x}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":d.dark,"--fs-text-area-color":b.base,"--fs-text-area-active-border-color":b.dark,"--fs-text-area-error-color":n.base,"--fs-text-area-error-border-color":n.base,"--fs-text-area-min-height":c,"--fs-text-area-height":i}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":d.base,"--fs-text-area-color":d.dark,"--fs-text-area-active-border-color":d.base,"--fs-text-area-min-height":c,"--fs-text-area-height":i}}),M=g(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),U=g(()=>e.messages??S(e.modelValue,e.rules));return{validateOn:o,messages:U,blurred:y,style:O,classes:M}}});function ra(e,o,y,S,s,t){return q(),C(H,null,{default:v(()=>[e.$props.hideHeader?R("",!0):_(e.$slots,"label",{key:0},()=>[r(Q,{wrap:!1},{default:v(()=>[e.$props.label?(q(),C(k,{key:0,class:"fs-text-area-label",font:"text-overline",style:P(e.style)},{default:v(()=>[G(J(e.$props.label),1)]),_:1},8,["style"])):R("",!0),e.$props.label&&e.$props.required?(q(),C(k,{key:1,class:"fs-text-area-label",style:P([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:v(()=>[G(" * ")]),_:1},8,["style"])):R("",!0),r(Me,{style:{"min-width":"40px"}}),e.messages.length>0?(q(),C(k,{key:2,class:"fs-text-area-messages",font:"text-overline",style:P(e.style)},{default:v(()=>[G(J(e.messages.join(", ")),1)]),_:1},8,["style"])):R("",!0)]),_:1})]),r(ta,N({clearIcon:"mdi-close",variant:"outlined",style:e.style,class:e.classes,rows:e.$props.rows,hideDetails:!0,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n)),onBlur:o[1]||(o[1]=n=>e.blurred=!0)},e.$attrs),Re({_:2},[ke(e.$slots,(n,d)=>({name:d,fn:v(b=>[_(e.$slots,d,$e(Ae(b)))])}))]),1040,["style","class","rows","noResize","autoGrow","readonly","clearable","rules","validateOn","modelValue"]),_(e.$slots,"description",{},()=>[e.$props.description?(q(),C(k,{key:0,class:"fs-text-area-description",font:"text-underline",style:P(e.style)},{default:v(()=>[G(J(e.$props.description),1)]),_:1},8,["style"])):R("",!0)])]),_:3})}const W=Oe(fe,[["render",ra]]);fe.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const Ba={title:"Foundation/Shared/Input fields/TextArea",component:W,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},B={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:o})=>({components:{FSTextArea:W,FSCol:H},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})},I={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Xe}},render:(e,{argTypes:o})=>({components:{FSForm:ea,FSTextArea:W,FSCol:H,FSRow:Q},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSForm>`})};var oe,se,ne;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ue,ie,de;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const Ia=["Variations","Rules"];export{I as Rules,B as Variations,Ia as __namedExportsOrder,Ba as default};
