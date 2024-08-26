var w=Object.defineProperty;var I=(e,o,l)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var t=(e,o,l)=>I(e,typeof o!="symbol"?o+"":o,l);import{d as O,c as p,y as $,z as d,A as c,B as u,m as D,E as k,G as q,D as U}from"./vue.esm-bundler-B8zP9crO.js";import{F as T}from"./FSAutocompleteField-Ckk4Z3qH.js";import{_ as h}from"./FSIcon-DZCYhBaF.js";import{A as N}from"./address-CE2z3AEI.js";import{C as x}from"./base-TJZSgE4h.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as R}from"./composableFactory-Bs2ItKgK.js";import{u as j}from"./useAutocomplete-K7yc0TBd.js";import{u as E}from"./useTranslations-Dy1kwog1.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-DXkP6ARl.js";import"./FSSearchField-BJ0VhAlh.js";import"./FSTextField-D4e0l-Dp.js";import"./FSBaseField-BirSoEzM.js";import"./FSSpan-CVrAqAZB.js";import"./useSlots-D_RceZ7l.js";import"./FSRow-D-NDNvrc.js";import"./css-B1GBcH8c.js";import"./useColors-AJGcQHF_.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DtZVHDBt.js";import"./VSpacer-qnIi_Uu8.js";import"./color-DErt19fL.js";import"./FSButton-DOwRPA7_.js";import"./FSClickable-BCaYx5AP.js";import"./FSCard-DS7Ofz0M.js";import"./VProgressCircular-DxDQ8azE.js";import"./VIcon-FsSVL6vQ.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./VLabel-nohB6Jca.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./loader-B8FgLuVw.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./FSDialogMenu-DDSjHlKl.js";import"./VDialog-CrCupxz5.js";import"./VOverlay-nTCjDRiQ.js";import"./dimensions-DJJFaY_J.js";import"./display-DU3NkqOC.js";import"./lazy-7Hvmw8pl.js";import"./router-BFpFBb4L.js";import"./FSSlideGroup-BzAT5HFF.js";import"./uuid-DTaye2KM.js";import"./group-C3Zad-0v.js";import"./FSToggleSet-C0IvZ0dM.js";import"./FSWrapGroup-BtLWKn4p.js";import"./FSCheckbox-C5Shh_eW.js";import"./VSelectionControl-DQecCZ24.js";import"./index-D-9FNlZD.js";import"./FSFadeOut-CzH7IW0v.js";import"./VImg-DbvVxLaQ.js";import"./elevation-B_HXnKlm.js";import"./FSRadio-DCbGHBzU.js";import"./VList-D6tbl9Ec.js";import"./ssrBoot-DcIjCPDT.js";import"./border-BWgmXatz.js";import"./VSelect-YnmM8BsR.js";import"./VMenu-B8mF_lnI.js";import"./filter-B31C1cQo.js";import"./useAppOrganisationId-wxL44o-M.js";import"./lodash-BiW_TGGX.js";class S{constructor(o){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"color");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.color=o.color,this.label=o.label,this.tags=o.tags.slice(),this.address=new N(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class G extends S{constructor(l){super(l);t(this,"description");this.description=l.description}}const b=()=>`${x()}/locations`,P=e=>`${b()}/${encodeURIComponent(e)}`,H=new B("location",G).createComplete(b,P,S),J=R.getMany(H),F=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:T,FSIcon:h},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:a}=J(),{$tr:m}=E(),r=p(()=>C.value&&s.value),i=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-location.placeholder","{0} location(s) selected",e.modelValue.length):null),L=_=>l({...e.locationFilters,search:_??void 0}),{toggleSet:A,init:C,onUpdate:V}=j(a,[()=>e.locationFilters],o,L);return{placeholder:i,locations:a,toggleSet:A,loading:r,onUpdate:V}}});function K(e,o,l,s,a,m){const r=$("FSAutocompleteField");return d(),c(r,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:i})=>[i.icon?(d(),c(h,{key:0},{default:u(()=>[k(q(i.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const y=M(F,[["render",K]]);F.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const go={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:y,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>`})};var g,f,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      FSAutocompleteLocation,
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
      <FSAutocompleteLocation
        label="Location"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled"
        :toggleSetDisabled="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with multiple selection"
        :multiple="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteLocation
        label="Location with toggleset disabled and multiple selection"
        :multiple="true"
        :toggleSetDisabled="true"
        v-model="args.value4"
      />
    </FSCol>\`
  })
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const fo=["Variations"];export{n as Variations,fo as __namedExportsOrder,go as default};
