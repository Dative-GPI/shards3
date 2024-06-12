import{f as O,j as b,w as h,D as m,E as l,H as d,P as r,G as a,J as f,V as E,F as w,K as q,L as k}from"./vue.esm-bundler-f632b118.js";import{_ as H}from"./lodash-569b8a6d.js";import{F as $}from"./FSDialog-f76245ee.js";import{F as T}from"./FSButton-08a91e21.js";import{F as v,a as F}from"./FSMetaValue-714a42e4.js";import{C as L}from"./base-dd7352d9.js";import{b as N,u as R}from"./useAppTimeZone-3909e5e4.js";import{S as U}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-0b8943d1.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as u}from"./FSCol-606e8271.js";import{_ as A}from"./FSRow-76f4ad1e.js";import{P as j}from"./customPropertyEnums-7823143c.js";import"./_commonjsHelpers-725317a4.js";import"./FSCard-491552ba.js";import"./useColors-5866e399.js";import"./index-a0e5e2a3.js";import"./theme-7fcd5c30.js";import"./css-185b4786.js";import"./FSText-09696756.js";import"./useSlots-de625f75.js";import"./VDialog-27cf76eb.js";import"./VOverlay-a0789f47.js";import"./forwardRefs-e658ad70.js";import"./useRender-e08116dd.js";import"./proxiedModel-4a0e4d22.js";import"./anchor-559036f7.js";import"./color-8a5e0dbc.js";import"./dimensions-655ad4fc.js";import"./display-30d3fe94.js";import"./lazy-8330b208.js";import"./locale-4446cda9.js";import"./router-6bfee84c.js";import"./scopeId-20568aca.js";import"./transition-c0ed457c.js";import"./VDefaultsProvider-e2787342.js";import"./VSpacer-f52c9222.js";import"./FSClickable-4011125f.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./VIcon-31ae1cc1.js";import"./tag-f52d5248.js";import"./FSSpan-4ac1bb71.js";import"./FSIcon-8032a9d1.js";import"./useAppOrganisationId-0d113abb.js";import"./useTranslations-f6aba3ae.js";class B{constructor(t){this.value=t.value,this.timestamp=t.timestamp?N(t.timestamp):null}}const z=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,G={...U.addCustom("getMany",(e,t,o,s)=>e.get(z(t,o,s)),e=>e.map(t=>new B(t)))},J=D.custom(G.getMany),P=O({name:"FSMetaHistory",components:{FSMetaValue:v,FSButton:T,FSDialog:$},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=R(),{fetch:o,entity:s}=J(),y=b(!1);return h(()=>e.entityId,async(c,p)=>{H.isEqual(c,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:y,epochToLongTimeFormat:t}}});function K(e,t,o,s,y,c){const p=m("FSText"),_=m("FSMetaValue"),M=m("FSDialog");return l(),d(f,null,[r(T,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(M,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(u,null,{default:a(()=>[(l(!0),d(f,null,E(e.customPropertyValues,(n,I)=>(l(),w(A,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[q(k(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(u,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(_,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const V=x(P,[["render",K]]);P.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const xe={title:"Foundation/Core/CustomProperties/MetaHistory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:j.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:V,FSCol:u},props:Object.keys(t),setup(){return{...e}},template:`
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>`})};var g,S,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Ae=["Variations"];export{i as Variations,Ae as __namedExportsOrder,xe as default};
