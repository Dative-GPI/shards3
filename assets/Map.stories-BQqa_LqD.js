import{d as D,c as O,y as F,z as c,A as h,B as y,m as ne,L as g,E as Me,G as $e,b as v,C as E,F as B,N as U,o as R,V as le,D as L,X,a2 as J,W as re,O as we,I,i as A,w as q,p as W,a8 as ke}from"./vue.esm-bundler-BSyvBTC9.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as Ie}from"./FSClickable-DVS7KdyM.js";import{_ as se}from"./FSSpan-CCGpb4KF.js";import{_ as C}from"./FSRow-CVY2l52N.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSButton-BVWlNylM.js";import{F as Ce}from"./FSDialog-CC_LWwUc.js";import{F as ie}from"./FSCard-DAS46KTX.js";import{_ as k}from"./FSCol-YmDykHL-.js";import{u as ue}from"./css-DLfrm0pR.js";import{b as qe}from"./VOverlay-CLFcrAVK.js";import{u as j,C as Z}from"./useColors-B5ivMAr9.js";import{u as Ae}from"./useTranslations-CdSqQFV3.js";import{F as Ve}from"./FSFadeOut-I9nnIcBb.js";import{F as Oe}from"./FSDialogMultiForm-D0IEeAFI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./tag-DB5D_XjQ.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-DHDofKUo.js";import"./VIcon-BIpY_noq.js";import"./FSText-8i4Fp1Ld.js";import"./VSpacer-C4plVoTE.js";import"./VDialog-BkP6MFQ7.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Bq4wip6p.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./index-_Z9wfsFC.js";import"./uuid-DTaye2KM.js";import"./FSForm-CVvlYXog.js";import"./form-B61Sg6X-.js";import"./FSWindow-BMzav7Sc.js";import"./group-CBCTR8u6.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./density-CDPzHPmZ.js";import"./elevation-Ben4zuE4.js";import"./rounded-Dg8mz8II.js";import"./loader-pPiux2KM.js";import"./index-DPxysH4G.js";import"./ssrBoot-SGvAq9J5.js";const Ee=(e,a)=>`
  <div style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,Be=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,Ge=()=>'<div class="fs-map-mylocation-pin" />',_e=e=>`<div style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`,de=D({name:"FSImageCard",components:{FSClickable:Ie,FSSpan:se,FSRow:C},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:O(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function Re(e,a,t,o,l,n){const m=F("FSClickable");return c(),h(m,ne({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[g(C,{align:"bottom-left",height:"fill"},{default:y(()=>[g(C,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[g(se,{font:"text-overline"},{default:y(()=>[Me($e(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const ze=$(de,[["render",Re]]);de.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const pe=D({name:"FSMapLayerButton",components:{FSImageCard:ze,FSButton:M,FSDialog:Ce,FSRow:C},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const t=v(!1);return{dialog:t,onLayerClick:l=>{a("update:modelValue",l),t.value=!1}}}});function xe(e,a,t,o,l,n){const m=F("FSImageCard"),p=F("FSDialog");return c(),E(B,null,[g(M,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=u=>e.dialog=!0)}),g(p,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=u=>e.dialog=u),width:"500px",title:e.$tr("ui.map.select-layer","Select layer")},{body:y(()=>[g(C,{align:"center-center",padding:"0 16px 0 0"},{default:y(()=>[(c(!0),E(B,null,U(e.layers,u=>(c(),h(m,{variant:e.modelValue===u.name?"full":"background",color:e.modelValue===u.name?"primary":"light",label:u.label,src:u.image,key:u.name,onClick:d=>e.onLayerClick(u.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const Ne=$(pe,[["render",xe]]);pe.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const me=D({name:"FSMapOverlay",props:{mode:{type:String,required:!1,default:"collapse"}},components:{FSButton:M,FSCard:ie,FSCol:k,FSRow:C},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:t}=ue(),o=v(null),l=v(null),n=v(null),m=v(null);return R(()=>{n.value=new ResizeObserver(p=>{p.forEach(u=>{a("update:height",u.contentRect.height)})}),m.value=new ResizeObserver(p=>{p.forEach(u=>{a("update:width",u.contentRect.width)})}),o.value&&n.value.observe(o.value),l.value&&m.value.observe(l.value.$el)}),le(()=>{n.value&&n.value.disconnect(),m.value&&m.value.disconnect()}),{isExtraSmall:t,mobileOverlayWrapper:o,desktopOverlay:l}}});function Te(e,a,t,o,l,n){const m=F("FSCard");return c(),E(B,null,[e.isExtraSmall?(c(),h(qe,{key:0,modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=p=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"])):L("",!0),X(re("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:we({height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"50%":"20px"})},[g(m,{width:"100%",height:"100%",elevation:!0,border:!1},{default:y(()=>[g(k,{height:"100%",gap:"0px"},{default:y(()=>[g(C,{align:"center-center",onTouchstart:a[2]||(a[2]=p=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},{default:y(()=>[g(M,{variant:"icon",icon:e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up",onClick:a[1]||(a[1]=p=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},null,8,["icon"])]),_:1}),e.$props.mode!=="collapse"?(c(),h(k,{key:0,height:"fill",style:{"min-height":"0"}},{default:y(()=>[I(e.$slots,"body")]),_:3})):L("",!0)]),_:3})]),_:3})],4),[[J,e.isExtraSmall]]),X(g(m,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[g(k,{height:"fill"},{default:y(()=>[I(e.$slots,"body")]),_:3})]),_:3},512),[[J,!e.isExtraSmall]])],64)}const Ze=$(me,[["render",Te]]);me.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const Pe="featureGroup",z="map",De="markerClusterGroup",ce={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1}},emits:["click"],setup(e,{emit:a}){const t=A(z),o=A(De,v(null)),{getColors:l}=j(),n=v(null);if(!t)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!t.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!t.value||!e.latlng)return;n.value&&(o&&o.value?o.value.removeLayer(n.value):t.value.removeLayer(n.value));let p=null;e.variant==="gps"?p=f.divIcon({html:Ge(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon?p=f.divIcon({html:Ee(e.icon,l(e.color).base),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]}):p=f.divIcon({html:_e(l(e.color).base),iconSize:[20,20],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[20/2,20/2]}),n.value=f.marker(e.latlng,{icon:p}),n.value.on("click",u=>{a("click",u)}),o&&o.value?n.value.addTo(o.value):n.value.addTo(t.value)};R(m),q(()=>[e.variant,e.color,e.latlng,e.selected],m)}};function He(e,a,t,o,l,n){return I(e.$slots,"default")}const Ue=$(ce,[["render",He]]);ce.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const fe={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=A(z),t=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const o=()=>{!e.layer||!a.value||(t&&a.value.removeLayer(t),e.layer.addTo(a.value))};R(o),q(()=>e.layer,o)}};function We(e,a,t,o,l,n){return I(e.$slots,"default")}const je=$(fe,[["render",We]]);fe.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const ye={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const t=A(z);let o=!1;if(!t)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!t.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const l=v(new f.FeatureGroup);W("featureGroup",l),l.value.on("layeradd",()=>{if(!t.value)return;l.value.getLayers().length===e.expectedLayers&&!o&&(l.value.addTo(t.value),o=!0,a("update:bounds",l.value.getBounds()))})}};function Ke(e,a,t,o,l,n){return I(e.$slots,"default")}const Qe=$(ye,[["render",Ke]]);ye.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const ve={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const t=A(z);let o=!1;if(!t)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!t.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const l=v(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(n){return f.divIcon({html:Be(n.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));W("markerClusterGroup",l),l.value.on("layeradd",()=>{if(!t.value)return;l.value.getLayers().length===e.expectedLayers&&!o&&(l.value.addTo(t.value),o=!0,a("update:bounds",l.value.getBounds()))})}};function Ye(e,a,t,o,l,n){return I(e.$slots,"default")}const Xe=$(ve,[["render",Ye]]);ve.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const ge={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const t=A(z),o=A(Pe,v(null)),{getColors:l}=j(),n=v(null);if(!t)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!t.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!t.value||!e.latlngs)return;n.value&&(o&&o.value?o.value.removeLayer(n.value):t.value.removeLayer(n.value));const p=l(e.color).base;n.value=f.polygon(e.latlngs.map(u=>[u.lat,u.lng]),{color:p,fillColor:p+"50",fillOpacity:.5,className:"fs-map-area"}),n.value.on("click",u=>{a("click",u)}),o&&o.value?n.value.addTo(o.value):n.value.addTo(t.value)};R(m),q(()=>[e.color,e.latlngs],m)}};function Je(e,a,t,o,l,n){return I(e.$slots,"default")}const ea=$(ge,[["render",Je]]);ge.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var ee={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const he=D({name:"FSMap",components:{FSMapMarker:Ue,FSMapTileLayer:je,FSMapFeatureGroup:Qe,FSMapMarkerClusterGroup:Xe,FSMapPolygon:ea,FSMapLayerButton:Ne,FSMapOverlay:Ze,FSButton:M,FSCard:ie,FSCol:k},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:t}=Ae(),{getColors:o}=j(),{isExtraSmall:l}=ue(),n=v(),m=v(),p=v(),u=v(null),d=v(null),G=v(),_=v();W("map",d);const w=16,x=new ResizeObserver(()=>{d.value&&d.value.invalidateSize()}),V=[{name:"map",label:t("ui.map.layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${ee.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:t("ui.map.layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${ee.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],s=O(()=>e.overlayMode!=="expand"&&G.value&&l.value?G.value:0),b=O(()=>_.value&&!l.value?_.value:0),Fe=O(()=>({"--fs-map-location-pin-color":o(Z.Primary).base,"--fs-map-mylocation-pin-color":o(Z.Primary).base,"--fs-map-mylocation-pin-color-alpha":o(Z.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${s.value}px`})),Le=O(()=>{var i;return((i=V.find(r=>r.name===e.currentLayer))==null?void 0:i.layer)??V[0].layer}),be=O(()=>{if(!m.value&&!p.value)return null;let i=m.value;return i&&p.value?i.extend(p.value):p.value&&(i=p.value),i}),N=(i,r)=>{if(!d.value)return i;r=r??d.value.getZoom();const S=d.value.project(i,r).subtract([b.value/2,-s.value/2]);return d.value.unproject(S,r)},K=(i,r,S=w)=>{d.value&&d.value.flyTo(N(f.latLng(i,r),S),S)},Q=(i,r,S)=>{d.value&&d.value.setView(N(f.latLng(i,r)),S)},Y=(i,r)=>{if(!d.value)return;const S=new f.LatLngBounds(N(i.getSouthWest()),N(i.getNorthEast()));d.value.fitBounds(S,r)};return R(()=>{if(!n.value)return;const i={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1};d.value=ke(f.map(n.value,i)),Q(e.center[0],e.center[1],w),d.value.on("click",r=>{a("click:latlng",r.latlng)}),d.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(d.value),d.value.on("locationfound",r=>{r.latlng&&(u.value=r.latlng,d.value&&K(r.latlng.lat,r.latlng.lng))}),x.observe(n.value)}),le(()=>{x.disconnect()}),q(()=>e.center,i=>{d.value&&Q(i[0],i[1],w)}),q(()=>e.selectedLocationId,i=>{if(!d.value)return;const r=e.locations.find(S=>S.id===i);r&&K(r==null?void 0:r.address.latitude,r==null?void 0:r.address.longitude)},{immediate:!0}),q(()=>e.selectedAreaId,i=>{if(!d.value)return;const r=e.areas.find(T=>T.id===i);if(!r)return;const S=f.latLngBounds(r.coordinates.map(T=>f.latLng(T.latitude,T.longitude)));Y(S)},{immediate:!0}),q(()=>be.value,i=>{!d.value||!i||Y(i,{maxZoom:w})}),{ColorEnum:Z,defaultZoom:w,leafletContainer:n,locationGroupBounds:m,overlayHeight:G,overlayWidth:_,areaGroupBounds:p,map:d,actualLayer:Le,mapLayers:V,gpsPosition:u,style:Fe}}}),aa={ref:"leafletContainer",class:"fs-leaflet-container"};function ta(e,a,t,o,l,n){const m=F("FSMapTileLayer"),p=F("FSMapMarker"),u=F("FSMapPolygon"),d=F("FSMapFeatureGroup"),G=F("FSMapMarkerClusterGroup"),_=F("FSMapLayerButton"),w=F("FSCard"),x=F("FSMapOverlay");return c(),h(w,ne({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var V;return[re("div",aa,[e.map?(c(),E(B,{key:0},[g(m,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(c(),h(p,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):L("",!0),e.$props.areas?(c(),h(d,{key:1,"expected-layers":e.$props.areas.length,"onUpdate:bounds":a[0]||(a[0]=s=>e.areaGroupBounds=s)},{default:y(()=>[(c(!0),E(B,null,U(e.areas,s=>(c(),h(u,{key:s.id,color:s.color,latlngs:s.coordinates.map(b=>({lat:b.latitude,lng:b.longitude})),onClick:b=>e.$emit("update:selectedAreaId",s.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):L("",!0),e.$props.locations?(c(),h(G,{key:2,"expected-layers":e.$props.locations.length,disableClusteringAtZoom:e.defaultZoom,"onUpdate:bounds":a[1]||(a[1]=s=>e.locationGroupBounds=s)},{default:y(()=>[(c(!0),E(B,null,U(e.$props.locations,s=>(c(),h(p,{selected:s.id===e.$props.selectedLocationId,key:s.id,color:s.color,icon:s.icon,latlng:{lat:s.address.latitude,lng:s.address.longitude},onClick:b=>e.$emit("update:selectedLocationId",s.id)},null,8,["selected","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers","disableClusteringAtZoom"])):L("",!0)],64)):L("",!0)],512),(V=e.$props.allowedLayers)!=null&&V.length&&e.$props.allowedLayers.length>1?(c(),h(_,{key:0,layers:e.mapLayers.filter(s=>{var b;return((b=e.$props.allowedLayers)==null?void 0:b.includes(s.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[2]||(a[2]=s=>e.$emit("update:currentLayer",s))},null,8,["layers","modelValue"])):L("",!0),e.map?(c(),h(k,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(c(),h(M,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[3]||(a[3]=()=>e.map.locate())})):L("",!0),e.$props.showZoomButtons?(c(),h(w,{key:1,elevation:!0},{default:y(()=>[g(k,{gap:"0"},{default:y(()=>[g(M,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[4]||(a[4]=()=>e.map.zoomIn()),border:!1}),g(M,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[5]||(a[5]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):L("",!0)]),_:1})):L("",!0),e.$slots.overlay?(c(),h(x,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[6]||(a[6]=s=>e.$emit("update:overlayMode",s)),"onUpdate:height":a[7]||(a[7]=s=>e.overlayHeight=s),"onUpdate:width":a[8]||(a[8]=s=>e.overlayWidth=s)},{body:y(()=>[I(e.$slots,"overlay")]),_:3},8,["mode"])):L("",!0)]}),_:3},16,["width","height","style"])}const Se=$(he,[["render",ta]]);he.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"overlay"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const nt={title:"Foundation/Shared/Map",component:Se,tags:["autodocs"]},H={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",icon:"mdi-factory",color:"primary",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"}},oa={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},na={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},la={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},ra={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},P={args:{args:{locations1:[{...H}],locations2:[{...H}],locations3:[{...na},{...oa},{...la}],selectedLocationId1:H.id,selectedLocationId2:null,selectedLocationId3:null,selectedAreaId1:null,selectedAreaId2:null,overlayMode1:"collapse",overlayMode2:"half",currentLayer1:"map",currentLayer2:"imagery",areas1:[ra],showDialog:!1}},render:(e,{argTypes:a})=>({components:{FSMap:Se,FSRow:C,FSCol:k,FSFadeOut:Ve,FSButton:M,FSDialogMultiForm:Oe},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap
        v-model:overlayMode="args.overlayMode1"
        v-model:currentLayer="args.currentLayer1"
        v-model:selectedLocationId="args.selectedLocationId1"
        v-model:selectedAreaId="args.selectedAreaId1"
        :locations="args.locations3"
      >
        <template v-slot:overlay >
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
        </template>
      </FSMap>
      <FSMap
        :editable="false"
        :locations="args.locations3"
        :enableScrollWheelZoom="true"
        v-model:overlayMode="args.overlayMode2"
        v-model:currentLayer="args.currentLayer2"
        height="600px"
        v-model:selectedLocationId="args.selectedLocationId3"
        v-model:selectedAreaId="args.selectedAreaId2"
        :areas="args.areas1"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
                <div style="padding:8px;boredr-radius:4px; display: flex; flex-direction: column; gap: 10px;">
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                </div>
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
      <FSMap
        :editable="true"
        :locations="args.locations1"
        height="600px"
        :border="false"
        v-model:selectedLocationId="args.selectedLocationId1"
      />
      
      <FSMap
        :editable="false"
        :locations="args.locations2"
        height="300px"
        width="300px"
        :selectableLayers="['osm']"
        :grayscale="true"
        :showMyLocation="false"
        :showZoomButtons="false"
        :selectedLocationId="args.selectedLocationId2"
      />

      <FSDialogMultiForm
        width="800px"
        :steps="2"
        :title="$tr('ui.location.edit', 'Edit location')"
        v-model="args.showDialog"
      >
        <template
          #step-2
        >
          <FSMap />
        </template>
      </FSDialogMultiForm>
      <FSButton
        label="Open dialog with map"
        @click="() => args.showDialog = true"
      />
    </div>`})};var ae,te,oe;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    args: {
      locations1: [{
        ...location1
      }],
      locations2: [{
        ...location1
      }],
      locations3: [{
        ...location3
      }, {
        ...location2
      }, {
        ...location4
      }],
      selectedLocationId1: location1.id,
      selectedLocationId2: null,
      selectedLocationId3: null,
      selectedAreaId1: null,
      selectedAreaId2: null,
      overlayMode1: 'collapse',
      overlayMode2: 'half',
      currentLayer1: 'map',
      currentLayer2: 'imagery',
      areas1: [area1],
      showDialog: false
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMap,
      FSRow,
      FSCol,
      FSFadeOut,
      FSButton,
      FSDialogMultiForm
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSMap
        v-model:overlayMode="args.overlayMode1"
        v-model:currentLayer="args.currentLayer1"
        v-model:selectedLocationId="args.selectedLocationId1"
        v-model:selectedAreaId="args.selectedAreaId1"
        :locations="args.locations3"
      >
        <template v-slot:overlay >
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
        </template>
      </FSMap>
      <FSMap
        :editable="false"
        :locations="args.locations3"
        :enableScrollWheelZoom="true"
        v-model:overlayMode="args.overlayMode2"
        v-model:currentLayer="args.currentLayer2"
        height="600px"
        v-model:selectedLocationId="args.selectedLocationId3"
        v-model:selectedAreaId="args.selectedAreaId2"
        :areas="args.areas1"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>I am a fixed header of the left overlay</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
                <div style="padding:8px;boredr-radius:4px; display: flex; flex-direction: column; gap: 10px;">
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                </div>
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
      <FSMap
        :editable="true"
        :locations="args.locations1"
        height="600px"
        :border="false"
        v-model:selectedLocationId="args.selectedLocationId1"
      />
      
      <FSMap
        :editable="false"
        :locations="args.locations2"
        height="300px"
        width="300px"
        :selectableLayers="['osm']"
        :grayscale="true"
        :showMyLocation="false"
        :showZoomButtons="false"
        :selectedLocationId="args.selectedLocationId2"
      />

      <FSDialogMultiForm
        width="800px"
        :steps="2"
        :title="$tr('ui.location.edit', 'Edit location')"
        v-model="args.showDialog"
      >
        <template
          #step-2
        >
          <FSMap />
        </template>
      </FSDialogMultiForm>
      <FSButton
        label="Open dialog with map"
        @click="() => args.showDialog = true"
      />
    </div>\`
  })
}`,...(oe=(te=P.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const lt=["Variations"];export{P as Variations,lt as __namedExportsOrder,nt as default};
