import{g as b,j as n,K as t,L as s,M as r,x as y,R as u,N as i,O as S,P as c,S as d,U as f,z as k}from"./vue.esm-bundler-0a1af505.js";import{_ as p}from"./FSIcon-4f828578.js";import{_ as m}from"./FSSpan-50615fe3.js";import{_ as g}from"./FSRow-852c6353.js";import{C,u as h}from"./useColors-b80ccbdd.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{V as _}from"./VBtn-bd41b5e0.js";const v=b({name:"FSTag",components:{FSIcon:p,FSSpan:m,FSRow:g},props:{label:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:C.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["remove"],setup(e){const{getColors:o}=h(),a=n(()=>o(e.color)),l=n(()=>{switch(e.variant){case"standard":return{"--fs-tag-background-color":a.value.light,"--fs-tag-color":a.value.lightContrast,"--fs-tag-hover-background-color":a.value.base,"--fs-tag-hover-color":a.value.baseContrast,"--fs-tag-active-background-color":a.value.dark,"--fs-tag-active-color":a.value.darkContrast};case"full":return{"--fs-tag-background-color":a.value.base,"--fs-tag-color":a.value.baseContrast,"--fs-tag-hover-background-color":a.value.base,"--fs-tag-hover-color":a.value.baseContrast,"--fs-tag-active-background-color":a.value.dark,"--fs-tag-active-color":a.value.darkContrast}}});return{colors:a,style:l}}});function F(e,o,a,l,V,q){return t(),s(g,y({class:"fs-tag",width:"hug",align:"center-left",style:e.style,wrap:!1},e.$attrs),{default:r(()=>[u(e.$slots,"default",d(f({color:e.$props.color,colors:e.colors})),()=>[e.$props.label?(t(),s(m,{key:0,class:"fs-tag-label"},{default:r(()=>[i(S(e.$props.label),1)]),_:1})):c("",!0)]),u(e.$slots,"button",d(f({color:e.$props.color,colors:e.colors})),()=>[e.$props.editable?(t(),s(_,{key:0,class:"fs-tag-button",ripple:!1,onClick:o[0]||(o[0]=w=>e.$emit("remove"))},{default:r(()=>[k(p,{size:"s"},{default:r(()=>[i(" mdi-close ")]),_:1})]),_:1})):c("",!0)])]),_:3},16,["style"])}const E=$(v,[["render",F]]);v.__docgenInfo={displayName:"FSTag",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"button",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTag.vue"]};export{E as _};
