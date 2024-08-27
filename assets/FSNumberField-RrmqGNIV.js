import{d as s,z as d,A as u,M as f,N as c,m as b,B as F,I as V,J as N,K as $}from"./vue.esm-bundler-B8zP9crO.js";import{F as i}from"./FSTextField-RqWidZvM.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSBaseField-NTkLVYiV.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSCol-DXkP6ARl.js";import"./css-B1GBcH8c.js";import"./FSRow-D-NDNvrc.js";import"./useColors-CHFZqh9D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./FSButton-CSLtAyqZ.js";import"./FSClickable-CRLy4U08.js";import"./FSCard-BQ4UALgc.js";import"./VProgressCircular-DxDQ8azE.js";import"./VIcon-FsSVL6vQ.js";import"./FSIcon-DoasTXhc.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";const m=s({name:"FSNumberField",components:{FSTextField:i},props:{modelValue:{type:Number,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){return{onUpdate:t=>{if(t==="-")return;const o=/[-]?([0-9 ]*[,.]?)?[0-9]*/.exec(t);if(o!=null&&!isNaN(parseFloat(o[0].replace(",",".").replace(" ","")))){r("update:modelValue",parseFloat(o[0].replace(",",".").replace(" ","")));return}r("update:modelValue",0)}}}});function S(e,r,l,t,o,_){var a;return d(),u(i,b({class:"fs-number-field",editable:e.$props.editable,modelValue:(a=e.$props.modelValue)==null?void 0:a.toString(),"onUpdate:modelValue":e.onUpdate},e.$attrs),f({_:2},[c(e.$slots,(g,p)=>({name:p,fn:F(n=>[V(e.$slots,p,N($(n)))])}))]),1040,["editable","modelValue","onUpdate:modelValue"])}const ie=h(m,[["render",S]]);m.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSNumberField.vue"]};export{ie as default};
