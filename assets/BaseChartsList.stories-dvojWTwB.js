import{d as M,c as S,w as U,y as p,z as L,A as O,B as P,O as G,C as i,m as R,K as j,L as z,M as A,N as s,H as F,I as V,F as H}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as K}from"./lodash-BiW_TGGX.js";import{F as J}from"./FSChartTileUI-nMyhESnV.js";import{F as Q}from"./FSTagGroup-BsxwbMOW.js";import{F as W}from"./FSImage-Eyb6nJ-g.js";import{F as f}from"./FSIcon-CJgnsR4e.js";import{_ as w}from"./FSRow-CFFgZ74C.js";import{F as k}from"./FSDataTable-CZlIsS5H.js";import{u as X}from"./useChartOrganisations-d6GOstCx.js";import{u as Y}from"./useChartOrganisationTypes-D7z7JGcZ.js";import{C as Z}from"./useColors-Du1QHlOW.js";import{d as v,c as x,e as _}from"./chartsTools-I26pug4z.js";import{g as ee}from"./enumTools-BEsapygt.js";import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-CIKlZ0Uy.js";import"./FSCard-GtkwWKOo.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./VProgressCircular-cHoQoKlr.js";import"./color-DBJfw4cY.js";import"./theme-BKYtCmay.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSWrapGroup-DqTYt4T6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CiXeh9xR.js";import"./display-CKqU0R6P.js";import"./locale-BJQwrXJ7.js";import"./FSTag-DNHIlbaN.js";import"./VBtn-CCHUxMdD.js";import"./border-mcG4sAce.js";import"./density-CJqFEH6j.js";import"./elevation-RaRrQxn9.js";import"./rounded-DM_o2hWD.js";import"./dimensions-C-vtuVn7.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./router-DHMAfVHW.js";import"./index-CZlC8CZb.js";import"./VDefaultsProvider-S-S54iS4.js";import"./FSSlideGroup-BvayNA85.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./FSButton-DblcRn12.js";import"./FSImageUI-CN7Xmnjm.js";import"./FSLoader-y57uLHf2.js";import"./VImg-I7jXrjsW.js";import"./transition-B83BVatf.js";import"./index-C31q_73Z.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./VSpacer-y-n940VK.js";import"./FSDataTableUI-CzA-nZbb.js";import"./vue-router-Bp8FxDoy.js";import"./FSCheckbox-BlU3VZ1O.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./form-D8F-RrsG.js";import"./FSText-D77NGEvR.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./VField-2PlKy0GK.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BehwFxDb.js";import"./FSSelectField-DkqD7weE.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./lazy-k0fVkBtC.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./FSDivider-BzJJodRe.js";import"./FSChip-C1Wzm8E1.js";import"./FSOptionGroup-zh6WLY4n.js";import"./filter-C1K_d8Vd.js";import"./filter-iZr2_yz2.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./chartSerie-BOhDkcUt.js";import"./timeRange-Bfx7KHHy.js";import"./index-DfSX31J9.js";const D=M({name:"FSBaseChartsList",components:{FSChartTileUI:J,FSDataTable:k,FSTagGroup:Q,FSImage:W,FSIcon:f,FSRow:w},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue","update:scope"],setup(t,{emit:l}){const{entities:C,fetching:T,getMany:I}=X(),{entities:d,fetching:y,getMany:u}=Y(),c=e=>t.modelValue.includes(e),b=()=>{I(t.chartOrganisationFilters),u(t.chartOrganisationTypeFilters)},g=S(()=>C.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(d.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),a=S(()=>({modelsLabels:{fixedFilters:d.value.map(e=>e.modelsLabels).reduce((e,r)=>{for(const o of r)e.map(N=>N.id).includes(o.id)||e.push(o);return e},[]).map(e=>({value:e.id,text:e.label})),methodFilter:(e,r)=>r.some(o=>o.id==e)},chartType:{fixedFilters:ee(_).filter(e=>e.value!=_.None).map(e=>({value:e.value,text:v(e.value)})),methodFilter:(e,r)=>e==r}})),n=e=>{const r=c(e);m(r?t.modelValue.filter(o=>o!=e):[...t.modelValue,e])},m=e=>{if(!e){l("update:modelValue",[]),l("update:scope",[]);return}const r=g.value.filter(o=>e.includes(o.id));l("update:modelValue",r.map(o=>o.id)),l("update:scope",r.map(o=>o.scope))};return U(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,r)=>{(!e&&!r||!K.isEqual(e,r))&&b()},{immediate:!0}),{fetchingChartOrganisationTypes:y,fetchingChartOrganisations:T,chartOrganisationTypes:d,chartOrganisations:C,headersOptions:a,ColorEnum:Z,charts:g,chartTypeLabel:v,isSelected:c,chartIcon:x,onSelect:m,update:n}}});function ae(t,l,C,T,I,d){const y=p("FSImage"),u=p("FSTagGroup"),c=p("FSText"),b=p("FSChartTileUI"),g=p("FSDataTable");return L(),O(g,R({defaultMode:"iterator",loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,headersOptions:t.headersOptions,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),P({"header.imageId-title":i(()=>[s(f,null,{default:i(()=>[F(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":i(({item:a})=>[s(f,null,{default:i(()=>[F(V(a.icon),1)]),_:2},1024)]),"item.imageId":i(({item:a})=>[a.imageId?(L(),O(y,{key:0,height:"32px",width:"32px",imageId:a.imageId},null,8,["imageId"])):H("",!0)]),"item.tags":i(({item:a})=>[s(u,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":i(({item:a})=>[s(w,{wrap:!1},{default:i(()=>[s(f,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),s(c,null,{default:i(()=>[F(V(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":i(({item:a})=>[s(u,{editable:!1,tags:a.modelsLabels.map(n=>n.label)},null,8,["tags"])]),"item.tile":i(({item:a})=>[s(b,{label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Dark,onClick:n=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[G(t.$slots,(a,n)=>({name:n,fn:i(m=>[j(t.$slots,n,z(A(m)))])}))]),1040,["loading","headersOptions","items","tableCode","modelValue","onUpdate:modelValue"])}const E=te(D,[["render",ae]]);D.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Jt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:E,subcomponents:{FSDataTable:k},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},h={render:t=>({components:{FSBaseChartsList:E},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `}),args:{tableCode:"charts1"}};var B,$,q;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    \`
  }),
  args: {
    tableCode: 'charts1'
  }
}`,...(q=($=h.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Qt=["Default"];export{h as Default,Qt as __namedExportsOrder,Jt as default};
