import{d as $,c as q,w as D,y as u,z as I,A as S,M as k,N as E,B as r,m as N,I as w,J as M,K as U,L as l,E as T,G,D as P}from"./vue.esm-bundler-DjjVIdVI.js";import{_ as j}from"./lodash-BiW_TGGX.js";import{F as z}from"./FSChartTileUI-CBIqevMo.js";import{F as A}from"./FSTagGroup-DlWhfkx3.js";import{F as J}from"./FSImage-C5YJvBfA.js";import{F as y}from"./FSIcon-BCbpBdVG.js";import{F as _}from"./FSDataTable-CtxyfoeN.js";import{u as K}from"./useChartOrganisations-B0QSJs7A.js";import{u as R}from"./useChartOrganisationTypes-CY19a67c.js";import{C as H}from"./useColors-CdvgF10X.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-DB3UYOUU.js";import"./FSCard-CXVJHnbm.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./FSRow-CmD7j8Pv.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./charts-BPLoyxCB.js";import"./useTranslations-f9CWAvtI.js";import"./FSWrapGroup-D3vzPBUf.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./index-DOC0sH28.js";import"./display-CRYv_UDL.js";import"./VIcon-CzaRZDPI.js";import"./locale-Dn84bpGK.js";import"./FSTag-pSRhmSY7.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./density-BPFRY_Tg.js";import"./elevation-kEG7tFkj.js";import"./rounded-Cely44IK.js";import"./dimensions-DBrW1AO_.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./router-Cjjv2JN-.js";import"./index-CN4E1Twd.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./FSSlideGroup-DWVYRyaA.js";import"./FSButton-DMlgbucp.js";import"./FSImageUI-DCipACiG.js";import"./FSLoader-DpMpI5Qw.js";import"./VImg-IVf3xxVd.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CM9GOyc5.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./composableFactory-CNptecSH.js";import"./VSpacer-CrqXaTz-.js";import"./FSDataTableUI-J-JHjE_D.js";import"./vue-router-C7inxZoN.js";import"./FSCheckbox-UZa98yAo.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./form-B7NlTRtd.js";import"./FSText-Der-WemT.js";import"./FSSearchField-Dk_6lGWY.js";import"./FSTextField-3oztY1wc.js";import"./FSBaseField-DjLbenuy.js";import"./VField-BnYbwRuc.js";import"./forwardRefs-DWGaNmQL.js";import"./FSSelectField-BBg1Sq9a.js";import"./FSDialogMenu-BWN6ZGUx.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./lazy-Dq_5BjJr.js";import"./FSToggleSet-BrIzYH8T.js";import"./FSFadeOut-LZYxqpYZ.js";import"./FSRadio-BjrxbHLV.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./VSelect-COKlA5Ws.js";import"./VMenu-BkqMtGEU.js";import"./FSDivider-BOpY7H3n.js";import"./FSChip-Csg6-bUx.js";import"./FSOptionGroup-D-g-XIX4.js";import"./filter-C1K_d8Vd.js";import"./filter-BS4_e9hb.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./chartSerie-IzOK_6i2.js";import"./timeRange-DtWQBHMx.js";import"./index-DfSX31J9.js";const B=$({name:"FSBaseChartsList",components:{FSChartTileUI:z,FSDataTable:_,FSTagGroup:A,FSImage:J,FSIcon:y},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},tableCode:{type:String,required:!0}},emits:["update:modelValue","update:scope"],setup(t,{emit:n}){const{entities:g,fetching:b,getMany:F}=K(),{entities:h,fetching:f,getMany:p}=R(),d=e=>t.modelValue.includes(e),C=()=>{F(t.chartOrganisationFilters),p(t.chartOrganisationTypeFilters)},a=q(()=>g.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(h.value.map(e=>({id:e.id,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),o=e=>{const i=d(e);m(i?t.modelValue.filter(s=>s!=e):[...t.modelValue,e])},m=e=>{if(!e){n("update:modelValue",[]),n("update:scope",[]);return}const i=a.value.filter(s=>e.includes(s.id));n("update:modelValue",i.map(s=>s.id)),n("update:scope",i.map(s=>s.scope))};return D(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,i)=>{(!e&&!i||!j.isEqual(e,i))&&C()},{immediate:!0}),{fetchingChartOrganisationTypes:f,fetchingChartOrganisations:b,chartOrganisationTypes:h,chartOrganisations:g,ColorEnum:H,charts:a,isSelected:d,onSelect:m,update:o}}});function W(t,n,g,b,F,h){const f=u("FSImage"),p=u("FSTagGroup"),d=u("FSChartTileUI"),C=u("FSDataTable");return I(),S(C,N({loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":t.onSelect},t.$attrs),k({"header.imageId-title":r(()=>[l(y,null,{default:r(()=>[T(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[l(y,null,{default:r(()=>[T(G(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(I(),S(f,{key:0,height:"32px",width:"32px",imageId:a.imageId},null,8,["imageId"])):P("",!0)]),"item.tags":r(({item:a})=>[l(p,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.modelsLabels":r(({item:a})=>[l(p,{editable:!1,tags:a.modelsLabels.map(o=>o.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[l(d,{label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Dark,onClick:o=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[E(t.$slots,(a,o)=>({name:o,fn:r(m=>[w(t.$slots,o,M(U(m)))])}))]),1040,["loading","items","tableCode","modelValue","onUpdate:modelValue"])}const v=Q(B,[["render",W]]);B.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"},{name:"update:scope"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Mt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:v,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]},args:{selecteds:[]}}},c={render:t=>({components:{FSBaseChartsList:v},setup(){return{args:t}},template:`
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
