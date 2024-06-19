import{f as O,j as b,w as h,D as m,E as l,H as d,P as r,G as a,J as f,V as E,F as w,K as q,L as k}from"./vue.esm-bundler-6f923154.js";import{_ as H}from"./lodash-569b8a6d.js";import{F as $}from"./FSDialog-289d6a40.js";import{F as T}from"./FSButton-ff673895.js";import{F as v,a as F}from"./FSMetaValue-aca517f9.js";import{C as L}from"./base-1b059240.js";import{b as N,u as R}from"./useAppTimeZone-c6cf3192.js";import{S as U}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-85dd6557.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as u}from"./FSCol-5ed907ac.js";import{_ as A}from"./FSRow-64caadb9.js";import{P as j}from"./customPropertyEnums-7823143c.js";import"./_commonjsHelpers-725317a4.js";import"./FSCard-32925b42.js";import"./useColors-9144d90e.js";import"./index-a0e5e2a3.js";import"./theme-a8226b2e.js";import"./css-0cf2e273.js";import"./FSText-eacee215.js";import"./useSlots-21493751.js";import"./VDialog-42abd477.js";import"./VOverlay-c286b1ab.js";import"./forwardRefs-e658ad70.js";import"./useRender-1cb09274.js";import"./proxiedModel-c8904091.js";import"./anchor-52e92869.js";import"./color-a262cadc.js";import"./dimensions-dec12c77.js";import"./display-1e14778f.js";import"./lazy-43993a1b.js";import"./locale-577543b5.js";import"./router-ed3d0311.js";import"./scopeId-a438f35a.js";import"./transition-e76cd387.js";import"./VDefaultsProvider-a08a9a42.js";import"./VSpacer-54f0d5ce.js";import"./FSClickable-e71ee20f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./VIcon-d1c19518.js";import"./tag-a7b67944.js";import"./FSSpan-7bb94541.js";import"./FSIcon-93774118.js";import"./useAppOrganisationId-8a611d3f.js";import"./useTranslations-59cd146d.js";class B{constructor(t){this.value=t.value,this.timestamp=t.timestamp?N(t.timestamp):null}}const z=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,G={...U.addCustom("getMany",(e,t,o,s)=>e.get(z(t,o,s)),e=>e.map(t=>new B(t)))},J=D.custom(G.getMany),P=O({name:"FSMetaHistory",components:{FSMetaValue:v,FSButton:T,FSDialog:$},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=R(),{fetch:o,entity:s}=J(),y=b(!1);return h(()=>e.entityId,async(c,p)=>{H.isEqual(c,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:y,epochToLongTimeFormat:t}}});function K(e,t,o,s,y,c){const p=m("FSText"),_=m("FSMetaValue"),M=m("FSDialog");return l(),d(f,null,[r(T,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(M,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(u,null,{default:a(()=>[(l(!0),d(f,null,E(e.customPropertyValues,(n,I)=>(l(),w(A,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[q(k(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(u,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(_,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const V=x(P,[["render",K]]);P.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const xe={title:"Foundation/Core/CustomProperties/MetaHistory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:j.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:V,FSCol:u},props:Object.keys(t),setup(){return{...e}},template:`
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
