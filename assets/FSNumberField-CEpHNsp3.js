import{d as s,B as d,C as u,Q as f,j as c,I as b,D as F,M as V,N,O as h}from"./vue.esm-bundler-DSwHwgKw.js";import{F as i}from"./FSTextField-C1PHWLgt.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-Cv6zgx5K.js";import"./FSSpan-BoXQ4lG9.js";import"./useBreakpoints-BjF6TIJH.js";import"./useSlots-CKCq4R6P.js";import"./FSCol-DdGVae5t.js";import"./css-XXwFKvUE.js";import"./FSRow-BtkEywPN.js";import"./useColors-DygOvNHW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-4AjdAhIV.js";import"./FSButton-CZktm7s_.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-DelSIl2e.js";import"./FSCard-CWjVUhn7.js";import"./VProgressCircular-Cd-wheNV.js";import"./color-uBYwhjku.js";import"./resizeObserver-A1vWEG-J.js";import"./VIcon-CdjjMQ6V.js";import"./FSIcon-CEKLJFZW.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./index-GTe7atjb.js";import"./transition--2cAMn_j.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./locale-BsRwbRmi.js";import"./density-BfjPyHiq.js";import"./dimensions-CF0PFV-D.js";import"./proxiedModel-D4Pgijkw.js";import"./form-BWUCG2_i.js";import"./loader-kTKV0tNq.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";const m=s({name:"FSNumberField",components:{FSTextField:i},props:{modelValue:{type:Number,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){return{onUpdate:o=>{if(o==="-")return;if(o==null){r("update:modelValue",null);return}const t=/[-]?([0-9 ]*[,.]?)?[0-9]*/.exec(o);if(t!=null&&!isNaN(parseFloat(t[0].replace(",",".").replace(" ","")))){r("update:modelValue",parseFloat(t[0].replace(",",".").replace(" ","")));return}r("update:modelValue",0)}}}});function S(e,r,l,o,t,_){var a;return b(),d(i,c({class:"fs-number-field",minWidth:"80px",editable:e.$props.editable,modelValue:(a=e.$props.modelValue)==null?void 0:a.toString(),"onUpdate:modelValue":e.onUpdate},e.$attrs),u({_:2},[f(e.$slots,(g,p)=>({name:p,fn:F(n=>[V(e.$slots,p,N(h(n)))])}))]),1040,["editable","modelValue","onUpdate:modelValue"])}const de=$(m,[["render",S]]);m.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSNumberField.vue"]};export{de as default};
