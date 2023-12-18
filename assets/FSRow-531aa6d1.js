import{g as c,t as p,f,B as d,q as h,x as g,o as w}from"./vue.esm-bundler-c3efb794.js";import{_ as m}from"./_plugin-vue_export-helper-c27b6911.js";const n=c({name:"FSRow",props:{width:{type:String,required:!1,default:"fill"},height:{type:String,required:!1,default:"hug"},align:{type:String,required:!1,default:"top-left"},wrap:{type:Boolean,required:!1,default:!0},gap:{type:Number,required:!1,default:8}},setup(t){const{width:r,height:a,align:s,wrap:o,gap:l}=p(t),u=f(()=>({"--fs-row-flex-wrap":o.value?"wrap":"nowrap","--fs-row-gap":`${l.value}px`,"--fs-row-width":r.value,"--fs-row-height":a.value})),i=f(()=>{let e="fs-row";switch(r.value){case"hug":e+=" fs-row-width-hug";break;case"fill":e+=" fs-row-width-fill";break;default:e+=" fs-row-width-fixed";break}switch(a.value){case"hug":e+=" fs-row-height-hug";break;case"fill":e+=" fs-row-height-fill";break;default:e+=" fs-row-height-fixed";break}switch(s.value){case"top-left":e+=" fs-row-top-left";break;case"top-center":e+=" fs-row-top-center";break;case"top-right":e+=" fs-row-top-right";break;case"center-left":e+=" fs-row-center-left";break;case"center-center":e+=" fs-row-center-center";break;case"center-right":e+=" fs-row-center-right";break;case"bottom-left":e+=" fs-row-bottom-left";break;case"bottom-center":e+=" fs-row-bottom-center";break;case"bottom-right":e+=" fs-row-bottom-right";break}return e});return{style:u,classes:i}}});function b(t,r,a,s,o,l){return w(),d("div",g({style:t.style,class:t.classes},t.$attrs),[h(t.$slots,"default")],16)}const y=m(n,[["render",b]]);n.__docgenInfo={displayName:"FSRow",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:'"hug" | "fill" | string'},required:!1,defaultValue:{func:!1,value:'"fill"'}},{name:"height",type:{name:'"hug" | "fill" | string'},required:!1,defaultValue:{func:!1,value:'"hug"'}},{name:"align",values:["top-left","top-center","top-right","center-left","center-center","center-right","bottom-left","bottom-center","bottom-right"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"top-left"'}},{name:"wrap",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"gap",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"8"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRow.vue"]};export{y as R};
