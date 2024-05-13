import{j as h,e as _,I as c,J as r,K as a,L as t,A as s,U as $,V as m,N as S,R as M,d as q,B as j,S as y,Q as b,Z as w,F as I}from"./vue.esm-bundler-41eda46b.js";import{F}from"./FSButton-d0a22eb6.js";import{_ as V}from"./FSWindow-c222eb4f.js";import{F as A}from"./FSCard-8067a4d4.js";import{F as R}from"./FSChip-4ec1aacf.js";import{F as E}from"./FSText-f60941a6.js";import{_ as k}from"./FSSpan-8af5ddcc.js";import{_ as g}from"./FSCol-282cc158.js";import{_ as u}from"./FSRow-1508d56d.js";import{u as x}from"./useAppTimeZone-fd64682f.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{F as U}from"./FSColor-c82589e4.js";import{_ as z}from"./FSIcon-713345eb.js";import{C as N}from"./useColors-baaa98f5.js";import{u as W}from"./css-35e8563f.js";import{V as Z}from"./VMenu-499c8185.js";const T=h({name:"FSStatusCard",components:{FSButton:F,FSCard:A,FSChip:R,FSText:E,FSSpan:k,FSCol:g,FSRow:u},props:{modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},emits:["close"],setup(e){const{epochToLongTimeFormat:o}=x(),d=_(()=>e.statusGroup.label||e.modelStatus.label);return{deviceTimestamp:_(()=>e.statusGroup.sourceTimestamp?o(e.statusGroup.sourceTimestamp):""),statusLabel:d}}});function J(e,o,d,f,v,p){const n=c("FSChip"),l=c("FSText"),i=c("FSCard");return r(),a(i,{padding:"2px 2px 8px 2px",elevation:!0,border:!1},{default:t(()=>[s(g,{align:"center-center"},{default:t(()=>[s(g,{align:"center-center",gap:"0px"},{default:t(()=>[s(u,{align:"center-right"},{default:t(()=>[s(F,{icon:"mdi-close",variant:"icon",onClick:o[0]||(o[0]=G=>e.$emit("close"))})]),_:1}),s(g,{align:"center-center",padding:"0px 24px",gap:"12px"},{default:t(()=>[s(n,{prependIcon:e.$props.statusGroup.icon,color:e.$props.statusGroup.color,label:e.statusLabel},null,8,["prependIcon","color","label"]),e.$props.statusGroup.value?(r(),a(u,{key:0,width:"hug"},{default:t(()=>[s(l,{font:"text-button",color:e.$props.statusGroup.color},{default:t(()=>[$(m(e.$props.statusGroup.value)+" "+m(e.$props.statusGroup.unit),1)]),_:1},8,["color"])]),_:1})):S("",!0),e.$props.statusGroup.value&&e.$props.modelStatus.groupById&&e.$props.statusGroup.groupByValue?(r(),a(u,{key:1,width:"hug"},{default:t(()=>[s(k,null,{default:t(()=>[$(m(e.$props.modelStatus.groupByLabel)+" "+m(e.$props.statusGroup.groupByValue),1)]),_:1})]),_:1})):S("",!0)]),_:1})]),_:1}),e.deviceTimestamp?(r(),a(u,{key:0,padding:"0px 24px",width:"hug"},{default:t(()=>[s(k,{font:"text-overline"},{default:t(()=>[$(m(e.deviceTimestamp),1)]),_:1})]),_:1})):S("",!0)]),_:1})]),_:1})}const K=C(T,[["render",J]]);T.__docgenInfo={displayName:"FSStatusCard",exportName:"default",description:"",tags:{},props:[{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0}],events:[{name:"close"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusCard.vue"]};const B=h({name:"FSColorIcon",components:{FSColor:U,FSIcon:z,FSRow:u},props:{size:{type:[Array,String,Number],required:!1,default:"m"},color:{type:String,required:!1,default:N.Dark}},setup(e){const{isMobileSized:o}=W();return{size:_(()=>{switch(e.size){case"s":return o.value?"18px":"20px";case"m":return o.value?"20px":"26px";case"l":return o.value?"36px":"40px";default:return e.size}})}}});function P(e,o,d,f,v,p){const n=c("FSColor");return r(),a(n,{class:"fs-color-icon",color:e.$props.color,border:!1,height:e.size,width:e.size},{default:t(()=>[s(u,{align:"center-center"},{default:t(()=>[s(z,{color:e.$props.color,size:e.$props.size},{default:t(()=>[M(e.$slots,"default")]),_:3},8,["color","size"])]),_:3})]),_:3},8,["color","height","width"])}const Q=C(B,[["render",P]]);B.__docgenInfo={displayName:"FSColorIcon",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:'"s" | "m" | "l" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"m"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSColorIcon.vue"]};const D=h({name:"FSStatus",components:{FSStatusCard:K,FSColorIcon:Q},props:{modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(){return{menu:q(!1)}}});function H(e,o,d,f,v,p){const n=c("FSColorIcon"),l=c("FSStatusCard");return r(),a(Z,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":o[2]||(o[2]=i=>e.menu=i)},{activator:t(({props:i})=>[s(n,j({class:"fs-stopclick",size:"m",color:e.$props.statusGroup.color,onClick:o[0]||(o[0]=y(()=>{},["prevent","stop"]))},i),{default:t(()=>[$(m(e.$props.statusGroup.icon),1)]),_:2},1040,["color"])]),default:t(()=>[s(l,{modelStatus:e.$props.modelStatus,statusGroup:e.$props.statusGroup,onClose:o[1]||(o[1]=i=>e.menu=!1)},null,8,["modelStatus","statusGroup"])]),_:1},8,["modelValue"])}const X=C(D,[["render",H]]);D.__docgenInfo={displayName:"FSStatus",exportName:"default",description:"",tags:{},props:[{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatus.vue"]};const O=h({name:"FSStatusesCarousel",components:{FSButton:F,FSWindow:V,FSStatus:X,FSRow:u},props:{modelStatuses:{type:Array,required:!0},deviceStatuses:{type:Array,required:!0}},setup(e){const o=q(0);return{ColorEnum:N,tab:o,deviceStatus:p=>{const n=e.deviceStatuses.find(l=>l.modelStatusId===p.id);return n!=null?n.statusGroups:p.showDefault?[{label:p.label,icon:p.iconDefault,color:p.colorDefault}]:[]},previous:()=>{o.value>0?o.value--:o.value=e.modelStatuses.length-1},next:()=>{o.value<e.modelStatuses.length-1?o.value++:o.value=0}}}});function Y(e,o,d,f,v,p){const n=c("FSStatus");return r(),a(u,{wrap:!1},{default:t(()=>[e.$props.modelStatuses.length>1?(r(),a(F,{key:0,icon:"mdi-chevron-left",class:"fs-stopclick",variant:"icon",onClick:y(e.previous,["prevent","stop"])},null,8,["onClick"])):S("",!0),s(V,{width:"100%",modelValue:e.tab},{default:t(()=>[(r(!0),b(I,null,w(e.$props.modelStatuses,(l,i)=>(r(),a(u,{align:"center-center",gap:"4px",wrap:!1,key:i},{default:t(()=>[(r(!0),b(I,null,w(e.deviceStatus(l),(G,L)=>(r(),a(n,{modelStatus:l,statusGroup:G,key:L},null,8,["modelStatus","statusGroup"]))),128))]),_:2},1024))),128))]),_:1},8,["modelValue"]),e.$props.modelStatuses.length>1?(r(),a(F,{key:1,icon:"mdi-chevron-right",class:"fs-stopclick",variant:"icon",onClick:y(e.next,["prevent","stop"])},null,8,["onClick"])):S("",!0)]),_:1})}const Fe=C(O,[["render",Y]]);O.__docgenInfo={displayName:"FSStatusesCarousel",exportName:"default",description:"",tags:{},props:[{name:"modelStatuses",type:{name:"FSModelStatus[]"},required:!0},{name:"deviceStatuses",type:{name:"FSDeviceStatus[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusesCarousel.vue"]};export{Fe as F,Q as a,X as b};
