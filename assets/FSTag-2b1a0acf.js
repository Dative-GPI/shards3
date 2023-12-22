import{m as y,t as S,f as _,n,q as i,u as s,v as u,B as c,C as d,D as k,x as f,y as m,E as C,F}from"./vue.esm-bundler-29da8e49.js";import{C as $,u as p}from"./useColors-ad83dc40.js";import{_ as g}from"./FSIcon-f37b61fc.js";import{_ as b}from"./FSSpan-46176227.js";import{_ as v}from"./FSRow-99784c66.js";import{_ as q}from"./_plugin-vue_export-helper-c27b6911.js";import{V as B}from"./VBtn-121c840b.js";const h=y({name:"FSTag",components:{FSIcon:g,FSSpan:b,FSRow:v},props:{label:{type:String,required:!0},variant:{type:String,required:!1,default:"full"},color:{type:String,required:!1,default:$.Primary},editable:{type:Boolean,required:!1,default:!0}},emits:["remove"],setup(e){const{variant:r,color:t}=S(e),a=p().getContrasts(t.value),o=p().getColors(t.value),l=_(()=>{switch(r.value){case"standard":return{"--fs-tag-background-color":o.light,"--fs-tag-color":a.base,"--fs-tag-hover-background-color":o.base,"--fs-tag-hover-color":a.light,"--fs-tag-active-background-color":o.dark,"--fs-tag-active-color":a.light};case"full":return{"--fs-tag-background-color":o.base,"--fs-tag-color":a.light,"--fs-tag-hover-background-color":o.base,"--fs-tag-hover-color":a.light,"--fs-tag-active-background-color":o.dark,"--fs-tag-active-color":a.light}}});return{colors:o,color:t,style:l}}});function V(e,r,t,a,o,l){return n(),i(v,F({class:"fs-tag",width:"hug",align:"center-left",style:e.style},e.$attrs),{default:s(()=>[u(e.$slots,"default",f(m({color:e.color,colors:e.colors})),()=>[c(b,{class:"fs-tag-label"},{default:s(()=>[d(k(e.$props.label),1)]),_:1})]),u(e.$slots,"button",f(m({color:e.color,colors:e.colors})),()=>[e.$props.editable?(n(),i(B,{key:0,class:"fs-tag-button",ripple:!1,onClick:r[0]||(r[0]=w=>e.$emit("remove"))},{default:s(()=>[c(g,{size:"s"},{default:s(()=>[d(" mdi-close ")]),_:1})]),_:1})):C("",!0)])]),_:3},16,["style"])}const E=q(h,[["render",V]]);h.__docgenInfo={displayName:"FSTag",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"full"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Primary"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"remove"}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]},{name:"button",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSTag.vue"]};export{E as _};
