import{d as w,c as O,y as p,z as o,A as i,C as a,N as s,K as t,P as z,H as h,I as V,F as u,f as E,b as A,B as v,O as B,L as d,M as k,m as q,E as R,G}from"./vue.esm-bundler-Ddr6MgcY.js";import{F as g}from"./FSCol-D8gLxM2E.js";import{_ as F}from"./FSRow-CSQtiyAx.js";import{F as D}from"./FSText-CAGI2dEo.js";import{_}from"./FSBreadcrumbs-XvDsi0O7.js";import{_ as M}from"./FSSlideGroup-8udoapu6.js";import{_ as x}from"./FSFadeOut-B5r2PNGg.js";import{u as P,C as H}from"./useColors-DnoeDx-P.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as L}from"./FSImage-9J49soYl.js";import{F as K}from"./FSIconCard-DcSf6Mbi.js";import{s as C}from"./css-CxoeZkpP.js";import{u as ae}from"./useBreakpoints-BMg9gIvD.js";const j=w({name:"FSBaseDefaultDesktopView",components:{FSCol:g,FSRow:F,FSText:D,FSBreadcrumbs:_,FSSlideGroup:M,FSFadeOut:x},props:{title:{type:String,required:!1},breadcrumbs:{type:Array,required:!1,default:()=>[]},stickyToolbar:{type:Boolean,required:!1,default:!0},toolbarTopOffset:{type:String,required:!1,default:"72px"},stickyTitleTopOffset:{type:String,required:!1,default:"0px"}},setup(){const{getColors:e}=P();return{backgroundColor:O(()=>e(H.Background).base)}}});function te(e,f,m,S,$,c){const r=p("FSText");return o(),i(x,{height:"100%",maxHeight:"100%",scrollOutside:!1,disableTopMask:!0},{default:a(()=>[s(g,{height:"fill",gap:"0px"},{default:a(()=>[t(e.$slots,"header",{},()=>[s(F,{padding:"24px 16px 16px 24px",style:z([{position:"sticky",top:"0px","z-index":"2"},{backgroundColor:e.backgroundColor,marginTop:e.$props.stickyTitleTopOffset}])},{default:a(()=>[t(e.$slots,"title",{},()=>[s(r,{font:"text-h2"},{default:a(()=>[h(V(e.$props.title),1)]),_:1})])]),_:3},8,["style"]),e.$props.breadcrumbs&&e.$props.breadcrumbs.length>0?(o(),i(g,{key:0,padding:e.$slots.toolbar?"0px 24px 8px 24px":"0px 24px",gap:"16px"},{default:a(()=>[s(g,null,{default:a(()=>[t(e.$slots,"breadcrumbs",{},()=>[s(_,{items:e.$props.breadcrumbs},null,8,["items"])])]),_:3})]),_:3},8,["padding"])):u("",!0),e.$slots.toolbar?(o(),i(F,{key:1,padding:"0px 16px 8px 24px",style:z(e.stickyToolbar?`position: sticky; top: ${e.$props.toolbarTopOffset}; z-index: 2; background-color: ${e.backgroundColor}`:void 0)},{default:a(()=>[s(M,{width:"100%"},{default:a(()=>[t(e.$slots,"toolbar")]),_:3})]),_:3},8,["style"])):u("",!0)]),s(g,{height:"fill",padding:e.$slots.toolbar?"8px 16px 24px 24px":"16px 16px 24px 24px",gap:"0px"},{default:a(()=>[t(e.$slots,"default")]),_:3},8,["padding"])]),_:3})]),_:3})}const J=T(j,[["render",te]]);j.__docgenInfo={displayName:"FSBaseDefaultDesktopView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"breadcrumbs",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"stickyToolbar",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"toolbarTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"72px"'}},{name:"stickyTitleTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"0px"'}}],slots:[{name:"header"},{name:"title"},{name:"breadcrumbs"},{name:"toolbar"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/desktop/FSBaseDefaultDesktopView.vue"]};const Q=w({name:"FSBaseEntityDesktopView",components:{FSCol:g,FSRow:F,FSText:D,FSBaseDefaultDesktopView:J,FSImage:L,FSIconCard:K},props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},description:{type:String,required:!1},imageId:{type:String,required:!1,default:null},imageCover:{type:Boolean,required:!1,default:!0},imageSize:{type:[Array,String,Number],required:!1,default:()=>["124px","96px","80px"]},icon:{type:String,required:!1,default:"mdi-ab-testing"},iconColor:{type:String,required:!1,default:null},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},iconBorder:{type:Boolean,required:!1,default:!0},minImageSize:{type:[Array,String,Number],required:!1,default:()=>["48px","48px","48px"]}},setup(e){const f={...E()},m=A(0),S=O(()=>{const c=C(e.imageSize),r=C(e.minImageSize);return`max(calc(${c} - ${m.value}px), ${r})`}),$=c=>{const r=c.target.scrollTop,b=C(e.minImageSize),l=parseInt(b);m.value=Math.max(0,Math.min(r,l+16+24))};return delete f.title,{slots:f,onScroll:$,topOffset:m,actualImageSize:S}}});function oe(e,f,m,S,$,c){const r=p("FSImage"),b=p("FSIconCard"),l=p("FSText"),n=p("FSBaseDefaultDesktopView");return o(),i(n,{toolbarTopOffset:e.topOffset+"px",stickyTitleTopOffset:e.topOffset+"px",onScroll:e.onScroll},v({title:a(()=>[s(F,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId?t(e.$slots,"image",d(q({key:0},{actualImageSize:e.actualImageSize})),()=>[s(r,{imageId:e.$props.imageId,cover:e.$props.imageCover,height:e.actualImageSize,width:e.actualImageSize},null,8,["imageId","cover","height","width"])]):e.$props.icon?(o(),i(b,{key:1,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,iconColor:e.$props.iconColor,border:e.$props.iconBorder,size:e.actualImageSize,icon:e.$props.icon},null,8,["backgroundVariant","backgroundColor","iconColor","border","size","icon"])):u("",!0),s(g,{align:"center-left",height:"fill"},{default:a(()=>[t(e.$slots,"title",{},()=>[s(l,{font:"text-h3"},{default:a(()=>[h(V(e.$props.title),1)]),_:1}),t(e.$slots,"title-extra",d(k({topOffset:e.topOffset})),()=>[e.topOffset<60?t(e.$slots,"subtitle",{key:0},()=>[e.$props.subtitle?(o(),i(l,{key:0,font:"text-button"},{default:a(()=>[h(V(e.$props.subtitle),1)]),_:1})):u("",!0)]):u("",!0),e.topOffset<20?t(e.$slots,"description",{key:1},()=>[e.$props.description?(o(),i(l,{key:0,font:"text-body"},{default:a(()=>[h(V(e.$props.description),1)]),_:1})):u("",!0)]):u("",!0)])])]),_:3})]),_:3})]),_:2},[B(e.slots,(y,I)=>({name:I,fn:a(N=>[t(e.$slots,I,d(k(N)))])}))]),1032,["toolbarTopOffset","stickyTitleTopOffset","onScroll"])}const re=T(Q,[["render",oe]]);Q.__docgenInfo={displayName:"FSBaseEntityDesktopView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"subtitle",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"imageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["124px", "96px", "80px"]'}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"iconColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"minImageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["48px", "48px", "48px"]'}}],slots:[{name:"image",scoped:!0,bindings:[{name:"actualImageSize",title:"binding"}]},{name:"title"},{name:"title-extra",scoped:!0,bindings:[{name:"topOffset",title:"binding"}]},{name:"subtitle"},{name:"description"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/desktop/FSBaseEntityDesktopView.vue"]};const U=w({name:"FSBaseDesktopView",components:{FSBaseDefaultDesktopView:J,FSBaseEntityDesktopView:re},props:{variant:{type:String,required:!1,default:"default"}}});function ne(e,f,m,S,$,c){const r=p("FSBaseDefaultDesktopView"),b=p("FSBaseEntityDesktopView");return o(),R(G,null,[e.$props.variant==="default"?(o(),i(r,d(q({key:0},e.$attrs)),v({_:2},[B(e.$slots,(l,n)=>({name:n,fn:a(y=>[t(e.$slots,n,d(k(y)))])}))]),1040)):u("",!0),e.$props.variant==="entity"?(o(),i(b,d(q({key:1},e.$attrs)),v({_:2},[B(e.$slots,(l,n)=>({name:n,fn:a(y=>[t(e.$slots,n,d(k(y)))])}))]),1040)):u("",!0)],64)}const se=T(U,[["render",ne]]);U.__docgenInfo={displayName:"FSBaseDesktopView",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","entity"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/desktop/FSBaseDesktopView.vue"]};const W=w({name:"FSBaseDefaultDesktopView",components:{FSCol:g,FSRow:F,FSText:D,FSBreadcrumbs:_,FSSlideGroup:M,FSFadeOut:x},props:{title:{type:String,required:!1},breadcrumbs:{type:Array,required:!1,default:()=>[]},stickyToolbar:{type:Boolean,required:!1,default:!0},toolbarTopOffset:{type:String,required:!1,default:"72px"},stickyTitleTopOffset:{type:String,required:!1,default:"0px"}},setup(){const{getColors:e}=P();return{backgroundColor:O(()=>e(H.Background).base)}}});function ie(e,f,m,S,$,c){const r=p("FSText");return o(),i(x,{height:"100%",maxHeight:"100%",scrollOutside:!1,disableTopMask:!0},{default:a(()=>[s(g,{height:"fill",gap:"0px"},{default:a(()=>[t(e.$slots,"header",{},()=>[s(F,{padding:"24px 16px 16px 24px",style:z([{position:"sticky",top:"0px","z-index":"2"},{backgroundColor:e.backgroundColor,marginTop:e.$props.stickyTitleTopOffset}])},{default:a(()=>[t(e.$slots,"title",{},()=>[s(r,{font:"text-h2"},{default:a(()=>[h(V(e.$props.title),1)]),_:1})])]),_:3},8,["style"]),e.$props.breadcrumbs&&e.$props.breadcrumbs.length>0?(o(),i(g,{key:0,padding:e.$slots.toolbar?"0px 24px 8px 24px":"0px 24px",gap:"16px"},{default:a(()=>[s(g,null,{default:a(()=>[t(e.$slots,"breadcrumbs",{},()=>[s(_,{items:e.$props.breadcrumbs},null,8,["items"])])]),_:3})]),_:3},8,["padding"])):u("",!0),e.$slots.toolbar?(o(),i(F,{key:1,padding:"0px 16px 8px 24px",style:z(e.stickyToolbar?`position: sticky; top: ${e.$props.toolbarTopOffset}; z-index: 2; background-color: ${e.backgroundColor}`:void 0)},{default:a(()=>[s(M,null,{default:a(()=>[t(e.$slots,"toolbar")]),_:3})]),_:3},8,["style"])):u("",!0)]),s(g,{height:"fill",padding:e.$slots.toolbar?"8px 16px 24px 24px":"16px 16px 24px 24px",gap:"0px"},{default:a(()=>[t(e.$slots,"default")]),_:3},8,["padding"])]),_:3})]),_:3})}const X=T(W,[["render",ie]]);W.__docgenInfo={displayName:"FSBaseDefaultDesktopView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"breadcrumbs",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"stickyToolbar",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"toolbarTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"72px"'}},{name:"stickyTitleTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"0px"'}}],slots:[{name:"header"},{name:"title"},{name:"breadcrumbs"},{name:"toolbar"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/mobile/FSBaseDefaultMobileView.vue"]};const Y=w({name:"FSBaseEntityMobileView",components:{FSCol:g,FSRow:F,FSText:D,FSBaseDefaultMobileView:X,FSImage:L,FSIconCard:K},props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},description:{type:String,required:!1},imageId:{type:String,required:!1,default:null},imageCover:{type:Boolean,required:!1,default:!0},imageSize:{type:[Array,String,Number],required:!1,default:()=>["124px","96px","80px"]},icon:{type:String,required:!1,default:"mdi-ab-testing"},iconColor:{type:String,required:!1,default:null},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},iconBorder:{type:Boolean,required:!1,default:!0},minImageSize:{type:[Array,String,Number],required:!1,default:()=>["48px","48px","48px"]}},setup(e){const f={...E()},m=A(0),S=O(()=>{const c=C(e.imageSize),r=C(e.minImageSize);return`max(calc(${c} - ${m.value}px), ${r})`}),$=c=>{const r=c.target.scrollTop,b=C(e.minImageSize),l=parseInt(b);m.value=Math.max(0,Math.min(r,l+16+24))};return delete f.title,{slots:f,onScroll:$,topOffset:m,actualImageSize:S}}});function le(e,f,m,S,$,c){const r=p("FSImage"),b=p("FSIconCard"),l=p("FSText"),n=p("FSBaseDefaultMobileView");return o(),i(n,{toolbarTopOffset:e.topOffset+"px",stickyTitleTopOffset:e.topOffset+"px",onScroll:e.onScroll},v({title:a(()=>[s(F,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId?(o(),i(r,{key:0,imageId:e.$props.imageId,cover:e.$props.imageCover,height:e.actualImageSize,width:e.actualImageSize},null,8,["imageId","cover","height","width"])):e.$props.icon?(o(),i(b,{key:1,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,iconColor:e.$props.iconColor,border:e.$props.iconBorder,icon:e.$props.icon,size:e.actualImageSize},null,8,["backgroundVariant","backgroundColor","iconColor","border","icon","size"])):u("",!0),s(g,{align:"center-left",height:"fill"},{default:a(()=>[t(e.$slots,"title",{},()=>[s(l,{font:"text-h3"},{default:a(()=>[h(V(e.$props.title),1)]),_:1}),t(e.$slots,"title-extra",d(k({topOffset:e.topOffset})),()=>[t(e.$slots,"subtitle",{},()=>[e.$props.subtitle&&e.topOffset<60?(o(),i(l,{key:0,font:"text-button"},{default:a(()=>[h(V(e.$props.subtitle),1)]),_:1})):u("",!0)]),t(e.$slots,"description",{},()=>[e.$props.description&&e.topOffset<20?(o(),i(l,{key:0,font:"text-body"},{default:a(()=>[h(V(e.$props.description),1)]),_:1})):u("",!0)])])])]),_:3})]),_:3})]),_:2},[B(e.slots,(y,I)=>({name:I,fn:a(N=>[t(e.$slots,I,d(k(N)))])}))]),1032,["toolbarTopOffset","stickyTitleTopOffset","onScroll"])}const ue=T(Y,[["render",le]]);Y.__docgenInfo={displayName:"FSBaseEntityMobileView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"subtitle",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"imageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["124px", "96px", "80px"]'}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"iconColor",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"minImageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["48px", "48px", "48px"]'}}],slots:[{name:"title"},{name:"title-extra",scoped:!0,bindings:[{name:"topOffset",title:"binding"}]},{name:"subtitle"},{name:"description"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/mobile/FSBaseEntityMobileView.vue"]};const Z=w({name:"FSBaseMobileView",components:{FSBaseDefaultMobileView:X,FSBaseEntityMobileView:ue},props:{variant:{type:String,required:!1,default:"default"}}});function pe(e,f,m,S,$,c){const r=p("FSBaseDefaultMobileView"),b=p("FSBaseEntityMobileView");return o(),R(G,null,[e.$props.variant==="default"?(o(),i(r,d(q({key:0},e.$attrs)),v({_:2},[B(e.$slots,(l,n)=>({name:n,fn:a(y=>[t(e.$slots,n,d(k(y)))])}))]),1040)):u("",!0),e.$props.variant==="entity"?(o(),i(b,d(q({key:1},e.$attrs)),v({_:2},[B(e.$slots,(l,n)=>({name:n,fn:a(y=>[t(e.$slots,n,d(k(y)))])}))]),1040)):u("",!0)],64)}const de=T(Z,[["render",pe]]);Z.__docgenInfo={displayName:"FSBaseMobileView",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","entity"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/mobile/FSBaseMobileView.vue"]};const ee=w({name:"FSBaseView",components:{FSBaseDesktopView:se,FSBaseMobileView:de},props:{variant:{type:String,required:!0,default:"default"}},setup(){const{isExtraSmall:e}=ae();return{isExtraSmall:e}}});function fe(e,f,m,S,$,c){const r=p("FSBaseMobileView"),b=p("FSBaseDesktopView");return e.isExtraSmall?(o(),i(r,q({key:0,variant:e.$props.variant},e.$attrs),v({_:2},[B(e.$slots,(l,n)=>({name:n,fn:a(y=>[t(e.$slots,n,d(k(y)))])}))]),1040,["variant"])):(o(),i(b,q({key:1,variant:e.$props.variant},e.$attrs),v({_:2},[B(e.$slots,(l,n)=>({name:n,fn:a(y=>[t(e.$slots,n,d(k(y)))])}))]),1040,["variant"]))}const qe=T(ee,[["render",fe]]);ee.__docgenInfo={displayName:"FSBaseView",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","entity"],type:{name:"string"},required:!0,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSBaseView.vue"]};export{qe as F};
