import{E as n,e as r,H as f,Q as i,L as u,A as c}from"./vue.esm-bundler-a27e881e.js";import{s as a}from"./css-fb381997.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const o=n({name:"FSCol",props:{width:{type:String,required:!1,default:"fill"},height:{type:String,required:!1,default:"hug"},align:{type:String,required:!1,default:"top-left"},padding:{type:[String,Number],required:!1,default:"0"},gap:{type:[String,Number],required:!1,default:"8px"}},setup(t){const s=r(()=>({"--fs-col-padding":a(t.padding),"--fs-col-gap":a(t.gap),"--fs-col-width":a(t.width),"--fs-col-height":a(t.height)})),l=r(()=>{const e=["fs-col"];switch(t.width){case"hug":e.push("fs-col-width-hug");break;case"fill":e.push("fs-col-width-fill");break;default:e.push("fs-col-width-fixed");break}switch(t.height){case"hug":e.push("fs-col-height-hug");break;case"fill":e.push("fs-col-height-fill");break;default:e.push("fs-col-height-fixed");break}switch(t.align){case"top-left":e.push("fs-col-top-left");break;case"top-center":e.push("fs-col-top-center");break;case"top-right":e.push("fs-col-top-right");break;case"center-left":e.push("fs-col-center-left");break;case"center-center":e.push("fs-col-center-center");break;case"center-right":e.push("fs-col-center-right");break;case"bottom-left":e.push("fs-col-bottom-left");break;case"bottom-center":e.push("fs-col-bottom-center");break;case"bottom-right":e.push("fs-col-bottom-right");break}return e});return{style:s,classes:l}}});function d(t,s,l,e,p,g){return f(),i("div",c({style:t.style,class:t.classes},t.$attrs),[u(t.$slots,"default")],16)}const y=h(o,[["render",d]]);o.__docgenInfo={displayName:"FSCol",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:'"hug" | "fill" | string'},required:!1,defaultValue:{func:!1,value:'"fill"'}},{name:"height",type:{name:'"hug" | "fill" | string'},required:!1,defaultValue:{func:!1,value:'"hug"'}},{name:"align",values:["top-left","top-center","top-right","center-left","center-center","center-right","bottom-left","bottom-center","bottom-right"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"top-left"'}},{name:"padding",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"gap",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"8px"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCol.vue"]};export{y as _};
