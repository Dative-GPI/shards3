import{d as O,w as U,y as a,z as f,A as c,M as v,N as L,B as t,m as _,I as $,J as C,K as h,D as q,L as r,E as F,G as S}from"./vue.esm-bundler-Vj2X7okO.js";import{_ as w}from"./lodash-BiW_TGGX.js";import{F as k}from"./FSDataTable-B7lOWiBV.js";import{_ as p}from"./FSSpan-etgUZXmX.js";import{F as B}from"./FSImage-GlEhSKTp.js";import{F as N}from"./FSTagGroup-DpmakQzf.js";import{F as D}from"./FSIconCheck-CHsJ_NYS.js";import{F as E}from"./FSUserOrganisationTileUI-W2fQRVBq.js";import{a as G}from"./useUserOrganisations-BVLle-2A.js";import{u as P,a as z}from"./users-BgX2v5Eq.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VImg-Da3f9R37.js";import"./css-CbCR1nbl.js";import"./useColors-C8ZtkfWa.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./color-CxiNukW_.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VSpacer-YT0o3rZT.js";import"./FSDataTableUI-BHj-0v-F.js";import"./vue-router-Cn9ishJ4.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-B0fh_Rt7.js";import"./FSIcon-DYxpTLuT.js";import"./VIcon-DptP6m9n.js";import"./tag-DxanhlL3.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./index-DjMs4W1j.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./index-joExpvzU.js";import"./form-CgybbRT3.js";import"./FSCard-D5wiJKub.js";import"./FSText-DhsiUbil.js";import"./useSlots-DXmhvOIb.js";import"./FSSearchField-Br299av8.js";import"./FSTextField-BQbZuAPn.js";import"./FSBaseField-DEWTBdWD.js";import"./FSButton-D9OonqCF.js";import"./FSClickable-CfNRAgb8.js";import"./VProgressCircular-DnrgPZB3.js";import"./VField-DaMwaaXY.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DyPMaPr_.js";import"./FSSelectField-C0lWTIfj.js";import"./FSDialogMenu-BPvC2ERZ.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-COYtI-Nu.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-BMnFEOfS.js";import"./FSWrapGroup-CSqxXTzY.js";import"./FSFadeOut-CB131b1X.js";import"./FSRadio-B3ak8RSo.js";import"./VList-DgcfM2IV.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-iR212XTF.js";import"./VMenu-DOKVMVxb.js";import"./FSDivider-BJmJfrRD.js";import"./FSChip-BzumMGJt.js";import"./FSOptionGroup-CE9M3vJW.js";import"./VBtn-CJflX_3O.js";import"./filter-CkY1Z-lm.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./FSImageUI-IzO1fAdz.js";import"./base-CmdGny12.js";import"./FSTag--B310hl1.js";import"./FSTile-d1l9KX5c.js";import"./permissionInfos-BPDgTHQl.js";const y=O({name:"FSBaseUserOrganisationsList",components:{FSDataTable:k,FSImage:B,FSUserOrganisationTileUI:E,FSSpan:p,FSTagGroup:N,FSIconCheck:D},props:{userOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,required:!1,default:()=>[]},itemTo:{type:Function,required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(o){const{getMany:m,entities:l}=G(),u=i=>o.modelValue.includes(i);return U(()=>o.userOrganisationsFilters,(i,n)=>{(!i&&!n||!w.isEqual(i,n))&&m(o.userOrganisationsFilters??void 0)},{immediate:!0}),{userOrganisations:l,userValidityLabel:P,userTypeLabel:z,isSelected:u}}});function M(o,m,l,u,i,n){const T=a("FSImage"),d=a("FSIconCheck"),I=a("FSTagGroup"),V=a("FSUserOrganisationTileUI"),b=a("FSDataTable");return f(),c(b,_({items:o.userOrganisations,itemTo:o.$props.itemTo,modelValue:o.$props.modelValue,tableCode:o.$props.tableCode,"onUpdate:modelValue":m[0]||(m[0]=e=>o.$emit("update:modelValue",e))},o.$attrs),v({"item.imageId":t(({item:e})=>[e.imageId?(f(),c(T,{key:0,height:"32px",width:"32px",imageId:e.imageId},null,8,["imageId"])):q("",!0)]),"item.allowEmails":t(({item:e})=>[r(d,{value:e.allowEmails},null,8,["value"])]),"item.allowSms":t(({item:e})=>[r(d,{value:e.allowSms},null,8,["value"])]),"item.tags":t(({item:e})=>[r(I,{variant:"slide",editable:!1,tags:e.tags},null,8,["tags"])]),"item.validity":t(({item:e})=>[r(p,{font:"text-overline"},{default:t(()=>[F(S(o.userValidityLabel(e.validity)),1)]),_:2},1024)]),"item.userType":t(({item:e})=>[r(p,{font:"text-overline"},{default:t(()=>[F(S(o.userTypeLabel(e.userType)),1)]),_:2},1024)]),"item.tile":t(({item:e,toggleSelect:s})=>[r(V,{roleLabel:e.roleLabel,roleIcon:e.roleIcon,userType:e.userType,imageId:e.imageId,admin:e.admin,name:e.name,to:o.$props.itemTo&&o.$props.itemTo(e),modelValue:o.isSelected(e.id),"onUpdate:modelValue":g=>s(e)},null,8,["roleLabel","roleIcon","userType","imageId","admin","name","to","modelValue","onUpdate:modelValue"])]),_:2},[L(o.$slots,(e,s)=>({name:s,fn:t(g=>[$(o.$slots,s,C(h(g)))])}))]),1040,["items","itemTo","modelValue","tableCode"])}const Lo=A(y,[["render",M]]);y.__docgenInfo={displayName:"FSBaseUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"userOrganisationsFilters",type:{name:"UserOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"itemTo",type:{name:"(item: UserOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSBaseUserOrganisationsList.vue"]};export{Lo as default};
