import{d as $,c as q,w as D,y as u,z as I,A as S,M as k,N as E,B as r,m as N,I as w,J as M,K as U,L as l,E as T,G,D as P}from"./vue.esm-bundler-DjjVIdVI.js";import{_ as j}from"./lodash-BiW_TGGX.js";import{F as z}from"./FSChartTileUI-DpULIEjJ.js";import{F as A}from"./FSTagGroup-DvEpneL4.js";import{F as J}from"./FSImage-CVDbXXAf.js";import{F as y}from"./FSIcon-8gYhOFD7.js";import{F as _}from"./FSDataTable-B_yS3Aa3.js";import{u as K}from"./useChartOrganisations-B92shDqg.js";import{u as R}from"./useChartOrganisationTypes-BS5fOdJp.js";import{C as H}from"./useColors-DQIAXgK6.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-Cug_zuK9.js";import"./FSCard-C5xnaBLp.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./FSRow-CpogXLW8.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./charts-BPLoyxCB.js";import"./useTranslations-f9CWAvtI.js";import"./FSWrapGroup-COIyjdtd.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./index-DOC0sH28.js";import"./display-CRYv_UDL.js";import"./VIcon-CzaRZDPI.js";import"./locale-Dn84bpGK.js";import"./FSTag-CjSgBzUb.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./density-BPFRY_Tg.js";import"./elevation-kEG7tFkj.js";import"./rounded-Cely44IK.js";import"./dimensions-DBrW1AO_.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./router-Cjjv2JN-.js";import"./index-CN4E1Twd.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-DKSfq5sV.js";import"./FSButton-CzHpksPi.js";import"./FSImageUI-CoAqXOd_.js";import"./FSLoader-BqeDhDy7.js";import"./VImg-IVf3xxVd.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CfONFoOj.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-D0eCIUsD.js";import"./VSpacer-CrqXaTz-.js";import"./FSDataTableUI-DkDpmNVy.js";import"./vue-router-C7inxZoN.js";import"./FSCheckbox-Ca6QR3YB.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./form-B7NlTRtd.js";import"./FSText-BrySk5Rp.js";import"./FSSearchField-oTNKRE3Q.js";import"./FSTextField-BNsdmcCY.js";import"./FSBaseField-BHQtSJ11.js";import"./VField-BnYbwRuc.js";import"./forwardRefs-DWGaNmQL.js";import"./FSSelectField-DzBCMqD7.js";import"./FSDialogMenu-9Cx_8jGa.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./lazy-Dq_5BjJr.js";import"./FSToggleSet-DaQ29VSB.js";import"./FSFadeOut-DhwE_hD-.js";import"./FSRadio-DX2n8Ejy.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./VSelect-BSIuZf-h.js";import"./VMenu-BkqMtGEU.js";import"./FSDivider-CmxfSM_J.js";import"./FSChip-BA2dIUZg.js";import"./FSOptionGroup-DUoqaSos.js";import"./filter-C1K_d8Vd.js";import"./filter-BS4_e9hb.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-_Z9wfsFC.js";const B=$({name:"FSBaseChartsList",components:{FSChartTileUI:z,FSDataTable:_,FSTagGroup:A,FSImage:J,FSIcon:y},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},tableCode:{type:String,required:!0}},emits:["update:modelValue","update:scope"],setup(t,{emit:n}){const{entities:g,fetching:b,getMany:F}=K(),{entities:h,fetching:f,getMany:p}=R(),d=e=>t.modelValue.includes(e),C=()=>{F(t.chartOrganisationFilters),p(t.chartOrganisationTypeFilters)},a=q(()=>g.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(h.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),o=e=>{const i=d(e);m(i?t.modelValue.filter(s=>s!=e):[...t.modelValue,e])},m=e=>{if(!e){n("update:modelValue",[]),n("update:scope",[]);return}const i=a.value.filter(s=>e.includes(s.id));n("update:modelValue",i.map(s=>s.id)),n("update:scope",i.map(s=>s.scope))};return D(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,i)=>{(!e&&!i||!j.isEqual(e,i))&&C()},{immediate:!0}),{fetchingChartOrganisationTypes:f,fetchingChartOrganisations:b,chartOrganisationTypes:h,chartOrganisations:g,ColorEnum:H,charts:a,isSelected:d,onSelect:m,update:o}}});function W(t,n,g,b,F,h){const f=u("FSImage"),p=u("FSTagGroup"),d=u("FSChartTileUI"),C=u("FSDataTable");return I(),S(C,N({loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),k({"header.imageId-title":r(()=>[l(y,null,{default:r(()=>[T(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[l(y,null,{default:r(()=>[T(G(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(I(),S(f,{key:0,height:"32px",width:"32px",imageId:a.imageId},null,8,["imageId"])):P("",!0)]),"item.tags":r(({item:a})=>[l(p,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.modelsLabels":r(({item:a})=>[l(p,{editable:!1,tags:a.modelsLabels.map(o=>o.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[l(d,{label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Dark,onClick:o=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[E(t.$slots,(a,o)=>({name:o,fn:r(m=>[w(t.$slots,o,M(U(m)))])}))]),1040,["loading","items","tableCode","modelValue","onUpdate:modelValue"])}const v=Q(B,[["render",W]]);B.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Mt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:v,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},c={render:t=>({components:{FSBaseChartsList:v},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
        v-model="args.selecteds"
      />
    `}),args:{tableCode:"charts1"}};var L,O,V;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};const Ut=["Default"];export{c as Default,Ut as __namedExportsOrder,Mt as default};
