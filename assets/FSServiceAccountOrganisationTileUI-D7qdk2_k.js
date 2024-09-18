import{d as F,c,y as g,z as r,A as t,B as a,m as I,L as l,E as n,G as i,D as u}from"./vue.esm-bundler-BSyvBTC9.js";import{F as v}from"./FSImage-BxDhaxzU.js";import{_ as s}from"./FSSpan-CCGpb4KF.js";import{F as b}from"./FSTile-ClEhpyRn.js";import{F as d}from"./FSCol-DZA6pxA1.js";import{F as f}from"./FSRow-CA1vgNXx.js";import{u as $}from"./css-DLfrm0pR.js";import{C as w}from"./useColors-DlnF7i6T.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as q}from"./FSIcon-DwJNOKvG.js";const S=F({name:"FSServiceAccountOrganisationTileUI",components:{FSImage:v,FSSpan:s,FSTile:b,FSCol:d,FSRow:f},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:p}=$(),o=c(()=>e.imageId?p.value?90:100:0),m=c(()=>e.imageId?`calc(100% - ${o.value}px - 24px)`:"100%");return{ColorEnum:w,imageSize:o,infoWidth:m}}});function C(e,p,o,m,_,k){const h=g("FSImage"),y=g("FSTile");return r(),t(y,I({activeColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[l(d,{align:"center-center",width:"fill"},{default:a(()=>[l(f,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:a(()=>[l(d,{gap:"4px",width:e.infoWidth},{default:a(()=>[l(s,{font:"text-button",lineClamp:2},{default:a(()=>[n(i(e.$props.label),1)]),_:1}),e.$props.roleLabel?(r(),t(f,{key:0,align:"center-left",gap:"4px",wrap:!1},{default:a(()=>[e.$props.roleIcon?(r(),t(q,{key:0,variant:"soft",color:e.ColorEnum.Dark},{default:a(()=>[n(i(e.$props.roleIcon),1)]),_:1},8,["color"])):u("",!0),l(s,{font:"text-overline",variant:"soft"},{default:a(()=>[n(i(e.$props.roleLabel),1)]),_:1})]),_:1})):u("",!0)]),_:1},8,["width"]),e.$props.imageId?(r(),t(h,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):u("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","editable","width","modelValue"])}const P=V(S,[["render",C]]);S.__docgenInfo={displayName:"FSServiceAccountOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSServiceAccountOrganisationTileUI.vue"]};export{P as F};
