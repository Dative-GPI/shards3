import{e as g,d as q,s as he,l as Fe,o as Se,w as k,m as Ve,z as l,x as N,F as Y,A as re,B as Ce,a6 as Te,n as J,j as qe,I as S,J as V,K as v,S as Q,L as P,P as G,Q as Z,M as C,Y as ke,Z as Re,U as $e,V as Ae}from"./vue.esm-bundler-9b0e8103.js";import{_ as R}from"./FSSpan-66c77817.js";import{_ as M}from"./FSCol-417d1c42.js";import{_ as W}from"./FSRow-efd9bf42.js";import{u as ze}from"./useRules-1f7652b9.js";import{u as Pe}from"./css-a20776b9.js";import{u as Ge,C as B}from"./useColors-92311d90.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as Ie}from"./FSButton-a0db2553.js";import{V as He}from"./VSpacer-fd2fc595.js";import{m as Ne,f as Me,V as Oe,a as De}from"./VField-719bff6c.js";import{m as Ue,u as Ee,V as le}from"./VInput-9743ddde.js";import{f as je}from"./forwardRefs-e658ad70.js";import{u as Ke}from"./proxiedModel-bfd89816.js";import{I as Le}from"./index-d737aecc.js";import{p as Ye,j as Je,k as Qe,e as Ze,K as We}from"./theme-eb9d1a1f.js";import{g as Xe,u as _e}from"./useRender-7c6c7a38.js";import{F as ea}from"./FSForm-b51a80c8.js";import{T as aa}from"./rules-4b68c01e.js";import"./useSlots-bfff66e3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-e19a2efb.js";import"./FSCard-2aeec95e.js";import"./VProgressCircular-49cc274e.js";import"./color-8a9bca19.js";import"./resizeObserver-d1864ccd.js";import"./VIcon-dbd6f8e0.js";import"./tag-6bef4934.js";import"./FSIcon-fb1e9586.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./VLabel-2c7c7f15.js";import"./loader-e562d735.js";import"./locale-e5242025.js";import"./rounded-f08b035c.js";import"./VDefaultsProvider-b110751b.js";import"./density-104762f9.js";import"./useTranslations-8945c1d2.js";import"./useAppTimeZone-7e26f50a.js";const ta=Ye({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ue(),...Ne()},"VTextarea"),ra=Xe()({name:"VTextarea",directives:{Intersect:Le},inheritAttrs:!1,props:ta(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:y,emit:T,slots:n}=r;const t=Ke(e,"modelValue"),{isFocused:o,focus:d,blur:b}=Ee(e),O=g(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),D=g(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function U(a,u){var s,f;!e.autofocus||!a||(f=(s=u[0].target)==null?void 0:s.focus)==null||f.call(s)}const i=q(),m=q(),x=he(""),w=q(),me=g(()=>e.persistentPlaceholder||o.value||e.active);function E(){var a;w.value!==document.activeElement&&((a=w.value)==null||a.focus()),o.value||d()}function ce(a){E(),T("click:control",a)}function pe(a){T("mousedown:control",a)}function ve(a){a.stopPropagation(),E(),J(()=>{t.value="",Qe(e["onClick:clear"],a)})}function ge(a){var s;const u=a.target;if(t.value=u.value,(s=e.modelModifiers)!=null&&s.trim){const f=[u.selectionStart,u.selectionEnd];J(()=>{u.selectionStart=f[0],u.selectionEnd=f[1]})}}const h=q(),$=q(+e.rows),j=g(()=>["plain","underlined"].includes(e.variant));Fe(()=>{e.autoGrow||($.value=+e.rows)});function F(){e.autoGrow&&J(()=>{if(!h.value||!m.value)return;const a=getComputedStyle(h.value),u=getComputedStyle(m.value.$el),s=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),f=h.value.scrollHeight,A=parseFloat(a.lineHeight),K=Math.max(parseFloat(e.rows)*A+s,parseFloat(u.getPropertyValue("--v-input-control-height"))),L=parseFloat(e.maxRows)*A+s||1/0,p=We(f??0,K,L);$.value=Math.floor((p-s)/A),x.value=Ze(p)})}Se(F),k(t,F),k(()=>e.rows,F),k(()=>e.maxRows,F),k(()=>e.density,F);let c;return k(h,a=>{a?(c=new ResizeObserver(F),c.observe(h.value)):c==null||c.disconnect()}),Ve(()=>{c==null||c.disconnect()}),_e(()=>{const a=!!(n.counter||e.counter||e.counterValue),u=!!(a||n.details),[s,f]=Je(y),{modelValue:A,...K}=le.filterProps(e),L=Me(e);return l(le,N({ref:i,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":j.value},e.class],style:e.style},s,K,{centerAffix:$.value===1&&!j.value,focused:o.value}),{...n,default:p=>{let{id:z,isDisabled:_,isDirty:ee,isReadonly:ye,isValid:be}=p;return l(Oe,N({ref:m,style:{"--v-textarea-control-height":x.value},onClick:ce,onMousedown:pe,"onClick:clear":ve,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},L,{id:z.value,active:me.value||ee.value,centerAffix:$.value===1&&!j.value,dirty:ee.value||e.dirty,disabled:_.value,focused:o.value,error:be.value===!1}),{...n,default:xe=>{let{props:{class:ae,...te}}=xe;return l(Y,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),re(l("textarea",N({ref:w,class:ae,value:t.value,onInput:ge,autofocus:e.autofocus,readonly:ye.value,disabled:_.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:E,onBlur:b},te,f),null),[[Ce("intersect"),{handler:U},null,{once:!0}]]),e.autoGrow&&re(l("textarea",{class:[ae,"v-textarea__sizer"],id:`${te.id}-sizer`,"onUpdate:modelValue":we=>t.value=we,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Te,t.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var z;return l(Y,null,[(z=n.details)==null?void 0:z.call(n,p),a&&l(Y,null,[l("span",null,null),l(De,{active:e.persistentCounter||o.value,value:O.value,max:D.value},n.counter)])])}:void 0})}),je({},i,m,w)}}),fe=qe({name:"FSTextArea",components:{FSSpan:R,FSCol:M,FSRow:W},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:r,blurred:y,getMessages:T}=ze(),{isMobileSized:n}=Pe(),{getColors:t}=Ge(),o=t(B.Error),d=t(B.Light),b=t(B.Dark),O=g(()=>{let i,m;if(!e.autoGrow){const x=n.value?30:42,w=n.value?16:20;m=`${x}px`,e.rows>1?i=`${x+(e.rows-1)*w}px`:i=`${x}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":d.dark,"--fs-text-area-color":b.base,"--fs-text-area-active-border-color":b.dark,"--fs-text-area-error-color":o.base,"--fs-text-area-error-border-color":o.base,"--fs-text-area-min-height":m,"--fs-text-area-height":i}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":d.base,"--fs-text-area-color":d.dark,"--fs-text-area-active-border-color":d.base,"--fs-text-area-min-height":m,"--fs-text-area-height":i}}),D=g(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),U=g(()=>e.messages??T(e.modelValue,e.rules));return{validateOn:r,ColorEnum:B,messages:U,blurred:y,classes:D,style:O}}});function la(e,r,y,T,n,t){return S(),V(M,null,{default:v(()=>[e.$props.hideHeader?C("",!0):Q(e.$slots,"label",{key:0},()=>[l(W,{wrap:!1},{default:v(()=>[e.$props.label?(S(),V(R,{key:0,class:"fs-text-area-label",font:"text-overline",style:P(e.style)},{default:v(()=>[G(Z(e.$props.label),1)]),_:1},8,["style"])):C("",!0),e.$props.label&&e.$props.required?(S(),V(R,{key:1,class:"fs-text-area-label",style:P([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:v(()=>[G(" * ")]),_:1},8,["style"])):C("",!0),l(He,{style:{"min-width":"40px"}}),e.messages.length>0?(S(),V(R,{key:2,class:"fs-text-area-messages",font:"text-overline",style:P(e.style)},{default:v(()=>[G(Z(e.messages.join(", ")),1)]),_:1},8,["style"])):C("",!0)]),_:1})]),l(ra,N({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,hideDetails:!0,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[1]||(r[1]=o=>e.$emit("update:modelValue",o)),onBlur:r[2]||(r[2]=o=>e.blurred=!0)},e.$attrs),ke({clear:v(()=>[e.$props.editable&&e.$props.modelValue?(S(),V(Ie,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:r[0]||(r[0]=o=>e.$emit("update:modelValue",null))},null,8,["color"])):C("",!0)]),_:2},[Re(e.$slots,(o,d)=>({name:d,fn:v(b=>[Q(e.$slots,d,$e(Ae(b)))])}))]),1040,["style","class","rows","noResize","autoGrow","readonly","clearable","rules","validateOn","modelValue"]),Q(e.$slots,"description",{},()=>[e.$props.description?(S(),V(R,{key:0,class:"fs-text-area-description",font:"text-underline",style:P(e.style)},{default:v(()=>[G(Z(e.$props.description),1)]),_:1},8,["style"])):C("",!0)])]),_:3})}const X=Be(fe,[["render",la]]);fe.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const Ka={title:"Foundation/Shared/Input fields/TextArea",component:X,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},I={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:r})=>({components:{FSTextArea:X,FSCol:M},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})},H={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:aa}},render:(e,{argTypes:r})=>({components:{FSForm:ea,FSTextArea:X,FSCol:M,FSRow:W},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(ne=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ue,ie,de;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const La=["Variations","Rules"];export{H as Rules,I as Variations,La as __namedExportsOrder,Ka as default};
