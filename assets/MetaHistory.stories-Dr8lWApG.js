var O=Object.defineProperty;var I=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>I(e,typeof t!="symbol"?t+"":t,o);import{d as E,b as w,w as $,A as l,B as u,G as f,P as r,E as n,I as F,Q as q,C as k,J as v,K as H}from"./vue.esm-bundler-Zcuj-zyO.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as P}from"./FSButton-BzTwanlk.js";import{F as R}from"./FSDialog-Xj-hinzf.js";import{F as L,a as g}from"./FSMetaValue-C5eAvfOi.js";import{C as U}from"./base-DsQovONZ.js";import{i as D}from"./datesTools-CGhnvN9k.js";import{S as A}from"./serviceFactory-DTTRhbEw.js";import{C as B}from"./composableFactory-DJbHulE4.js";import{u as x}from"./useDateFormat-CYsDMoti.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-DLyNVOXQ.js";import{_ as z}from"./FSRow-4Qz6Bbpg.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./useColors-Cz5tOQmp.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSIcon-CKEWDmaC.js";import"./FSText-DqK2dTtm.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Xz4IZg0a.js";import"./anchor-BS5WaiJh.js";import"./dimensions-BWgpWc0X.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./locale-Beavd5eP.js";import"./router-DnAkll3L.js";import"./transition-shOmLEJh.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./useAppTimeZone-F2KFQp0H.js";import"./FSIconCheck-DUTkCF55.js";import"./useAppOrganisationId-HHayVd6L.js";import"./startOfWeek-uXTpkxA4.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-DjpqeQYI.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-DN7QCs30.js";class J{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?D(t.timestamp):null}}const K=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Q={...A.addCustom("getMany",(e,t,o,i)=>e.get(K(t,o,i)),e=>e.map(t=>new J(t)))},Y=B.custom(Q.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:P,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:i}=Y(),c=w(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,i,c,d){const p=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("ui.common.history","History"),onClick:t[0]||(t[0]=a=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("ui.common.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=a=>e.dialog=a)},{body:n(()=>[r(y,null,{default:n(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(a,h)=>(u(),k(z,{key:h},{default:n(()=>[r(p,null,{default:n(()=>[v(H(e.epochToLongTimeFormat(a.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[r(b,{meta:{code:a.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const We={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
