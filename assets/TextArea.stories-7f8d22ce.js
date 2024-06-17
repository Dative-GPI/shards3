import{g as v,j as V,s as pe,l as ve,o as ge,w as C,m as be,P as o,A as G,J as z,$ as Y,a0 as xe,a7 as ye,n as E,f as Fe,D as he,E as _,F as Q,G as k,U as we,V as Se,Q as Ve,R as Ce,S as qe,I as Te}from"./vue.esm-bundler-6f923154.js";import{m as Re,f as $e,V as ke,a as Ae,F as Pe}from"./VField-d1f54092.js";import{_ as I}from"./FSCol-5ed907ac.js";import{u as Be}from"./useRules-8e3c4a4a.js";import{u as Ge}from"./css-0cf2e273.js";import{u as Ie,C as A}from"./useColors-9144d90e.js";import{_ as He}from"./_plugin-vue_export-helper-c27b6911.js";import{F as Ne}from"./FSButton-ff673895.js";import{a as Oe,u as Me,V as W}from"./VInput-125993fa.js";import{f as Ue}from"./forwardRefs-e658ad70.js";import{u as ze}from"./proxiedModel-c8904091.js";import{I as Ee}from"./index-114ba00f.js";import{p as De,J as je,K as Ke,c as Je,a as Le}from"./theme-a8226b2e.js";import{g as Ye,u as _e}from"./useRender-1cb09274.js";import{F as Qe}from"./FSForm-7d2059d4.js";import{_ as We}from"./FSRow-64caadb9.js";import{T as Xe}from"./rules-56abbd16.js";import"./FSSpan-7bb94541.js";import"./useSlots-21493751.js";import"./VSpacer-54f0d5ce.js";import"./index-4caca680.js";import"./transition-e76cd387.js";import"./VLabel-737017e3.js";import"./color-a262cadc.js";import"./tag-a7b67944.js";import"./loader-1a97481f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./VIcon-d1c19518.js";import"./locale-577543b5.js";import"./anchor-52e92869.js";import"./rounded-1f8e51a9.js";import"./VDefaultsProvider-a08a9a42.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSClickable-e71ee20f.js";import"./FSCard-32925b42.js";import"./FSIcon-93774118.js";import"./density-03404b67.js";import"./dimensions-dec12c77.js";import"./useAppTimeZone-dc793336.js";import"./useTranslations-59cd146d.js";const Ze=De({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Oe(),...Re()},"VTextarea"),ea=Ye()({name:"VTextarea",directives:{Intersect:Ee},inheritAttrs:!1,props:Ze(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:g,emit:b,slots:t}=s;const r=ze(e,"modelValue"),{isFocused:n,focus:c,blur:x}=Me(e),w=v(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),H=v(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function i(a,u){var l,d;!e.autofocus||!a||(d=(l=u[0].target)==null?void 0:l.focus)==null||d.call(l)}const y=V(),p=V(),S=pe(""),q=V(),oe=v(()=>e.persistentPlaceholder||n.value||e.active);function N(){var a;q.value!==document.activeElement&&((a=q.value)==null||a.focus()),n.value||c()}function se(a){N(),b("click:control",a)}function ne(a){b("mousedown:control",a)}function ue(a){a.stopPropagation(),N(),E(()=>{r.value="",Ke(e["onClick:clear"],a)})}function ie(a){var l;const u=a.target;if(r.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const d=[u.selectionStart,u.selectionEnd];E(()=>{u.selectionStart=d[0],u.selectionEnd=d[1]})}}const F=V(),T=V(+e.rows),O=v(()=>["plain","underlined"].includes(e.variant));ve(()=>{e.autoGrow||(T.value=+e.rows)});function h(){e.autoGrow&&E(()=>{if(!F.value||!p.value)return;const a=getComputedStyle(F.value),u=getComputedStyle(p.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),d=F.value.scrollHeight,R=parseFloat(a.lineHeight),M=Math.max(parseFloat(e.rows)*R+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),U=parseFloat(e.maxRows)*R+l||1/0,f=Le(d??0,M,U);T.value=Math.floor((f-l)/R),S.value=Je(f)})}ge(h),C(r,h),C(()=>e.rows,h),C(()=>e.maxRows,h),C(()=>e.density,h);let m;return C(F,a=>{a?(m=new ResizeObserver(h),m.observe(F.value)):m==null||m.disconnect()}),be(()=>{m==null||m.disconnect()}),_e(()=>{const a=!!(t.counter||e.counter||e.counterValue),u=!!(a||t.details),[l,d]=je(g),{modelValue:R,...M}=W.filterProps(e),U=$e(e);return o(W,G({ref:y,modelValue:r.value,"onUpdate:modelValue":f=>r.value=f,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":O.value},e.class],style:e.style},l,M,{centerAffix:T.value===1&&!O.value,focused:n.value}),{...t,default:f=>{let{id:$,isDisabled:j,isDirty:K,isReadonly:de,isValid:ce}=f;return o(ke,G({ref:p,style:{"--v-textarea-control-height":S.value},onClick:se,onMousedown:ne,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},U,{id:$.value,active:oe.value||K.value,centerAffix:T.value===1&&!O.value,dirty:K.value||e.dirty,disabled:j.value,focused:n.value,error:ce.value===!1}),{...t,default:me=>{let{props:{class:J,...L}}=me;return o(z,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),Y(o("textarea",G({ref:q,class:J,value:r.value,onInput:ie,autofocus:e.autofocus,readonly:de.value,disabled:j.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:N,onBlur:x},L,d),null),[[xe("intersect"),{handler:i},null,{once:!0}]]),e.autoGrow&&Y(o("textarea",{class:[J,"v-textarea__sizer"],id:`${L.id}-sizer`,"onUpdate:modelValue":fe=>r.value=fe,ref:F,readonly:!0,"aria-hidden":"true"},null),[[ye,r.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?f=>{var $;return o(z,null,[($=t.details)==null?void 0:$.call(t,f),a&&o(z,null,[o("span",null,null),o(Ae,{active:e.persistentCounter||n.value,value:w.value,max:H.value,disabled:e.disabled},t.counter)])])}:void 0})}),Ue({},y,p,q)}}),le=Fe({name:"FSTextArea",components:{FSBaseField:Pe,FSCol:I},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:s,getMessages:g}=Be(),{isMobileSized:b}=Ge(),{getColors:t}=Ie(),r=t(A.Error),n=t(A.Light),c=t(A.Dark),x=v(()=>{let i,y;if(!e.autoGrow){const p=b.value?34:38,S=b.value?14:16;e.rows>1?i=`${p+(e.rows-1)*S}px`:i=`${p}px`,y=`${e.rows*S}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":n.dark,"--fs-text-area-color":c.base,"--fs-text-area-active-border-color":c.dark,"--fs-text-area-error-border-color":r.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":n.base,"--fs-text-area-color":n.dark,"--fs-text-area-active-border-color":n.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}}),w=v(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),H=v(()=>e.messages??g(e.modelValue,e.rules));return{validateOn:s,ColorEnum:A,messages:H,classes:w,style:x}}});function aa(e,s,g,b,t,r){const n=he("FSBaseField");return _(),Q(n,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:k(()=>[o(ea,G({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,persistentClear:!0,hideDetails:!0,noResize:!0,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[1]||(s[1]=c=>e.$emit("update:modelValue",c))},e.$attrs),we({clear:k(()=>[o(I,{align:"center-center"},{default:k(()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(_(),Q(Ne,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:s[0]||(s[0]=c=>e.$emit("update:modelValue",null))},null,8,["color"])):Te("",!0)]),_:1})]),_:2},[Se(e.$slots,(c,x)=>({name:x,fn:k(w=>[Ve(e.$slots,x,Ce(qe(w)))])}))]),1040,["style","class","rows","autoGrow","readonly","clearable","rules","validateOn","modelValue"])]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const D=He(le,[["render",aa]]);le.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const ja={title:"Foundation/Shared/Input fields/TextArea",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},P={args:{args:{value1:null,value2:"Hello there",value3:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:s})=>({components:{FSTextArea:D,FSCol:I},props:Object.keys(s),setup(){return{...e}},template:`
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
    </FSCol>`})},B={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:Xe}},render:(e,{argTypes:s})=>({components:{FSForm:Qe,FSTextArea:D,FSCol:I,FSRow:We},props:Object.keys(s),setup(){return{...e}},template:`
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
    </FSForm>`})};var X,Z,ee;P.parameters={...P.parameters,docs:{...(X=P.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=B.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Ka=["Variations","Rules"];export{B as Rules,P as Variations,Ka as __namedExportsOrder,ja as default};
