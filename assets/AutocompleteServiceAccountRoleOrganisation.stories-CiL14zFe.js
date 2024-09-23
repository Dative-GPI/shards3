var I=Object.defineProperty;var _=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>_(e,typeof o!="symbol"?o+"":o,t);import{d as w,c as u,y as T,z as m,A as p,B as d,m as $,E as D,G as N,D as U}from"./vue.esm-bundler-DjjVIdVI.js";import{F as E}from"./FSAutocompleteField-D0B6ZiYC.js";import{F as A}from"./FSIcon-8gYhOFD7.js";import{P as k}from"./permissionInfos-BPDgTHQl.js";import{C as q}from"./base-LOOo-Z1R.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-D0eCIUsD.js";import{u as L}from"./useAutocomplete-CG-oXc6K.js";import{u as j}from"./useTranslations-f9CWAvtI.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSCol-TPWSQPHs.js";import"./FSSearchField-oTNKRE3Q.js";import"./FSTextField-BNsdmcCY.js";import"./FSBaseField-BHQtSJ11.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSRow-CpogXLW8.js";import"./css-BkQhD285.js";import"./useColors-DQIAXgK6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-v7reDO7s.js";import"./VSpacer-CrqXaTz-.js";import"./color-BKGJvBEr.js";import"./FSButton-CzHpksPi.js";import"./FSClickable-Cug_zuK9.js";import"./FSCard-C5xnaBLp.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./VIcon-CzaRZDPI.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./form-B7NlTRtd.js";import"./loader-CiSVFYJ7.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./FSDialogMenu-9Cx_8jGa.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DKSfq5sV.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./FSToggleSet-DaQ29VSB.js";import"./FSWrapGroup-COIyjdtd.js";import"./FSCheckbox-Ca6QR3YB.js";import"./VSelectionControl-DgLKJW5n.js";import"./index-CN4E1Twd.js";import"./FSFadeOut-DhwE_hD-.js";import"./FSLoader-BqeDhDy7.js";import"./elevation-kEG7tFkj.js";import"./FSRadio-DX2n8Ejy.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-BSIuZf-h.js";import"./VMenu-BkqMtGEU.js";import"./filter-BS4_e9hb.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./lodash-BiW_TGGX.js";class f{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new k(t))}}class P extends f{constructor(t){super(t);i(this,"description");this.description=t.description}}const O=()=>`${q()}/service-account-role-organisations`,z=e=>`${O()}/${encodeURIComponent(e)}`,H=new x("serviceAccountOrganisation",P).createComplete(O,z,f),J=B.getMany(H),R=w({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:A},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:s,entities:l}=J(),{$tr:c}=j(),a=u(()=>F.value&&s.value),r=u(()=>e.multiple&&e.modelValue?c("ui.autocomplete-service-account-role-organisation.placeholder","{0} role(s) selected",e.modelValue.length):null),b=V=>t({...e.serviceAccountRoleOrganisationsFilters,search:V??void 0}),{toggleSet:y,init:F,onUpdate:C}=L(l,[()=>e.serviceAccountRoleOrganisationsFilters],o,b);return{serviceAccountRoleOrganisations:l,placeholder:r,toggleSet:y,loading:a,onUpdate:C}}});function K(e,o,t,s,l,c){const a=T("FSAutocompleteField");return m(),p(a,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:r})=>[r.icon?(m(),p(A,{key:0},{default:d(()=>[D(N(r.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const h=G(R,[["render",K]]);R.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const Oo={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:h,FSCol:M},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var g,v,S;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const Ro=["Variations"];export{n as Variations,Ro as __namedExportsOrder,Oo as default};
