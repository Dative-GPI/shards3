import{d as h,c as y,y as c,z as s,A as a,B as o,L as r,D as f,E as $,G as m,I as M,b as q,m as j,H as _,C as G,N as w,F as I}from"./vue.esm-bundler--l9E1zCM.js";import{F}from"./FSButton-B-GBc2hj.js";import{F as V}from"./FSWindow-SAzokL0I.js";import{F as A}from"./FSCard-CJMrkqFE.js";import{F as E}from"./FSChip-Ch1mvzjp.js";import{F as R}from"./FSText-CaQcclGn.js";import{_ as b}from"./FSSpan-Drxl5cqQ.js";import{_ as g}from"./FSCol-BA_LQqMv.js";import{_ as u}from"./FSRow-DW_Nd3uI.js";import{u as x}from"./useDateFormat-BeXuLiFb.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as H}from"./FSColor-xZzyVTa3.js";import{_ as z}from"./FSIcon-DBiV-GrJ.js";import{C as N}from"./useColors-Bv0V9Qz7.js";import{u as P}from"./css-CqyMbT8T.js";import{V as U}from"./VMenu-DGJWui2w.js";const B=h({name:"FSStatusCard",components:{FSButton:F,FSCard:A,FSChip:E,FSText:R,FSSpan:b,FSCol:g,FSRow:u},props:{closable:{type:Boolean,default:!0},modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},emits:["close"],setup(e){const{epochToLongTimeFormat:t}=x(),d=y(()=>e.statusGroup.label||e.modelStatus.label);return{deviceTimestamp:y(()=>e.statusGroup.sourceTimestamp?t(e.statusGroup.sourceTimestamp):""),statusLabel:d}}});function W(e,t,d,S,v,l){const n=c("FSChip"),p=c("FSText"),i=c("FSCard");return s(),a(i,{padding:"2px 2px 8px 2px",elevation:!0,border:!1},{default:o(()=>[r(g,{align:"center-center"},{default:o(()=>[r(g,{align:"center-center",gap:"0px"},{default:o(()=>[e.$props.closable?(s(),a(u,{key:0,align:"center-right"},{default:o(()=>[r(F,{icon:"mdi-close",variant:"icon",onClick:t[0]||(t[0]=k=>e.$emit("close"))})]),_:1})):f("",!0),r(g,{align:"center-center",padding:"0px 24px",gap:"12px"},{default:o(()=>[r(n,{prependIcon:e.$props.statusGroup.icon,color:e.$props.statusGroup.color,label:e.statusLabel},null,8,["prependIcon","color","label"]),e.$props.statusGroup.value?(s(),a(u,{key:0,width:"hug"},{default:o(()=>[r(p,{font:"text-button",color:e.$props.statusGroup.color},{default:o(()=>[$(m(e.$props.statusGroup.value)+" "+m(e.$props.statusGroup.unit),1)]),_:1},8,["color"])]),_:1})):f("",!0),e.$props.statusGroup.value&&e.$props.modelStatus.groupById&&e.$props.statusGroup.groupByValue?(s(),a(u,{key:1,width:"hug"},{default:o(()=>[r(b,null,{default:o(()=>[$(m(e.$props.modelStatus.groupByLabel)+" "+m(e.$props.statusGroup.groupByValue),1)]),_:1})]),_:1})):f("",!0)]),_:1})]),_:1}),e.deviceTimestamp?(s(),a(u,{key:0,padding:"0px 24px",width:"hug"},{default:o(()=>[r(b,{font:"text-overline"},{default:o(()=>[$(m(e.deviceTimestamp),1)]),_:1})]),_:1})):f("",!0)]),_:1})]),_:1})}const J=C(B,[["render",W]]);B.__docgenInfo={displayName:"FSStatusCard",exportName:"default",description:"",tags:{},props:[{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0}],events:[{name:"close"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusCard.vue"]};const T=h({name:"FSColorIcon",components:{FSColor:H,FSIcon:z,FSRow:u},props:{size:{type:[Array,String,Number],required:!1,default:"m"},color:{type:String,required:!1,default:N.Dark}},setup(e){const{isMobileSized:t}=P();return{size:y(()=>{switch(e.size){case"s":return t.value?"18px":"20px";case"m":return t.value?"20px":"26px";case"l":return t.value?"36px":"40px";default:return e.size}})}}});function K(e,t,d,S,v,l){const n=c("FSColor");return s(),a(n,{class:"fs-color-icon",color:e.$props.color,border:!1,height:e.size,width:e.size},{default:o(()=>[r(u,{align:"center-center"},{default:o(()=>[r(z,{color:e.$props.color,size:e.$props.size},{default:o(()=>[M(e.$slots,"default")]),_:3},8,["color","size"])]),_:3})]),_:3},8,["color","height","width"])}const Q=C(T,[["render",K]]);T.__docgenInfo={displayName:"FSColorIcon",exportName:"default",description:"",tags:{},props:[{name:"size",type:{name:'"s" | "m" | "l" | string[] | number[] | string | number | null'},required:!1,defaultValue:{func:!1,value:'"m"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSColorIcon.vue"]};const D=h({name:"FSStatus",components:{FSStatusCard:J,FSColorIcon:Q},props:{modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(){return{menu:q(!1)}}});function X(e,t,d,S,v,l){const n=c("FSColorIcon"),p=c("FSStatusCard");return s(),a(U,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":t[2]||(t[2]=i=>e.menu=i)},{activator:o(({props:i})=>[r(n,j({class:"fs-stopclick",size:"m",color:e.$props.statusGroup.color,onClick:t[0]||(t[0]=_(()=>{},["prevent","stop"]))},i),{default:o(()=>[$(m(e.$props.statusGroup.icon),1)]),_:2},1040,["color"])]),default:o(()=>[r(p,{modelStatus:e.$props.modelStatus,statusGroup:e.$props.statusGroup,onClose:t[1]||(t[1]=i=>e.menu=!1)},null,8,["modelStatus","statusGroup"])]),_:1},8,["modelValue"])}const Y=C(D,[["render",X]]);D.__docgenInfo={displayName:"FSStatus",exportName:"default",description:"",tags:{},props:[{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatus.vue"]};const O=h({name:"FSStatusesCarousel",components:{FSButton:F,FSWindow:V,FSStatus:Y,FSRow:u},props:{modelStatuses:{type:Array,required:!0},deviceStatuses:{type:Array,required:!0}},setup(e){const t=q(0);return{ColorEnum:N,tab:t,deviceStatus:l=>{const n=e.deviceStatuses.find(p=>p.modelStatusId===l.id);return n!=null?n.statusGroups:l.showDefault?[{label:l.label,icon:l.iconDefault,color:l.colorDefault}]:[]},previous:()=>{t.value>0?t.value--:t.value=e.modelStatuses.length-1},next:()=>{t.value<e.modelStatuses.length-1?t.value++:t.value=0}}}});function Z(e,t,d,S,v,l){const n=c("FSStatus");return s(),a(u,{wrap:!1},{default:o(()=>[e.$props.modelStatuses.length>1?(s(),a(F,{key:0,icon:"mdi-chevron-left",class:"fs-stopclick",variant:"icon",onClick:_(e.previous,["prevent","stop"])},null,8,["onClick"])):f("",!0),r(V,{width:"100%",modelValue:e.tab},{default:o(()=>[(s(!0),G(I,null,w(e.$props.modelStatuses,(p,i)=>(s(),a(u,{align:"center-center",gap:"4px",wrap:!1,key:i},{default:o(()=>[(s(!0),G(I,null,w(e.deviceStatus(p),(k,L)=>(s(),a(n,{modelStatus:p,statusGroup:k,key:L},null,8,["modelStatus","statusGroup"]))),128))]),_:2},1024))),128))]),_:1},8,["modelValue"]),e.$props.modelStatuses.length>1?(s(),a(F,{key:1,icon:"mdi-chevron-right",class:"fs-stopclick",variant:"icon",onClick:_(e.next,["prevent","stop"])},null,8,["onClick"])):f("",!0)]),_:1})}const Fe=C(O,[["render",Z]]);O.__docgenInfo={displayName:"FSStatusesCarousel",exportName:"default",description:"",tags:{},props:[{name:"modelStatuses",type:{name:"FSModelStatus[]"},required:!0},{name:"deviceStatuses",type:{name:"FSDeviceStatus[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusesCarousel.vue"]};export{Fe as F,Q as a,Y as b};
