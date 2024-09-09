import{d as h,y as m,z as t,A as l,B as a,m as S,L as n,E as o,G as u,D as _}from"./vue.esm-bundler-Vj2X7okO.js";import{F as y}from"./FSClickable-CfNRAgb8.js";import{F}from"./FSImage-GlEhSKTp.js";import{_ as i}from"./FSSpan-etgUZXmX.js";import{_ as s}from"./FSIcon-DYxpTLuT.js";import{_ as d}from"./FSRow-BuYwVvwM.js";import{_ as p}from"./FSCol-Bk577joi.js";import{a as r}from"./charts-BPLoyxCB.js";import{u as C}from"./useTranslations-DyPMaPr_.js";import{C as I}from"./useColors-C8ZtkfWa.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const{$tr:$}=C(),q=e=>{switch(e){case r.Gauge:return"mdi-gauge";case r.Heatmap:return"mdi-blur-linear";case r.Pie:return"mdi-chart-pie";case r.ScoreCard:return"mdi-counter";case r.Slider:return"mdi-ruler";case r.Table:return"mdi-table";case r.XY:return"mdi-chart-line";default:return $("ui.common.none","None")}},f=h({name:"FSChartTileUI",components:{FSIcon:s,FSImage:F,FSRow:d,FSCol:p,FSSpan:i,FSClickable:y},props:{label:{type:String,required:!1,default:null},imageId:{type:String,required:!1,default:null},categoryLabel:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},type:{type:Number,required:!1,default:null}},setup(){return{ColorEnum:I,chartIcon:q}}});function w(e,T,k,v,V,N){const c=m("FSImage"),g=m("FSClickable");return t(),l(g,S({padding:"16px",height:"124px",width:"275px"},e.$attrs),{default:a(()=>[n(d,{align:"center-left",wrap:!1},{default:a(()=>[n(p,{align:"center-left"},{default:a(()=>[n(i,{font:"text-button",lineClamp:2},{default:a(()=>[o(u(e.$props.label),1)]),_:1}),n(s,{color:e.ColorEnum.Error},{default:a(()=>[o(u(e.chartIcon(e.type)),1)]),_:1},8,["color"]),n(i,{font:"text-overline"},{default:a(()=>[o(u(e.$props.categoryLabel),1)]),_:1})]),_:1}),n(p,{align:"center-right",width:"hug"},{default:a(()=>[e.$props.imageId?(t(),l(c,{key:0,height:"92px",width:"92px",imageId:e.$props.imageId},null,8,["imageId"])):e.$props.icon?(t(),l(s,{key:1,size:"92px",icon:e.$props.icon},null,8,["icon"])):_("",!0)]),_:1})]),_:1})]),_:1},16)}const H=b(f,[["render",w]]);f.__docgenInfo={displayName:"FSChartTileUI",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"categoryLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"ChartType"},required:!1,defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSChartTileUI.vue"]};export{H as F};
