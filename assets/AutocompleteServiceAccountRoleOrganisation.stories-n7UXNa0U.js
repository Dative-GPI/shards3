var V=Object.defineProperty;var I=(e,o,t)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>I(e,typeof o!="symbol"?o+"":o,t);import{d as w,c as u,y as T,z as m,A as p,B as d,m as $,E as D,G as N,D as U}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as E}from"./FSAutocompleteField-BwlPjJ12.js";import{_ as A}from"./FSIcon-BhYLJFwS.js";import{P as k}from"./permissionInfos-BPDgTHQl.js";import{C as q}from"./base-BbuH2dYw.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-DYaDCbjS.js";import{u as L}from"./useAutocomplete-Cyb_fxEn.js";import{u as j}from"./useTranslations-DflIUxSJ.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-DVRwmgT8.js";import"./FSTextField-CPBF15FZ.js";import"./FSBaseField-95ZFXhTZ.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-BeCeu6HX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./FSButton-CsvAshDj.js";import"./FSClickable-CT4CAD0O.js";import"./FSCard-B0a7crHg.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-DWuJ-Ztv.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-Cw0TLTWz.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-DUUGlQED.js";import"./FSWrapGroup-B_OxD2yR.js";import"./FSCheckbox-BaTn-nVp.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-PkHtV3O5.js";import"./VImg-tyiJMUIK.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CbP3Hhtz.js";import"./VList-BwEJryXz.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-Ch4v6qVK.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./lodash-BiW_TGGX.js";class f{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new k(t))}}class P extends f{constructor(t){super(t);i(this,"description");this.description=t.description}}const O=()=>`${q()}/service-account-role-organisations`,z=e=>`${O()}/${encodeURIComponent(e)}`,H=new x("serviceAccountOrganisation",P).createComplete(O,z,f),J=B.getMany(H),R=w({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:A},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:s,entities:l}=J(),{$tr:c}=j(),a=u(()=>F.value&&s.value),n=u(()=>e.multiple&&e.modelValue?c("ui.autocomplete-service-account-role-organisation.placeholder","{0} role(s) selected",e.modelValue.length):null),b=_=>t({...e.serviceAccountRoleOrganisationsFilters,search:_??void 0}),{toggleSet:y,init:F,onUpdate:C}=L(l,[()=>e.serviceAccountRoleOrganisationsFilters],o,b);return{serviceAccountRoleOrganisations:l,placeholder:n,toggleSet:y,loading:a,onUpdate:C}}});function K(e,o,t,s,l,c){const a=T("FSAutocompleteField");return m(),p(a,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:n})=>[n.icon?(m(),p(A,{key:0},{default:d(()=>[D(N(n.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const h=G(R,[["render",K]]);R.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const So={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:h,FSCol:M},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var g,v,S;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteServiceAccountRoleOrganisation,
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
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteServiceAccountRoleOrganisation
        label="ServiceAccountRoleOrganisation with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(S=(v=r.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const Ao=["Variations"];export{r as Variations,Ao as __namedExportsOrder,So as default};
