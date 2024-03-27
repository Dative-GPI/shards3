import{u as q}from"./useTranslations-eec3878c.js";import{u as M}from"./useAppTimeZone-ef2c4017.js";import{j as x,d as p,e as V,p as g,z as v,K as $,L as N,M as w,a3 as A,R as k}from"./vue.esm-bundler-37de1696.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import{m as D,g as C,u as I}from"./useRender-ccb83440.js";import{a as _,c as O}from"./VInput-670d9bbb.js";import{f as P}from"./forwardRefs-e658ad70.js";import{p as z}from"./theme-07d11e72.js";const{$tr:a}=q(),c=[{id:1,label:a("ui.time-field.second.singular","Second"),plural:a("ui.time-field.second.plural","Seconds")},{id:60,label:a("ui.time-field.minute.singular","Minute"),plural:a("ui.time-field.minute.plural","Minutes")},{id:3600,label:a("ui.time-field.hour.singular","Hour"),plural:a("ui.time-field.hour.plural","Hours")},{id:86400,label:a("ui.time-field.day.singular","Day"),plural:a("ui.time-field.day.plural","Days")},{id:604800,label:a("ui.time-field.week.singular","Week"),plural:a("ui.time-field.week.plural","Weeks")}],B=e=>{if(!e)return 0;for(let t=c.length-1;t>=0;t--)if(e%c[t].id===0)return t;return 0},b=e=>{const t=B(e),r=e/c[t].id;return`${r} ${r===1?c[t].label.toLowerCase():c[t].plural.toLowerCaser()}`},{epochToLongDateFormat:h}=M(),{$tr:s}=q(),X={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),copy:(e,t)=>r=>r===e||(t??s("ui.rules.copy","Different from original")),min:(e,t)=>r=>r.length>=e||(t??s("ui.rules.text-min","Must be at least {0} characters",e.toString())),max:(e,t)=>r=>r.length<=e||(t??s("ui.rules.text-max","Must be at most {0} characters",e.toString())),email:e=>t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(e??s("ui.rules.text-email","Must be a valid email")),phone:e=>t=>/^[\+]?([0-9]+[ -]?)+$/.test(t)||(e??s("ui.rules.text-phone","Must be a valid phone number")),digit:e=>t=>/(?=.*\d)/.test(t)||(e??s("ui.rules.text-digit","Must contain a digit")),uppercase:e=>t=>/(?=.*[A-Z])/.test(t)||(e??s("ui.rules.text-uppercase","Must contain an uppercase letter")),lowercase:e=>t=>/(?=.*[a-z])/.test(t)||(e??s("ui.rules.text-lowercase","Must contain a lowercase letter")),special:e=>t=>/(?=.*[!@#$%^&*])/.test(t)||(e??s("ui.rules.text-special-character","Must contain a special character"))},Y={required:e=>t=>t.length>0||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>r.length>=e||(t??s("ui.rules.tag-min","Must be at least {0} elements",e.toString())),max:(e,t)=>r=>r.length<=e||(t??s("ui.rules.tag-max","Must be at most {0} elements",e.toString()))},ee={required:e=>t=>!!t&&!isNaN(parseFloat(t))||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>!!r&&!isNaN(parseFloat(r))&&parseFloat(r)>=e||(t??s("ui.rules.number-min","Must be at least {0}",e.toString())),max:(e,t)=>r=>!!r&&!isNaN(parseFloat(r))&&parseFloat(r)<=e||(t??s("ui.rules.number-max","Must be at most {0}",e.toString())),integer:e=>t=>!!t&&!isNaN(parseFloat(t))&&Number.isInteger(parseFloat(t))||(e??s("ui.rules.number-integer","Must be an integer"))},te={required:e=>t=>!!t||(e??s("ui.rules.required","Required"))},re={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>!r||r>=e||(t??s("ui.rules.date-min","Must be after {0}",h(e))),max:(e,t)=>r=>!r||r<=e||(t??s("ui.rules.date-max","Must be before {0}",h(e)))},se={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>Array.isArray(r)&&r.length>=e||(t??s("ui.rules.select-min","Must select at least {0} elements",e.toString())),max:(e,t)=>r=>Array.isArray(r)&&r.length<=e||(t??s("ui.rules.select-max","Must select at most {0} elements",e.toString()))},ae={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>Array.isArray(r)&&r.length>=e||(t??s("ui.rules.autocomplete-min","Must select at least {0} elements",e.toString())),max:(e,t)=>r=>Array.isArray(r)&&r.length<=e||(t??s("ui.rules.autocomplete-max","Must select at most {0} elements",e.toString()))},ie={required:e=>t=>!!t||(e??s("ui.rules.required","Required")),min:(e,t)=>r=>r>=e||(t??s("ui.rules.time-min","Must be more than {0}",b(e))),max:(e,t)=>r=>r<=e||(t??s("ui.rules.time-max","Must be less than {0}",b(e)))},ue={required:e=>t=>t||(e??s("ui.rules.required","Required"))},S=x({name:"FSForm",props:{modelValue:{type:Boolean,required:!1,default:null},variant:{type:String,required:!1,default:"standard"}},emits:["update:modelValue","submit"],setup(e,{emit:t}){const r=p(null),l=p(!1),i=V(()=>{switch(e.variant){case"standard":return"input";case"lazy":return"blur";case"submit":return"submit"}}),n=async o=>{o.stopImmediatePropagation(),o.preventDefault(),l.value=!0,await r.value.validate(),t("update:modelValue",!!r.value.isValid),t("submit",!!r.value.isValid)};return g("validateOn",i),g("submitted",l),{validateOn:i,submitted:l,formRef:r,onSubmit:n}}}),L=z({...D(),..._()},"VForm"),H=C()({name:"VForm",props:L(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:r,emit:l}=t;const i=O(e),n=p();function o(m){m.preventDefault(),i.reset()}function y(m){const d=m,u=i.validate();d.then=u.then.bind(u),d.catch=u.catch.bind(u),d.finally=u.finally.bind(u),l("submit",d),d.defaultPrevented||u.then(R=>{var f;let{valid:F}=R;F&&((f=n.value)==null||f.submit())}),d.preventDefault()}return I(()=>{var m;return v("form",{ref:n,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:o,onSubmit:y},[(m=r.default)==null?void 0:m.call(r,i)])}),P(i,n)}});function W(e,t,r,l,i,n){return $(),N(H,{class:"fs-form",ref:"formRef",validateOn:e.validateOn,onSubmit:A(e.onSubmit,["stop"]),"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},{default:w(()=>[k(e.$slots,"default")]),_:3},8,["validateOn","onSubmit"])}const le=T(S,[["render",W]]);S.__docgenInfo={displayName:"FSForm",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","lazy","submit"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],events:[{name:"update:modelValue"},{name:"submit"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSForm.vue"]};export{ae as A,re as D,le as F,te as I,ee as N,se as S,X as T,ie as a,Y as b,ue as c,B as g,c as t};
