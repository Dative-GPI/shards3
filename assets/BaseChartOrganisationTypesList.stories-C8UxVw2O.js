import{_}from"./lodash-BiW_TGGX.js";import{d as $,w as B,y as m,z as f,A as y,M as q,N,B as r,m as v,I as D,J as w,K as k,L as i,E as h,G as E,D as G}from"./vue.esm-bundler-DjjVIdVI.js";import{F as U}from"./FSChartTileUI-DpULIEjJ.js";import{F as O}from"./FSDataTable-B_yS3Aa3.js";import{F as M}from"./FSTagGroup-DvEpneL4.js";import{F as z}from"./FSImage-CVDbXXAf.js";import{F as d}from"./FSIcon-8gYhOFD7.js";import{P as T}from"./charts-BPLoyxCB.js";import{u as A}from"./useChartOrganisationTypes-BS5fOdJp.js";import{C as R}from"./useColors-DQIAXgK6.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-Cug_zuK9.js";import"./FSCard-C5xnaBLp.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./FSRow-CpogXLW8.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./useTranslations-f9CWAvtI.js";import"./FSLoader-BqeDhDy7.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./locale-Dn84bpGK.js";import"./VSpacer-CrqXaTz-.js";import"./FSDataTableUI-DkDpmNVy.js";import"./vue-router-C7inxZoN.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-Ca6QR3YB.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./VIcon-CzaRZDPI.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./form-B7NlTRtd.js";import"./FSText-BrySk5Rp.js";import"./FSSearchField-oTNKRE3Q.js";import"./FSTextField-BNsdmcCY.js";import"./FSBaseField-BHQtSJ11.js";import"./FSButton-CzHpksPi.js";import"./VField-BnYbwRuc.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./FSSelectField-DzBCMqD7.js";import"./FSDialogMenu-9Cx_8jGa.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DKSfq5sV.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-DaQ29VSB.js";import"./FSWrapGroup-COIyjdtd.js";import"./FSFadeOut-DhwE_hD-.js";import"./FSRadio-DX2n8Ejy.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-BSIuZf-h.js";import"./VMenu-BkqMtGEU.js";import"./FSDivider-CmxfSM_J.js";import"./FSChip-BA2dIUZg.js";import"./FSOptionGroup-DUoqaSos.js";import"./filter-C1K_d8Vd.js";import"./VBtn-el1a73sG.js";import"./filter-BS4_e9hb.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-D0eCIUsD.js";import"./FSTag-CjSgBzUb.js";import"./FSImageUI-CoAqXOd_.js";import"./useImages-CfONFoOj.js";import"./base-CmdGny12.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-_Z9wfsFC.js";const S=$({name:"FSBaseChartOrganisationTypesList",components:{FSChartTileUI:U,FSDataTable:O,FSTagGroup:M,FSImage:z,FSIcon:d},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},plotPer:{type:Number,required:!1,default:T.None},tableCode:{type:String,required:!0},itemTo:{type:Function,required:!1}},emits:["update:modelValue"],setup(e){const{entities:n,fetching:u,getMany:l}=A(),g=a=>e.modelValue.includes(a),c=()=>{e.plotPer===T.None?l(e.chartOrganisationFilters):l({...e.chartOrganisationFilters,plotPer:e.plotPer})};return B(()=>[e.chartOrganisationFilters,e.plotPer],(a,o)=>{(!a&&!o||!_.isEqual(a,o))&&c()},{immediate:!0}),{ColorEnum:R,fetchingChartOrganisationTypes:u,chartOrganisationTypes:n,isSelected:g}}});function J(e,n,u,l,g,c){const a=m("FSImage"),o=m("FSTagGroup"),P=m("FSChartTileUI"),L=m("FSDataTable");return f(),y(L,v({items:e.chartOrganisationTypes,itemTo:e.$props.itemTo,loading:e.fetchingChartOrganisationTypes,tableCode:e.$props.tableCode,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=t=>e.$emit("update:modelValue",t))},e.$attrs),q({"header.imageId-title":r(()=>[i(d,null,{default:r(()=>[h(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:t})=>[i(d,null,{default:r(()=>[h(E(t.icon),1)]),_:2},1024)]),"item.imageId":r(({item:t})=>[t.imageId?(f(),y(a,{key:0,height:"32px",width:"32px",imageId:t.imageId},null,8,["imageId"])):G("",!0)]),"item.tags":r(({item:t})=>[i(o,{variant:"slide",editable:!1,tags:t.tags},null,8,["tags"])]),"item.modelsLabels":r(({item:t})=>[i(o,{editable:!1,tags:t.modelsLabels.map(s=>s.label)},null,8,["tags"])]),"item.tile":r(({item:t})=>[i(P,{label:t.label,"category-label":t.chartCategoryLabel,icon:t.icon,imageId:t.imageId,type:t.chartType,to:e.$props.itemTo&&e.$props.itemTo(t)},null,8,["label","category-label","icon","imageId","type","to"])]),_:2},[N(e.$slots,(t,s)=>({name:s,fn:r(V=>[D(e.$slots,s,w(k(V)))])}))]),1040,["items","itemTo","loading","tableCode","modelValue"])}const I=j(S,[["render",J]]);S.__docgenInfo={displayName:"FSBaseChartOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"plotPer",type:{name:"PlotPer"},required:!1,defaultValue:{func:!1,value:"PlotPer.None"}},{name:"tableCode",type:{name:"string"},required:!0},{name:"itemTo",type:{name:"(item: ChartOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisationTypes/FSBaseChartOrganisationTypesList.vue"]};const Nt={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationTypesList",component:I,subcomponents:{FSDataTable:O},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisationTypes1"]}}},p={render:e=>({components:{FSBaseChartOrganisationTypesList:I},setup(){return{args:e}},template:`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisationTypes1"}};var C,F,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(F=p.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const vt=["Default"];export{p as Default,vt as __namedExportsOrder,Nt as default};
