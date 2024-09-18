import{d as Q,c as q,y as p,z as o,A as u,B as i,L as a,E as h,G as C,D,I as x,b as V,C as ee,F as te,w as B}from"./vue.esm-bundler-BSyvBTC9.js";import{F as f}from"./FSRow-B3SJi8FA.js";import{F as W}from"./FSCol-CtQDyyQv.js";import{F as le}from"./FSBaseField-MrxZykEv.js";import{F as ie}from"./FSSelectField-CwdkTkty.js";import{F as w}from"./FSButton-nYXrUxor.js";import{F as $}from"./FSIcon-lOMM3dv0.js";import{F as ae}from"./FSColor-DJALVf1r.js";import{E as t,b as ne,a as re}from"./FSDialogSelectEntities-Ct1y5QHU.js";import{C as oe}from"./useColors-Ccf8xVyg.js";import{u as se}from"./useTranslations-CdSqQFV3.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ue}from"./FSFadeOut-DGMvjjet.js";import{_ as k}from"./FSSpan-CCGpb4KF.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./useSlots-P12pG1X5.js";import"./VSpacer-C4plVoTE.js";import"./color-BygXFKwQ.js";import"./theme-D4rXHj3O.js";import"./FSDialogMenu-Cs6zEHBC.js";import"./FSCard-VI0SCCBU.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSSlideGroup-60uSUxLJ.js";import"./uuid-DTaye2KM.js";import"./index-CHbvZ5Sj.js";import"./group-CBCTR8u6.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSToggleSet-DiCtmD_l.js";import"./FSWrapGroup-Co4n_fYq.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./FSTextField-cqKhOuyK.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./VLabel-owjBjdIA.js";import"./loader-pPiux2KM.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCheckbox-DjQsgBzR.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSLoader-7EueGG7H.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-DulDvRkK.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-DW3MG8oy.js";import"./VMenu-BVgNprPc.js";import"./FSClickable-BDGPWcsb.js";import"./FSDialogSubmit-CjjrJ-mj.js";import"./FSDialog-BR8AOXyq.js";import"./FSText-BN3VvfV9.js";import"./iframe-DgbRC_cI.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";const Y=Q({name:"FSEntityFieldUI",components:{FSBaseField:le,FSSelectField:ie,FSButton:w,FSIcon:$,FSColor:ae,FSRow:f,FSCol:W},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},itemsCount:{type:Number,required:!1,default:0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0},showCount:{type:Boolean,required:!1,default:!0},listMaxHeight:{type:String,required:!1,default:"220px"}},emits:["update:entityType","click:select"],setup(e){const{$tr:l}=se(),s=q(()=>{const d=[{id:t.Model,label:l("ui.entity-type.models","Models")},{id:t.Group,label:l("ui.entity-type.groups","Groups")},{id:t.Location,label:l("ui.entity-type.locations","Locations")},{id:t.Device,label:l("ui.entity-type.devices","Devices")},{id:t.User,label:l("ui.entity-type.users","Users")},{id:t.Dashboard,label:l("ui.entity-type.dashboards","Dashboards")},{id:t.Folder,label:l("ui.entity-type.folders","Folders")}];return e.allowedEntityTypes.length?d.filter(y=>e.allowedEntityTypes.includes(y.id)):d}),n=q(()=>{switch(e.entityType){case t.Model:return"mdi-cube";case t.Group:return"mdi-account-group";case t.Location:return"mdi-map-marker";case t.Device:return"mdi-cellphone";case t.User:return"mdi-account";case t.Dashboard:return"mdi-view-dashboard";case t.Folder:return"mdi-folder";default:return"mdi-cube"}});return{ColorEnum:oe,entityIcon:n,actualEntityTypes:s}}});function pe(e,l,s,n,d,y){const m=p("FSSelectField"),E=p("FSColor"),S=p("FSBaseField");return o(),u(S,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:i(()=>[a(W,{gap:"12px"},{default:i(()=>[a(f,{wrap:!1},{default:i(()=>[a(m,{hideHeader:!0,modelValue:e.$props.entityType,"onUpdate:modelValue":l[0]||(l[0]=r=>e.$emit("update:entityType",r)),items:e.actualEntityTypes,clearable:!1},null,8,["modelValue","items"]),e.itemsCount>0?(o(),u(w,{key:0,label:e.$tr("ui.entity-field.edit","Edit"),icon:"mdi-pencil",onClick:l[1]||(l[1]=r=>e.$emit("click:select"))},null,8,["label"])):(o(),u(w,{key:1,label:e.$tr("ui.entity-field.select","Select"),icon:"mdi-plus-circle-multiple-outline",onClick:l[2]||(l[2]=r=>e.$emit("click:select"))},null,8,["label"]))]),_:1}),e.$props.showCount?(o(),u(f,{key:0},{default:i(()=>[e.itemsCount>0?(o(),u(E,{key:0,color:e.ColorEnum.Primary,border:!1,width:"100%"},{default:i(()=>[a(f,{padding:"4px",align:"center-center"},{default:i(()=>[a($,{icon:e.entityIcon},null,8,["icon"]),a(k,{font:"text-overline"},{default:i(()=>[h(C(e.$tr("ui.entity-field.selected","{0} selected(s)",e.itemsCount)),1)]),_:1})]),_:1})]),_:1},8,["color"])):(o(),u(E,{key:1,color:e.ColorEnum.Light,border:!1,width:"100%"},{default:i(()=>[a(f,{padding:"4px",align:"center-center"},{default:i(()=>[a($,{icon:e.entityIcon},null,8,["icon"]),a(k,{font:"text-overline"},{default:i(()=>[h(C(e.$tr("ui.entity-field.no-entity-selected","No entity selected")),1)]),_:1})]),_:1})]),_:1},8,["color"]))]),_:1})):D("",!0),e.$props.showEntities&&e.itemsCount>0?(o(),u(ue,{key:1,maxHeight:e.$props.listMaxHeight,width:"100%"},{default:i(()=>[x(e.$slots,"items")]),_:3},8,["maxHeight"])):D("",!0)]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const de=X(Y,[["render",pe]]);Y.__docgenInfo={displayName:"FSEntityFieldUI",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemsCount",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showCount",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"listMaxHeight",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"220px"'}}],events:[{name:"update:entityType"},{name:"click:select"}],slots:[{name:"items"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSEntityFieldUI.vue"]};const Z=Q({name:"FSEntityField",components:{FSEntityFieldUI:de,FSSimpleEntitiesList:ne,FSDialogSelectEntities:re},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:()=>[]},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},filters:{type:Object,required:!1,default:()=>null},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue","update:entityType"],setup(e,{emit:l}){const s=V(!1),n=q(()=>{switch(e.entityType){case t.Device:return{deviceOrganisationsIds:e.modelValue};default:return{}}});return{dialog:s,listComponentFilters:n,onRemove:y=>{l("update:modelValue",e.modelValue.filter(m=>m!==y))}}}});function ye(e,l,s,n,d,y){const m=p("FSSimpleEntitiesList"),E=p("FSEntityFieldUI"),S=p("FSDialogSelectEntities");return o(),ee(te,null,[a(E,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.$props.messages,entityType:e.$props.entityType,allowedEntityTypes:e.$props.allowedEntityTypes||[],itemsCount:(e.$props.modelValue||[]).length,"onUpdate:entityType":l[0]||(l[0]=r=>{e.$emit("update:entityType",r),e.$emit("update:modelValue",[])}),showEntities:e.$props.showEntities,"onClick:select":l[1]||(l[1]=r=>e.dialog=!0)},{items:i(()=>[a(m,{"entity-type":e.$props.entityType,filters:e.listComponentFilters,showEdit:!1,"onClick:remove":e.onRemove},null,8,["entity-type","filters","onClick:remove"])]),_:1},8,["description","hideHeader","required","editable","label","messages","entityType","allowedEntityTypes","itemsCount","showEntities"]),a(S,{"entity-type":e.$props.entityType,filters:e.$props.filters,modelValue:e.dialog,"onUpdate:modelValue":l[2]||(l[2]=r=>e.dialog=r),selecteds:e.$props.modelValue||[],"onUpdate:selecteds":l[3]||(l[3]=r=>e.$emit("update:modelValue",r))},null,8,["entity-type","filters","modelValue","selecteds"])],64)}const _=X(Z,[["render",ye]]);Z.__docgenInfo={displayName:"FSEntityField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"filters",type:{name:"object"},required:!1,defaultValue:{func:!0,value:"() => null"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:entityType"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/entities/FSEntityField.vue"]};const Lt={title:"Foundation/Core/EntityField",component:_,tags:["autodocs"]},c={args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]},render:e=>({components:{FSEntityField:_},setup(){const l=V(e.entityType),s=V(e.modelValue);return B(()=>e.entityType,n=>{l.value=n},{immediate:!0}),B(()=>e.modelValue,n=>{n.value=n},{immediate:!0}),{args:e,entityType:l,value:s}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
        <FSEntityField v-bind="args" v-model="value" v-model:entityType="entityType">
            <FSText font="text-button">Obiwan kenobi</FSText>
            <FSText> - Hello there!</FSText>
        </FSEntityField>
    </div>`})},T={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},F={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[]}},v={...c,args:{label:"Entity selection",modelValue:["1"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},b={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},g={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5","6","7","8","9","10"],entityType:t.Device,showEntities:!1,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}};var L,H,M;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(M=(H=T.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var I,G,N;F.parameters={...F.parameters,docs:{...(I=F.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: []
  }
}`,...(N=(G=F.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var U,A,O;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(O=(A=v.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var R,j,z;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(z=(j=b.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,J,K;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    entityType: EntityType.Device,
    showEntities: false,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ht=["Empty","AllTypes","One","Five","TenNoList"];export{F as AllTypes,T as Empty,b as Five,v as One,g as TenNoList,Ht as __namedExportsOrder,Lt as default};
