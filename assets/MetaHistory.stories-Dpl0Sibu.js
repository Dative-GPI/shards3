var h=Object.defineProperty;var I=(e,t,o)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>I(e,typeof t!="symbol"?t+"":t,o);import{d as E,a as w,w as $,y as l,z as u,G as f,N as r,C as n,I as F,O as q,A as k,D as v,E as H}from"./vue.esm-bundler-D3ngFwGY.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as P}from"./FSButton-D8KNVcat.js";import{F as R}from"./FSDialog-DaqgkkWF.js";import{F as D,a as g}from"./FSMetaValue-bw7HoJ2a.js";import{C as L}from"./base-DtpW3JT2.js";import{i as U}from"./datesTools-jb_azIFs.js";import{C as A}from"./composableFactory-EyPZGUD9.js";import{S as x}from"./serviceFactory-DaitGIKt.js";import{u as B}from"./useDateFormat-C9QY5oFQ.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-CVj0zcU5.js";import{_ as z}from"./FSRow-CYD73_tT.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSCard-BZyb3dNk.js";import"./useColors-B-331F-F.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./VProgressCircular-DfVaP_TZ.js";import"./color-D4nM6Ihv.js";import"./resizeObserver-D4qCRTFx.js";import"./VIcon-DBlUULm8.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSIcon-C0akNC9K.js";import"./FSText-CcQBLJU9.js";import"./VDialog-BD5hoh70.js";import"./VOverlay-CsDtmGQB.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BmbZrdih.js";import"./anchor-BMg_Hu1U.js";import"./dimensions-D-jSeqs8.js";import"./display-1bSD02Hb.js";import"./lazy-BmZjQX7F.js";import"./locale-R8GaLlvb.js";import"./router-BPv_tYld.js";import"./transition-DtcXiLpW.js";import"./VDefaultsProvider-EJiha1S2.js";import"./useAppTimeZone-Cp_499X8.js";import"./FSIconCheck-DjQiIoX0.js";import"./useAppOrganisationId-BemUUsho.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CbHleqYG.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-Dmqoe3Kp.js";class Y{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?U(t.timestamp):null}}const J=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,K={...x.addCustom("getMany",(e,t,o,i)=>e.get(J(t,o,i)),e=>e.map(t=>new Y(t)))},Q=A.custom(K.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:D,FSButton:P,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=B(),{fetch:o,entity:i}=Q(),c=w(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,i,c,d){const p=l("FSText"),_=l("FSMetaValue"),b=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("entity.custom-property.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(b,{width:"500px",label:e.$tr("entity.custom-property.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(y,null,{default:n(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(a,O)=>(u(),k(z,{key:O},{default:n(()=>[r(p,null,{default:n(()=>[v(H(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(_,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const We={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
