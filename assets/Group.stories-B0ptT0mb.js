import{d as v,o as y,w as I,y as p,z as n,A as s,m as V,D as F}from"./vue.esm-bundler-DeSao-KJ.js";import{F as T}from"./FSGroupTileUI-Dg-eof2D.js";import{F as b}from"./FSLoadTile-PwYUAhPo.js";import{a as G}from"./useGroups-yR7IXdlQ.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-DA-prI0c.js";import"./FSLoader-BG9q5Y9c.js";import"./css-BnhLLynS.js";import"./useColors-C3YrZIBy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-RQK62Xub.js";import"./color-XZPyE2lN.js";import"./dimensions-aXABR5Zz.js";import"./elevation-BBJMtRPf.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./useRender-CIdmfI-I.js";import"./base-BNnJ_ndD.js";import"./composableFactory-rrf4GM2L.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-BljrNAqA.js";import"./rounded-BOBir3aK.js";import"./transition-CTQG5_JK.js";import"./index-CrTEBV4I.js";import"./FSColor-CYX9tkkS.js";import"./FSCard-Cr3VWqvL.js";import"./FSCol-CA6NzDpV.js";import"./FSRow-JJutUvlP.js";import"./FSText-MbnVfYw2.js";import"./useSlots-DPxV8yUU.js";import"./FSTile-BfkDtmhM.js";import"./FSClickable-CtyeoOHr.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./FSCheckbox-Dba0sDeH.js";import"./FSIcon-DnAZkNNf.js";import"./FSSpan-t6bMdSRn.js";import"./useRules-DQ31e--d.js";import"./VSelectionControl-DWVZmIhS.js";import"./density-4sjlTnVP.js";import"./index-BWi4ltEp.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./index-BIb3aONP.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Db9bJp6t.js";import"./useAppOrganisationId-JzV73dfQ.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2"],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const we=["Variations"];export{r as Variations,we as __namedExportsOrder,ke as default};
