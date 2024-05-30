import{g as b,j as V,s as pe,l as ve,o as ge,w as C,m as be,A as o,B as P,F as U,C as J,D as xe,a7 as ye,n as D,f as Fe,I as we,J as Q,K as X,L as $,X as he,Y as Se,V as Ve,Q as Ce,R as qe,N as Te}from"./vue.esm-bundler-cd768bc3.js";import{m as Re,f as $e,V as ke,a as Ae,F as Be}from"./VField-4a160336.js";import{_ as G}from"./FSCol-ff457bc3.js";import{u as Pe}from"./useRules-bb9e9594.js";import{u as Ge}from"./css-c2ea3b68.js";import{u as Ie,C as k}from"./useColors-91ab292c.js";import{_ as He}from"./_plugin-vue_export-helper-c27b6911.js";import{F as Ne}from"./FSButton-7364cb00.js";import{m as Oe,u as Me,V as W}from"./VInput-28424714.js";import{f as ze}from"./forwardRefs-e658ad70.js";import{u as Ue}from"./proxiedModel-80cf7d0e.js";import{I as De}from"./index-cc35ebf5.js";import{p as Ee,l as je,n as Ke,c as Le,a as Ye}from"./theme-33f5ac1a.js";import{g as Je,u as Qe}from"./useRender-d216bc3f.js";import{F as Xe}from"./FSForm-2d7638c3.js";import{_ as We}from"./FSRow-1d7c2545.js";import{a as Ze}from"./rules-fd87a465.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./VSpacer-a30a0a7c.js";import"./index-b97c70d5.js";import"./transition-2948fa2b.js";import"./VLabel-ac265b88.js";import"./color-4e667524.js";import"./tag-f5ad2c5e.js";import"./loader-e29f326e.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./VIcon-95cdbe21.js";import"./locale-d1b7e37d.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-ff78bc14.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-8effe836.js";import"./FSCard-0de7b634.js";import"./FSIcon-5671b33c.js";import"./density-80e773e2.js";import"./dimensions-9d1d90d7.js";import"./useAppTimeZone-d6a8f46f.js";import"./useTranslations-3c37761e.js";const _e=Ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Oe(),...Re()},"VTextarea"),ea=Je()({name:"VTextarea",directives:{Intersect:De},inheritAttrs:!1,props:_e(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,r){let{attrs:x,emit:w,slots:s}=r;const t=Ue(e,"modelValue"),{isFocused:d,focus:n,blur:v}=Me(e),h=b(()=>typeof e.counterValue=="function"?e.counterValue(t.value):(t.value||"").toString().length),I=b(()=>{if(x.maxlength)return x.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function H(a,u){var l,c;!e.autofocus||!a||(c=(l=u[0].target)==null?void 0:l.focus)==null||c.call(l)}const i=V(),m=V(),S=pe(""),g=V(),oe=b(()=>e.persistentPlaceholder||d.value||e.active);function N(){var a;g.value!==document.activeElement&&((a=g.value)==null||a.focus()),d.value||n()}function se(a){N(),w("click:control",a)}function ne(a){w("mousedown:control",a)}function ue(a){a.stopPropagation(),N(),D(()=>{t.value="",Ke(e["onClick:clear"],a)})}function ie(a){var l;const u=a.target;if(t.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const c=[u.selectionStart,u.selectionEnd];D(()=>{u.selectionStart=c[0],u.selectionEnd=c[1]})}}const y=V(),q=V(+e.rows),O=b(()=>["plain","underlined"].includes(e.variant));ve(()=>{e.autoGrow||(q.value=+e.rows)});function F(){e.autoGrow&&D(()=>{if(!y.value||!m.value)return;const a=getComputedStyle(y.value),u=getComputedStyle(m.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),c=y.value.scrollHeight,T=parseFloat(a.lineHeight),M=Math.max(parseFloat(e.rows)*T+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*T+l||1/0,p=Ye(c??0,M,z);q.value=Math.floor((p-l)/T),S.value=Le(p)})}ge(F),C(t,F),C(()=>e.rows,F),C(()=>e.maxRows,F),C(()=>e.density,F);let f;return C(y,a=>{a?(f=new ResizeObserver(F),f.observe(y.value)):f==null||f.disconnect()}),be(()=>{f==null||f.disconnect()}),Qe(()=>{const a=!!(s.counter||e.counter||e.counterValue),u=!!(a||s.details),[l,c]=je(x),{modelValue:T,...M}=W.filterProps(e),z=$e(e);return o(W,P({ref:i,modelValue:t.value,"onUpdate:modelValue":p=>t.value=p,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":O.value},e.class],style:e.style},l,M,{centerAffix:q.value===1&&!O.value,focused:d.value}),{...s,default:p=>{let{id:R,isDisabled:j,isDirty:K,isReadonly:de,isValid:ce}=p;return o(ke,P({ref:m,style:{"--v-textarea-control-height":S.value},onClick:se,onMousedown:ne,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{id:R.value,active:oe.value||K.value,centerAffix:q.value===1&&!O.value,dirty:K.value||e.dirty,disabled:j.value,focused:d.value,error:ce.value===!1}),{...s,default:me=>{let{props:{class:L,...Y}}=me;return o(U,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),J(o("textarea",P({ref:g,class:L,value:t.value,onInput:ie,autofocus:e.autofocus,readonly:de.value,disabled:j.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:N,onBlur:v},Y,c),null),[[xe("intersect"),{handler:H},null,{once:!0}]]),e.autoGrow&&J(o("textarea",{class:[L,"v-textarea__sizer"],id:`${Y.id}-sizer`,"onUpdate:modelValue":fe=>t.value=fe,ref:y,readonly:!0,"aria-hidden":"true"},null),[[ye,t.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?p=>{var R;return o(U,null,[(R=s.details)==null?void 0:R.call(s,p),a&&o(U,null,[o("span",null,null),o(Ae,{active:e.persistentCounter||d.value,value:h.value,max:I.value,disabled:e.disabled},s.counter)])])}:void 0})}),ze({},i,m,g)}}),le=Fe({name:"FSTextArea",components:{FSBaseField:Be,FSCol:G},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:r,blurred:x,getMessages:w}=Pe(),{isMobileSized:s}=Ge(),{getColors:t}=Ie(),d=t(k.Error),n=t(k.Light),v=t(k.Dark),h=b(()=>{let i,m;if(!e.autoGrow){const S=s.value?34:38,g=s.value?14:16;e.rows>1?i=`${S+(e.rows-1)*g}px`:i=`${S}px`,m=`${e.rows*g}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":n.dark,"--fs-text-area-color":v.base,"--fs-text-area-active-border-color":v.dark,"--fs-text-area-error-border-color":d.base,"--fs-text-area-height":i,"--fs-text-area-field-height":m}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":n.base,"--fs-text-area-color":n.dark,"--fs-text-area-active-border-color":n.base,"--fs-text-area-height":i,"--fs-text-area-field-height":m}}),I=b(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),H=b(()=>e.messages??w(e.modelValue,e.rules));return{validateOn:r,ColorEnum:k,messages:H,blurred:x,classes:I,style:h}}});function aa(e,r,x,w,s,t){const d=we("FSBaseField");return Q(),X(d,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:$(()=>[o(ea,P({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,hideDetails:!0,noResize:!0,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":r[1]||(r[1]=n=>e.$emit("update:modelValue",n)),onBlur:r[2]||(r[2]=n=>e.blurred=!0)},e.$attrs),he({clear:$(()=>[o(G,{align:"center-center"},{default:$(()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(Q(),X(Ne,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:r[0]||(r[0]=n=>e.$emit("update:modelValue",null))},null,8,["color"])):Te("",!0)]),_:1})]),_:2},[Se(e.$slots,(n,v)=>({name:v,fn:$(h=>[Ve(e.$slots,v,Ce(qe(h)))])}))]),1040,["style","class","rows","autoGrow","readonly","clearable","rules","validateOn","modelValue"])]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const E=He(le,[["render",aa]]);le.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const ja={title:"Foundation/Shared/Input fields/TextArea",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},A={args:{args:{value1:null,value2:"Hello there",value3:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:r})=>({components:{FSTextArea:E,FSCol:G},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTextArea
        label="Text, auto grow"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :rows="1"
        v-model="args.value3"
      />
    </FSCol>`})},B={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Ze}},render:(e,{argTypes:r})=>({components:{FSForm:Xe,FSTextArea:E,FSCol:G,FSRow:We},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSForm>`})};var Z,_,ee;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi\\r\\nYou are a bold one!"
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
        label="Text, auto grow"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :rows="1"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(ee=(_=A.parameters)==null?void 0:_.docs)==null?void 0:ee.source}}};var ae,te,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=B.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Ka=["Variations","Rules"];export{B as Rules,A as Variations,Ka as __namedExportsOrder,ja as default};
