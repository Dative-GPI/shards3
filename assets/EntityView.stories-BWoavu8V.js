import{d as E,c as B,z as C,A as o,B as i,C as r,v as n,J as a,K as w,m as D,E as m,D as S,G as p,H as u,F as v,b as T,M as Y,L as x}from"./vue.esm-bundler-BwDfg4wG.js";import{_ as I}from"./FSBreadcrumbs-CQt9HN5r.js";import{F as q}from"./FSSlideGroup-FmBZXb1C.js";import{F as _}from"./FSIconCard-B4Sv3DnZ.js";import{F as ee}from"./FSImage-CtdLuckH.js";import{F as J}from"./FSText-CwwFvnOv.js";import{F as g}from"./FSCol-BEvj3we4.js";import{F as c}from"./FSRow-k5pgBhR1.js";import{u as z}from"./css-DTUiF03J.js";import{u as K}from"./useSlots-2JqallzA.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as re}from"./VSpacer-C5S3LEb3.js";import{F as ae}from"./FSChip-kw9MOYsi.js";import{C as O}from"./useColors-tmPxRJAs.js";import{V as R}from"./VDivider-Df8VEhHG.js";import"./FSSpan-H3zJ0Cfa.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./color-BnvS3YzF.js";import"./theme-DkbGhe4v.js";import"./tag-Ceq3l71M.js";import"./router-CeBnHAqN.js";import"./density-CY8ZwxUy.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./uuid-DTaye2KM.js";import"./FSButton-jJkg4qCi.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./VProgressCircular-CmpAWY4m.js";import"./index-h4Pvk0JI.js";import"./display-DC3KmzVA.js";import"./group-Co3yQlsH.js";import"./proxiedModel-okNizC5Y.js";import"./locale-DTc71_bq.js";import"./FSImageUI-BAdgvYuR.js";import"./FSLoader-CBedVZCM.js";import"./dimensions-yOZi2HlQ.js";import"./elevation-Ba-uT6Vw.js";import"./VImg-DFtMr-E9.js";import"./transition-DbaVUv7M.js";import"./index-O1RQoaVh.js";import"./useImages-hJ8kAqsC.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";import"./index-DfSX31J9.js";import"./theme-BTQygaSM.js";const Q=E({name:"FSEntityHeader",components:{FSBreadcrumbs:I,FSSlideGroup:q,FSIconCard:_,FSImage:ee,FSText:J,FSCol:g,FSRow:c},props:{imageId:{type:String,required:!1,default:null},color:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:"mdi-ab-testing"},iconBackgroundVariant:{type:String,required:!1,default:"background"},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},iconBorder:{type:Boolean,required:!1,default:!0},title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},breadcrumbs:{type:Array,required:!1,default:()=>[]},light:{type:Boolean,required:!1,default:!1},imageCover:{type:Boolean,required:!1,default:!0}},setup(e){const{isExtraSmall:t,isMobileSized:f}=z(),{slots:y}=K(),s=B(()=>e.light?["40px","36px"]:["124px","96px","80px"]);return{rightOverflow:B(()=>{let d=s.value[0];return t.value&&s.value[2]&&(d=s.value[2]),(t.value||f.value)&&s.value[1]&&(d=s.value[1]),d}),isExtraSmall:t,imageSize:s,slots:y}}});function ne(e,t,f,y,s,b){const d=C("FSImage"),h=C("FSIconCard"),l=C("FSText");return e.isExtraSmall?(o(),i(g,{key:0,class:"f-entity-header",padding:"0 10px 0 0",align:"center-left",gap:"12px"},{default:r(()=>[n(c,{align:"center-left",gap:"12px",height:e.imageSize,wrap:!1},{default:r(()=>[e.$props.imageId?a(e.$slots,"image",w(D({key:0},{imageSize:e.imageSize})),()=>[n(d,{imageId:e.$props.imageId,cover:e.imageCover,height:e.imageSize,width:e.imageSize},null,8,["imageId","cover","height","width"])]):e.$props.icon?(o(),i(h,{key:1,backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,border:e.$props.iconBorder,icon:e.$props.icon,iconColor:e.$props.color,size:e.imageSize},null,8,["backgroundVariant","backgroundColor","border","icon","iconColor","size"])):m("",!0),n(g,{align:"center-left",width:`calc(100% - ${e.rightOverflow})`},{default:r(()=>[e.$props.subtitle&&e.$props.description?(o(),S(v,{key:0},[n(l,{font:"text-h3"},{default:r(()=>[p(u(e.$props.title),1)]),_:1}),n(g,{align:"center-left",gap:"4px"},{default:r(()=>[n(l,{font:"text-button"},{default:r(()=>[p(u(e.$props.subtitle),1)]),_:1}),n(l,{font:"text-body"},{default:r(()=>[p(u(e.$props.description),1)]),_:1})]),_:1})],64)):e.$props.subtitle&&!e.$props.description?(o(),S(v,{key:1},[n(l,{font:"text-h3",lineClamp:2},{default:r(()=>[p(u(e.$props.title),1)]),_:1}),n(l,{font:"text-button"},{default:r(()=>[p(u(e.$props.subtitle),1)]),_:1})],64)):!e.$props.subtitle&&e.$props.description?(o(),S(v,{key:2},[n(l,{font:"text-h3",lineClamp:2},{default:r(()=>[p(u(e.$props.title),1)]),_:1}),n(l,{font:"text-body",lineClamp:2},{default:r(()=>[p(u(e.$props.description),1)]),_:1})],64)):(o(),i(l,{key:3,font:"text-h3",lineClamp:2},{default:r(()=>[p(u(e.$props.title),1)]),_:1}))]),_:1},8,["width"])]),_:3},8,["height"]),e.$props.light?m("",!0):(o(),S(v,{key:0},[n(I,{items:e.$props.breadcrumbs},null,8,["items"]),e.slots.toolbar?(o(),i(q,{key:0},{default:r(()=>[a(e.$slots,"toolbar")]),_:3})):m("",!0),a(e.$slots,"title-append")],64))]),_:3})):(o(),i(g,{key:1,class:"f-entity-header",padding:"0 14px 0 0",align:"center-left",gap:"16px"},{default:r(()=>[n(c,{align:"center-left",gap:"16px",height:e.imageSize,wrap:!1},{default:r(()=>[e.$props.imageId?a(e.$slots,"image",w(D({key:0},{imageSize:e.imageSize})),()=>[n(d,{imageId:e.$props.imageId,cover:e.imageCover,height:e.imageSize,width:e.imageSize},null,8,["imageId","cover","height","width"])]):e.$props.icon?(o(),i(h,{key:1,iconSize:"70px",backgroundVariant:e.$props.iconBackgroundVariant,backgroundColor:e.$props.iconBackgroundColors,border:e.$props.iconBorder,iconColor:e.$props.color,icon:e.$props.icon,size:e.imageSize},null,8,["backgroundVariant","backgroundColor","border","iconColor","icon","size"])):m("",!0),n(g,{align:"center-left"},{default:r(()=>[n(l,{font:e.$props.light?"text-h3":"text-h2"},{default:r(()=>[p(u(e.$props.title),1)]),_:1},8,["font"]),!e.$props.light&&(e.$props.subtitle||e.$props.description)?(o(),i(g,{key:0,gap:"4px"},{default:r(()=>[e.$props.subtitle?(o(),i(l,{key:0,font:"text-button"},{default:r(()=>[p(u(e.$props.subtitle),1)]),_:1})):m("",!0),e.$props.description?(o(),i(l,{key:1,font:"text-body",lineClamp:2},{default:r(()=>[p(u(e.$props.description),1)]),_:1})):m("",!0)]),_:1})):m("",!0),a(e.$slots,"header-append")]),_:3}),e.$props.light?m("",!0):(o(),i(c,{key:2,align:"center-right"},{default:r(()=>[a(e.$slots,"title-append")]),_:3}))]),_:3},8,["height"]),e.$props.light?m("",!0):(o(),S(v,{key:0},[n(I,{items:e.$props.breadcrumbs},null,8,["items"]),e.slots.toolbar?(o(),i(q,{key:0},{default:r(()=>[a(e.$slots,"toolbar")]),_:3})):m("",!0)],64))]),_:3}))}const oe=A(Q,[["render",ne]]);Q.__docgenInfo={displayName:"FSEntityHeader",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-ab-testing"'}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBorder",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"breadcrumbs",type:{name:"Array<FSBreadcrumbItem>"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"light",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],slots:[{name:"image",scoped:!0,bindings:[{name:"imageSize",title:"binding"}]},{name:"toolbar"},{name:"title-append"},{name:"header-append"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityHeader.vue"]};const U=E({name:"FSSkeletonView",setup(){const{isExtraSmall:e}=z();return{isExtraSmall:e}}});function te(e,t,f,y,s,b){return e.isExtraSmall?(o(),i(g,{key:0,padding:"16px 4px 16px 12px",height:"100%",gap:"16px"},{default:r(()=>[a(e.$slots,"header",{},()=>[a(e.$slots,"title",{},()=>[n(c,{gap:"12px"},{default:r(()=>[a(e.$slots,"title-image"),a(e.$slots,"title-texts")]),_:3})])]),a(e.$slots,"breadcrumbs"),a(e.$slots,"toolbar"),a(e.$slots,"title-append"),a(e.$slots,"default")]),_:3})):(o(),i(g,{key:1,padding:"24px 8px 24px 24px",height:"100vh",gap:"16px"},{default:r(()=>[a(e.$slots,"header",{},()=>[a(e.$slots,"title",{},()=>[n(c,{gap:"32px"},{default:r(()=>[a(e.$slots,"title-image"),a(e.$slots,"title-texts"),n(re),a(e.$slots,"title-append")]),_:3})])]),a(e.$slots,"breadcrumbs"),a(e.$slots,"toolbar"),a(e.$slots,"default")]),_:3}))}const ie=A(U,[["render",te]]);U.__docgenInfo={displayName:"FSSkeletonView",exportName:"default",description:"",tags:{},slots:[{name:"header"},{name:"title"},{name:"title-image"},{name:"title-texts"},{name:"breadcrumbs"},{name:"toolbar"},{name:"title-append"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSSkeletonView.vue"]};const X=E({name:"FSEntityView",components:{FSEntityHeader:oe,FSSkeletonView:ie},props:{imageId:{type:String,required:!1,default:null},imageCover:{type:Boolean,required:!1,default:!0},icon:{type:String,required:!1,default:null},color:{type:Object,required:!1,default:null},iconBackgroundColors:{type:Array,required:!1,default:()=>[]},title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},breadcrumbs:{type:Array,required:!1,default:()=>[]},iconBackgroundVariant:{type:String,required:!1,default:"background"}},setup(){const{isExtraSmall:e,windowHeight:t}=z(),{slots:f}=K(),y=T(null),s=T(!1),b=B(()=>{let d=e.value?32:48;return`${t.value-d}px`});return{lightHeader:s,headerRef:y,height:b,slots:f}}});function le(e,t,f,y,s,b){const d=C("FSEntityHeader"),h=C("FSSkeletonView");return o(),i(h,null,{header:r(()=>[n(d,{ref:"headerRef",breadcrumbs:e.$props.breadcrumbs,description:e.$props.description,subtitle:e.$props.subtitle,title:e.$props.title,light:e.lightHeader,imageId:e.imageId,iconBackgroundVariant:e.$props.iconBackgroundVariant,icon:e.$props.icon,color:e.$props.color,iconBackgroundColors:e.$props.iconBackgroundColors,imageCover:e.$props.imageCover},Y({"title-append":r(()=>[a(e.$slots,"title-append")]),"header-append":r(()=>[a(e.$slots,"header-append")]),_:2},[e.$slots.image?{name:"image",fn:r(l=>[a(e.$slots,"image",w(x(l)))]),key:"0"}:void 0,e.slots.toolbar?{name:"toolbar",fn:r(()=>[a(e.$slots,"toolbar")]),key:"1"}:void 0]),1032,["breadcrumbs","description","subtitle","title","light","imageId","iconBackgroundVariant","icon","color","iconBackgroundColors","imageCover"])]),default:r(()=>[a(e.$slots,"default")]),_:3})}const V=A(X,[["render",le]]);X.__docgenInfo={displayName:"FSEntityView",exportName:"default",description:"",tags:{},props:[{name:"imageId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"imageCover",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorEnum | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"iconBackgroundColors",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"breadcrumbs",type:{name:"FSBreadcrumbItem[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"iconBackgroundVariant",values:["background","standard","full","gradient"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"background"'}}],slots:[{name:"image",scoped:!0,bindings:[]},{name:"title-append"},{name:"toolbar"},{name:"header-append"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/views/FSEntityView.vue"]};const or={title:"Foundation/Shared/views/EntityView",component:V,tags:["autodocs"],argTypes:{}},$={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:"Description d'un four Mizar sous Lorem Ipsum en maquettes.",imageId:"1",imageCover:!0,icon:"mdi-chemical-weapon",color:O.Primary,iconBackgroundColors:void 0},render:(e,{argTypes:t})=>({components:{VDivider:R,FSEntityView:V},props:Object.keys(t),setup(){return{args:e}},template:`
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
    </div>`})},k={args:{title:"MIZAR CDC",subtitle:"93000000000000128751",description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:O.Primary,iconBackgroundColors:void 0},render:(e,{argTypes:t})=>({components:{VDivider:R,FSEntityView:V},props:Object.keys(t),setup(){return{args:e}},template:`
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
    </div>`})},F={args:{title:"MIZAR CDC With a longer title",subtitle:null,description:null,imageId:null,imageCover:!0,icon:"mdi-chemical-weapon",color:O.Error,iconBackgroundColors:["#A0FFA0","#A0A0FF"],iconBackgroundVariant:"gradient"},render:(e,{argTypes:t})=>({components:{VDivider:R,FSEntityView:V,FSCol:g,FSText:J,FSRow:c,FSChip:ae},props:Object.keys(t),setup(){return{args:e}},template:`
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
        >
          <template #title-append>
            Slot Header Append
          </template>
          <template #header-append>
            <FSCol
              gap="4px"
            >
              <FSText
                font="text-"
              >
                ORION EVO
              </FSText>
              <FSRow>
                <FSChip
                  v-for="i in 3"
                  :key="i"
                  :label="'Chip ' + i"
                />
              </FSRow>
            </FSCol>
          </template>
        </FSEntityView>
      </div>
    </div>`})};var H,N,M;$.parameters={...$.parameters,docs:{...(H=$.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(N=$.parameters)==null?void 0:N.docs)==null?void 0:M.source}}};var j,P,Z;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(Z=(P=k.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var L,G,W;F.parameters={...F.parameters,docs:{...(L=F.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      FSEntityView,
      FSCol,
      FSText,
      FSRow,
      FSChip
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
        >
          <template #title-append>
            Slot Header Append
          </template>
          <template #header-append>
            <FSCol
              gap="4px"
            >
              <FSText
                font="text-"
              >
                ORION EVO
              </FSText>
              <FSRow>
                <FSChip
                  v-for="i in 3"
                  :key="i"
                  :label="'Chip ' + i"
                />
              </FSRow>
            </FSCol>
          </template>
        </FSEntityView>
      </div>
    </div>\`
  })
}`,...(W=(G=F.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};const tr=["Default","Variation1","Variation2"];export{$ as Default,k as Variation1,F as Variation2,tr as __namedExportsOrder,or as default};
