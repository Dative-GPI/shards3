var w=Object.defineProperty;var I=(e,o,l)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var t=(e,o,l)=>I(e,typeof o!="symbol"?o+"":o,l);import{d as O,c as p,y as $,z as d,A as c,B as u,m as D,E as k,G as q,D as U}from"./vue.esm-bundler-Vj2X7okO.js";import{F as T}from"./FSAutocompleteField-Dcx_zOza.js";import{_ as h}from"./FSIcon-CNrZYw3j.js";import{A as N}from"./address-CE2z3AEI.js";import{C as x}from"./base-Cf5ASDDk.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as R}from"./composableFactory-B0937_6N.js";import{u as j}from"./useAutocomplete-BIo_snCx.js";import{u as E}from"./useTranslations-DyPMaPr_.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-Bk577joi.js";import"./FSSearchField-ByY1EROu.js";import"./FSTextField-nbXKtPgl.js";import"./FSBaseField-DIHRCDOI.js";import"./FSSpan-C4TWI1ol.js";import"./useSlots-DXmhvOIb.js";import"./FSRow-BuYwVvwM.js";import"./css-CbCR1nbl.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./VSpacer-BJ2TWwuy.js";import"./color-Dk23S21P.js";import"./FSButton-Dxr_k2yH.js";import"./FSClickable-B6i4bUTy.js";import"./FSCard-IkM7vPXg.js";import"./VProgressCircular-BALYDMME.js";import"./tag-BDy8Psij.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSDialogMenu-DJMBxSqq.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./dimensions-CBrtQk_X.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSSlideGroup-DwZDosIV.js";import"./uuid-DTaye2KM.js";import"./group-CT1H1YXM.js";import"./FSToggleSet-D0rXU8K8.js";import"./FSWrapGroup-tsnhcXEt.js";import"./FSCheckbox-oizSWMk6.js";import"./VSelectionControl-BYXKZDmZ.js";import"./index-BN7Lbnw3.js";import"./FSFadeOut-CORcN4YC.js";import"./VImg-tlatQCTU.js";import"./elevation-DH7kyzD7.js";import"./FSRadio-DBjzeRFm.js";import"./VList-CE84Ungi.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-DDOJpQXv.js";import"./VMenu-BOpQjLNS.js";import"./filter-KqM1uUBX.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./lodash-BiW_TGGX.js";class S{constructor(o){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"color");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.color=o.color,this.label=o.label,this.tags=o.tags.slice(),this.address=new N(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class G extends S{constructor(l){super(l);t(this,"description");this.description=l.description}}const b=()=>`${x()}/locations`,P=e=>`${b()}/${encodeURIComponent(e)}`,H=new B("location",G).createComplete(b,P,S),J=R.getMany(H),F=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:T,FSIcon:h},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:a}=J(),{$tr:m}=E(),r=p(()=>C.value&&s.value),i=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-location.placeholder","{0} location(s) selected",e.modelValue.length):null),L=_=>l({...e.locationFilters,search:_??void 0}),{toggleSet:A,init:C,onUpdate:V}=j(a,[()=>e.locationFilters],o,L);return{placeholder:i,locations:a,toggleSet:A,loading:r,onUpdate:V}}});function K(e,o,l,s,a,m){const r=$("FSAutocompleteField");return d(),c(r,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:i})=>[i.icon?(d(),c(h,{key:0},{default:u(()=>[k(q(i.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const y=M(F,[["render",K]]);F.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const vo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:y,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ho=["Variations"];export{n as Variations,ho as __namedExportsOrder,vo as default};
