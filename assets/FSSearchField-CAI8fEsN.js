import{d,c as u,z as p,A as i,B as m,O as c,m as f,C as h,K as S,L as F,M as g}from"./vue.esm-bundler-DTB_q9xr.js";import{F as o}from"./FSTextField-B-binuYf.js";import{u as V}from"./useTranslations-BehwFxDb.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";const s=d({name:"FSSearchField",components:{FSTextField:o},props:{placeholder:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{$tr:a}=V();return{placeholder:u(()=>e.placeholder??a("ui.search.placeholder","Search..."))}}});function y(e,a,n,v,_,q){return p(),i(o,f({class:"fs-search-field",placeholder:e.placeholder,modelValue:e.$props.modelValue,prependInnerIcon:"mdi-magnify","onUpdate:modelValue":a[0]||(a[0]=l=>e.$emit("update:modelValue",l))},e.$attrs),m({_:2},[c(e.$slots,(l,r)=>({name:r,fn:h(t=>[S(e.$slots,r,F(g(t)))])}))]),1040,["placeholder","modelValue"])}const P=$(s,[["render",y]]);s.__docgenInfo={displayName:"FSSearchField",exportName:"default",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSSearchField.vue"]};export{P as F};
