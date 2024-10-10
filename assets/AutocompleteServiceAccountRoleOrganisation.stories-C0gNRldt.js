var w=Object.defineProperty;var T=(e,o,t)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>T(e,typeof o!="symbol"?o+"":o,t);import{d as $,c as p,y as N,z as d,A as g,C as v,m as U,H as D,I as k,F as q}from"./vue.esm-bundler-DTB_q9xr.js";import{F as E}from"./FSAutocompleteField-BSQsIiQB.js";import{F as O}from"./FSIcon-CaaGuK6D.js";import{P as x}from"./permissionInfos-BPDgTHQl.js";import{C as L}from"./base-XmH0JLOD.js";import{S as B}from"./serviceFactory-DAEdCiSt.js";import{C as r}from"./composableFactory-CG8osPlO.js";import{u as j}from"./useAutocomplete-x9I-tekI.js";import{u as M}from"./useTranslations-BehwFxDb.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-CAI8fEsN.js";import"./FSTextField-B-binuYf.js";import"./FSBaseField-D2wwYX9r.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-BWKJNLz8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./VSpacer-Di7g3RCw.js";import"./color-Du5JXqac.js";import"./FSButton-C0EbsNmZ.js";import"./FSClickable-BkJRwj5f.js";import"./FSCard-C6D9gNrD.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./index-UH0ZuYvc.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./locale-BJQwrXJ7.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./FSDialogMenu-BA4IKkHH.js";import"./VDialog-5T0GPOZ7.js";import"./VOverlay-Coy41zxg.js";import"./dimensions-CqoZOW6j.js";import"./display-BhWGQDVt.js";import"./lazy-CgkI0iJG.js";import"./router-DxFny788.js";import"./FSSlideGroup--K704DO9.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DF3eQVXp.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./FSToggleSet-CvGKl15-.js";import"./FSWrapGroup-Dplk4rjv.js";import"./FSCheckbox-Bdwx0Alv.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";import"./FSFadeOut-BZtF86_A.js";import"./FSLoader-BFHjXl9p.js";import"./elevation-JfXKLVfD.js";import"./FSRadio-DA5JqUMw.js";import"./VList-CgmTLoPW.js";import"./ssrBoot-BTOmRKcz.js";import"./border-Va--AsO6.js";import"./VImg-C1aVTsth.js";import"./VSelect-oAa5CmWC.js";import"./VMenu-CuKNZEBs.js";import"./filter-COIlslko.js";import"./useAppOrganisationId-C2nceDRs.js";import"./lodash-BiW_TGGX.js";class R{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new x(t))}}class z extends R{constructor(t){super(t);i(this,"description");this.description=t.description}}const h=()=>`${L()}/service-account-role-organisations`,H=e=>`${h()}/${encodeURIComponent(e)}`,n=new B("serviceAccountOrganisation",z).createComplete(h,H,R);r.get(n);const J=r.getMany(n);r.create(n);r.update(n);r.remove(n);const b=$({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:O},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:u,entities:s}=J(),{$tr:m}=M(),c=p(()=>V.value&&u.value),l=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-service-account-role-organisation.placeholder","{0} role(s) selected",e.modelValue.length):null),y=_=>t({...e.serviceAccountRoleOrganisationsFilters,search:_??void 0}),{toggleSet:C,init:V,onUpdate:I}=j(s,[()=>e.serviceAccountRoleOrganisationsFilters],o,y);return{serviceAccountRoleOrganisations:s,placeholder:l,toggleSet:C,loading:c,onUpdate:I}}});function K(e,o,t,u,s,m){const c=N("FSAutocompleteField");return d(),g(c,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":v(({item:l})=>[l.icon?(d(),g(O,{key:0},{default:v(()=>[D(k(l.icon),1)]),_:2},1024)):q("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const F=P(b,[["render",K]]);b.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const Ro={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:F,FSCol:G},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var S,A,f;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(A=a.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};const ho=["Variations"];export{a as Variations,ho as __namedExportsOrder,Ro as default};
