import{d as E,c as B,y as k,z as n,A as i,B as r,L as o,I as a,J as I,m as T,D as m,C as v,E as u,G as d,F as $,b as M,M as X,K as Y}from"./vue.esm-bundler-DjjVIdVI.js";import{_ as w}from"./FSBreadcrumbs-D_dqsjr7.js";import{F as q}from"./FSSlideGroup-DKSfq5sV.js";import{F as x}from"./FSIconCard-tavJNE6X.js";import{F as _}from"./FSImage-CVDbXXAf.js";import{F as ee}from"./FSText-BrySk5Rp.js";import{F as g}from"./FSCol-TPWSQPHs.js";import{F as y}from"./FSRow-CpogXLW8.js";import{u as z}from"./css-BkQhD285.js";import{u as J}from"./useSlots-DzSo5JdB.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as re}from"./VSpacer-CrqXaTz-.js";import{C as D}from"./useColors-DQIAXgK6.js";import{V as O}from"./VDivider-B14F5Dqy.js";import"./FSSpan-D1pceTli.js";import"./FSIcon-8gYhOFD7.js";import"./VIcon-CzaRZDPI.js";import"./color-BKGJvBEr.js";import"./theme-v7reDO7s.js";import"./tag-DT601Ssr.js";import"./router-Cjjv2JN-.js";import"./density-BPFRY_Tg.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./uuid-DTaye2KM.js";import"./FSButton-CzHpksPi.js";import"./FSClickable-Cug_zuK9.js";import"./FSCard-C5xnaBLp.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./index-DOC0sH28.js";import"./display-CRYv_UDL.js";import"./locale-Dn84bpGK.js";import"./FSImageUI-CoAqXOd_.js";import"./FSLoader-BqeDhDy7.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./VImg-IVf3xxVd.js";import"./transition-C6adUwH7.js";import"./index-Cc8xmT7Y.js";import"./useImages-CfONFoOj.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-D0eCIUsD.js";import"./index-_Z9wfsFC.js";import"./theme-B9e2ZH_T.js";const K=E({name:"FSEntityHeader",components:{FSBreadcrumbs:w,FSSlideGroup:q,FSIconCard:x,FSImage:_,FSText:ee,FSCol:g,FSRow:y},props:{imageId:{type:String,required:!1,default:null},color:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:"mdi-ab-testing"},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},iconBorder:{type:Boolean,required:!1,default:!0},title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},breadcrumbs:{type:Array,required:!1,default:()=>[]},light:{type:Boolean,required:!1,default:!1},imageCover:{type:Boolean,required:!1,default:!0}},setup(e){const{isExtraSmall:t,isMobileSized:c}=z(),{slots:f}=J(),s=B(()=>e.light?["40px","36px"]:["124px","96px","80px"]);return{rightOverflow:B(()=>{let p=s.value[0];return t.value&&s.value[2]&&(p=s.value[2]),(t.value||c.value)&&s.value[1]&&(p=s.value[1]),p}),isExtraSmall:t,imageSize:s,slots:f}}});function ae(e,t,c,f,s,b){const p=k("FSImage"),C=k("FSIconCard"),l=k("FSText");return e.isExtraSmall?(n(),i(g,{key:0,class:"f-entity-header",padding:"0 10px 0 0",align:"center-left",gap:"12px"},{default:r(()=>[o(y,{align:"center-left",gap:"12px",height:e.imageSize,wrap:!1},{default:r(()=>[e.$props.imageId?a(e.$slots,"image",I(T({key:0},{imageSize:e.imageSize})),()=>[o(p,{imageId:e.$props.imageId,cover:e.imageCover,height:e.imageSize,width:e.imageSize},null,8,["imageId","cover","height","width"])]):e.$props.icon?(n(),i(C,{key:1,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,border:e.$props.iconBorder,icon:e.$props.icon,iconColor:e.$props.color,size:e.imageSize},null,8,["backgroundVariant","backgroundColor","border","icon","iconColor","size"])):m("",!0),o(g,{align:"center-left",width:`calc(100% - ${e.rightOverflow})`},{default:r(()=>[e.$props.subtitle&&e.$props.description?(n(),v($,{key:0},[o(l,{font:"text-h3"},{default:r(()=>[u(d(e.$props.title),1)]),_:1}),o(g,{align:"center-left",gap:"4px"},{default:r(()=>[o(l,{font:"text-button"},{default:r(()=>[u(d(e.$props.subtitle),1)]),_:1}),o(l,{font:"text-body"},{default:r(()=>[u(d(e.$props.description),1)]),_:1})]),_:1})],64)):e.$props.subtitle&&!e.$props.description?(n(),v($,{key:1},[o(l,{font:"text-h3",lineClamp:2},{default:r(()=>[u(d(e.$props.title),1)]),_:1}),o(l,{font:"text-button"},{default:r(()=>[u(d(e.$props.subtitle),1)]),_:1})],64)):!e.$props.subtitle&&e.$props.description?(n(),v($,{key:2},[o(l,{font:"text-h3",lineClamp:2},{default:r(()=>[u(d(e.$props.title),1)]),_:1}),o(l,{font:"text-body",lineClamp:2},{default:r(()=>[u(d(e.$props.description),1)]),_:1})],64)):(n(),i(l,{key:3,font:"text-h3",lineClamp:2},{default:r(()=>[u(d(e.$props.title),1)]),_:1}))]),_:1},8,["width"])]),_:3},8,["height"]),e.$props.light?m("",!0):(n(),v($,{key:0},[o(w,{items:e.$props.breadcrumbs},null,8,["items"]),e.slots.toolbar?(n(),i(q,{key:0},{default:r(()=>[a(e.$slots,"toolbar")]),_:3})):m("",!0),a(e.$slots,"title-append")],64))]),_:3})):(n(),i(g,{key:1,class:"f-entity-header",padding:"0 14px 0 0",align:"center-left",gap:"16px"},{default:r(()=>[o(y,{align:"center-left",gap:"16px",height:e.imageSize,wrap:!1},{default:r(()=>[e.$props.imageId?a(e.$slots,"image",I(T({key:0},{imageSize:e.imageSize})),()=>[o(p,{imageId:e.$props.imageId,cover:e.imageCover,height:e.imageSize,width:e.imageSize},null,8,["imageId","cover","height","width"])]):e.$props.icon?(n(),i(C,{key:1,iconSize:"70px",backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,border:e.$props.iconBorder,iconColor:e.$props.color,icon:e.$props.icon,size:e.imageSize},null,8,["backgroundVariant","backgroundColor","border","iconColor","icon","size"])):m("",!0),o(g,{align:"center-left"},{default:r(()=>[o(l,{font:e.$props.light?"text-h3":"text-h2"},{default:r(()=>[u(d(e.$props.title),1)]),_:1},8,["font"]),!e.$props.light&&(e.$props.subtitle||e.$props.description)?(n(),i(g,{key:0,gap:"4px"},{default:r(()=>[e.$props.subtitle?(n(),i(l,{key:0,font:"text-button"},{default:r(()=>[u(d(e.$props.subtitle),1)]),_:1})):m("",!0),e.$props.description?(n(),i(l,{key:1,font:"text-body",lineClamp:2},{default:r(()=>[u(d(e.$props.description),1)]),_:1})):m("",!0)]),_:1})):m("",!0)]),_:1}),e.$props.light?m("",!0):(n(),i(y,{key:2,align:"center-right"},{default:r(()=>[a(e.$slots,"title-append")]),_:3}))]),_:3},8,["height"]),e.$props.light?m("",!0):(n(),v($,{key:0},[o(w,{items:e.$props.breadcrumbs},null,8,["items"]),e.slots.toolbar?(n(),i(q,{key:0},{default:r(()=>[a(e.$slots,"toolbar")]),_:3})):m("",!0)],64))]),_:3}))}const oe=A(K,[["render",ae]]);K.__docgenInfo={displayName:"FSEntityHeader",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"breadcrumbs",type:{name:"Array<FSBreadcrumbItem>"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"light",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"image",scoped:!0,bindings:[{name:"imageSize",title:"binding"}]},{name:"toolbar"},{name:"title-append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityHeader.vue"]};const Q=E({name:"FSSkeletonView",setup(){const{isExtraSmall:e}=z();return{isExtraSmall:e}}});function ne(e,t,c,f,s,b){return e.isExtraSmall?(n(),i(g,{key:0,padding:"16px 4px 16px 12px",height:"100%",gap:"16px"},{default:r(()=>[a(e.$slots,"header",{},()=>[a(e.$slots,"title",{},()=>[o(y,{gap:"12px"},{default:r(()=>[a(e.$slots,"title-image"),a(e.$slots,"title-texts")]),_:3})])]),a(e.$slots,"breadcrumbs"),a(e.$slots,"toolbar"),a(e.$slots,"title-append"),a(e.$slots,"default")]),_:3})):(n(),i(g,{key:1,padding:"24px 8px 24px 24px",height:"100vh",gap:"16px"},{default:r(()=>[a(e.$slots,"header",{},()=>[a(e.$slots,"title",{},()=>[o(y,{gap:"32px"},{default:r(()=>[a(e.$slots,"title-image"),a(e.$slots,"title-texts"),o(re),a(e.$slots,"title-append")]),_:3})])]),a(e.$slots,"breadcrumbs"),a(e.$slots,"toolbar"),a(e.$slots,"default")]),_:3}))}const te=A(Q,[["render",ne]]);Q.__docgenInfo={displayName:"FSSkeletonView",exportName:"default",description:"",tags:{},slots:[{name:"header"},{name:"title"},{name:"title-image"},{name:"title-texts"},{name:"breadcrumbs"},{name:"toolbar"},{name:"title-append"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSkeletonView.vue"]};const U=E({name:"FSEntityView",components:{FSEntityHeader:oe,FSSkeletonView:te},props:{imageId:{type:String,required:!1,default:null},imageCover:{type:Boolean,required:!1,default:!0},icon:{type:String,required:!1,default:null},color:{type:Object,required:!1,default:null},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},breadcrumbs:{type:Array,required:!1,default:()=>[]},iconBackgroundVariant:{type:String,required:!1,default:"background"}},setup(){const{isExtraSmall:e,windowHeight:t}=z(),{slots:c}=J(),f=M(null),s=M(!1),b=B(()=>{let p=e.value?32:48;return`${t.value-p}px`});return{lightHeader:s,headerRef:f,height:b,slots:c}}});function ie(e,t,c,f,s,b){const p=k("FSEntityHeader"),C=k("FSSkeletonView");return n(),i(C,null,{header:r(()=>[o(p,{ref:"headerRef",breadcrumbs:e.$props.breadcrumbs,description:e.$props.description,subtitle:e.$props.subtitle,title:e.$props.title,light:e.lightHeader,imageId:e.imageId,iconBackgroundVariant:e.$props.iconBackgroundVariant,icon:e.$props.icon,color:e.$props.color,iconBackgroundColors:e.$props.iconBackgroundColors,imageCover:e.$props.imageCover},X({"title-append":r(()=>[a(e.$slots,"title-append")]),_:2},[e.$slots.image?{name:"image",fn:r(l=>[a(e.$slots,"image",I(Y(l)))]),key:"0"}:void 0,e.slots.toolbar?{name:"toolbar",fn:r(()=>[a(e.$slots,"toolbar")]),key:"1"}:void 0]),1032,["breadcrumbs","description","subtitle","title","light","imageId","iconBackgroundVariant","icon","color","iconBackgroundColors","imageCover"])]),default:r(()=>[a(e.$slots,"default")]),_:3})}const F=A(U,[["render",ie]]);U.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorEnum | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"breadcrumbs",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}}],slots:[{name:"image",scoped:!0,bindings:[]},{name:"title-append"},{name:"toolbar"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const nr={title:"Foundation/Shared/views/EntityView",component:F,tags:["autodocs"],argTypes:{}},S={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:"Description d'un four Mizar sous Lorem Ipsum en maquettes.",imageId:"1",imageCover:!0,icon:"mdi-chemical-weapon",color:D.Primary,iconBackgroundColors:void 0},render:(e,{argTypes:t})=>({components:{VDivider:O,FSEntityView:F},props:Object.keys(t),setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>`})},h={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:D.Primary,iconBackgroundColors:void 0},render:(e,{argTypes:t})=>({components:{VDivider:O,FSEntityView:F},props:Object.keys(t),setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>`})},V={args:{title:"MIZAR CDC With a longer title",subtitle:null,description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:D.Error,iconBackgroundColors:["#A0FFA0","#A0A0FF"],iconBackgroundVariant:"gradient"},render:(e,{argTypes:t})=>({components:{VDivider:O,FSEntityView:F},props:Object.keys(t),setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
          :iconBackgroundVariant="args.iconBackgroundVariant"
        />
      </div>
    </div>`})};var R,H,N;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: 'Description d\\'un four Mizar sous Lorem Ipsum en maquettes.',
    imageId: '1',
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VDivider,
      FSEntityView
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>\`
  })
}`,...(N=(H=S.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var j,P,Z;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VDivider,
      FSEntityView
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>\`
  })
}`,...(Z=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var L,G,W;V.parameters={...V.parameters,docs:{...(L=V.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'MIZAR CDC With a longer title',
    subtitle: null,
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Error,
    iconBackgroundColors: ['#A0FFA0', '#A0A0FF'],
    iconBackgroundVariant: 'gradient'
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      VDivider,
      FSEntityView
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
          :iconBackgroundVariant="args.iconBackgroundVariant"
        />
      </div>
    </div>\`
  })
}`,...(W=(G=V.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const tr=["Default","Variation1","Variation2"];export{S as Default,h as Variation1,V as Variation2,tr as __namedExportsOrder,nr as default};
