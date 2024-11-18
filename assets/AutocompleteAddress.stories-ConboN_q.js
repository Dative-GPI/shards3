import{d as O,a as T,c as U,y as D,z as N,A as R,m as $}from"./vue.esm-bundler-D3ngFwGY.js";import{_ as V}from"./lodash-BiW_TGGX.js";import{A as b}from"./address-CE2z3AEI.js";import{F as j}from"./FSAutocompleteField-B1f-d-lL.js";import{u as L}from"./useAutocomplete-BepmEoya.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-CVj0zcU5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-BNFmKU-7.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./useBreakpoints-DbdoA89o.js";import"./useSlots-BM37IFiq.js";import"./FSRow-CYD73_tT.js";import"./css-BOQ-6X_w.js";import"./useColors-B-331F-F.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSCard-BZyb3dNk.js";import"./VProgressCircular-DfVaP_TZ.js";import"./color-D4nM6Ihv.js";import"./resizeObserver-D4qCRTFx.js";import"./VIcon-DBlUULm8.js";import"./FSIcon-C0akNC9K.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./index-D1hHR51g.js";import"./transition-DtcXiLpW.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./locale-R8GaLlvb.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./form-thVqu4eJ.js";import"./loader-BvdvxiyE.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./useTranslations-Dmqoe3Kp.js";import"./VList-_wRy0k6Y.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./router-BPv_tYld.js";import"./ssrBoot-Cn3QeRqO.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./index-CZbNBjVV.js";import"./VImg-vN6S5DJZ.js";import"./FSSlideGroup-BpHGQHKq.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./FSCheckbox-BdK031Hz.js";import"./VSelectionControl-BGnnbZZk.js";import"./FSFadeOut-BBhaIaFQ.js";import"./FSLoader-BdvsvlI6.js";import"./FSRadio-C8X0kpxV.js";import"./VSelect-CU_B-7CT.js";import"./VMenu-DPuNMseR.js";import"./filter-CS3Mhwo2.js";const B=()=>{let t=!1,n,c,p;const d=async()=>{await window.initMap,n=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),p=new google.maps.places.AutocompleteSessionToken,t=!0},f=async r=>(t||await d(),g(r).then(o=>V.map(o,a=>({id:a.place_id,label:a.description}))).catch(()=>[])),u=async r=>{var a,s;t||await d();const o=await F(r.id);if(p=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new b({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((s=o.geometry.location)==null?void 0:s.lng())??0,placeId:r.id,placeLabel:r.label});throw new Error("missing informations")},i=async(r,o)=>(t||await d(),A(r,o).then(a=>{var s,l;if(a.length>0){const m=a[0];if(m.address_components&&m.formatted_address&&m.geometry)return new b({formattedAddress:m.formatted_address,locality:e(m.address_components,"locality"),country:e(m.address_components,"country"),latitude:((s=m.geometry.location)==null?void 0:s.lat())??0,longitude:((l=m.geometry.location)==null?void 0:l.lng())??0,placeId:m.place_id,placeLabel:m.formatted_address})}throw new Error("missing informations")})),g=r=>new Promise((o,a)=>{n.getPlacePredictions({input:r,sessionToken:p},function(s,l){l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),A=(r,o)=>new Promise((a,s)=>{new google.maps.Geocoder().geocode({location:{lat:r,lng:o}},(l,m)=>{m!=google.maps.GeocoderStatus.OK||!l?s(m):a(l)})}),F=r=>new Promise((o,a)=>{c.getDetails({placeId:r,sessionToken:p,fields:["formatted_address","geometry","address_components","name"]},(s,l)=>{l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),e=(r,o)=>{const a=V.find(r,s=>V.some(s.types,l=>l===o));return(a==null?void 0:a.long_name)??""};return{search:f,get:u,reverseSearch:i}},E=O({name:"FSAutocompleteAddress",components:{FSAutocompleteField:j},props:{modelValue:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(t,{emit:n}){const{search:c,get:p}=B(),d=T([]),f=U(()=>{if(t.modelValue){const e=F(t.modelValue),r=d.value.filter(o=>o.id!==e.id);return[e,...r]}return d.value}),u=async e=>e===null?Promise.resolve([]):(d.value=await c(e),Promise.resolve([])),i=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const r=await p(e);n("update:modelValue",r)},{search:g,onUpdate:A}=L(d,[],n,u,i,e=>e.id,e=>e.label,!0,!1,0,500),F=e=>({id:e.placeId,label:e.placeLabel});return{places:d,items:f,search:g,onUpdate:A}}});function K(t,n,c,p,d,f){var i;const u=D("FSAutocompleteField");return N(),R(u,$({label:t.$props.label??t.$tr("autocomplete.address.label","Address"),clearable:!1,toggleSet:!1,multiple:!1,items:t.items,modelValue:(i=t.$props.modelValue)==null?void 0:i.placeId,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":n[0]||(n[0]=g=>t.search=g)},t.$attrs),null,16,["label","items","modelValue","onUpdate:modelValue","search"])}const h=q(E,[["render",K]]);E.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const mo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:h,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},y={args:{modelValue:new b({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},S={args:{modelValue:null},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var v,w,_;y.parameters={...y.parameters,docs:{...(v=y.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    modelValue: new Address({
      placeId: "ChIJg7vu-43P9EcRRNrbyDxFMDY",
      placeLabel: 'Dative, Rue de Norvège, Colombier-Saugnieu, France',
      formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
      locality: 'Colombier-Saugnieu',
      country: 'France',
      latitude: 45.711741,
      longitude: 5.071675
    })
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
        args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(_=(w=y.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var C,P,I;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    modelValue: null
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
        args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>\`
  })
}`,...(I=(P=S.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const po=["Default","VariationEmpty"];export{y as Default,S as VariationEmpty,po as __namedExportsOrder,mo as default};
