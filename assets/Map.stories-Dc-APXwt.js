import{d as Z,c as O,y as F,z as c,A as h,B as y,m as ve,L as v,E as Ge,G as Ze,b as g,C as E,F as B,N as Q,o as z,V as he,D as L,X as oe,a2 as te,W as Se,O as ze,I,i as A,w as q,p as Y,a8 as _e}from"./vue.esm-bundler-BSyvBTC9.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as Ne}from"./FSClickable-MDWPSUzP.js";import{_ as Fe}from"./FSSpan-CCGpb4KF.js";import{F as M}from"./FSRow-CA1vgNXx.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as w}from"./FSButton-BSiZExfb.js";import{F as Pe}from"./FSDialog-D6WOEbO4.js";import{F as Le}from"./FSCard-Dakm4bPu.js";import{F as C}from"./FSCol-DZA6pxA1.js";import{u as Me}from"./css-DLfrm0pR.js";import{b as Te}from"./VOverlay-Cw3wN5kj.js";import{u as X,C as x}from"./useColors-DlnF7i6T.js";import{u as De}from"./useTranslations-CdSqQFV3.js";import{F as xe}from"./FSFadeOut-D96pvLZm.js";import{F as We}from"./FSDialogMultiForm-cuNBHZRS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VProgressCircular-D09FP1rk.js";import"./color--o2QfpAv.js";import"./theme-D4rXHj3O.js";import"./tag-DB5D_XjQ.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-C66wKzEa.js";import"./VIcon-BQIm0b3J.js";import"./FSText-DyldgdXP.js";import"./VSpacer-DvdcLDtW.js";import"./VDialog-D9Xzq_RJ.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Bq4wip6p.js";import"./VDefaultsProvider-Xljcdv6D.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./index-DfSX31J9.js";import"./uuid-DTaye2KM.js";import"./FSPagination-DAqLpa--.js";import"./FSForm-B3l4SUcc.js";import"./form-B61Sg6X-.js";import"./FSWindow-vGuTiYfW.js";import"./group-CBCTR8u6.js";import"./VBtn-B3SFyF18.js";import"./border-DsbQ0vt7.js";import"./density-CDPzHPmZ.js";import"./elevation-Ben4zuE4.js";import"./rounded-Dg8mz8II.js";import"./loader-C8KBePTS.js";import"./index-DPxysH4G.js";import"./ssrBoot-SGvAq9J5.js";const He=(e,a)=>`
  <div style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,Ue=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,je=()=>'<div class="fs-map-mylocation-pin" />',Ke=e=>`<div style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`,be=Z({name:"FSImageCard",components:{FSClickable:Ne,FSSpan:Fe,FSRow:M},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:O(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function Qe(e,a,o,t,r,n){const m=F("FSClickable");return c(),h(m,ve({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[v(M,{align:"bottom-left",height:"fill"},{default:y(()=>[v(M,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[v(Fe,{font:"text-overline"},{default:y(()=>[Ge(Ze(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const Ye=$(be,[["render",Qe]]);be.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const we=Z({name:"FSMapLayerButton",components:{FSImageCard:Ye,FSButton:w,FSDialog:Pe,FSRow:M},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const o=g(!1);return{dialog:o,onLayerClick:r=>{a("update:modelValue",r),o.value=!1}}}});function Xe(e,a,o,t,r,n){const m=F("FSImageCard"),p=F("FSDialog");return c(),E(B,null,[v(w,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=u=>e.dialog=!0)}),v(p,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=u=>e.dialog=u),width:"500px",title:e.$tr("ui.map.select-layer","Select layer"),contained:!0},{body:y(()=>[v(M,{align:"center-center",padding:"0 16px 0 0"},{default:y(()=>[(c(!0),E(B,null,Q(e.layers,u=>(c(),h(m,{variant:e.modelValue===u.name?"full":"background",color:e.modelValue===u.name?"primary":"light",label:u.label,src:u.image,key:u.name,onClick:d=>e.onLayerClick(u.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const Je=$(we,[["render",Xe]]);we.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const $e=Z({name:"FSMapOverlay",props:{mode:{type:String,required:!1,default:"collapse"}},components:{FSButton:w,FSCard:Le,FSCol:C,FSRow:M},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:o}=Me(),t=g(null),r=g(null),n=g(null),m=g(null);return z(()=>{n.value=new ResizeObserver(p=>{p.forEach(u=>{a("update:height",u.contentRect.height)})}),m.value=new ResizeObserver(p=>{p.forEach(u=>{a("update:width",u.contentRect.width)})}),t.value&&n.value.observe(t.value),r.value&&m.value.observe(r.value.$el)}),he(()=>{n.value&&n.value.disconnect(),m.value&&m.value.disconnect()}),{isExtraSmall:o,mobileOverlayWrapper:t,desktopOverlay:r}}});function ea(e,a,o,t,r,n){const m=F("FSCard");return c(),E(B,null,[e.isExtraSmall?(c(),h(Te,{key:0,modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=p=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"])):L("",!0),oe(Se("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:ze({height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"50%":"20px"})},[v(m,{width:"100%",height:"100%",elevation:!0,border:!1},{default:y(()=>[v(C,{height:"100%",gap:"0px"},{default:y(()=>[v(M,{align:"center-center",onTouchstart:a[2]||(a[2]=p=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},{default:y(()=>[v(w,{variant:"icon",icon:e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up",onClick:a[1]||(a[1]=p=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},null,8,["icon"])]),_:1}),e.$props.mode!=="collapse"?(c(),h(C,{key:0,height:"fill",style:{"min-height":"0"}},{default:y(()=>[I(e.$slots,"body")]),_:3})):L("",!0)]),_:3})]),_:3})],4),[[te,e.isExtraSmall]]),oe(v(m,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[v(C,{height:"fill"},{default:y(()=>[I(e.$slots,"body")]),_:3})]),_:3},512),[[te,!e.isExtraSmall]])],64)}const aa=$($e,[["render",ea]]);$e.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const oa="featureGroup",_="map",ta="markerClusterGroup",ke={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1}},emits:["click"],setup(e,{emit:a}){const o=A(_),t=A(ta,g(null)),{getColors:r}=X(),n=g(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!o.value||!e.latlng)return;n.value&&(t&&t.value?t.value.removeLayer(n.value):o.value.removeLayer(n.value));let p=null;e.variant==="gps"?p=f.divIcon({html:je(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon?p=f.divIcon({html:He(e.icon,r(e.color).base),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]}):p=f.divIcon({html:Ke(r(e.color).base),iconSize:[20,20],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[20/2,20/2]}),n.value=f.marker(e.latlng,{icon:p}),n.value.on("click",u=>{a("click",u)}),t&&t.value?n.value.addTo(t.value):n.value.addTo(o.value)};z(m),q(()=>[e.variant,e.color,e.latlng,e.selected],m)}};function na(e,a,o,t,r,n){return I(e.$slots,"default")}const ra=$(ke,[["render",na]]);ke.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const Ce={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=A(_),o=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const t=()=>{!e.layer||!a.value||(o&&a.value.removeLayer(o),e.layer.addTo(a.value))};z(t),q(()=>e.layer,t)}};function la(e,a,o,t,r,n){return I(e.$slots,"default")}const sa=$(Ce,[["render",la]]);Ce.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const Ie={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const o=A(_);let t=!1;if(!o)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const r=g(new f.FeatureGroup);Y("featureGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&!t&&(r.value.addTo(o.value),t=!0,a("update:bounds",r.value.getBounds()))})}};function ia(e,a,o,t,r,n){return I(e.$slots,"default")}const ua=$(Ie,[["render",ia]]);Ie.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const qe={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const o=A(_);let t=!1;if(!o)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const r=g(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(n){return f.divIcon({html:Ue(n.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));Y("markerClusterGroup",r),r.value.on("layeradd",()=>{if(!o.value)return;r.value.getLayers().length===e.expectedLayers&&!t&&(r.value.addTo(o.value),t=!0,a("update:bounds",r.value.getBounds()))})}};function da(e,a,o,t,r,n){return I(e.$slots,"default")}const pa=$(qe,[["render",da]]);qe.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const Ae={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const o=A(_),t=A(oa,g(null)),{getColors:r}=X(),n=g(null);if(!o)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!o.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!o.value||!e.latlngs)return;n.value&&(t&&t.value?t.value.removeLayer(n.value):o.value.removeLayer(n.value));const p=r(e.color).base;n.value=f.polygon(e.latlngs.map(u=>[u.lat,u.lng]),{color:p,fillColor:p+"50",fillOpacity:.5,className:"fs-map-area"}),n.value.on("click",u=>{a("click",u)}),t&&t.value?n.value.addTo(t.value):n.value.addTo(o.value)};z(m),q(()=>[e.color,e.latlngs],m)}};function ma(e,a,o,t,r,n){return I(e.$slots,"default")}const ca=$(Ae,[["render",ma]]);Ae.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var ne={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const Ve=Z({name:"FSMap",components:{FSMapMarker:ra,FSMapTileLayer:sa,FSMapFeatureGroup:ua,FSMapMarkerClusterGroup:pa,FSMapPolygon:ca,FSMapLayerButton:Je,FSMapOverlay:aa,FSButton:w,FSCard:Le,FSCol:C},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:o}=De(),{getColors:t}=X(),{isExtraSmall:r}=Me(),n=g(),m=g(),p=g(),u=g(null),d=g(null),R=g(),G=g();Y("map",d);const k=16,P=new ResizeObserver(()=>{d.value&&d.value.invalidateSize()}),V=[{name:"map",label:o("ui.map.layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${ne.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:o("ui.map.layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${ne.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],s=O(()=>e.overlayMode!=="expand"&&R.value&&r.value?R.value:0),b=O(()=>G.value&&!r.value?G.value:0),Ee=O(()=>({"--fs-map-location-pin-color":t(x.Primary).base,"--fs-map-mylocation-pin-color":t(x.Primary).base,"--fs-map-mylocation-pin-color-alpha":t(x.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${s.value}px`})),Be=O(()=>{var i;return((i=V.find(l=>l.name===e.currentLayer))==null?void 0:i.layer)??V[0].layer}),Re=O(()=>{if(!m.value&&!p.value)return null;let i=m.value;return i&&p.value?i.extend(p.value):p.value&&(i=p.value),i}),T=(i,l)=>{if(!d.value)return i;l=l??d.value.getZoom();const S=d.value.project(i,l).subtract([b.value/2,-s.value/2]);return d.value.unproject(S,l)},J=(i,l,S=k)=>{d.value&&d.value.flyTo(T(f.latLng(i,l),S),S)},ee=(i,l,S)=>{d.value&&d.value.setView(T(f.latLng(i,l)),S)},ae=(i,l)=>{if(!d.value)return;const S=new f.LatLngBounds(T(i.getSouthWest()),T(i.getNorthEast()));d.value.fitBounds(S,l)};return z(()=>{if(!n.value)return;const i={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1};d.value=_e(f.map(n.value,i)),ee(e.center[0],e.center[1],k),d.value.on("click",l=>{a("click:latlng",l.latlng)}),d.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(d.value),d.value.on("locationfound",l=>{l.latlng&&(u.value=l.latlng,d.value&&J(l.latlng.lat,l.latlng.lng))}),P.observe(n.value)}),he(()=>{P.disconnect()}),q(()=>e.center,i=>{d.value&&ee(i[0],i[1],k)}),q(()=>e.selectedLocationId,i=>{if(!d.value)return;const l=e.locations.find(S=>S.id===i);l&&J(l==null?void 0:l.address.latitude,l==null?void 0:l.address.longitude)},{immediate:!0}),q(()=>e.selectedAreaId,i=>{if(!d.value)return;const l=e.areas.find(D=>D.id===i);if(!l)return;const S=f.latLngBounds(l.coordinates.map(D=>f.latLng(D.latitude,D.longitude)));ae(S)},{immediate:!0}),q(()=>Re.value,i=>{!d.value||!i||ae(i,{maxZoom:k})}),{ColorEnum:x,defaultZoom:k,leafletContainer:n,locationGroupBounds:m,overlayHeight:R,overlayWidth:G,areaGroupBounds:p,map:d,actualLayer:Be,mapLayers:V,gpsPosition:u,style:Ee}}}),fa={ref:"leafletContainer",class:"fs-leaflet-container"};function ya(e,a,o,t,r,n){const m=F("FSMapTileLayer"),p=F("FSMapMarker"),u=F("FSMapPolygon"),d=F("FSMapFeatureGroup"),R=F("FSMapMarkerClusterGroup"),G=F("FSMapLayerButton"),k=F("FSCard"),P=F("FSMapOverlay");return c(),h(k,ve({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var V;return[Se("div",fa,[e.map?(c(),E(B,{key:0},[v(m,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(c(),h(p,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):L("",!0),e.$props.areas?(c(),h(d,{key:1,"expected-layers":e.$props.areas.length,"onUpdate:bounds":a[0]||(a[0]=s=>e.areaGroupBounds=s)},{default:y(()=>[(c(!0),E(B,null,Q(e.areas,s=>(c(),h(u,{key:s.id,color:s.color,latlngs:s.coordinates.map(b=>({lat:b.latitude,lng:b.longitude})),onClick:b=>e.$emit("update:selectedAreaId",s.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):L("",!0),e.$props.locations?(c(),h(R,{key:2,"expected-layers":e.$props.locations.length,disableClusteringAtZoom:e.defaultZoom,"onUpdate:bounds":a[1]||(a[1]=s=>e.locationGroupBounds=s)},{default:y(()=>[(c(!0),E(B,null,Q(e.$props.locations,s=>(c(),h(p,{selected:s.id===e.$props.selectedLocationId,key:s.id,color:s.color??e.ColorEnum.Primary,icon:s.icon??"mdi-map-marker",latlng:{lat:s.address.latitude,lng:s.address.longitude},onClick:b=>e.$emit("update:selectedLocationId",s.id)},null,8,["selected","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers","disableClusteringAtZoom"])):L("",!0)],64)):L("",!0)],512),(V=e.$props.allowedLayers)!=null&&V.length&&e.$props.allowedLayers.length>1?(c(),h(G,{key:0,layers:e.mapLayers.filter(s=>{var b;return((b=e.$props.allowedLayers)==null?void 0:b.includes(s.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[2]||(a[2]=s=>e.$emit("update:currentLayer",s))},null,8,["layers","modelValue"])):L("",!0),e.map?(c(),h(C,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(c(),h(w,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[3]||(a[3]=()=>e.map.locate())})):L("",!0),e.$props.showZoomButtons?(c(),h(k,{key:1,elevation:!0},{default:y(()=>[v(C,{gap:"0"},{default:y(()=>[v(w,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[4]||(a[4]=()=>e.map.zoomIn()),border:!1}),v(w,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[5]||(a[5]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):L("",!0)]),_:1})):L("",!0),e.$slots.overlay?(c(),h(P,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[6]||(a[6]=s=>e.$emit("update:overlayMode",s)),"onUpdate:height":a[7]||(a[7]=s=>e.overlayHeight=s),"onUpdate:width":a[8]||(a[8]=s=>e.overlayWidth=s)},{body:y(()=>[I(e.$slots,"overlay")]),_:3},8,["mode"])):L("",!0)]}),_:3},16,["width","height","style"])}const N=$(Ve,[["render",ya]]);Ve.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"overlay"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const ho={title:"Foundation/Shared/Map",component:N,tags:["autodocs"]},K={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"}},Oe={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},ga={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},va={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},ha={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},W={args:{locations:[K],selectedLocationId:K.id,overlayMode:"collapse",currentLayer:"map",height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>Z({components:{FSMap:N,FSRow:M},inheritAttrs:!1,setup(){return{args:e}},template:`
        <FSRow height="500px">
          <FSMap
            :width="args.width"
            :height="args.height"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            :locations="args.locations"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
          >
            <template v-slot:overlay>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      `})},H={args:{locations:[K,Oe,ga,va],selectedLocationId:null,overlayMode:"half",currentLayer:"imagery"},render:e=>({components:{FSMap:N,FSFadeOut:xe,FSRow:M,FSCol:C},setup(){return{args:e}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>Custom overlay with fade out</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
              <div style="padding:8px; border-radius:4px; display: flex; flex-direction: column; gap: 10px;">
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
    `})},U={args:{locations:[K,Oe],areas:[ha],selectedLocationId:null,selectedAreaId:null,overlayMode:"collapse",currentLayer:"map"},render:e=>({components:{FSMap:N,FSRow:M},setup(){return{args:e}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        v-model:selectedAreaId="args.selectedAreaId"
        :locations="args.locations"
        :areas="args.areas"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>Overlay for area selection</span>
          </FSRow>
        </template>
      </FSMap>
    `})},j={args:{showDialog:!1},render:e=>({components:{FSMap:N,FSDialogMultiForm:We,FSButton:w},setup(){return{args:e}},template:`
      <div>
        <FSButton label="Open dialog with map" @click="args.showDialog = true" />
        <FSDialogMultiForm
          v-model="args.showDialog"
          width="800px"
          :steps="2"
          title="Edit location"
        >
          <template #step-2>
            <FSMap />
          </template>
        </FSDialogMultiForm>
      </div>
    `})};var re,le,se;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    locations: [location1],
    selectedLocationId: location1.id,
    overlayMode: 'collapse',
    currentLayer: 'map',
    height: '100%',
    width: '100%',
    grayscale: false,
    showMyLocation: true,
    showZoomButtons: true,
    enableScrollWheelZoom: true
  },
  render: args => defineComponent({
    components: {
      FSMap,
      FSRow
    },
    inheritAttrs: false,
    setup() {
      return {
        args
      };
    },
    template: \`
        <FSRow height="500px">
          <FSMap
            :width="args.width"
            :height="args.height"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            :locations="args.locations"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
          >
            <template v-slot:overlay>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      \`
  })
}`,...(se=(le=W.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ie,ue,de;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    locations: [location1, location2, location3, location4],
    selectedLocationId: null,
    overlayMode: 'half',
    currentLayer: 'imagery'
  },
  render: args => ({
    components: {
      FSMap,
      FSFadeOut,
      FSRow,
      FSCol
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>Custom overlay with fade out</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
              <div style="padding:8px; border-radius:4px; display: flex; flex-direction: column; gap: 10px;">
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
    \`
  })
}`,...(de=(ue=H.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,ce;U.parameters={...U.parameters,docs:{...(pe=U.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    locations: [location1, location2],
    areas: [area1],
    selectedLocationId: null,
    selectedAreaId: null,
    overlayMode: 'collapse',
    currentLayer: 'map'
  },
  render: args => ({
    components: {
      FSMap,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        v-model:selectedAreaId="args.selectedAreaId"
        :locations="args.locations"
        :areas="args.areas"
      >
        <template v-slot:overlay>
          <FSRow>
            <span>Overlay for area selection</span>
          </FSRow>
        </template>
      </FSMap>
    \`
  })
}`,...(ce=(me=U.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var fe,ye,ge;j.parameters={...j.parameters,docs:{...(fe=j.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    showDialog: false
  },
  render: args => ({
    components: {
      FSMap,
      FSDialogMultiForm,
      FSButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <FSButton label="Open dialog with map" @click="args.showDialog = true" />
        <FSDialogMultiForm
          v-model="args.showDialog"
          width="800px"
          :steps="2"
          title="Edit location"
        >
          <template #step-2>
            <FSMap />
          </template>
        </FSDialogMultiForm>
      </div>
    \`
  })
}`,...(ge=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};const So=["SingleLocationMap","MultiLocationMap","AreaMap","MapInDialog"];export{U as AreaMap,j as MapInDialog,H as MultiLocationMap,W as SingleLocationMap,So as __namedExportsOrder,ho as default};
