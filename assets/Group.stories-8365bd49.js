import{D as v,o as y,w as I,E as i,G as s,H as p,J as V}from"./vue.esm-bundler-6746129d.js";import{F}from"./FSGroupTileUI-f23cfbfb.js";import{F as T}from"./FSLoadTile-cbc8fb12.js";import{a as G}from"./useCore-69153761.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useBreakpoints-b6b44f4d.js";import"./useColors-af9c4499.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-1d0b59d0.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";import"./theme-dcffbbe6.js";import"./FSImage-9b7d9073.js";import"./color-28636d86.js";import"./dimensions-b4b52e44.js";import"./elevation-6127bd0f.js";import"./locale-6d7be75c.js";import"./VImg-eeb84175.js";import"./rounded-4ccd8171.js";import"./transition-909f2bdc.js";import"./index-5d004ff4.js";import"./FSColor-d0ea7c9d.js";import"./FSRow-40eef247.js";import"./LexicalSelection.prod-bad52e97.js";import"./FSSpan-636f18e6.js";import"./FSText-0291b8bd.js";import"./FSTile-5c08a3d0.js";import"./FSCard-7c6eaa72.js";import"./FSCol-7dad0d26.js";import"./FSCheckbox-c7e3c9f0.js";import"./FSIcon-e171104f.js";import"./VIcon-bfd3bf26.js";const m=v({name:"FSGroupTile",components:{FSGroupTileUI:F,FSLoadTile:T},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:n}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:a,entity:n}}});function S(e,o,a,n,k,w){const g=i("FSLoadTile"),f=i("FSGroupTileUI");return e.getting?(s(),p(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(s(),p(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},null,8,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):V("",!0)}const c=b(m,[["render",S]]);m.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ie={title:"Foundation/Core/Tiles/Group",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:c},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const se=["Variations"];export{r as Variations,se as __namedExportsOrder,ie as default};
