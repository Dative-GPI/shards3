import{u as R}from"./useTimeZone-563b99e3.js";import{u as S}from"./useTranslations-c047d5be.js";import{g as x,d as p,j as N,p as g,z as V,K as $,L as w,M as A,X as k,R as v}from"./vue.esm-bundler-0a1af505.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{m as T,g as C,u as I}from"./useRender-76465e3d.js";import{b as _,c as O}from"./VInput-4e45c526.js";import{f as P}from"./forwardRefs-e658ad70.js";import{p as z}from"./theme-8d83670f.js";const{$tr:a}=S(),d=[{id:1,label:a("ui.time-field.second.singular","Second"),plural:a("ui.time-field.second.plural","Seconds")},{id:60,label:a("ui.time-field.minute.singular","Minute"),plural:a("ui.time-field.minute.plural","Minutes")},{id:3600,label:a("ui.time-field.hour.singular","Hour"),plural:a("ui.time-field.hour.plural","Hours")},{id:86400,label:a("ui.time-field.day.singular","Day"),plural:a("ui.time-field.day.plural","Days")},{id:604800,label:a("ui.time-field.week.singular","Week"),plural:a("ui.time-field.week.plural","Weeks")}],B=e=>{if(!e)return 0;for(let t=d.length-1;t>=0;t--)if(e%d[t].id===0)return t;return 0},b=e=>{const t=B(e),r=e/d[t].id;return`${r} ${r===1?d[t].label.toLowerCase():d[t].plural.toLowerCaser()}`},{epochToLongDateFormat:h}=R(),{$tr:s}=S(),Q={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),copy:(e,t)=>r=>r===e||(t??s("ui.rules.copy","Different from original")),min:(e,t)=>r=>r.length>=e||(t??s("ui.rules.text-min","Must be at least {0} characters",e.toString())),max:(e,t)=>r=>r.length<=e||(t??s("ui.rules.text-max","Must be at most {0} characters",e.toString())),email:e=>t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(e??s("ui.rules.text-email","Must be a valid email")),digit:e=>t=>/(?=.*\d)/.test(t)||(e??s("ui.rules.text-digit","Must contain a digit")),uppercase:e=>t=>/(?=.*[A-Z])/.test(t)||(e??s("ui.rules.text-uppercase","Must contain an uppercase letter")),lowercase:e=>t=>/(?=.*[a-z])/.test(t)||(e??s("ui.rules.text-lowercase","Must contain a lowercase letter")),special:e=>t=>/(?=.*[!@#$%^&*])/.test(t)||(e??s("ui.rules.text-special-character","Must contain a special character"))},Y={required:e=>t=>t.length>0||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>r.length>=e||(t??s("ui.rules.tag-min","Must be at least {0} elements",e.toString())),max:(e,t)=>r=>r.length<=e||(t??s("ui.rules.tag-max","Must be at most {0} elements",e.toString()))},ee={required:e=>t=>!!t&&!isNaN(parseFloat(t))||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>!!r&&!isNaN(parseFloat(r))&&parseFloat(r)>=e||(t??s("ui.rules.number-min","Must be at least {0}",e.toString())),max:(e,t)=>r=>!!r&&!isNaN(parseFloat(r))&&parseFloat(r)<=e||(t??s("ui.rules.number-max","Must be at most {0}",e.toString())),integer:e=>t=>!!t&&!isNaN(parseFloat(t))&&Number.isInteger(parseFloat(t))||(e??s("ui.rules.number-integer","Must be an integer"))},te={required:e=>t=>!!t||(e??s("ui.rules.required","Required"))},re={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>!r||r>=e||(t??s("ui.rules.date-min","Must be after {0}",h(e))),max:(e,t)=>r=>!r||r<=e||(t??s("ui.rules.date-max","Must be before {0}",h(e)))},se={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>Array.isArray(r)&&r.length>=e||(t??s("ui.rules.select-min","Must select at least {0} elements",e.toString())),max:(e,t)=>r=>Array.isArray(r)&&r.length<=e||(t??s("ui.rules.select-max","Must select at most {0} elements",e.toString()))},ae={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>Array.isArray(r)&&r.length>=e||(t??s("ui.rules.autocomplete-min","Must select at least {0} elements",e.toString())),max:(e,t)=>r=>Array.isArray(r)&&r.length<=e||(t??s("ui.rules.autocomplete-max","Must select at most {0} elements",e.toString()))},ie={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>r>=e||(t??s("ui.rules.time-min","Must be more than {0}",b(e))),max:(e,t)=>r=>r<=e||(t??s("ui.rules.time-max","Must be less than {0}",b(e)))},q=x({name:"FSForm",props:{modelValue:{type:Boolean,required:!1,default:null},variant:{type:String,required:!1,default:"standard"}},emits:["update:modelValue"],setup(e){const t=p(null),r=p(!1),m=N(()=>{switch(e.variant){case"standard":return"input";case"lazy":return"blur";case"submit":return"submit"}}),i=u=>{u.stopImmediatePropagation(),u.preventDefault(),r.value=!0};return g("validateOn",m),g("submitted",r),{validateOn:m,submitted:r,formRef:t,onSubmit:i}}}),L=z({...T(),..._()},"VForm"),H=C()({name:"VForm",props:L(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:r,emit:m}=t;const i=O(e),u=p();function c(n){n.preventDefault(),i.reset()}function y(n){const o=n,l=i.validate();o.then=l.then.bind(l),o.catch=l.catch.bind(l),o.finally=l.finally.bind(l),m("submit",o),o.defaultPrevented||l.then(F=>{var f;let{valid:M}=F;M&&((f=u.value)==null||f.submit())}),o.preventDefault()}return I(()=>{var n;return V("form",{ref:u,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:c,onSubmit:y},[(n=r.default)==null?void 0:n.call(r,i)])}),P(i,u)}});function W(e,t,r,m,i,u){return $(),w(H,{ref:"formRef",validateOn:e.validateOn,onSubmit:k(e.onSubmit,["stop"]),"onUpdate:modelValue":t[0]||(t[0]=c=>e.$emit("update:modelValue",c))},{default:A(()=>[v(e.$slots,"default")]),_:3},8,["validateOn","onSubmit"])}const ue=D(q,[["render",W]]);q.__docgenInfo={displayName:"FSForm",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],events:[{name:"update:modelValue"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSForm.vue"]};export{ae as A,re as D,ue as F,te as I,ee as N,se as S,Q as T,ie as a,Y as b,B as g,d as t};
