import{d as b,b as S,o as C,w as V,y as P,z as k,A as I,m as N}from"./vue.esm-bundler-DC82FEWN.js";import{_ as A}from"./lodash-BiW_TGGX.js";import{A as _}from"./address-CE2z3AEI.js";import{F as R}from"./FSAutocompleteField-9Z77q9u9.js";import{u as T}from"./useAutocomplete-CCZg0XDc.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as E}from"./FSCol-B7HQy3FB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-B1cVTZp_.js";import"./FSTextField-BVT64V1F.js";import"./VField-CQBU8LtE.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSRow-DoCXWKDP.js";import"./css-DYOPUjjE.js";import"./useColors-WxHDk9aB.js";import"./index-3zl-tJp_.js";import"./theme-CDGAP9oX.js";import"./VSpacer-CMZ7Jymr.js";import"./color-BhlhQtQT.js";import"./index-DWl9tX7E.js";import"./transition-CJbyFvkq.js";import"./VLabel-Cp9LN_v7.js";import"./VInput-BvcCh06W.js";import"./locale-BC9z6YbT.js";import"./VIcon-uFUcYN4x.js";import"./density-XYshZx8z.js";import"./proxiedModel-CYw7-KgF.js";import"./loader-CTRePS7y.js";import"./VProgressCircular-D8KFt_en.js";import"./anchor-CLTIcUx3.js";import"./rounded-TFXDyxjJ.js";import"./VDefaultsProvider-CTE9NJfn.js";import"./forwardRefs-DWGaNmQL.js";import"./FSButton-cgjePGb6.js";import"./FSClickable-CvEctr0N.js";import"./FSCard-TPuCZi-6.js";import"./FSIcon-CqTsM4Lx.js";import"./useRules-DS9e5-1Q.js";import"./index-yKNzK_fJ.js";import"./useTranslations-DV-taHAL.js";import"./FSDialogMenu-L2iVIZdg.js";import"./VDialog-B-ihhCeR.js";import"./VOverlay-HCh9BhQb.js";import"./dimensions-fR777bfb.js";import"./display-D6hZonHv.js";import"./lazy-e3yj3TcL.js";import"./router-CRaPYJ7n.js";import"./FSRadioGroup-CCDraVhx.js";import"./FSRadio-C2a3p5gK.js";import"./VSelectionControl-DLPOArCM.js";import"./index-ySUbTvsm.js";import"./FSToggleSet-OAzwv8eZ.js";import"./FSSlideGroup-_2N_53q2.js";import"./uuid-DTaye2KM.js";import"./VSlideGroup-CcTYsOIU.js";import"./group-DaluXt-5.js";import"./FSWrapGroup-CBQCrLfv.js";import"./FSCheckbox-Bb9obVvl.js";import"./FSFadeOut-DOYA3BXE.js";import"./FSLoader-Bx7UBqYr.js";import"./elevation-BoGrGvdU.js";import"./VSelect-BFSoAAL8.js";import"./VList-D_XNZRf5.js";import"./ssrBoot-D90vJCps.js";import"./border-Csacwza1.js";import"./VImg-BLQ7D_3g.js";import"./VDivider-xUYR78_z.js";import"./VMenu-Dhrs_Dg2.js";import"./filter-DSaKTciw.js";const U=()=>{let o=!1,n,p,a;const l=async()=>{await window.initMap,n=new google.maps.places.AutocompleteService,p=new google.maps.places.PlacesService(document.getElementById("places")),a=new google.maps.places.AutocompleteSessionToken,o=!0},m=async t=>(o||await l(),c(t).then(e=>A.map(e,r=>({id:r.place_id,label:r.description}))).catch(()=>[])),d=async t=>{var r,s;o||await l();const e=await f(t.id);if(a=new google.maps.places.AutocompleteSessionToken,e.address_components&&e.formatted_address&&e.geometry)return new _({formattedAddress:e.formatted_address,locality:u(e.address_components,"locality"),country:u(e.address_components,"country"),latitude:((r=e.geometry.location)==null?void 0:r.lat())??0,longitude:((s=e.geometry.location)==null?void 0:s.lng())??0,placeId:t.id,placeLabel:t.label});throw new Error("missing informations")},c=t=>new Promise((e,r)=>{n.getPlacePredictions({input:t,sessionToken:a},function(s,i){i!=google.maps.places.PlacesServiceStatus.OK||!s?r(i):e(s)})}),f=t=>new Promise((e,r)=>{p.getDetails({placeId:t,sessionToken:a,fields:["formatted_address","geometry","address_components","name"]},(s,i)=>{i!=google.maps.places.PlacesServiceStatus.OK||!s?r(i):e(s)})}),u=(t,e)=>{const r=A.find(t,s=>A.some(s.types,i=>i===e));return r&&r.long_name||""};return{search:m,get:d}},h=b({name:"FSAutocompleteAddress",components:{FSAutocompleteField:R},props:{modelValue:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(o,{emit:n}){const{search:p,get:a}=U(),l=S([]),m=S(null),d=async e=>e===null?Promise.resolve([]):(l.value=await p(e),Promise.resolve([])),c=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const r=await a(e);n("update:modelValue",r)},{search:f,onUpdate:u}=T(l,[],n,d,c,e=>e.id,e=>e.label,!0,!1),t=e=>({id:e.placeId,label:e.placeLabel});return C(()=>{o.modelValue&&(m.value=t(o.modelValue))}),V(()=>o.modelValue,e=>{e&&(m.value=t(e))}),{modelValuePlace:m,places:l,search:f,onUpdate:u}}});function O(o,n,p,a,l,m){const d=P("FSAutocompleteField");return k(),I(d,N({clearable:!1,toggleSet:!1,multiple:!1,items:o.places,modelValue:o.modelValuePlace,"onUpdate:modelValue":o.onUpdate,search:o.search,"onUpdate:search":n[0]||(n[0]=c=>o.search=c)},o.$attrs),null,16,["items","modelValue","onUpdate:modelValue","search"])}const w=D(h,[["render",O]]);h.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Function as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const Ze={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:w,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},g={args:{args:{value1:null,value2:new _({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})}},render:(o,{argTypes:n})=>({components:{FSAutocompleteAddress:w,FSCol:E},props:Object.keys(n),setup(){return{...o}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.value1"
      />
      <FSAutocompleteAddress
        v-model="args.value2"
      />
    </FSCol>`})};var F,y,v;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: new Address({
        placeId: "ChIJg7vu-43P9EcRRNrbyDxFMDY",
        placeLabel: 'Dative, Rue de Norvège, Colombier-Saugnieu, France',
        formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
        locality: 'Colombier-Saugnieu',
        country: 'France',
        latitude: 45.711741,
        longitude: 5.071675
      })
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteAddress,
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
      <FSAutocompleteAddress
        v-model="args.value1"
      />
      <FSAutocompleteAddress
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(v=(y=g.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const eo=["Variations"];export{g as Variations,eo as __namedExportsOrder,Ze as default};
