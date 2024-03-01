import{e as y,d as S,s as we,g as Fe,o as Se,w as V,k as Ve,z as l,A as M,F as _,B as re,C as Ce,a3 as Te,v as K,E as qe,H as C,I as T,J as g,L,R as B,M as G,N as Y,K as q,U as Re,V as ke,O as Ae,P as $e}from"./vue.esm-bundler-a27e881e.js";import{_ as R}from"./FSSpan-23926a6a.js";import{_ as U}from"./FSCol-2e092d2e.js";import{_ as Q}from"./FSRow-68eabf56.js";import{u as ze}from"./useBreakpoints-ce1b45c7.js";import{u as Pe,C as J}from"./useColors-64c3c523.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Be}from"./VSpacer-0b076bec.js";import{m as Ge,f as He,V as Ne,a as Me}from"./VField-78590269.js";import{m as Ue,u as De,V as le}from"./VInput-932b5afe.js";import{f as Ee}from"./forwardRefs-e658ad70.js";import{u as Oe}from"./locale-d8beded1.js";import{I as je}from"./index-e8bb7e10.js";import{p as _e,i as Ke,j as Le,c as Ye,A as Je}from"./theme-40a9efa2.js";import{g as Qe,u as We}from"./color-17bc18af.js";import{T as Xe,V as Ze}from"./VForm-b9b36940.js";import"./useSlots-f8c8bb5a.js";import"./css-50f0aa1d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./index-1c023ca5.js";import"./transition-91aa1796.js";import"./VIcon-05012a67.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./density-9e64face.js";import"./useTimeZone-035f95ae.js";import"./useTranslations-0799e799.js";const et=_e({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Ue(),...Ge()},"VTextarea"),tt=Qe()({name:"VTextarea",directives:{Intersect:je},inheritAttrs:!1,props:et(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:c,emit:b,slots:a}=n;const r=Oe(e,"modelValue"),{isFocused:u,focus:x,blur:F}=De(e),s=y(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),v=y(()=>{if(c.maxlength)return c.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function f(t,i){var o,d;!e.autofocus||!t||(d=(o=i[0].target)==null?void 0:o.focus)==null||d.call(o)}const k=S(),A=S(),X=we(""),$=S(),fe=y(()=>e.persistentPlaceholder||u.value||e.active);function D(){var t;$.value!==document.activeElement&&((t=$.value)==null||t.focus()),u.value||x()}function me(t){D(),b("click:control",t)}function pe(t){b("mousedown:control",t)}function ve(t){t.stopPropagation(),D(),K(()=>{r.value="",Le(e["onClick:clear"],t)})}function ge(t){var o;const i=t.target;if(r.value=i.value,(o=e.modelModifiers)!=null&&o.trim){const d=[i.selectionStart,i.selectionEnd];K(()=>{i.selectionStart=d[0],i.selectionEnd=d[1]})}}const h=S(),z=S(+e.rows),E=y(()=>["plain","underlined"].includes(e.variant));Fe(()=>{e.autoGrow||(z.value=+e.rows)});function w(){e.autoGrow&&K(()=>{if(!h.value||!A.value)return;const t=getComputedStyle(h.value),i=getComputedStyle(A.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),d=h.value.scrollHeight,P=parseFloat(t.lineHeight),O=Math.max(parseFloat(e.rows)*P+o,parseFloat(i.getPropertyValue("--v-input-control-height"))),j=parseFloat(e.maxRows)*P+o||1/0,p=Je(d??0,O,j);z.value=Math.floor((p-o)/P),X.value=Ye(p)})}Se(w),V(r,w),V(()=>e.rows,w),V(()=>e.maxRows,w),V(()=>e.density,w);let m;return V(h,t=>{t?(m=new ResizeObserver(w),m.observe(h.value)):m==null||m.disconnect()}),Ve(()=>{m==null||m.disconnect()}),We(()=>{const t=!!(a.counter||e.counter||e.counterValue),i=!!(t||a.details),[o,d]=Ke(c),{modelValue:P,...O}=le.filterProps(e),j=He(e);return l(le,M({ref:k,modelValue:r.value,"onUpdate:modelValue":p=>r.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":E.value},e.class],style:e.style},o,O,{centerAffix:z.value===1&&!E.value,focused:u.value}),{...a,default:p=>{let{id:I,isDisabled:Z,isDirty:ee,isReadonly:ye,isValid:be}=p;return l(Ne,M({ref:A,style:{"--v-textarea-control-height":X.value},onClick:me,onMousedown:pe,"onClick:clear":ve,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},j,{id:I.value,active:fe.value||ee.value,centerAffix:z.value===1&&!E.value,dirty:ee.value||e.dirty,disabled:Z.value,focused:u.value,error:be.value===!1}),{...a,default:xe=>{let{props:{class:te,...ae}}=xe;return l(_,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[e.prefix]),re(l("textarea",M({ref:$,class:te,value:r.value,onInput:ge,autofocus:e.autofocus,readonly:ye.value,disabled:Z.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:D,onBlur:F},ae,d),null),[[Ce("intersect"),{handler:f},null,{once:!0}]]),e.autoGrow&&re(l("textarea",{class:[te,"v-textarea__sizer"],id:`${ae.id}-sizer`,"onUpdate:modelValue":he=>r.value=he,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Te,r.value]]),e.suffix&&l("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:i?p=>{var I;return l(_,null,[(I=a.details)==null?void 0:I.call(a,p),t&&l(_,null,[l("span",null,null),l(Me,{active:e.persistentCounter||u.value,value:s.value,max:v.value},a.counter)])])}:void 0})}),Ee({},k,A,$)}}),ce=qe({name:"FSTextArea",components:{FSSpan:R,FSCol:U,FSRow:Q},inheritAttrs:!1,props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},required:{type:Boolean,required:!1,default:!1},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!0},autoGrow:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{isMobileSized:n}=ze(),{getColors:c}=Pe(),b=c(J.Error),a=c(J.Light),r=c(J.Dark),u=y(()=>{let s,v;if(!e.autoGrow){const f=n.value?30:42,k=n.value?16:20;v=`${f}px`,e.rows>1?s=`${f+(e.rows-1)*k}px`:s=`${f}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":a.dark,"--fs-text-area-color":r.base,"--fs-text-area-active-border-color":r.dark,"--fs-text-area-error-color":b.base,"--fs-text-area-error-border-color":b.base,"--fs-text-area-min-height":v,"--fs-text-area-height":s}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":a.base,"--fs-text-area-color":a.dark,"--fs-text-area-active-border-color":a.base,"--fs-text-area-min-height":v,"--fs-text-area-height":s}}),x=y(()=>{const s=[];for(const v of e.rules){const f=v(e.modelValue);typeof f=="string"&&s.push(f)}return s}),F=y(()=>{const s=["fs-text-area"];return e.autoGrow&&s.push("fs-text-area-auto-grow"),s});return{messages:x,style:u,classes:F}}});function at(e,n,c,b,a,r){return C(),T(U,null,{default:g(()=>[e.$props.hideHeader?q("",!0):L(e.$slots,"label",{key:0},()=>[l(Q,{wrap:!1},{default:g(()=>[e.$props.label?(C(),T(R,{key:0,class:"fs-text-area-label",font:"text-overline",style:B(e.style)},{default:g(()=>[G(Y(e.$props.label),1)]),_:1},8,["style"])):q("",!0),e.$props.label&&e.$props.required?(C(),T(R,{key:1,class:"fs-text-area-label",style:B([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:g(()=>[G(" * ")]),_:1},8,["style"])):q("",!0),l(Be,{style:{"min-width":"40px"}}),e.messages.length>0?(C(),T(R,{key:2,class:"fs-text-area-messages",font:"text-overline",style:B(e.style)},{default:g(()=>[G(Y(e.messages.join(", ")),1)]),_:1},8,["style"])):q("",!0)]),_:1})]),l(tt,M({clearIcon:"mdi-close",variant:"outlined","hide-details":"",style:e.style,class:e.classes,rows:e.$props.rows,rules:e.$props.rules,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=u=>e.$emit("update:modelValue",u))},e.$attrs),Re({_:2},[ke(e.$slots,(u,x)=>({name:x,fn:g(F=>[L(e.$slots,x,Ae($e(F)))])}))]),1040,["style","class","rows","rules","noResize","autoGrow","readonly","clearable","modelValue"]),L(e.$slots,"description",{},()=>[e.$props.description?(C(),T(R,{key:0,class:"fs-text-area-description",font:"text-underline",style:B(e.style)},{default:g(()=>[G(Y(e.$props.description),1)]),_:1},8,["style"])):q("",!0)])]),_:3})}const W=Ie(ce,[["render",at]]);ce.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTextArea.vue"]};const $t={title:"Foundation/Shared/Input fields/TextArea",component:W,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},H={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:n})=>({components:{FSTextArea:W,FSCol:U},props:Object.keys(n),setup(){return{...e}},template:`
    <FSCol>
      <FSTextArea
        label="Text, 1 row, resizeable"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows, non resizeable"
        :rows="2"
        :resize="false"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Required text, auto grow (does not allow to set a base height)"
        description="Description for this field"
        :required="true"
        :autoGrow="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row, resizeable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>`})},N={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Xe}},render:(e,{argTypes:n})=>({components:{VForm:Ze,FSTextArea:W,FSCol:U,FSRow:Q},props:Object.keys(n),setup(){return{...e}},template:`
    <v-form v-model="args.valid">
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
    </v-form>`})};var oe,se,ne;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        label="Text, 1 row, resizeable"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows, non resizeable"
        :rows="2"
        :resize="false"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Required text, auto grow (does not allow to set a base height)"
        description="Description for this field"
        :required="true"
        :autoGrow="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row, resizeable"
        description="Uneditable description"
        :editable="false"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(ne=(se=H.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,ue,de;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
    <v-form v-model="args.valid">
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
}`,...(de=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const zt=["Variations","Rules"];export{N as Rules,H as Variations,zt as __namedExportsOrder,$t as default};
