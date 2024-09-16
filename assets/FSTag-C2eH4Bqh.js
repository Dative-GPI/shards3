import{d as b,c as n,z as t,A as l,B as o,m as h,I as u,E as i,G as y,D as d,J as f,K as c,L as S}from"./vue.esm-bundler-BSyvBTC9.js";import{F as m}from"./FSIcon-rAhoF0bo.js";import{_ as p}from"./FSSpan-CCGpb4KF.js";import{F as g}from"./FSRow-CA1vgNXx.js";import{C as k,u as C}from"./useColors-Ccf8xVyg.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q}from"./VBtn-CC1p3R0h.js";const v=b({name:"FSTag",components:{FSIcon:m,FSSpan:p,FSRow:g},props:{height:{type:[Array,String,Number],required:!1,default:"hug"},width:{type:[Array,String,Number],required:!1,default:"hug"},label:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:k.Light},editable:{type:Boolean,required:!1,default:!0}},emits:["remove"],setup(e){const{getColors:r}=C(),a=n(()=>r(e.color)),s=n(()=>{switch(e.variant){case"standard":return{"--fs-tag-background-color":a.value.light,"--fs-tag-color":a.value.lightContrast,"--fs-tag-hover-background-color":a.value.base,"--fs-tag-hover-color":a.value.baseContrast,"--fs-tag-active-background-color":a.value.dark,"--fs-tag-active-color":a.value.darkContrast};case"full":return{"--fs-tag-background-color":a.value.base,"--fs-tag-color":a.value.baseContrast,"--fs-tag-hover-background-color":a.value.base,"--fs-tag-hover-color":a.value.baseContrast,"--fs-tag-active-background-color":a.value.dark,"--fs-tag-active-color":a.value.darkContrast}}});return{colors:a,style:s}}});function F(e,r,a,s,V,w){return t(),l(g,h({align:"center-center",class:"fs-tag",height:e.$props.height,width:e.$props.width,style:e.style,wrap:!1},e.$attrs),{default:o(()=>[u(e.$slots,"default",f(c({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(t(),l(p,{key:0,class:"fs-tag-label"},{default:o(()=>[i(y(e.$props.label),1)]),_:1})):d("",!0)]),u(e.$slots,"button",f(c({color:e.$props.color,colors:e.colors})),()=>[e.$props.editable?(t(),l(q,{key:0,class:"fs-tag-button",ripple:!1,onClick:r[0]||(r[0]=N=>e.$emit("remove"))},{default:o(()=>[S(m,{size:"s"},{default:o(()=>[i(" mdi-close ")]),_:1})]),_:1})):d("",!0)])]),_:3},16,["height","width","style"])}const P=$(v,[["render",F]]);v.__docgenInfo={displayName:"FSTag",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"hug"'}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"hug"'}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Light"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"button",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTag.vue"]};export{P as F};
