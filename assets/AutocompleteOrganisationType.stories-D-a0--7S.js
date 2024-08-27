var F=Object.defineProperty;var A=(e,t,o)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var a=(e,t,o)=>A(e,typeof t!="symbol"?t+"":t,o);import{d as V,c as p,y as C,z as w,A as D,m as _}from"./vue.esm-bundler-B8zP9crO.js";import{F as $}from"./FSAutocompleteField-BUW9KFV5.js";import{C as I}from"./base-TJZSgE4h.js";import{S as q}from"./serviceFactory-Bd5jifNi.js";import{C as U}from"./composableFactory-Bs2ItKgK.js";import{u as k}from"./useAutocomplete-52r75jCK.js";import{u as N}from"./useTranslations-Dy1kwog1.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as B}from"./FSCol-DXkP6ARl.js";import"./FSSearchField-LBpB0oyV.js";import"./FSTextField-RqWidZvM.js";import"./FSBaseField-NTkLVYiV.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./useColors-CHFZqh9D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./FSButton-CSLtAyqZ.js";import"./FSClickable-CRLy4U08.js";import"./FSCard-BQ4UALgc.js";import"./VProgressCircular-DxDQ8azE.js";import"./VIcon-FsSVL6vQ.js";import"./FSIcon-DoasTXhc.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./FSDialogMenu-DKdGQhSx.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./FSSlideGroup-B6I8kdKO.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-BlitZcd6.js";import"./FSWrapGroup-iC8XkZDM.js";import"./FSCheckbox-CeNyMIyO.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CJxs5U7i.js";import"./VImg-nkm3QF3p.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-BildyJ8g.js";import"./VList-DrakP2K3.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-BmtbTONd.js";import"./VMenu-B8mF_lnI.js";import"./filter-B31C1cQo.js";import"./useAppOrganisationId-wxL44o-M.js";import"./lodash-BiW_TGGX.js";class g{constructor(t){a(this,"id");a(this,"mainDashboardId");a(this,"mainDashboardType");a(this,"code");a(this,"label");this.id=t.id,this.mainDashboardId=t.mainDashboardId,this.mainDashboardType=t.mainDashboardType,this.code=t.code,this.label=t.label}}class E extends g{constructor(o){super(o);a(this,"description");this.description=o.description}}const c=()=>`${I()}/organisation-types`,G=e=>`${c()}/${encodeURIComponent(e)}`,M=new q("organisationType",E).create(e=>e.build(e.addGet(G),e.addGetMany(c,g),e.addNotify())),j=U.getMany(M),y=V({name:"FSAutocompleteOrganisationType",components:{FSAutocompleteField:$},props:{organisationTypeFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:o,fetching:r,entities:n}=j(),{$tr:s}=N(),l=p(()=>v.value&&r.value),b=p(()=>e.multiple&&e.modelValue?s("ui.autocomplete-organisation-type.placeholder","{0} organisation type(s) selected",e.modelValue.length):null),T=O=>o({...e.organisationTypeFilters,search:O??void 0}),{toggleSet:h,init:v,onUpdate:S}=k(n,[()=>e.organisationTypeFilters],t,T);return{organisationTypes:n,placeholder:b,toggleSet:h,loading:l,onUpdate:S}}});function x(e,t,o,r,n,s){const l=C("FSAutocompleteField");return w(),D(l,_({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,items:e.organisationTypes,loading:e.loading,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),null,16,["toggleSet","multiple","placeholder","items","loading","modelValue","onUpdate:modelValue"])}const f=R(y,[["render",x]]);y.__docgenInfo={displayName:"FSAutocompleteOrganisationType",exportName:"default",description:"",tags:{},props:[{name:"organisationTypeFilters",type:{name:"OrganisationTypeFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteOrganisationType.vue"]};const lt={title:"Foundation/Core/Autocompletes/AutocompleteOrganisationType",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteOrganisationType:f,FSCol:B},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var m,u,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const rt=["Variations"];export{i as Variations,rt as __namedExportsOrder,lt as default};
