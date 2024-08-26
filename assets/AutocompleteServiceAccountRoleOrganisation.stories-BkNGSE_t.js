var V=Object.defineProperty;var I=(e,o,t)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>I(e,typeof o!="symbol"?o+"":o,t);import{d as w,c as u,y as T,z as m,A as p,B as d,m as $,E as D,G as N,D as U}from"./vue.esm-bundler-DR8xMV81.js";import{F as E}from"./FSAutocompleteField-p0X-UdBZ.js";import{_ as A}from"./FSIcon-CYA01Pg8.js";import{P as k}from"./permissionInfos-BPDgTHQl.js";import{C as q}from"./base-BZ9BoqOK.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-CS2nLnTC.js";import{u as L}from"./useAutocomplete-C0O9yddU.js";import{u as j}from"./useTranslations-yeF_ketc.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M}from"./FSCol-CeBQ3oDD.js";import"./FSSearchField-D014VcGV.js";import"./FSTextField-Cu62_PPc.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSRow-Dfo2nEmE.js";import"./css-DYbKqpMF.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./VSpacer-BxLG4kFi.js";import"./color-DRqqT5iF.js";import"./FSButton-Bvd0naOX.js";import"./FSClickable-Bx8zcCZW.js";import"./FSCard-CU93xE1v.js";import"./VProgressCircular-CQOkkHxu.js";import"./VIcon-CB8o8wL4.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./index-CtF1TxK6.js";import"./transition-DYmm1B3d.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./locale-x-KasAKq.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./loader-C4nPQ1_b.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./FSDialogMenu-BsX2O1U3.js";import"./VDialog-CuBQDUUO.js";import"./VOverlay-DN1mcZZT.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./router-I0roKE-i.js";import"./FSSlideGroup-CAnEdTCM.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-xubiTtnp.js";import"./group-C6nVA5p1.js";import"./FSToggleSet-WVf1v7XO.js";import"./FSWrapGroup-DmnpIXuG.js";import"./FSCheckbox-DNmwW8YA.js";import"./VSelectionControl-CQKVm7EG.js";import"./index-Bfb9sPge.js";import"./FSFadeOut-DVFTxjCH.js";import"./FSLoader-KrLuz6mY.js";import"./elevation-BS7jUP1v.js";import"./FSRadio-4MLyqnfX.js";import"./VList-DeInaXPz.js";import"./ssrBoot-D_SIKPEL.js";import"./border-BytU_KR8.js";import"./VImg-MapJeLY6.js";import"./VSelect-CgtGyyn0.js";import"./VMenu-5z8CiYXe.js";import"./filter-Ct2lxthn.js";import"./useAppOrganisationId-D_AG8bST.js";import"./lodash-BiW_TGGX.js";class f{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new k(t))}}class P extends f{constructor(t){super(t);i(this,"description");this.description=t.description}}const O=()=>`${q()}/service-account-role-organisations`,z=e=>`${O()}/${encodeURIComponent(e)}`,H=new x("serviceAccountOrganisation",P).createComplete(O,z,f),J=B.getMany(H),R=w({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:A},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:s,entities:l}=J(),{$tr:c}=j(),a=u(()=>F.value&&s.value),n=u(()=>e.multiple&&e.modelValue?c("ui.autocomplete-service-account-role-organisation.placeholder","{0} role(s) selected",e.modelValue.length):null),b=_=>t({...e.serviceAccountRoleOrganisationsFilters,search:_??void 0}),{toggleSet:y,init:F,onUpdate:C}=L(l,[()=>e.serviceAccountRoleOrganisationsFilters],o,b);return{serviceAccountRoleOrganisations:l,placeholder:n,toggleSet:y,loading:a,onUpdate:C}}});function K(e,o,t,s,l,c){const a=T("FSAutocompleteField");return m(),p(a,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:n})=>[n.icon?(m(),p(A,{key:0},{default:d(()=>[D(N(n.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const h=G(R,[["render",K]]);R.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const So={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:h,FSCol:M},props:Object.keys(o),setup(){return{...e}},template:`
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
