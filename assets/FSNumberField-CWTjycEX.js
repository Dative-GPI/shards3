import{d as n,z as d,A as u,O as f,P as c,m as b,B as F,L as V,M as N,N as $}from"./vue.esm-bundler-CLWyqtrq.js";import{F as m}from"./FSTextField-Cpjd0lxC.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VField-B0dByqhd.js";import"./FSSpan-C4Iz3qX9.js";import"./useSlots-YtBg7QOA.js";import"./FSCol-B1LPjIXg.js";import"./css-Ca-HPGcF.js";import"./FSRow-B7tdsi71.js";import"./useColors-DMaqBg9s.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-bwyTeVCn.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-DbngaExr.js";import"./FSClickable-Dnaq4X0T.js";import"./FSCard-Dfczzv61.js";import"./FSIcon-izOGFbD4.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";const i=n({name:"FSNumberField",components:{FSTextField:m},props:{modelValue:{type:Number,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:r}){return{onUpdate:t=>{const o=/([0-9 ]*[,.]?)?[0-9]+/.exec(t);o&&!isNaN(parseFloat(o[0].replace(",",".").replace(" ","")))?r("update:modelValue",parseFloat(o[0].replace(",",".").replace(" ",""))):r("update:modelValue",0)}}}});function S(e,r,l,t,o,_){var a;return d(),u(m,b({class:"fs-number-field",editable:e.$props.editable,modelValue:(a=e.$props.modelValue)==null?void 0:a.toString(),"onUpdate:modelValue":e.onUpdate},e.$attrs),f({_:2},[c(e.$slots,(g,p)=>({name:p,fn:F(s=>[V(e.$slots,p,N($(s)))])}))]),1040,["editable","modelValue","onUpdate:modelValue"])}const le=h(i,[["render",S]]);i.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSNumberField.vue"]};export{le as default};
