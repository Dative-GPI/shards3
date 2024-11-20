import{d as q,c as w,w as D,y as m,z as b,A as O,B as E,O as N,C as r,m as k,K as P,L as R,M as U,N as i,H as g,I as S,F as G}from"./vue.esm-bundler-Ddr6MgcY.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{_ as V}from"./FSRow-CSQtiyAx.js";import{F as z}from"./FSText-CAGI2dEo.js";import{F as d}from"./FSIcon-DfjSexyz.js";import{F as A}from"./FSImage-9J49soYl.js";import{F as j}from"./FSTagGroup-C14rkXPu.js";import{F as x}from"./FSChartTileUI-mhf45mex.js";import{F as _}from"./FSDataTable-CUA9EG44.js";import{u as H}from"./useChartOrganisations-Bt6oG3rc.js";import{C as K}from"./useColors-DnoeDx-P.js";import{e as y,c as J,C as Q}from"./chartsTools-BXyv05r8.js";import{g as W}from"./enumTools-BEsapygt.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./VIcon-zho7mIKV.js";import"./color-DdAXPAA0.js";import"./theme-D55tBrU4.js";import"./FSImageUI-CifHzJ5L.js";import"./FSLoader-PksHGtEK.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./VImg-Bi-pKvLj.js";import"./rounded-BoPqla0T.js";import"./transition-BtBp4lzQ.js";import"./index-lTYthPHq.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./uuid-DTaye2KM.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSWrapGroup-DCzWuvHX.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./proxiedModel-BYnu2EOK.js";import"./index-B-qTxNvr.js";import"./display-BUGvawh3.js";import"./resizeObserver-wyIwxSZb.js";import"./FSTag-B6pa7vMu.js";import"./FSSpan-Bh1X02mE.js";import"./VBtn-GP0Uljy4.js";import"./border-BiXRHevL.js";import"./density-B5LNz2JK.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./anchor-BdD5yCeG.js";import"./router-C4YP2PAT.js";import"./index-BF2Ge4Ib.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./FSSlideGroup-8udoapu6.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSCol-D8gLxM2E.js";import"./FSTile-BHCSbyjx.js";import"./FSCheckbox-3iIuKfLX.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./form-vji0TmoR.js";import"./FSDataTableUI-jFJeeCeX.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./VField-DrieYqTb.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DgvmBCqU.js";import"./FSSelectField-WQNi82Nz.js";import"./VList-BsRjN0ZI.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./lazy-BsoIJm2g.js";import"./ssrBoot-BXK87sqN.js";import"./FSToggleSet-CjZBl77R.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./FSDivider-CDvYXrsD.js";import"./FSChip-B-qI2KQy.js";import"./FSOptionGroup-CjsCGHE4.js";import"./filter-C1K_d8Vd.js";import"./filter-MqAtiUjL.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./index-DfSX31J9.js";const v=q({name:"FSBaseChartOrganisationsList",components:{FSChartTileUI:x,FSDataTable:_,FSTagGroup:j,FSImage:A,FSIcon:d,FSText:z,FSRow:V},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:f,getMany:h}=H(),F=w(()=>({modelsLabels:{fixedFilters:n.value.map(t=>t.modelsLabels).reduce((t,o)=>{for(const s of o)t.map(c=>c.id).includes(s.id)||t.push(s);return t},[]).map(t=>({value:t.id,text:t.label})).concat({value:"",text:"--"}),methodFilter:(t,o)=>o.length==0&&t==""||o.length>0&&o.some(s=>s.id==t)},chartType:{fixedFilters:W(Q).map(t=>({value:t.value,text:y(t.value)})),methodFilter:(t,o)=>t==o}})),C=t=>e.modelValue.includes(t),u=()=>{h(e.chartOrganisationFilters)};return D(()=>[e.chartOrganisationFilters],(t,o)=>{(!t&&!o||!M.isEqual(t,o))&&u()},{immediate:!0}),{fetchingChartOrganisations:f,chartOrganisations:n,headersOptions:F,ColorEnum:K,chartTypeLabel:y,isSelected:C,chartIcon:J}}});function Y(e,n,f,h,F,C){const u=m("FSImage"),t=m("FSTagGroup"),o=m("FSChartTileUI"),s=m("FSText"),c=m("FSDataTable");return b(),O(c,k({items:e.chartOrganisations,itemTo:e.$props.itemTo,loading:e.fetchingChartOrganisations,headersOptions:e.headersOptions,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=a=>e.$emit("update:modelValue",a))},e.$attrs),E({"header.imageId-title":r(()=>[i(d,null,{default:r(()=>[g(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[i(d,null,{default:r(()=>[g(S(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(b(),O(u,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):G("",!0)]),"item.tags":r(({item:a})=>[i(t,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.modelsLabels":r(({item:a})=>[i(t,{editable:!1,tags:a.modelsLabels.map(p=>p.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[i(o,{variant:"standard",label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:e.ColorEnum.Light,to:e.$props.itemTo&&e.$props.itemTo(a)},null,8,["label","categoryLabel","icon","imageId","type","color","to"])]),"item.chartType":r(({item:a})=>[i(V,{wrap:!1},{default:r(()=>[i(d,{icon:e.chartIcon(a.chartType)},null,8,["icon"]),i(s,null,{default:r(()=>[g(S(e.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),_:2},[N(e.$slots,(a,p)=>({name:p,fn:r(B=>[P(e.$slots,p,R(U(B)))])}))]),1040,["items","itemTo","loading","headersOptions","tableCode","modelValue"])}const $=X(v,[["render",Y]]);v.__docgenInfo={displayName:"FSBaseChartOrganisationsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ChartOrganisationInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisations/FSBaseChartOrganisationsList.vue"]};const ze={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationsList",component:$,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisations1"]}}},l={render:e=>({components:{FSBaseChartOrganisationsList:$},setup(){return{args:e}},template:`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisations1"}};var T,L,I;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartOrganisationsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'chartOrganisations1'
  }
}`,...(I=(L=l.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const Ae=["Default"];export{l as Default,Ae as __namedExportsOrder,ze as default};
