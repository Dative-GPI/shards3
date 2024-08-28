import{d as s,z as d,A as u,M as f,N as c,m as b,B as F,I as V,J as N,K as $}from"./vue.esm-bundler--l9E1zCM.js";import{F as i}from"./FSTextField-COs2079Q.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-W8_0_iOs.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSCol-BA_LQqMv.js";import"./css-CqyMbT8T.js";import"./FSRow-DW_Nd3uI.js";import"./useColors-Bv0V9Qz7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./FSButton-B-GBc2hj.js";import"./FSClickable-wwot-1GZ.js";import"./FSCard-CJMrkqFE.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./FSIcon-DBiV-GrJ.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";const m=s({name:"FSNumberField",components:{FSTextField:i},props:{modelValue:{type:Number,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){return{onUpdate:t=>{if(t==="-")return;const o=/[-]?([0-9 ]*[,.]?)?[0-9]*/.exec(t);if(o!=null&&!isNaN(parseFloat(o[0].replace(",",".").replace(" ","")))){r("update:modelValue",parseFloat(o[0].replace(",",".").replace(" ","")));return}r("update:modelValue",0)}}}});function S(e,r,l,t,o,_){var a;return d(),u(i,b({class:"fs-number-field",editable:e.$props.editable,modelValue:(a=e.$props.modelValue)==null?void 0:a.toString(),"onUpdate:modelValue":e.onUpdate},e.$attrs),f({_:2},[c(e.$slots,(g,p)=>({name:p,fn:F(n=>[V(e.$slots,p,N($(n)))])}))]),1040,["editable","modelValue","onUpdate:modelValue"])}const me=h(m,[["render",S]]);m.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSNumberField.vue"]};export{me as default};