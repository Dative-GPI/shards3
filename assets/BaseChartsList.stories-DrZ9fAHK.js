import{d as $,c as B,w as q,y as m,z as y,A as b,M as v,N as D,B as o,m as k,I as E,J as N,K as w,L as l,E as M,G,D as P}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as U}from"./lodash-BiW_TGGX.js";import{F as j}from"./FSChartTileUI-BrblSmSm.js";import{F as z}from"./FSTagGroup-C_aC6pxK.js";import{F as A}from"./FSImage-Bal15wTA.js";import{_ as T}from"./FSIcon-D23Cpf0F.js";import{F as L}from"./FSDataTable-BqTo56-8.js";import{u as J}from"./useChartOrganisations-Da2b9mlX.js";import{u as K}from"./useChartOrganisationTypes-dJN_rUrd.js";import{C as R}from"./useColors-DlnF7i6T.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-DdK5daMz.js";import"./FSCard-D-fFYNec.js";import"./FSCol-YmDykHL-.js";import"./css-DLfrm0pR.js";import"./FSRow-CVY2l52N.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./charts-BPLoyxCB.js";import"./useTranslations-CdSqQFV3.js";import"./FSWrapGroup-Choo5L6h.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-CcWB8C_f.js";import"./FSButton-BNq-0lOE.js";import"./index-CHbvZ5Sj.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./proxiedModel-Bq4wip6p.js";import"./VIcon-BIpY_noq.js";import"./locale-C-s_GJlL.js";import"./FSTag-CC_Nt88n.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./elevation-Ben4zuE4.js";import"./rounded-Dg8mz8II.js";import"./dimensions-DyYT4L19.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSImageUI-xIDH797J.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./composableFactory-wHNy9kQa.js";import"./FSLoader-CtbqJzfZ.js";import"./VImg-DW7Ik4XH.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./VSpacer-C4plVoTE.js";import"./FSDataTableUI-DzinQmej.js";import"./vue-router-BhvpcqFa.js";import"./FSCheckbox-VrXx14Lw.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./form-B61Sg6X-.js";import"./FSText-DyldgdXP.js";import"./FSSearchField-BIrdfUzJ.js";import"./FSTextField-BKDOMXYp.js";import"./FSBaseField-_Isn_Ha_.js";import"./VField-DndYz9t7.js";import"./forwardRefs-DWGaNmQL.js";import"./FSSelectField-CTZAdwe6.js";import"./FSDialogMenu-BULt7rkH.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./lazy-CAOrKziU.js";import"./FSToggleSet-CI3bzWWf.js";import"./FSFadeOut-D96pvLZm.js";import"./FSRadio-BDiw7DXd.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./VSelect-B_I0944e.js";import"./VMenu-BVgNprPc.js";import"./FSDivider-SLQwEwFD.js";import"./FSChip-BrwvSycq.js";import"./FSOptionGroup-CE_5FDQP.js";import"./filter-DuGNEgHB.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./chartSerie-CU1F_Cev.js";import"./timeRange-DtWQBHMx.js";import"./index-DfSX31J9.js";const O=$({name:"FSBaseChartsList",components:{FSChartTileUI:j,FSDataTable:L,FSTagGroup:z,FSImage:A,FSIcon:T},props:{modelValue:{type:Array,default:()=>[],required:!1},chartOrganisationFilters:{type:Object,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},tableCode:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{emit:i}){const{entities:d,fetching:f,getMany:C}=J(),{entities:u,fetching:c,getMany:s}=K(),n=e=>t.modelValue.includes(e),g=()=>{C(t.chartOrganisationFilters),s(t.chartOrganisationTypeFilters)},a=B(()=>d.value.map(e=>({id:`${e.id}_${e.scope}`,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})).concat(u.value.map(e=>({id:`${e.id}_${e.scope}`,imageId:e.imageId,chartId:e.chartId,chartCategoryId:e.chartCategoryId,chartCategoryLabel:e.chartCategoryLabel,scope:e.scope,label:e.label,title:e.title,code:e.code,icon:e.icon,tags:e.tags,multiple:e.multiple,chartType:e.chartType,modelsLabels:e.modelsLabels})))),r=e=>{n(e)?i("update:modelValue",t.modelValue.filter(_=>_!=e)):i("update:modelValue",[...t.modelValue,e])};return q(()=>[t.chartOrganisationFilters,t.chartOrganisationTypeFilters],(e,h)=>{(!e&&!h||!U.isEqual(e,h))&&g()},{immediate:!0}),{fetchingChartOrganisationTypes:c,fetchingChartOrganisations:f,chartOrganisationTypes:u,chartOrganisations:d,ColorEnum:R,charts:a,isSelected:n,update:r}}});function Q(t,i,d,f,C,u){const c=m("FSImage"),s=m("FSTagGroup"),n=m("FSChartTileUI"),g=m("FSDataTable");return y(),b(g,k({loading:t.fetchingChartOrganisationTypes||t.fetchingChartOrganisations,items:t.charts,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=a=>t.$emit("update:modelValue",a))},t.$attrs),v({"item.icon":o(({item:a})=>[l(T,null,{default:o(()=>[M(G(a.icon),1)]),_:2},1024)]),"item.imageId":o(({item:a})=>[a.imageId?(y(),b(c,{key:0,height:"32px",width:"32px",imageId:a.imageId},null,8,["imageId"])):P("",!0)]),"item.tags":o(({item:a})=>[l(s,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.modelsLabels":o(({item:a})=>[l(s,{editable:!1,tags:a.modelsLabels.map(r=>r.label)},null,8,["tags"])]),"item.tile":o(({item:a})=>[l(n,{label:a.label,categoryLabel:a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.isSelected(a.id)?t.ColorEnum.Primary:t.ColorEnum.Dark,onClick:r=>t.update(a.id)},null,8,["label","categoryLabel","icon","imageId","type","color","onClick"])]),_:2},[D(t.$slots,(a,r)=>({name:r,fn:o(e=>[E(t.$slots,r,N(w(e)))])}))]),1040,["loading","items","tableCode","modelValue"])}const V=H(O,[["render",Q]]);O.__docgenInfo={displayName:"FSBaseChartsList",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"chartOrganisationFilters",type:{name:"ChartOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"tableCode",type:{name:"string"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/charts/FSBaseChartsList.vue"]};const Dt={title:"Foundation/Core/Lists/Base Lists/BaseChartsList",component:V,subcomponents:{FSDataTable:L},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["charts1"]}}},p={render:t=>({components:{FSBaseChartsList:V},setup(){return{args:t}},template:`
      <FSBaseChartsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"charts1"}};var F,I,S;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      />
    \`
  }),
  args: {
    tableCode: 'charts1'
  }
}`,...(S=(I=p.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const kt=["Default"];export{p as Default,kt as __namedExportsOrder,Dt as default};