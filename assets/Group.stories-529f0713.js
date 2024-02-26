import{D as v,o as y,w as I,E as i,G as s,H as p,J as V}from"./vue.esm-bundler-17cb12ce.js";import{F}from"./FSGroupTileUI-bfc08e0e.js";import{F as T}from"./FSLoadTile-a3adee7c.js";import{a as G}from"./useCore-feeab7e5.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./useBreakpoints-6bc0ee93.js";import"./useColors-04b7b26f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-8f4289e2.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";import"./theme-c4ac2200.js";import"./FSImage-66056b8b.js";import"./color-d421c344.js";import"./dimensions-10b1de84.js";import"./elevation-cb67bcb5.js";import"./locale-2e51016c.js";import"./VImg-9bf8748f.js";import"./rounded-d330abbe.js";import"./transition-4d995a4a.js";import"./index-c7efe106.js";import"./FSColor-290cb14a.js";import"./FSRow-9ce6aace.js";import"./LexicalSelection.prod-b0bd0f79.js";import"./FSSpan-2051def6.js";import"./FSText-dce49904.js";import"./FSTile-b6b53f4e.js";import"./FSCard-8714722b.js";import"./FSCol-03fc1f3a.js";import"./FSCheckbox-6e1316ac.js";import"./FSIcon-16c55386.js";import"./VIcon-343130ca.js";const m=v({name:"FSGroupTile",components:{FSGroupTileUI:F,FSLoadTile:T},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:n}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:a,entity:n}}});function S(e,o,a,n,k,w){const g=i("FSLoadTile"),f=i("FSGroupTileUI");return e.getting?(s(),p(g,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(s(),p(f,{key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},null,8,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):V("",!0)}const c=b(m,[["render",S]]);m.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ie={title:"Foundation/Core/Tiles/Group",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:c},props:Object.keys(o),setup(){return{...e}},template:`
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
