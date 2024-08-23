import{c as v,b as V,s as pe,j as ve,o as ge,w as C,v as be,L as o,m as G,F as U,X as _,Y as xe,a6 as ye,n as D,d as Fe,y as he,z as J,A as X,B as $,M as we,N as Se,I as Ve,J as Ce,K as qe,D as Te}from"./vue.esm-bundler-BATn8cDU.js";import{F as Re}from"./FSBaseField-Dd85ojn4.js";import{_ as I}from"./FSCol-D9tDKebi.js";import{u as ke}from"./useRules-C6ry6kys.js";import{u as $e}from"./css-C5boehQC.js";import{u as Ae,C as A}from"./useColors-BHn59yMM.js";import{_ as Be}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Pe}from"./FSButton-CvqXFT9l.js";import{m as Ge,f as Ie,V as He,a as Ne}from"./VField-36dIboNy.js";import{a as Me,u as Oe,V as Q}from"./VInput-sarfrtTX.js";import{f as ze}from"./forwardRefs-DWGaNmQL.js";import{u as Ue}from"./proxiedModel-D0bPfire.js";import{I as De}from"./index-Bv2UUMCu.js";import{p as Ee,s as je,u as Ke,c as Le,v as Ye}from"./theme-C-7Kj0lB.js";import{g as _e,u as Je}from"./color-jM82jTdX.js";import{F as Xe}from"./FSForm-DmQ-ofLg.js";import{_ as Qe}from"./FSRow-Gvoj2sTW.js";import{T as We}from"./rules-CFwU2wVR.js";import"./FSSpan-C8YxV3Vj.js";import"./useSlots-iSUV1mlj.js";import"./VSpacer-Bp_e_Kvt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./FSClickable-B9o4BEyu.js";import"./FSCard-DuDQq8Pz.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VIcon-BgP_kyAH.js";import"./FSIcon-CM3DCfji.js";import"./index-BJgqyIck.js";import"./transition-O2x8Myu8.js";import"./VLabel-Bh2Q5uKK.js";import"./loader-YJ_823dI.js";import"./locale-Cm_eUAdw.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./density-BzC6UB2b.js";import"./useAppTimeZone-DiegiNYY.js";import"./useAppLanguageCode-B8bYxE1s.js";import"./useTranslations-C_i4rqaX.js";import"./time-DZLPB9rY.js";const Ze=Ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Me(),...Ge()},"VTextarea"),ea=_e()({name:"VTextarea",directives:{Intersect:De},inheritAttrs:!1,props:Ze(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:g,emit:b,slots:t}=s;const r=Ue(e,"modelValue"),{isFocused:n,focus:c,blur:x}=Oe(e),w=v(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),H=v(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function i(a,u){var l,d;!e.autofocus||!a||(d=(l=u[0].target)==null?void 0:l.focus)==null||d.call(l)}const y=V(),p=V(),S=pe(""),q=V(),oe=v(()=>e.persistentPlaceholder||n.value||e.active);function N(){var a;q.value!==document.activeElement&&((a=q.value)==null||a.focus()),n.value||c()}function se(a){N(),b("click:control",a)}function ne(a){b("mousedown:control",a)}function ue(a){a.stopPropagation(),N(),D(()=>{r.value="",Ke(e["onClick:clear"],a)})}function ie(a){var l;const u=a.target;if(r.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const d=[u.selectionStart,u.selectionEnd];D(()=>{u.selectionStart=d[0],u.selectionEnd=d[1]})}}const F=V(),T=V(+e.rows),M=v(()=>["plain","underlined"].includes(e.variant));ve(()=>{e.autoGrow||(T.value=+e.rows)});function h(){e.autoGrow&&D(()=>{if(!F.value||!p.value)return;const a=getComputedStyle(F.value),u=getComputedStyle(p.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),d=F.value.scrollHeight,R=parseFloat(a.lineHeight),O=Math.max(parseFloat(e.rows)*R+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*R+l||1/0,f=Ye(d??0,O,z);T.value=Math.floor((f-l)/R),S.value=Le(f)})}ge(h),C(r,h),C(()=>e.rows,h),C(()=>e.maxRows,h),C(()=>e.density,h);let m;return C(F,a=>{a?(m=new ResizeObserver(h),m.observe(F.value)):m==null||m.disconnect()}),be(()=>{m==null||m.disconnect()}),Je(()=>{const a=!!(t.counter||e.counter||e.counterValue),u=!!(a||t.details),[l,d]=je(g),{modelValue:R,...O}=Q.filterProps(e),z=Ie(e);return o(Q,G({ref:y,modelValue:r.value,"onUpdate:modelValue":f=>r.value=f,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":M.value},e.class],style:e.style},l,O,{centerAffix:T.value===1&&!M.value,focused:n.value}),{...t,default:f=>{let{id:k,isDisabled:j,isDirty:K,isReadonly:de,isValid:ce}=f;return o(He,G({ref:p,style:{"--v-textarea-control-height":S.value},onClick:se,onMousedown:ne,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{id:k.value,active:oe.value||K.value,centerAffix:T.value===1&&!M.value,dirty:K.value||e.dirty,disabled:j.value,focused:n.value,error:ce.value===!1}),{...t,default:me=>{let{props:{class:L,...Y}}=me;return o(U,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),_(o("textarea",G({ref:q,class:L,value:r.value,onInput:ie,autofocus:e.autofocus,readonly:de.value,disabled:j.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:N,onBlur:x},Y,d),null),[[xe("intersect"),{handler:i},null,{once:!0}]]),e.autoGrow&&_(o("textarea",{class:[L,"v-textarea__sizer"],id:`${Y.id}-sizer`,"onUpdate:modelValue":fe=>r.value=fe,ref:F,readonly:!0,"aria-hidden":"true"},null),[[ye,r.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?f=>{var k;return o(U,null,[(k=t.details)==null?void 0:k.call(t,f),a&&o(U,null,[o("span",null,null),o(Ne,{active:e.persistentCounter||n.value,value:w.value,max:H.value},t.counter)])])}:void 0})}),ze({},y,p,q)}}),le=Fe({name:"FSTextArea",components:{FSBaseField:Re,FSCol:I},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:s,getMessages:g}=ke(),{isMobileSized:b}=$e(),{getColors:t}=Ae(),r=t(A.Error),n=t(A.Light),c=t(A.Dark),x=v(()=>{let i,y;if(!e.autoGrow){const p=b.value?34:38,S=b.value?14:16;e.rows>1?i=`${p+(e.rows-1)*S}px`:i=`${p}px`,y=`${e.rows*S}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":n.dark,"--fs-text-area-color":c.base,"--fs-text-area-active-border-color":c.dark,"--fs-text-area-error-border-color":r.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":n.base,"--fs-text-area-color":n.dark,"--fs-text-area-active-border-color":n.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}}),w=v(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),H=v(()=>e.messages??g(e.modelValue,e.rules));return{validateOn:s,ColorEnum:A,messages:H,classes:w,style:x}}});function aa(e,s,g,b,t,r){const n=he("FSBaseField");return J(),X(n,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:$(()=>[o(ea,G({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,persistentClear:!0,hideDetails:!0,noResize:!0,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[1]||(s[1]=c=>e.$emit("update:modelValue",c))},e.$attrs),we({clear:$(()=>[o(I,{align:"center-center"},{default:$(()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(J(),X(Pe,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:s[0]||(s[0]=c=>e.$emit("update:modelValue",null))},null,8,["color"])):Te("",!0)]),_:1})]),_:2},[Se(e.$slots,(c,x)=>({name:x,fn:$(w=>[Ve(e.$slots,x,Ce(qe(w)))])}))]),1040,["style","class","rows","autoGrow","readonly","clearable","rules","validateOn","modelValue"])]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const E=Be(le,[["render",aa]]);le.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const Ea={title:"Foundation/Shared/Input fields/TextArea",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},B={args:{args:{value1:null,value2:"Hello there",value3:`General Kenobi\r
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
}`,...(re=(te=P.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const ja=["Variations","Rules"];export{P as Rules,B as Variations,ja as __namedExportsOrder,Ea as default};
