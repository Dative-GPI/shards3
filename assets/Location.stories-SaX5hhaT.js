import{F as V}from"./FSTile-DFTwexnY.js";import{F as u}from"./FSLocationTileUI-CMFm4r2C.js";import{d as F,w as y,y as i,z as l,A as m,m as S,D as T}from"./vue.esm-bundler-BSyvBTC9.js";import{F as I}from"./FSLoadTile-D7tvTk_g.js";import{a as L}from"./useLocations-Bj7Qu8qZ.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-MDWPSUzP.js";import"./FSCard-Dakm4bPu.js";import"./FSCol-DZA6pxA1.js";import"./css-DLfrm0pR.js";import"./FSRow-CA1vgNXx.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VProgressCircular-D09FP1rk.js";import"./color--o2QfpAv.js";import"./tag-DB5D_XjQ.js";import"./FSCheckbox-BqHXdD4S.js";import"./FSIcon-C66wKzEa.js";import"./VIcon-BQIm0b3J.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./useRules-B3HKjmia.js";import"./VSelectionControl-DxF8PKcC.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./index-DPxysH4G.js";import"./VLabel-Zg457A-5.js";import"./VInput-CdqyKCcu.js";import"./locale-C-s_GJlL.js";import"./index-DwLKzfXL.js";import"./transition-CNA6wh-m.js";import"./form-B61Sg6X-.js";import"./FSIconCard-myhl7XBZ.js";import"./FSColor-CSobaj7A.js";import"./FSLoader-C2GbS-is.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./address-CE2z3AEI.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";const c=F({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:I},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:n,entity:r}=L();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:n,entity:r}}});function $(e,o,n,r,C,q){const g=i("FSLoadTile"),b=i("FSLocationTileUI");return e.getting?(l(),m(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(l(),m(b,S({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","deviceCount","editable","modelValue"])):T("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const ye={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:V},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
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
}`,...(s=(d=t.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};const Se=["Default"];export{t as Default,Se as __namedExportsOrder,ye as default};
