var O=Object.defineProperty;var I=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>I(e,typeof t!="symbol"?t+"":t,o);import{d as w,b as E,w as $,A as l,F as f,P as r,D as n,H as F,I as u,Q as q,B as H,J as k,K as v}from"./vue.esm-bundler-0BaZj8Cy.js";import{_ as N}from"./lodash-BrWYvtk2.js";import{F as P}from"./FSButton-BDSx2V0J.js";import{F as R}from"./FSDialog-Bmc4x6qR.js";import{F as D,a as g}from"./FSMetaValue-4AbZoM30.js";import{C as L}from"./base-KmQLDroH.js";import{i as U}from"./datesTools-CGhnvN9k.js";import{S as A}from"./serviceFactory-qtdw0UKd.js";import{C as B}from"./composableFactory-K8W9GIHH.js";import{u as x}from"./useDateFormat-BwdEXDwr.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-D35grUmj.js";import{_ as z}from"./FSRow-CAJM3FZ0.js";import{P as J}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSCard-Dlw97Dqr.js";import"./useColors-SBQj5l4a.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./VProgressCircular-NnNXhC5D.js";import"./color-v9Utm2wX.js";import"./resizeObserver-EZycJKNh.js";import"./VIcon-_OtdNVUv.js";import"./FSSpan-BhEzkP-a.js";import"./useSlots-16D6Zf08.js";import"./FSIcon-BwW5Hq8i.js";import"./FSText-BhZd10FY.js";import"./VDialog-cy2cAeAj.js";import"./VOverlay-CTri8YxJ.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-gKZvE0id.js";import"./anchor-B7sx4vRv.js";import"./dimensions-BEVfeJxO.js";import"./display-w-mPL_cH.js";import"./scopeId-DtuQcaKf.js";import"./locale-CUGdfosF.js";import"./router-DTj21Dkp.js";import"./transition-CCJeTa-A.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./useAppTimeZone-DjPZmopE.js";import"./FSIconCheck-TjtW5gGb.js";import"./useAppOrganisationId-C2_s9Mh4.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DX4nWmzx.js";import"./useTranslations-DJOHKWsD.js";class K{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?U(t.timestamp):null}}const Q=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Y={...A.addCustom("getMany",(e,t,o,i)=>e.get(Q(t,o,i)),e=>e.map(t=>new K(t)))},G=B.custom(Y.getMany),V=w({name:"FSMetaHistory",components:{FSMetaValue:D,FSButton:P,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:i}=G(),c=E(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,i,c,d){const p=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(y,null,{default:n(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(a,h)=>(u(),H(z,{key:h},{default:n(()=>[r(p,null,{default:n(()=>[k(v(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const We={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:J.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>`})};var S,C,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    args: {
      customProperty: {
        id: "1",
        code: "code",
        label: "Number",
        categoryLabel: "Category",
        index: 0,
        entity: 1,
        dataType: PropertyDataType.Number,
        readOnlyCore: false,
        readOnlyAdmin: false,
        defaultValue: "",
        history: false,
        historySize: 0,
        colorful: true,
        colorMap: [{
          priority: 1,
          filterType: FilterType.MoreOrEqual,
          filterValues: [5],
          color: "#0000FF"
        }, {
          priority: 2,
          filterType: FilterType.MoreOrEqual,
          filterValues: [50],
          color: "#FF0000"
        }],
        useOnlyAllowedValues: false,
        allowedValues: {}
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSMetaHistory,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>\`
  })
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Xe=["Variations"];export{s as Variations,Xe as __namedExportsOrder,We as default};
