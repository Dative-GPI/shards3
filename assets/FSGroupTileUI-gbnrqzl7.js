import{d as I,c as u,y as d,z as v,A as S,C as a,m as b,N as r,H as l,I as o,F as _}from"./vue.esm-bundler-CWdIlc2r.js";import{F as C}from"./FSImage-DYrQmZ2M.js";import{F as q}from"./FSColor-WTKpWCLm.js";import{_ as t}from"./FSSpan-WKxYfmnu.js";import{F as V}from"./FSTile-T7YcP5W6.js";import{F as i}from"./FSCol-DyDZsJ9U.js";import{_ as n}from"./FSRow-D9oM1Ufa.js";import{u as w}from"./useBreakpoints-DVmyWqF2.js";import{C as $}from"./useColors-CrLBSafx.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=I({name:"FSGroupTileUI",components:{FSImage:C,FSColor:q,FSSpan:t,FSTile:V,FSCol:i,FSRow:n},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},code:{type:String,required:!1,default:null},recursiveGroupsIds:{type:Array,required:!1,default:()=>[]},recursiveDeviceOrganisationsIds:{type:Array,required:!1,default:()=>[]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]}},setup(e){const{isMobileSized:f}=w(),p=u(()=>e.recursiveGroupsIds.length>99?"99+":e.recursiveGroupsIds.length.toString()),m=u(()=>e.recursiveDeviceOrganisationsIds.length>99?"99+":e.recursiveDeviceOrganisationsIds.length.toString()),s=u(()=>f.value?90:100),c=u(()=>e.imageId?`calc(100% - ${s.value}px - 24px)`:"100%");return{deviceOrganisationsLabel:m,groupsLabel:p,ColorEnum:$,imageSize:s,infoWidth:c}}});function T(e,f,p,m,s,c){const g=d("FSColor"),y=d("FSImage"),F=d("FSTile");return v(),S(F,b({activeColor:e.ColorEnum.Primary,bottomColor:e.ColorEnum.Error,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[r(i,{align:"center-center",width:"fill"},{default:a(()=>[r(n,{align:"center-center",gap:"24px",height:e.imageSize,wrap:!1},{default:a(()=>[r(i,{gap:"12px",width:e.infoWidth},{default:a(()=>[r(i,{gap:"6px"},{default:a(()=>[r(t,{font:"text-button",lineClamp:1},{default:a(()=>[l(o(e.$props.label),1)]),_:1}),r(t,{font:"text-overline",variant:"soft"},{default:a(()=>[l(o(e.$props.code),1)]),_:1})]),_:1}),r(i,{gap:"6px"},{default:a(()=>[r(n,{align:"center-left"},{default:a(()=>[r(g,{padding:"0 8px",height:"24px",color:e.ColorEnum.Primary,border:!1},{default:a(()=>[r(n,{align:"center-center"},{default:a(()=>[r(t,{font:"text-overline"},{default:a(()=>[l(o(e.groupsLabel),1)]),_:1})]),_:1})]),_:1},8,["color"]),r(t,{font:"text-overline"},{default:a(()=>[l(o(e.$tr("ui.group-tile.groups","Group(s)")),1)]),_:1})]),_:1}),r(n,{align:"center-left"},{default:a(()=>[r(g,{padding:"0 8px",height:"24px",color:e.ColorEnum.Success,border:!1},{default:a(()=>[r(n,{align:"center-center"},{default:a(()=>[r(t,{font:"text-overline"},{default:a(()=>[l(o(e.deviceOrganisationsLabel),1)]),_:1})]),_:1})]),_:1},8,["color"]),r(t,{font:"text-overline"},{default:a(()=>[l(o(e.$tr("ui.group-tile.devices","Device(s)")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["width"]),e.$props.imageId?(v(),S(y,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):_("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","bottomColor","editable","width","modelValue"])}const x=G(h,[["render",T]]);h.__docgenInfo={displayName:"FSGroupTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"code",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"recursiveGroupsIds",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"recursiveDeviceOrganisationsIds",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSGroupTileUI.vue"]};export{x as F};
