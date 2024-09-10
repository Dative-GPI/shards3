var V=Object.defineProperty;var I=(e,o,t)=>o in e?V(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>I(e,typeof o!="symbol"?o+"":o,t);import{d as w,c as u,y as T,z as m,A as p,B as d,m as $,E as D,G as N,D as U}from"./vue.esm-bundler-Vj2X7okO.js";import{F as E}from"./FSAutocompleteField-8hM35Zws.js";import{_ as A}from"./FSIcon-uPx7S--r.js";import{P as k}from"./permissionInfos-BPDgTHQl.js";import{C as q}from"./base-Cf5ASDDk.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-B0937_6N.js";import{u as L}from"./useAutocomplete-xPTdFNUt.js";import{u as j}from"./useTranslations-DyPMaPr_.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as M}from"./FSCol-Bk577joi.js";import"./FSSearchField-C-Ns7NpV.js";import"./FSTextField-xplhuXw_.js";import"./FSBaseField-Bip4KV2X.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./VSpacer-YT0o3rZT.js";import"./color-CxiNukW_.js";import"./FSButton-9Jyc5oF6.js";import"./FSClickable-B4ZW0Yow.js";import"./FSCard-U7GdUEkx.js";import"./VProgressCircular-DnrgPZB3.js";import"./tag-DxanhlL3.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./VIcon-DptP6m9n.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./FSDialogMenu-7NQLw-fe.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./dimensions-CzmId2tp.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSSlideGroup-BrsH_RdA.js";import"./uuid-DTaye2KM.js";import"./group-DgCbl5w-.js";import"./FSToggleSet-DeUMSMgz.js";import"./FSWrapGroup-Bqec5oyw.js";import"./FSCheckbox-Bsnpn4tO.js";import"./VSelectionControl-DcHbqw-H.js";import"./index-DjMs4W1j.js";import"./FSFadeOut-BAo4zk1P.js";import"./VImg-BUrdc1ij.js";import"./elevation-BH8AnXAq.js";import"./FSRadio-B1FN7cQo.js";import"./VList-DzB42uLT.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-Dca9hLjt.js";import"./VMenu-DOKVMVxb.js";import"./filter-CkY1Z-lm.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./lodash-BiW_TGGX.js";class f{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new k(t))}}class P extends f{constructor(t){super(t);i(this,"description");this.description=t.description}}const O=()=>`${q()}/service-account-role-organisations`,z=e=>`${O()}/${encodeURIComponent(e)}`,H=new x("serviceAccountOrganisation",P).createComplete(O,z,f),J=B.getMany(H),R=w({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:A},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:s,entities:l}=J(),{$tr:c}=j(),a=u(()=>F.value&&s.value),n=u(()=>e.multiple&&e.modelValue?c("ui.autocomplete-service-account-role-organisation.placeholder","{0} role(s) selected",e.modelValue.length):null),b=_=>t({...e.serviceAccountRoleOrganisationsFilters,search:_??void 0}),{toggleSet:y,init:F,onUpdate:C}=L(l,[()=>e.serviceAccountRoleOrganisationsFilters],o,b);return{serviceAccountRoleOrganisations:l,placeholder:n,toggleSet:y,loading:a,onUpdate:C}}});function K(e,o,t,s,l,c){const a=T("FSAutocompleteField");return m(),p(a,$({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":d(({item:n})=>[n.icon?(m(),p(A,{key:0},{default:d(()=>[D(N(n.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const h=G(R,[["render",K]]);R.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const So={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:h,FSCol:M},props:Object.keys(o),setup(){return{...e}},template:`
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
