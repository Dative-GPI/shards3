var F=Object.defineProperty;var A=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var i=(e,t,o)=>A(e,typeof t!="symbol"?t+"":t,o);import{d as V,c as p,y as C,z as w,A as D,m as _}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as $}from"./FSAutocompleteField-Bl3plbXe.js";import{C as I}from"./base-BbuH2dYw.js";import{S as q}from"./serviceFactory-Bd5jifNi.js";import{C as U}from"./composableFactory-DYaDCbjS.js";import{u as k}from"./useAutocomplete-DzUOI0K-.js";import{u as N}from"./useTranslations-DflIUxSJ.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as B}from"./FSCol-DLJAvXXo.js";import"./FSSearchField-BmcQ_82r.js";import"./FSTextField-CMLUeGZH.js";import"./FSBaseField-D2jPE59R.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./useColors-nFEwMWzN.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1riLSun.js";import"./VSpacer-CeIMSlXt.js";import"./color-DRHDjI8D.js";import"./FSButton-DS5pJwRE.js";import"./FSClickable-Dn475adk.js";import"./FSCard-BdS37dLD.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./FSIcon-CEcP550-.js";import"./VIcon-DEItKADI.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./loader-BrBoJqhy.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSDialogMenu-BUF-R31v.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./router-DTnNLfUf.js";import"./FSSlideGroup-DDUHPpf0.js";import"./uuid-DTaye2KM.js";import"./group-Daa3BzEI.js";import"./FSToggleSet-BtGm8wWU.js";import"./FSWrapGroup-B-W0vR2W.js";import"./FSCheckbox-jcMp7y2y.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-DssjZXn_.js";import"./VImg-DlvaTCkZ.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-Db7coB6b.js";import"./VList-BjkR6psD.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-B8V0bATO.js";import"./VMenu-Cux52w-S.js";import"./filter-DXJSDnkE.js";import"./useAppOrganisationId-p6s5VcJd.js";import"./lodash-BiW_TGGX.js";class g{constructor(t){i(this,"id");i(this,"mainDashboardId");i(this,"mainDashboardType");i(this,"code");i(this,"label");this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class E extends g{constructor(o){super(o);i(this,"description");this.description=o.description}}const c=()=>`${I()}/organisation-types`,G=e=>`${c()}/${encodeURIComponent(e)}`,M=new q("organisationType",E).create(e=>e.build(e.addGet(G),e.addGetMany(c,g),e.addNotify())),j=U.getMany(M),y=V({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:$},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:r,entities:n}=j(),{$tr:s}=N(),l=p(()=>v.value&&r.value),b=p(()=>e.multiple&&e.modelValue?s("ui.autocomplete-organisation-type.placeholder","{0} organisation type(s) selected",e.modelValue.length):null),T=O=>o({...e.organisationTypeFilters,search:O??void 0}),{toggleSet:h,init:v,onUpdate:S}=k(n,[()=>e.organisationTypeFilters],t,T);return{organisationTypes:n,placeholder:b,toggleSet:h,loading:l,onUpdate:S}}});function x(e,t,o,r,n,s){const l=C("FSAutocompleteField");return w(),D(l,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const f=R(y,[["render",x]]);y.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const st={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:f,FSCol:B},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      FSAutocompleteOrganisationType,
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
      <FSAutocompleteOrganisationType
        label="OrganisationType"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteOrganisationType
        label="OrganisationType with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const pt=["Variations"];export{a as Variations,pt as __namedExportsOrder,st as default};
