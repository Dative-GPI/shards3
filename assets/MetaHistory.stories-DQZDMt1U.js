var O=Object.defineProperty;var h=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>h(e,typeof t!="symbol"?t+"":t,o);import{d as E,b as w,w as q,y as l,z as u,C as f,K as r,B as a,F,P as k,A as v,E as $,G as H}from"./vue.esm-bundler-DeSao-KJ.js";import{_ as N}from"./lodash-BiW_TGGX.js";import{F as R}from"./FSDialog-CjELr4oZ.js";import{F as P}from"./FSButton-CX8bjLcP.js";import{F as L,a as g}from"./FSMetaValue-B5qUPLeC.js";import{C as U}from"./base-Db9bJp6t.js";import{b as A,u as x}from"./useAppTimeZone-B8cBFYr8.js";import{C as D}from"./composableFactory-rrf4GM2L.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as y}from"./FSCol-CA6NzDpV.js";import{_ as z}from"./FSRow-JJutUvlP.js";import{P as G}from"./customPropertyEnums-jIhOaYfs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSCard-DS_imcN3.js";import"./useColors-CSspNZdS.js";import"./index-3zl-tJp_.js";import"./theme-RQK62Xub.js";import"./css-BnhLLynS.js";import"./FSText-BmH3S0bz.js";import"./useSlots-DPxV8yUU.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./forwardRefs-DWGaNmQL.js";import"./useRender-CIdmfI-I.js";import"./proxiedModel-B9H_VIYa.js";import"./anchor-LC_hEQAj.js";import"./color-XZPyE2lN.js";import"./dimensions-aXABR5Zz.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./locale-BTkT-VzI.js";import"./router-Cr7df_Je.js";import"./transition-CTQG5_JK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./VSpacer-CFNx9InD.js";import"./FSClickable-D0rN91iS.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./FSSpan-t6bMdSRn.js";import"./FSIcon-29MaMkU3.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./useTranslations-DAApg7Ob.js";class K{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?A(t.timestamp):null}}const Y=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,Z={...B.addCustom("getMany",(e,t,o,s)=>e.get(Y(t,o,s)),e=>e.map(t=>new K(t)))},J=D.custom(Z.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:P,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:s}=J(),c=w(!1);return q(()=>e.entityId,async(d,p)=>{N.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:c,epochToLongTimeFormat:t}}});function Q(e,t,o,s,c,d){const p=l("FSText"),M=l("FSMetaValue"),b=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(b,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(y,null,{default:a(()=>[(u(!0),f(F,null,k(e.customPropertyValues,(n,I)=>(u(),v(z,{key:I},{default:a(()=>[r(p,null,{default:a(()=>[$(H(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(M,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const _=j(V,[["render",Q]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const je={title:"Foundation/Core/CustomProperties/MetaHistory",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:_,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const ze=["Variations"];export{i as Variations,ze as __namedExportsOrder,je as default};
