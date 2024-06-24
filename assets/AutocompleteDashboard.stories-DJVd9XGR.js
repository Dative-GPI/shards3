import{d as z,c as A,y as T,z as d,A as p,B as r,m as G,E as m,G as u,D as h,K as n,R as K}from"./vue.esm-bundler-CLWyqtrq.js";import{F as W}from"./FSAutocompleteField-ca2IAtlh.js";import{F as k}from"./FSButton-xawrBwn0.js";import{F as H}from"./FSChip-D3Gdm6wa.js";import{_ as S}from"./FSIcon-nvjMvWEC.js";import{_ as F}from"./FSSpan-C4Iz3qX9.js";import{_ as v}from"./FSRow-B7tdsi71.js";import{u as J}from"./useDashboardOrganisationTypes-B3dKXZ0u.js";import{u as Q}from"./useDashboardOrganisations-BeRzDqJQ.js";import{u as X}from"./useDashboardShallows-BZcmZHFe.js";import{C as y}from"./useColors-D61Fe1_L.js";import{u as Y}from"./useTranslations-BiPIEqtB.js";import{u as Z}from"./useAutocomplete-BUBL_XZR.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ee}from"./FSCol-B1LPjIXg.js";import"./FSSearchField-B2afuG5O.js";import"./FSTextField-BJ0CYXhH.js";import"./VField-BXxuzAJZ.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./theme-bwyTeVCn.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./FSDialogMenu-C9Ewv9NN.js";import"./FSCard-CtrctGW7.js";import"./css-Ca-HPGcF.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-DJ8Wh-Vs.js";import"./FSRadio-YkCJJZtr.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSToggleSet-CWkSWZ4R.js";import"./FSSlideGroup-DqfnNVEm.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BLZ0_EVh.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSFadeOut-Cm2RoYLR.js";import"./FSLoader-DpxcFPRZ.js";import"./elevation-CB-eCL4u.js";import"./VSelect-DovITVmj.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./FSClickable-CX-mXFfM.js";import"./dashboardTranslation-BBvk7tfF.js";import"./base-DgvHU1oF.js";import"./useAppOrganisationId-B5BDd-xv.js";import"./serviceFactory-D_XwB3_y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BGJVwV03.js";import"./pathCrumb-D0_87whe.js";import"./index-DfSX31J9.js";var o=(e=>(e[e.None=0]="None",e[e.Organisation=1]="Organisation",e[e.OrganisationType=2]="OrganisationType",e[e.Shallow=3]="Shallow",e))(o||{});const{$tr:f}=Y(),ae=e=>{switch(e){case o.None:return f("ui.dashboard-type.none","None");case o.Organisation:case o.Shallow:return f("ui.dashboard-type.organisation","Custom");case o.OrganisationType:return f("ui.dashboard-type.organisation-type","Shared")}},te=e=>{switch(e){case o.None:return y.Error;case o.Organisation:case o.Shallow:return y.Primary;case o.OrganisationType:return y.Warning}},$=z({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:W,FSButton:k,FSChip:H,FSIcon:S,FSSpan:F,FSRow:v},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:Number,required:!1,default:o.None},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue","update:type"],setup(e,{emit:l}){const{getMany:w,fetching:D,entities:O}=J(),{getMany:C,fetching:i,entities:g}=Q(),{getMany:a,fetching:s,entities:M}=X(),V=A(()=>O.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.OrganisationType})).concat(g.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Organisation}))).concat(M.value.map(t=>({id:t.id,icon:t.icon,label:t.label,type:o.Shallow})))),j=A(()=>P.value&&(D.value||i.value||s.value)),I=t=>{Array.isArray(t)?(l("update:modelValue",t.map(b=>b.id)),l("update:type",t.map(b=>b.type))):(l("update:modelValue",t==null?void 0:t.id),l("update:type",t==null?void 0:t.type))},U=t=>Promise.all([w({...e.dashboardOrganisationTypeFilters,search:t??void 0}),C({...e.dashboardOrganisationFilters,search:t??void 0}),a({...e.dashboardShallowFilters,search:t??void 0})]),{toggleSet:E,search:L,init:P,onUpdate:R}=Z(V,[()=>e.dashboardOrganisationTypeFilters,()=>e.dashboardOrganisationFilters,()=>e.dashboardShallowFilters],l,U,I);return{toggleSet:E,loading:j,search:L,dashboards:V,dashboardTypeColor:te,dashboardTypeLabel:ae,onUpdate:R}}});function oe(e,l,w,D,O,C){const i=T("FSChip"),g=T("FSAutocompleteField");return d(),p(g,G({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,loading:e.loading,items:e.dashboards,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:a})=>[e.$props.modelValue?(d(),p(v,{key:0,align:"center-center",wrap:!1},{default:r(()=>[a.raw.icon?(d(),p(S,{key:0},{default:r(()=>[m(u(a.raw.icon),1)]),_:2},1024)):h("",!0),n(F,null,{default:r(()=>[m(u(a.raw.label),1)]),_:2},1024),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)):h("",!0)]),"item-label":r(({item:a,font:s})=>[n(v,{align:"center-left",wrap:!1},{default:r(()=>[a.raw.icon?(d(),p(S,{key:0},{default:r(()=>[m(u(a.raw.icon),1)]),_:2},1024)):h("",!0),n(F,{font:s},{default:r(()=>[m(u(a.raw.label),1)]),_:2},1032,["font"]),n(i,{color:e.dashboardTypeColor(a.raw.type),label:e.dashboardTypeLabel(a.raw.type),editable:!1},null,8,["color","label"])]),_:2},1024)]),"toggle-set-item":r(a=>[n(k,{prependIcon:a.item.icon,variant:a.getVariant(a.item),color:a.getColor(a.item),class:K(a.getClass(a.item)),label:a.item.label,onClick:s=>a.toggle(a.item)},{append:r(()=>[n(i,{color:e.dashboardTypeColor(a.item.type),label:e.dashboardTypeLabel(a.item.type),editable:!1},null,8,["color","label"])]),_:2},1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const B=x($,[["render",oe]]);$.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const ka={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:B,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},c={args:{args:{value1:null,type1:0,value2:"11",type2:2,value3:null,type3:0,value4:null,type4:0}},render:(e,{argTypes:l})=>({components:{FSAutocompleteDashboard:B,FSCol:ee},props:Object.keys(l),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteDashboard
        label="Dashboard"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>`})};var _,q,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: "11",
      type2: 2,
      value3: null,
      type3: 0,
      value4: null,
      type4: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteDashboard,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteDashboard
        label="Dashboard"
        v-model="args.value1"
        v-model:type="args.type1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
        v-model:type="args.type2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple"
        :multiple="true"
        v-model="args.value3"
        v-model:type="args.type3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteDashboard
        label="Dashboard with multiple and toggleSet disabled"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
        v-model:type="args.type4"
      />
    </FSCol>\`
  })
}`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};const $a=["Variations"];export{c as Variations,$a as __namedExportsOrder,ka as default};
