var I=Object.defineProperty;var O=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var l=(e,t,o)=>O(e,typeof t!="symbol"?t+"":t,o);import{d as E,b as w,w as $,y as m,z as u,C as f,L as r,B as a,F,N as q,A as k,E as v,G as H}from"./vue.esm-bundler-gWFTcvUr.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as P}from"./FSButton-Gm_V1unh.js";import{F as L}from"./FSDialog-DrEKl3ft.js";import{F as R,a as g}from"./FSMetaValue-B4ze8ydH.js";import{C as U}from"./base-DV1z3red.js";import{a as A,u as D}from"./useAppTimeZone-BTXoL9eb.js";import{C as B}from"./composableFactory-CZGZ62iP.js";import{S as x}from"./serviceFactory-Bd5jifNi.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as y}from"./FSCol-DX423FHf.js";import{_ as z}from"./FSRow-Bpa2jjpJ.js";import{P as G}from"./customPropertyEnums-jIhOaYfs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./useColors-4hVwr1YC.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./css-Bc8dJONt.js";import"./VProgressCircular-DqlO5PEF.js";import"./color-CI1OEbFE.js";import"./VIcon-BiBYr0XY.js";import"./FSSpan-DK2fprHX.js";import"./useSlots-qbJuQIJ1.js";import"./FSIcon-C7-l9IT-.js";import"./FSText-BU8c-OMA.js";import"./VSpacer-DqpPKsvm.js";import"./VDialog-Dt2j2rPJ.js";import"./VOverlay-BOOfoO8K.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-ClxH85aG.js";import"./anchor-D8sPv6Az.js";import"./dimensions-CmIA1DmV.js";import"./display-DIiwMx3y.js";import"./lazy-Cvx00My1.js";import"./locale-C1ZNn_CS.js";import"./router-B2tkk-4w.js";import"./transition-14-CCvbq.js";import"./VDefaultsProvider-CYAySfh3.js";import"./useAppOrganisationId-0pTAMOfQ.js";import"./useTranslations-DebMVrXy.js";class Y{constructor(t){l(this,"value");l(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?A(t.timestamp):null}}const Z=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,J={...x.addCustom("getMany",(e,t,o,s)=>e.get(Z(t,o,s)),e=>e.map(t=>new Y(t)))},K=B.custom(J.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:R,FSButton:P,FSDialog:L},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=D(),{fetch:o,entity:s}=K(),c=w(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:c,epochToLongTimeFormat:t}}});function Q(e,t,o,s,c,d){const p=m("FSText"),M=m("FSMetaValue"),b=m("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("entity.custom-property.history","History"),onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)},null,8,["label"]),r(b,{width:"500px",label:e.$tr("entity.custom-property.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(y,null,{default:a(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(n,h)=>(u(),k(z,{key:h},{default:a(()=>[r(p,null,{default:a(()=>[v(H(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(M,{meta:{code:n.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const _=j(V,[["render",Q]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const De={title:"Foundation/Core/CustomProperties/MetaHistory",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:_,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Be=["Variations"];export{i as Variations,Be as __namedExportsOrder,De as default};
