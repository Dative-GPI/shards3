import{d as x,c as r,y as m,z as f,A as h,C as o,P as v,N as a,F as w}from"./vue.esm-bundler-CWdIlc2r.js";import{F as c}from"./FSCheckbox-18K-cCtB.js";import{F as S}from"./FSLoader-DxfJongP.js";import{F as C}from"./FSCard-D8qRc7rc.js";import{F as s}from"./FSCol-Bj1WIVag.js";import{_ as g}from"./FSRow-D4JfwQlG.js";import{u as V}from"./css-DVhR3h-A.js";import{u as b,C as y}from"./useColors-CrLBSafx.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const F=x({name:"FSLoadTile",components:{FSCheckbox:c,FSLoader:S,FSCard:C,FSCol:s,FSRow:g},props:{modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(){const{isMobileSized:e}=V(),{getColors:l}=b(),n=l(y.Background),d=r(()=>({"--fs-load-tile-background-color":n.base})),i=r(()=>({image:e.value?"90px":"100px",card:e.value?"156px":"170px",col:e.value?"90px":"100px"})),p=r(()=>({image:e.value?"90px":"100px",card:e.value?"336px":"352px",col:e.value?"198px":"204px"}));return{heights:i,widths:p,style:d}}});function k(e,l,n,d,i,p){const t=m("FSLoader"),u=m("FSCard");return f(),h(u,{class:"fs-load-tile",padding:"11px",height:e.heights.card,width:e.widths.card,style:v(e.style)},{default:o(()=>[a(g,{align:"center-center",height:"fill",width:"fill",gap:"24px"},{default:o(()=>[a(s,{height:e.heights.col,width:e.widths.col,gap:"24px"},{default:o(()=>[a(s,null,{default:o(()=>[a(t,{variant:"text-button"}),a(t,{variant:"text-overline"})]),_:1}),a(s,null,{default:o(()=>[a(t,{variant:"text-overline"}),a(t,{variant:"text-overline"})]),_:1})]),_:1},8,["height","width"]),a(t,{height:e.heights.image,width:e.widths.image},null,8,["height","width"])]),_:1}),e.$props.editable?(f(),h(u,{key:0,class:"fs-tile-checkbox",height:["40px","32px"],width:["40px","32px"],border:!1},{default:o(()=>[a(c,{modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=()=>e.$emit("update:modelValue",!e.$props.modelValue))},null,8,["modelValue"])]),_:1})):w("",!0)]),_:1},8,["height","width","style"])}const E=_(F,[["render",k]]);F.__docgenInfo={displayName:"FSLoadTile",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSLoadTile.vue"]};export{E as F};
