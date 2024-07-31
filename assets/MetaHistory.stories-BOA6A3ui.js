var O=Object.defineProperty;var h=(e,t,o)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var m=(e,t,o)=>h(e,typeof t!="symbol"?t+"":t,o);import{d as E,b as w,w as q,y as l,z as u,C as f,I as r,B as a,F,N as k,A as v,E as N,G as $}from"./vue.esm-bundler-DC82FEWN.js";import{_ as H}from"./lodash-BiW_TGGX.js";import{F as R}from"./FSDialog-CxGxw-Mi.js";import{F as P}from"./FSButton-DI_m72P8.js";import{F as L,a as g}from"./FSMetaValue-C3Leu9GF.js";import{C as U}from"./base-CMiH1YbJ.js";import{b as A,u as x}from"./useAppTimeZone-SgthjzoP.js";import{C as D}from"./composableFactory-J8cSLWf9.js";import{S as B}from"./serviceFactory-Bd5jifNi.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as y}from"./FSCol-B7HQy3FB.js";import{_ as z}from"./FSRow-DoCXWKDP.js";import{P as G}from"./customPropertyEnums-jIhOaYfs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSCard-EcIwA-Oh.js";import"./useColors-C2RWUFtR.js";import"./index-_Z9wfsFC.js";import"./theme-B5x8xkbY.js";import"./css-DYOPUjjE.js";import"./FSText-BZ0dNgPI.js";import"./useSlots-Dr5tdD4b.js";import"./VSpacer-BjECYW1K.js";import"./color-DvJT0EEa.js";import"./VDialog-BV_tmW5d.js";import"./VOverlay-QKFvvy4k.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-slW9zgh3.js";import"./anchor-C6LV5e1c.js";import"./dimensions-Dnxg3zhh.js";import"./display-B8HpKdBf.js";import"./lazy-Cw6rrZWC.js";import"./locale-BC9z6YbT.js";import"./router-DFGAHh1d.js";import"./transition-yl3lVN6J.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./FSClickable-aI6guRt-.js";import"./VProgressCircular-C-U4HXtE.js";import"./VIcon-Dc-dFojD.js";import"./FSSpan-CEjD71wr.js";import"./FSIcon-ClfMDAJS.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./useTranslations-DV-taHAL.js";class Y{constructor(t){m(this,"value");m(this,"timestamp");this.value=t.value,this.timestamp=t.timestamp?A(t.timestamp):null}}const Z=(e,t,o)=>`${U()}/custom-property-values/${encodeURIComponent(e)}/${encodeURIComponent(t)}/${encodeURIComponent(o)}`,J={...B.addCustom("getMany",(e,t,o,s)=>e.get(Z(t,o,s)),e=>e.map(t=>new Y(t)))},K=D.custom(J.getMany),V=E({name:"FSMetaHistory",components:{FSMetaValue:L,FSButton:P,FSDialog:R},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(e){const{epochToLongTimeFormat:t}=x(),{fetch:o,entity:s}=K(),c=w(!1);return q(()=>e.entityId,async(d,p)=>{H.isEqual(d,p)||await o(e.entityType,e.entityId,e.customProperty.code)},{immediate:!0}),{customPropertyValues:s,dialog:c,epochToLongTimeFormat:t}}});function Q(e,t,o,s,c,d){const p=l("FSText"),M=l("FSMetaValue"),I=l("FSDialog");return u(),f(F,null,[r(P,{prependIcon:"mdi-history",label:"history",onClick:t[0]||(t[0]=n=>e.dialog=!e.dialog)}),r(I,{title:"History",width:"500px",modelValue:e.dialog,"onUpdate:modelValue":t[1]||(t[1]=n=>e.dialog=n)},{body:a(()=>[r(y,null,{default:a(()=>[(u(!0),f(F,null,k(e.customPropertyValues,(n,b)=>(u(),v(z,{key:b},{default:a(()=>[r(p,null,{default:a(()=>[N($(e.epochToLongTimeFormat(n.timestamp)),1)]),_:2},1024),r(y,{padding:"0 8px 0 0",align:"center-right"},{default:a(()=>[r(M,{customProperty:e.$props.customProperty,meta:{code:n.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])],64)}const _=j(V,[["render",Q]]);V.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const xe={title:"Foundation/Core/CustomProperties/MetaHistory",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:G.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(e,{argTypes:t})=>({components:{FSMetaHistory:_,FSCol:y},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(T=(C=i.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const De=["Variations"];export{i as Variations,De as __namedExportsOrder,xe as default};
