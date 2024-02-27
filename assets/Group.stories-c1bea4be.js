import{D as v,o as y,w as I,E as i,G as s,H as p,J as V}from"./vue.esm-bundler-47273a21.js";import{c as F}from"./useCore-be6b254e.js";import{F as T}from"./FSGroupTileUI-be48f75a.js";import{F as G}from"./FSLoadTile-047ca7da.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useTimeZone-898e8e2d.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./useBreakpoints-bd6e350e.js";import"./useColors-446eeb5a.js";import"./index-a0e5e2a3.js";import"./rules-f5c4efdb.js";import"./theme-7e191b90.js";import"./FSImage-2c543ce5.js";import"./color-38d974b0.js";import"./dimensions-699818e3.js";import"./elevation-522a2612.js";import"./locale-5c4d4b03.js";import"./VImg-659d7685.js";import"./rounded-8d3cef66.js";import"./transition-6c7cc79f.js";import"./index-1e6cce54.js";import"./FSColor-a7850c8d.js";import"./FSRow-89f60060.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSSpan-6a5d69b6.js";import"./FSText-f44f59d2.js";import"./FSTile-a648402f.js";import"./FSCard-e4bdc27c.js";import"./FSCol-00f12d9b.js";import"./FSCheckbox-449815fb.js";import"./FSIcon-be851c75.js";import"./VIcon-f933c800.js";const m=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:G},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:n}=F();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:a,entity:n}}});function S(e,o,a,n,k,w){const g=i("FSLoadTile"),f=i("FSGroupTileUI");return e.getting?(s(),p(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(s(),p(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},null,8,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):V("",!0)}const c=b(m,[["render",S]]);m.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ie={title:"Foundation/Core/Tiles/Group",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:c},props:Object.keys(o),setup(){return{...e}},template:`
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
