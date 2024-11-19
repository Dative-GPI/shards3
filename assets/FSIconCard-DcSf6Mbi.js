import{d as u,c as s,y as i,z as d,A as f,C as a,N as r,H as c,I as p}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as m}from"./FSCard-Bfo4Z0Zf.js";import{F as n}from"./FSIcon-DfjSexyz.js";import{C as g}from"./useColors-DnoeDx-P.js";import{s as C}from"./css-CxoeZkpP.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as S}from"./FSRow-CSQtiyAx.js";const o=u({name:"FSIconCard",components:{FSCard:m,FSIcon:n},props:{size:{type:[Array,String,Number],required:!1,default:null},backgroundColor:{type:[Array,String],required:!1,default:null},backgroundVariant:{type:String,required:!1,default:"background"},icon:{type:String,required:!1,default:"mdi-shape"},iconColor:{type:String,required:!1,default:g.Dark},iconVariant:{type:String,required:!1,default:"base"},iconSize:{type:[Array,String,Number],required:!1,default:null},border:{type:Boolean,required:!1,default:!0}},setup(e){return{actualIconSize:s(()=>e.iconSize?e.iconSize:e.size?`calc(${C(e.size)} * 0.42)`:"42px")}}});function y(e,t,h,z,V,k){const l=i("FSCard");return d(),f(l,{variant:e.$props.backgroundVariant,color:e.$props.backgroundColor,border:e.$props.border,height:e.$props.size,width:e.$props.size},{default:a(()=>[r(S,{align:"center-center"},{default:a(()=>[r(n,{variant:e.$props.iconVariant,color:e.$props.iconColor,size:e.actualIconSize},{default:a(()=>[c(p(e.$props.icon),1)]),_:1},8,["variant","color","size"])]),_:1})]),_:1},8,["variant","color","border","height","width"])}const B=b(o,[["render",y]]);o.__docgenInfo={displayName:"FSIconCard",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"backgroundColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"backgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-shape"'}},{name:"iconColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"iconVariant",values:["base","baseContrast","soft","softContrast","light","lightContrast","dark","darkContrast"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"base"'}},{name:"iconSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"border",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSIconCard.vue"]};export{B as F};
