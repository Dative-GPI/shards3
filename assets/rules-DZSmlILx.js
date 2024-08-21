import{u as o,v as a}from"./useAppTimeZone-De3FTl5J.js";import{g as s}from"./time-CXtw-DLM.js";import{u as l}from"./useTranslations-DebMVrXy.js";const{epochToLongDateFormat:u}=o(),{$tr:r}=l(),c={required:(e=void 0)=>t=>!!t||(e??r("ui.rules.required","Required")),copy:(e,t=void 0)=>i=>i===e||(t??r("ui.rules.copy","Different from original")),min:(e,t=void 0)=>i=>i.length>=e||(t??r("ui.rules.text-min","Must be at least {0} characters",e.toString())),max:(e,t=void 0)=>i=>i.length<=e||(t??r("ui.rules.text-max","Must be at most {0} characters",e.toString())),email:(e=void 0)=>t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(e??r("ui.rules.text-email","Must be a valid email")),phone:(e=void 0)=>t=>/^[+]?([0-9]+[ -]?){7,}$/.test(t)||(e??r("ui.rules.text-phone","Must be a valid phone number")),digit:(e=void 0)=>t=>/(?=.*\d)/.test(t)||(e??r("ui.rules.text-digit","Must contain a digit")),uppercase:(e=void 0)=>t=>/(?=.*[A-Z])/.test(t)||(e??r("ui.rules.text-uppercase","Must contain an uppercase letter")),lowercase:(e=void 0)=>t=>/(?=.*[a-z])/.test(t)||(e??r("ui.rules.text-lowercase","Must contain a lowercase letter")),special:(e=void 0)=>t=>/(?=.*[!@#$%^&*])/.test(t)||(e??r("ui.rules.text-special-character","Must contain a special character")),different:(e,t=void 0)=>i=>i!=e||(t??r("ui.rules.text-different","Must be different from original")),outside:(e,t=void 0)=>i=>!e.includes(i)||(t??r("ui.rules.text-outside","Must be different from others")),inside:(e,t=void 0)=>i=>e.includes(i)||(t??r("ui.rules.text-inside","Must be one of the options"))},g={required:(e=void 0)=>t=>t.length>0||(e??r("ui.rules.required","Required")),min:(e,t=void 0)=>i=>i.length>=e||(t??r("ui.rules.tag-min","Must be at least {0} elements",e.toString())),max:(e,t=void 0)=>i=>i.length<=e||(t??r("ui.rules.tag-max","Must be at most {0} elements",e.toString()))},p={required:(e=void 0)=>t=>t!=null&&!isNaN(parseFloat(t))||(e??r("ui.rules.required","Required")),min:(e,t=void 0)=>i=>!!i&&!isNaN(parseFloat(i))&&parseFloat(i)>=e||(t??r("ui.rules.number-min","Must be at least {0}",e.toString())),max:(e,t=void 0)=>i=>!!i&&!isNaN(parseFloat(i))&&parseFloat(i)<=e||(t??r("ui.rules.number-max","Must be at most {0}",e.toString())),integer:(e=void 0)=>t=>!!t&&!isNaN(parseFloat(t))&&Number.isInteger(parseFloat(t))||(e??r("ui.rules.number-integer","Must be an integer"))},q={required:(e=void 0)=>t=>!!t||(e??r("ui.rules.required","Required"))},v={required:(e=void 0)=>t=>!!t||(e??r("ui.rules.required","Required")),min:(e,t=void 0)=>i=>!i||i>=e||(t??r("ui.rules.date-min","Must be after {0}",u(e))),max:(e,t=void 0)=>i=>!i||i<=e||(t??r("ui.rules.date-max","Must be before {0}",u(e))),validateExpression:(e="default")=>t=>a(t,e)},M={required:(e=void 0)=>t=>!!t||(e??r("ui.rules.required","Required")),min:(e,t=void 0)=>i=>Array.isArray(i)&&i.length>=e||(t??r("ui.rules.select-min","Must select at least {0} elements",e.toString())),max:(e,t=void 0)=>i=>Array.isArray(i)&&i.length<=e||(t??r("ui.rules.select-max","Must select at most {0} elements",e.toString()))},b={required:(e=void 0)=>t=>!!t||(e??r("ui.rules.required","Required")),min:(e,t=void 0)=>i=>Array.isArray(i)&&i.length>=e||(t??r("ui.rules.autocomplete-min","Must select at least {0} elements",e.toString())),max:(e,t=void 0)=>i=>Array.isArray(i)&&i.length<=e||(t??r("ui.rules.autocomplete-max","Must select at most {0} elements",e.toString()))},h={required:(e=void 0)=>t=>!!t||(e??r("ui.rules.required","Required")),min:(e,t=void 0)=>i=>i>=e||(t??r("ui.rules.time-min","Must be more than {0}",s(e))),max:(e,t=void 0)=>i=>i<=e||(t??r("ui.rules.time-max","Must be less than {0}",s(e)))},x={required:(e=void 0)=>t=>!!t&&t.value!==0||(e??r("ui.rules.required","Required"))},R={required:(e=void 0)=>t=>t||(e??r("ui.rules.required","Required"))},f={required:(e=void 0)=>t=>!!t||(e??r("ui.rules.required","Required")),min:(e,t=void 0)=>i=>(console.log(i),Array.isArray(i)&&i.length>=e||(t??r("ui.rules.tree-view-min","Must select at least {0} elements",e.toString()))),max:(e,t=void 0)=>i=>Array.isArray(i)&&i.length<=e||(t??r("ui.rules.tree-view-max","Must select at most {0} elements",e.toString()))};export{b as A,v as D,q as I,p as N,M as S,c as T,g as a,h as b,f as c,x as d,R as e};
