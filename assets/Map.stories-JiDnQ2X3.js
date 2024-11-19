import{d as z,c as E,y as F,z as c,A as h,C as y,m as we,N as g,H as He,I as je,b as v,E as A,G as B,O as Y,g as T,U as $e,F as L,X as le,a0 as se,V as ke,P as Ke,K as q,i as O,w as R,p as X,a8 as Qe}from"./vue.esm-bundler-Ddr6MgcY.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as Ye}from"./FSClickable-D7sul-uP.js";import{_ as Ce}from"./FSSpan-Bh1X02mE.js";import{_ as M}from"./FSRow-CSQtiyAx.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSButton-DZMcpMR1.js";import{F as Je}from"./FSDialog-CcyZGVNr.js";import{F as Ie}from"./FSCard-Bfo4Z0Zf.js";import{F as C}from"./FSCol-D8gLxM2E.js";import{u as qe}from"./useBreakpoints-BMg9gIvD.js";import{b as Xe}from"./VOverlay-C5IcMf4o.js";import{u as ee,C as D}from"./useColors-DnoeDx-P.js";import{u as ea}from"./useTranslations-DgvmBCqU.js";import{_ as Re}from"./FSFadeOut-B5r2PNGg.js";import{F as aa}from"./FSDialogMultiForm-DocNgYct.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./css-CxoeZkpP.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./theme-D55tBrU4.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./useSlots-C9mZt9CQ.js";import"./FSIcon-DfjSexyz.js";import"./FSText-CAGI2dEo.js";import"./VDialog-CGEJcy8g.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BYnu2EOK.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./anchor-BdD5yCeG.js";import"./dimensions-DL1AZk-8.js";import"./display-BUGvawh3.js";import"./lazy-BsoIJm2g.js";import"./locale-CA7yUTVs.js";import"./router-C4YP2PAT.js";import"./transition-BtBp4lzQ.js";import"./index-DfSX31J9.js";import"./uuid-DTaye2KM.js";import"./FSPagination-DuEO3ucz.js";import"./FSForm-DYbVl9Fq.js";import"./form-vji0TmoR.js";import"./FSWindow-CjrAhUjI.js";import"./group-Chxk22vU.js";import"./VBtn-GP0Uljy4.js";import"./border-BiXRHevL.js";import"./density-B5LNz2JK.js";import"./elevation-BNOJtsSY.js";import"./rounded-BoPqla0T.js";import"./loader-CNy9VCwd.js";import"./index-BF2Ge4Ib.js";import"./ssrBoot-BXK87sqN.js";const na=(e,a,n="")=>`
  <div title="${n}" style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,oa=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,ta=()=>'<div class="fs-map-mylocation-pin" />',ra=(e,a="")=>`<div title="${a}" style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`,Oe=z({name:"FSImageCard",components:{FSClickable:Ye,FSSpan:Ce,FSRow:M},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:E(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function la(e,a,n,o,r,t){const m=F("FSClickable");return c(),h(m,we({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[g(M,{align:"bottom-left",height:"fill"},{default:y(()=>[g(M,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[g(Ce,{font:"text-overline"},{default:y(()=>[He(je(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const sa=I(Oe,[["render",la]]);Oe.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const Ve=z({name:"FSMapLayerButton",components:{FSImageCard:sa,FSButton:k,FSDialog:Je,FSRow:M},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const n=v(!1);return{dialog:n,onLayerClick:r=>{a("update:modelValue",r),n.value=!1}}}});function ia(e,a,n,o,r,t){const m=F("FSImageCard"),d=F("FSDialog");return c(),A(B,null,[g(k,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=u=>e.dialog=!0)}),g(d,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=u=>e.dialog=u),title:e.$tr("ui.map-layer.select","Select layer"),contained:!0},{body:y(()=>[g(M,{align:"center-center",wrap:!1},{default:y(()=>[(c(!0),A(B,null,Y(e.layers,u=>(c(),h(m,{variant:e.modelValue===u.name?"full":"background",color:e.modelValue===u.name?"primary":"light",label:u.label,src:u.image,key:u.name,onClick:p=>e.onLayerClick(u.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const ua=I(Ve,[["render",ia]]);Ve.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const Ee=z({name:"FSMapOverlay",props:{mode:{type:String,required:!1,default:"collapse"}},components:{FSButton:k,FSCard:Ie,FSCol:C,FSRow:M},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:n}=qe(),o=v(null),r=v(null),t=v(null),m=v(null);return T(()=>{t.value=new ResizeObserver(d=>{d.forEach(u=>{a("update:height",u.contentRect.height)})}),m.value=new ResizeObserver(d=>{d.forEach(u=>{a("update:width",u.contentRect.width)})}),o.value&&(t.value.observe(o.value),a("update:height",o.value.offsetHeight)),r.value&&(m.value.observe(r.value.$el),a("update:width",r.value.$el.offsetWidth))}),$e(()=>{t.value&&t.value.disconnect(),m.value&&m.value.disconnect()}),{isExtraSmall:n,mobileOverlayWrapper:o,desktopOverlay:r}}});function pa(e,a,n,o,r,t){const m=F("FSCard");return c(),A(B,null,[e.isExtraSmall?(c(),h(Xe,{key:0,modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=d=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"])):L("",!0),le(ke("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:Ke({height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"60%":"20px"})},[g(m,{width:"100%",height:"100%",elevation:!0,border:!1},{default:y(()=>[g(C,{height:"100%",gap:"0px"},{default:y(()=>[g(M,{align:"center-center",onTouchstart:a[2]||(a[2]=d=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},{default:y(()=>[g(k,{variant:"icon",icon:e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up",onClick:a[1]||(a[1]=d=>e.$props.mode==="expand"?e.$emit("update:mode","collapse"):e.$emit("update:mode","expand"))},null,8,["icon"])]),_:1}),e.$props.mode!=="collapse"?(c(),h(C,{key:0,height:"fill",style:{"min-height":"0"}},{default:y(()=>[q(e.$slots,"body")]),_:3})):L("",!0)]),_:3})]),_:3})],4),[[se,e.isExtraSmall]]),le(g(m,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[g(C,{height:"fill"},{default:y(()=>[q(e.$slots,"body")]),_:3})]),_:3},512),[[se,!e.isExtraSmall]])],64)}const da=I(Ee,[["render",pa]]);Ee.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const ma="featureGroup",x="map",ca="markerClusterGroup",Ae={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1}},emits:["click"],setup(e,{emit:a}){const n=O(x),o=O(ca,v(null)),{getColors:r}=ee(),t=v(null);if(!n)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!n.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!n.value||!e.latlng)return;t.value&&(o&&o.value?o.value.removeLayer(t.value):n.value.removeLayer(t.value));let d=null;e.variant==="gps"?d=f.divIcon({html:ta(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon?d=f.divIcon({html:na(e.icon,r(e.color).base,e.label),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]}):d=f.divIcon({html:ra(r(e.color).base),iconSize:[20,20],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[20/2,20/2]}),t.value=f.marker(e.latlng,{icon:d}),t.value.on("click",u=>{a("click",u)}),o&&o.value?t.value.addTo(o.value):t.value.addTo(n.value)};T(m),R(()=>[e.variant,e.color,e.latlng,e.selected],m)}};function fa(e,a,n,o,r,t){return q(e.$slots,"default")}const ya=I(Ae,[["render",fa]]);Ae.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const Be={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=O(x),n=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const o=()=>{!e.layer||!a.value||(n&&a.value.removeLayer(n),e.layer.addTo(a.value))};T(o),R(()=>e.layer,o)}};function va(e,a,n,o,r,t){return q(e.$slots,"default")}const ga=I(Be,[["render",va]]);Be.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const Ge={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const n=O(x);let o=!1;if(!n)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!n.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const r=v(new f.FeatureGroup);X("featureGroup",r),r.value.on("layeradd",()=>{if(!n.value)return;r.value.getLayers().length===e.expectedLayers&&!o&&(r.value.addTo(n.value),o=!0,a("update:bounds",r.value.getBounds()))})}};function ha(e,a,n,o,r,t){return q(e.$slots,"default")}const Sa=I(Ge,[["render",ha]]);Ge.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const Ze={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const n=O(x);let o=!1;if(!n)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!n.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const r=v(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(t){return f.divIcon({html:oa(t.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));X("markerClusterGroup",r),r.value.on("layeradd",()=>{if(!n.value)return;r.value.getLayers().length===e.expectedLayers&&!o&&(r.value.addTo(n.value),o=!0,a("update:bounds",r.value.getBounds()))})}};function Fa(e,a,n,o,r,t){return q(e.$slots,"default")}const La=I(Ze,[["render",Fa]]);Ze.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const _e={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const n=O(x),o=O(ma,v(null)),{getColors:r}=ee(),t=v(null);if(!n)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!n.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const m=()=>{if(!n.value||!e.latlngs)return;t.value&&(o&&o.value?o.value.removeLayer(t.value):n.value.removeLayer(t.value));const d=r(e.color).base;t.value=f.polygon(e.latlngs.map(u=>[u.lat,u.lng]),{color:d,fillColor:d+"50",fillOpacity:.5,className:"fs-map-area"}),t.value.on("click",u=>{a("click",u)}),o&&o.value?t.value.addTo(o.value):t.value.addTo(n.value)};T(m),R(()=>[e.color,e.latlngs],m)}};function Ma(e,a,n,o,r,t){return q(e.$slots,"default")}const ba=I(_e,[["render",Ma]]);_e.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var ie={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const ze=z({name:"FSMap",components:{FSMapMarker:ya,FSMapTileLayer:ga,FSMapFeatureGroup:Sa,FSMapMarkerClusterGroup:La,FSMapPolygon:ba,FSMapLayerButton:ua,FSMapOverlay:da,FSButton:k,FSCard:Ie,FSCol:C},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:n}=ea(),{getColors:o}=ee(),{isExtraSmall:r}=qe(),t=v(),m=v(),d=v(),u=v(null),p=v(null),Z=v(),_=v();X("map",p);const w=16,P=new ResizeObserver(()=>{p.value&&p.value.invalidateSize()}),V=[{name:"map",label:n("ui.map-layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${ie.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:n("ui.map-layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${ie.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],l=E(()=>e.overlayMode!=="expand"&&Z.value&&r.value?Z.value:0),b=E(()=>_.value&&!r.value?_.value:0),Ne=E(()=>({"--fs-map-location-pin-color":o(D.Primary).base,"--fs-map-mylocation-pin-color":o(D.Primary).base,"--fs-map-mylocation-pin-color-alpha":o(D.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${l.value}px`})),De=E(()=>{var i;return((i=V.find(s=>s.name===e.currentLayer))==null?void 0:i.layer)??V[0].layer}),We=E(()=>{if(!m.value&&!d.value)return null;let i=m.value;return i&&d.value?i.extend(d.value):d.value&&(i=d.value),i}),Q=(i,s)=>{if(!p.value)return i;s=s??p.value.getZoom();const S=p.value.project(i,s).subtract([b.value/2,-l.value/2]);return p.value.unproject(S,s)},ne=(i,s,S=w,$)=>{if(p.value)if(r.value){let N=0,re=l.value;const Ue=setInterval(()=>{(re===l.value||N>=30)&&(clearInterval(Ue),p.value.flyTo(Q(f.latLng(i,s),S),S,$)),re=l.value,N++},20)}else p.value.flyTo(Q(f.latLng(i,s),S),S,$)},oe=(i,s,S)=>{p.value&&p.value.setView(Q(f.latLng(i,s)),S)},te=(i,s)=>{if(!p.value)return;const S=[b.value,0],$=[0,l.value],N={paddingTopLeft:S,paddingBottomRight:$,...s};p.value.fitBounds(i,N)};return T(()=>{if(!t.value)return;const i={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1};p.value=Qe(f.map(t.value,i)),oe(e.center[0],e.center[1],w),p.value.on("click",s=>{a("click:latlng",s.latlng)}),p.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(p.value),p.value.on("locationfound",s=>{s.latlng&&(u.value=s.latlng,p.value&&ne(s.latlng.lat,s.latlng.lng))}),P.observe(t.value)}),$e(()=>{P.disconnect()}),R(()=>e.center,i=>{p.value&&oe(i[0],i[1],w)}),R(()=>e.selectedLocationId,i=>{if(!p.value)return;const s=e.locations.find(S=>S.id===i);s&&ne(s==null?void 0:s.address.latitude,s==null?void 0:s.address.longitude,w,{animate:!1})},{immediate:!0}),R(()=>e.selectedAreaId,i=>{if(!p.value)return;const s=e.areas.find($=>$.id===i);if(!s)return;const S=f.latLngBounds(s.coordinates.map($=>f.latLng($.latitude,$.longitude)));te(S)},{immediate:!0}),R(()=>We.value,i=>{!p.value||!i||te(i,{maxZoom:w})}),{ColorEnum:D,defaultZoom:w,leafletContainer:t,locationGroupBounds:m,overlayHeight:Z,overlayWidth:_,areaGroupBounds:d,map:p,actualLayer:De,mapLayers:V,gpsPosition:u,style:Ne}}}),wa={ref:"leafletContainer",class:"fs-leaflet-container"};function $a(e,a,n,o,r,t){const m=F("FSMapTileLayer"),d=F("FSMapMarker"),u=F("FSMapPolygon"),p=F("FSMapFeatureGroup"),Z=F("FSMapMarkerClusterGroup"),_=F("FSMapLayerButton"),w=F("FSCard"),P=F("FSMapOverlay");return c(),h(w,we({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var V;return[ke("div",wa,[e.map?(c(),A(B,{key:0},[g(m,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(c(),h(d,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):L("",!0),e.$props.areas?(c(),h(p,{key:1,"expected-layers":e.$props.areas.length,"onUpdate:bounds":a[0]||(a[0]=l=>e.areaGroupBounds=l)},{default:y(()=>[(c(!0),A(B,null,Y(e.areas,l=>(c(),h(u,{key:l.id,color:l.color,latlngs:l.coordinates.map(b=>({lat:b.latitude,lng:b.longitude})),onClick:b=>e.$emit("update:selectedAreaId",l.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):L("",!0),e.$props.locations?(c(),h(Z,{key:2,"expected-layers":e.$props.locations.length,disableClusteringAtZoom:e.defaultZoom,"onUpdate:bounds":a[1]||(a[1]=l=>e.locationGroupBounds=l)},{default:y(()=>[(c(!0),A(B,null,Y(e.$props.locations,l=>(c(),h(d,{selected:l.id===e.$props.selectedLocationId,key:l.id,label:l.label,color:l.color??e.ColorEnum.Primary,icon:l.icon??"mdi-map-marker",latlng:{lat:l.address.latitude,lng:l.address.longitude},onClick:b=>e.$emit("update:selectedLocationId",l.id)},null,8,["selected","label","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers","disableClusteringAtZoom"])):L("",!0)],64)):L("",!0)],512),(V=e.$props.allowedLayers)!=null&&V.length&&e.$props.allowedLayers.length>1?(c(),h(_,{key:0,layers:e.mapLayers.filter(l=>{var b;return((b=e.$props.allowedLayers)==null?void 0:b.includes(l.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[2]||(a[2]=l=>e.$emit("update:currentLayer",l))},null,8,["layers","modelValue"])):L("",!0),e.map?(c(),h(C,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(c(),h(k,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[3]||(a[3]=()=>e.map.locate())})):L("",!0),e.$props.showZoomButtons?(c(),h(w,{key:1,elevation:!0},{default:y(()=>[g(C,{gap:"0"},{default:y(()=>[g(k,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[4]||(a[4]=()=>e.map.zoomIn()),border:!1}),g(k,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[5]||(a[5]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):L("",!0)]),_:1})):L("",!0),e.$slots.overlay?(c(),h(P,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[6]||(a[6]=l=>e.$emit("update:overlayMode",l)),"onUpdate:height":a[7]||(a[7]=l=>e.overlayHeight=l),"onUpdate:width":a[8]||(a[8]=l=>e.overlayWidth=l)},{body:y(()=>[q(e.$slots,"overlay")]),_:3},8,["mode"])):L("",!0)]}),_:3},16,["width","height","style"])}const G=I(ze,[["render",$a]]);ze.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"overlay"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const In={title:"Foundation/Shared/Map",component:G,tags:["autodocs"],argTypes:{currentLayer:{control:"select",options:["map","imagery"]},overlayMode:{control:"select",options:["collapse","half","expand"]}}},J={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},ae={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},Te={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},xe={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},Pe={id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}},ka={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},W={args:{locations:[J],selectedLocationId:J.id,overlayMode:"collapse",currentLayer:"map",height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>z({components:{FSMap:G,FSRow:M},inheritAttrs:!1,setup(){return{args:e}},template:`
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
      `})},U={args:{locations:[ae,Te,xe,Pe],selectedLocationId:null,currentLayer:"imagery",overlayMode:"half"},render:e=>({components:{FSMap:G,FSFadeOut:Re,FSRow:M,FSCol:C},setup(){return{args:e}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
        <template v-slot:overlay>
          <FSRow
            padding="8px"
          >
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
    `})},H={args:{locations:[ae,Te,xe,Pe],selectedLocationId:null,currentLayer:"map"},render:e=>({components:{FSMap:G,FSFadeOut:Re,FSRow:M,FSCol:C},setup(){return{args:e}},template:`
      <FSMap
        :overlayMode="args.selectedLocationId ? 'half' : 'collapse'"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
        <template v-slot:overlay>
          <FSRow
            padding="8px"
          >
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
    `})},j={args:{locations:[J,ae],areas:[ka],selectedLocationId:null,selectedAreaId:null,overlayMode:"collapse",currentLayer:"map"},render:e=>({components:{FSMap:G,FSRow:M},setup(){return{args:e}},template:`
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
    `})},K={args:{showDialog:!1},render:e=>({components:{FSMap:G,FSDialogMultiForm:aa,FSButton:k},setup(){return{args:e}},template:`
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
    `})};var ue,pe,de;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(de=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,ce,fe;U.parameters={...U.parameters,docs:{...(me=U.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    locations: [location2, location3, location4, location5],
    selectedLocationId: null,
    currentLayer: 'imagery',
    overlayMode: 'half'
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
          <FSRow
            padding="8px"
          >
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
}`,...(fe=(ce=U.parameters)==null?void 0:ce.docs)==null?void 0:fe.source}}};var ye,ve,ge;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    locations: [location2, location3, location4, location5],
    selectedLocationId: null,
    currentLayer: 'map'
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
        :overlayMode="args.selectedLocationId ? 'half' : 'collapse'"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
        <template v-slot:overlay>
          <FSRow
            padding="8px"
          >
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
}`,...(ge=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var he,Se,Fe;j.parameters={...j.parameters,docs:{...(he=j.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Fe=(Se=j.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var Le,Me,be;K.parameters={...K.parameters,docs:{...(Le=K.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(be=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:be.source}}};const qn=["SingleLocationMap","MultiLocationMap","MultiLocationMapClick","AreaMap","MapInDialog"];export{j as AreaMap,K as MapInDialog,U as MultiLocationMap,H as MultiLocationMapClick,W as SingleLocationMap,qn as __namedExportsOrder,In as default};
