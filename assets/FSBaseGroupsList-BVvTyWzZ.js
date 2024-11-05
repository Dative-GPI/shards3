import{d as I,w as y,y as p,z as c,A as g,B as $,O as _,C as o,m as F,K as v,L as C,M as T,N as l,H as S,F as q,I as B}from"./vue.esm-bundler-l-siv0w9.js";import{_ as w}from"./lodash-BiW_TGGX.js";import{F as L}from"./FSDataTable-NEIKpHRV.js";import{F as s}from"./FSIcon-uIr9VdFq.js";import{F as N}from"./FSImage-ffhN4Yyt.js";import{F as U}from"./FSTagGroup-BU9jkaBL.js";import{F as k}from"./FSGroupTileUI-CBKiZug1.js";import{u as D}from"./useGroups-C00uUS4c.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-Bs2u1_6J.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./FSDataTableUI-sS-c5UQ-.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./FSSearchField-BjPE2X1g.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-v1WOpc1k.js";import"./FSRouterLink-BeSr6Wr-.js";import"./FSClickable-DbvAho3u.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-BS0bweoG.js";import"./VList-ByZS85Zy.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VSelect-kPgNBBHc.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSImageUI-DrOfkU7V.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSTag-ErOwxBbY.js";import"./FSColor-DXUGLDNs.js";import"./FSTile-D5AdGt7U.js";import"./pathCrumb-Db-cq5HI.js";const V=I({name:"FSBaseGroupsList",components:{FSDataTable:L,FSImage:N,FSIcon:s,FSGroupTileUI:k,FSTagGroup:U},props:{tableCode:{type:String,required:!1,default:null},groupsFilters:{type:Object,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e){const{getMany:i,fetching:n,entities:u}=D(),d=r=>e.modelValue.includes(r);return y(()=>e.groupsFilters,(r,a)=>{(!r&&!a||!w.isEqual(r,a))&&i(e.groupsFilters)},{immediate:!0}),{fetchingGroups:n,groups:u,isSelected:d}}});function P(e,i,n,u,d,r){const a=p("FSImage"),b=p("FSTagGroup"),h=p("FSGroupTileUI"),G=p("FSDataTable");return c(),g(G,F({defaultMode:"iterator",loading:e.fetchingGroups,items:e.groups,showSelect:e.$props.editable,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),$({"header.imageId-title":o(()=>[l(s,null,{default:o(()=>[S(" mdi-panorama-variant-outline ")]),_:1})]),"item.imageId":o(({item:t})=>[t.imageId?(c(),g(a,{key:0,height:"32px",width:"32px",imageId:t.imageId,thumbnail:!0},null,8,["imageId"])):q("",!0)]),"item.icon":o(({item:t})=>[l(s,null,{default:o(()=>[S(B(t.icon),1)]),_:2},1024)]),"item.tags":o(({item:t})=>[l(b,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.tile":o(({item:t,toggleSelect:m})=>[l(h,F({editable:e.$props.editable,modelValue:e.isSelected(t.id),"onUpdate:modelValue":f=>m(t)},t),null,16,["editable","modelValue","onUpdate:modelValue"])]),_:2},[_(e.$slots,(t,m)=>({name:m,fn:o(f=>[v(e.$slots,m,C(T(f)))])}))]),1040,["loading","items","showSelect","tableCode","modelValue"])}const vt=M(V,[["render",P]]);V.__docgenInfo={displayName:"FSBaseGroupsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"groupsFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/groups/FSBaseGroupsList.vue"]};export{vt as default};
