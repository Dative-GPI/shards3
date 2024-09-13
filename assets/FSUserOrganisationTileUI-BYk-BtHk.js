import{d as b,c as n,y as h,z as r,A as t,B as a,m as _,L as l,E as u,G as s,D as d}from"./vue.esm-bundler-BSyvBTC9.js";import{F as v}from"./FSImage-CFc3JLJw.js";import{_ as m}from"./FSSpan-CCGpb4KF.js";import{F as w}from"./FSTile-BxIJyXna.js";import{_ as f}from"./FSCol-YmDykHL-.js";import{_ as p}from"./FSRow-CVY2l52N.js";import{u as q}from"./css-DLfrm0pR.js";import{C as V}from"./useColors-B5ivMAr9.js";import{u as C}from"./useTranslations-CdSqQFV3.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as T}from"./FSIcon-DHDofKUo.js";const I=b({name:"FSUserOrganisationTileUI",components:{FSImage:v,FSSpan:m,FSTile:w,FSCol:f,FSRow:p},props:{imageId:{type:String,required:!1,default:null},name:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},admin:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:c}=q(),{$tr:g}=C(),S=n(()=>e.admin?"mdi-crown-outline":e.roleIcon),y=n(()=>e.admin?g("ui.user-organisation.admin","Administrator"):e.roleLabel),o=n(()=>e.imageId?c.value?90:100:0),i=n(()=>e.imageId?`calc(100% - ${o.value}px - 24px)`:"100%");return{ColorEnum:V,imageSize:o,infoWidth:i,roleLabel:y,roleIcon:S}}});function k(e,c,g,S,y,o){const i=h("FSImage"),F=h("FSTile");return r(),t(F,_({activeColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[l(f,{align:"center-center",width:"fill"},{default:a(()=>[l(p,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:a(()=>[l(f,{gap:"4px",width:e.infoWidth},{default:a(()=>[l(m,{font:"text-button",lineClamp:2},{default:a(()=>[u(s(e.$props.name),1)]),_:1}),e.roleLabel?(r(),t(p,{key:0,align:"center-left",gap:"4px",wrap:!1},{default:a(()=>[e.roleIcon?(r(),t(T,{key:0,variant:"soft",color:e.ColorEnum.Dark},{default:a(()=>[u(s(e.roleIcon),1)]),_:1},8,["color"])):d("",!0),l(m,{font:"text-overline",variant:"soft"},{default:a(()=>[u(s(e.roleLabel),1)]),_:1})]),_:1})):d("",!0)]),_:1},8,["width"]),e.$props.imageId?(r(),t(i,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):d("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","editable","width","modelValue"])}const W=$(I,[["render",k]]);I.__docgenInfo={displayName:"FSUserOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"admin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue"]};export{W as F};