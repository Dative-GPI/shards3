import{f as x,l as V,s as Se,d as Ve,k as Ce,w as C,o as qe,B as r,G as M,N as Y,O as le,P as Te,X as Re,I as X,n as ke,t as Ae,q,u as T,v as y,x as J,A as z,D as P,E as Q,F as B,L as $e,M as ze,y as Pe,z as Be}from"./vue.esm-bundler-722d5586.js";import{u as oe}from"./useBreakpoints-fe6b16b2.js";import{p as Ie,s as Ge,t as Ne,j as De,q as Me,C as I,u as G}from"./useTimeZone-e2d91037.js";import{_ as R}from"./FSSpan-25dfede3.js";import{_ as H}from"./FSCol-73c0912e.js";import{_ as W}from"./FSRow-adbe3642.js";import{_ as He}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Ue}from"./VSpacer-14789593.js";import{m as Oe,I as _e,a as Ee,V as je,b as Le,f as Ke}from"./VField-ef78f264.js";import{a as Ye,u as Xe,V as se}from"./VInput-157b0d5f.js";import{u as Je}from"./locale-4b40caf6.js";import{g as Qe,a as We}from"./VIcon-3294e246.js";import{T as Ze,V as ea}from"./FSTextFields-01d4cdfb.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./index-debb29c6.js";import"./loader-40ab58f6.js";import"./rounded-0d60e9e4.js";const aa=Ie({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ye(),...Oe()},"VTextarea"),ta=Qe()({name:"VTextarea",directives:{Intersect:_e},inheritAttrs:!1,props:aa(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{attrs:g,emit:b,slots:s}=i;const t=Je(e,"modelValue"),{isFocused:n,focus:m,blur:S}=Xe(e),U=x(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),O=x(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function _(a,u){var o,f;!e.autofocus||!a||(f=(o=u[0].target)==null?void 0:o.focus)==null||f.call(o)}const l=V(),d=V(),c=Se(""),h=V(),ve=x(()=>e.persistentPlaceholder||n.value||e.active);function E(){var a;h.value!==document.activeElement&&((a=h.value)==null||a.focus()),n.value||m()}function pe(a){E(),b("click:control",a)}function ge(a){b("mousedown:control",a)}function ye(a){a.stopPropagation(),E(),X(()=>{t.value="",Ne(e["onClick:clear"],a)})}function xe(a){var o;const u=a.target;if(t.value=u.value,(o=e.modelModifiers)!=null&&o.trim){const f=[u.selectionStart,u.selectionEnd];X(()=>{u.selectionStart=f[0],u.selectionEnd=f[1]})}}const w=V(),k=V(+e.rows),j=x(()=>["plain","underlined"].includes(e.variant));Ve(()=>{e.autoGrow||(k.value=+e.rows)});function F(){e.autoGrow&&X(()=>{if(!w.value||!d.value)return;const a=getComputedStyle(w.value),u=getComputedStyle(d.value.$el),o=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),f=w.value.scrollHeight,A=parseFloat(a.lineHeight),L=Math.max(parseFloat(e.rows)*A+o,parseFloat(u.getPropertyValue("--v-input-control-height"))),K=parseFloat(e.maxRows)*A+o||1/0,p=Me(f??0,L,K);k.value=Math.floor((p-o)/A),c.value=De(p)})}Ce(F),C(t,F),C(()=>e.rows,F),C(()=>e.maxRows,F),C(()=>e.density,F);let v;return C(w,a=>{a?(v=new ResizeObserver(F),v.observe(w.value)):v==null||v.disconnect()}),qe(()=>{v==null||v.disconnect()}),We(()=>{const a=!!(s.counter||e.counter||e.counterValue),u=!!(a||s.details),[o,f]=Ge(g),{modelValue:A,...L}=se.filterProps(e),K=Ee(e);return r(se,M({ref:l,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":j.value},e.class],style:e.style},o,L,{centerAffix:k.value===1&&!j.value,focused:n.value}),{...s,default:p=>{let{id:$,isDisabled:ee,isDirty:ae,isReadonly:be,isValid:he}=p;return r(je,M({ref:d,style:{"--v-textarea-control-height":c.value},onClick:pe,onMousedown:ge,"onClick:clear":ye,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},K,{id:$.value,active:ve.value||ae.value,centerAffix:k.value===1&&!j.value,dirty:ae.value||e.dirty,disabled:ee.value,focused:n.value,error:he.value===!1}),{...s,default:we=>{let{props:{class:te,...re}}=we;return r(Y,null,[e.prefix&&r("span",{class:"v-text-field__prefix"},[e.prefix]),le(r("textarea",M({ref:h,class:te,value:t.value,onInput:xe,autofocus:e.autofocus,readonly:be.value,disabled:ee.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:E,onBlur:S},re,f),null),[[Te("intersect"),{handler:_},null,{once:!0}]]),e.autoGrow&&le(r("textarea",{class:[te,"v-textarea__sizer"],id:`${re.id}-sizer`,"onUpdate:modelValue":Fe=>t.value=Fe,ref:w,readonly:!0,"aria-hidden":"true"},null),[[Re,t.value]]),e.suffix&&r("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var $;return r(Y,null,[($=s.details)==null?void 0:$.call(s,p),a&&r(Y,null,[r("span",null,null),r(Le,{active:e.persistentCounter||n.value,value:U.value,max:O.value},s.counter)])])}:void 0})}),Ke({},l,d,h)}}),me=ke({name:"FSTextArea",components:{FSSpan:R,FSCol:H,FSRow:W},inheritAttrs:!1,props:{label:{type:String,required:!0,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},color:{type:String,required:!1,default:I.Dark},required:{type:Boolean,required:!1,default:!1},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!0},autoGrow:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{color:i,rows:g,autoGrow:b,editable:s}=Ae(e),t=G().getColors(i.value),n=G().getColors(I.Error),m=G().getColors(I.Light),S=G().getColors(I.Dark),U=x(()=>{let l,d;if(!b.value){const c=oe().isMobileSized()?30:42,h=oe().isMobileSized()?16:20;d=`${c}px`,g.value>1?l=`${c+(g.value-1)*h}px`:l=`${c}px`}return s.value?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":t.base,"--fs-text-area-color":S.base,"--fs-text-area-active-border-color":t.dark,"--fs-text-area-error-color":n.base,"--fs-text-area-error-border-color":n.base,"--fs-text-area-min-height":d,"--fs-text-area-height":l}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":m.base,"--fs-text-area-color":m.dark,"--fs-text-area-active-border-color":m.base,"--fs-text-area-min-height":d,"--fs-text-area-height":l}}),O=x(()=>{const l=[];for(const d of e.rules){const c=d(e.modelValue);typeof c=="string"&&l.push(c)}return l}),_=x(()=>{const l=["fs-text-area"];return b.value&&l.push("fs-text-area-auto-grow"),l});return{messages:O,style:U,classes:_}}});function ra(e,i,g,b,s,t){return q(),T(H,null,{default:y(()=>[J(e.$slots,"label",{},()=>[r(W,{wrap:!1},{default:y(()=>[e.$props.label?(q(),T(R,{key:0,class:"fs-text-area-label",font:"text-overline",style:z(e.style)},{default:y(()=>[P(Q(e.$props.label),1)]),_:1},8,["style"])):B("",!0),e.$props.label&&e.$props.required?(q(),T(R,{key:1,class:"fs-text-area-label",style:z([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:y(()=>[P(" * ")]),_:1},8,["style"])):B("",!0),r(Ue,{style:{"min-width":"40px"}}),e.messages.length>0?(q(),T(R,{key:2,class:"fs-text-area-messages",font:"text-overline",style:z(e.style)},{default:y(()=>[P(Q(e.messages.join(", ")),1)]),_:1},8,["style"])):B("",!0)]),_:1})]),r(ta,M({class:e.classes,variant:"outlined","hide-details":"",style:e.style,rows:e.$props.rows,rules:e.$props.rules,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=n=>e.$emit("update:modelValue",n))},e.$attrs),$e({_:2},[ze(e.$slots,(n,m)=>({name:m,fn:y(S=>[J(e.$slots,m,Pe(Be(S)))])}))]),1040,["class","style","rows","rules","noResize","autoGrow","readonly","modelValue"]),J(e.$slots,"description",{},()=>[e.$props.description?(q(),T(R,{key:0,class:"fs-text-area-description",font:"text-underline",style:z(e.style)},{default:y(()=>[P(Q(e.$props.description),1)]),_:1},8,["style"])):B("",!0)])]),_:3})}const Z=He(me,[["render",ra]]);me.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTextArea.vue"]};const Fa={title:"Foundation/Shared/Input fields/TextArea",component:Z,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},N={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:i})=>({components:{FSTextArea:Z,FSCol:H},props:Object.keys(i),setup(){return{...e}},template:`
    <FSCol>
      <FSTextArea
        label="Text - dark color - 1 row, resizeable"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        color="primary"
        label="Text - primary color - 2 rows, non resizeable"
        :rows="2"
        :resize="false"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        color="warning"
        label="Required text - warning color - auto grow (does not allow to set a base height)"
        description="Description for this field"
        :required="true"
        :autoGrow="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable - 1 row, resizeable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},D={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Ze}},render:(e,{argTypes:i})=>({components:{VForm:ea,FSTextArea:Z,FSCol:H,FSRow:W},props:Object.keys(i),setup(){return{...e}},template:`
    <v-form v-model="args.valid" v-lazy>
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
    </v-form>`})};var ne,ue,ie;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
        label="Text - dark color - 1 row, resizeable"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        color="primary"
        label="Text - primary color - 2 rows, non resizeable"
        :rows="2"
        :resize="false"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        color="warning"
        label="Required text - warning color - auto grow (does not allow to set a base height)"
        description="Description for this field"
        :required="true"
        :autoGrow="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable - 1 row, resizeable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(ie=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:ie.source}}};var de,ce,fe;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
      VForm,
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
    <v-form v-model="args.valid" v-lazy>
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
    </v-form>\`
  })
}`,...(fe=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:fe.source}}};const Sa=["Variations","Rules"];export{D as Rules,N as Variations,Sa as __namedExportsOrder,Fa as default};
