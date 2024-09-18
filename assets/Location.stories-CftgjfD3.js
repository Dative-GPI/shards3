import{F as V}from"./FSTile-DgvD4gki.js";import{F as u}from"./FSLocationTileUI-Cp0AuSn-.js";import{d as F,w as y,y as n,z as l,A as m,m as S,D as T}from"./vue.esm-bundler-BSyvBTC9.js";import{F as I}from"./FSLoadTile-DVbQTNFK.js";import{a as L}from"./useLocations-Bj7Qu8qZ.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-BDGPWcsb.js";import"./FSCard-VI0SCCBU.js";import"./FSCol-CtQDyyQv.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./FSRow-B3SJi8FA.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VProgressCircular-Dh9H7lZx.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSCheckbox-DjQsgBzR.js";import"./FSIcon-lOMM3dv0.js";import"./VIcon-BIpY_noq.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-BRDFiqFl.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSIconCard-BMSUO8Ab.js";import"./FSColor-DJALVf1r.js";import"./FSLoader-7EueGG7H.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./address-CE2z3AEI.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";const c=F({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:I},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:i}=L();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:r,entity:i}}});function $(e,o,r,i,C,q){const g=n("FSLoadTile"),b=n("FSLocationTileUI");return e.getting?(l(),m(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(l(),m(b,S({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","deviceCount","editable","modelValue"])):T("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Se={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:V},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    `}),args:{locationId:"1",modelValue:!0,editable:!0}};var p,d,s;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSLocationTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    \`
  }),
  args: {
    locationId: '1',
    modelValue: true,
    editable: true
  }
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const Te=["Default"];export{t as Default,Te as __namedExportsOrder,Se as default};
