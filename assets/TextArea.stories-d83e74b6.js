import{d as b,j as F,s as Fe,f as Se,o as Ve,w as S,k as Ce,y as r,z as H,F as E,A as le,B as qe,a2 as Te,q as _,D as Re,G as V,H as C,I as y,L as K,K as P,M as I,N as L,J as q,S as ke,U as Ae,O as $e,P as ze}from"./vue.esm-bundler-7bc65811.js";import{u as Pe}from"./useBreakpoints-1754149f.js";import{u as Y,C as J}from"./useColors-6dff70d5.js";import{T as Ie}from"./rules-041f2544.js";import{_ as T}from"./FSSpan-7f9d89a0.js";import{_ as N}from"./FSCol-8dc0322a.js";import{_ as Q}from"./FSRow-ae4caba9.js";import{_ as Ge}from"./_plugin-vue_export-helper-c27b6911.js";import{V as Be}from"./VSpacer-fb0a701e.js";import{m as He,f as Ne,V as Me,a as Ue}from"./VField-cd628e22.js";import{m as De,u as Oe,V as oe}from"./VInput-06509b07.js";import{f as je}from"./forwardRefs-e658ad70.js";import{u as Ee}from"./locale-6f1bd0c0.js";import{I as _e}from"./index-77a5f257.js";import{p as Ke,i as Le,j as Ye,c as Je,A as Qe}from"./theme-0a9d2dbd.js";import{g as We,u as Xe}from"./color-3023c34d.js";import{V as Ze}from"./VForm-1b38991a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./index-76211fed.js";import"./transition-188ceb13.js";import"./VIcon-866a2873.js";import"./loader-04f0a6eb.js";import"./rounded-2bba334c.js";import"./density-54967683.js";const et=Ke({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...De(),...He()},"VTextarea"),tt=We()({name:"VTextarea",directives:{Intersect:_e},inheritAttrs:!1,props:et(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{attrs:v,emit:c,slots:s}=n;const l=Ee(e,"modelValue"),{isFocused:u,focus:x,blur:a}=Oe(e),g=b(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value||"").toString().length),f=b(()=>{if(v.maxlength)return v.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function M(t,i){var o,d;!e.autofocus||!t||(d=(o=i[0].target)==null?void 0:o.focus)==null||d.call(o)}const X=F(),R=F(),Z=Fe(""),k=F(),me=b(()=>e.persistentPlaceholder||u.value||e.active);function U(){var t;k.value!==document.activeElement&&((t=k.value)==null||t.focus()),u.value||x()}function pe(t){U(),c("click:control",t)}function ve(t){c("mousedown:control",t)}function ge(t){t.stopPropagation(),U(),_(()=>{l.value="",Ye(e["onClick:clear"],t)})}function ye(t){var o;const i=t.target;if(l.value=i.value,(o=e.modelModifiers)!=null&&o.trim){const d=[i.selectionStart,i.selectionEnd];_(()=>{i.selectionStart=d[0],i.selectionEnd=d[1]})}}const h=F(),A=F(+e.rows),D=b(()=>["plain","underlined"].includes(e.variant));Se(()=>{e.autoGrow||(A.value=+e.rows)});function w(){e.autoGrow&&_(()=>{if(!h.value||!R.value)return;const t=getComputedStyle(h.value),i=getComputedStyle(R.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),d=h.value.scrollHeight,$=parseFloat(t.lineHeight),O=Math.max(parseFloat(e.rows)*$+o,parseFloat(i.getPropertyValue("--v-input-control-height"))),j=parseFloat(e.maxRows)*$+o||1/0,p=Qe(d??0,O,j);A.value=Math.floor((p-o)/$),Z.value=Je(p)})}Ve(w),S(l,w),S(()=>e.rows,w),S(()=>e.maxRows,w),S(()=>e.density,w);let m;return S(h,t=>{t?(m=new ResizeObserver(w),m.observe(h.value)):m==null||m.disconnect()}),Ce(()=>{m==null||m.disconnect()}),Xe(()=>{const t=!!(s.counter||e.counter||e.counterValue),i=!!(t||s.details),[o,d]=Le(v),{modelValue:$,...O}=oe.filterProps(e),j=Ne(e);return r(oe,H({ref:X,modelValue:l.value,"onUpdate:modelValue":p=>l.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":D.value},e.class],style:e.style},o,O,{centerAffix:A.value===1&&!D.value,focused:u.value}),{...s,default:p=>{let{id:z,isDisabled:ee,isDirty:te,isReadonly:be,isValid:xe}=p;return r(Me,H({ref:R,style:{"--v-textarea-control-height":Z.value},onClick:pe,onMousedown:ve,"onClick:clear":ge,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},j,{id:z.value,active:me.value||te.value,centerAffix:A.value===1&&!D.value,dirty:te.value||e.dirty,disabled:ee.value,focused:u.value,error:xe.value===!1}),{...s,default:he=>{let{props:{class:ae,...re}}=he;return r(E,null,[e.prefix&&r("span",{class:"v-text-field__prefix"},[e.prefix]),le(r("textarea",H({ref:k,class:ae,value:l.value,onInput:ye,autofocus:e.autofocus,readonly:be.value,disabled:ee.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:U,onBlur:a},re,d),null),[[qe("intersect"),{handler:M},null,{once:!0}]]),e.autoGrow&&le(r("textarea",{class:[ae,"v-textarea__sizer"],id:`${re.id}-sizer`,"onUpdate:modelValue":we=>l.value=we,ref:h,readonly:!0,"aria-hidden":"true"},null),[[Te,l.value]]),e.suffix&&r("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:i?p=>{var z;return r(E,null,[(z=s.details)==null?void 0:z.call(s,p),t&&r(E,null,[r("span",null,null),r(Ue,{active:e.persistentCounter||u.value,value:g.value,max:f.value},s.counter)])])}:void 0})}),je({},X,R,k)}}),fe=Re({name:"FSTextArea",components:{FSSpan:T,FSCol:N,FSRow:Q},inheritAttrs:!1,props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},required:{type:Boolean,required:!1,default:!1},rows:{type:Number,required:!1,default:1},resize:{type:Boolean,required:!1,default:!0},autoGrow:{type:Boolean,required:!1,default:!1},hideHeader:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{isMobileSized:n}=Pe(),v=Y().getColors(J.Error),c=Y().getColors(J.Light),s=Y().getColors(J.Dark),l=b(()=>{let a,g;if(!e.autoGrow){const f=n.value?30:42,M=n.value?16:20;g=`${f}px`,e.rows>1?a=`${f+(e.rows-1)*M}px`:a=`${f}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":c.dark,"--fs-text-area-color":s.base,"--fs-text-area-active-border-color":s.dark,"--fs-text-area-error-color":v.base,"--fs-text-area-error-border-color":v.base,"--fs-text-area-min-height":g,"--fs-text-area-height":a}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":c.base,"--fs-text-area-color":c.dark,"--fs-text-area-active-border-color":c.base,"--fs-text-area-min-height":g,"--fs-text-area-height":a}}),u=b(()=>{const a=[];for(const g of e.rules){const f=g(e.modelValue);typeof f=="string"&&a.push(f)}return a}),x=b(()=>{const a=["fs-text-area"];return e.autoGrow&&a.push("fs-text-area-auto-grow"),a});return{messages:u,style:l,classes:x}}});function at(e,n,v,c,s,l){return V(),C(N,null,{default:y(()=>[e.$props.hideHeader?q("",!0):K(e.$slots,"label",{key:0},()=>[r(Q,{wrap:!1},{default:y(()=>[e.$props.label?(V(),C(T,{key:0,class:"fs-text-area-label",font:"text-overline",style:P(e.style)},{default:y(()=>[I(L(e.$props.label),1)]),_:1},8,["style"])):q("",!0),e.$props.label&&e.$props.required?(V(),C(T,{key:1,class:"fs-text-area-label",style:P([{"margin-left":"-8px"},e.style]),font:"text-overline",ellipsis:!1},{default:y(()=>[I(" * ")]),_:1},8,["style"])):q("",!0),r(Be,{style:{"min-width":"40px"}}),e.messages.length>0?(V(),C(T,{key:2,class:"fs-text-area-messages",font:"text-overline",style:P(e.style)},{default:y(()=>[I(L(e.messages.join(", ")),1)]),_:1},8,["style"])):q("",!0)]),_:1})]),r(tt,H({clearIcon:"mdi-close",variant:"outlined","hide-details":"",style:e.style,class:e.classes,rows:e.$props.rows,rules:e.$props.rules,noResize:!e.$props.resize,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=u=>e.$emit("update:modelValue",u))},e.$attrs),ke({_:2},[Ae(e.$slots,(u,x)=>({name:x,fn:y(a=>[K(e.$slots,x,$e(ze(a)))])}))]),1040,["style","class","rows","rules","noResize","autoGrow","readonly","clearable","modelValue"]),K(e.$slots,"description",{},()=>[e.$props.description?(V(),C(T,{key:0,class:"fs-text-area-description",font:"text-underline",style:P(e.style)},{default:y(()=>[I(L(e.$props.description),1)]),_:1},8,["style"])):q("",!0)])]),_:3})}const W=Ge(fe,[["render",at]]);fe.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"resize",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"Function[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"label"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]},{name:"description"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTextArea.vue"]};const $t={title:"Foundation/Shared/Input fields/TextArea",component:W,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},G={args:{args:{value1:null,value2:"Hello there",value3:null,value4:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:n})=>({components:{FSTextArea:W,FSCol:N},props:Object.keys(n),setup(){return{...e}},template:`
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
    </FSCol>`})},B={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Ie}},render:(e,{argTypes:n})=>({components:{VForm:Ze,FSTextArea:W,FSCol:N,FSRow:Q},props:Object.keys(n),setup(){return{...e}},template:`
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
    </v-form>`})};var se,ne,ie;G.parameters={...G.parameters,docs:{...(se=G.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(ne=G.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ue,de,ce;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ce=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const zt=["Variations","Rules"];export{B as Rules,G as Variations,zt as __namedExportsOrder,$t as default};
