import{d as n,c as t,y as l,z as d,A as u,B as i,m as p,I as c,J as f,K as m}from"./vue.esm-bundler-gWFTcvUr.js";import{F as C}from"./FSCard-B-jXuIJy.js";import{C as v,u as g}from"./useColors-4hVwr1YC.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";const r=n({name:"FSColor",components:{FSCard:C},props:{variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:v.Primary},border:{type:Boolean,required:!1,default:!0}},setup(o){const{getColors:e}=g();return{colors:t(()=>e(o.color))}}});function F(o,e,a,S,$,b){const s=l("FSCard");return d(),u(s,p({variant:o.$props.variant,border:o.$props.border,color:o.$props.color},o.$attrs),{default:i(()=>[c(o.$slots,"default",f(m({color:o.$props.color,colors:o.colors})))]),_:3},16,["variant","border","color"])}const P=y(r,[["render",F]]);r.__docgenInfo={displayName:"FSColor",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"default",scoped:!0,bindings:[{name:"color",title:"binding"},{name:"colors",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSColor.vue"]};export{P as F};