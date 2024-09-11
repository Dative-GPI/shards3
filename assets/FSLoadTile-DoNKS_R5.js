import{d as v,c as r,y as m,z as f,A as c,B as a,O as S,L as o,D as w}from"./vue.esm-bundler-BSyvBTC9.js";import{F as h}from"./FSCheckbox-YoHHo_JV.js";import{F as x}from"./FSLoader-DIRgKG_M.js";import{F as C}from"./FSCard-DAS46KTX.js";import{_ as s}from"./FSCol-YmDykHL-.js";import{_ as g}from"./FSRow-CVY2l52N.js";import{u as V}from"./css-DLfrm0pR.js";import{u as _,C as b}from"./useColors-B5ivMAr9.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=v({name:"FSLoadTile",components:{FSCheckbox:h,FSLoader:x,FSCard:C,FSCol:s,FSRow:g},props:{modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(){const{isMobileSized:e}=V(),{getColors:l}=_(),n=l(b.Background),d=r(()=>({"--fs-load-tile-background-color":n.base})),i=r(()=>({image:e.value?"90px":"100px",card:e.value?"156px":"170px",col:e.value?"90px":"100px"})),u=r(()=>({image:e.value?"90px":"100px",card:e.value?"336px":"352px",col:e.value?"198px":"204px"}));return{heights:i,widths:u,style:d}}});function k(e,l,n,d,i,u){const t=m("FSLoader"),p=m("FSCard");return f(),c(p,{class:"fs-load-tile",padding:"11px",height:e.heights.card,width:e.widths.card,style:S(e.style)},{default:a(()=>[o(g,{align:"center-center",height:"fill",width:"fill",gap:"24px"},{default:a(()=>[o(s,{height:e.heights.col,width:e.widths.col,gap:"24px"},{default:a(()=>[o(s,null,{default:a(()=>[o(t,{variant:"text-button"}),o(t,{variant:"text-overline"})]),_:1}),o(s,null,{default:a(()=>[o(t,{variant:"text-overline"}),o(t,{variant:"text-overline"})]),_:1})]),_:1},8,["height","width"]),o(t,{height:e.heights.image,width:e.widths.image},null,8,["height","width"])]),_:1}),e.$props.editable?(f(),c(p,{key:0,class:"fs-tile-checkbox",border:!1},{default:a(()=>[o(h,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1})):w("",!0)]),_:1},8,["height","width","style"])}const D=y(F,[["render",k]]);F.__docgenInfo={displayName:"FSLoadTile",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSLoadTile.vue"]};export{D as F};
