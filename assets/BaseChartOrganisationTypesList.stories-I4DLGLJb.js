import{d as q,c as w,w as D,A as p,B as F,C as E,Q as N,D as r,j as P,I as C,M as k,N as G,O as R,P as i,J as g,K as b,G as U}from"./vue.esm-bundler-DSwHwgKw.js";import{_ as M}from"./lodash-BiW_TGGX.js";import{F as j}from"./FSChartTileUI-CjJX943_.js";import{F as A}from"./FSTagGroup-CRdvgp7J.js";import{F as x}from"./FSImage-COjEvANL.js";import{F as z}from"./FSText-DiZ1SltH.js";import{F as d}from"./FSIcon-TpFvudaY.js";import{_ as V}from"./FSRow-BtkEywPN.js";import{F as _}from"./FSDataTable-DZFWIlQx.js";import{e as O,c as J,C as K}from"./chartsTools-Bvcwjd5E.js";import{u as Q}from"./useChartOrganisationTypes-CWTUnLok.js";import{C as H}from"./useColors-C4EmrkDp.js";import{g as W}from"./enumTools-BEsapygt.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSTile-BeVjL0yn.js";import"./FSClickable-Dg_E4dui.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSCard-Dby8iWqU.js";import"./FSCol-DdGVae5t.js";import"./css-XXwFKvUE.js";import"./useBreakpoints-BjF6TIJH.js";import"./VProgressCircular-Cd-wheNV.js";import"./color-uBYwhjku.js";import"./theme-4AjdAhIV.js";import"./resizeObserver-A1vWEG-J.js";import"./VIcon-CdjjMQ6V.js";import"./FSCheckbox-Bv5yvgVA.js";import"./FSSpan-BoXQ4lG9.js";import"./useSlots-CKCq4R6P.js";import"./useRules-CaMdh5L0.js";import"./VSelectionControl-CTHKpAmd.js";import"./density-BfjPyHiq.js";import"./proxiedModel-D4Pgijkw.js";import"./index-BOr5YZLb.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./locale-BsRwbRmi.js";import"./index-GTe7atjb.js";import"./transition--2cAMn_j.js";import"./dimensions-CF0PFV-D.js";import"./form-BWUCG2_i.js";import"./FSWrapGroup-DErk_6Fw.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./display-CL7KZq5h.js";import"./FSTag-DyQUQmPg.js";import"./VBtn-WSruA80Q.js";import"./border-C-pp2UFW.js";import"./elevation-DiTecsj1.js";import"./rounded-ZilIy1Oq.js";import"./loader-kTKV0tNq.js";import"./anchor-7worbrUf.js";import"./router-C4I-dA4c.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./FSSlideGroup-DmKSX9y1.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./FSButton-CN1ZIktz.js";import"./FSImageUI-BP1ruBGV.js";import"./FSLoader-CB4bV0N-.js";import"./VImg-DSalXW5F.js";import"./index-D4rR88Q2.js";import"./useImages-Bzd_CK2Q.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-BC5Ev-17.js";import"./useAppAuthToken-BCmX_25A.js";import"./FSDataTableUI-CKZMTO2G.js";import"./FSSearchField-izSr2Wf8.js";import"./FSTextField-CnPHb7kI.js";import"./FSBaseField-D2ow2gVm.js";import"./VField-YT2KDH-x.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-BhPzmPwL.js";import"./FSSelectField-eGgC7ePy.js";import"./VList-CvbK1pQh.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./scopeId-DneNdOj5.js";import"./ssrBoot-DEXW_-kf.js";import"./FSToggleSet-Co6Wb6go.js";import"./FSFadeOut-CQmN3qQC.js";import"./FSRadio-QZf7aiMX.js";import"./VSelect-CLcgsW2i.js";import"./VMenu-B9SE09pj.js";import"./FSDivider-DHqZtz-q.js";import"./FSChip-CCuCpK86.js";import"./FSOptionGroup-ZBHuZ8qZ.js";import"./filter-C1K_d8Vd.js";import"./filter-CxK7Dp-c.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./chartAllowedStep-D7zgduHm.js";import"./chartTimeStep-DIQ4HUqp.js";import"./index-DfSX31J9.js";const v=q({name:"FSBaseChartOrganisationTypesList",components:{FSChartTileUI:j,FSDataTable:_,FSTagGroup:A,FSImage:x,FSIcon:d,FSText:z,FSRow:V},props:{tableCode:{type:String,required:!1,default:null},chartOrganisationTypeFilters:{type:Object,required:!1,default:null},itemTo:{type:Function,required:!1},modelValue:{type:Array,default:()=>[],required:!1}},emits:["update:modelValue"],setup(t){const{entities:n,fetching:f,getMany:h}=Q(),T=w(()=>({modelsLabels:{fixedFilters:n.value.map(e=>e.modelsLabels).reduce((e,o)=>{for(const s of o)e.map(c=>c.id).includes(s.id)||e.push(s);return e},[]).map(e=>({value:e.id,text:e.label})).concat({value:"",text:"--"}),methodFilter:(e,o)=>o.length==0&&e==""||o.length>0&&o.some(s=>s.id==e)},chartType:{fixedFilters:W(K).map(e=>({value:e.value,text:O(e.value)})),methodFilter:(e,o)=>e==o}})),y=e=>t.modelValue.includes(e),u=()=>{h(t.chartOrganisationTypeFilters)};return D(()=>[t.chartOrganisationTypeFilters],(e,o)=>{(!e&&!o||!M.isEqual(e,o))&&u()},{immediate:!0}),{fetchingChartOrganisationTypes:f,chartOrganisationTypes:n,headersOptions:T,ColorEnum:H,chartTypeLabel:O,isSelected:y,chartIcon:J}}});function Y(t,n,f,h,T,y){const u=p("FSImage"),e=p("FSTagGroup"),o=p("FSText"),s=p("FSChartTileUI"),c=p("FSDataTable");return C(),F(c,P({items:t.chartOrganisationTypes,itemTo:t.$props.itemTo,loading:t.fetchingChartOrganisationTypes,headersOptions:t.headersOptions,tableCode:t.$props.tableCode,modelValue:t.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=a=>t.$emit("update:modelValue",a))},t.$attrs),E({"header.imageId-title":r(()=>[i(d,null,{default:r(()=>[g(" mdi-panorama-variant-outline ")]),_:1})]),"item.icon":r(({item:a})=>[i(d,null,{default:r(()=>[g(b(a.icon),1)]),_:2},1024)]),"item.imageId":r(({item:a})=>[a.imageId?(C(),F(u,{key:0,height:"32px",width:"32px",imageId:a.imageId,thumbnail:!0},null,8,["imageId"])):U("",!0)]),"item.tags":r(({item:a})=>[i(e,{variant:"slide",editable:!1,tags:a.tags},null,8,["tags"])]),"item.chartType":r(({item:a})=>[i(V,{wrap:!1},{default:r(()=>[i(d,{icon:t.chartIcon(a.chartType)},null,8,["icon"]),i(o,null,{default:r(()=>[g(b(t.chartTypeLabel(a.chartType)),1)]),_:2},1024)]),_:2},1024)]),"item.modelsLabels":r(({item:a})=>[i(e,{editable:!1,tags:a.modelsLabels.map(m=>m.label)},null,8,["tags"])]),"item.tile":r(({item:a})=>[i(s,{variant:"standard",label:a.label,"category-label":a.chartCategoryLabel,icon:a.icon,imageId:a.imageId,type:a.chartType,color:t.ColorEnum.Light,to:t.$props.itemTo&&t.$props.itemTo(a)},null,8,["label","category-label","icon","imageId","type","color","to"])]),_:2},[N(t.$slots,(a,m)=>({name:m,fn:r(B=>[k(t.$slots,m,G(R(B)))])}))]),1040,["items","itemTo","loading","headersOptions","tableCode","modelValue"])}const $=X(v,[["render",Y]]);v.__docgenInfo={displayName:"FSBaseChartOrganisationTypesList",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"chartOrganisationTypeFilters",type:{name:"ChartOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemTo",type:{name:"(item: ChartOrganisationTypeInfos) => Partial<RouteLocation>"},required:!1},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/chartOrganisationTypes/FSBaseChartOrganisationTypesList.vue"]};const jt={title:"Foundation/Core/Lists/Base Lists/BaseChartOrganisationTypesList",component:$,subcomponents:{FSDataTable:_},tags:["autodocs"],argTypes:{tableCode:{control:"select",options:["chartOrganisationTypes1"]}}},l={render:t=>({components:{FSBaseChartOrganisationTypesList:$},setup(){return{args:t}},template:`
      <FSBaseChartOrganisationTypesList
        :tableCode="args.tableCode"
      />
    `}),args:{tableCode:"chartOrganisationTypes1"}};var S,I,L;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const At=["Default"];export{l as Default,At as __namedExportsOrder,jt as default};
