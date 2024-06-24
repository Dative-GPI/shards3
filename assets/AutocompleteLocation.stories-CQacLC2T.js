import{d as O,c as $,y as k,z as n,A as r,B as i,m as q,E as l,G as a,D as d,K as u}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as D}from"./FSAutocompleteField-CkC_2HwE.js";import{_ as g}from"./FSIcon-CcDweDXn.js";import{_ as f}from"./FSSpan-CFY7ptgg.js";import{_ as S}from"./FSRow-a7Q-CB2x.js";import{C as U}from"./base-DT4A-z-k.js";import{S as N}from"./serviceFactory-D_XwB3_y.js";import{C as R}from"./composableFactory-C-hWj-Am.js";import{u as T}from"./useAutocomplete-B1zA08Rk.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-BeN4b608.js";import"./FSSearchField-jeRoICNJ.js";import"./FSTextField-B74kF1w3.js";import"./VField-u0S89Dh4.js";import"./useColors-Dc5IlaXx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C6UZcim6.js";import"./useSlots-CFCV5ffn.js";import"./VSpacer-DYfuYgng.js";import"./useRender-BYKEQvkC.js";import"./index-CZ5BSoIs.js";import"./transition-C9cC5SGI.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./tag--UF77zYE.js";import"./density-BwHuOjo6.js";import"./loader-CSM5nYN_.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./anchor-BesKSPix.js";import"./rounded-DApWaG-P.js";import"./VDefaultsProvider-Csp2fWeI.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-Cqu01o0F.js";import"./FSClickable-heovQq91.js";import"./FSCard-BkPZ_hGw.js";import"./css-CBTOQ7jk.js";import"./useRules-CPnS0hXd.js";import"./index-CiTrH3XV.js";import"./useTranslations-iL6K_UJW.js";import"./FSDialogMenu-C5PUkJvI.js";import"./VDialog-2WeakZzE.js";import"./VOverlay-BF976Xx6.js";import"./dimensions-DMfhR1gp.js";import"./display-Bx_HM5cm.js";import"./lazy-x4Bt57CA.js";import"./router-kbZLzbN_.js";import"./FSRadioGroup-WtcOoS_E.js";import"./FSRadio-DmnFFO-4.js";import"./VSelectionControl-DGpwRlBm.js";import"./index-C5RNyMWU.js";import"./FSToggleSet-DtdQx61u.js";import"./FSSlideGroup-DrFraIy6.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-D6hMNTPY.js";import"./group-Djmd8CaX.js";import"./FSWrapGroup-CSe3EME5.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSFadeOut-DGTrMc-E.js";import"./FSLoader-ByGG4nua.js";import"./elevation-B-xdCICl.js";import"./VSelect-CKfqyMYk.js";import"./VList-CN5BhmUX.js";import"./ssrBoot-RsCivglK.js";import"./border-mpzxDFAZ.js";import"./VImg-DJEDP7PW.js";import"./VDivider-BoOtslZm.js";import"./VMenu-D3bJ2B8V.js";import"./filter-NOSp4cax.js";import"./useAppOrganisationId-BMb45lkt.js";import"./lodash-BiW_TGGX.js";class E{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class _{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new E(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class M extends _{constructor(e){super(e),this.description=e.description}}const C=()=>`${U()}/locations`,x=o=>`${C()}/${encodeURIComponent(o)}`,z=new N("location",M).createComplete(C,x,_),G=R.getMany(z),A=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSIcon:g,FSSpan:f,FSRow:S},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:F,fetching:y,entities:p}=G(),h=I=>F({...o.locationFilters,search:I??void 0}),{toggleSet:m,init:t,onUpdate:c}=T(p,[()=>o.locationFilters],e,h),w=$(()=>t.value&&y.value);return{locations:p,toggleSet:m,loading:w,onUpdate:c}}});function K(o,e,F,y,p,h){const m=k("FSAutocompleteField");return n(),r(m,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":i(({item:t})=>[o.$props.modelValue?(n(),r(S,{key:0,align:"center-center",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,null,{default:i(()=>[l(a(t.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":i(({item:t,font:c})=>[u(S,{align:"center-left",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,{font:c},{default:i(()=>[l(a(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=B(A,[["render",K]]);A.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:V,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
