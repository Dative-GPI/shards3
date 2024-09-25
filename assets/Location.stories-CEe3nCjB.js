import{F as V}from"./FSTile-DxbwvGXd.js";import{F as u}from"./FSLocationTileUI-b-LVg0Ar.js";import{d as F,w as y,y as n,z as l,A as m,m as S,D as T}from"./vue.esm-bundler-DjjVIdVI.js";import{F as I}from"./FSLoadTile-CYh5DQRl.js";import{a as L}from"./useLocations-D2lb5EtH.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-CYzkUmw_.js";import"./FSCard-Ce4y4X7Y.js";import"./FSCol-TPWSQPHs.js";import"./css-BkQhD285.js";import"./FSRow-CpogXLW8.js";import"./useColors-C-2usiDI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-v7reDO7s.js";import"./VProgressCircular-D-6SFgJ3.js";import"./color-BKGJvBEr.js";import"./resizeObserver-C4lJhwTD.js";import"./tag-DT601Ssr.js";import"./FSCheckbox-3q2xNHw_.js";import"./FSIcon-DCIvejCK.js";import"./VIcon-CzaRZDPI.js";import"./FSSpan-D1pceTli.js";import"./useSlots-DzSo5JdB.js";import"./useRules-yoa6lFkm.js";import"./VSelectionControl-DgLKJW5n.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./index-CN4E1Twd.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./index-DOC0sH28.js";import"./transition-C6adUwH7.js";import"./form-B7NlTRtd.js";import"./FSIconCard-B6wIzDX1.js";import"./FSColor-CDoBejvD.js";import"./FSLoader-EdeUV0_k.js";import"./dimensions-DBrW1AO_.js";import"./elevation-kEG7tFkj.js";import"./address-CE2z3AEI.js";import"./base-LOOo-Z1R.js";import"./useAppOrganisationId-BeeiXv5V.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CNptecSH.js";const c=F({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:I},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:i}=L();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:r,entity:i}}});function $(e,o,r,i,C,q){const g=n("FSLoadTile"),b=n("FSLocationTileUI");return e.getting?(l(),m(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(l(),m(b,S({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","deviceCount","editable","modelValue"])):T("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Se={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:V},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
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
