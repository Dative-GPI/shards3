import{d as w,c as V,y as h,z as o,A as l,B as a,L as t,I as r,J as F,m as E,D as d,C as S,E as s,G as u,F as b,b as H,M,K as j}from"./vue.esm-bundler--l9E1zCM.js";import{_ as C}from"./FSBreadcrumbs-BXX3sqgd.js";import{F as q}from"./FSSlideGroup-CAagL5n1.js";import{F as J}from"./FSIconCard-Cv2DdZBa.js";import{F as K}from"./FSImage-D-D_UZz-.js";import{_ as B}from"./FSIcon-DBiV-GrJ.js";import{F as L}from"./FSText-CaQcclGn.js";import{_ as m}from"./FSCol-BA_LQqMv.js";import{_ as $}from"./FSRow-DW_Nd3uI.js";import{C as Q}from"./useColors-Bv0V9Qz7.js";import{u as I}from"./css-CqyMbT8T.js";import{u as R}from"./useSlots-sbMHjG0F.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as U}from"./VSpacer-CY3ZXRlU.js";import{V as W}from"./VDivider-C2h_67kI.js";import"./FSSpan-Drxl5cqQ.js";import"./color-DkN3uAGq.js";import"./theme-uJWLcFzd.js";import"./router-B0OmHOdA.js";import"./VIcon-CRzxwZ_P.js";import"./density-BES7uE0q.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./uuid-DTaye2KM.js";import"./FSButton-B-GBc2hj.js";import"./FSClickable-wwot-1GZ.js";import"./FSCard-CJMrkqFE.js";import"./VProgressCircular-DiflYTWZ.js";import"./index-U_F843Id.js";import"./display-8UJ6HxQ1.js";import"./group-DYO-GdsM.js";import"./proxiedModel-DBJRU-Dx.js";import"./locale-DRqPrS0N.js";import"./FSImageUI-0WpRmS38.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BJn24iiy.js";import"./VImg-B1oUXGM1.js";import"./dimensions-BKNjgbGk.js";import"./elevation-Cf1uc8UZ.js";import"./transition-CYrBIr8o.js";import"./index-CDY7nOpr.js";import"./index-_Z9wfsFC.js";import"./theme-DAwabHfg.js";const T=w({name:"FSEntityHeader",components:{FSBreadcrumbs:C,FSSlideGroup:q,FSIconCard:J,FSImage:K,FSIcon:B,FSText:L,FSCol:m,FSRow:$},props:{imageId:{type:String,required:!1,default:null},color:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:"mdi-ab-testing"},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColor:{type:[Array,String],required:!1,default:Q.Background},iconBorder:{type:Boolean,required:!1,default:!0},title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},breadcrumbs:{type:Array,required:!1,default:()=>[]},light:{type:Boolean,required:!1,default:!1},imageCover:{type:Boolean,required:!1,default:!0}},setup(e){const{isExtraSmall:f,isMobileSized:g}=I(),{slots:c}=R(),i=V(()=>e.light?["40px","36px"]:["124px","96px","80px"]);return{rightOverflow:V(()=>{let p=i.value[0];return f.value&&i.value[2]&&(p=i.value[2]),(f.value||g.value)&&i.value[1]&&(p=i.value[1]),p}),isExtraSmall:f,imageSize:i,slots:c}}});function X(e,f,g,c,i,y){const p=h("FSImage"),v=h("FSIconCard"),n=h("FSText");return e.isExtraSmall?(o(),l(m,{key:0,class:"f-entity-header",padding:"0 10px 0 0",align:"center-left",gap:"12px"},{default:a(()=>[t($,{align:"center-left",gap:"12px",height:e.imageSize,wrap:!1},{default:a(()=>[e.$props.imageId?r(e.$slots,"image",F(E({key:0},{imageSize:e.imageSize})),()=>[t(p,{imageId:e.$props.imageId,cover:e.imageCover,height:e.imageSize,width:e.imageSize},null,8,["imageId","cover","height","width"])]):e.$props.icon&&e.$props.color?(o(),l(B,{key:1,color:e.$props.color,icon:e.$props.icon,size:e.imageSize},null,8,["color","icon","size"])):e.$props.icon&&e.$props.iconBackgroundColor&&e.$props.iconBackgroundColor.length>0?(o(),l(v,{key:2,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColor,border:e.$props.iconBorder,icon:e.$props.icon,size:e.imageSize},null,8,["backgroundVariant","backgroundColor","border","icon","size"])):d("",!0),t(m,{align:"center-left",width:`calc(100% - ${e.rightOverflow})`},{default:a(()=>[e.$props.subtitle&&e.$props.description?(o(),S(b,{key:0},[t(n,{font:"text-h3"},{default:a(()=>[s(u(e.$props.title),1)]),_:1}),t(m,{align:"center-left",gap:"4px"},{default:a(()=>[t(n,null,{default:a(()=>[s(u(e.$props.subtitle),1)]),_:1}),t(n,{font:"text-overline"},{default:a(()=>[s(u(e.$props.description),1)]),_:1})]),_:1})],64)):e.$props.subtitle&&!e.$props.description?(o(),S(b,{key:1},[t(n,{font:"text-h3",lineClamp:2},{default:a(()=>[s(u(e.$props.title),1)]),_:1}),t(n,null,{default:a(()=>[s(u(e.$props.subtitle),1)]),_:1})],64)):!e.$props.subtitle&&e.$props.description?(o(),S(b,{key:2},[t(n,{font:"text-h3",lineClamp:2},{default:a(()=>[s(u(e.$props.title),1)]),_:1}),t(n,{font:"text-overline",lineClamp:2},{default:a(()=>[s(u(e.$props.description),1)]),_:1})],64)):(o(),l(n,{key:3,font:"text-h3",lineClamp:2},{default:a(()=>[s(u(e.$props.title),1)]),_:1}))]),_:1},8,["width"])]),_:3},8,["height"]),e.$props.light?d("",!0):(o(),S(b,{key:0},[t(C,{items:e.$props.breadcrumbs},null,8,["items"]),e.slots.toolbar?(o(),l(q,{key:0},{default:a(()=>[r(e.$slots,"toolbar")]),_:3})):d("",!0),r(e.$slots,"title-append")],64))]),_:3})):(o(),l(m,{key:1,class:"f-entity-header",padding:"0 14px 0 0",align:"center-left",gap:"16px"},{default:a(()=>[t($,{align:"center-left",gap:"16px",height:e.imageSize,wrap:!1},{default:a(()=>[e.$props.imageId?r(e.$slots,"image",F(E({key:0},{imageSize:e.imageSize})),()=>[t(p,{imageId:e.$props.imageId,cover:e.imageCover,height:e.imageSize,width:e.imageSize},null,8,["imageId","cover","height","width"])]):e.$props.icon&&e.$props.iconBackgroundColor&&e.$props.iconBackgroundColor.length>0?(o(),l(v,{key:1,iconSize:"70px",backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColor,border:e.$props.iconBorder,icon:e.$props.icon,size:e.imageSize},null,8,["backgroundVariant","backgroundColor","border","icon","size"])):e.$props.icon?(o(),l(B,{key:2,color:e.$props.color,icon:e.$props.icon,size:e.imageSize},null,8,["color","icon","size"])):d("",!0),t(m,{align:"center-left"},{default:a(()=>[t(n,{font:e.$props.light?"text-h3":"text-h2"},{default:a(()=>[s(u(e.$props.title),1)]),_:1},8,["font"]),!e.$props.light&&(e.$props.subtitle||e.$props.description)?(o(),l(m,{key:0,gap:"4px"},{default:a(()=>[e.$props.subtitle?(o(),l(n,{key:0},{default:a(()=>[s(u(e.$props.subtitle),1)]),_:1})):d("",!0),e.$props.description?(o(),l(n,{key:1,font:"text-overline",lineClamp:2},{default:a(()=>[s(u(e.$props.description),1)]),_:1})):d("",!0)]),_:1})):d("",!0)]),_:1}),e.$props.light?d("",!0):(o(),l($,{key:3,align:"center-right"},{default:a(()=>[r(e.$slots,"title-append")]),_:3}))]),_:3},8,["height"]),e.$props.light?d("",!0):(o(),S(b,{key:0},[t(C,{items:e.$props.breadcrumbs},null,8,["items"]),e.slots.toolbar?(o(),l(q,{key:0},{default:a(()=>[r(e.$slots,"toolbar")]),_:3})):d("",!0)],64))]),_:3}))}const Y=z(T,[["render",X]]);T.__docgenInfo={displayName:"FSEntityHeader",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Background"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"breadcrumbs",type:{name:"Array<FSBreadcrumbItem>"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"light",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"image",scoped:!0,bindings:[{name:"imageSize",title:"binding"}]},{name:"toolbar"},{name:"title-append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityHeader.vue"]};const D=w({name:"FSSkeletonView",setup(){const{isExtraSmall:e}=I();return{isExtraSmall:e}}});function Z(e,f,g,c,i,y){return e.isExtraSmall?(o(),l(m,{key:0,padding:"16px 4px 16px 12px",height:"100vh",gap:"16px"},{default:a(()=>[r(e.$slots,"header",{},()=>[r(e.$slots,"title",{},()=>[t($,{gap:"12px"},{default:a(()=>[r(e.$slots,"title-image"),r(e.$slots,"title-texts")]),_:3})])]),r(e.$slots,"breadcrumbs"),r(e.$slots,"toolbar"),r(e.$slots,"title-append"),r(e.$slots,"default")]),_:3})):(o(),l(m,{key:1,padding:"24px 8px 24px 24px",height:"100vh",gap:"16px"},{default:a(()=>[r(e.$slots,"header",{},()=>[r(e.$slots,"title",{},()=>[t($,{gap:"32px"},{default:a(()=>[r(e.$slots,"title-image"),r(e.$slots,"title-texts"),t(U),r(e.$slots,"title-append")]),_:3})])]),r(e.$slots,"breadcrumbs"),r(e.$slots,"toolbar"),r(e.$slots,"default")]),_:3}))}const _=z(D,[["render",Z]]);D.__docgenInfo={displayName:"FSSkeletonView",exportName:"default",description:"",tags:{},slots:[{name:"header"},{name:"title"},{name:"title-image"},{name:"title-texts"},{name:"breadcrumbs"},{name:"toolbar"},{name:"title-append"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSkeletonView.vue"]};const P=w({name:"FSEntityView",components:{FSEntityHeader:Y,FSSkeletonView:_},props:{imageId:{type:String,required:!1,default:null},imageCover:{type:Boolean,required:!1,default:!0},icon:{type:String,required:!1,default:null},color:{type:Object,required:!1,default:null},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},breadcrumbs:{type:Array,required:!1,default:()=>[]}},setup(){const{isExtraSmall:e,windowHeight:f}=I(),{slots:g}=R(),c=H(null),i=H(!1),y=V(()=>{let p=e.value?32:48;return`${f.value-p}px`});return{lightHeader:i,headerRef:c,height:y,slots:g}}});function x(e,f,g,c,i,y){const p=h("FSEntityHeader"),v=h("FSSkeletonView");return o(),l(v,null,{header:a(()=>[t(p,{ref:"headerRef",breadcrumbs:e.$props.breadcrumbs,description:e.$props.description,subtitle:e.$props.subtitle,title:e.$props.title,light:e.lightHeader,imageId:e.imageId,icon:e.$props.icon,color:e.$props.color,iconBackgroundColors:e.$props.iconBackgroundColors,imageCover:e.$props.imageCover},M({"title-append":a(()=>[r(e.$slots,"title-append")]),_:2},[e.$slots.image?{name:"image",fn:a(n=>[r(e.$slots,"image",F(j(n)))]),key:"0"}:void 0,e.slots.toolbar?{name:"toolbar",fn:a(()=>[r(e.$slots,"toolbar")]),key:"1"}:void 0]),1032,["breadcrumbs","description","subtitle","title","light","imageId","icon","color","iconBackgroundColors","imageCover"])]),default:a(()=>[r(e.$slots,"default")]),_:3})}const G=z(P,[["render",x]]);P.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorEnum | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"breadcrumbs",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}}],slots:[{name:"image",scoped:!0,bindings:[]},{name:"title-append"},{name:"toolbar"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const Qe={title:"Foundation/Shared/views/EntityView",component:G,tags:["autodocs"],argTypes:{}},k={render:()=>({components:{VDivider:W,FSEntityView:G},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;">
            <FSEntityView
                title="title"
                subtitle="subtitle"
                imageId="1"
            />
        </div>
    </div>`})};var N,A,O;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VDivider,
      FSEntityView
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;">
            <FSEntityView
                title="title"
                subtitle="subtitle"
                imageId="1"
            />
        </div>
    </div>\`
  })
}`,...(O=(A=k.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};const Ue=["Variations"];export{k as Variations,Ue as __namedExportsOrder,Qe as default};