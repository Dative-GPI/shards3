import{j as k,d as u,e as y,o as S,$ as w,w as H,J as q,Q as x,R as F,M}from"./vue.esm-bundler-7c237656.js";import{u as O}from"./useDebounce-3b8c8385.js";import{u as N,s as o}from"./css-aa928277.js";import{u as T,C as $}from"./useColors-0c4b5dc8.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";const v=k({name:"FSFadeOut",props:{height:{type:[Array,String,Number],required:!0},width:{type:[Array,String,Number],required:!1,default:"100%"},padding:{type:[Array,String,Number],required:!1,default:"0"},maskHeight:{type:[Array,String,Number],required:!1,default:"64px"}},emits:["scroll"],setup(a,{emit:n}){const{windowHeight:f,windowWidth:m}=N(),{debounce:c}=O(),{getColors:p}=T(),i=p($.Background),e=u(null),t=u("0px"),s=u("0px"),g=u(0),r=u(null),h=y(()=>({"--fs-fade-out-height":o(a.height),"--fs-fade-out-width":o(a.width),"--fs-fade-out-padding":o(a.padding),"--fs-fade-out-mask-color":i.base,"--fs-fade-out-top-mask-height":s.value,"--fs-fade-out-bottom-mask-height":t.value})),b=()=>{if(e.value){if(e.value.clientHeight>=e.value.scrollHeight){t.value="0px",s.value="0px";return}e.value.scrollHeight-e.value.scrollTop-e.value.clientHeight<1?t.value="0px":t.value=o(a.maskHeight),e.value.scrollTop===0?s.value="0px":s.value=o(a.maskHeight);const d={target:e.value,onTop:s.value==="0px",onBottom:t.value==="0px",goingUp:e.value.scrollTop<g.value};n("scroll",d),g.value=e.value.scrollTop}},l=()=>c(b,50);return S(()=>{l(),r.value=new ResizeObserver(d=>{d.forEach(()=>{l()})}),document.querySelector(".fs-fade-out")&&r.value.observe(document.querySelector(".fs-fade-out"))}),w(()=>{r.value&&r.value.disconnect()}),H([()=>m.value,()=>f.value],l),{fadeOutRef:e,style:h,debounceMasks:l}}});function C(a,n,f,m,c,p){return q(),x("div",{class:"fs-fade-out",ref:"fadeOutRef",style:M(a.style),onScroll:n[0]||(n[0]=(...i)=>a.debounceMasks&&a.debounceMasks(...i))},[F(a.$slots,"default")],36)}const E=B(v,[["render",C]]);v.__docgenInfo={displayName:"FSFadeOut",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!0},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"maskHeight",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"64px"'}}],events:[{name:"scroll"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFadeOut.vue"]};export{E as F};
