import{_ as C}from"./lodash-BiW_TGGX.js";import{d as I,A as m,B as f,N as h,O as b,I as S,w as q,C as v,Q as U,D as t,j as F,M as w,P as a,J as c,G as B,K as k}from"./vue.esm-bundler-DSwHwgKw.js";import{F as N}from"./FSDataTable-DZFWIlQx.js";import{F as s}from"./FSIcon-TpFvudaY.js";import{F as L}from"./FSImage-COjEvANL.js";import{F as D}from"./FSIconCheck-wDAipvEC.js";import{F as P}from"./FSSimpleTileUI-Cu8Vm_3U.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as j}from"./useModels-B8G6QFOc.js";import{C as A}from"./useColors-C4EmrkDp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-CB4bV0N-.js";import"./useBreakpoints-BjF6TIJH.js";import"./css-XXwFKvUE.js";import"./color-uBYwhjku.js";import"./theme-4AjdAhIV.js";import"./dimensions-CF0PFV-D.js";import"./elevation-DiTecsj1.js";import"./locale-BsRwbRmi.js";import"./FSCol-DdGVae5t.js";import"./FSRow-BtkEywPN.js";import"./FSDataTableUI-CKZMTO2G.js";import"./vue-router-jbf8yRwv.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-Bv5yvgVA.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./useRules-CaMdh5L0.js";import"./VSelectionControl-CTHKpAmd.js";import"./density-BfjPyHiq.js";import"./VIcon-CdjjMQ6V.js";import"./proxiedModel-D4Pgijkw.js";import"./index-BOr5YZLb.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./index-GTe7atjb.js";import"./transition--2cAMn_j.js";import"./form-BWUCG2_i.js";import"./FSCard-Dby8iWqU.js";import"./FSText-DiZ1SltH.js";import"./FSSearchField-izSr2Wf8.js";import"./FSTextField-CnPHb7kI.js";import"./FSBaseField-D2ow2gVm.js";import"./FSButton-CN1ZIktz.js";import"./FSRouterLink-eAqg-msJ.js";import"./FSClickable-Dg_E4dui.js";import"./VProgressCircular-Cd-wheNV.js";import"./resizeObserver-A1vWEG-J.js";import"./VField-YT2KDH-x.js";import"./loader-kTKV0tNq.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";import"./useTranslations-BhPzmPwL.js";import"./FSSelectField-eGgC7ePy.js";import"./VList-CvbK1pQh.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./router-C4I-dA4c.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./VImg-DSalXW5F.js";import"./FSSlideGroup-DmKSX9y1.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-Co6Wb6go.js";import"./FSWrapGroup-DErk_6Fw.js";import"./FSFadeOut-CQmN3qQC.js";import"./FSRadio-QZf7aiMX.js";import"./VSelect-CLcgsW2i.js";import"./VMenu-B9SE09pj.js";import"./FSDivider-DHqZtz-q.js";import"./FSChip-CCuCpK86.js";import"./FSOptionGroup-ZBHuZ8qZ.js";import"./filter-C1K_d8Vd.js";import"./VBtn-WSruA80Q.js";import"./filter-CxK7Dp-c.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-BC5Ev-17.js";import"./FSImageUI-BP1ruBGV.js";import"./useImages-Bzd_CK2Q.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BCmX_25A.js";import"./FSIconCard-B6bybjid.js";import"./FSTile-BeVjL0yn.js";import"./index-DfSX31J9.js";const V=I({name:"FSModelTileUI",components:{FSSimpleTileUI:P}});function E(e,l,p,d,u,i){const r=m("FSSimpleTileUI");return S(),f(r,h(b(e.$attrs)),null,16)}const O=$(V,[["render",E]]);V.__docgenInfo={displayName:"FSModelTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSModelTileUI.vue"]};const M=I({name:"FSBaseModelsList",components:{FSModelTileUI:O,FSDataTable:N,FSIconCheck:D,FSImage:L,FSIcon:s},props:{tableCode:{type:String,required:!1,default:null},modelsFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},editable:{type:Boolean,required:!1,default:!0},singleSelect:{type:Boolean,required:!1,default:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{getMany:l,fetching:p,entities:d}=j(),u=i=>e.modelValue.includes(i);return q(()=>e.modelsFilters,(i,r)=>{(!i&&!r||!C.isEqual(i,r))&&l(e.modelsFilters)},{immediate:!0}),{fetchingModels:p,ColorEnum:A,models:d,isSelected:u}}});function R(e,l,p,d,u,i){const r=m("FSImage"),y=m("FSIconCheck"),_=m("FSModelTileUI"),T=m("FSDataTable");return S(),f(T,F({defaultMode:"iterator",singleSelect:e.$props.singleSelect,showSelect:e.$props.editable,tableCode:e.$props.tableCode,loading:e.fetchingModels,items:e.models,modelValue:e.$props.modelValue,"onUpdate:modelValue":l[0]||(l[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),v({"header.imageId-title":t(()=>[a(s,null,{default:t(()=>[c(" mdi-panorama-variant-outline ")]),_:1})]),"header.connectable-title":t(()=>[a(s,null,{default:t(()=>[c(" mdi-wifi ")]),_:1})]),"item.imageId":t(({item:o})=>[o.imageId?(S(),f(r,{key:0,height:"32px",width:"32px",imageId:o.imageId,thumbnail:!0},null,8,["imageId"])):B("",!0)]),"item.icon":t(({item:o})=>[a(s,null,{default:t(()=>[c(k(o.icon),1)]),_:2},1024)]),"item.connectable":t(({item:o})=>[a(y,{value:o.connectable},null,8,["value"])]),"item.tile":t(({item:o,toggleSelect:n})=>[a(_,F({to:e.$props.itemTo&&e.$props.itemTo(o),singleSelect:e.$props.singleSelect,imageId:o.imageId,label:o.label,modelValue:e.isSelected(o.id),"onUpdate:modelValue":g=>n(o)},o),null,16,["to","singleSelect","imageId","label","modelValue","onUpdate:modelValue"])]),_:2},[U(e.$slots,(o,n)=>({name:n,fn:t(g=>[w(e.$slots,n,h(b(g)))])}))]),1040,["singleSelect","showSelect","tableCode","loading","items","modelValue"])}const vo=$(M,[["render",R]]);M.__docgenInfo={displayName:"FSBaseModelsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelsFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ModelInfos) => Partial<RouteLocation>"},required:!1},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"singleSelect",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/models/FSBaseModelsList.vue"]};export{vo as default};
