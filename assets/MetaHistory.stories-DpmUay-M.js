var I=Object.defineProperty;var O=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>O(e,typeof t!="symbol"?t+"":t,o);import{d as E,b as w,w as $,y as l,z as u,C as f,L as r,B as a,F,N as q,A as k,E as v,G as H}from"./vue.esm-bundler-DjjVIdVI.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as P}from"./FSButton-DMlgbucp.js";import{F as L}from"./FSDialog-DYDVbEcQ.js";import{F as R,a as g}from"./FSMetaValue-DKIaQewY.js";import{C as U}from"./base-LOOo-Z1R.js";import{i as D}from"./datesTools-BRWlXl6j.js";import{S as A}from"./serviceFactory-DAEdCiSt.js";import{C as B}from"./composableFactory-CNptecSH.js";import{u as x}from"./useDateFormat-C-ZOz_ut.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-TPWSQPHs.js";import{_ as z}from"./FSRow-CmD7j8Pv.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-DB3UYOUU.js";import"./FSCard-CXVJHnbm.js";import"./useColors-CdvgF10X.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./css-BkQhD285.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./FSIcon-BCbpBdVG.js";import"./VIcon-CzaRZDPI.js";import"./FSText-Der-WemT.js";import"./VSpacer-CrqXaTz-.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-G1bil5DU.js";import"./anchor-Bj7ImPZT.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./lazy-Dq_5BjJr.js";import"./locale-Dn84bpGK.js";import"./router-Cjjv2JN-.js";import"./transition-C6adUwH7.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./useAppTimeZone-oM-olaqI.js";import"./FSIconCheck-DQPhMVT4.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./useAppLanguageCode-j9rfmXXK.js";import"./useTranslations-f9CWAvtI.js";class Y{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?D(t.timestamp):null}}const J=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,K={...A.addCustom("getMany",(e,t,o,s)=>e.get(J(t,o,s)),e=>e.map(t=>new Y(t)))},Q=B.custom(K.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:R,FSButton:P,FSDialog:L},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:s}=Q(),c=w(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,s,c,d){const p=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("entity.custom-property.history","History"),onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("entity.custom-property.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(y,null,{default:a(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(n,h)=>(u(),k(z,{key:h},{default:a(()=>[r(p,null,{default:a(()=>[v(H(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(b,{meta:{code:n.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const Ye={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>`})};var S,C,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        addInInfos: true,
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Je=["Variations"];export{i as Variations,Je as __namedExportsOrder,Ye as default};
