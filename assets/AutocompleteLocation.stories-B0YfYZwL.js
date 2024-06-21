import{d as O,c as $,y as k,z as n,A as r,B as i,m as q,E as l,G as a,D as d,K as u}from"./vue.esm-bundler-CLWyqtrq.js";import{F as D}from"./FSAutocompleteField-CBMRbw7S.js";import{_ as g}from"./FSIcon-izOGFbD4.js";import{_ as f}from"./FSSpan-C4Iz3qX9.js";import{_ as S}from"./FSRow-B7tdsi71.js";import{C as U}from"./base-DgvHU1oF.js";import{S as N}from"./serviceFactory-D_XwB3_y.js";import{C as R}from"./composableFactory-BGJVwV03.js";import{u as T}from"./useAutocomplete-BeehL9JX.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./FSCol-B1LPjIXg.js";import"./FSSearchField-CyiK-fBt.js";import"./FSTextField-Cpjd0lxC.js";import"./VField-B0dByqhd.js";import"./useColors-DMaqBg9s.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-bwyTeVCn.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./useRender-BBsw_RbX.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./density-BAQxqMxc.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-DbngaExr.js";import"./FSClickable-Dnaq4X0T.js";import"./FSCard-Dfczzv61.js";import"./css-Ca-HPGcF.js";import"./useRules-D8GiojYJ.js";import"./index-C8D2gGUS.js";import"./useTranslations-BiPIEqtB.js";import"./FSDialogMenu-DffTLyCO.js";import"./VDialog-CeEdJB8x.js";import"./VOverlay-DzJttMyd.js";import"./dimensions-CApMEhqN.js";import"./display-ClZIxUPC.js";import"./lazy-BKgvycCZ.js";import"./router-Bm0MCij7.js";import"./FSRadioGroup-6Hwvke6j.js";import"./FSRadio-D23gGN9m.js";import"./VSelectionControl-CFm2WUhz.js";import"./index-CgBlQs6Z.js";import"./FSToggleSet-yPQt1erB.js";import"./FSSlideGroup-CSlKWrVH.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-Bfe_5BeH.js";import"./group-BZx0j_nI.js";import"./FSWrapGroup-BQRnjhhS.js";import"./FSCheckbox-C54-5tE9.js";import"./FSFadeOut-BbZkfEUD.js";import"./FSLoader-CqH2SEvS.js";import"./elevation-CB-eCL4u.js";import"./VSelect-C0gJvLlB.js";import"./VList-COAYh1Wj.js";import"./ssrBoot-pwfi9K1z.js";import"./border-Bs-XyEFQ.js";import"./VImg-CU4XwkhE.js";import"./VDivider-bKfGyljG.js";import"./VMenu-CBjAwdlw.js";import"./filter-IREZNmJK.js";import"./useAppOrganisationId-B5BDd-xv.js";import"./lodash-BiW_TGGX.js";class E{constructor(e){this.placeId=e.placeId,this.placeLabel=e.placeLabel,this.formattedAddress=e.formattedAddress,this.locality=e.locality,this.country=e.country,this.latitude=e.latitude,this.longitude=e.longitude}}class _{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags.slice(),this.address=new E(e.address),this.modelsIds=e.modelsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.deviceOrganisationsCount=e.deviceOrganisationsCount}}class M extends _{constructor(e){super(e),this.description=e.description}}const C=()=>`${U()}/locations`,x=o=>`${C()}/${encodeURIComponent(o)}`,z=new N("location",M).createComplete(C,x,_),G=R.getMany(z),A=O({name:"FSAutocompleteLocation",components:{FSAutocompleteField:D,FSIcon:g,FSSpan:f,FSRow:S},props:{locationFilters:{type:Object,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},toggleSetDisabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const{getMany:F,fetching:y,entities:p}=G(),h=I=>F({...o.locationFilters,search:I??void 0}),{toggleSet:m,init:t,onUpdate:c}=T(p,[()=>o.locationFilters],e,h),w=$(()=>t.value&&y.value);return{locations:p,toggleSet:m,loading:w,onUpdate:c}}});function K(o,e,F,y,p,h){const m=k("FSAutocompleteField");return n(),r(m,q({toggleSet:!o.$props.toggleSetDisabled&&o.toggleSet,multiple:o.$props.multiple,loading:o.loading,items:o.locations,modelValue:o.$props.modelValue,"onUpdate:modelValue":o.onUpdate},o.$attrs),{"autocomplete-selection":i(({item:t})=>[o.$props.modelValue?(n(),r(S,{key:0,align:"center-center",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,null,{default:i(()=>[l(a(t.raw.label),1)]),_:2},1024)]),_:2},1024)):d("",!0)]),"item-label":i(({item:t,font:c})=>[u(S,{align:"center-left",wrap:!1},{default:i(()=>[t.raw.icon?(n(),r(g,{key:0},{default:i(()=>[l(a(t.raw.icon),1)]),_:2},1024)):d("",!0),u(f,{font:c},{default:i(()=>[l(a(t.raw.label),1)]),_:2},1032,["font"])]),_:2},1024)]),_:1},16,["toggleSet","multiple","loading","items","modelValue","onUpdate:modelValue"])}const V=B(A,[["render",K]]);A.__docgenInfo={displayName:"FSAutocompleteLocation",exportName:"default",description:"",tags:{},props:[{name:"locationFilters",type:{name:"LocationFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"toggleSetDisabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/autocompletes/FSAutocompleteLocation.vue"]};const fo={title:"Foundation/Core/Autocompletes/AutocompleteLocation",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{value1:null,value2:"1"}},render:(o,{argTypes:e})=>({components:{FSAutocompleteLocation:V,FSCol:j},props:Object.keys(e),setup(){return{...o}},template:`
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
