var w=Object.defineProperty;var I=(e,o,l)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l;var t=(e,o,l)=>I(e,typeof o!="symbol"?o+"":o,l);import{d as O,c as p,y as $,z as d,A as c,B as u,m as D,E as k,G as q,D as U}from"./vue.esm-bundler--l9E1zCM.js";import{F as T}from"./FSAutocompleteField-DpzmU4ep.js";import{_ as h}from"./FSIcon-BHbXv1sW.js";import{A as N}from"./address-CE2z3AEI.js";import{C as x}from"./base-BcjN1n8z.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{C as R}from"./composableFactory-BJn24iiy.js";import{u as j}from"./useAutocomplete-C1ph6JPC.js";import{u as E}from"./useTranslations-ByKtt_-5.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as z}from"./FSCol-BA_LQqMv.js";import"./FSSearchField-B3SNj64H.js";import"./FSTextField-CORSOnFI.js";import"./FSBaseField-vXRxqDM_.js";import"./FSSpan-Drxl5cqQ.js";import"./useSlots-sbMHjG0F.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./useColors-CcOmb8TW.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-uJWLcFzd.js";import"./VSpacer-CY3ZXRlU.js";import"./color-DkN3uAGq.js";import"./FSButton-BPKnQ3W2.js";import"./FSClickable-BjrLGEPN.js";import"./FSCard-DXUcd4gZ.js";import"./VProgressCircular-DiflYTWZ.js";import"./VIcon-CRzxwZ_P.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./VLabel-CtWliwLG.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./loader-BeDPJNvc.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSDialogMenu-B4qN8dQk.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./router-B0OmHOdA.js";import"./FSSlideGroup-DeeIs7LB.js";import"./uuid-DTaye2KM.js";import"./group-DYO-GdsM.js";import"./FSToggleSet-BsXD3GQs.js";import"./FSWrapGroup-BLHTvc8Y.js";import"./FSCheckbox-O0BYl1sh.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-D6eFi9gL.js";import"./VImg-r61Tw9eL.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-CPRKwXqX.js";import"./VList-CMkQDUHu.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-DuVohGsR.js";import"./VMenu-DGJWui2w.js";import"./filter-BQY2ohDP.js";import"./useAppOrganisationId-CtPU_OX2.js";import"./lodash-BiW_TGGX.js";class S{constructor(o){t(this,"id");t(this,"organisationId");t(this,"icon");t(this,"code");t(this,"color");t(this,"label");t(this,"tags");t(this,"address");t(this,"modelsIds");t(this,"deviceOrganisationsIds");t(this,"deviceOrganisationsCount");this.id=o.id,this.organisationId=o.organisationId,this.icon=o.icon,this.code=o.code,this.color=o.color,this.label=o.label,this.tags=o.tags.slice(),this.address=new N(o.address),this.modelsIds=o.modelsIds.slice(),this.deviceOrganisationsIds=o.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=o.deviceOrganisationsCount}}class G extends S{constructor(l){super(l);t(this,"description");this.description=l.description}}const b=()=>`${x()}/locations`,P=e=>`${b()}/${encodeURIComponent(e)}`,H=new B("location",G).createComplete(b,P,S),J=R.getMany(H),F=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:T,FSIcon:h},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const{getMany:l,fetching:s,entities:a}=J(),{$tr:m}=E(),r=p(()=>C.value&&s.value),i=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-location.placeholder","{0} location(s) selected",e.modelValue.length):null),L=_=>l({...e.locationFilters,search:_??void 0}),{toggleSet:A,init:C,onUpdate:V}=j(a,[()=>e.locationFilters],o,L);return{placeholder:i,locations:a,toggleSet:A,loading:r,onUpdate:V}}});function K(e,o,l,s,a,m){const r=$("FSAutocompleteField");return d(),c(r,D({toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:i})=>[i.icon?(d(),c(h,{key:0},{default:u(()=>[k(q(i.icon),1)]),_:2},1024)):U("",!0)]),_:1},16,["toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const y=M(F,[["render",K]]);F.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteLocation:y,FSCol:z},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const vo=["Variations"];export{n as Variations,vo as __namedExportsOrder,fo as default};
