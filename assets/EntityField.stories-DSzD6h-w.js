import{d as Q,c as V,y as m,z as s,A as d,C as l,N as i,H as $,I as C,F as D,K as x,b as q,E as ee,G as te,w as B}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as f}from"./FSRow-D4JfwQlG.js";import{F as W}from"./FSCol-Bj1WIVag.js";import{F as ae}from"./FSBaseField-CMqv-0AW.js";import{F as le}from"./FSSelectField-DzKPXup4.js";import{F as h}from"./FSButton-C5MQI7ea.js";import{F as w}from"./FSIcon-vAlkpflo.js";import{F as ie}from"./FSColor-b-_lfIO5.js";import{E as t,b as ne,a as oe}from"./FSDialogSelectEntities-B4uNLFFb.js";import{C as re}from"./useColors-CrLBSafx.js";import{u as se}from"./useTranslations-CEnu7PZQ.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as ue}from"./FSFadeOut-wBxXm2Rc.js";import{_ as k}from"./FSSpan-DpOLTsx1.js";import"./css-DVhR3h-A.js";import"./useSlots-zwOl0abH.js";import"./VSpacer-DLFo12A6.js";import"./color-B0htL_ZM.js";import"./theme-DkyKeiX7.js";import"./FSDialogMenu-CzbYQerh.js";import"./FSCard-D8qRc7rc.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BN8GSVE7.js";import"./anchor-CiFPvmMB.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./locale-BGMMnFfJ.js";import"./router-lEm-a6ws.js";import"./transition-BvKGRC-_.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-CcLnrzQE.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./index-D2mfwXxT.js";import"./VIcon-Bo7R9vIQ.js";import"./resizeObserver-CTZzan_-.js";import"./FSToggleSet-C8NJFl0Q.js";import"./FSWrapGroup-CRmVPaPn.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./FSTextField-D5y-h9FL.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./VLabel-hsX9xD9s.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./rounded-C73YOAN4.js";import"./index-BPQCAcxH.js";import"./FSCheckbox-18K-cCtB.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSLoader-DxfJongP.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-DU_IYZMJ.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-Q7PPqJI7.js";import"./VMenu-OPxqXTkz.js";import"./FSClickable-D_ads5r5.js";import"./FSDialogSubmit-DjjbhTSJ.js";import"./FSDialog-CncBWQNh.js";import"./FSText-BxoWgsr8.js";import"./iframe-CXjfdGuo.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";const Y=Q({name:"FSEntityFieldUI",components:{FSBaseField:ae,FSSelectField:le,FSButton:h,FSIcon:w,FSColor:ie,FSRow:f,FSCol:W},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},itemsCount:{type:Number,required:!1,default:0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0},showCount:{type:Boolean,required:!1,default:!0},listMaxHeight:{type:String,required:!1,default:"220px"}},emits:["update:entityType","click:select"],setup(e){const{$tr:a}=se(),u=V(()=>{const y=[{id:t.Model,label:a("ui.entity-type.models","Models")},{id:t.Group,label:a("ui.entity-type.groups","Groups")},{id:t.Location,label:a("ui.entity-type.locations","Locations")},{id:t.Device,label:a("ui.entity-type.devices","Devices")},{id:t.User,label:a("ui.entity-type.users","Users")},{id:t.Dashboard,label:a("ui.entity-type.dashboards","Dashboards")},{id:t.Folder,label:a("ui.entity-type.folders","Folders")}];return e.allowedEntityTypes.length?y.filter(E=>e.allowedEntityTypes.includes(E.id)):y}),n=V(()=>{switch(e.entityType){case t.Model:return"mdi-cube";case t.Group:return"mdi-account-group";case t.Location:return"mdi-map-marker";case t.Device:return"mdi-cellphone";case t.User:return"mdi-account";case t.Dashboard:return"mdi-view-dashboard";case t.Folder:return"mdi-folder";default:return"mdi-cube"}});return{ColorEnum:re,entityIcon:n,actualEntityTypes:u}}});function de(e,a,u,n,y,E){const o=m("FSSelectField"),p=m("FSColor"),S=m("FSBaseField");return s(),d(S,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:l(()=>[i(W,{gap:"12px"},{default:l(()=>[i(f,{wrap:!1},{default:l(()=>[i(o,{hideHeader:!0,modelValue:e.$props.entityType,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:entityType",r)),items:e.actualEntityTypes,clearable:!1},null,8,["modelValue","items"]),e.itemsCount>0?(s(),d(h,{key:0,label:e.$tr("ui.entity-field.edit","Edit"),icon:"mdi-pencil",onClick:a[1]||(a[1]=r=>e.$emit("click:select"))},null,8,["label"])):(s(),d(h,{key:1,label:e.$tr("ui.entity-field.select","Select"),icon:"mdi-plus-circle-multiple-outline",onClick:a[2]||(a[2]=r=>e.$emit("click:select"))},null,8,["label"]))]),_:1}),e.$props.showCount?(s(),d(f,{key:0},{default:l(()=>[e.itemsCount>0?(s(),d(p,{key:0,color:e.ColorEnum.Primary,border:!1,width:"100%"},{default:l(()=>[i(f,{padding:"4px",align:"center-center"},{default:l(()=>[i(w,{icon:e.entityIcon},null,8,["icon"]),i(k,{font:"text-overline"},{default:l(()=>[$(C(e.$tr("ui.entity-field.selected","{0} selected(s)",e.itemsCount)),1)]),_:1})]),_:1})]),_:1},8,["color"])):(s(),d(p,{key:1,color:e.ColorEnum.Light,border:!1,width:"100%"},{default:l(()=>[i(f,{padding:"4px",align:"center-center"},{default:l(()=>[i(w,{icon:e.entityIcon},null,8,["icon"]),i(k,{font:"text-overline"},{default:l(()=>[$(C(e.$tr("ui.entity-field.no-entity-selected","No entity selected")),1)]),_:1})]),_:1})]),_:1},8,["color"]))]),_:1})):D("",!0),e.$props.showEntities&&e.itemsCount>0?(s(),d(ue,{key:1,maxHeight:e.$props.listMaxHeight,width:"100%"},{default:l(()=>[x(e.$slots,"items")]),_:3},8,["maxHeight"])):D("",!0)]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const pe=X(Y,[["render",de]]);Y.__docgenInfo={displayName:"FSEntityFieldUI",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemsCount",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showCount",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"listMaxHeight",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"220px"'}}],events:[{name:"update:entityType"},{name:"click:select"}],slots:[{name:"items"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSEntityFieldUI.vue"]};const Z=Q({name:"FSEntityField",components:{FSEntityFieldUI:pe,FSSimpleEntitiesList:ne,FSDialogSelectEntities:oe},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:()=>[]},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},filters:{type:Object,required:!1,default:()=>null},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0},showCount:{type:Boolean,required:!1,default:!0}},emits:["update","update:modelValue","update:entityType"],setup(e,{emit:a}){const u=q(!1),n=V(()=>{switch(e.entityType){case t.Device:return{deviceOrganisationsIds:e.modelValue};case t.Dashboard:return{dashboardOrganisationsIds:e.modelValue,dashboardOrganisationTypesIds:e.modelValue};case t.Group:return{groupsIds:e.modelValue};case t.Folder:return{foldersIds:e.modelValue};case t.Location:return{locationsIds:e.modelValue};case t.User:return{userOrganisationsIds:e.modelValue};case t.Model:return{modelsIds:e.modelValue};default:return}});return{dialog:u,simpleListFilters:n,onRemove:o=>{a("update:modelValue",e.modelValue.filter(p=>p!==o))},onEntityTypeChanged:o=>{a("update:entityType",o),a("update:modelValue",[]),a("update",{entityType:o,modelValue:[]})}}}});function me(e,a,u,n,y,E){const o=m("FSSimpleEntitiesList"),p=m("FSEntityFieldUI"),S=m("FSDialogSelectEntities");return s(),ee(te,null,[i(p,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.$props.messages,entityType:e.$props.entityType,allowedEntityTypes:e.$props.allowedEntityTypes||[],itemsCount:(e.$props.modelValue||[]).length,"onUpdate:entityType":e.onEntityTypeChanged,showEntities:e.$props.showEntities,showCount:e.$props.showCount,"onClick:select":a[0]||(a[0]=r=>e.dialog=!0)},{items:l(()=>[i(o,{"entity-type":e.$props.entityType,filters:e.simpleListFilters,showEdit:!1,"onClick:remove":e.onRemove},null,8,["entity-type","filters","onClick:remove"])]),_:1},8,["description","hideHeader","required","editable","label","messages","entityType","allowedEntityTypes","itemsCount","onUpdate:entityType","showEntities","showCount"]),i(S,{"entity-type":e.$props.entityType,filters:e.$props.filters,modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=r=>e.dialog=r),selecteds:e.$props.modelValue||[],"onUpdate:selecteds":a[2]||(a[2]=r=>e.$emit("update:modelValue",r))},null,8,["entity-type","filters","modelValue","selecteds"])],64)}const _=X(Z,[["render",me]]);Z.__docgenInfo={displayName:"FSEntityField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"filters",type:{name:"object"},required:!1,defaultValue:{func:!0,value:"() => null"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showCount",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"},{name:"update"},{name:"update:entityType"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/entities/FSEntityField.vue"]};const Lt={title:"Foundation/Core/EntityField",component:_,tags:["autodocs"]},c={args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]},render:e=>({components:{FSEntityField:_},setup(){const a=q(e.entityType),u=q(e.modelValue);return B(()=>e.entityType,n=>{a.value=n},{immediate:!0}),B(()=>e.modelValue,n=>{n.value=n},{immediate:!0}),{args:e,entityType:a,value:u}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
        <FSEntityField v-bind="args" v-model="value" v-model:entityType="entityType">
            <FSText font="text-button">Obiwan kenobi</FSText>
            <FSText> - Hello there!</FSText>
        </FSEntityField>
    </div>`})},T={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},b={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[]}},v={...c,args:{label:"Entity selection",modelValue:["1"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},F={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},g={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5","6","7","8","9","10"],entityType:t.Device,showEntities:!1,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}};var I,L,H;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(H=(L=T.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var M,U,G;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: []
  }
}`,...(G=(U=b.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var N,A,O;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(O=(A=v.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var R,j,z;F.parameters={...F.parameters,docs:{...(R=F.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(z=(j=F.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var K,P,J;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    entityType: EntityType.Device,
    showEntities: false,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(J=(P=g.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};const Ht=["Empty","AllTypes","One","Five","TenNoList"];export{b as AllTypes,T as Empty,F as Five,v as One,g as TenNoList,Ht as __namedExportsOrder,Lt as default};
