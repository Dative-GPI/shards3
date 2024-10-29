import{d as I,w as U,y as a,z as F,A as S,B as h,O as $,C as o,m as b,K as C,L as _,M as q,N as i,H as l,F as w,I as y}from"./vue.esm-bundler-l-siv0w9.js";import{_ as L}from"./lodash-BiW_TGGX.js";import{F as B}from"./FSDataTable-Dhj4_r5r.js";import{_ as p}from"./FSSpan-Di50moR2.js";import{F as k}from"./FSImage-ffhN4Yyt.js";import{F as N}from"./FSTagGroup-D7eDUbiP.js";import{F as D}from"./FSIconCheck-Cr5lcwf4.js";import{F as P}from"./FSUserOrganisationTileUI-B1HDSsuW.js";import{a as E}from"./useUserOrganisations-Ds2BTiaH.js";import{u as G,a as M}from"./users-C0O-H65U.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as A}from"./FSIcon-uIr9VdFq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./FSDataTableUI-DFyrCRxF.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./useSlots-C_N_WAus.js";import"./FSSearchField-Dn043iEv.js";import"./FSTextField-CK_MvsiW.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-Cj1rvnYn.js";import"./FSRouterLink-2qKFAEm5.js";import"./FSClickable-DfRcT5kA.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-CTxfxYTk.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-D8RSeXs4.js";import"./FSButtonNextIcon-u-Z9nGtY.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-Dj7SGfxv.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-Dp-yowPl.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-YOObs551.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSImageUI-DrOfkU7V.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTag-ErOwxBbY.js";import"./FSTile-DlmtrnWW.js";import"./permissionInfos-BPDgTHQl.js";const V=I({name:"FSBaseUserOrganisationsList",components:{FSDataTable:B,FSImage:k,FSUserOrganisationTileUI:P,FSSpan:p,FSTagGroup:N,FSIconCheck:D},props:{tableCode:{type:String,required:!1,default:null},userOrganisationsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:m,entities:u,fetching:d}=E(),f=r=>e.modelValue.includes(r);return U(()=>e.userOrganisationsFilters,(r,s)=>{(!r&&!s||!L.isEqual(r,s))&&m(e.userOrganisationsFilters??void 0)},{immediate:!0}),{fetchingUserOrganisations:d,userOrganisations:u,userValidityLabel:G,userTypeLabel:M,isSelected:f}}});function R(e,m,u,d,f,r){const s=a("FSImage"),g=a("FSIconCheck"),O=a("FSTagGroup"),T=a("FSUserOrganisationTileUI"),v=a("FSDataTable");return F(),S(v,b({defaultMode:"iterator",items:e.userOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingUserOrganisations,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":m[0]||(m[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),h({"header.imageId-title":o(()=>[i(A,null,{default:o(()=>[l(" mdi-panorama-variant-outline ")]),_:1})]),"item.imageId":o(({item:t})=>[t.imageId?(F(),S(s,{key:0,height:"32px",width:"32px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):w("",!0)]),"item.allowEmails":o(({item:t})=>[i(g,{value:t.allowEmails},null,8,["value"])]),"item.allowSms":o(({item:t})=>[i(g,{value:t.allowSms},null,8,["value"])]),"item.tags":o(({item:t})=>[i(O,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.validity":o(({item:t})=>[i(p,{font:"text-overline"},{default:o(()=>[l(y(e.userValidityLabel(t.validity)),1)]),_:2},1024)]),"item.userType":o(({item:t})=>[i(p,{font:"text-overline"},{default:o(()=>[l(y(e.userTypeLabel(t.userType)),1)]),_:2},1024)]),"item.tile":o(({item:t,toggleSelect:n})=>[i(T,b({to:e.$props.itemTo&&e.$props.itemTo(t),editable:e.$props.editable,modelValue:e.isSelected(t.id),"onUpdate:modelValue":c=>n(t)},t),null,16,["to","editable","modelValue","onUpdate:modelValue"])]),_:2},[$(e.$slots,(t,n)=>({name:n,fn:o(c=>[C(e.$slots,n,_(q(c)))])}))]),1040,["items","itemTo","loading","showSelect","tableCode","modelValue"])}const Bt=z(V,[["render",R]]);V.__docgenInfo={displayName:"FSBaseUserOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"userOrganisationsFilters",type:{name:"UserOrganisationFilters | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: UserOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/userOrganisations/FSBaseUserOrganisationsList.vue"]};export{Bt as default};
