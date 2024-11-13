var _=Object.defineProperty;var $=(e,o,t)=>o in e?_(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>$(e,typeof o!="symbol"?o+"":o,t);import{d as T,c as m,y as q,z as d,A as g,C as v,m as N,H as U,I as D,F as k}from"./vue.esm-bundler-l-siv0w9.js";import{F as E}from"./FSAutocompleteField-D4hXXGG2.js";import{F as O}from"./FSIcon-CxSeYbPm.js";import{P as L}from"./permissionInfos-BPDgTHQl.js";import{C as B}from"./base-BWToAT4M.js";import{S as j}from"./serviceFactory-DTTRhbEw.js";import{C as l}from"./composableFactory-03a1Iisa.js";import{u as x}from"./useAutocomplete-8zU6WpIq.js";import{u as M}from"./useTranslations-CJK8D24x.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-BvqytbKT.js";import"./FSSearchField-SdnmrqYS.js";import"./FSTextField-xeLxZAxc.js";import"./FSBaseField-Bt-M24lA.js";import"./FSSpan-Di50moR2.js";import"./useBreakpoints-C5IzU8MC.js";import"./useSlots-C_N_WAus.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./FSButton-CTjpHGCH.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DMSoEBu-.js";import"./FSCard-CZcF3hjs.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./index-B089V-om.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./locale-CTwwbPAi.js";import"./density-Dt_pQxP_.js";import"./proxiedModel-KpugNjnZ.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./VList-tnBIxltW.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./router-CIHGWUSM.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./index-Cr304eD2.js";import"./VImg-CZhZqiQJ.js";import"./FSSlideGroup-7mPn_F6a.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BhVekJEg.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./FSToggleSet-BtOljEfB.js";import"./FSWrapGroup-D1OyNKn_.js";import"./FSCheckbox--v2KMIeD.js";import"./VSelectionControl-Br2dHavx.js";import"./FSFadeOut-9Mm6vijG.js";import"./FSLoader-ylzW_XnC.js";import"./FSRadio-CqpA7Dwr.js";import"./VSelect-D2Q6-t0S.js";import"./VMenu-DQq2E1HW.js";import"./filter-BjRVyZGj.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./lodash-BiW_TGGX.js";class b{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new L(t))}}class z extends b{constructor(t){super(t);i(this,"description");this.description=t.description}}const R=()=>`${B()}/service-account-role-organisations`,H=e=>`${R()}/${encodeURIComponent(e)}`,r=new j("serviceAccountOrganisation",z).createComplete(R,H,b);l.get(r);const J=l.getMany(r);l.create(r);l.update(r);l.remove(r);const h=T({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:O},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:u,entities:s}=J(),{$tr:p}=M(),c=m(()=>V.value&&u.value),n=m(()=>e.multiple&&e.modelValue?p("autocomplete.service-account-role.placeholder","{0} role(s) selected",e.modelValue.length):null),F=w=>t({...e.serviceAccountRoleOrganisationsFilters,search:w??void 0}),{toggleSet:C,init:V,onUpdate:I}=x(s,[()=>e.serviceAccountRoleOrganisationsFilters],o,F);return{serviceAccountRoleOrganisations:s,placeholder:n,toggleSet:C,loading:c,onUpdate:I}}});function K(e,o,t,u,s,p){const c=q("FSAutocompleteField");return d(),g(c,N({label:e.$props.label??e.$tr("autocomplete.service-account-role.label","Service account role"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":v(({item:n})=>[n.icon?(d(),g(O,{key:0},{default:v(()=>[U(D(n.icon),1)]),_:2},1024)):k("",!0)]),_:1},16,["label","toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const y=P(h,[["render",K]]);h.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const bo={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:y,FSCol:G},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var S,f,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const Ro=["Variations"];export{a as Variations,Ro as __namedExportsOrder,bo as default};
