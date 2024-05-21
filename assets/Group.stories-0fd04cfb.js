import{j as v,o as y,w as I,I as p,J as n,K as s,B as V,N as F}from"./vue.esm-bundler-7c237656.js";import{F as T}from"./FSGroupTileUI-25bfe0d4.js";import{F as b}from"./FSLoadTile-ade7fecc.js";import{a as G}from"./useGroups-bcffede1.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-9b8d5f30.js";import"./FSLoader-ef3e94c6.js";import"./css-aa928277.js";import"./useColors-0c4b5dc8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-4dbecb8e.js";import"./color-8a2bce37.js";import"./dimensions-cb2de721.js";import"./elevation-785d47fb.js";import"./locale-ebeae402.js";import"./proxiedModel-6d49c8c9.js";import"./useRender-e0e7d9de.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-08360cd4.js";import"./VImg-f2bb9819.js";import"./rounded-a3086a85.js";import"./transition-e42cd317.js";import"./index-2b139d8d.js";import"./FSColor-04322887.js";import"./FSCard-c7069f2a.js";import"./FSCol-76ddd6d9.js";import"./FSRow-0e15f868.js";import"./FSText-fda370f0.js";import"./useSlots-338ea3fb.js";import"./FSTile-0130c8b5.js";import"./FSClickable-e8caff35.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./VIcon-0c1eaee2.js";import"./tag-7dab75b7.js";import"./FSCheckbox-da06ce33.js";import"./FSIcon-5ad13b7e.js";import"./FSSpan-661158f8.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-6d75a1db.js";import"./density-a5226544.js";import"./index-521b9cff.js";import"./VLabel-236d5849.js";import"./VInput-eed42ecd.js";import"./index-09a2de27.js";import"./pathCrumb-3dbc85d5.js";import"./base-cc0281c0.js";import"./useAppOrganisationId-db575a42.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
