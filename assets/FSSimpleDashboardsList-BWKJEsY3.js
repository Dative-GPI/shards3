import{d as l,c as p,w as u,y as c,z as h,A as f,m as g}from"./vue.esm-bundler-DjjVIdVI.js";import{F as b}from"./FSSimpleList-ByjgFrJw.js";import{u as O}from"./useDashboardOrganisations-CqbceVhC.js";import{u as F}from"./useDashboardOrganisationTypes-Ccvd6sMJ.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CmD7j8Pv.js";import"./css-BkQhD285.js";import"./FSCol-TPWSQPHs.js";import"./FSIcon-BCbpBdVG.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSImage-C5YJvBfA.js";import"./FSImageUI-DCipACiG.js";import"./FSLoader-DpMpI5Qw.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./locale-Dn84bpGK.js";import"./VImg-IVf3xxVd.js";import"./rounded-Cely44IK.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CNptecSH.js";import"./FSTile-DxppklPg.js";import"./FSClickable-DB3UYOUU.js";import"./FSCard-CXVJHnbm.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./FSCheckbox-UZa98yAo.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./form-B7NlTRtd.js";import"./FSFadeOut-LZYxqpYZ.js";import"./uuid-DTaye2KM.js";import"./FSSearchField-Dk_6lGWY.js";import"./FSTextField-3oztY1wc.js";import"./FSBaseField-DjLbenuy.js";import"./VSpacer-CrqXaTz-.js";import"./FSButton-DMlgbucp.js";import"./VField-BnYbwRuc.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-f9CWAvtI.js";import"./FSButtonEditIcon-BIJGT79O.js";import"./FSButtonRemoveIcon-CZioY5qI.js";import"./filter-C1K_d8Vd.js";import"./dashboardTranslation-B3HYPjZl.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./pathCrumb-Db-cq5HI.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";const m=l({name:"FSSimpleDashboardsList",components:{FSSimpleList:b},props:{dashboardOrganisationFilters:{type:Object,required:!1,default:()=>({})},dashboardOrganisationTypeFilters:{type:Object,required:!1,default:()=>({})}},setup(t){const{entities:o,getMany:i,fetching:a}=O(),{entities:e,getMany:s,fetching:r}=F(),n=p(()=>a.value||r.value),d=p(()=>[...o.value,...e.value]);return u(()=>[t.dashboardOrganisationFilters,t.dashboardOrganisationTypeFilters],()=>{i(t.dashboardOrganisationFilters),s(t.dashboardOrganisationTypeFilters)},{immediate:!0}),{dashboards:d,fetching:n}}});function S(t,o,i,a,e,s){const r=c("FSSimpleList");return h(),f(r,g({items:t.dashboards,loading:t.fetching},t.$attrs),null,16,["items","loading"])}const zt=y(m,[["render",S]]);m.__docgenInfo={displayName:"FSSimpleDashboardsList",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dashboards/FSSimpleDashboardsList.vue"]};export{zt as default};
