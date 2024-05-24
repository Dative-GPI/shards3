import{j as O,d as b,w as h,I as m,J as l,M as d,A as r,L as a,F as f,Z as w,K as E,O as q,P as k}from"./vue.esm-bundler-01006032.js";import{_ as $}from"./lodash-569b8a6d.js";import{F as v}from"./FSDialog-895565bd.js";import{F as T}from"./FSButton-be94d44f.js";import{F as H,a as F}from"./FSMetaValue-4161a392.js";import{C as L}from"./base-d6256dbd.js";import{b as N,u as R}from"./useAppTimeZone-08db9497.js";import{S as U}from"./serviceFactory-7552fe10.js";import{C as A}from"./composableFactory-25aa3ef9.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as u}from"./FSCol-c97fad61.js";import{_ as D}from"./FSRow-83e75060.js";import{P as j}from"./customPropertyEnums-7823143c.js";import"./_commonjsHelpers-725317a4.js";import"./FSCard-8fcd8e1e.js";import"./useColors-13ed6ee6.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./css-279a0029.js";import"./FSText-b54d9278.js";import"./useSlots-e0d7ab7c.js";import"./VDialog-7227fab4.js";import"./VOverlay-d4d3a71f.js";import"./forwardRefs-e658ad70.js";import"./useRender-4bcbb6ac.js";import"./proxiedModel-69023448.js";import"./anchor-1cd9d9ab.js";import"./color-8c62b342.js";import"./dimensions-4232d0fa.js";import"./display-77f43728.js";import"./lazy-d0bac168.js";import"./locale-903ef8d8.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./transition-9c7eb302.js";import"./VDefaultsProvider-d99c6ff5.js";import"./VSpacer-78b81ef3.js";import"./FSClickable-a0c1e9ef.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./tag-1f5f74bd.js";import"./FSSpan-6e79caf3.js";import"./FSIcon-15b738c8.js";import"./useAppOrganisationId-2267e850.js";import"./useTranslations-e38f43a5.js";class B{constructor(t){this.value=t.value,this.timestamp=t.timestamp?N(t.timestamp):null}}const z=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Z={...U.addCustom("getMany",(e,t,o,s)=>e.get(z(t,o,s)),e=>e.map(t=>new B(t)))},J=A.custom(Z.getMany),P=O({name:"FSMetaHistory",components:{FSMetaValue:H,FSButton:T,FSDialog:v},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=R(),{fetch:o,entity:s}=J(),y=b(!1);return h(()=>e.entityId,async(c,p)=>{$.isEqual(c,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:y,epochToLongTimeFormat:t}}});function K(e,t,o,s,y,c){const p=m("FSText"),_=m("FSMetaValue"),M=m("FSDialog");return l(),d(f,null,[r(T,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(M,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(u,null,{default:a(()=>[(l(!0),d(f,null,w(e.customPropertyValues,(n,I)=>(l(),E(D,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[q(k(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(u,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(_,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const V=x(P,[["render",K]]);P.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const xe={title:"Foundation/Core/CustomProperties/MetaHistory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:j.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:V,FSCol:u},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const De=["Variations"];export{i as Variations,De as __namedExportsOrder,xe as default};
