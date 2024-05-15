import{j as v,o as y,w as I,I as p,J as n,K as s,B as V,N as F}from"./vue.esm-bundler-857e5af7.js";import{F as T}from"./FSGroupTileUI-5fe3c9f4.js";import{F as b}from"./FSLoadTile-f286015b.js";import{a as G}from"./useGroups-8949f23f.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-0a0b90ec.js";import"./FSLoader-da23fb58.js";import"./css-ab2bdb81.js";import"./useColors-17643043.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-d5133154.js";import"./color-3025502c.js";import"./dimensions-946cb0c4.js";import"./elevation-c9d86896.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./useRender-1606c976.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-64294cb0.js";import"./VImg-617a4396.js";import"./rounded-751db039.js";import"./transition-8ae71e6c.js";import"./index-60cd2499.js";import"./FSColor-14106fad.js";import"./FSCard-e175fef9.js";import"./FSCol-439c812a.js";import"./FSRow-e30f1dcc.js";import"./FSText-0e9e862b.js";import"./useSlots-8bee1a74.js";import"./FSTile-75725fa5.js";import"./FSClickable-450f52d6.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./VIcon-77d6c341.js";import"./tag-41ce785e.js";import"./FSCheckbox-54879197.js";import"./FSIcon-d0ab000b.js";import"./FSSpan-9f7a3096.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-ac658b6e.js";import"./density-9a54c498.js";import"./index-1a539509.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./index-900eb6c5.js";import"./pathCrumb-3dbc85d5.js";import"./base-0cefeb30.js";import"./useAppOrganisationId-9a072404.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
