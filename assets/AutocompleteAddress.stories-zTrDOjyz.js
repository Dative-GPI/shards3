import{d as O,b as T,c as U,A as D,B as N,j as R,I as $}from"./vue.esm-bundler-0BaZj8Cy.js";import{_ as V}from"./lodash-BrWYvtk2.js";import{A as b}from"./address-CE2z3AEI.js";import{F as j}from"./FSAutocompleteField-DJKWDuqJ.js";import{u as L}from"./useAutocomplete-BnDWNIS6.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-D35grUmj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSSearchField-Co9Aacuk.js";import"./FSTextField-B8oyUUoT.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./useBreakpoints-2HHUcVIh.js";import"./useSlots-16D6Zf08.js";import"./FSRow-CAJM3FZ0.js";import"./css-Bhvr2onI.js";import"./useColors-SBQj5l4a.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./FSButton-BDSx2V0J.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSCard-Dlw97Dqr.js";import"./VProgressCircular-NnNXhC5D.js";import"./color-v9Utm2wX.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSIcon-BwW5Hq8i.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./index-A-BnjIhl.js";import"./transition-CCJeTa-A.js";import"./VLabel-B8m3kRrJ.js";import"./VInput-Dz3e_hzB.js";import"./locale-CUGdfosF.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./proxiedModel-gKZvE0id.js";import"./form-BxXGwYee.js";import"./loader-BfrQsM5c.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./useTranslations-DJOHKWsD.js";import"./VList-CxEWDEvR.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./router-DTj21Dkp.js";import"./ssrBoot-YHUJVgIR.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./index-C_NEyI9V.js";import"./VImg-CiDZbmGb.js";import"./FSSlideGroup-BR84Lg3c.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./FSCheckbox-BCFluEqr.js";import"./VSelectionControl-DanrcpVZ.js";import"./FSFadeOut-BkUNDWQN.js";import"./FSLoader-CljC1u5C.js";import"./FSRadio-Bhs3uxAr.js";import"./VSelect-Bv6U_6V_.js";import"./VMenu-664v_26-.js";import"./filter-BsWs0jz4.js";const B=()=>{let t=!1,n,c,p;const d=async()=>{await window.initMap,n=new google.maps.places.AutocompleteService,c=new google.maps.places.PlacesService(document.getElementById("places")),p=new google.maps.places.AutocompleteSessionToken,t=!0},f=async r=>(t||await d(),g(r).then(o=>V.map(o,a=>({id:a.place_id,label:a.description}))).catch(()=>[])),u=async r=>{var a,s;t||await d();const o=await F(r.id);if(p=new google.maps.places.AutocompleteSessionToken,o.address_components&&o.formatted_address&&o.geometry)return new b({formattedAddress:o.formatted_address,locality:e(o.address_components,"locality"),country:e(o.address_components,"country"),latitude:((a=o.geometry.location)==null?void 0:a.lat())??0,longitude:((s=o.geometry.location)==null?void 0:s.lng())??0,placeId:r.id,placeLabel:r.label});throw new Error("missing informations")},i=async(r,o)=>(t||await d(),A(r,o).then(a=>{var s,l;if(a.length>0){const m=a[0];if(m.address_components&&m.formatted_address&&m.geometry)return new b({formattedAddress:m.formatted_address,locality:e(m.address_components,"locality"),country:e(m.address_components,"country"),latitude:((s=m.geometry.location)==null?void 0:s.lat())??0,longitude:((l=m.geometry.location)==null?void 0:l.lng())??0,placeId:m.place_id,placeLabel:m.formatted_address})}throw new Error("missing informations")})),g=r=>new Promise((o,a)=>{n.getPlacePredictions({input:r,sessionToken:p},function(s,l){l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),A=(r,o)=>new Promise((a,s)=>{new google.maps.Geocoder().geocode({location:{lat:r,lng:o}},(l,m)=>{m!=google.maps.GeocoderStatus.OK||!l?s(m):a(l)})}),F=r=>new Promise((o,a)=>{c.getDetails({placeId:r,sessionToken:p,fields:["formatted_address","geometry","address_components","name"]},(s,l)=>{l!=google.maps.places.PlacesServiceStatus.OK||!s?a(l):o(s)})}),e=(r,o)=>{const a=V.find(r,s=>V.some(s.types,l=>l===o));return(a==null?void 0:a.long_name)??""};return{search:f,get:u,reverseSearch:i}},E=O({name:"FSAutocompleteAddress",components:{FSAutocompleteField:j},props:{modelValue:{type:Object,required:!1,default:null},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(t,{emit:n}){const{search:c,get:p}=B(),d=T([]),f=U(()=>{if(t.modelValue){const e=F(t.modelValue),r=d.value.filter(o=>o.id!==e.id);return[e,...r]}return d.value}),u=async e=>e===null?Promise.resolve([]):(d.value=await c(e),Promise.resolve([])),i=async e=>{if(e===null){n("update:modelValue",null);return}Array.isArray(e)&&(e=e[0]);const r=await p(e);n("update:modelValue",r)},{search:g,onUpdate:A}=L(d,[],n,u,i,e=>e.id,e=>e.label,!0,!1,0,500),F=e=>({id:e.placeId,label:e.placeLabel});return{places:d,items:f,search:g,onUpdate:A}}});function K(t,n,c,p,d,f){var i;const u=D("FSAutocompleteField");return $(),N(u,R({label:t.$props.label??t.$tr("ui.common.address","Address"),clearable:!1,toggleSet:!1,multiple:!1,items:t.items,modelValue:(i=t.$props.modelValue)==null?void 0:i.placeId,"onUpdate:modelValue":t.onUpdate,search:t.search,"onUpdate:search":n[0]||(n[0]=g=>t.search=g)},t.$attrs),null,16,["label","items","modelValue","onUpdate:modelValue","search"])}const h=q(E,[["render",K]]);E.__docgenInfo={displayName:"FSAutocompleteAddress",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"Object as () => Address | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue"]};const mo={title:"Foundation/Shared/Autocompletes/AutocompleteAddress",component:h,tags:["autodocs"],argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},S={args:{modelValue:new b({placeId:"ChIJg7vu-43P9EcRRNrbyDxFMDY",placeLabel:"Dative, Rue de Norvège, Colombier-Saugnieu, France",formattedAddress:" 100 Rue de Norvège, 69125 Colombier-Saugnieu",locality:"Colombier-Saugnieu",country:"France",latitude:45.711741,longitude:5.071675})},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})},y={args:{modelValue:null},render:(t,{argTypes:n})=>({components:{FSAutocompleteAddress:h,FSCol:k},props:Object.keys(n),setup(){return{args:t}},template:`
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`})};var v,w,_;S.parameters={...S.parameters,docs:{...(v=S.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(_=(w=S.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var C,P,I;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(P=y.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};const po=["Default","VariationEmpty"];export{S as Default,y as VariationEmpty,po as __namedExportsOrder,mo as default};
