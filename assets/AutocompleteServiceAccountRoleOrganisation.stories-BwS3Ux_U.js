var w=Object.defineProperty;var T=(e,o,t)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;var i=(e,o,t)=>T(e,typeof o!="symbol"?o+"":o,t);import{d as $,c as p,y as N,z as d,A as g,C as v,m as U,H as D,I as k,F as q}from"./vue.esm-bundler-DTB_q9xr.js";import{F as E}from"./FSAutocompleteField-CaoqKedU.js";import{F as O}from"./FSIcon-CJgnsR4e.js";import{P as x}from"./permissionInfos-BPDgTHQl.js";import{C as L}from"./base-XmH0JLOD.js";import{S as B}from"./serviceFactory-DAEdCiSt.js";import{C as r}from"./composableFactory-CG8osPlO.js";import{u as j}from"./useAutocomplete-C_CEUaC2.js";import{u as M}from"./useTranslations-BehwFxDb.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as G}from"./FSCol-CYWCfIBP.js";import"./FSSearchField-Hy0Q7Mp8.js";import"./FSTextField-DpQImVLP.js";import"./FSBaseField-BJvLi7Av.js";import"./FSSpan-DGSHCe_l.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useColors-Du1QHlOW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./FSButton-DblcRn12.js";import"./FSClickable-CIKlZ0Uy.js";import"./FSCard-GtkwWKOo.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./index-CiXeh9xR.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./locale-BJQwrXJ7.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSDialogMenu-Cb0sycmV.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./router-DHMAfVHW.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSFadeOut-CXlPGNaB.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./filter-iZr2_yz2.js";import"./useAppOrganisationId-C2nceDRs.js";import"./lodash-BiW_TGGX.js";class R{constructor(o){i(this,"id");i(this,"roleId");i(this,"organisationId");i(this,"userType");i(this,"icon");i(this,"code");i(this,"label");i(this,"tags");i(this,"permissions");this.id=o.id,this.roleId=o.roleId,this.organisationId=o.organisationId,this.userType=o.userType,this.icon=o.icon,this.code=o.code,this.label=o.label,this.tags=o.tags.slice(),this.permissions=o.permissions.map(t=>new x(t))}}class z extends R{constructor(t){super(t);i(this,"description");this.description=t.description}}const h=()=>`${L()}/service-account-role-organisations`,H=e=>`${h()}/${encodeURIComponent(e)}`,n=new B("serviceAccountOrganisation",z).createComplete(h,H,R);r.get(n);const J=r.getMany(n);r.create(n);r.update(n);r.remove(n);const b=$({name:"FSAutocompleteServiceAccountRoleOrganisation",components:{FSAutocompleteField:E,FSIcon:O},props:{serviceAccountRoleOrganisationsFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:t,fetching:u,entities:s}=J(),{$tr:m}=M(),c=p(()=>V.value&&u.value),l=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-service-account-role-organisation.placeholder","{0} role(s) selected",e.modelValue.length):null),y=_=>t({...e.serviceAccountRoleOrganisationsFilters,search:_??void 0}),{toggleSet:C,init:V,onUpdate:I}=j(s,[()=>e.serviceAccountRoleOrganisationsFilters],o,y);return{serviceAccountRoleOrganisations:s,placeholder:l,toggleSet:C,loading:c,onUpdate:I}}});function K(e,o,t,u,s,m){const c=N("FSAutocompleteField");return d(),g(c,U({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,items:e.serviceAccountRoleOrganisations,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":v(({item:l})=>[l.icon?(d(),g(O,{key:0},{default:v(()=>[D(k(l.icon),1)]),_:2},1024)):q("",!0)]),_:1},16,["toggleSet","items","multiple","placeholder","loading","modelValue","onUpdate:modelValue"])}const F=P(b,[["render",K]]);b.__docgenInfo={displayName:"FSAutocompleteServiceAccountRoleOrganisation",exportName:"default",description:"",tags:{},props:[{name:"serviceAccountRoleOrganisationsFilters",type:{name:"ServiceAccountRoleOrganisationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteServiceAccountRoleOrganisation.vue"]};const Ro={title:"Foundation/Core/Autocompletes/AutocompleteServiceAccountRoleOrganisation",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteServiceAccountRoleOrganisation:F,FSCol:G},props:Object.keys(o),setup(){return{...e}},template:`
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
