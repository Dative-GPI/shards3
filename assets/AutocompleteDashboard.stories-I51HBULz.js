import{d as L,c as m,y as S,z as F,A as v,C as r,m as z,H as P,I as E,F as H,N as u,B as G,D as J}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as K}from"./FSAutocompleteField-rpC1iu27.js";import{F as w}from"./FSButton-44O228oj.js";import{F as Q}from"./FSChip-CAvKfeh3.js";import{F as A}from"./FSIcon-dnXFGGQr.js";import{u as R}from"./useDashboardOrganisationTypes-DAOOKznG.js";import{u as W}from"./useDashboardOrganisations-SYuIiyjn.js";import{u as X}from"./useDashboardShallows-CIMorXGl.js";import{d as Y,a as Z}from"./dashboards-BKK5wUIX.js";import{D as i}from"./dashboards-JSNI7pIu.js";import{u as x}from"./useAutocomplete-XOgYaWXJ.js";import{u as ee}from"./useTranslations-DgvmBCqU.js";import{_ as ae}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as te}from"./FSCol-D8gLxM2E.js";import"./FSSearchField-Bx6G4eFd.js";import"./FSTextField-B9Yl6IUE.js";import"./FSBaseField-CPhXHC60.js";import"./FSSpan-Bh1X02mE.js";import"./useBreakpoints-BMg9gIvD.js";import"./useSlots-C9mZt9CQ.js";import"./FSRow-CSQtiyAx.js";import"./css-CxoeZkpP.js";import"./useColors-C3GOyDHx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D55tBrU4.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./index-B-qTxNvr.js";import"./color-DdAXPAA0.js";import"./transition-BtBp4lzQ.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./locale-CA7yUTVs.js";import"./VIcon-zho7mIKV.js";import"./density-B5LNz2JK.js";import"./proxiedModel-BYnu2EOK.js";import"./form-vji0TmoR.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./resizeObserver-wyIwxSZb.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./VList-Ms7LY5Qs.js";import"./FSCard-CxH8ejsx.js";import"./VDialog-CGEJcy8g.js";import"./VOverlay-C5IcMf4o.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./router-C4YP2PAT.js";import"./ssrBoot-BXK87sqN.js";import"./border-BiXRHevL.js";import"./elevation-BNOJtsSY.js";import"./index-BF2Ge4Ib.js";import"./VImg-Bi-pKvLj.js";import"./FSSlideGroup-bnXYYW-T.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D7F-G6Uh.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./FSToggleSet-Chnxajrx.js";import"./FSWrapGroup-mhpasbJF.js";import"./FSCheckbox-oOjjSOAG.js";import"./VSelectionControl-DbX2q5FD.js";import"./FSFadeOut-ClVU4caD.js";import"./FSLoader-Bw_zeuUP.js";import"./FSRadio-CBwjt_Sc.js";import"./VSelect-BLps1uzN.js";import"./VMenu-CkU-g4Hp.js";import"./filter-MqAtiUjL.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-Dz5j9aqP.js";import"./dashboardTranslation-C6soLE7g.js";import"./useAppLanguageCode-C2XicOK_.js";import"./lodash-BiW_TGGX.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./serviceFactory-DTTRhbEw.js";import"./composableFactory-H3XPfy7N.js";import"./pathCrumb-Db-cq5HI.js";const C=L({name:"FSAutocompleteDashboard",components:{FSAutocompleteField:K,FSButton:w,FSChip:Q,FSIcon:A},props:{dashboardOrganisationTypeFilters:{type:Object,required:!1,default:null},dashboardOrganisationFilters:{type:Object,required:!1,default:null},dashboardShallowFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},type:{type:[Array,Number],required:!1,default:i.None},ignoreDashboardOrganisationTypes:{type:Boolean,required:!1,default:!1},ignoreDashboardOrganisations:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update","update:modelValue","update:type"],setup(a,{emit:o}){const{getMany:b,fetching:g,entities:h}=R(),{getMany:c,fetching:s,entities:d}=W(),{getMany:t,fetching:y,entities:$}=X(),{$tr:k}=ee(),f=m(()=>h.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.OrganisationType})).concat(d.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.Organisation}))).concat($.value.map(e=>({id:e.id,icon:e.icon,label:e.label,type:i.Shallow})))),N=m(()=>_.value&&(g.value||s.value||y.value)),B=m(()=>a.multiple&&a.modelValue?k("autocomplete.dashboard.placeholder","{0} dashboard(s) selected",a.modelValue.length):null),M=e=>{if(Array.isArray(e)){const l=e.map(p=>p.id),D=e.map(p=>p.type);o("update:modelValue",l),o("update:type",D),o("update",{modelValue:l,type:D})}else o("update:modelValue",e==null?void 0:e.id),o("update:type",e==null?void 0:e.type),o("update",{modelValue:e==null?void 0:e.id,type:e==null?void 0:e.type})},j=e=>{const l=[];return a.ignoreDashboardOrganisationTypes||l.push(b({...a.dashboardOrganisationTypeFilters,search:e??void 0})),a.ignoreDashboardOrganisations||(l.push(c({...a.dashboardOrganisationFilters,search:e??void 0})),l.push(t({...a.dashboardShallowFilters,search:e??void 0}))),Promise.all(l)},{toggleSet:I,init:_,onUpdate:U}=x(f,[()=>a.dashboardOrganisationTypeFilters,()=>a.dashboardOrganisationFilters,()=>a.dashboardShallowFilters],o,j,M);return{placeholder:B,dashboards:f,toggleSet:I,loading:N,dashboardTypeColor:Y,dashboardTypeLabel:Z,onUpdate:U}}});function oe(a,o,b,g,h,c){const s=S("FSChip"),d=S("FSAutocompleteField");return F(),v(d,z({label:a.$props.label??a.$tr("autocomplete.dashboard.label","Dashboard"),toggleSet:!a.$props.toggleSetDisabled&&a.toggleSet,multiple:a.$props.multiple,placeholder:a.placeholder,items:a.dashboards,loading:a.loading,modelValue:a.$props.modelValue,"onUpdate:modelValue":a.onUpdate},a.$attrs),{"item-prepend":r(({item:t})=>[t.icon?(F(),v(A,{key:0},{default:r(()=>[P(E(t.icon),1)]),_:2},1024)):H("",!0)]),"item-append":r(({item:t})=>[u(s,{color:a.dashboardTypeColor(t.type),label:a.dashboardTypeLabel(t.type),editable:!1},null,8,["color","label"])]),"toggle-set-item":r(t=>[u(w,{prependIcon:t.item.icon,variant:t.getVariant(t.item),color:t.getColor(t.item),class:J(t.getClass(t.item)),label:t.item.label,onClick:y=>t.toggle(t.item)},G({_:2},[t.item.type?{name:"append",fn:r(()=>[u(s,{color:a.dashboardTypeColor(t.item.type),label:a.dashboardTypeLabel(t.item.type),editable:!1},null,8,["color","label"])]),key:"0"}:void 0]),1032,["prependIcon","variant","color","class","label","onClick"])]),_:1},16,["label","toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const q=ae(C,[["render",oe]]);C.__docgenInfo={displayName:"FSAutocompleteDashboard",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeFilters",type:{name:"DashboardOrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardOrganisationFilters",type:{name:"DashboardOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"dashboardShallowFilters",type:{name:"DashboardShallowFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"type",type:{name:"DashboardType[] | DashboardType"},required:!1,defaultValue:{func:!1,value:"DashboardType.None"}},{name:"ignoreDashboardOrganisationTypes",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"ignoreDashboardOrganisations",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:type"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteDashboard.vue"]};const ja={title:"Foundation/Core/Autocompletes/AutocompleteDashboard",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,type1:0,value2:null,type2:0,value3:null,type3:0,value4:null,type4:0}},render:(a,{argTypes:o})=>({components:{FSAutocompleteDashboard:q,FSCol:te},props:Object.keys(o),setup(){return{...a}},template:`
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
    </FSCol>`})};var O,V,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      type1: 0,
      value2: null,
      type2: 0,
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
}`,...(T=(V=n.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};const Ia=["Variations"];export{n as Variations,Ia as __namedExportsOrder,ja as default};
