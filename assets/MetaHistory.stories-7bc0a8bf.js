import{f as O,j as b,w as h,D as m,E as l,H as d,M as r,G as a,J as f,V as E,F as w,K as q,L as k}from"./vue.esm-bundler-838daa40.js";import{_ as H}from"./lodash-569b8a6d.js";import{F as $}from"./FSDialog-bd7e5dc4.js";import{F as T}from"./FSButton-919146d7.js";import{F as v,a as F}from"./FSMetaValue-645c554c.js";import{C as L}from"./base-ef43f4ed.js";import{b as N,u as R}from"./useAppTimeZone-a305acc7.js";import{S as U}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-5509dfbf.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as u}from"./FSCol-44fe82a9.js";import{_ as A}from"./FSRow-753b58e5.js";import{P as j}from"./customPropertyEnums-7823143c.js";import"./_commonjsHelpers-725317a4.js";import"./FSCard-f7958fe9.js";import"./useColors-95e93720.js";import"./index-a0e5e2a3.js";import"./theme-f9f3e2d4.js";import"./css-67cfec15.js";import"./FSText-204f6595.js";import"./useSlots-6ce8c1a9.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./forwardRefs-e658ad70.js";import"./useRender-f6a4770d.js";import"./proxiedModel-3239cc3c.js";import"./anchor-dbd6e54f.js";import"./color-3e53cf3d.js";import"./dimensions-be952165.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./locale-5633e5ee.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./transition-ee4dd36d.js";import"./VDefaultsProvider-a165414e.js";import"./VSpacer-7ad9c022.js";import"./FSClickable-427d6a9e.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./FSSpan-3df08200.js";import"./FSIcon-1edeb40e.js";import"./useAppOrganisationId-ac05104a.js";import"./useTranslations-419c1021.js";class B{constructor(t){this.value=t.value,this.timestamp=t.timestamp?N(t.timestamp):null}}const z=(e,t,o)=>`${L()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,G={...U.addCustom("getMany",(e,t,o,s)=>e.get(z(t,o,s)),e=>e.map(t=>new B(t)))},J=D.custom(G.getMany),V=O({name:"FSMetaHistory",components:{FSMetaValue:v,FSButton:T,FSDialog:$},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=R(),{fetch:o,entity:s}=J(),y=b(!1);return h(()=>e.entityId,async(c,p)=>{H.isEqual(c,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:y,epochToLongTimeFormat:t}}});function K(e,t,o,s,y,c){const p=m("FSText"),_=m("FSMetaValue"),M=m("FSDialog");return l(),d(f,null,[r(T,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(M,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(u,null,{default:a(()=>[(l(!0),d(f,null,E(e.customPropertyValues,(n,I)=>(l(),w(A,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[q(k(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(u,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(_,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const P=x(V,[["render",K]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const xe={title:"Foundation/Core/CustomProperties/MetaHistory",component:P,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:j.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:P,FSCol:u},props:Object.keys(t),setup(){return{...e}},template:`
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
