import{j as v,o as y,w as I,I as p,J as n,K as s,B as V,N as F}from"./vue.esm-bundler-01006032.js";import{F as T}from"./FSGroupTileUI-d1608c37.js";import{F as b}from"./FSLoadTile-7c55beb6.js";import{a as G}from"./useGroups-32f8b702.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-bcb6e763.js";import"./FSLoader-639650a7.js";import"./css-279a0029.js";import"./useColors-13ed6ee6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a26d2375.js";import"./color-8c62b342.js";import"./dimensions-4232d0fa.js";import"./elevation-28c6fd5f.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./useRender-4bcbb6ac.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-25aa3ef9.js";import"./VImg-f5b3db66.js";import"./rounded-9001edc0.js";import"./transition-9c7eb302.js";import"./index-4a977ff0.js";import"./FSColor-16596ebd.js";import"./FSCard-8fcd8e1e.js";import"./FSCol-c97fad61.js";import"./FSRow-83e75060.js";import"./FSText-b54d9278.js";import"./useSlots-e0d7ab7c.js";import"./FSTile-1cd334db.js";import"./FSClickable-a0c1e9ef.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./VIcon-17be8ae5.js";import"./tag-1f5f74bd.js";import"./FSCheckbox-40e0c55f.js";import"./FSIcon-15b738c8.js";import"./FSSpan-6e79caf3.js";import"./useRules-54978858.js";import"./VSelectionControl-3e964160.js";import"./density-d09a1492.js";import"./index-89394051.js";import"./VLabel-f27c70ae.js";import"./VInput-50bb839f.js";import"./index-491d6eb9.js";import"./pathCrumb-3dbc85d5.js";import"./base-d6256dbd.js";import"./useAppOrganisationId-2267e850.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
