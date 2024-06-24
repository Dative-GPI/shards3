import{d as O,c as $,y as k,z as n,A as r,B as i,m as q,E as l,G as a,D as d,K as u}from"./vue.esm-bundler-BLBBrD1D.js";import{F as D}from"./FSAutocompleteField-UqibJclk.js";import{_ as g}from"./FSIcon-CgTCRlvx.js";import{_ as f}from"./FSSpan-DNHXfhpi.js";import{_ as S}from"./FSRow-BZVvIgLd.js";import{C as U}from"./base-B_HXG24o.js";import{S as N}from"./serviceFactory-Bd5jifNi.js";import{C as R}from"./composableFactory-DeG9aq0N.js";import{u as T}from"./useAutocomplete-CXUsAi9P.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-OnQTHx6W.js";import"./FSSearchField-B6OTU-GY.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./useSlots-CKjiHxqT.js";import"./VSpacer-C8vjG_Ri.js";import"./useRender-CTGr_J4i.js";import"./index-Co1LeIbZ.js";import"./transition-DqSOegbJ.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./tag-kXOxSspb.js";import"./density-Dp1dzyfT.js";import"./loader-FLWPcWRx.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./anchor-3JQV6orx.js";import"./rounded-Ax8hVtG-.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Ctk-czeT.js";import"./FSClickable-BcsUSOO8.js";import"./FSCard-fA5aX9kp.js";import"./css-DU1X_fj1.js";import"./useRules-CaBH9gl0.js";import"./index-C6izM9Xn.js";import"./useTranslations-CT7kkIpn.js";import"./FSDialogMenu-DdgKI6bE.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./dimensions-DNYoshM5.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./router-Ce0kmIVt.js";import"./FSRadioGroup-DdyptP-D.js";import"./FSRadio-CNInwCt1.js";import"./VSelectionControl-BO5kGMEg.js";import"./index-BeqDwarK.js";import"./FSToggleSet-CzyrnPJD.js";import"./FSSlideGroup-Cw9KgMxr.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-L33WvfT3.js";import"./group-BPLcoGlv.js";import"./FSWrapGroup-C0fzjWQA.js";import"./FSCheckbox-DJm00ahm.js";import"./FSFadeOut-NO6SWErB.js";import"./FSLoader-wJOBxBqI.js";import"./elevation-0FWsrb7Y.js";import"./VSelect-DjiDlqwN.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./VDivider-BDr2QhjS.js";import"./VMenu-BeRcuKeG.js";import"./filter-CPgh2H3B.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./lodash-BiW_TGGX.js";class E{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class _{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new E(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class M extends _{constructor(e){super(e),this.description=e.description}}const C=()=>`${U()}/locations`,x=o=>`${C()}/${encodeURIComponent(o)}`,z=new N("location",M).createComplete(C,x,_),G=R.getMany(z),A=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSIcon:g,FSSpan:f,FSRow:S},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:F,fetching:y,entities:p}=G(),h=I=>F({...o.locationFilters,search:I??void 0}),{toggleSet:m,init:t,onUpdate:c}=T(p,[()=>o.locationFilters],e,h),w=$(()=>t.value&&y.value);return{locations:p,toggleSet:m,loading:w,onUpdate:c}}});function K(o,e,F,y,p,h){const m=k("FSAutocompleteField");return n(),r(m,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":i(({item:t})=>[o.$props.modelValue?(n(),r(S,{key:0,align:"center-center",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,null,{default:i(()=>[l(a(t.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":i(({item:t,font:c})=>[u(S,{align:"center-left",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,{font:c},{default:i(()=>[l(a(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=B(A,[["render",K]]);A.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:V,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
    </FSCol>`})};var v,b,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "1"
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
    </FSCol>\`
  })
}`,...(L=(b=s.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const So=["Variations"];export{s as Variations,So as __namedExportsOrder,fo as default};
