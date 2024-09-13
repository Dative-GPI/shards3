var I=Object.defineProperty;var O=(e,t,o)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>O(e,typeof t!="symbol"?t+"":t,o);import{d as E,b as w,w as $,y as l,z as u,C as f,L as r,B as a,F,N as q,A as k,E as v,G as H}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as P}from"./FSButton-BNq-0lOE.js";import{F as L}from"./FSDialog-GnxW2lpE.js";import{F as R,a as g}from"./FSMetaValue-Cc6c0nxw.js";import{C as U}from"./base-1FyQZYnT.js";import{i as D}from"./datesTools-BRWlXl6j.js";import{S as A}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-wHNy9kQa.js";import{u as x}from"./useDateFormat-CNSspUCn.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as y}from"./FSCol-YmDykHL-.js";import{_ as z}from"./FSRow-CVY2l52N.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-DdK5daMz.js";import"./FSCard-D-fFYNec.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./css-DLfrm0pR.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-D23Cpf0F.js";import"./VIcon-BIpY_noq.js";import"./FSText-DyldgdXP.js";import"./VSpacer-C4plVoTE.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./useAppTimeZone-D_npl1cn.js";import"./FSIconCheck-xlqwmgDt.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./useTranslations-CdSqQFV3.js";import"./useAppLanguageCode-CwkNj4O3.js";class Y{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?D(t.timestamp):null}}const J=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,K={...A.addCustom("getMany",(e,t,o,s)=>e.get(J(t,o,s)),e=>e.map(t=>new Y(t)))},Q=B.custom(K.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:R,FSButton:P,FSDialog:L},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:s}=Q(),c=w(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,s,c,d){const p=l("FSText"),M=l("FSMetaValue"),b=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("entity.custom-property.history","History"),onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)},null,8,["label"]),r(b,{width:"500px",label:e.$tr("entity.custom-property.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(y,null,{default:a(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(n,h)=>(u(),k(z,{key:h},{default:a(()=>[r(p,null,{default:a(()=>[v(H(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(M,{meta:{code:n.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const _=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const Ge={title:"Foundation/Core/CustomProperties/MetaHistory",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:_,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Ye=["Variations"];export{i as Variations,Ye as __namedExportsOrder,Ge as default};
