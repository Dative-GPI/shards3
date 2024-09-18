import{d as b,c as u,y as d,z as v,A as h,B as a,m as I,L as r,E as l,G as o,D as C}from"./vue.esm-bundler-BSyvBTC9.js";import{F as _}from"./FSImage-BxDhaxzU.js";import{F as q}from"./FSColor-CSobaj7A.js";import{_ as t}from"./FSSpan-CCGpb4KF.js";import{F as V}from"./FSTile-ClEhpyRn.js";import{F as i}from"./FSCol-DZA6pxA1.js";import{F as n}from"./FSRow-CA1vgNXx.js";import{u as $}from"./css-DLfrm0pR.js";import{C as w}from"./useColors-DlnF7i6T.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S=b({name:"FSGroupTileUI",components:{FSImage:_,FSColor:q,FSSpan:t,FSTile:V,FSCol:i,FSRow:n},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},code:{type:String,required:!1,default:null},recursiveGroupsIds:{type:Array,required:!1,default:()=>[]},recursiveDeviceOrganisationsIds:{type:Array,required:!1,default:()=>[]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]}},setup(e){const{isMobileSized:f}=$(),p=u(()=>e.recursiveGroupsIds.length>99?"99+":e.recursiveGroupsIds.length.toString()),m=u(()=>e.recursiveDeviceOrganisationsIds.length>99?"99+":e.recursiveDeviceOrganisationsIds.length.toString()),s=u(()=>f.value?90:100),c=u(()=>e.imageId?`calc(100% - ${s.value}px - 24px)`:"100%");return{deviceOrganisationsLabel:m,groupsLabel:p,ColorEnum:w,imageSize:s,infoWidth:c}}});function T(e,f,p,m,s,c){const g=d("FSColor"),y=d("FSImage"),F=d("FSTile");return v(),h(F,I({activeColor:e.ColorEnum.Primary,bottomColor:e.ColorEnum.Error,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[r(i,{align:"center-center",width:"fill"},{default:a(()=>[r(n,{align:"center-center",gap:"24px",height:e.imageSize,wrap:!1},{default:a(()=>[r(i,{gap:"12px",width:e.infoWidth},{default:a(()=>[r(i,{gap:"6px"},{default:a(()=>[r(t,{font:"text-button",lineClamp:1},{default:a(()=>[l(o(e.$props.label),1)]),_:1}),r(t,{font:"text-overline",variant:"soft"},{default:a(()=>[l(o(e.$props.code),1)]),_:1})]),_:1}),r(i,{gap:"6px"},{default:a(()=>[r(n,{align:"center-left"},{default:a(()=>[r(g,{padding:"0 8px",height:"24px",color:e.ColorEnum.Primary,border:!1},{default:a(()=>[r(n,{align:"center-center"},{default:a(()=>[r(t,{font:"text-overline"},{default:a(()=>[l(o(e.groupsLabel),1)]),_:1})]),_:1})]),_:1},8,["color"]),r(t,{font:"text-overline"},{default:a(()=>[l(o(e.$tr("ui.group-tile.group(s)","Group(s)")),1)]),_:1})]),_:1}),r(n,{align:"center-left"},{default:a(()=>[r(g,{padding:"0 8px",height:"24px",color:e.ColorEnum.Success,border:!1},{default:a(()=>[r(n,{align:"center-center"},{default:a(()=>[r(t,{font:"text-overline"},{default:a(()=>[l(o(e.deviceOrganisationsLabel),1)]),_:1})]),_:1})]),_:1},8,["color"]),r(t,{font:"text-overline"},{default:a(()=>[l(o(e.$tr("ui.group-tile.device(s)","Device(s)")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["width"]),e.$props.imageId?(v(),h(y,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):C("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","bottomColor","editable","width","modelValue"])}const x=G(S,[["render",T]]);S.__docgenInfo={displayName:"FSGroupTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"code",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"recursiveGroupsIds",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"recursiveDeviceOrganisationsIds",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSGroupTileUI.vue"]};export{x as F};
