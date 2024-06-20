import{f as v,g as r,D as m,E as f,F as c,G as a,W as S,P as o,I as w}from"./vue.esm-bundler-a0893183.js";import{F as h}from"./FSCheckbox-358f34d9.js";import{F as x}from"./FSLoader-5eac453d.js";import{F as C}from"./FSCard-c200753c.js";import{_ as s}from"./FSCol-e45ac157.js";import{_ as g}from"./FSRow-821d23a1.js";import{u as V}from"./css-03aed76d.js";import{u as _,C as b}from"./useColors-6c375bb5.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const F=v({name:"FSLoadTile",components:{FSCheckbox:h,FSLoader:x,FSCard:C,FSCol:s,FSRow:g},props:{modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(){const{isMobileSized:e}=V(),{getColors:l}=_(),n=l(b.Background),d=r(()=>({image:e.value?"90px":"100px",card:e.value?"156px":"170px",col:e.value?"90px":"100px"})),i=r(()=>({image:e.value?"90px":"100px",card:e.value?"336px":"352px",col:e.value?"198px":"204px"})),u=r(()=>({"--fs-load-tile-background-color":n.base}));return{heights:d,widths:i,style:u}}});function k(e,l,n,d,i,u){const t=m("FSLoader"),p=m("FSCard");return f(),c(p,{class:"fs-load-tile",padding:"11px",height:e.heights.card,width:e.widths.card,style:S(e.style)},{default:a(()=>[o(g,{align:"center-center",height:"fill",width:"fill",gap:"24px"},{default:a(()=>[o(s,{height:e.heights.col,width:e.widths.col,gap:"24px"},{default:a(()=>[o(s,null,{default:a(()=>[o(t,{variant:"text-button"}),o(t,{variant:"text-overline"})]),_:1}),o(s,null,{default:a(()=>[o(t,{variant:"text-overline"}),o(t,{variant:"text-overline"})]),_:1})]),_:1},8,["height","width"]),o(t,{height:e.heights.image,width:e.widths.image},null,8,["height","width"])]),_:1}),e.$props.editable?(f(),c(p,{key:0,class:"fs-tile-checkbox",border:!1},{default:a(()=>[o(h,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1})):w("",!0)]),_:1},8,["height","width","style"])}const R=y(F,[["render",k]]);F.__docgenInfo={displayName:"FSLoadTile",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSLoadTile.vue"]};export{R as F};