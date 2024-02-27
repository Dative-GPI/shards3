import{D as v,o as y,w as I,E as i,G as s,H as p,J as V}from"./vue.esm-bundler-7bc65811.js";import{c as F}from"./useCore-3dca23d3.js";import{F as T}from"./FSGroupTileUI-7f807987.js";import{F as G}from"./FSLoadTile-905c2ab6.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useTimeZone-8af6f8e0.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./useBreakpoints-1754149f.js";import"./useColors-6dff70d5.js";import"./index-a0e5e2a3.js";import"./rules-041f2544.js";import"./theme-0a9d2dbd.js";import"./FSImage-a5e376c1.js";import"./color-3023c34d.js";import"./dimensions-d0734457.js";import"./elevation-8ccaa6df.js";import"./locale-6f1bd0c0.js";import"./VImg-4e39b73e.js";import"./rounded-2bba334c.js";import"./transition-188ceb13.js";import"./index-77a5f257.js";import"./FSColor-68f3f874.js";import"./FSRow-ae4caba9.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSSpan-7f9d89a0.js";import"./FSText-bc8d6447.js";import"./FSTile-c720c949.js";import"./FSCard-b8496b1f.js";import"./FSCol-8dc0322a.js";import"./FSCheckbox-5011c0ca.js";import"./FSIcon-149b00a8.js";import"./VIcon-866a2873.js";const m=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:G},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:n}=F();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:a,entity:n}}});function S(e,o,a,n,k,w){const g=i("FSLoadTile"),f=i("FSGroupTileUI");return e.getting?(s(),p(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(s(),p(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},null,8,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):V("",!0)}const c=b(m,[["render",S]]);m.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ie={title:"Foundation/Core/Tiles/Group",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:c},props:Object.keys(o),setup(){return{...e}},template:`
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
