import{j as b,e as S,d as P,w as R,o as Ce,z as n,F as q,x as _,K as c,L as p,X as $e,Y as A,M as o,R as W,S as _e,U as be,Q as D,D as we,J as f,N as $,O as F,P as V,E as x,A as Ve,a5 as ke}from"./vue.esm-bundler-37de1696.js";import{u as Ie}from"./useSlots-1bcfd838.js";import{u as oe,C as k}from"./useColors-ba22af06.js";import{s as Te,u as qe}from"./css-b545198d.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{m as Ae,V as ee,b as De,a as te}from"./VWindowItem-d7611044.js";import{I as ne,m as Ne}from"./tag-9d688242.js";import{u as ae}from"./locale-ee313da6.js";import{u as Be}from"./proxiedModel-e8e26ca7.js";import{V as Pe}from"./VDefaultsProvider-062db757.js";import{V as Oe}from"./VBtn-fd965842.js";import{V as We,a as Ge,b as Re}from"./loader-e58dd003.js";import{p as E,e as Ue,y as Ee,V as Le,a9 as Me}from"./theme-07d11e72.js";import{g as L,u as M,m as ze}from"./useRender-ccb83440.js";import{m as je,V as re}from"./VImg-d6f10770.js";import{_ as U}from"./FSButton-74c4f4d7.js";import{F as z}from"./FSCard-40979aed.js";import{F as j}from"./FSChip-cf949cc7.js";import{F as X}from"./FSText-3a386b21.js";import{_ as I}from"./FSSpan-9700c9e2.js";import{_ as C}from"./FSCol-4074aa47.js";import{_ as y}from"./FSRow-fc81033b.js";import{u as Y}from"./useAppTimeZone-86703f1e.js";import{V as se}from"./VIcon-122293c7.js";import{V as J}from"./VMenu-7943669c.js";import{u as ue}from"./useTranslations-eec3878c.js";import{b as Xe,u as Ye}from"./color-efc02365.js";import{m as Je,u as Ke}from"./rounded-7d64095f.js";import{m as Qe,M as Ze}from"./transition-4a8f6120.js";import{F as He}from"./FSDivider-2476c175.js";import{F as xe}from"./FSImage-5c7d6db3.js";import{F as et}from"./FSTile-69b7ef10.js";var g=(e=>(e[e.None=0]="None",e[e.Pending=1]="Pending",e[e.Untriggered=2]="Untriggered",e[e.Unresolved=3]="Unresolved",e[e.Resolved=4]="Resolved",e[e.Expired=5]="Expired",e[e.Triggered=6]="Triggered",e[e.Abandoned=7]="Abandoned",e))(g||{}),B=(e=>(e[e.None=0]="None",e[e.Information=1]="Information",e[e.Warning=2]="Warning",e[e.Error=3]="Error",e))(B||{}),O=(e=>(e[e.None=0]="None",e[e.Connected=1]="Connected",e[e.PartiallyConnected=2]="PartiallyConnected",e[e.AlmostOffline=3]="AlmostOffline",e[e.Offline=4]="Offline",e))(O||{});const ie=b({name:"FSCarousel",props:{height:{type:[Array,String,Number],required:!1,default:"100%"}},setup(e){const{slots:a,getChildren:r}=Ie(),{getColors:u}=oe();delete a.default;const d=u(k.Background),i=S(()=>({"--fs-carousel-height":Te(e.height),"--fs-carousel-background-color":d.base}));return{getChildren:r,slots:a,style:i,value:(s,t)=>{var l;return((l=s==null?void 0:s.props)==null?void 0:l.value)??t}}}});const tt=E({color:String,cycle:Boolean,delimiterIcon:{type:ne,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Ae({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),rt=L()({name:"VCarousel",props:tt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:r}=a;const u=Be(e,"modelValue"),{t:d}=ae(),i=P();let m=-1;R(u,t),R(()=>e.interval,t),R(()=>e.cycle,l=>{l?t():window.clearTimeout(m)}),Ce(s);function s(){!e.cycle||!i.value||(m=window.setTimeout(i.value.group.next,+e.interval>0?+e.interval:6e3))}function t(){window.clearTimeout(m),window.requestAnimationFrame(s)}return M(()=>{const l=ee.filterProps(e);return n(ee,_({ref:i},l,{modelValue:u.value,"onUpdate:modelValue":v=>u.value=v,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Ue(e.height)},e.style]}),{default:r.default,additional:v=>{let{group:h}=v;return n(q,null,[!e.hideDelimiters&&n("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[h.items.value.length>0&&n(Pe,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[h.items.value.map((T,G)=>{const N={id:`carousel-item-${T.id}`,"aria-label":d("$vuetify.carousel.ariaLabel.delimiter",G+1,h.items.value.length),class:["v-carousel__controls__item",h.isSelected(T.id)&&"v-btn--active"],onClick:()=>h.select(T.id,!0)};return r.item?r.item({props:N,item:T}):n(Oe,_(T,N),null)})]})]),e.progress&&n(We,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(h.getItemIndex(u.value)+1)/h.items.value.length*100},null)])},prev:r.prev,next:r.next})}),{}}}),ot=E({...je(),...De()},"VCarouselItem"),nt=L()({name:"VCarouselItem",inheritAttrs:!1,props:ot(),setup(e,a){let{slots:r,attrs:u}=a;M(()=>{const d=re.filterProps(e),i=te.filterProps(e);return n(te,_({class:"v-carousel-item"},i),{default:()=>[n(re,_(u,d),r)]})})}});function at(e,a,r,u,d,i){return c(),p(rt,_({class:"fs-carousel",hideDelimiters:!0,style:e.style},e.$attrs),$e({default:o(()=>[(c(!0),D(q,null,A(e.getChildren("default"),(m,s)=>(c(),p(nt,{value:e.value(m,s),key:s},{default:o(()=>[(c(),p(we(m)))]),_:2},1032,["value"]))),128))]),_:2},[A(e.slots,(m,s)=>({name:s,fn:o(t=>[W(e.$slots,s,_e(be(t)))])}))]),1040,["style"])}const st=w(ie,[["render",at]]);ie.__docgenInfo={displayName:"FSCarousel",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number"},required:!1,defaultValue:{func:!1,value:'"100%"'}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCarousel.vue"]};const le=b({name:"FSStatusCard",components:{FSCard:z,FSChip:j,FSText:X,FSSpan:I,FSCol:C,FSRow:y},props:{modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(e){const{epochToLongTimeFormat:a}=Y();return{deviceTimestamp:S(()=>e.statusGroup.sourceTimestamp?a(e.statusGroup.sourceTimestamp):"")}}});function ut(e,a,r,u,d,i){const m=f("FSChip"),s=f("FSText"),t=f("FSCard");return c(),p(t,{elevation:!0,border:!1},{default:o(()=>[n(C,{align:"center-center",padding:"6px 24px"},{default:o(()=>[n(C,{align:"center-center",gap:"12px"},{default:o(()=>[n(m,{color:e.$props.statusGroup.color,prependIcon:e.$props.statusGroup.icon,label:e.$props.statusGroup.label},null,8,["color","prependIcon","label"]),e.$props.statusGroup.value?(c(),p(y,{key:0,width:"hug"},{default:o(()=>[n(s,{font:"text-button",color:e.$props.statusGroup.color},{default:o(()=>[$(F(e.$props.statusGroup.value)+" "+F(e.$props.statusGroup.unit),1)]),_:1},8,["color"])]),_:1})):V("",!0),e.$props.statusGroup.value&&e.$props.modelStatus.groupById&&e.$props.statusGroup.groupByValue?(c(),p(y,{key:1,width:"hug"},{default:o(()=>[n(I,null,{default:o(()=>[$(F(e.$props.modelStatus.groupByLabel)+" "+F(e.$props.statusGroup.groupByValue),1)]),_:1})]),_:1})):V("",!0)]),_:1}),e.deviceTimestamp?(c(),p(y,{key:0,width:"hug"},{default:o(()=>[n(I,{font:"text-overline"},{default:o(()=>[$(F(e.deviceTimestamp),1)]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1})}const it=w(le,[["render",ut]]);le.__docgenInfo={displayName:"FSStatusCard",exportName:"default",description:"",tags:{},props:[{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusCard.vue"]};const de=b({name:"FSColorIcon",props:{size:{type:String,required:!1,default:"m"},variant:{type:String,required:!1,default:"standard"},color:{type:String,required:!1,default:k.Dark}},setup(e){const{getColors:a}=oe(),r=S(()=>a(e.color)),u=S(()=>{switch(e.variant){case"full":return{"--fs-icon-background-color":r.value.light};default:return{"--fs-icon-background-color":"transparent"}}}),d=S(()=>{const i=[`fs-icon-${e.size}`];switch(e.variant){case"full":i.push("fs-color-icon");break}return i});return{style:u,classes:d}}});function lt(e,a,r,u,d,i){return c(),p(se,_({color:e.$props.color,class:e.classes,style:e.style},e.$attrs),{default:o(()=>[W(e.$slots,"default")]),_:3},16,["color","class","style"])}const K=w(de,[["render",lt]]);de.__docgenInfo={displayName:"FSColorIcon",exportName:"default",description:"",tags:{},props:[{name:"size",values:["s","m","l"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"m"'}},{name:"variant",values:["standard","full"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSColorIcon.vue"]};const ce=b({name:"FSStatus",components:{FSStatusCard:it,FSColorIcon:K},props:{modelStatus:{type:Object,required:!0},statusGroup:{type:Object,required:!0}},setup(){return{menu:P(!1)}}});function dt(e,a,r,u,d,i){const m=f("FSColorIcon"),s=f("FSStatusCard");return c(),p(J,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":a[0]||(a[0]=t=>e.menu=t)},{activator:o(({props:t})=>[n(m,_({size:"m",variant:"full",color:e.$props.statusGroup.color},t),{default:o(()=>[$(F(e.$props.statusGroup.icon),1)]),_:2},1040,["color"])]),default:o(()=>[n(s,{modelStatus:e.$props.modelStatus,statusGroup:e.$props.statusGroup},null,8,["modelStatus","statusGroup"])]),_:1},8,["modelValue"])}const me=w(ce,[["render",dt]]);ce.__docgenInfo={displayName:"FSStatus",exportName:"default",description:"",tags:{},props:[{name:"modelStatus",type:{name:"FSModelStatus"},required:!0},{name:"statusGroup",type:{name:"FSDeviceStatusGroup"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatus.vue"]};const pe=b({name:"FSStatusesCarousel",components:{FSCarousel:st,FSButton:U,FSStatus:me,FSRow:y},props:{modelStatuses:{type:Array,required:!0},deviceStatuses:{type:Array,required:!0}},setup(e){const a=P(0);return{ColorEnum:k,tab:a,deviceStatus:u=>{const d=e.deviceStatuses.find(i=>i.modelStatusId===u.id);return d!=null?d.statusGroups:u.showDefault?[{label:u.label,icon:u.iconDefault,color:u.colorDefault}]:[]}}}});function ct(e,a,r,u,d,i){const m=f("FSStatus"),s=f("FSCarousel");return c(),p(s,{height:["26px","20px"]},{prev:o(({props:t})=>[e.$props.modelStatuses.length>1?(c(),p(U,{key:0,variant:"icon",icon:"mdi-chevron-left",color:e.ColorEnum.Dark,onClick:t.onClick},null,8,["color","onClick"])):V("",!0)]),next:o(({props:t})=>[e.$props.modelStatuses.length>1?(c(),p(U,{key:0,variant:"icon",icon:"mdi-chevron-right",color:e.ColorEnum.Dark,onClick:t.onClick},null,8,["color","onClick"])):V("",!0)]),default:o(()=>[(c(!0),D(q,null,A(e.$props.modelStatuses,(t,l)=>(c(),p(y,{align:"center-center",width:"hug",gap:"4px",key:l,wrap:!1},{default:o(()=>[(c(!0),D(q,null,A(e.deviceStatus(t),(v,h)=>(c(),p(m,{modelStatus:t,statusGroup:v,key:h},null,8,["modelStatus","statusGroup"]))),128))]),_:2},1024))),128))]),_:1})}const mt=w(pe,[["render",ct]]);pe.__docgenInfo={displayName:"FSStatusesCarousel",exportName:"default",description:"",tags:{},props:[{name:"modelStatuses",type:{name:"FSModelStatus[]"},required:!0},{name:"deviceStatuses",type:{name:"FSDeviceStatus[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusesCarousel.vue"]};const fe=b({name:"FSConnectivityCard",components:{FSCard:z,FSChip:j,FSText:X,FSSpan:I,FSCol:C,FSRow:y},props:{deviceConnectivity:{type:Object,required:!0}},setup(e){const{epochToLongTimeFormat:a}=Y(),{$tr:r}=ue(),u=S(()=>{switch(e.deviceConnectivity.status){case O.Connected:return r("ui.connectivity-status.connected","Connected");case O.PartiallyConnected:return r("ui.connectivity-status.partially-connected","Partially connected");case O.AlmostOffline:return r("ui.connectivity-status.almost-offline","Almost offline");default:return r("ui.connectivity-status.offline","Offline")}}),d=S(()=>e.deviceConnectivity.sourceTimestamp?a(e.deviceConnectivity.sourceTimestamp):"");return{connectivityLabel:u,deviceTimestamp:d}}});function pt(e,a,r,u,d,i){const m=f("FSChip"),s=f("FSText"),t=f("FSCard");return c(),p(t,{elevation:!0,border:!1},{default:o(()=>[n(C,{align:"center-center",padding:"6px 24px"},{default:o(()=>[n(C,{align:"center-center",gap:"12px"},{default:o(()=>[n(m,{color:e.$props.deviceConnectivity.color,prependIcon:e.$props.deviceConnectivity.icon,label:e.connectivityLabel},null,8,["color","prependIcon","label"]),n(y,{width:"hug"},{default:o(()=>[n(s,null,{default:o(()=>[$(F(e.$tr("ui.shared.device-connectivity.last-message","Last message")),1)]),_:1})]),_:1})]),_:1}),e.deviceTimestamp?(c(),p(y,{key:0,width:"hug"},{default:o(()=>[n(I,{font:"text-overline"},{default:o(()=>[$(F(e.deviceTimestamp),1)]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1})}const ft=w(fe,[["render",pt]]);fe.__docgenInfo={displayName:"FSConnectivityCard",exportName:"default",description:"",tags:{},props:[{name:"deviceConnectivity",type:{name:"FSDeviceConnectivity"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSConnectivityCard.vue"]};const ve=b({name:"FSConnectivity",components:{FSConnectivityCard:ft,FSColorIcon:K},props:{deviceConnectivity:{type:Object,required:!0}},setup(){return{menu:P(!1)}}});function vt(e,a,r,u,d,i){const m=f("FSColorIcon"),s=f("FSConnectivityCard");return c(),p(J,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":a[0]||(a[0]=t=>e.menu=t)},{activator:o(({props:t})=>[n(m,_({size:"m",variant:"full",color:e.$props.deviceConnectivity.color},t),{default:o(()=>[$(F(e.$props.deviceConnectivity.icon),1)]),_:2},1040,["color"])]),default:o(()=>[n(s,{deviceConnectivity:e.$props.deviceConnectivity},null,8,["deviceConnectivity"])]),_:1},8,["modelValue"])}const gt=w(ve,[["render",vt]]);ve.__docgenInfo={displayName:"FSConnectivity",exportName:"default",description:"",tags:{},props:[{name:"deviceConnectivity",type:{name:"FSDeviceConnectivity"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSConnectivity.vue"]};const ge=b({name:"FSStatusesRow",components:{FSStatus:me,FSRow:y},props:{modelStatuses:{type:Array,required:!0},deviceStatuses:{type:Array,required:!0}},setup(e){return{deviceStatus:r=>{const u=e.deviceStatuses.find(d=>d.modelStatusId===r.id);return u!=null?u.statusGroups:r.showDefault?[{label:r.label,icon:r.iconDefault,color:r.colorDefault}]:[]}}}});function St(e,a,r,u,d,i){const m=f("FSStatus");return c(!0),D(q,null,A(e.$props.modelStatuses,(s,t)=>(c(),p(y,{align:"center-center",width:"hug",gap:"4px",key:t,wrap:!1},{default:o(()=>[(c(!0),D(q,null,A(e.deviceStatus(s),(l,v)=>(c(),p(m,{modelStatus:s,statusGroup:l,key:v},null,8,["modelStatus","statusGroup"]))),128))]),_:2},1024))),128)}const yt=w(ge,[["render",St]]);ge.__docgenInfo={displayName:"FSStatusesRow",exportName:"default",description:"",tags:{},props:[{name:"modelStatuses",type:{name:"FSModelStatus[]"},required:!0},{name:"deviceStatuses",type:{name:"FSDeviceStatus[]"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSStatusesRow.vue"]};const Se=b({name:"FSWorstAlertCard",components:{FSCard:z,FSChip:j,FSText:X,FSSpan:I,FSCol:C,FSRow:y},props:{deviceAlert:{type:Object,required:!0}},setup(e){const{epochToLongTimeFormat:a}=Y(),{$tr:r}=ue(),u=S(()=>{var s;switch((s=e.deviceAlert)==null?void 0:s.criticity){case B.Error:return k.Error;case B.Warning:return k.Warning;default:return k.Primary}}),d=S(()=>{var s;switch((s=e.deviceAlert)==null?void 0:s.status){case g.Pending:return"mdi-timer-outline";case g.Untriggered:return"mdi-timer-off-outline";case g.Unresolved:return"mdi-alert-circle-outline";case g.Resolved:return"mdi-check-circle-outline";case g.Expired:return"mdi-clock-outline";case g.Triggered:return"mdi-alert-circle-outline";case g.Abandoned:return"mdi-cancel";default:return""}}),i=S(()=>{var s;switch((s=e.deviceAlert)==null?void 0:s.status){case g.Pending:return r("ui.alert-status.pending","Pending");case g.Untriggered:return r("ui.alert-status.untriggered","Untriggered");case g.Unresolved:return r("ui.alert-status.unresolved","Unresolved");case g.Resolved:return r("ui.alert-status.resolved","Resolved");case g.Expired:return r("ui.alert-status.expired","Expired");case g.Triggered:return r("ui.alert-status.triggered","Triggered");case g.Abandoned:return r("ui.alert-status.abandoned","Abandoned");default:return""}});return{deviceTimestamp:S(()=>e.deviceAlert.sourceTimestamp?a(e.deviceAlert.sourceTimestamp):""),criticityColor:u,statusLabel:i,statusIcon:d}}});function ht(e,a,r,u,d,i){const m=f("FSChip"),s=f("FSText"),t=f("FSCard");return c(),p(t,{elevation:!0,border:!1},{default:o(()=>[n(C,{align:"center-center",padding:"6px 24px"},{default:o(()=>[n(C,{align:"center-center",gap:"12px"},{default:o(()=>[n(m,{label:e.$props.deviceAlert.label,prependIcon:e.statusIcon,color:e.criticityColor},null,8,["label","prependIcon","color"]),n(y,{width:"hug"},{default:o(()=>[n(s,null,{default:o(()=>[$(F(e.statusLabel),1)]),_:1})]),_:1})]),_:1}),e.deviceTimestamp?(c(),p(y,{key:0,width:"hug"},{default:o(()=>[n(I,{font:"text-overline"},{default:o(()=>[$(F(e.deviceTimestamp),1)]),_:1})]),_:1})):V("",!0)]),_:1})]),_:1})}const Ft=w(Se,[["render",ht]]);Se.__docgenInfo={displayName:"FSWorstAlertCard",exportName:"default",description:"",tags:{},props:[{name:"deviceAlert",type:{name:"FSDeviceAlert"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSWorstAlertCard.vue"]};const ye=b({name:"FSBadge",props:{content:{type:String,required:!1,default:null},color:{type:String,required:!1,default:k.Primary}}});const Ct=E({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:ne,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...ze(),...Ge({location:"top end"}),...Je(),...Ne(),...Ee(),...Qe({transition:"scale-rotate-transition"})},"VBadge"),$t=L()({name:"VBadge",inheritAttrs:!1,props:Ct(),setup(e,a){const{backgroundColorClasses:r,backgroundColorStyles:u}=Xe(x(e,"color")),{roundedClasses:d}=Ke(e),{t:i}=ae(),{textColorClasses:m,textColorStyles:s}=Ye(x(e,"textColor")),{themeClasses:t}=Le(),{locationStyles:l}=Re(e,!0,v=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(v)?+(e.offsetY??0):["left","right"].includes(v)?+(e.offsetX??0):0));return M(()=>{const v=Number(e.content),h=!e.max||isNaN(v)?e.content:v<=+e.max?v:`${e.max}+`,[T,G]=Me(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return n(e.tag,_({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},G,{style:e.style}),{default:()=>{var N,Q;return[n("div",{class:"v-badge__wrapper"},[(Q=(N=a.slots).default)==null?void 0:Q.call(N),n(Ze,{transition:e.transition},{default:()=>{var Z,H;return[Ve(n("span",_({class:["v-badge__badge",t.value,r.value,d.value,m.value],style:[u.value,s.value,e.inline?{}:l.value],"aria-atomic":"true","aria-label":i(e.label,v),"aria-live":"polite",role:"status"},T),[e.dot?void 0:a.slots.badge?(H=(Z=a.slots).badge)==null?void 0:H.call(Z):e.icon?n(se,{icon:e.icon},null):h]),[[ke,e.modelValue]])]}})])]}})}),{}}});function _t(e,a,r,u,d,i){return e.$props.content?(c(),p($t,{key:0,content:e.$props.content,color:e.$props.color,bordered:!0},{default:o(()=>[W(e.$slots,"default")]),_:3},8,["content","color"])):W(e.$slots,"default",{key:1})}const bt=w(ye,[["render",_t]]);ye.__docgenInfo={displayName:"FSBadge",exportName:"default",description:"",tags:{},props:[{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSBadge.vue"]};const he=b({name:"FSWorstAlert",components:{FSWorstAlertCard:Ft,FSColorIcon:K,FSBadge:bt},props:{deviceAlert:{type:Object,required:!0},deviceAlerts:{type:Number,required:!1,default:0}},setup(e){const a=P(!1),r=S(()=>{var i;switch((i=e.deviceAlert)==null?void 0:i.criticity){case B.Error:return k.Error;case B.Warning:return k.Warning;default:return k.Primary}}),u=S(()=>{var i;switch((i=e.deviceAlert)==null?void 0:i.status){case g.Pending:return"mdi-timer-outline";case g.Untriggered:return"mdi-timer-off-outline";case g.Unresolved:return"mdi-alert-circle-outline";case g.Resolved:return"mdi-check-circle-outline";case g.Expired:return"mdi-clock-outline";case g.Triggered:return"mdi-alert-circle-outline";case g.Abandoned:return"mdi-cancel";default:return""}}),d=S(()=>e.deviceAlerts<1?null:e.deviceAlerts>8?"9+":(e.deviceAlerts+1).toString());return{criticityColor:r,statusIcon:u,badgeLabel:d,menu:a}}});function wt(e,a,r,u,d,i){const m=f("FSColorIcon"),s=f("FSBadge"),t=f("FSWorstAlertCard");return c(),p(J,{closeOnContentClick:!1,modelValue:e.menu,"onUpdate:modelValue":a[0]||(a[0]=l=>e.menu=l)},{activator:o(({props:l})=>[n(s,{content:e.badgeLabel,color:e.criticityColor},{default:o(()=>[n(m,_({size:"m",variant:"full",color:e.criticityColor},l),{default:o(()=>[$(F(e.statusIcon),1)]),_:2},1040,["color"])]),_:2},1032,["content","color"])]),default:o(()=>[n(t,{deviceAlert:e.deviceAlert},null,8,["deviceAlert"])]),_:1},8,["modelValue"])}const Vt=w(he,[["render",wt]]);he.__docgenInfo={displayName:"FSWorstAlert",exportName:"default",description:"",tags:{},props:[{name:"deviceAlert",type:{name:"FSDeviceAlert"},required:!0},{name:"deviceAlerts",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/deviceOrganisations/FSWorstAlert.vue"]};const Fe=b({name:"FSDeviceOrganisationTileUI",components:{FSStatusesCarousel:mt,FSConnectivity:gt,FSStatusesRow:yt,FSWorstAlert:Vt,FSDivider:He,FSImage:xe,FSTile:et,FSSpan:I,FSCol:C,FSRow:y},props:{imageId:{type:String,required:!1,default:null},label:{type:String,required:!1,default:null},code:{type:String,required:!1,default:null},deviceConnectivity:{type:Object,required:!1,default:null},deviceWorstAlert:{type:Object,required:!1,default:null},deviceAlerts:{type:Array,required:!1,default:()=>[]},modelStatuses:{type:Array,required:!0,default:()=>[]},deviceStatuses:{type:Array,required:!0,default:()=>[]},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{isMobileSized:a}=qe(),r=S(()=>e.modelStatuses.filter(t=>!(!t.inline||t.groupById||!t.showDefault&&!e.deviceStatuses.some(l=>l.modelStatusId===t.id))).slice(0,4).sort((t,l)=>t.index-l.index)),u=S(()=>e.deviceStatuses.filter(t=>r.value.some(l=>l.id===t.modelStatusId))),d=S(()=>{const t=e.modelStatuses.filter(l=>!(!l.inline||l.groupById)).slice(0,4);return e.modelStatuses.filter(l=>!(t.some(v=>l.id===v.id)||!l.showDefault&&!e.deviceStatuses.some(v=>v.modelStatusId===l.id))).sort((l,v)=>l.index+(l.inline?v.index:0)-v.index)}),i=S(()=>e.deviceStatuses.filter(t=>d.value.some(l=>l.id===t.modelStatusId))),m=S(()=>a.value?90:100),s=S(()=>{let t=a.value?288:304;return e.imageId&&(t-=m.value),t});return{ColorEnum:k,lineModelStatuses:r,lineDeviceStatuses:u,carouselModelStatuses:d,carouselDeviceStatuses:i,imageSize:m,infoWidth:s}}});function kt(e,a,r,u,d,i){const m=f("FSConnectivity"),s=f("FSWorstAlert"),t=f("FSStatusesRow"),l=f("FSImage"),v=f("FSDivider"),h=f("FSStatusesCarousel"),T=f("FSTile");return c(),p(T,_({bottomColor:e.ColorEnum.Primary,editable:e.$props.editable,modelValue:e.$props.modelValue},e.$attrs),{default:o(()=>[n(C,{align:"center-center",width:"fill"},{default:o(()=>[n(y,{align:"center-center",gap:"24px",wrap:!1,height:e.imageSize},{default:o(()=>[n(C,{gap:"12px"},{default:o(()=>[n(C,{gap:"6px",width:e.infoWidth},{default:o(()=>[n(I,{font:"text-button",lineClamp:2},{default:o(()=>[$(F(e.$props.label),1)]),_:1}),n(I,{font:"text-overline"},{default:o(()=>[$(F(e.$props.code),1)]),_:1})]),_:1},8,["width"]),n(y,{gap:"4px"},{default:o(()=>[e.$props.deviceConnectivity?(c(),p(m,{key:0,deviceConnectivity:e.$props.deviceConnectivity},null,8,["deviceConnectivity"])):V("",!0),e.$props.deviceWorstAlert?(c(),p(s,{key:1,deviceAlert:e.$props.deviceWorstAlert,deviceAlerts:e.$props.deviceAlerts.length},null,8,["deviceAlert","deviceAlerts"])):V("",!0),n(t,{modelStatuses:e.lineModelStatuses,deviceStatuses:e.lineDeviceStatuses},null,8,["modelStatuses","deviceStatuses"])]),_:1})]),_:1}),e.$props.imageId?(c(),p(l,{key:0,imageId:e.$props.imageId,width:e.imageSize},null,8,["imageId","width"])):V("",!0)]),_:1},8,["height"]),e.carouselModelStatuses.length?(c(),D(q,{key:0},[n(v),n(h,{modelStatuses:e.carouselModelStatuses,deviceStatuses:e.carouselDeviceStatuses},null,8,["modelStatuses","deviceStatuses"])],64)):V("",!0)]),_:1})]),_:1},16,["bottomColor","editable","modelValue"])}const sr=w(Fe,[["render",kt]]);Fe.__docgenInfo={displayName:"FSDeviceOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"code",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceConnectivity",type:{name:"FSDeviceConnectivity"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceWorstAlert",type:{name:"FSDeviceAlert"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"deviceAlerts",type:{name:"FSDeviceAlert[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelStatuses",type:{name:"FSModelStatus[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"deviceStatuses",type:{name:"FSDeviceStatus[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue"]};export{sr as F};
