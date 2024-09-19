var O=Object.defineProperty;var _=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>_(e,typeof t!="symbol"?t+"":t,o);import{d as w,b as E,w as $,z as l,A as u,D as f,v as r,C as a,F,N as q,B as v,G as H,H as k}from"./vue.esm-bundler-BwDfg4wG.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as P}from"./FSButton-jJkg4qCi.js";import{F as R}from"./FSDialog-DdBcmhOt.js";import{F as D,a as g}from"./FSMetaValue-D8Y-m8WD.js";import{C as L}from"./base-C7fpSlQX.js";import{i as U}from"./datesTools-BRWlXl6j.js";import{S as A}from"./serviceFactory-Bd5jifNi.js";import{C as B}from"./composableFactory-fou7heQy.js";import{u as x}from"./useDateFormat-B3lPS72n.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as y}from"./FSCol-BEvj3we4.js";import{F as z}from"./FSRow-k5pgBhR1.js";import{P as G}from"./customProperties-DqkON8hk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./useColors-tmPxRJAs.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./css-DTUiF03J.js";import"./VProgressCircular-CmpAWY4m.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./FSText-CwwFvnOv.js";import"./VSpacer-C5S3LEb3.js";import"./VDialog-D51psHtT.js";import"./VOverlay-DP3B0xk9.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-okNizC5Y.js";import"./anchor-0YuAsO7w.js";import"./dimensions-yOZi2HlQ.js";import"./display-DC3KmzVA.js";import"./lazy-MJJzC26k.js";import"./locale-DTc71_bq.js";import"./router-CeBnHAqN.js";import"./transition-DbaVUv7M.js";import"./VDefaultsProvider-_csoeOf7.js";import"./useAppTimeZone-8KaETkN8.js";import"./FSIconCheck-C6JxiU4A.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./useTranslations-CHmpEDXr.js";import"./useAppLanguageCode--ssgoHQ3.js";class Y{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?U(t.timestamp):null}}const J=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,K={...A.addCustom("getMany",(e,t,o,s)=>e.get(J(t,o,s)),e=>e.map(t=>new Y(t)))},Q=B.custom(K.getMany),V=w({name:"FSMetaHistory",components:{FSMetaValue:D,FSButton:P,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:s}=Q(),c=E(!1);return $(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:c,epochToLongTimeFormat:t}}});function W(e,t,o,s,c,d){const p=l("FSText"),b=l("FSMetaValue"),h=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:e.$tr("entity.custom-property.history","History"),onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)},null,8,["label"]),r(h,{width:"500px",label:e.$tr("entity.custom-property.history","History"),modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(y,null,{default:a(()=>[(u(!0),f(F,null,q(e.customPropertyValues,(n,I)=>(u(),v(z,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[H(k(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(b,{meta:{code:n.value},customProperty:e.$props.customProperty},null,8,["meta","customProperty"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["label","modelValue"])],64)}const M=j(V,[["render",W]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const Ge={title:"Foundation/Core/CustomProperties/MetaHistory",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:M,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
