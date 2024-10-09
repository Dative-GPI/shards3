import{F}from"./FSTile-BlV1I_VU.js";import{F as u}from"./FSLocationTileUI-C8Y_rRaK.js";import{d as V,w as y,y as n,z as l,A as m,m as L,F as S}from"./vue.esm-bundler-CWdIlc2r.js";import{F as T}from"./FSLoadTile-Bf9caRZP.js";import{a as I}from"./useLocations-qazNkG6i.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-JTcIAbNo.js";import"./FSCard-BxmDRzjE.js";import"./FSCol-CvoATp5Q.js";import"./css-BWDYXGFo.js";import"./useBreakpoints-INFVV7da.js";import"./FSRow-BnsweOMX.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSCheckbox-bKRtBqVc.js";import"./FSIcon-CyS8zLbP.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./locale-BGMMnFfJ.js";import"./index-D2mfwXxT.js";import"./transition-BvKGRC-_.js";import"./form-D-VMHmUh.js";import"./FSIconCard-CIp_Eg3h.js";import"./FSColor-BYUQVWkE.js";import"./FSLoader-h4slsrT9.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./address-CE2z3AEI.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";const c=V({name:"FSLocationTile",components:{FSLocationTileUI:u,FSLoadTile:T},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:i}=I();return y(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:r,entity:i}}});function $(e,o,r,i,C,q){const g=n("FSLoadTile"),b=n("FSLocationTileUI");return e.getting?(l(),m(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(l(),m(b,L({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","editable","modelValue"])):S("",!0)}const f=v(c,[["render",$]]);c.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Le={title:"Foundation/Core/Tiles/Location",component:f,subcomponents:{FSLocationTileUI:u,FSTile:F},tags:["autodocs"],argTypes:{locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:f},setup(){return{args:e}},template:`
      <FSLocationTile
        :locationId="args.locationId"
        :editable="args.editable"
        v-model="args.modelValue"
      />
    `}),args:{locationId:"1",modelValue:!0,editable:!0}};var d,p,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(s=(p=t.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};const Se=["Default"];export{t as Default,Se as __namedExportsOrder,Le as default};
