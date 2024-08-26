import{d as H,c as A,y as S,z as c,A as h,B as y,m as ne,L as g,E as Le,G as Me,b as v,C as _,F as E,N as W,o as N,V as be,D as F,X as J,a1 as X,W as re,O as $e,I as k,i as q,w as C,p as D}from"./vue.esm-bundler-DR8xMV81.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as we}from"./FSClickable-Bx8zcCZW.js";import{_ as le}from"./FSSpan-RI5Hh5xF.js";import{_ as I}from"./FSRow-Dfo2nEmE.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as $}from"./FSButton-Bvd0naOX.js";import{F as ke}from"./FSDialog-BghMDFnr.js";import{F as se}from"./FSCard-CU93xE1v.js";import{_ as w}from"./FSCol-CeBQ3oDD.js";import{u as ue}from"./css-DYbKqpMF.js";import{b as Ie}from"./VOverlay-DN1mcZZT.js";import{u as j,C as P}from"./useColors-nvbUnVB9.js";import{u as Ce}from"./useTranslations-yeF_ketc.js";import{F as qe}from"./FSFadeOut-DVFTxjCH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VProgressCircular-CQOkkHxu.js";import"./color-DRqqT5iF.js";import"./theme-DvfleoEk.js";import"./VIcon-CB8o8wL4.js";import"./useSlots-O0e9MAUJ.js";import"./FSIcon-CYA01Pg8.js";import"./FSText-ZRfoDIrD.js";import"./VSpacer-BxLG4kFi.js";import"./VDialog-CuBQDUUO.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-CfqC31JC.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./anchor-C7LpDu09.js";import"./dimensions-C81rpiLV.js";import"./display-CuCfKRZW.js";import"./lazy-B8zEEQrr.js";import"./locale-x-KasAKq.js";import"./router-I0roKE-i.js";import"./transition-DYmm1B3d.js";import"./index-3zl-tJp_.js";import"./uuid-DTaye2KM.js";const Ve=(e,a)=>`
  <div style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,Ae=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,_e=()=>'<div class="fs-map-mylocation-pin" />',Ee=e=>`<div style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`,ie=H({name:"FSImageCard",components:{FSClickable:we,FSSpan:le,FSRow:I},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:A(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function Oe(e,a,t,o,r,n){const m=S("FSClickable");return c(),h(m,ne({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[g(I,{align:"bottom-left",height:"fill"},{default:y(()=>[g(I,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[g(le,{font:"text-overline"},{default:y(()=>[Le(Me(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const Ge=b(ie,[["render",Oe]]);ie.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const de=H({name:"FSMapLayerButton",components:{FSImageCard:Ge,FSButton:$,FSDialog:ke,FSRow:I},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const t=v(!1);return{dialog:t,onLayerClick:r=>{a("update:modelValue",r),t.value=!1}}}});function ze(e,a,t,o,r,n){const m=S("FSImageCard"),d=S("FSDialog");return c(),_(E,null,[g($,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=s=>e.dialog=!0)}),g(d,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=s=>e.dialog=s),width:"500px",title:e.$tr("ui.map.select-layer","Select layer")},{body:y(()=>[g(I,{align:"center-center",padding:"0 16px 0 0"},{default:y(()=>[(c(!0),_(E,null,W(e.layers,s=>(c(),h(m,{variant:e.modelValue===s.name?"full":"background",color:e.modelValue===s.name?"primary":"light",label:s.label,src:s.image,key:s.name,onClick:p=>e.onLayerClick(s.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const Be=b(de,[["render",ze]]);de.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const pe=H({name:"FSMapOverlay",props:{mode:{type:String,required:!1,default:"collapse"}},components:{FSButton:$,FSCard:se,FSCol:w,FSRow:I},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:t}=ue(),o=v(null),r=v(null),n=v(null),m=v(null);return N(()=>{n.value=new ResizeObserver(d=>{d.forEach(s=>{a("update:height",s.contentRect.height)})}),m.value=new ResizeObserver(d=>{d.forEach(s=>{a("update:width",s.contentRect.width)})}),o.value&&n.value.observe(o.value),r.value&&m.value.observe(r.value.$el)}),be(()=>{n.value&&n.value.disconnect(),m.value&&m.value.disconnect()}),{isExtraSmall:t,mobileOverlayWrapper:o,desktopOverlay:r}}});function Ne(e,a,t,o,r,n){const m=S("FSCard");return c(),_(E,null,[e.isExtraSmall?(c(),h(Ie,{key:0,modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=d=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"])):F("",!0),J(re("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:$e({height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"50%":"20px"})},[g(m,{width:"100%",height:"100%",elevation:!0,border:!1},{default:y(()=>[g(w,{height:"100%",gap:"0px"},{default:y(()=>[g(I,{align:"center-center",onTouchstart:a[2]||(a[2]=d=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},{default:y(()=>[g($,{variant:"icon",icon:e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up",onClick:a[1]||(a[1]=d=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},null,8,["icon"])]),_:1}),e.$props.mode!=="collapse"?(c(),h(w,{key:0,height:"fill",style:{"min-height":"0"}},{default:y(()=>[k(e.$slots,"body")]),_:3})):F("",!0)]),_:3})]),_:3})],4),[[X,e.isExtraSmall]]),J(g(m,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[g(w,{height:"fill"},{default:y(()=>[k(e.$slots,"body")]),_:3})]),_:3},512),[[X,!e.isExtraSmall]])],64)}const Te=b(pe,[["render",Ne]]);pe.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const Re="featureGroup",T="map",xe="markerClusterGroup",me={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1}},emits:["click"],setup(e,{emit:a}){const t=q(T),o=q(xe,v(null)),{getColors:r}=j(),n=v(null);if(!t)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!t.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!t.value||!e.latlng)return;n.value&&(o&&o.value?o.value.removeLayer(n.value):t.value.removeLayer(n.value));let d=null;e.variant==="gps"?d=f.divIcon({html:_e(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon?d=f.divIcon({html:Ve(e.icon,r(e.color).base),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]}):d=f.divIcon({html:Ee(r(e.color).base),iconSize:[20,20],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[20/2,20/2]}),n.value=f.marker(e.latlng,{icon:d}),n.value.on("click",s=>{a("click",s)}),o&&o.value?n.value.addTo(o.value):n.value.addTo(t.value)};N(m),C(()=>[e.variant,e.color,e.latlng,e.selected],m)}};function Pe(e,a,t,o,r,n){return k(e.$slots,"default")}const Ze=b(me,[["render",Pe]]);me.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const ce={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=q(T),t=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const o=()=>{!e.layer||!a.value||(t&&a.value.removeLayer(t),e.layer.addTo(a.value))};N(o),C(()=>e.layer,o)}};function He(e,a,t,o,r,n){return k(e.$slots,"default")}const Ue=b(ce,[["render",He]]);ce.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const fe={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const t=q(T);let o=!1;if(!t)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!t.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const r=v(new f.FeatureGroup);D("featureGroup",r),r.value.on("layeradd",()=>{if(!t.value)return;r.value.getLayers().length===e.expectedLayers&&!o&&(r.value.addTo(t.value),o=!0,a("update:bounds",r.value.getBounds()))})}};function We(e,a,t,o,r,n){return k(e.$slots,"default")}const De=b(fe,[["render",We]]);fe.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const ye={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const t=q(T);let o=!1;if(!t)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!t.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const r=v(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:17,iconCreateFunction:function(n){return f.divIcon({html:Ae(n.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));D("markerClusterGroup",r),r.value.on("layeradd",()=>{if(!t.value)return;r.value.getLayers().length===e.expectedLayers&&!o&&(r.value.addTo(t.value),o=!0,a("update:bounds",r.value.getBounds()))})}};function je(e,a,t,o,r,n){return k(e.$slots,"default")}const Ke=b(ye,[["render",je]]);ye.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const ve={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const t=q(T),o=q(Re,v(null)),{getColors:r}=j(),n=v(null);if(!t)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!t.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!t.value||!e.latlngs)return;n.value&&(o&&o.value?o.value.removeLayer(n.value):t.value.removeLayer(n.value));const d=r(e.color).base;n.value=f.polygon(e.latlngs.map(s=>[s.lat,s.lng]),{color:d,fillColor:d+"50",fillOpacity:.5,className:"fs-map-area"}),n.value.on("click",s=>{a("click",s)}),o&&o.value?n.value.addTo(o.value):n.value.addTo(t.value)};N(m),C(()=>[e.color,e.latlngs],m)}};function Qe(e,a,t,o,r,n){return k(e.$slots,"default")}const Ye=b(ve,[["render",Qe]]);ve.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var ee={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const ge=H({name:"FSMap",components:{FSMapMarker:Ze,FSMapTileLayer:Ue,FSMapFeatureGroup:De,FSMapMarkerClusterGroup:Ke,FSMapPolygon:Ye,FSMapLayerButton:Be,FSMapOverlay:Te,FSButton:$,FSCard:se,FSCol:w},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:t}=Ce(),{getColors:o}=j(),{isExtraSmall:r}=ue(),n=v(),m=v(),d=v(),s=v(null),p=v(null),O=v(),G=v(),V=15;D("map",p);const z=[{name:"map",label:t("ui.map.layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${ee.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:t("ui.map.layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${ee.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],B=A(()=>e.overlayMode!=="expand"&&O.value&&r.value?O.value:0),u=A(()=>G.value&&!r.value?G.value:0),L=A(()=>({"--fs-map-location-pin-color":o(P.Primary).base,"--fs-map-mylocation-pin-color":o(P.Primary).base,"--fs-map-mylocation-pin-color-alpha":o(P.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${B.value}px`})),Se=A(()=>{var l;return((l=z.find(i=>i.name===e.currentLayer))==null?void 0:l.layer)??z[0].layer}),Fe=A(()=>{if(!m.value&&!d.value)return null;let l=m.value;return l&&d.value?l.extend(d.value):d.value&&(l=d.value),l}),R=l=>{if(!p.value)return l;const i=p.value.getZoom(),M=p.value.project(l,i).subtract([u.value/2,-B.value/2]);return p.value.unproject(M,i)},K=(l,i)=>{p.value&&p.value.panTo(R(f.latLng(l,i)))},Q=(l,i,M)=>{p.value&&p.value.setView(R(f.latLng(l,i)),M)},Y=(l,i)=>{if(!p.value)return;const M=new f.LatLngBounds(R(l.getSouthWest()),R(l.getNorthEast()));p.value.fitBounds(M,i)};return N(()=>{if(!n.value)return;const l={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1};p.value=f.map(n.value,l),Q(e.center[0],e.center[1],V),p.value.on("click",i=>{a("click:latlng",i.latlng)}),p.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(p.value),p.value.on("locationfound",i=>{i.latlng&&(s.value=i.latlng,p.value&&K(i.latlng.lat,i.latlng.lng))})}),C(()=>e.center,l=>{p.value&&Q(l[0],l[1],V)}),C(()=>e.selectedLocationId,l=>{if(!p.value)return;const i=e.locations.find(M=>M.id===l);i&&K(i==null?void 0:i.address.latitude,i==null?void 0:i.address.longitude)},{immediate:!0}),C(()=>e.selectedAreaId,l=>{if(!p.value)return;const i=e.areas.find(x=>x.id===l);if(!i)return;const M=f.latLngBounds(i.coordinates.map(x=>f.latLng(x.latitude,x.longitude)));Y(M)},{immediate:!0}),C(()=>Fe.value,l=>{!p.value||!l||Y(l,{maxZoom:V})}),{ColorEnum:P,leafletContainer:n,locationGroupBounds:m,overlayHeight:O,overlayWidth:G,areaGroupBounds:d,map:p,actualLayer:Se,mapLayers:z,gpsPosition:s,style:L}}}),Je={ref:"leafletContainer",class:"fs-leaflet-container"};function Xe(e,a,t,o,r,n){const m=S("FSMapTileLayer"),d=S("FSMapMarker"),s=S("FSMapPolygon"),p=S("FSMapFeatureGroup"),O=S("FSMapMarkerClusterGroup"),G=S("FSMapLayerButton"),V=S("FSCard"),z=S("FSMapOverlay");return c(),h(V,ne({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var B;return[re("div",Je,[e.map?(c(),_(E,{key:0},[g(m,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(c(),h(d,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):F("",!0),e.$props.areas?(c(),h(p,{key:1,"expected-layers":e.$props.areas.length,"onUpdate:bounds":a[0]||(a[0]=u=>e.areaGroupBounds=u)},{default:y(()=>[(c(!0),_(E,null,W(e.areas,u=>(c(),h(s,{key:u.id,color:u.color,latlngs:u.coordinates.map(L=>({lat:L.latitude,lng:L.longitude})),onClick:L=>e.$emit("update:selectedAreaId",u.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):F("",!0),e.$props.locations?(c(),h(O,{key:2,"expected-layers":e.$props.locations.length,"onUpdate:bounds":a[1]||(a[1]=u=>e.locationGroupBounds=u)},{default:y(()=>[(c(!0),_(E,null,W(e.$props.locations,u=>(c(),h(d,{selected:u.id===e.$props.selectedLocationId,key:u.id,color:u.color,icon:u.icon,latlng:{lat:u.address.latitude,lng:u.address.longitude},onClick:L=>e.$emit("update:selectedLocationId",u.id)},null,8,["selected","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers"])):F("",!0)],64)):F("",!0)],512),(B=e.$props.allowedLayers)!=null&&B.length&&e.$props.allowedLayers.length>1?(c(),h(G,{key:0,layers:e.mapLayers.filter(u=>{var L;return((L=e.$props.allowedLayers)==null?void 0:L.includes(u.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[2]||(a[2]=u=>e.$emit("update:currentLayer",u))},null,8,["layers","modelValue"])):F("",!0),e.map?(c(),h(w,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(c(),h($,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[3]||(a[3]=()=>e.map.locate())})):F("",!0),e.$props.showZoomButtons?(c(),h(V,{key:1,elevation:!0},{default:y(()=>[g(w,{gap:"0"},{default:y(()=>[g($,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[4]||(a[4]=()=>e.map.zoomIn()),border:!1}),g($,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[5]||(a[5]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):F("",!0)]),_:1})):F("",!0),e.$slots.overlay?(c(),h(z,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[6]||(a[6]=u=>e.$emit("update:overlayMode",u)),"onUpdate:height":a[7]||(a[7]=u=>e.overlayHeight=u),"onUpdate:width":a[8]||(a[8]=u=>e.overlayWidth=u)},{body:y(()=>[k(e.$slots,"overlay")]),_:3},8,["mode"])):F("",!0)]}),_:3},16,["width","height","style"])}const he=b(ge,[["render",Xe]]);ge.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"overlay"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const xa={title:"Foundation/Shared/Map",component:he,tags:["autodocs"]},U={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",icon:"mdi-factory",color:"primary",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"}},ea={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},aa={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},ta={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},oa={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},Z={args:{args:{locations1:[{...U}],locations2:[{...U}],locations3:[{...aa},{...ea},{...ta}],selectedLocationId1:U.id,selectedLocationId2:null,selectedLocationId3:null,selectedAreaId1:null,selectedAreaId2:null,overlayMode1:"collapse",overlayMode2:"half",currentLayer1:"map",currentLayer2:"imagery",areas1:[oa]}},render:(e,{argTypes:a})=>({components:{FSMap:he,FSRow:I,FSCol:w,FSFadeOut:qe},props:Object.keys(a),setup(){return{...e}},template:`
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
    </div>`})};var ae,te,oe;Z.parameters={...Z.parameters,docs:{...(ae=Z.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
      areas1: [area1]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMap,
      FSRow,
      FSCol,
      FSFadeOut
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
    </div>\`
  })
}`,...(oe=(te=Z.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Pa=["Variations"];export{Z as Variations,Pa as __namedExportsOrder,xa as default};
