import{d as L,w as _,y as p,z as k,A as q,B as v,O as w,C as i,m as c,K as E,L as N,M as P,N as e,H as T,I}from"./vue.esm-bundler-Ddr6MgcY.js";import{_ as O}from"./lodash-BiW_TGGX.js";import{F as S}from"./FSDataTable-CUA9EG44.js";import{_ as b}from"./FSRow-CSQtiyAx.js";import{_ as g}from"./FSSpan-Bh1X02mE.js";import{F as l}from"./FSIcon-DfjSexyz.js";import{F as R}from"./FSClickable-D7sul-uP.js";import{F as z}from"./FSButtonCheckbox-6SSKGXs1.js";import{u as A}from"./useDataDefinitions-rYywzdYE.js";import{C as M}from"./useColors-DnoeDx-P.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H}from"./VSpacer-CRkGOMpe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSLoader-PksHGtEK.js";import"./useBreakpoints-BMg9gIvD.js";import"./css-CxoeZkpP.js";import"./color-DdAXPAA0.js";import"./theme-D55tBrU4.js";import"./dimensions-DL1AZk-8.js";import"./elevation-BNOJtsSY.js";import"./locale-CA7yUTVs.js";import"./FSCol-D8gLxM2E.js";import"./FSDataTableUI-jFJeeCeX.js";import"./vue-router-9d6tV3EF.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-3iIuKfLX.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./density-B5LNz2JK.js";import"./VIcon-zho7mIKV.js";import"./proxiedModel-BYnu2EOK.js";import"./index-BF2Ge4Ib.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./index-B-qTxNvr.js";import"./transition-BtBp4lzQ.js";import"./form-vji0TmoR.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSText-CAGI2dEo.js";import"./useSlots-C9mZt9CQ.js";import"./FSSearchField-D9ku8NjQ.js";import"./FSTextField-ECMlyBTY.js";import"./FSBaseField-BXJBXTur.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./VField-DrieYqTb.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./useTranslations-DgvmBCqU.js";import"./FSSelectField-WQNi82Nz.js";import"./VList-BsRjN0ZI.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-8udoapu6.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-CjZBl77R.js";import"./FSWrapGroup-DCzWuvHX.js";import"./FSFadeOut-B5r2PNGg.js";import"./FSRadio-CBI2uo6q.js";import"./VSelect-DLEPHyKg.js";import"./VMenu-CkU-g4Hp.js";import"./FSDivider-CDvYXrsD.js";import"./FSChip-B-qI2KQy.js";import"./FSOptionGroup-CjsCGHE4.js";import"./filter-C1K_d8Vd.js";import"./VBtn-GP0Uljy4.js";import"./filter-MqAtiUjL.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-H3XPfy7N.js";import"./index-DfSX31J9.js";const V=L({name:"FSBaseDataDefinitionsList",components:{FSButtonCheckbox:z,FSDataTable:S,FSClickable:R,FSSpan:g,FSIcon:l,FSRow:b},props:{tableCode:{type:String,required:!1,default:null},dataDefinitionFilters:{type:Object,required:!1,default:null},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(t){const{getMany:r,fetching:d,entities:u}=A(),f=a=>t.modelValue.includes(a);return _(()=>t.dataDefinitionFilters,(a,n)=>{(!a&&!n||!O.isEqual(a,n))&&r(t.dataDefinitionFilters)},{immediate:!0}),{fetchingDataDefinitions:d,dataDefinitions:u,ColorEnum:M,isSelected:f}}});function K(t,r,d,u,f,a){const n=p("FSButtonCheckbox"),y=p("FSClickable"),B=p("FSDataTable");return k(),q(B,c({loading:t.fetchingDataDefinitions,items:t.dataDefinitions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":r[0]||(r[0]=o=>t.$emit("update:modelValue",o))},t.$attrs),v({toolbar:i(()=>[e(n,{label:t.$tr("ui.common.data-correlated","Correlated only"),color:t.ColorEnum.Success},null,8,["label","color"])]),"item.tile":i(({item:o})=>[e(y,c({padding:"12px",height:"60px",width:"233px",color:t.isSelected(o.id)?t.ColorEnum.Primary:t.ColorEnum.Light,onClick:s=>t.$emit("update:modelValue",[o.id])},t.$attrs),{default:i(()=>[e(b,{align:"center-center"},{default:i(()=>[e(l,{icon:"mdi-thermometer"}),e(g,{lineClamp:1},{default:i(()=>[T(I(o.label),1)]),_:2},1024),e(H),e(l,{color:t.ColorEnum.Primary,icon:"mdi-link"},null,8,["color"])]),_:2},1024)]),_:2},1040,["color","onClick"])]),_:2},[w(t.$slots,(o,s)=>({name:s,fn:i($=>[E(t.$slots,s,N(P($)))])}))]),1040,["loading","items","tableCode","modelValue"])}const h=j(V,[["render",K]]);V.__docgenInfo={displayName:"FSBaseDataDefinitionsList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dataDefinitionFilters",type:{name:"DataDefinitionFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/dataDefinitions/FSBaseDataDefinitionsList.vue"]};const ye={title:"Foundation/Core/Lists/Base Lists/BaseDataDefinitionsList",component:h,subcomponents:{FSDataTable:S},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["dataDefinitions1"]}}},m={render:t=>({components:{FSBaseDataDefinitionsList:h},setup(){return{args:t}},template:`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"dataDefinitions1"}};var D,C,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSBaseDataDefinitionsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSBaseDataDefinitionsList
        :tableCode="args.tableCode"
      />
    \`
  }),
  args: {
    tableCode: 'dataDefinitions1'
  }
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const Be=["Default"];export{m as Default,Be as __namedExportsOrder,ye as default};
