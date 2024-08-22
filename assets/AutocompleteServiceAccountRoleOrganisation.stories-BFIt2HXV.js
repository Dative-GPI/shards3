var $=Object.defineProperty;var N=(e,o,t)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>N(e,typeof o!="symbol"?o+"":o,t);import{d as T,c as k,y as D,z as l,A as a,B as r,m as U,E as s,G as c,D as g,L as S}from"./vue.esm-bundler-gWFTcvUr.js";import{F as E}from"./FSAutocompleteField-DePWACpW.js";import{_ as v}from"./FSIcon-C5ELG8c1.js";import{_ as f}from"./FSSpan-BlywDO8Z.js";import{_ as A}from"./FSRow-Bpa2jjpJ.js";import{P as q}from"./permissionInfos-BPDgTHQl.js";import{C as L}from"./base-DV1z3red.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as j}from"./composableFactory-CZGZ62iP.js";import{u as x}from"./useAutocomplete-FiZMbYUq.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M}from"./FSCol-DX423FHf.js";import"./FSSearchField-xtHQygQf.js";import"./FSTextField-DZxUijBd.js";import"./FSBaseField-DM1DfhdE.js";import"./useColors-vfWFlOSD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DA9ermhM.js";import"./useSlots-qbJuQIJ1.js";import"./VSpacer-DqpPKsvm.js";import"./color-CI1OEbFE.js";import"./FSButton-CDk00Rln.js";import"./FSClickable-BVFP8bZP.js";import"./FSCard-Dkx-Z7Pt.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./VIcon-BiBYr0XY.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./index-C2ELxjkU.js";import"./transition-14-CCvbq.js";import"./VLabel-B0q5I27e.js";import"./VInput-ClhP4L1h.js";import"./locale-C1ZNn_CS.js";import"./density-cGginCT8.js";import"./proxiedModel-ClxH85aG.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./useTranslations-DebMVrXy.js";import"./FSDialogMenu-5sq61y-r.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./router-B2tkk-4w.js";import"./FSRadioGroup-B2BuItpn.js";import"./FSRadio-0vVABvir.js";import"./VSelectionControl-CyZYkafj.js";import"./index-BTMLtsqI.js";import"./FSToggleSet-B78RpUCe.js";import"./FSSlideGroup-Bf0KNeOu.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-DIBYkq4d.js";import"./group-DEdtjQ6D.js";import"./FSWrapGroup-B3SUGyqE.js";import"./FSCheckbox-DbtWxwzz.js";import"./FSFadeOut-CLF884DQ.js";import"./FSLoader-Dr6heSeB.js";import"./elevation-B3TY2UXi.js";import"./VSelect-CwYrSzi9.js";import"./VList-BToIo4RO.js";import"./ssrBoot-2G_E7J1h.js";import"./border-CDY4nf3P.js";import"./VImg-CHF0S8ll.js";import"./VMenu-lXYF3tO5.js";import"./filter-DSQ_thm0.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./lodash-BiW_TGGX.js";class _{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new q(t))}}class P extends _{constructor(t){super(t);i(this,"description");this.description=t.description}}const h=()=>`${L()}/service-account-role-organisations`,z=e=>`${h()}/${encodeURIComponent(e)}`,H=new B("serviceAccountOrganisation",P).createComplete(h,z,_),J=j.getMany(H),C=T({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:v,FSSpan:f,FSRow:A},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:O,entities:p}=J(),R=k(()=>d.value&&O.value),m=I=>t({...e.serviceAccountRoleOrganisationsFilters,search:I??void 0}),{toggleSet:n,init:d,onUpdate:V}=x(p,[()=>e.serviceAccountRoleOrganisationsFilters],o,m);return{serviceAccountRoleOrganisations:p,toggleSet:n,loading:R,onUpdate:V}}});function K(e,o,t,O,p,R){const m=D("FSAutocompleteField");return l(),a(m,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"autocomplete-selection":r(({item:n})=>[e.$props.modelValue?(l(),a(A,{key:0,align:"center-center",wrap:!1},{default:r(()=>[n.raw.icon?(l(),a(v,{key:0},{default:r(()=>[s(c(n.raw.icon),1)]),_:2},1024)):g("",!0),S(f,null,{default:r(()=>[s(c(n.raw.label),1)]),_:2},1024)]),_:2},1024)):g("",!0)]),"item-label":r(({item:n,font:d})=>[S(A,{align:"center-left",wrap:!1},{default:r(()=>[n.raw.icon?(l(),a(v,{key:0},{default:r(()=>[s(c(n.raw.icon),1)]),_:2},1024)):g("",!0),S(f,{font:d},{default:r(()=>[s(c(n.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","items","multiple","loading","modelValue","onUpdate:modelValue"])}const w=G(C,[["render",K]]);C.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationsFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const fo={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:w,FSCol:M},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var F,b,y;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(y=(b=u.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const Ao=["Variations"];export{u as Variations,Ao as __namedExportsOrder,fo as default};
