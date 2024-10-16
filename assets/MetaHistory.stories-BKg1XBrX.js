var O=Object.defineProperty;var h=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>h(e,typeof t!="symbol"?t+"":t,o);import{d as E,b as w,w as $,y as l,z as u,E as f,N as r,C as a,G as F,O as q,A as H,H as k,I as v}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as P}from"./FSButton-C_Cm7MkX.js";import{F as R}from"./FSDialog-TGMlgCUy.js";import{F as L,a as g}from"./FSMetaValue-WKL3TTsH.js";import{C as U}from"./base-XmH0JLOD.js";import{i as D}from"./datesTools-CGhnvN9k.js";import{S as A}from"./serviceFactory-DAEdCiSt.js";import{C as x}from"./composableFactory-CG8osPlO.js";import{u as B}from"./useDateFormat-0HRqVufQ.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-CYWCfIBP.js";import{_ as z}from"./FSRow-CFFgZ74C.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-BQ3H9eJY.js";import"./FSCard-DwYAEOV7.js";import"./useColors-B16sP4OM.js";import"./index-_Z9wfsFC.js";import"./theme-BKYtCmay.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./VProgressCircular-cHoQoKlr.js";import"./color-DBJfw4cY.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-D2mo_-bk.js";import"./FSText-WawUBmHY.js";import"./VSpacer-y-n940VK.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-z3p0-M-h.js";import"./anchor-Cu9IQeug.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./locale-BJQwrXJ7.js";import"./router-DHMAfVHW.js";import"./transition-B83BVatf.js";import"./VDefaultsProvider-S-S54iS4.js";import"./useAppTimeZone-ByDiY2xy.js";import"./FSIconCheck-AgTypTAL.js";import"./useAppOrganisationId-C2nceDRs.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useTranslations-BehwFxDb.js";class Y{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?D(t.timestamp):null}}const J=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,K={...A.addCustom("getMany",(e,t,o,i)=>e.get(J(t,o,i)),e=>e.map(t=>new Y(t)))},Q=x.custom(K.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:P,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=B(),{fetch:o,entity:i}=Q(),c=w(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:i,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,i,c,d){const p=l("FSText"),b=l("FSMetaValue"),_=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("entity.custom-property.history","History"),onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)},null,8,["label"]),r(_,{width:"500px",label:e.$tr("entity.custom-property.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(y,null,{default:a(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(n,I)=>(u(),H(z,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[k(v(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(b,{meta:{code:n.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const Ke={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const Qe=["Variations"];export{s as Variations,Qe as __namedExportsOrder,Ke as default};
