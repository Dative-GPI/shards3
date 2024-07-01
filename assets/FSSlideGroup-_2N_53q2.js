import{d as h,z as u,A as i,m as S,b as g,c as F,o as P,V,y as $,B as p,I as y,H as I,C as E,N as q,k as w,F as z,S as A}from"./vue.esm-bundler-DC82FEWN.js";import{u as D}from"./uuid-DTaye2KM.js";import{F as d}from"./FSButton-cgjePGb6.js";import{C as m,u as L}from"./useColors-WxHDk9aB.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as R}from"./useSlots-V2mVelz6.js";import{s as _}from"./css-DYOPUjjE.js";import{a as M,V as O}from"./VSlideGroup-CcTYsOIU.js";import{a as H,b as U}from"./group-DaluXt-5.js";import{g as W}from"./color-BhlhQtQT.js";const b=h({name:"FSButtonPreviousIcon",components:{FSButton:d},setup(){return{ColorEnum:m}}});function j(e,a,t,s,n,o){return u(),i(d,S({icon:"mdi-chevron-left",variant:"icon",color:e.ColorEnum.Primary},e.$attrs),null,16,["color"])}const J=C(b,[["render",j]]);b.__docgenInfo={displayName:"FSButtonPreviousIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonPreviousIcon.vue"]};const N=h({name:"FSButtonNextIcon",components:{FSButton:d},setup(){return{ColorEnum:m}}});function K(e,a,t,s,n,o){return u(),i(d,S({icon:"mdi-chevron-right",variant:"icon",color:e.ColorEnum.Primary},e.$attrs),null,16,["color"])}const Q=C(N,[["render",K]]);N.__docgenInfo={displayName:"FSButtonNextIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonNextIcon.vue"]};const k=h({name:"FSSlideGroup",components:{FSButtonPreviousIcon:J,FSButtonNextIcon:Q,FSButton:d},props:{padding:{type:[Array,String,Number],required:!1,default:"0"},gap:{type:[Array,String,Number],required:!1,default:"8px"},speed:{type:Number,required:!1,default:250}},setup(e){const{getChildren:a}=R(),{getColors:t}=L(),s=t(m.Dark),n=g(!1),o=g(null),l=g(null),c=`id${D()}`,f=F(()=>({"--fs-group-padding":_(e.padding),"--fs-group-gap":_(e.gap),"--fs-group-color":s.soft,"--fs-group-hover-color":s.dark})),v=F(()=>{const r=["fs-slide-group-next"];return o.value&&n.value&&r.push("fs-slide-group-next-active"),r}),B=()=>{if(o.value){const r=o.value.$el.children[1];r&&r.scrollTo&&r.scrollTo({left:-r.scrollLeft,behavior:"smooth"})}},T=()=>{if(o.value){const r=o.value.$el.children[1];r&&r.scrollTo&&r.scrollTo({left:r.scrollWidth-r.scrollLeft,behavior:"smooth"})}},G=()=>{o.value&&o.value.scrollTo&&o.value.scrollTo("prev")},x=()=>{o.value&&o.value.scrollTo&&(o.value.scrollTo("next"),n.value=!1)};return P(()=>{l.value=new ResizeObserver(r=>{r.forEach(()=>{o.value.scrollTo("prev"),n.value=!0})}),document.querySelector(`#${c}`)&&l.value.observe(document.querySelector(`#${c}`))}),V(()=>{l.value&&l.value.disconnect()}),{slideGroupRef:o,nextClasses:v,ColorEnum:m,elementId:c,style:f,getChildren:a,goToStart:B,goToNext:x,goToPrev:G,goToEnd:T}}}),X=W()({name:"VSlideGroupItem",props:H(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const s=U(e,M);return()=>{var n;return(n=t.default)==null?void 0:n.call(t,{isSelected:s.isSelected.value,select:s.select,toggle:s.toggle,selectedClass:s.selectedClass.value})}}});function Y(e,a,t,s,n,o){const l=$("FSButtonPreviousIcon"),c=$("FSButtonNextIcon");return u(),i(O,S({class:"fs-slide-group",ref:"slideGroupRef",showArrows:!0,id:e.elementId,style:e.style},e.$attrs),{prev:p(()=>[y(l,{color:e.ColorEnum.Dark,onClick:I(e.goToPrev,["prevent","stop"])},null,8,["color","onClick"])]),default:p(()=>[(u(!0),E(z,null,q(e.getChildren(),(f,v)=>(u(),i(X,{key:v},{default:p(()=>[(u(),i(w(f)))]),_:2},1024))),128))]),next:p(()=>[y(c,{color:e.ColorEnum.Dark,class:A(e.nextClasses),onClick:I(e.goToNext,["prevent","stop"])},null,8,["color","class","onClick"])]),_:1},16,["id","style"])}const ce=C(k,[["render",Y]]);k.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"speed",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"250"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};export{ce as F,X as V,Q as a,J as b};
