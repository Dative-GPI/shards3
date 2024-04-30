import{e as g,d as q,s as he,l as Fe,o as Se,w as R,m as Ve,z as l,A as H,F as Y,C as re,D as Ce,a7 as Te,n as J,j as qe,J as S,K as V,L as v,R as W,M as G,S as P,U as X,N as C,_ as Re,Y as ke,W as $e,X as Ae}from"./vue.esm-bundler-82a4b45a.js";import{_ as k}from"./FSSpan-4bf272e8.js";import{_ as D}from"./FSCol-8326ac62.js";import{_ as Q}from"./FSRow-2ccfd21b.js";import{u as ze}from"./useRules-7b0f86fa.js";import{u as Ge}from"./css-c39c4a6e.js";import{u as Pe,C as B}from"./useColors-698e8610.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";import{F as Ie}from"./FSButton-fa754e08.js";import{V as Ne}from"./VSpacer-dfdceece.js";import{m as He,f as De,V as Me,a as Oe}from"./VField-f2eeeda6.js";import{m as Ue,u as Ee,V as le}from"./VInput-6edbe327.js";import{f as je}from"./forwardRefs-e658ad70.js";import{u as Ke}from"./proxiedModel-6f61b602.js";import{I as Le}from"./index-30818099.js";import{p as Ye,k as Je,l as We,c as Xe,K as Qe}from"./theme-380662da.js";import{g as Ze,u as _e}from"./useRender-9b5fad83.js";import{F as ea}from"./FSForm-4bb154cf.js";import{T as aa}from"./rules-77c0d51e.js";import"./useSlots-f55d2513.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-a4cc0438.js";import"./FSCard-ebbda5de.js";import"./VProgressCircular-86578fb4.js";import"./color-616211f8.js";import"./resizeObserver-bcc9c76e.js";import"./VIcon-cdae09b0.js";import"./tag-c823df72.js";import"./FSIcon-97799824.js";import"./index-7dc37899.js";import"./transition-0cde2f94.js";import"./VLabel-db8bd06b.js";import"./loader-80aadcba.js";import"./locale-c97048b2.js";import"./rounded-523f3a06.js";import"./VDefaultsProvider-d7814c60.js";import"./density-d6a10252.js";import"./useTranslations-06e4f6c5.js";import"./useAppTimeZone-32a18909.js";const ta=Ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ue(),...He()},"VTextarea"),ra=Ze()({name:"VTextarea",directives:{Intersect:Le},inheritAttrs:!1,props:ta(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:y,emit:T,slots:n}=r;const t=Ke(e,"modelValue"),{isFocused:o,focus:d,blur:b}=Ee(e),M=g(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),O=g(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function U(a,u){var s,f;!e.autofocus||!a||(f=(s=u[0].target)==null?void 0:s.focus)==null||f.call(s)}const i=q(),m=q(),x=he(""),w=q(),me=g(()=>e.persistentPlaceholder||o.value||e.active);function E(){var a;w.value!==document.activeElement&&((a=w.value)==null||a.focus()),o.value||d()}function ce(a){E(),T("click:control",a)}function pe(a){T("mousedown:control",a)}function ve(a){a.stopPropagation(),E(),J(()=>{t.value="",We(e["onClick:clear"],a)})}function ge(a){var s;const u=a.target;if(t.value=u.value,(s=e.modelModifiers)!=null&&s.trim){const f=[u.selectionStart,u.selectionEnd];J(()=>{u.selectionStart=f[0],u.selectionEnd=f[1]})}}const h=q(),$=q(+e.rows),j=g(()=>["plain","underlined"].includes(e.variant));Fe(()=>{e.autoGrow||($.value=+e.rows)});function F(){e.autoGrow&&J(()=>{if(!h.value||!m.value)return;const a=getComputedStyle(h.value),u=getComputedStyle(m.value.$el),s=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),f=h.value.scrollHeight,A=parseFloat(a.lineHeight),K=Math.max(parseFloat(e.rows)*A+s,parseFloat(u.getPropertyValue("--v-input-control-height"))),L=parseFloat(e.maxRows)*A+s||1/0,p=Qe(f??0,K,L);$.value=Math.floor((p-s)/A),x.value=Xe(p)})}Se(F),R(t,F),R(()=>e.rows,F),R(()=>e.maxRows,F),R(()=>e.density,F);let c;return R(h,a=>{a?(c=new ResizeObserver(F),c.observe(h.value)):c==null||c.disconnect()}),Ve(()=>{c==null||c.disconnect()}),_e(()=>{const a=!!(n.counter||e.counter||e.counterValue),u=!!(a||n.details),[s,f]=Je(y),{modelValue:A,...K}=le.filterProps(e),L=De(e);return l(le,H({ref:i,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":j.value},e.class],style:e.style},s,K,{centerAffix:$.value===1&&!j.value,focused:o.value}),{...n,default:p=>{let{id:z,isDisabled:_,isDirty:ee,isReadonly:ye,isValid:be}=p;return l(Me,H({ref:m,style:{"--v-textarea-control-height":x.value},onClick:ce,onMousedown:pe,"onClick:clear":ve,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},L,{id:z.value,active:me.value||ee.value,centerAffix:$.value===1&&!j.value,dirty:ee.value||e.dirty,disabled:_.value,focused:o.value,error:be.value===!1}),{...n,default:xe=>{let{props:{class:ae,...te}}=xe;return l(Y,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),re(l("textarea",H({ref:w,class:ae,value:t.value,onInput:ge,autofocus:e.autofocus,readonly:ye.value,disabled:_.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:E,onBlur:b},te,f),null),[[Ce("intersect"),{handler:U},null,{once:!0}]]),e.autoGrow&&re(l("textarea",{class:[ae,"v-textarea__sizer"],id:`${te.id}-sizer`,"onUpdate:modelValue":we=>t.value=we,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Te,t.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var z;return l(Y,null,[(z=n.details)==null?void 0:z.call(n,p),a&&l(Y,null,[l("span",null,null),l(Oe,{active:e.persistentCounter||o.value,value:M.value,max:O.value},n.counter)])])}:void 0})}),je({},i,m,w)}}),fe=qe({name:"FSTextArea",components:{FSSpan:k,FSCol:D,FSRow:Q},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:r,blurred:y,getMessages:T}=ze(),{isMobileSized:n}=Ge(),{getColors:t}=Pe(),o=t(B.Error),d=t(B.Light),b=t(B.Dark),M=g(()=>{let i,m;if(!e.autoGrow){const x=n.value?30:42,w=n.value?16:20;m=`${x}px`,e.rows>1?i=`${x+(e.rows-1)*w}px`:i=`${x}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":d.dark,"--fs-text-area-color":b.base,"--fs-text-area-active-border-color":b.dark,"--fs-text-area-error-color":o.base,"--fs-text-area-error-border-color":o.base,"--fs-text-area-min-height":m,"--fs-text-area-height":i}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":d.base,"--fs-text-area-color":d.dark,"--fs-text-area-active-border-color":d.base,"--fs-text-area-min-height":m,"--fs-text-area-height":i}}),O=g(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),U=g(()=>e.messages??T(e.modelValue,e.rules));return{validateOn:r,ColorEnum:B,messages:U,blurred:y,classes:O,style:M}}});function la(e,r,y,T,n,t){return S(),V(D,null,{default:v(()=>[e.$props.hideHeader?C("",!0):W(e.$slots,"label",{key:0},()=>[l(Q,{wrap:!1},{default:v(()=>[e.$props.label?(S(),V(k,{key:0,class:"fs-text-area-label",font:"text-overline",style:G(e.style)},{default:v(()=>[P(X(e.$props.label),1)]),_:1},8,["style"])):C("",!0),e.$props.label&&e.$props.required?(S(),V(k,{key:1,class:"fs-text-area-label",style:G([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:v(()=>[P(" * ")]),_:1},8,["style"])):C("",!0),l(Ne,{style:{"min-width":"40px"}}),e.messages.length>0?(S(),V(k,{key:2,class:"fs-text-area-messages",font:"text-overline",style:G(e.style)},{default:v(()=>[P(X(e.messages.join(", ")),1)]),_:1},8,["style"])):C("",!0)]),_:1})]),l(ra,H({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,hideDetails:!0,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[1]||(r[1]=o=>e.$emit("update:modelValue",o)),onBlur:r[2]||(r[2]=o=>e.blurred=!0)},e.$attrs),Re({clear:v(()=>[e.$props.editable&&e.$props.modelValue?(S(),V(Ie,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:r[0]||(r[0]=o=>e.$emit("update:modelValue",null))},null,8,["color"])):C("",!0)]),_:2},[ke(e.$slots,(o,d)=>({name:d,fn:v(b=>[W(e.$slots,d,$e(Ae(b)))])}))]),1040,["style","class","rows","noResize","autoGrow","readonly","clearable","rules","validateOn","modelValue"]),W(e.$slots,"description",{},()=>[e.$props.description?(S(),V(k,{key:0,class:"fs-text-area-description",font:"text-underline",style:G(e.style)},{default:v(()=>[P(X(e.$props.description),1)]),_:1},8,["style"])):C("",!0)])]),_:3})}const Z=Be(fe,[["render",la]]);fe.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const Ka={title:"Foundation/Shared/Input fields/TextArea",component:Z,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:r})=>({components:{FSTextArea:Z,FSCol:D},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},N={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:aa}},render:(e,{argTypes:r})=>({components:{FSForm:ea,FSTextArea:Z,FSCol:D,FSRow:Q},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSForm>`})};var oe,se,ne;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ue,ie,de;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const La=["Variations","Rules"];export{N as Rules,I as Variations,La as __namedExportsOrder,Ka as default};
