import{h as y,z as r,x as h,g as v,e as w,u as I}from"./vue.esm-bundler-a79f6a7e.js";import{g as b,d as s}from"./useRender-b11abf1d.js";import{m as x,p as d}from"./theme-1ec486f5.js";const k={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},S={component:e=>y(f,{...e,class:"mdi"})},A=[String,Function,Object,Array],V=Symbol.for("vuetify:icons"),c=d({icon:{type:A},tag:{type:String,required:!0}},"icon"),m=b()({name:"VComponentIcon",props:c(),setup(e,t){let{slots:o}=t;return()=>{const i=e.icon;return r(e.tag,null,{default:()=>{var n;return[e.icon?r(i,null,null):(n=o.default)==null?void 0:n.call(o)]}})}}}),u=s({name:"VSvgIcon",inheritAttrs:!1,props:c(),setup(e,t){let{attrs:o}=t;return()=>r(e.tag,h(o,{style:null}),{default:()=>[r("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?r("path",{d:i[0],"fill-opacity":i[1]},null):r("path",{d:i},null)):r("path",{d:e.icon},null)])]})}});s({name:"VLigatureIcon",props:c(),setup(e){return()=>r(e.tag,null,{default:()=>[e.icon]})}});const f=s({name:"VClassIcon",props:c(),setup(e){return()=>r(e.tag,{class:e.icon},null)}});function C(){return{svg:{component:u},class:{component:f}}}function O(e){const t=C(),o=(e==null?void 0:e.defaultSet)??"mdi";return o==="mdi"&&!t.mdi&&(t.mdi=S),x({defaultSet:o,sets:t,aliases:{...k,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},e)}const Z=e=>{const t=v(V);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:w(()=>{var l;const i=I(e);if(!i)return{component:m};let n=i;if(typeof n=="string"&&(n=n.trim(),n.startsWith("$")&&(n=(l=t.aliases)==null?void 0:l[n.slice(1)])),!n)throw new Error(`Could not find aliased icon "${i}"`);if(Array.isArray(n))return{component:u,icon:n};if(typeof n!="string")return{component:m,icon:n};const a=Object.keys(t.sets).find(g=>typeof n=="string"&&n.startsWith(`${g}:`)),p=a?n.slice(a.length+1):n;return{component:t.sets[a??t.defaultSet].component,icon:p}})}},E=d({tag:{type:String,default:"div"}},"tag");export{A as I,V as a,O as c,E as m,Z as u};