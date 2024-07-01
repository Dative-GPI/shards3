import{d as V,b as d,c as F,p,I as y,z as h,A as S,B as g,H as w,J as R}from"./vue.esm-bundler-DC82FEWN.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as _,g as $,u as O}from"./color-BhlhQtQT.js";import{m as P,c as q}from"./VInput-BvcCh06W.js";import{f as B}from"./forwardRefs-DWGaNmQL.js";import{p as C}from"./theme-CDGAP9oX.js";const c=V({name:"FSForm",props:{modelValue:{type:Boolean,required:!1,default:null},variant:{type:String,required:!1,default:"submit"}},emits:["update:modelValue","submit"],setup(a,{emit:s}){const e=d(null),t=d(!1),n=F(()=>{switch(a.variant){case"standard":return"input";default:return"submit"}}),l=async o=>{o.stopImmediatePropagation(),o.preventDefault(),t.value=!0,await e.value.validate(),s("update:modelValue",!!(e.value.isValid??!0)),s("submit",!!(e.value.isValid??!0))},i=async()=>{t.value=!0,await e.value.validate(),s("update:modelValue",!!(e.value.isValid??!0))},m=()=>{t.value=!1,e.value.reset()},r=()=>{t.value=!1,e.value.resetValidation()};return p("validateOn",n),p("submitted",t),{validateOn:n,submitted:t,formRef:e,resetValidation:r,onSubmit:l,validate:i,reset:m}}}),D=C({..._(),...P()},"VForm"),I=$()({name:"VForm",props:D(),emits:{"update:modelValue":a=>!0,submit:a=>!0},setup(a,s){let{slots:e,emit:t}=s;const n=q(a),l=d();function i(r){r.preventDefault(),n.reset()}function m(r){const o=r,u=n.validate();o.then=u.then.bind(u),o.catch=u.catch.bind(u),o.finally=u.finally.bind(u),t("submit",o),o.defaultPrevented||u.then(v=>{var f;let{valid:b}=v;b&&((f=l.value)==null||f.submit())}),o.preventDefault()}return O(()=>{var r;return y("form",{ref:l,class:["v-form",a.class],style:a.style,novalidate:!0,onReset:i,onSubmit:m},[(r=e.default)==null?void 0:r.call(e,n)])}),B(n,l)}});function N(a,s,e,t,n,l){return h(),S(I,{class:"fs-form",ref:"formRef",validateOn:a.validateOn,onSubmit:w(a.onSubmit,["stop"]),"onUpdate:modelValue":s[0]||(s[0]=i=>a.$emit("update:modelValue",i))},{default:g(()=>[R(a.$slots,"default")]),_:3},8,["validateOn","onSubmit"])}const U=k(c,[["render",N]]);c.__docgenInfo={displayName:"FSForm",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"submit"'}}],events:[{name:"update:modelValue"},{name:"submit"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSForm.vue"]};export{U as F};
