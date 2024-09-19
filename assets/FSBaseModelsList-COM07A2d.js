import{_ as y}from"./lodash-BiW_TGGX.js";import{d as I,z as l,A as f,B as F,K as h,L as _,w as U,M as v,N as q,C as t,m as g,J as k,v as a,G as c,E as N,H as w}from"./vue.esm-bundler-BwDfg4wG.js";import{F as B}from"./FSDataTable-Me_5Some.js";import{F as n}from"./FSIcon-ChaYv6Le.js";import{F as L}from"./FSImage-CtdLuckH.js";import{F as D}from"./FSIconCheck-C6JxiU4A.js";import{F as P}from"./FSSimpleTileUI-QSU21UGp.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as E}from"./useModels-CcW6E0kS.js";import{C as z}from"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CBedVZCM.js";import"./css-DTUiF03J.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./dimensions-yOZi2HlQ.js";import"./elevation-Ba-uT6Vw.js";import"./locale-DTc71_bq.js";import"./FSCol-BEvj3we4.js";import"./FSRow-k5pgBhR1.js";import"./VSpacer-C5S3LEb3.js";import"./FSDataTableUI-cllOIrAS.js";import"./vue-router-BC-FzL9X.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-Up-USX9A.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./useRules-CJCAsX67.js";import"./VSelectionControl-gUfFxYp8.js";import"./density-CY8ZwxUy.js";import"./VIcon-D-JUvW-a.js";import"./tag-Ceq3l71M.js";import"./proxiedModel-okNizC5Y.js";import"./index-BBm8PRb1.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./form-CH3j37ax.js";import"./FSCard-ENPT7Hcj.js";import"./FSText-CwwFvnOv.js";import"./FSSearchField-DSDBhq1s.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSButton-jJkg4qCi.js";import"./FSClickable-Y_T-Cq-9.js";import"./VProgressCircular-CmpAWY4m.js";import"./VField-C9nLiyrW.js";import"./loader-ecE02KGk.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./useTranslations-CHmpEDXr.js";import"./FSSelectField-BAtD035V.js";import"./FSDialogMenu-Rt_YvAbG.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./router-CeBnHAqN.js";import"./FSSlideGroup-FmBZXb1C.js";import"./group-Co3yQlsH.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./FSFadeOut-D8lX1YMU.js";import"./FSRadio-BZx_I5qq.js";import"./VList-C9PART4F.js";import"./ssrBoot-D00LCOWZ.js";import"./border-CJvl-6Or.js";import"./VImg-DFtMr-E9.js";import"./VSelect-ByKY6ruB.js";import"./VMenu-CbEP2O2_.js";import"./FSDivider-CNRYiEGS.js";import"./FSChip-kw9MOYsi.js";import"./FSOptionGroup-DruPS3EV.js";import"./filter-C1K_d8Vd.js";import"./VBtn-CAkWF00h.js";import"./filter-Cv_nnV1z.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-fou7heQy.js";import"./FSImageUI-BAdgvYuR.js";import"./useImages-hJ8kAqsC.js";import"./base-CmdGny12.js";import"./FSIconCard-B4Sv3DnZ.js";import"./FSTile-_9-fb_kX.js";import"./index-DfSX31J9.js";const V=I({name:"FSModelTileUI",components:{FSSimpleTileUI:P}});function A(e,m,s,d,u,i){const r=l("FSSimpleTileUI");return f(),F(r,h(_(e.$attrs)),null,16)}const R=$(V,[["render",A]]);V.__docgenInfo={displayName:"FSModelTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSModelTileUI.vue"]};const M=I({name:"FSBaseModelsList",components:{FSModelTileUI:R,FSDataTable:B,FSIconCheck:D,FSImage:L,FSIcon:n},props:{modelsFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1},itemTo:{type:Function,required:!1},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(e){const{getMany:m,fetching:s,entities:d}=E(),u=i=>e.modelValue.includes(i);return U(()=>e.modelsFilters,(i,r)=>{(!i&&!r||!y.isEqual(i,r))&&m(e.modelsFilters)},{immediate:!0}),{fetchingModels:s,models:d,ColorEnum:z,isSelected:u}}});function j(e,m,s,d,u,i){const r=l("FSImage"),b=l("FSIconCheck"),T=l("FSModelTileUI"),C=l("FSDataTable");return f(),F(C,g({loading:e.fetchingModels,items:e.models,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":m[0]||(m[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"header.imageId-title":t(()=>[a(n,null,{default:t(()=>[c(" mdi-panorama-variant-outline ")]),_:1})]),"header.connectable-title":t(()=>[a(n,null,{default:t(()=>[c(" mdi-wifi ")]),_:1})]),"item.imageId":t(({item:o})=>[o.imageId?(f(),F(r,{key:0,height:"32px",width:"32px",imageId:o.imageId},null,8,["imageId"])):N("",!0)]),"item.icon":t(({item:o})=>[a(n,null,{default:t(()=>[c(w(o.icon),1)]),_:2},1024)]),"item.connectable":t(({item:o})=>[a(b,{value:o.connectable},null,8,["value"])]),"item.tile":t(({item:o,toggleSelect:p})=>[a(T,g(o,{imageId:o.imageId,label:o.label,modelValue:e.isSelected(o.id),to:e.$props.itemTo&&e.$props.itemTo(o),"onUpdate:modelValue":S=>p(o)}),null,16,["imageId","label","modelValue","to","onUpdate:modelValue"])]),_:2},[q(e.$slots,(o,p)=>({name:p,fn:t(S=>[k(e.$slots,p,h(_(S)))])}))]),1040,["loading","items","tableCode","modelValue"])}const Co=$(M,[["render",j]]);M.__docgenInfo={displayName:"FSBaseModelsList",exportName:"default",description:"",tags:{},props:[{name:"modelsFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"itemTo",type:{name:"(item: ModelInfos) => Partial<RouteLocation>"},required:!1},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/models/FSBaseModelsList.vue"]};export{Co as default};
