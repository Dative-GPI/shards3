import{_ as C}from"./lodash-BiW_TGGX.js";import{d as I,y as m,z as f,A as S,L as h,M as b,w as q,B as v,O as U,C as t,m as F,K as w,N as a,H as c,F as B,I as k}from"./vue.esm-bundler-l-siv0w9.js";import{F as N}from"./FSDataTable-E6avOntf.js";import{F as p}from"./FSIcon-uIr9VdFq.js";import{F as L}from"./FSImage-B6PM96rq.js";import{F as D}from"./FSIconCheck-Cr5lcwf4.js";import{F as P}from"./FSSimpleTileUI-Yet2DhHI.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as z}from"./useModels-C6sXpvA-.js";import{C as A}from"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-kY4Od3NB.js";import"./useBreakpoints-C5IzU8MC.js";import"./css-CP2C2-Fe.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./locale-CTwwbPAi.js";import"./FSCol-BvqytbKT.js";import"./FSRow-CbEgVN08.js";import"./FSDataTableUI-ClNajw9g.js";import"./vue-router-C4bv40Tb.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./density-Dt_pQxP_.js";import"./VIcon-D6ql3n-m.js";import"./proxiedModel-KpugNjnZ.js";import"./index-Cr304eD2.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./form-CLJq5y5w.js";import"./FSCard-DL4SLpmS.js";import"./FSText-BwKgSTLP.js";import"./FSSearchField-BjPE2X1g.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSButton-v1WOpc1k.js";import"./FSRouterLink-BeSr6Wr-.js";import"./FSClickable-DbvAho3u.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";import"./VField-DaI8sxeG.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-D65DWRuU.js";import"./FSDialogMenu-2hgW8eHf.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./FSSlideGroup-BC2CNv0p.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-BKJXoopL.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-BGQcKLUS.js";import"./FSChip-CH8gQQD0.js";import"./FSOptionGroup-Cgw7b6dp.js";import"./filter-C1K_d8Vd.js";import"./VBtn-9DyKx9D6.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./FSImageUI-DrOfkU7V.js";import"./imageDetails-CCk4N_4r.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSIconCard-Ch3OITf8.js";import"./FSTile-D5AdGt7U.js";import"./index-DfSX31J9.js";const V=I({name:"FSModelTileUI",components:{FSSimpleTileUI:P}});function E(e,l,s,d,u,i){const r=m("FSSimpleTileUI");return f(),S(r,h(b(e.$attrs)),null,16)}const O=$(V,[["render",E]]);V.__docgenInfo={displayName:"FSModelTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSModelTileUI.vue"]};const y=I({name:"FSBaseModelsList",components:{FSModelTileUI:O,FSDataTable:N,FSIconCheck:D,FSImage:L,FSIcon:p},props:{tableCode:{type:String,required:!1,default:null},modelsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},singleSelect:{type:Boolean,required:!1,default:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:l,fetching:s,entities:d}=z(),u=i=>e.modelValue.includes(i);return q(()=>e.modelsFilters,(i,r)=>{(!i&&!r||!C.isEqual(i,r))&&l(e.modelsFilters)},{immediate:!0}),{fetchingModels:s,ColorEnum:A,models:d,isSelected:u}}});function R(e,l,s,d,u,i){const r=m("FSImage"),M=m("FSIconCheck"),_=m("FSModelTileUI"),T=m("FSDataTable");return f(),S(T,F({defaultMode:"iterator",singleSelect:e.$props.singleSelect,showSelect:e.$props.editable,tableCode:e.$props.tableCode,loading:e.fetchingModels,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"header.imageId-title":t(()=>[a(p,null,{default:t(()=>[c(" mdi-panorama-variant-outline ")]),_:1})]),"header.connectable-title":t(()=>[a(p,null,{default:t(()=>[c(" mdi-wifi ")]),_:1})]),"item.imageId":t(({item:o})=>[o.imageId?(f(),S(r,{key:0,height:"32px",width:"32px",imageId:o.imageId,thumbnail:!0},null,8,["imageId"])):B("",!0)]),"item.icon":t(({item:o})=>[a(p,null,{default:t(()=>[c(k(o.icon),1)]),_:2},1024)]),"item.connectable":t(({item:o})=>[a(M,{value:o.connectable},null,8,["value"])]),"item.tile":t(({item:o,toggleSelect:n})=>[a(_,F({to:e.$props.itemTo&&e.$props.itemTo(o),singleSelect:e.$props.singleSelect,imageId:o.imageId,label:o.label,modelValue:e.isSelected(o.id),"onUpdate:modelValue":g=>n(o)},o),null,16,["to","singleSelect","imageId","label","modelValue","onUpdate:modelValue"])]),_:2},[U(e.$slots,(o,n)=>({name:n,fn:t(g=>[w(e.$slots,n,h(b(g)))])}))]),1040,["singleSelect","showSelect","tableCode","loading","items","modelValue"])}const Uo=$(y,[["render",R]]);y.__docgenInfo={displayName:"FSBaseModelsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelsFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ModelInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/models/FSBaseModelsList.vue"]};export{Uo as default};
