import{d as l,c as t,z as u,A as i,C as f,m as c,K as d}from"./vue.esm-bundler-CWdIlc2r.js";import{u as m}from"./useBreakpoints-DVmyWqF2.js";import{u as p}from"./useColors-CrLBSafx.js";import{s as g}from"./css-rhgMLwoH.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as v}from"./VIcon-Bo7R9vIQ.js";const n=l({name:"FSIcon",props:{size:{type:[Array,String,Number],required:!1,default:"m"},color:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:"base"}},setup(e){const{isMobileSized:s}=m(),{getColors:o}=p(),r=t(()=>{if(e.color)return o(e.color)[e.variant]}),a=t(()=>{switch(e.size){case"s":return{"--fs-icon-font-size":s.value?"14px":"16px"};case"m":return{"--fs-icon-font-size":s.value?"16px":"20px"};case"l":return{"--fs-icon-font-size":s.value?"20px":"24px"};default:return{"--fs-icon-font-size":g(e.size)}}});return{color:r,style:a}}});function z(e,s,o,r,a,h){return u(),i(v,c({class:"fs-icon",color:e.color,style:e.style},e.$attrs),{default:f(()=>[d(e.$slots,"default")]),_:3},16,["color","style"])}const q=y(n,[["render",z]]);n.__docgenInfo={displayName:"FSIcon",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:'"s" | "m" | "l" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"m"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"variant",values:["base","baseContrast","soft","softContrast","light","lightContrast","dark","darkContrast"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"base"'}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSIcon.vue"]};export{q as F};
