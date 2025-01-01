import{d as V,c as p,A as w,B as s,D as u,j as C,I as d,J as $,K as q,G as D}from"./vue.esm-bundler-DSwHwgKw.js";import{F as k}from"./FSAutocompleteField-_rtaZsEI.js";import{F as b}from"./FSIcon-DbV5muRp.js";import{u as _}from"./useLocations-BS4kBxO2.js";import{u as B}from"./useAutocomplete-BUZ9ESIm.js";import{u as T}from"./useTranslations-BhPzmPwL.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-DdGVae5t.js";import"./FSSearchField-rPpNr1Yi.js";import"./FSTextField-G5bYyIVj.js";import"./FSBaseField-MsaseDuX.js";import"./FSSpan-BoXQ4lG9.js";import"./useBreakpoints-BjF6TIJH.js";import"./useSlots-CKCq4R6P.js";import"./FSRow-BtkEywPN.js";import"./css-XXwFKvUE.js";import"./useColors-BO83iJ4k.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-4AjdAhIV.js";import"./FSButton-DYhqzqie.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-DngCBs65.js";import"./FSCard-BWyLcCxk.js";import"./VProgressCircular-Cd-wheNV.js";import"./color-uBYwhjku.js";import"./resizeObserver-A1vWEG-J.js";import"./VIcon-CdjjMQ6V.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./index-GTe7atjb.js";import"./transition--2cAMn_j.js";import"./VLabel-DSPSNe0W.js";import"./VInput-21AfxGIO.js";import"./locale-BsRwbRmi.js";import"./density-BfjPyHiq.js";import"./dimensions-CF0PFV-D.js";import"./proxiedModel-D4Pgijkw.js";import"./form-BWUCG2_i.js";import"./loader-kTKV0tNq.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";import"./VList-BGOhPHad.js";import"./VDialog-BNlMo7ah.js";import"./VOverlay-DfQDvHFU.js";import"./display-CL7KZq5h.js";import"./scopeId-DneNdOj5.js";import"./router-C4I-dA4c.js";import"./ssrBoot-DEXW_-kf.js";import"./border-C-pp2UFW.js";import"./elevation-DiTecsj1.js";import"./index-BOr5YZLb.js";import"./VImg-DSalXW5F.js";import"./FSSlideGroup-CDErVpPi.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Bh5NMaHJ.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./FSToggleSet-nldesQt9.js";import"./FSWrapGroup-CpuWIkHs.js";import"./FSCheckbox-B7I9yKzI.js";import"./VSelectionControl-CTHKpAmd.js";import"./FSFadeOut--vL84uZt.js";import"./FSLoader-BCTnX9Pa.js";import"./FSRadio-BRXP-khf.js";import"./VSelect-CCGZIyvT.js";import"./VMenu-B9SE09pj.js";import"./filter-CxK7Dp-c.js";import"./address-CE2z3AEI.js";import"./base-BBZpXd5Q.js";import"./useAppOrganisationId-Df5_TYLg.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BC5Ev-17.js";const v=V({name:"FSAutocompleteLocation",components:{FSAutocompleteField:k,FSIcon:b},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:t}){const{getMany:i,fetching:n,entities:a}=_(),{$tr:m}=T(),r=p(()=>y.value&&n.value),o=p(()=>e.multiple&&e.modelValue?m("ui.autocomplete-location.placeholder","{0} location(s) selected",e.modelValue.length):null),F=A=>i({...e.locationFilters,search:A??void 0}),{toggleSet:h,init:y,onUpdate:L}=B(a,[()=>e.locationFilters],t,F);return{placeholder:o,locations:a,toggleSet:h,loading:r,onUpdate:L}}});function O(e,t,i,n,a,m){const r=w("FSAutocompleteField");return d(),s(r,C({label:e.$props.label??e.$tr("ui.common.location","Location"),toggleSet:!e.$props.toggleSetDisabled&&e.toggleSet,multiple:e.$props.multiple,placeholder:e.placeholder,loading:e.loading,items:e.locations,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"item-prepend":u(({item:o})=>[o.icon?(d(),s(b,{key:0},{default:u(()=>[$(q(o.icon),1)]),_:2},1024)):D("",!0)]),_:1},16,["label","toggleSet","multiple","placeholder","loading","items","modelValue","onUpdate:modelValue"])}const S=j(v,[["render",O]]);v.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const nt={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{value1:null,value2:null,value3:null,value4:null}},render:(e,{argTypes:t})=>({components:{FSAutocompleteLocation:S,FSCol:N},props:Object.keys(t),setup(){return{...e}},template:`
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
    </FSCol>`})};var c,g,f;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const mt=["Variations"];export{l as Variations,mt as __namedExportsOrder,nt as default};
