import{j as v,o as y,w as I,I as p,J as n,K as s,B as V,N as F}from"./vue.esm-bundler-857e5af7.js";import{F as T}from"./FSGroupTileUI-27cfb419.js";import{F as b}from"./FSLoadTile-7589dd12.js";import{a as G}from"./useGroups-8949f23f.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-db2b45fa.js";import"./FSLoader-ff56dc12.js";import"./css-ab2bdb81.js";import"./useColors-d77b9fa0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-83a4d379.js";import"./color-5d3cc229.js";import"./dimensions-d7f5c5ad.js";import"./elevation-d5a2e352.js";import"./locale-9a98f700.js";import"./proxiedModel-1e29c8a1.js";import"./useRender-d5beceb3.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-64294cb0.js";import"./VImg-f3ba6161.js";import"./rounded-67c03651.js";import"./transition-2a27d0f7.js";import"./index-098e590d.js";import"./FSColor-9ea47e4e.js";import"./FSCard-c144a688.js";import"./FSCol-439c812a.js";import"./FSRow-e30f1dcc.js";import"./FSText-e633ddca.js";import"./useSlots-8bee1a74.js";import"./FSTile-93fa380f.js";import"./FSClickable-d206c837.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./VIcon-2d4ba55d.js";import"./tag-7bd029e5.js";import"./FSCheckbox-d1b08f47.js";import"./FSIcon-faf0e444.js";import"./FSSpan-9f7a3096.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-11aadb82.js";import"./density-69cd8efb.js";import"./index-f95cc40a.js";import"./VLabel-820f7887.js";import"./VInput-6c2a4fd3.js";import"./index-d6be2044.js";import"./pathCrumb-3dbc85d5.js";import"./base-0cefeb30.js";import"./useAppOrganisationId-9a072404.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
