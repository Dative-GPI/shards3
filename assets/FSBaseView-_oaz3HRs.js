import{d as q,c as O,y as u,z as o,A as r,B as a,L as i,I as t,O as z,E as h,G as V,D as g,f as E,b as A,M as v,N as B,J as m,K as k,C as R,m as I,F as G}from"./vue.esm-bundler-DjjVIdVI.js";import{F as c}from"./FSCol-TPWSQPHs.js";import{_ as F}from"./FSRow-CmD7j8Pv.js";import{F as D}from"./FSText-Der-WemT.js";import{_}from"./FSBreadcrumbs-BsrLIGZq.js";import{_ as M}from"./FSSlideGroup-CN6cFKLz.js";import{_ as x}from"./FSFadeOut-DtBOlAO7.js";import{u as P,C as H}from"./useColors-CdvgF10X.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as L}from"./FSImage-C5YJvBfA.js";import{F as J}from"./FSIconCard-B__5KBs0.js";import{s as T,u as ae}from"./css-BkQhD285.js";const K=q({name:"FSBaseDefaultDesktopView",components:{FSCol:c,FSRow:F,FSText:D,FSBreadcrumbs:_,FSSlideGroup:M,FSFadeOut:x},props:{title:{type:String,required:!1},breadcrumbs:{type:Array,required:!1,default:()=>[]},stickyToolbar:{type:Boolean,required:!1,default:!0},toolbarTopOffset:{type:String,required:!1,default:"72px"},stickyTitleTopOffset:{type:String,required:!1,default:"0px"}},setup(){const{getColors:e}=P();return{backgroundColor:O(()=>e(H.Background).base)}}});function te(e,p,d,S,$,f){const n=u("FSText");return o(),r(x,{height:"100%",maxHeight:"100%",scrollOutside:!1,disableTopMask:!0},{default:a(()=>[i(c,{height:"fill",gap:"0px"},{default:a(()=>[t(e.$slots,"header",{},()=>[i(F,{padding:"24px 16px 16px 24px",style:z([{position:"sticky",top:"0px","z-index":"1"},{backgroundColor:e.backgroundColor,marginTop:e.$props.stickyTitleTopOffset}])},{default:a(()=>[t(e.$slots,"title",{},()=>[i(n,{font:"text-h2"},{default:a(()=>[h(V(e.$props.title),1)]),_:1})])]),_:3},8,["style"]),e.$props.breadcrumbs&&e.$props.breadcrumbs.length>0?(o(),r(c,{key:0,padding:e.$slots.toolbar?"0px 24px 8px 24px":"0px 24px",gap:"16px"},{default:a(()=>[i(c,null,{default:a(()=>[t(e.$slots,"breadcrumbs",{},()=>[i(_,{items:e.$props.breadcrumbs},null,8,["items"])])]),_:3})]),_:3},8,["padding"])):g("",!0),e.$slots.toolbar?(o(),r(F,{key:1,padding:"0px 16px 8px 24px",style:z(e.stickyToolbar?`position: sticky; top: ${e.$props.toolbarTopOffset}; z-index: 1; background-color: ${e.backgroundColor}`:void 0)},{default:a(()=>[i(M,null,{default:a(()=>[t(e.$slots,"toolbar")]),_:3})]),_:3},8,["style"])):g("",!0)]),i(c,{height:"fill",padding:e.$slots.toolbar?"8px 16px 24px 24px":"16px 16px 24px 24px",gap:"0px"},{default:a(()=>[t(e.$slots,"default")]),_:3},8,["padding"])]),_:3})]),_:3})}const j=w(K,[["render",te]]);K.__docgenInfo={displayName:"FSBaseDefaultDesktopView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"breadcrumbs",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"stickyToolbar",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"toolbarTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"72px"'}},{name:"stickyTitleTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"0px"'}}],slots:[{name:"header"},{name:"title"},{name:"breadcrumbs"},{name:"toolbar"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/desktop/FSBaseDefaultDesktopView.vue"]};const Q=q({name:"FSBaseEntityDesktopView",components:{FSCol:c,FSRow:F,FSText:D,FSBaseDefaultDesktopView:j,FSImage:L,FSIconCard:J},props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},description:{type:String,required:!1},imageId:{type:String,required:!1,default:null},imageCover:{type:Boolean,required:!1,default:!0},imageSize:{type:[Array,String,Number],required:!1,default:()=>["124px","96px","80px"]},color:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:"mdi-ab-testing"},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},iconBorder:{type:Boolean,required:!1,default:!0},minImageSize:{type:[Array,String,Number],required:!1,default:()=>["48px","48px","48px"]}},setup(e){const p={...E()},d=A(0),S=O(()=>{const f=T(e.imageSize),n=T(e.minImageSize);return`max(calc(${f} - ${d.value}px), ${n})`}),$=f=>{const n=f.target.scrollTop,b=T(e.minImageSize),l=parseInt(b);d.value=Math.max(0,Math.min(n,l+16+24))};return delete p.title,{slots:p,onScroll:$,topOffset:d,actualImageSize:S}}});function oe(e,p,d,S,$,f){const n=u("FSImage"),b=u("FSIconCard"),l=u("FSText"),s=u("FSBaseDefaultDesktopView");return o(),r(s,{toolbarTopOffset:e.topOffset+"px",stickyTitleTopOffset:e.topOffset+"px",onScroll:e.onScroll},v({title:a(()=>[i(F,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId?(o(),r(n,{key:0,imageId:e.$props.imageId,cover:e.$props.imageCover,height:e.actualImageSize,width:e.actualImageSize},null,8,["imageId","cover","height","width"])):e.$props.icon?(o(),r(b,{key:1,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,border:e.$props.iconBorder,icon:e.$props.icon,iconColor:e.$props.color,size:e.actualImageSize},null,8,["backgroundVariant","backgroundColor","border","icon","iconColor","size"])):g("",!0),i(c,{align:"center-left",height:"fill"},{default:a(()=>[t(e.$slots,"title",{},()=>[i(l,{font:"text-h3"},{default:a(()=>[h(V(e.$props.title),1)]),_:1}),t(e.$slots,"title-extra",m(k({topOffset:e.topOffset})),()=>[t(e.$slots,"subtitle",{},()=>[e.$props.subtitle&&e.topOffset<60?(o(),r(l,{key:0,font:"text-button"},{default:a(()=>[h(V(e.$props.subtitle),1)]),_:1})):g("",!0)]),t(e.$slots,"description",{},()=>[e.$props.description&&e.topOffset<20?(o(),r(l,{key:0,font:"text-body"},{default:a(()=>[h(V(e.$props.description),1)]),_:1})):g("",!0)])])])]),_:3})]),_:3})]),_:2},[B(e.slots,(y,C)=>({name:C,fn:a(N=>[t(e.$slots,C,m(k(N)))])}))]),1032,["toolbarTopOffset","stickyTitleTopOffset","onScroll"])}const re=w(Q,[["render",oe]]);Q.__docgenInfo={displayName:"FSBaseEntityDesktopView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"subtitle",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"imageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["124px", "96px", "80px"]'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"minImageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["48px", "48px", "48px"]'}}],slots:[{name:"title"},{name:"title-extra",scoped:!0,bindings:[{name:"topOffset",title:"binding"}]},{name:"subtitle"},{name:"description"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/desktop/FSBaseEntityDesktopView.vue"]};const U=q({name:"FSBaseDesktopView",components:{FSBaseDefaultDesktopView:j,FSBaseEntityDesktopView:re},props:{variant:{type:String,required:!1,default:"default"}}});function ne(e,p,d,S,$,f){const n=u("FSBaseDefaultDesktopView"),b=u("FSBaseEntityDesktopView");return o(),R(G,null,[e.$props.variant==="default"?(o(),r(n,m(I({key:0},e.$attrs)),v({_:2},[B(e.$slots,(l,s)=>({name:s,fn:a(y=>[t(e.$slots,s,m(k(y)))])}))]),1040)):g("",!0),e.$props.variant==="entity"?(o(),r(b,m(I({key:1},e.$attrs)),v({_:2},[B(e.$slots,(l,s)=>({name:s,fn:a(y=>[t(e.$slots,s,m(k(y)))])}))]),1040)):g("",!0)],64)}const se=w(U,[["render",ne]]);U.__docgenInfo={displayName:"FSBaseDesktopView",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","entity"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/desktop/FSBaseDesktopView.vue"]};const W=q({name:"FSBaseDefaultDesktopView",components:{FSCol:c,FSRow:F,FSText:D,FSBreadcrumbs:_,FSSlideGroup:M,FSFadeOut:x},props:{title:{type:String,required:!1},breadcrumbs:{type:Array,required:!1,default:()=>[]},stickyToolbar:{type:Boolean,required:!1,default:!0},toolbarTopOffset:{type:String,required:!1,default:"72px"},stickyTitleTopOffset:{type:String,required:!1,default:"0px"}},setup(){const{getColors:e}=P();return{backgroundColor:O(()=>e(H.Background).base)}}});function ie(e,p,d,S,$,f){const n=u("FSText");return o(),r(x,{height:"100%",maxHeight:"100%",scrollOutside:!1,disableTopMask:!0},{default:a(()=>[i(c,{height:"fill",gap:"0px"},{default:a(()=>[t(e.$slots,"header",{},()=>[i(F,{padding:"24px 16px 16px 24px",style:z([{position:"sticky",top:"0px","z-index":"1"},{backgroundColor:e.backgroundColor,marginTop:e.$props.stickyTitleTopOffset}])},{default:a(()=>[t(e.$slots,"title",{},()=>[i(n,{font:"text-h2"},{default:a(()=>[h(V(e.$props.title),1)]),_:1})])]),_:3},8,["style"]),e.$props.breadcrumbs&&e.$props.breadcrumbs.length>0?(o(),r(c,{key:0,padding:e.$slots.toolbar?"0px 24px 8px 24px":"0px 24px",gap:"16px"},{default:a(()=>[i(c,null,{default:a(()=>[t(e.$slots,"breadcrumbs",{},()=>[i(_,{items:e.$props.breadcrumbs},null,8,["items"])])]),_:3})]),_:3},8,["padding"])):g("",!0),e.$slots.toolbar?(o(),r(F,{key:1,padding:"0px 16px 8px 24px",style:z(e.stickyToolbar?`position: sticky; top: ${e.$props.toolbarTopOffset}; z-index: 1; background-color: ${e.backgroundColor}`:void 0)},{default:a(()=>[i(M,null,{default:a(()=>[t(e.$slots,"toolbar")]),_:3})]),_:3},8,["style"])):g("",!0)]),i(c,{height:"fill",padding:e.$slots.toolbar?"8px 16px 24px 24px":"16px 16px 24px 24px",gap:"0px"},{default:a(()=>[t(e.$slots,"default")]),_:3},8,["padding"])]),_:3})]),_:3})}const X=w(W,[["render",ie]]);W.__docgenInfo={displayName:"FSBaseDefaultDesktopView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"breadcrumbs",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"stickyToolbar",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"toolbarTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"72px"'}},{name:"stickyTitleTopOffset",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"0px"'}}],slots:[{name:"header"},{name:"title"},{name:"breadcrumbs"},{name:"toolbar"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/mobile/FSBaseDefaultMobileView.vue"]};const Y=q({name:"FSBaseEntityMobileView",components:{FSCol:c,FSRow:F,FSText:D,FSBaseDefaultMobileView:X,FSImage:L,FSIconCard:J},props:{title:{type:String,required:!1},subtitle:{type:String,required:!1},description:{type:String,required:!1},imageId:{type:String,required:!1,default:null},imageCover:{type:Boolean,required:!1,default:!0},imageSize:{type:[Array,String,Number],required:!1,default:()=>["124px","96px","80px"]},color:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:"mdi-ab-testing"},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},iconBorder:{type:Boolean,required:!1,default:!0},minImageSize:{type:[Array,String,Number],required:!1,default:()=>["48px","48px","48px"]}},setup(e){const p={...E()},d=A(0),S=O(()=>{const f=T(e.imageSize),n=T(e.minImageSize);return`max(calc(${f} - ${d.value}px), ${n})`}),$=f=>{const n=f.target.scrollTop,b=T(e.minImageSize),l=parseInt(b);d.value=Math.max(0,Math.min(n,l+16+24))};return delete p.title,{slots:p,onScroll:$,topOffset:d,actualImageSize:S}}});function le(e,p,d,S,$,f){const n=u("FSImage"),b=u("FSIconCard"),l=u("FSText"),s=u("FSBaseDefaultMobileView");return o(),r(s,{toolbarTopOffset:e.topOffset+"px",stickyTitleTopOffset:e.topOffset+"px",onScroll:e.onScroll},v({title:a(()=>[i(F,{gap:"24px",wrap:!1},{default:a(()=>[e.$props.imageId?(o(),r(n,{key:0,imageId:e.$props.imageId,cover:e.$props.imageCover,height:e.actualImageSize,width:e.actualImageSize},null,8,["imageId","cover","height","width"])):e.$props.icon?(o(),r(b,{key:1,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,border:e.$props.iconBorder,icon:e.$props.icon,iconColor:e.$props.color,size:e.actualImageSize},null,8,["backgroundVariant","backgroundColor","border","icon","iconColor","size"])):g("",!0),i(c,{align:"center-left",height:"fill"},{default:a(()=>[t(e.$slots,"title",{},()=>[i(l,{font:"text-h3"},{default:a(()=>[h(V(e.$props.title),1)]),_:1}),t(e.$slots,"title-extra",m(k({topOffset:e.topOffset})),()=>[t(e.$slots,"subtitle",{},()=>[e.$props.subtitle&&e.topOffset<60?(o(),r(l,{key:0,font:"text-button"},{default:a(()=>[h(V(e.$props.subtitle),1)]),_:1})):g("",!0)]),t(e.$slots,"description",{},()=>[e.$props.description&&e.topOffset<20?(o(),r(l,{key:0,font:"text-body"},{default:a(()=>[h(V(e.$props.description),1)]),_:1})):g("",!0)])])])]),_:3})]),_:3})]),_:2},[B(e.slots,(y,C)=>({name:C,fn:a(N=>[t(e.$slots,C,m(k(N)))])}))]),1032,["toolbarTopOffset","stickyTitleTopOffset","onScroll"])}const ue=w(Y,[["render",le]]);Y.__docgenInfo={displayName:"FSBaseEntityMobileView",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string"},required:!1},{name:"subtitle",type:{name:"string"},required:!1},{name:"description",type:{name:"string"},required:!1},{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"imageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["124px", "96px", "80px"]'}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"minImageSize",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!0,value:'() => ["48px", "48px", "48px"]'}}],slots:[{name:"title"},{name:"title-extra",scoped:!0,bindings:[{name:"topOffset",title:"binding"}]},{name:"subtitle"},{name:"description"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/mobile/FSBaseEntityMobileView.vue"]};const Z=q({name:"FSBaseMobileView",components:{FSBaseDefaultMobileView:X,FSBaseEntityMobileView:ue},props:{variant:{type:String,required:!1,default:"default"}}});function pe(e,p,d,S,$,f){const n=u("FSBaseDefaultMobileView"),b=u("FSBaseEntityMobileView");return o(),R(G,null,[e.$props.variant==="default"?(o(),r(n,m(I({key:0},e.$attrs)),v({_:2},[B(e.$slots,(l,s)=>({name:s,fn:a(y=>[t(e.$slots,s,m(k(y)))])}))]),1040)):g("",!0),e.$props.variant==="entity"?(o(),r(b,m(I({key:1},e.$attrs)),v({_:2},[B(e.$slots,(l,s)=>({name:s,fn:a(y=>[t(e.$slots,s,m(k(y)))])}))]),1040)):g("",!0)],64)}const de=w(Z,[["render",pe]]);Z.__docgenInfo={displayName:"FSBaseMobileView",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","entity"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/mobile/FSBaseMobileView.vue"]};const ee=q({name:"FSBaseView",components:{FSBaseDesktopView:se,FSBaseMobileView:de},props:{variant:{type:String,required:!0,default:"default"}},setup(){const{isExtraSmall:e}=ae();return{isExtraSmall:e}}});function fe(e,p,d,S,$,f){const n=u("FSBaseMobileView"),b=u("FSBaseDesktopView");return e.isExtraSmall?(o(),r(n,I({key:0,variant:e.$props.variant},e.$attrs),v({_:2},[B(e.$slots,(l,s)=>({name:s,fn:a(y=>[t(e.$slots,s,m(k(y)))])}))]),1040,["variant"])):(o(),r(b,I({key:1,variant:e.$props.variant},e.$attrs),v({_:2},[B(e.$slots,(l,s)=>({name:s,fn:a(y=>[t(e.$slots,s,m(k(y)))])}))]),1040,["variant"]))}const Be=w(ee,[["render",fe]]);ee.__docgenInfo={displayName:"FSBaseView",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["default","entity"],type:{name:"string"},required:!0,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSBaseView.vue"]};export{Be as F};
