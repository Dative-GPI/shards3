import{d as U,c as O,w as P,y as d,z as V,A as v,B as G,O as R,C as r,m as j,K as z,L as A,M as H,N as s,H as S,I as _,F as K}from"./vue.esm-bundler-l-siv0w9.js";import{_ as J}from"./lodash-BiW_TGGX.js";import{F as Q}from"./FSChartTileUI-gUhWHjdD.js";import{F as W}from"./FSTagGroup-COxOJfpL.js";import{F as X}from"./FSImage-CruQww6b.js";import{F as y}from"./FSIcon-DfqW6nqQ.js";import{_ as D}from"./FSRow-BjeBkMPV.js";import{F as E}from"./FSDataTable-Db0A6Nxk.js";import{u as Y}from"./useChartOrganisations-DHLgAj9Q.js";import{u as Z}from"./useChartOrganisationTypes-DmaEBRl-.js";import{C as x}from"./useColors-Bs2u1_6J.js";import{d as B,c as ee,e as w}from"./chartsTools-CD-9-jEF.js";import{g as te}from"./enumTools-BEsapygt.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-B8_y_vmt.js";import"./FSCard-Cocsqd0c.js";import"./FSCol-DD5MeAoT.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./theme-C2MnUTNI.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./FSWrapGroup-CgUIplkM.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./display-BWzbFTnS.js";import"./locale-CTwwbPAi.js";import"./FSTag-BGAnsMdV.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./density-Dt_pQxP_.js";import"./elevation-BZDXH0CP.js";import"./rounded-uHrmshEX.js";import"./dimensions-9QoL2_-9.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-CntZC7f2.js";import"./FSButtonNextIcon-F5m9he5w.js";import"./FSButton-cXGosxtu.js";import"./FSImageUI-C7_EaQD6.js";import"./FSLoader-DoOybHH0.js";import"./VImg-CZhZqiQJ.js";import"./transition-AZsQzdUZ.js";import"./index-C6OXlV61.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSDataTableUI-BIWQyI2R.js";import"./vue-router-C4bv40Tb.js";import"./FSCheckbox-BKUwhDef.js";import"./useRules-QHk8iD4m.js";import"./VSelectionControl-Br2dHavx.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./form-CLJq5y5w.js";import"./FSText-4yVUx1mI.js";import"./FSSearchField-DcpwxoGP.js";import"./FSTextField-CIXfVN3n.js";import"./FSBaseField-CfZ7AiUY.js";import"./VField-DaI8sxeG.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CJK8D24x.js";import"./FSSelectField-DqO1gPa4.js";import"./FSDialogMenu-vSYpuZ_d.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./lazy-DuBjUwFb.js";import"./FSToggleSet-92mUnG-8.js";import"./FSFadeOut-CszUv8uk.js";import"./FSRadio-CfSjScM8.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./VSelect-R5W67bQu.js";import"./VMenu-DQq2E1HW.js";import"./FSDivider-Du2p4-qy.js";import"./FSChip-YuZ5nGgh.js";import"./FSOptionGroup-BY_KnwjN.js";import"./filter-C1K_d8Vd.js";import"./filter-BjRVyZGj.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./chartSerie-BOhDkcUt.js";import"./timeRange-Bfx7KHHy.js";import"./index-DfSX31J9.js";const M=U({name:"FSBaseChartsList",components:{FSChartTileUI:Q,FSDataTable:E,FSTagGroup:W,FSImage:X,FSIcon:y,FSRow:D},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:scope"],setup(t,{emit:n}){const{entities:b,fetching:I,getMany:L}=Y(),{entities:u,fetching:F,getMany:c}=Z(),g=e=>t.modelValue.includes(e),T=()=>{L(t.chartOrganisationFilters),c(t.chartOrganisationTypeFilters)},h=O(()=>b.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(u.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),a=O(()=>({modelsLabels:{fixedFilters:u.value.map(e=>e.modelsLabels).reduce((e,o)=>{for(const i of o)e.map(f=>f.id).includes(i.id)||e.push(i);return e},[]).map(e=>({value:e.id,text:e.label})),methodFilter:(e,o)=>o.some(i=>i.id==e)},chartType:{fixedFilters:te(w).filter(e=>e.value!=w.None).map(e=>({value:e.value,text:B(e.value)})),methodFilter:(e,o)=>e==o}})),l=e=>{const o=g(e);m(o?t.modelValue.filter(i=>i!=e):[...t.modelValue,e])},m=e=>{if(!e){n("update:modelValue",[]),n("update:scope",[]),n("update",{modelValue:[],scope:[]});return}const o=h.value.filter(p=>e.includes(p.id)),i=o.map(p=>p.id),f=o.map(p=>p.scope);n("update:modelValue",i),n("update:scope",f),n("update",{modelValue:i,scope:f})};return P(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,o)=>{(!e&&!o||!J.isEqual(e,o))&&T()},{immediate:!0}),{fetchingChartOrganisationTypes:F,fetchingChartOrganisations:I,chartOrganisationTypes:u,chartOrganisations:b,headersOptions:a,ColorEnum:x,charts:h,chartTypeLabel:B,isSelected:g,chartIcon:ee,onSelect:m,update:l}}});function oe(t,n,b,I,L,u){const F=d("FSImage"),c=d("FSTagGroup"),g=d("FSText"),T=d("FSChartTileUI"),h=d("FSDataTable");return V(),v(h,j({defaultMode:"iterator",loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,headersOptions:t.headersOptions,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),G({"header.imageId-title":r(()=>[s(y,null,{default:r(()=>[S(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[s(y,null,{default:r(()=>[S(_(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(V(),v(F,{key:0,height:"32px",width:"32px",imageId:a.imageId},null,8,["imageId"])):K("",!0)]),"item.tags":r(({item:a})=>[s(c,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":r(({item:a})=>[s(D,{wrap:!1},{default:r(()=>[s(y,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),s(g,null,{default:r(()=>[S(_(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":r(({item:a})=>[s(c,{editable:!1,tags:a.modelsLabels.map(l=>l.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[s(T,{label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Dark,onClick:l=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[R(t.$slots,(a,l)=>({name:l,fn:r(m=>[z(t.$slots,l,A(H(m)))])}))]),1040,["loading","headersOptions","items","tableCode","modelValue","onUpdate:modelValue"])}const N=ae(M,[["render",oe]]);M.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Jt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:N,subcomponents:{FSDataTable:E},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},C={render:t=>({components:{FSBaseChartsList:N},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `}),args:{tableCode:"charts1"}};var $,q,k;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(k=(q=C.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};const Qt=["Default"];export{C as Default,Qt as __namedExportsOrder,Jt as default};
