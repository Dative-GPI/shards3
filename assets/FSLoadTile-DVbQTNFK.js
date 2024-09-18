import{d as v,c as r,y as m,z as f,A as h,B as o,O as x,L as a,D as S}from"./vue.esm-bundler-BSyvBTC9.js";import{F as c}from"./FSCheckbox-DjQsgBzR.js";import{F as w}from"./FSLoader-7EueGG7H.js";import{F as C}from"./FSCard-VI0SCCBU.js";import{F as s}from"./FSCol-CtQDyyQv.js";import{F as g}from"./FSRow-B3SJi8FA.js";import{u as V}from"./useBreakpoints-B0zHkio6.js";import{u as b,C as y}from"./useColors-Ccf8xVyg.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=v({name:"FSLoadTile",components:{FSCheckbox:c,FSLoader:w,FSCard:C,FSCol:s,FSRow:g},props:{modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(){const{isMobileSized:e}=V(),{getColors:l}=b(),d=l(y.Background),n=r(()=>({"--fs-load-tile-background-color":d.base})),i=r(()=>({image:e.value?"90px":"100px",card:e.value?"156px":"170px",col:e.value?"90px":"100px"})),u=r(()=>({image:e.value?"90px":"100px",card:e.value?"336px":"352px",col:e.value?"198px":"204px"}));return{heights:i,widths:u,style:n}}});function L(e,l,d,n,i,u){const t=m("FSLoader"),p=m("FSCard");return f(),h(p,{class:"fs-load-tile",padding:"11px",height:e.heights.card,width:e.widths.card,style:x(e.style)},{default:o(()=>[a(g,{align:"center-center",height:"fill",width:"fill",gap:"24px"},{default:o(()=>[a(s,{height:e.heights.col,width:e.widths.col,gap:"24px"},{default:o(()=>[a(s,null,{default:o(()=>[a(t,{variant:"text-button"}),a(t,{variant:"text-overline"})]),_:1}),a(s,null,{default:o(()=>[a(t,{variant:"text-overline"}),a(t,{variant:"text-overline"})]),_:1})]),_:1},8,["height","width"]),a(t,{height:e.heights.image,width:e.widths.image},null,8,["height","width"])]),_:1}),e.$props.editable?(f(),h(p,{key:0,class:"fs-tile-checkbox",border:!1},{default:o(()=>[a(c,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1})):S("",!0)]),_:1},8,["height","width","style"])}const E=k(F,[["render",L]]);F.__docgenInfo={displayName:"FSLoadTile",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSLoadTile.vue"]};export{E as F};
