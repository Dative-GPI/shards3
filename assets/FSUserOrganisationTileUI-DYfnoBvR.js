import{d as b,c as r,y as h,z as n,A as t,B as a,m as v,L as l,E as u,G as s,D as d}from"./vue.esm-bundler-DjjVIdVI.js";import{F as q}from"./FSImage-CVDbXXAf.js";import{_ as f}from"./FSSpan-D1pceTli.js";import{F as w}from"./FSTile-FoHTNOpG.js";import{F as m}from"./FSCol-TPWSQPHs.js";import{F as p}from"./FSRow-CpogXLW8.js";import{u as V}from"./css-BkQhD285.js";import{C as $}from"./useColors-DQIAXgK6.js";import{u as C}from"./useTranslations-f9CWAvtI.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as T}from"./FSIcon-8gYhOFD7.js";const I=b({name:"FSUserOrganisationTileUI",components:{FSImage:q,FSSpan:f,FSTile:w,FSCol:m,FSRow:p},props:{imageId:{type:String,required:!1,default:null},name:{type:String,required:!1,default:null},roleIcon:{type:String,required:!1,default:null},roleLabel:{type:String,required:!1,default:null},admin:{type:Boolean,required:!1,default:!1},width:{type:[Array,String,Number],required:!1,default:()=>[352,336]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:c}=V(),{$tr:g}=C(),S=r(()=>e.admin?"mdi-crown-outline":e.roleIcon),y=r(()=>e.admin?g("ui.user-organisation.admin","Administrator"):e.roleLabel),o=r(()=>e.imageId?c.value?90:100:0),i=r(()=>e.imageId?`calc(100% - ${o.value}px - 24px)`:"100%");return{ColorEnum:$,imageSize:o,infoWidth:i,roleLabel:y,roleIcon:S}}});function k(e,c,g,S,y,o){const i=h("FSImage"),F=h("FSTile");return n(),t(F,v({activeColor:e.ColorEnum.Primary,editable:e.$props.editable,width:e.$props.width,modelValue:e.$props.modelValue},e.$attrs),{default:a(()=>[l(m,{align:"center-center",width:"fill"},{default:a(()=>[l(p,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:a(()=>[l(m,{gap:"4px",width:e.infoWidth},{default:a(()=>[l(f,{font:"text-button",lineClamp:2},{default:a(()=>[u(s(e.$props.name),1)]),_:1}),e.roleLabel?(n(),t(p,{key:0,align:"center-left",gap:"4px",wrap:!1},{default:a(()=>[e.roleIcon?(n(),t(T,{key:0,variant:"soft",color:e.ColorEnum.Dark},{default:a(()=>[u(s(e.roleIcon),1)]),_:1},8,["color"])):d("",!0),l(f,{font:"text-overline",variant:"soft"},{default:a(()=>[u(s(e.roleLabel),1)]),_:1})]),_:1})):d("",!0)]),_:1},8,["width"]),e.$props.imageId?(n(),t(i,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):d("",!0)]),_:1},8,["height"])]),_:1})]),_:1},16,["activeColor","editable","width","modelValue"])}const G=_(I,[["render",k]]);I.__docgenInfo={displayName:"FSUserOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"name",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"roleLabel",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"admin",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:"() => [352, 336]"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue"]};export{G as F};
