import{f as h,E as u,F as c,A as S,j as g,g as F,o as T,Z as V,D as $,G as p,Q as y,P as I,H as E,V as q,v as w,J as A,Y as D}from"./vue.esm-bundler-1de4ab84.js";import{u as z}from"./uuid-08309875.js";import{F as d}from"./FSButton-6b0685b3.js";import{C as m,u as L}from"./useColors-6201f155.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{u as R}from"./useSlots-78ee3d45.js";import{s as _}from"./css-73f1b6e3.js";import{a as M,V as O}from"./VSlideGroup-4741a491.js";import{a as j,b as H}from"./group-03874e1e.js";import{g as J}from"./useRender-b44b777b.js";const b=h({name:"FSButtonPreviousIcon",components:{FSButton:d},setup(){return{ColorEnum:m}}});function Q(e,a,t,n,s,o){return u(),c(d,S({icon:"mdi-chevron-left",variant:"icon",color:e.ColorEnum.Primary},e.$attrs),null,16,["color"])}const U=C(b,[["render",Q]]);b.__docgenInfo={displayName:"FSButtonPreviousIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonPreviousIcon.vue"]};const N=h({name:"FSButtonNextIcon",components:{FSButton:d},setup(){return{ColorEnum:m}}});function W(e,a,t,n,s,o){return u(),c(d,S({icon:"mdi-chevron-right",variant:"icon",color:e.ColorEnum.Primary},e.$attrs),null,16,["color"])}const Y=C(N,[["render",W]]);N.__docgenInfo={displayName:"FSButtonNextIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonNextIcon.vue"]};const k=h({name:"FSSlideGroup",components:{FSButtonPreviousIcon:U,FSButtonNextIcon:Y,FSButton:d},props:{padding:{type:[Array,String,Number],required:!1,default:"0"},gap:{type:[Array,String,Number],required:!1,default:"8px"},speed:{type:Number,required:!1,default:250}},setup(e){const{getChildren:a}=R(),{getColors:t}=L(),n=t(m.Dark),s=g(!1),o=g(null),l=g(null),i=`id${z()}`,f=F(()=>({"--fs-group-padding":_(e.padding),"--fs-group-gap":_(e.gap),"--fs-group-color":n.soft,"--fs-group-hover-color":n.dark})),v=F(()=>{const r=["fs-slide-group-next"];return o.value&&s.value&&r.push("fs-slide-group-next-active"),r}),B=()=>{if(o.value){const r=o.value.$el.children[1];r.scrollTo({left:-r.scrollLeft,behavior:"smooth"})}},G=()=>{if(o.value){const r=o.value.$el.children[1];r.scrollTo({left:r.scrollWidth-r.scrollLeft,behavior:"smooth"})}},P=()=>{o.value&&o.value.scrollTo("prev")},x=()=>{o.value&&(o.value.scrollTo("next"),s.value=!1)};return T(()=>{l.value=new ResizeObserver(r=>{r.forEach(()=>{o.value.scrollTo("prev"),s.value=!0})}),document.querySelector(`#${i}`)&&l.value.observe(document.querySelector(`#${i}`))}),V(()=>{l.value&&l.value.disconnect()}),{slideGroupRef:o,nextClasses:v,ColorEnum:m,elementId:i,style:f,getChildren:a,goToStart:B,goToNext:x,goToPrev:P,goToEnd:G}}}),Z=J()({name:"VSlideGroupItem",props:j(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:t}=a;const n=H(e,M);return()=>{var s;return(s=t.default)==null?void 0:s.call(t,{isSelected:n.isSelected.value,select:n.select,toggle:n.toggle,selectedClass:n.selectedClass.value})}}});function K(e,a,t,n,s,o){const l=$("FSButtonPreviousIcon"),i=$("FSButtonNextIcon");return u(),c(O,S({class:"fs-slide-group",ref:"slideGroupRef",showArrows:!0,id:e.elementId,style:e.style},e.$attrs),{prev:p(()=>[y(l,{color:e.ColorEnum.Dark,onClick:I(e.goToPrev,["prevent","stop"])},null,8,["color","onClick"])]),default:p(()=>[(u(!0),E(A,null,q(e.getChildren(),(f,v)=>(u(),c(Z,{key:v},{default:p(()=>[(u(),c(w(f)))]),_:2},1024))),128))]),next:p(()=>[y(i,{color:e.ColorEnum.Dark,class:D(e.nextClasses),onClick:I(e.goToNext,["prevent","stop"])},null,8,["color","class","onClick"])]),_:1},16,["id","style"])}const ie=C(k,[["render",K]]);k.__docgenInfo={displayName:"FSSlideGroup",exportName:"default",description:"",tags:{},props:[{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"speed",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"250"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSlideGroup.vue"]};export{ie as F,Z as V,Y as a,U as b};
