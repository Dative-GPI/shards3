import{d as N,c as O,w as P,A as d,B as V,C as v,D as U,Q as j,E as r,j as G,M as R,N as A,O as z,P as s,J as S,K as _,H}from"./vue.esm-bundler-Zcuj-zyO.js";import{_ as J}from"./lodash-BiW_TGGX.js";import{F as K}from"./FSChartTileUI-CeLgJLLE.js";import{F as Q}from"./FSTagGroup-CWOOUSdp.js";import{F as W}from"./FSImage-CJNmFlk_.js";import{F as y}from"./FSIcon-CKEWDmaC.js";import{_ as E}from"./FSRow-4Qz6Bbpg.js";import{F as D}from"./FSDataTable-mZv1Y6rH.js";import{u as X}from"./useChartOrganisations-Dmn-weli.js";import{u as Y}from"./useChartOrganisationTypes-z1Q-rqxb.js";import{C as Z}from"./useColors-Cz5tOQmp.js";import{e as B,c as x,C as ee}from"./chartsTools-CcObSDja.js";import{g as te}from"./enumTools-BEsapygt.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSTile-dJi94q2j.js";import"./FSClickable-CUaqPDhz.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSCard-4bilSlvW.js";import"./FSCol-DLyNVOXQ.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./theme-DppimMvq.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSCheckbox-CunxM6rm.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./density-DMrbDfgW.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-CMMTOWvF.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./locale-Beavd5eP.js";import"./index-D14OnwAh.js";import"./transition-shOmLEJh.js";import"./dimensions-BWgpWc0X.js";import"./form-ChxmsGl9.js";import"./FSWrapGroup-DSD82cKU.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./display-Db__yhk9.js";import"./FSTag-CHJ-tL1L.js";import"./VBtn-CKg6JYm3.js";import"./border-C0mvfulf.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./router-DnAkll3L.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./FSSlideGroup-CtBhRuPR.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./FSButton-BzTwanlk.js";import"./FSImageUI-Q0M2a9Ft.js";import"./FSLoader-CRmsosiO.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSDataTableUI-Cipm8N-2.js";import"./FSText-DqK2dTtm.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./VField-BtCsV974.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DN7QCs30.js";import"./FSSelectField-ChNtQfMF.js";import"./VList-nN2lrumh.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./scopeId-CPcZlDEY.js";import"./ssrBoot-B8tyBOTn.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./FSDivider-DOHnDXxM.js";import"./FSChip-DMpdcIDo.js";import"./FSOptionGroup-DJl0hUWz.js";import"./filter-C1K_d8Vd.js";import"./filter-DiySb8XN.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./index-DfSX31J9.js";const M=N({name:"FSBaseChartsList",components:{FSChartTileUI:K,FSDataTable:D,FSTagGroup:Q,FSImage:W,FSIcon:y,FSRow:E},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update","update:modelValue","update:scope"],setup(t,{emit:n}){const{entities:b,fetching:I,getMany:L}=X(),{entities:u,fetching:F,getMany:c}=Y(),g=e=>t.modelValue.includes(e),T=()=>{L(t.chartOrganisationFilters),c(t.chartOrganisationTypeFilters)},h=O(()=>b.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(u.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),a=O(()=>({modelsLabels:{fixedFilters:u.value.map(e=>e.modelsLabels).reduce((e,o)=>{for(const i of o)e.map(f=>f.id).includes(i.id)||e.push(i);return e},[]).map(e=>({value:e.id,text:e.label})).concat({value:"",text:"--"}),methodFilter:(e,o)=>o.length==0&&e==""||o.length>0&&o.some(i=>i.id==e)},chartType:{fixedFilters:te(ee).map(e=>({value:e.value,text:B(e.value)})),methodFilter:(e,o)=>e==o}})),l=e=>{const o=g(e);m(o?t.modelValue.filter(i=>i!=e):[...t.modelValue,e])},m=e=>{if(!e){n("update:modelValue",[]),n("update:scope",[]),n("update",{modelValue:[],scope:[]});return}const o=h.value.filter(p=>e.includes(p.id)),i=o.map(p=>p.id),f=o.map(p=>p.scope);n("update:modelValue",i),n("update:scope",f),n("update",{modelValue:i,scope:f})};return P(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,o)=>{(!e&&!o||!J.isEqual(e,o))&&T()},{immediate:!0}),{fetchingChartOrganisationTypes:F,fetchingChartOrganisations:I,chartOrganisationTypes:u,chartOrganisations:b,headersOptions:a,ColorEnum:Z,charts:h,chartTypeLabel:B,isSelected:g,chartIcon:x,onSelect:m,update:l}}});function oe(t,n,b,I,L,u){const F=d("FSImage"),c=d("FSTagGroup"),g=d("FSText"),T=d("FSChartTileUI"),h=d("FSDataTable");return V(),v(h,G({defaultMode:"iterator",loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,headersOptions:t.headersOptions,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),U({"header.imageId-title":r(()=>[s(y,null,{default:r(()=>[S(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[s(y,null,{default:r(()=>[S(_(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(V(),v(F,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):H("",!0)]),"item.tags":r(({item:a})=>[s(c,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":r(({item:a})=>[s(E,{wrap:!1},{default:r(()=>[s(y,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),s(g,null,{default:r(()=>[S(_(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":r(({item:a})=>[s(c,{editable:!1,tags:a.modelsLabels.map(l=>l.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[s(T,{variant:"standard",label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:l=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[j(t.$slots,(a,l)=>({name:l,fn:r(m=>[R(t.$slots,l,A(z(m)))])}))]),1040,["loading","headersOptions","items","tableCode","modelValue","onUpdate:modelValue"])}const k=ae(M,[["render",oe]]);M.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Qt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:k,subcomponents:{FSDataTable:D},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},C={render:t=>({components:{FSBaseChartsList:k},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `}),args:{tableCode:"charts1"}};var w,$,q;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=($=C.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};const Wt=["Default"];export{C as Default,Wt as __namedExportsOrder,Qt as default};
