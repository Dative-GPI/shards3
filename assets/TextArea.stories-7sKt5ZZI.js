import{c as v,b as V,s as pe,j as ve,o as ge,w as C,v as be,I as o,m as G,F as U,X as _,Y as xe,a6 as ye,n as D,d as Fe,y as he,z as J,A as X,B as $,M as we,N as Se,J as Ve,K as Ce,L as qe,D as Te}from"./vue.esm-bundler-DC82FEWN.js";import{m as Re,f as ke,V as $e,a as Ae,F as Be}from"./VField-CQBU8LtE.js";import{_ as I}from"./FSCol-B7HQy3FB.js";import{u as Pe}from"./useRules-DS9e5-1Q.js";import{u as Ge}from"./css-DYOPUjjE.js";import{u as Ie,C as A}from"./useColors-WxHDk9aB.js";import{_ as He}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Ne}from"./FSButton-cgjePGb6.js";import{a as Me,u as Oe,V as Q}from"./VInput-BvcCh06W.js";import{f as ze}from"./forwardRefs-DWGaNmQL.js";import{u as Ue}from"./proxiedModel-CYw7-KgF.js";import{I as De}from"./index-yKNzK_fJ.js";import{p as Ee,u as je,v as Ke,c as Le,x as Ye}from"./theme-CDGAP9oX.js";import{g as _e,u as Je}from"./color-BhlhQtQT.js";import{F as Xe}from"./FSForm-A_xyKD4e.js";import{_ as Qe}from"./FSRow-DoCXWKDP.js";import{T as We}from"./rules-DlyQ2XjG.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./VSpacer-CMZ7Jymr.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VIcon-uFUcYN4x.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./locale-BC9z6YbT.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./FSClickable-CvEctr0N.js";import"./FSCard-TPuCZi-6.js";import"./FSIcon-CqTsM4Lx.js";import"./density-XYshZx8z.js";import"./useAppTimeZone-SgthjzoP.js";import"./useTranslations-DV-taHAL.js";import"./time-xMV0WbLU.js";const Ze=Ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Me(),...Re()},"VTextarea"),ea=_e()({name:"VTextarea",directives:{Intersect:De},inheritAttrs:!1,props:Ze(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:g,emit:b,slots:t}=s;const r=Ue(e,"modelValue"),{isFocused:n,focus:c,blur:x}=Oe(e),w=v(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),H=v(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function i(a,u){var l,d;!e.autofocus||!a||(d=(l=u[0].target)==null?void 0:l.focus)==null||d.call(l)}const y=V(),p=V(),S=pe(""),q=V(),oe=v(()=>e.persistentPlaceholder||n.value||e.active);function N(){var a;q.value!==document.activeElement&&((a=q.value)==null||a.focus()),n.value||c()}function se(a){N(),b("click:control",a)}function ne(a){b("mousedown:control",a)}function ue(a){a.stopPropagation(),N(),D(()=>{r.value="",Ke(e["onClick:clear"],a)})}function ie(a){var l;const u=a.target;if(r.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const d=[u.selectionStart,u.selectionEnd];D(()=>{u.selectionStart=d[0],u.selectionEnd=d[1]})}}const F=V(),T=V(+e.rows),M=v(()=>["plain","underlined"].includes(e.variant));ve(()=>{e.autoGrow||(T.value=+e.rows)});function h(){e.autoGrow&&D(()=>{if(!F.value||!p.value)return;const a=getComputedStyle(F.value),u=getComputedStyle(p.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),d=F.value.scrollHeight,R=parseFloat(a.lineHeight),O=Math.max(parseFloat(e.rows)*R+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*R+l||1/0,m=Ye(d??0,O,z);T.value=Math.floor((m-l)/R),S.value=Le(m)})}ge(h),C(r,h),C(()=>e.rows,h),C(()=>e.maxRows,h),C(()=>e.density,h);let f;return C(F,a=>{a?(f=new ResizeObserver(h),f.observe(F.value)):f==null||f.disconnect()}),be(()=>{f==null||f.disconnect()}),Je(()=>{const a=!!(t.counter||e.counter||e.counterValue),u=!!(a||t.details),[l,d]=je(g),{modelValue:R,...O}=Q.filterProps(e),z=ke(e);return o(Q,G({ref:y,modelValue:r.value,"onUpdate:modelValue":m=>r.value=m,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":M.value},e.class],style:e.style},l,O,{centerAffix:T.value===1&&!M.value,focused:n.value}),{...t,default:m=>{let{id:k,isDisabled:j,isDirty:K,isReadonly:de,isValid:ce}=m;return o($e,G({ref:p,style:{"--v-textarea-control-height":S.value},onClick:se,onMousedown:ne,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{id:k.value,active:oe.value||K.value,centerAffix:T.value===1&&!M.value,dirty:K.value||e.dirty,disabled:j.value,focused:n.value,error:ce.value===!1}),{...t,default:fe=>{let{props:{class:L,...Y}}=fe;return o(U,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),_(o("textarea",G({ref:q,class:L,value:r.value,onInput:ie,autofocus:e.autofocus,readonly:de.value,disabled:j.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:N,onBlur:x},Y,d),null),[[xe("intersect"),{handler:i},null,{once:!0}]]),e.autoGrow&&_(o("textarea",{class:[L,"v-textarea__sizer"],id:`${Y.id}-sizer`,"onUpdate:modelValue":me=>r.value=me,ref:F,readonly:!0,"aria-hidden":"true"},null),[[ye,r.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?m=>{var k;return o(U,null,[(k=t.details)==null?void 0:k.call(t,m),a&&o(U,null,[o("span",null,null),o(Ae,{active:e.persistentCounter||n.value,value:w.value,max:H.value},t.counter)])])}:void 0})}),ze({},y,p,q)}}),le=Fe({name:"FSTextArea",components:{FSBaseField:Be,FSCol:I},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:s,getMessages:g}=Pe(),{isMobileSized:b}=Ge(),{getColors:t}=Ie(),r=t(A.Error),n=t(A.Light),c=t(A.Dark),x=v(()=>{let i,y;if(!e.autoGrow){const p=b.value?34:38,S=b.value?14:16;e.rows>1?i=`${p+(e.rows-1)*S}px`:i=`${p}px`,y=`${e.rows*S}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":n.dark,"--fs-text-area-color":c.base,"--fs-text-area-active-border-color":c.dark,"--fs-text-area-error-border-color":r.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":n.base,"--fs-text-area-color":n.dark,"--fs-text-area-active-border-color":n.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}}),w=v(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),H=v(()=>e.messages??g(e.modelValue,e.rules));return{validateOn:s,ColorEnum:A,messages:H,classes:w,style:x}}});function aa(e,s,g,b,t,r){const n=he("FSBaseField");return J(),X(n,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:$(()=>[o(ea,G({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,persistentClear:!0,hideDetails:!0,noResize:!0,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[1]||(s[1]=c=>e.$emit("update:modelValue",c))},e.$attrs),we({clear:$(()=>[o(I,{align:"center-center"},{default:$(()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(J(),X(Ne,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:s[0]||(s[0]=c=>e.$emit("update:modelValue",null))},null,8,["color"])):Te("",!0)]),_:1})]),_:2},[Se(e.$slots,(c,x)=>({name:x,fn:$(w=>[Ve(e.$slots,x,Ce(qe(w)))])}))]),1040,["style","class","rows","autoGrow","readonly","clearable","rules","validateOn","modelValue"])]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const E=He(le,[["render",aa]]);le.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const Ua={title:"Foundation/Shared/Input fields/TextArea",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},B={args:{args:{value1:null,value2:"Hello there",value3:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:s})=>({components:{FSTextArea:E,FSCol:I},props:Object.keys(s),setup(){return{...e}},template:`
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
    </FSCol>`})},P={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:We}},render:(e,{argTypes:s})=>({components:{FSForm:Xe,FSTextArea:E,FSCol:I,FSRow:Qe},props:Object.keys(s),setup(){return{...e}},template:`
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
    </FSForm>`})};var W,Z,ee;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(re=(te=P.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Da=["Variations","Rules"];export{P as Rules,B as Variations,Da as __namedExportsOrder,Ua as default};
