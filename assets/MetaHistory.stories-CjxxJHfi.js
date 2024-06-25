import{d as I,b as O,w as h,y as m,z as l,C as d,K as r,B as a,F as f,P as E,A as w,E as q,G as k}from"./vue.esm-bundler-DeSao-KJ.js";import{_ as $}from"./lodash-BiW_TGGX.js";import{F as v}from"./FSDialog-CbnoWrEe.js";import{F as T}from"./FSButton-CUXN7UlR.js";import{F as H,a as F}from"./FSMetaValue-DJXezVKB.js";import{C as N}from"./base-Db9bJp6t.js";import{b as R,u as L}from"./useAppTimeZone-B8cBFYr8.js";import{C as U}from"./composableFactory-rrf4GM2L.js";import{S as A}from"./serviceFactory-Bd5jifNi.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as u}from"./FSCol-CA6NzDpV.js";import{_ as D}from"./FSRow-JJutUvlP.js";import{P as B}from"./customPropertyEnums-jIhOaYfs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSCard-B1Oet1YO.js";import"./useColors-DL92kHTE.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./css-BnhLLynS.js";import"./FSText-DFdak8tp.js";import"./useSlots-DPxV8yUU.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-CIdmfI-I.js";import"./proxiedModel-B9H_VIYa.js";import"./anchor-LC_hEQAj.js";import"./color-XZPyE2lN.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./locale-BTkT-VzI.js";import"./router-Cr7df_Je.js";import"./transition-CTQG5_JK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./VSpacer-CFNx9InD.js";import"./FSClickable-7AMX5jTq.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./FSSpan-t6bMdSRn.js";import"./FSIcon-DuYoAbGq.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./useTranslations-DAApg7Ob.js";class j{constructor(t){this.value=t.value,this.timestamp=t.timestamp?R(t.timestamp):null}}const z=(e,t,o)=>`${N()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,G={...A.addCustom("getMany",(e,t,o,s)=>e.get(z(t,o,s)),e=>e.map(t=>new j(t)))},K=U.custom(G.getMany),P=I({name:"FSMetaHistory",components:{FSMetaValue:H,FSButton:T,FSDialog:v},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=L(),{fetch:o,entity:s}=K(),y=O(!1);return h(()=>e.entityId,async(c,p)=>{$.isEqual(c,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:y,epochToLongTimeFormat:t}}});function Y(e,t,o,s,y,c){const p=m("FSText"),_=m("FSMetaValue"),M=m("FSDialog");return l(),d(f,null,[r(T,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(M,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(u,null,{default:a(()=>[(l(!0),d(f,null,E(e.customPropertyValues,(n,b)=>(l(),w(D,{key:b},{default:a(()=>[r(p,null,{default:a(()=>[q(k(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(u,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(_,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const V=x(P,[["render",Y]]);P.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const Ae={title:"Foundation/Core/CustomProperties/MetaHistory",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:B.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:F.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:F.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:V,FSCol:u},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(C=(S=i.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const xe=["Variations"];export{i as Variations,xe as __namedExportsOrder,Ae as default};
