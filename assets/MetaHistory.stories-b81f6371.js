import{j as O,d as h,w as b,I as m,J as l,Q as d,A as r,L as a,F as f,Z as w,K as E,U as q,V as k}from"./vue.esm-bundler-7c237656.js";import{_ as v}from"./lodash-569b8a6d.js";import{F as $}from"./FSDialog-3bad3a87.js";import{F as T}from"./FSButton-f0f5de23.js";import{F as H,a as F}from"./FSMetaValue-28acaafe.js";import{C as L}from"./base-cc0281c0.js";import{D as N}from"./datesTools-55be1497.js";import{S as R}from"./serviceFactory-7552fe10.js";import{C as U}from"./composableFactory-08360cd4.js";import{u as D}from"./useAppTimeZone-62c4f11c.js";import{_ as A}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as u}from"./FSCol-76ddd6d9.js";import{_ as x}from"./FSRow-0e15f868.js";import{P as j}from"./customPropertyEnums-7823143c.js";import"./_commonjsHelpers-725317a4.js";import"./FSCard-be090350.js";import"./useColors-8171fc39.js";import"./index-a0e5e2a3.js";import"./theme-6b978bcd.js";import"./css-aa928277.js";import"./FSText-c8879522.js";import"./useSlots-338ea3fb.js";import"./VDialog-ed113aaf.js";import"./VOverlay-215d3759.js";import"./forwardRefs-e658ad70.js";import"./useRender-e696dd75.js";import"./proxiedModel-255ed77f.js";import"./anchor-4da81316.js";import"./color-8b3e8a76.js";import"./dimensions-506d0d5f.js";import"./display-f7c4d7d9.js";import"./lazy-ba583f92.js";import"./locale-842c83ae.js";import"./router-0c914c7c.js";import"./scopeId-01507e41.js";import"./transition-99224378.js";import"./VDefaultsProvider-8ad05cd7.js";import"./VSpacer-5d7851f1.js";import"./FSClickable-b2b2bac7.js";import"./VProgressCircular-84d930cf.js";import"./resizeObserver-78a25be2.js";import"./VIcon-ea625dc1.js";import"./tag-d0e3859f.js";import"./FSSpan-661158f8.js";import"./FSIcon-84236a8c.js";import"./useAppOrganisationId-db575a42.js";import"./useTranslations-5148abf7.js";class B{constructor(t){this.value=t.value,this.timestamp=t.timestamp?N.utcToEpoch(t.timestamp):void 0}}const z=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Z={...R.addCustom("getMany",(e,t,o,s)=>e.get(z(t,o,s)),e=>e.map(t=>new B(t)))},J=U.custom(Z.getMany),V=O({name:"FSMetaHistory",components:{FSMetaValue:H,FSButton:T,FSDialog:$},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=D(),{fetch:o,entity:s}=J(),y=h(!1);return b(()=>e.entityId,async(c,p)=>{v.isEqual(c,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:y,epochToLongTimeFormat:t}}});function K(e,t,o,s,y,c){const p=m("FSText"),_=m("FSMetaValue"),M=m("FSDialog");return l(),d(f,null,[r(T,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(M,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(u,null,{default:a(()=>[(l(!0),d(f,null,w(e.customPropertyValues,(n,I)=>(l(),E(x,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[q(k(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(u,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(_,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const P=A(V,[["render",K]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const xe={title:"Foundation/Core/CustomProperties/MetaHistory",component:P,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:j.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:P,FSCol:u},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const je=["Variations"];export{i as Variations,je as __namedExportsOrder,xe as default};
