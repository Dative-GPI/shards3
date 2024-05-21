import{j as I,d as h,w as O,I as l,J as u,Q as f,A as e,L as n,F,Z as b,K as w,U as E,V as q}from"./vue.esm-bundler-7c237656.js";import{_ as v}from"./lodash-569b8a6d.js";import{F as $}from"./FSDialog-b202173f.js";import{F as V}from"./FSButton-2de03eb9.js";import{F as k,a as g}from"./FSMetaValue-776fed36.js";import{C as H}from"./base-cc0281c0.js";import{D as L}from"./datesTools-55be1497.js";import{S as N}from"./serviceFactory-7552fe10.js";import{C as R}from"./composableFactory-08360cd4.js";import{u as U}from"./useAppTimeZone-62c4f11c.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as y}from"./FSCol-76ddd6d9.js";import{_ as A}from"./FSRow-0e15f868.js";import{P as x}from"./customPropertyEnums-7823143c.js";import"./_commonjsHelpers-725317a4.js";import"./FSCard-c7069f2a.js";import"./useColors-0c4b5dc8.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./css-aa928277.js";import"./FSText-fda370f0.js";import"./useSlots-338ea3fb.js";import"./VDialog-618a6f28.js";import"./VOverlay-a23169e8.js";import"./forwardRefs-e658ad70.js";import"./useRender-e0e7d9de.js";import"./proxiedModel-6d49c8c9.js";import"./loader-a7579223.js";import"./color-8a2bce37.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./tag-7dab75b7.js";import"./locale-ebeae402.js";import"./rounded-a3086a85.js";import"./dimensions-cb2de721.js";import"./display-e291008d.js";import"./lazy-43d2ae38.js";import"./router-7c03489e.js";import"./scopeId-296238e6.js";import"./transition-e42cd317.js";import"./VDefaultsProvider-82c11bd7.js";import"./VSpacer-84430db1.js";import"./FSClickable-e8caff35.js";import"./FSSpan-661158f8.js";import"./FSIcon-5ad13b7e.js";import"./FSSwitch-28fd68a6.js";import"./useRules-30f7bcaa.js";import"./index-09a2de27.js";import"./VInput-eed42ecd.js";import"./density-a5226544.js";import"./VSelectionControl-6d75a1db.js";import"./index-521b9cff.js";import"./VLabel-236d5849.js";import"./FSIconField-5f485d9d.js";import"./FSToggleSet-aa995028.js";import"./FSSlideGroup-4ae088dc.js";import"./FSButtonNextIcon-0ce6717c.js";import"./VSlideGroup-5e88f18e.js";import"./goto-527c7407.js";import"./group-3855ab92.js";import"./FSWrapGroup-37c801a8.js";import"./FSTextField-413ac9ce.js";import"./VField-86f2cf98.js";import"./VTextField-a5016bbb.js";import"./index-2b139d8d.js";import"./FSSelectField-96856ed9.js";import"./FSDialogMenu-b6d68568.js";import"./FSRadioGroup-3ba4b727.js";import"./FSCheckbox-da06ce33.js";import"./FSFadeOut-e9437c53.js";import"./useDebounce-3b8c8385.js";import"./VSelect-735dad66.js";import"./VMenu-2484e62c.js";import"./ssrBoot-ce89aa70.js";import"./border-e24af5bf.js";import"./elevation-785d47fb.js";import"./VImg-f2bb9819.js";import"./VDivider-5d036829.js";import"./FSDateTimeField-39a88a14.js";import"./FSCalendar-06af2df8.js";import"./VLocaleProvider-ebab5d08.js";import"./date-b97c4eea.js";import"./VBtn-fdffead2.js";import"./FSWindow-15ce3fe2.js";import"./FSClock-57ca32dd.js";import"./FSSlider-6aed59a1.js";import"./VSlider-a354f8be.js";import"./useAppOrganisationId-db575a42.js";import"./useTranslations-5148abf7.js";class j{constructor(o){this.value=o.value,this.timestamp=o.timestamp?L.utcToEpoch(o.timestamp):void 0}}const B=(t,o,r)=>`${H()}/custom-property-values/${encodeURIComponent(t)}/${encodeURIComponent(o)}/${encodeURIComponent(r)}`,z={...N.addCustom("getMany",(t,o,r,p)=>t.get(B(o,r,p)),t=>t.map(o=>new j(o)))},Z=R.custom(z.getMany),P=I({name:"FSMetaHistory",components:{FSMetaValue:k,FSButton:V,FSDialog:$},props:{customProperty:{type:Object,required:!0},entityType:{type:Number,required:!0},entityId:{type:String,required:!0}},setup(t){const{epochToLongTimeFormat:o}=U(),{fetching:r,fetch:p,entity:c}=Z(),d=h(!1);return O(()=>t.entityId,async(m,s)=>{v.isEqual(m,s)||await p(t.entityType,t.entityId,t.customProperty.code)},{immediate:!0}),{customPropertyValues:c,dialog:d,epochToLongTimeFormat:o}}});function J(t,o,r,p,c,d){const m=l("FSText"),s=l("FSMetaValue"),M=l("FSDialog");return u(),f(F,null,[e(V,{prependIcon:"mdi-history",label:"history",onClick:o[0]||(o[0]=i=>t.dialog=!t.dialog)}),e(M,{title:"History",width:"500px",modelValue:t.dialog,"onUpdate:modelValue":o[1]||(o[1]=i=>t.dialog=i)},{body:n(()=>[e(y,null,{default:n(()=>[(u(!0),f(F,null,b(t.customPropertyValues,i=>(u(),w(A,null,{default:n(()=>[e(m,null,{default:n(()=>[E(q(t.epochToLongTimeFormat(i.timestamp)),1)]),_:2},1024),e(y,{padding:"0 8px 0 0",align:"center-right"},{default:n(()=>[e(s,{customProperty:t.$props.customProperty,meta:{code:i.value}},null,8,["customProperty","meta"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1},8,["modelValue"])],64)}const _=D(P,[["render",J]]);P.__docgenInfo={displayName:"FSMetaHistory",exportName:"default",description:"",tags:{},props:[{name:"customProperty",type:{name:"CustomPropertyInfos"},required:!0},{name:"entityType",type:{name:"PropertyEntity"},required:!0},{name:"entityId",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/customProperties/FSMetaHistory.vue"]};const qo={title:"Foundation/Core/CustomProperties/MetaHistory",component:_,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{customProperty:{id:"1",code:"code",label:"Number",categoryLabel:"Category",index:0,entity:1,dataType:x.Number,addInInfos:!0,readOnlyCore:!1,readOnlyAdmin:!1,defaultValue:"",history:!1,historySize:0,colorful:!0,colorMap:[{priority:1,filterType:g.MoreOrEqual,filterValues:[5],color:"#0000FF"},{priority:2,filterType:g.MoreOrEqual,filterValues:[50],color:"#FF0000"}],useOnlyAllowedValues:!1,allowedValues:{}}}},render:(t,{argTypes:o})=>({components:{FSMetaHistory:_,FSCol:y},props:Object.keys(o),setup(){return{...t}},template:`
    <FSCol>
      <FSMetaHistory
        :customProperty="args.customProperty"
        :entityType="1"
        :entityId="'1'" />
    </FSCol>`})};var S,C,T;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const vo=["Variations"];export{a as Variations,vo as __namedExportsOrder,qo as default};
