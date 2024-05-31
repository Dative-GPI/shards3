import{f as I,g as u,D as s,E as v,F as S,G as a,A as b,M as r,K as o,L as l,I as y}from"./vue.esm-bundler-838daa40.js";import{F as C}from"./FSImage-5d8436c5.js";import{F as V}from"./FSColor-4a9c9b96.js";import{F as q}from"./FSText-204f6595.js";import{F as $}from"./FSTile-ffde2d98.js";import{_ as i}from"./FSCol-44fe82a9.js";import{_ as n}from"./FSRow-753b58e5.js";import{u as w}from"./css-67cfec15.js";import{C as T}from"./useColors-95e93720.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";const h=I({name:"FSGroupTileUI",components:{FSImage:C,FSColor:V,FSText:q,FSTile:$,FSCol:i,FSRow:n},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},code:{type:String,required:!1,default:null},recursiveGroupsIds:{type:Array,required:!1,default:()=>[]},recursiveDeviceOrganisationsIds:{type:Array,required:!1,default:()=>[]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:d}=w(),p=u(()=>e.recursiveGroupsIds.length>99?"99+":e.recursiveGroupsIds.length.toString()),m=u(()=>e.recursiveDeviceOrganisationsIds.length>99?"99+":e.recursiveDeviceOrganisationsIds.length.toString()),f=u(()=>d.value?90:100),c=u(()=>{let t=d.value?288:304;return e.imageId&&(t-=f.value),t});return{ColorEnum:T,groupsLabel:p,deviceOrganisationsLabel:m,imageSize:f,infoWidth:c}}});function D(e,d,p,m,f,c){const t=s("FSText"),g=s("FSColor"),F=s("FSImage"),_=s("FSTile");return v(),S(_,b({bottomColor:e.ColorEnum.Error,editable:e.$props.editable,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[r(i,{align:"center-center",width:"fill"},{default:a(()=>[r(n,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:a(()=>[r(i,{gap:"12px"},{default:a(()=>[r(i,{gap:"6px",width:e.infoWidth},{default:a(()=>[r(t,{font:"text-button"},{default:a(()=>[o(l(e.$props.label),1)]),_:1}),r(t,{font:"text-overline",variant:"soft"},{default:a(()=>[o(l(e.$props.code),1)]),_:1})]),_:1},8,["width"]),r(i,{gap:"6px"},{default:a(()=>[r(n,{align:"center-left"},{default:a(()=>[r(g,{padding:"0 8px",height:"24px",color:e.ColorEnum.Primary,border:!1},{default:a(()=>[r(n,{align:"center-center"},{default:a(()=>[r(t,{font:"text-overline"},{default:a(()=>[o(l(e.groupsLabel),1)]),_:1})]),_:1})]),_:1},8,["color"]),r(t,{font:"text-overline"},{default:a(()=>[o(l(e.$tr("ui.group-tile.group(s)","Group(s)")),1)]),_:1})]),_:1}),r(n,{align:"center-left"},{default:a(()=>[r(g,{padding:"0 8px",height:"24px",color:e.ColorEnum.Success,border:!1},{default:a(()=>[r(n,{align:"center-center"},{default:a(()=>[r(t,{font:"text-overline"},{default:a(()=>[o(l(e.deviceOrganisationsLabel),1)]),_:1})]),_:1})]),_:1},8,["color"]),r(t,{font:"text-overline"},{default:a(()=>[o(l(e.$tr("ui.group-tile.device(s)","Device(s)")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e.$props.imageId?(v(),S(F,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):y("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["bottomColor","editable","modelValue"])}const M=G(h,[["render",D]]);h.__docgenInfo={displayName:"FSGroupTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"code",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"recursiveGroupsIds",type:{name:"String[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"recursiveDeviceOrganisationsIds",type:{name:"String[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSGroupTileUI.vue"]};export{M as F};
