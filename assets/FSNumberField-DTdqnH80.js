import{d as s,z as d,A as u,B as f,O as c,m as b,C as F,K as V,L as h,M as N}from"./vue.esm-bundler-CWdIlc2r.js";import{F as i}from"./FSTextField-D5y-h9FL.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-CMqv-0AW.js";import"./FSSpan-DpOLTsx1.js";import"./css-DVhR3h-A.js";import"./useSlots-zwOl0abH.js";import"./FSCol-Bj1WIVag.js";import"./FSRow-D4JfwQlG.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSIcon-vAlkpflo.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";const m=s({name:"FSNumberField",components:{FSTextField:i},props:{modelValue:{type:Number,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){return{onUpdate:t=>{if(t==="-")return;const o=/[-]?([0-9 ]*[,.]?)?[0-9]*/.exec(t);if(o!=null&&!isNaN(parseFloat(o[0].replace(",",".").replace(" ","")))){r("update:modelValue",parseFloat(o[0].replace(",",".").replace(" ","")));return}r("update:modelValue",0)}}}});function S(e,r,l,t,o,_){var a;return d(),u(i,b({class:"fs-number-field",minWidth:"80px",editable:e.$props.editable,modelValue:(a=e.$props.modelValue)==null?void 0:a.toString(),"onUpdate:modelValue":e.onUpdate},e.$attrs),f({_:2},[c(e.$slots,(g,p)=>({name:p,fn:F(n=>[V(e.$slots,p,h(N(n)))])}))]),1040,["editable","modelValue","onUpdate:modelValue"])}const le=$(m,[["render",S]]);m.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSNumberField.vue"]};export{le as default};
