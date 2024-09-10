import{_ as V}from"./lodash-BiW_TGGX.js";import{d as _,w as $,y as n,z as g,A as f,M as B,N as q,B as o,m as N,I as v,J as D,K as w,L as m,E as k,G as E,D as G}from"./vue.esm-bundler-Vj2X7okO.js";import{F as U}from"./FSChartTileUI-BvIB5qyz.js";import{F}from"./FSDataTable-DaSPBtvp.js";import{F as M}from"./FSTagGroup-CRl4oyjK.js";import{F as z}from"./FSImage-CBathzkQ.js";import{_ as b}from"./FSIcon-uPx7S--r.js";import{P as y}from"./charts-BPLoyxCB.js";import{u as A}from"./useChartOrganisationTypes-BeA6YxKh.js";import{C as R}from"./useColors-Bw2ZR-m1.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-B4ZW0Yow.js";import"./FSCard-U7GdUEkx.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./FSRow-BuYwVvwM.js";import"./VProgressCircular-DnrgPZB3.js";import"./color-CxiNukW_.js";import"./theme-D8Xq3tpQ.js";import"./tag-DxanhlL3.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./useTranslations-DyPMaPr_.js";import"./VImg-BUrdc1ij.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./VSpacer-YT0o3rZT.js";import"./FSDataTableUI-qySX4F1Y.js";import"./vue-router-Cn9ishJ4.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-Bsnpn4tO.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./density-BM1QLeh4.js";import"./VIcon-DptP6m9n.js";import"./proxiedModel-BE9FlVMJ.js";import"./index-DjMs4W1j.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./index-joExpvzU.js";import"./form-CgybbRT3.js";import"./FSText-aZSl7JAe.js";import"./FSSearchField-C-Ns7NpV.js";import"./FSTextField-xplhuXw_.js";import"./FSBaseField-Bip4KV2X.js";import"./FSButton-9Jyc5oF6.js";import"./VField-DaMwaaXY.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./FSSelectField-D30uP2ew.js";import"./FSDialogMenu-7NQLw-fe.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-BrsH_RdA.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-DeUMSMgz.js";import"./FSWrapGroup-Bqec5oyw.js";import"./FSFadeOut-BAo4zk1P.js";import"./FSRadio-B1FN7cQo.js";import"./VList-DzB42uLT.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-Dca9hLjt.js";import"./VMenu-DOKVMVxb.js";import"./FSDivider-BzbNCf6i.js";import"./FSChip-Bhktj6Ea.js";import"./FSOptionGroup-oFDYiJhW.js";import"./VBtn-CJflX_3O.js";import"./filter-CkY1Z-lm.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-B0937_6N.js";import"./FSTag-Cuq-alF0.js";import"./FSImageUI-E0mf0Zhc.js";import"./base-CmdGny12.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-_Z9wfsFC.js";const O=_({name:"FSBaseChartOrganisationTypesList",components:{FSChartTileUI:U,FSDataTable:F,FSTagGroup:M,FSImage:z,FSIcon:b},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},plotPer:{type:Number,required:!1,default:y.None},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(e){const{entities:i,fetching:d,getMany:l}=A(),u=r=>e.modelValue.includes(r),c=()=>{e.plotPer===y.None?l(e.chartOrganisationFilters):l({...e.chartOrganisationFilters,plotPer:e.plotPer})};return $(()=>[e.chartOrganisationFilters,e.plotPer],(r,a)=>{(!r&&!a||!V.isEqual(r,a))&&c()},{immediate:!0}),{ColorEnum:R,fetchingChartOrganisationTypes:d,chartOrganisationTypes:i,isSelected:u}}});function J(e,i,d,l,u,c){const r=n("FSImage"),a=n("FSTagGroup"),I=n("FSChartTileUI"),P=n("FSDataTable");return g(),f(P,N({items:e.chartOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingChartOrganisationTypes,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),B({"item.icon":o(({item:t})=>[m(b,null,{default:o(()=>[k(E(t.icon),1)]),_:2},1024)]),"item.imageId":o(({item:t})=>[t.imageId?(g(),f(r,{key:0,height:"32px",width:"32px",imageId:t.imageId},null,8,["imageId"])):G("",!0)]),"item.tags":o(({item:t})=>[m(a,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.modelsLabels":o(({item:t})=>[m(a,{editable:!1,tags:t.modelsLabels.map(s=>s.label)},null,8,["tags"])]),"item.tile":o(({item:t})=>[m(I,{label:t.label,"category-label":t.chartCategoryLabel,icon:t.icon,imageId:t.imageId,type:t.chartType,to:e.$props.itemTo&&e.$props.itemTo(t)},null,8,["label","category-label","icon","imageId","type","to"])]),_:2},[q(e.$slots,(t,s)=>({name:s,fn:o(L=>[v(e.$slots,s,D(w(L)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const S=j(O,[["render",J]]);O.__docgenInfo={displayName:"FSBaseChartOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"plotPer",type:{name:"PlotPer"},required:!1,defaultValue:{func:!1,value:"PlotPer.None"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: ChartOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisationTypes/FSBaseChartOrganisationTypesList.vue"]};const Vt={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationTypesList",component:S,subcomponents:{FSDataTable:F},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisationTypes1"]}}},p={render:e=>({components:{FSBaseChartOrganisationTypesList:S},setup(){return{args:e}},template:`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisationTypes1"}};var h,T,C;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseChartOrganisationTypesList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'chartOrganisationTypes1'
  }
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const _t=["Default"];export{p as Default,_t as __namedExportsOrder,Vt as default};
