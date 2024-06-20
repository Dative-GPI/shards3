import{f as u,g as n,E as o,H as f,Q as i,x as h}from"./vue.esm-bundler-a0893183.js";import{s as r}from"./css-03aed76d.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";const l=u({name:"FSRow",props:{height:{type:[Array,String,Number],required:!1,default:"hug"},width:{type:[Array,String,Number],required:!1,default:"fill"},padding:{type:[Array,String,Number],required:!1,default:"0"},gap:{type:[Array,String,Number],required:!1,default:"8px"},align:{type:String,required:!1,default:"top-left"},wrap:{type:Boolean,required:!1,default:!0}},setup(t){const a=n(()=>({"--fs-row-flex-wrap":t.wrap?"wrap":"nowrap","--fs-row-padding":r(t.padding),"--fs-row-gap":r(t.gap),"--fs-row-width":r(t.width),"--fs-row-height":r(t.height)})),s=n(()=>{const e=["fs-row"];switch(t.width){case"hug":e.push("fs-row-width-hug");break;case"fill":e.push("fs-row-width-fill");break;default:e.push("fs-row-width-fixed");break}switch(t.height){case"hug":e.push("fs-row-height-hug");break;case"fill":e.push("fs-row-height-fill");break;default:e.push("fs-row-height-fixed");break}switch(t.align){case"top-left":e.push("fs-row-top-left");break;case"top-center":e.push("fs-row-top-center");break;case"top-right":e.push("fs-row-top-right");break;case"center-left":e.push("fs-row-center-left");break;case"center-center":e.push("fs-row-center-center");break;case"center-right":e.push("fs-row-center-right");break;case"bottom-left":e.push("fs-row-bottom-left");break;case"bottom-center":e.push("fs-row-bottom-center");break;case"bottom-right":e.push("fs-row-bottom-right");break}return e});return{style:a,classes:s}}});function p(t,a,s,e,c,g){return o(),f("div",h({style:t.style,class:t.classes},t.$attrs),[i(t.$slots,"default")],16)}const y=d(l,[["render",p]]);l.__docgenInfo={displayName:"FSRow",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"hug"'}},{name:"width",type:{name:'"hug" | "fill" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"fill"'}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"8px"'}},{name:"align",values:["top-left","top-center","top-right","center-left","center-center","center-right","bottom-left","bottom-center","bottom-right"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"top-left"'}},{name:"wrap",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSRow.vue"]};export{y as _};