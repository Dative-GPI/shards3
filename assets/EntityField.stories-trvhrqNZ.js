import{d as Q,c as S,y,z as r,A as d,C as i,N as n,H as $,I as C,F as D,K as x,b as h,E as ee,G as te,w as B}from"./vue.esm-bundler-DTB_q9xr.js";import{_ as f}from"./FSRow-CFFgZ74C.js";import{F as W}from"./FSCol-CYWCfIBP.js";import{F as ae}from"./FSBaseField-BJvLi7Av.js";import{F as le}from"./FSSelectField-DkqD7weE.js";import{F as q}from"./FSButton-DblcRn12.js";import{F as w}from"./FSIcon-CJgnsR4e.js";import{F as ie}from"./FSColor-7Ymgn3WF.js";import{E as t}from"./applications-pqrfQrBX.js";import{C as ne}from"./useColors-Du1QHlOW.js";import{u as oe}from"./useTranslations-BehwFxDb.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as re}from"./FSFadeOut-CXlPGNaB.js";import{_ as k}from"./FSSpan-DGSHCe_l.js";import{b as se,a as ue}from"./FSDialogSelectEntities-Ba2D99p5.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./useSlots-BnylMYIF.js";import"./VSpacer-y-n940VK.js";import"./color-DBJfw4cY.js";import"./theme-BKYtCmay.js";import"./FSDialogMenu-Cb0sycmV.js";import"./FSCard-GtkwWKOo.js";import"./VDialog-0V5lw7Cu.js";import"./VOverlay-Bt6Cjx3-.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-z3p0-M-h.js";import"./anchor-Cu9IQeug.js";import"./dimensions-C-vtuVn7.js";import"./display-CKqU0R6P.js";import"./lazy-k0fVkBtC.js";import"./locale-BJQwrXJ7.js";import"./router-DHMAfVHW.js";import"./transition-B83BVatf.js";import"./VDefaultsProvider-S-S54iS4.js";import"./FSSlideGroup-BvayNA85.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-hoGIuoJL.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./index-CiXeh9xR.js";import"./VIcon-BCDp5TRU.js";import"./resizeObserver-Bmwp6ruU.js";import"./FSToggleSet-CO6_GqFo.js";import"./FSWrapGroup-DqTYt4T6.js";import"./VInput-BwoMaTW2.js";import"./density-CJqFEH6j.js";import"./form-D8F-RrsG.js";import"./FSTextField-DpQImVLP.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./VLabel-DFQa5Qos.js";import"./loader-Cs6S2SUJ.js";import"./VProgressCircular-cHoQoKlr.js";import"./rounded-DM_o2hWD.js";import"./index-C31q_73Z.js";import"./FSCheckbox-BlU3VZ1O.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";import"./FSLoader-y57uLHf2.js";import"./elevation-RaRrQxn9.js";import"./FSRadio-C3yYTxEZ.js";import"./VList-LhfMLDEB.js";import"./ssrBoot-BTOmRKcz.js";import"./border-mcG4sAce.js";import"./VImg-I7jXrjsW.js";import"./VSelect-BgVwCn37.js";import"./VMenu-9eL7kyJm.js";import"./FSClickable-CIKlZ0Uy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSDialogSubmit-DCT3zM89.js";import"./FSDialog-CSKP4meT.js";import"./FSText-D77NGEvR.js";import"./iframe-CPmNKnrd.js";import"../sb-preview/runtime.js";const Y=Q({name:"FSEntityFieldUI",components:{FSBaseField:ae,FSSelectField:le,FSButton:q,FSIcon:w,FSColor:ie,FSRow:f,FSCol:W},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},itemsCount:{type:Number,required:!1,default:0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0},showCount:{type:Boolean,required:!1,default:!0},listMaxHeight:{type:String,required:!1,default:"220px"}},emits:["update:entityType","click:select"],setup(e){const{$tr:a}=oe(),s=S(()=>{const m=[{id:t.Model,label:a("ui.entity-type.models","Models")},{id:t.Group,label:a("ui.entity-type.groups","Groups")},{id:t.Location,label:a("ui.entity-type.locations","Locations")},{id:t.Device,label:a("ui.entity-type.devices","Devices")},{id:t.User,label:a("ui.entity-type.users","Users")},{id:t.Dashboard,label:a("ui.entity-type.dashboards","Dashboards")},{id:t.Folder,label:a("ui.entity-type.folders","Folders")}];return e.allowedEntityTypes.length?m.filter(E=>e.allowedEntityTypes.includes(E.id)):m}),o=S(()=>{switch(e.entityType){case t.Model:return"mdi-cube";case t.Group:return"mdi-account-group";case t.Location:return"mdi-map-marker";case t.Device:return"mdi-cellphone";case t.User:return"mdi-account";case t.Dashboard:return"mdi-view-dashboard";case t.Folder:return"mdi-folder";default:return"mdi-cube"}});return{ColorEnum:ne,entityIcon:o,actualEntityTypes:s}}});function de(e,a,s,o,m,E){const T=y("FSSelectField"),l=y("FSColor"),u=y("FSBaseField");return r(),d(u,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.messages},{default:i(()=>[n(W,{gap:"12px"},{default:i(()=>[n(f,{wrap:!1},{default:i(()=>[n(T,{hideHeader:!0,modelValue:e.$props.entityType,"onUpdate:modelValue":a[0]||(a[0]=p=>e.$emit("update:entityType",p)),items:e.actualEntityTypes,clearable:!1},null,8,["modelValue","items"]),e.itemsCount>0?(r(),d(q,{key:0,label:e.$tr("ui.entity-field.edit","Edit"),icon:"mdi-pencil",onClick:a[1]||(a[1]=p=>e.$emit("click:select"))},null,8,["label"])):(r(),d(q,{key:1,label:e.$tr("ui.entity-field.select","Select"),icon:"mdi-plus-circle-multiple-outline",onClick:a[2]||(a[2]=p=>e.$emit("click:select"))},null,8,["label"]))]),_:1}),e.$props.showCount?(r(),d(f,{key:0},{default:i(()=>[e.itemsCount>0?(r(),d(l,{key:0,color:e.ColorEnum.Primary,border:!1,width:"100%"},{default:i(()=>[n(f,{padding:"4px",align:"center-center"},{default:i(()=>[n(w,{icon:e.entityIcon},null,8,["icon"]),n(k,{font:"text-overline"},{default:i(()=>[$(C(e.$tr("ui.entity-field.selected","{0} selected(s)",e.itemsCount)),1)]),_:1})]),_:1})]),_:1},8,["color"])):(r(),d(l,{key:1,color:e.ColorEnum.Light,border:!1,width:"100%"},{default:i(()=>[n(f,{padding:"4px",align:"center-center"},{default:i(()=>[n(w,{icon:e.entityIcon},null,8,["icon"]),n(k,{font:"text-overline"},{default:i(()=>[$(C(e.$tr("ui.entity-field.no-entity-selected","No entity selected")),1)]),_:1})]),_:1})]),_:1},8,["color"]))]),_:1})):D("",!0),e.$props.showEntities&&e.itemsCount>0?(r(),d(re,{key:1,maxHeight:e.$props.listMaxHeight,width:"100%"},{default:i(()=>[x(e.$slots,"items")]),_:3},8,["maxHeight"])):D("",!0)]),_:3})]),_:3},8,["description","hideHeader","required","editable","label","messages"])}const pe=X(Y,[["render",de]]);Y.__docgenInfo={displayName:"FSEntityFieldUI",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"itemsCount",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showCount",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"listMaxHeight",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:'"220px"'}}],events:[{name:"update:entityType"},{name:"click:select"}],slots:[{name:"items"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSEntityFieldUI.vue"]};const Z=Q({name:"FSEntityField",components:{FSEntityFieldUI:pe,FSSimpleEntitiesList:se,FSDialogSelectEntities:ue},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!0,default:()=>[]},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},filters:{type:Object,required:!1,default:()=>null},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0},entityType:{type:Number,required:!0},allowedEntityTypes:{type:Array,required:!1,default:()=>[]},showEntities:{type:Boolean,required:!1,default:!0},showCount:{type:Boolean,required:!1,default:!0}},emits:["update","update:modelValue","update:entityType"],setup(e,{emit:a}){const s=h(!1),o=S(()=>{switch(e.entityType){case t.Device:return{deviceOrganisationsIds:e.modelValue};case t.Dashboard:return{dashboardOrganisationsIds:e.modelValue,dashboardOrganisationTypesIds:e.modelValue};case t.Group:return{groupsIds:e.modelValue};case t.Folder:return{foldersIds:e.modelValue};case t.Location:return{locationsIds:e.modelValue};case t.User:return{userOrganisationsIds:e.modelValue};case t.Model:return{modelsIds:e.modelValue};default:return}});return{dialog:s,simpleListFilters:o,onRemove:l=>{a("update:modelValue",e.modelValue.filter(u=>u!==l)),a("update",{entityType:e.entityType,modelValue:e.modelValue.filter(u=>u!==l)})},onEntityTypeChanged:l=>{a("update:entityType",l),a("update:modelValue",[]),a("update",{entityType:l,modelValue:[]})},onModelValueChanged:l=>{a("update:modelValue",l),a("update",{entityType:e.entityType,modelValue:l})}}}});function ye(e,a,s,o,m,E){const T=y("FSSimpleEntitiesList"),l=y("FSEntityFieldUI"),u=y("FSDialogSelectEntities");return r(),ee(te,null,[n(l,{description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,label:e.$props.label,messages:e.$props.messages,entityType:e.$props.entityType,allowedEntityTypes:e.$props.allowedEntityTypes||[],itemsCount:(e.$props.modelValue||[]).length,"onUpdate:entityType":e.onEntityTypeChanged,showEntities:e.$props.showEntities,showCount:e.$props.showCount,"onClick:select":a[0]||(a[0]=p=>e.dialog=!0)},{items:i(()=>[n(T,{"entity-type":e.$props.entityType,filters:e.simpleListFilters,showEdit:!1,"onClick:remove":e.onRemove},null,8,["entity-type","filters","onClick:remove"])]),_:1},8,["description","hideHeader","required","editable","label","messages","entityType","allowedEntityTypes","itemsCount","onUpdate:entityType","showEntities","showCount"]),n(u,{"entity-type":e.$props.entityType,filters:e.$props.filters,modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=p=>e.dialog=p),selecteds:e.$props.modelValue||[],"onUpdate:selecteds":e.onModelValueChanged},null,8,["entity-type","filters","modelValue","selecteds","onUpdate:selecteds"])],64)}const _=X(Z,[["render",ye]]);Z.__docgenInfo={displayName:"FSEntityField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[]"},required:!0,defaultValue:{func:!0,value:"() => []"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"filters",type:{name:"object"},required:!1,defaultValue:{func:!0,value:"() => null"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"entityType",type:{name:"EntityType"},required:!0},{name:"allowedEntityTypes",type:{name:"EntityType[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"showEntities",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showCount",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update"},{name:"update:modelValue"},{name:"update:entityType"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/entities/FSEntityField.vue"]};const Ht={title:"Foundation/Core/EntityField",component:_,tags:["autodocs"]},c={args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]},render:e=>({components:{FSEntityField:_},setup(){const a=h(e.entityType),s=h(e.modelValue);return B(()=>e.entityType,o=>{a.value=o},{immediate:!0}),B(()=>e.modelValue,o=>{o.value=o},{immediate:!0}),{args:e,entityType:a,value:s}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
        <FSEntityField v-bind="args" v-model="value" v-model:entityType="entityType">
            <FSText font="text-button">Obiwan kenobi</FSText>
            <FSText> - Hello there!</FSText>
        </FSEntityField>
    </div>`})},g={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},b={...c,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[]}},v={...c,args:{label:"Entity selection",modelValue:["1"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},F={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},V={...c,args:{label:"Entity selection",modelValue:["1","2","3","4","5","6","7","8","9","10"],entityType:t.Device,showEntities:!1,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}};var I,L,M;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,U,G;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(j=F.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var K,P,J;V.parameters={...V.parameters,docs:{...(K=V.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    entityType: EntityType.Device,
    showEntities: false,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(J=(P=V.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};const Ut=["Empty","AllTypes","One","Five","TenNoList"];export{b as AllTypes,g as Empty,F as Five,v as One,V as TenNoList,Ut as __namedExportsOrder,Ht as default};
