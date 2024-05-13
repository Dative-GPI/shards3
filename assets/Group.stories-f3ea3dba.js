import{j as v,o as y,w as I,I as p,J as n,K as s,B as V,N as F}from"./vue.esm-bundler-41eda46b.js";import{F as T}from"./FSGroupTileUI-bc640e85.js";import{F as b}from"./FSLoadTile-fa378fb1.js";import{a as G}from"./useGroups-a441d96f.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-764aaae4.js";import"./FSLoader-f72d1bee.js";import"./css-35e8563f.js";import"./useColors-c7c61044.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-720d9fd7.js";import"./color-92f22fcc.js";import"./dimensions-9ac12c80.js";import"./elevation-c799c3f5.js";import"./locale-850d67a0.js";import"./proxiedModel-a34e17b7.js";import"./useRender-55bb8ab6.js";import"./base-0de1729e.js";import"./serviceFactory-7552fe10.js";import"./lodash-569b8a6d.js";import"./composableFactory-00c2f0ee.js";import"./VImg-8e58296a.js";import"./rounded-e85715e4.js";import"./transition-a4f3f1b4.js";import"./index-8f606737.js";import"./FSColor-a2958f4a.js";import"./FSCard-5c9795f4.js";import"./FSCol-282cc158.js";import"./FSRow-1508d56d.js";import"./FSText-833d800f.js";import"./useSlots-e8ea556e.js";import"./FSTile-97b6e37b.js";import"./FSClickable-25f814f4.js";import"./VProgressCircular-9cdac648.js";import"./resizeObserver-5b9bfd59.js";import"./VIcon-1fd71622.js";import"./tag-984e6215.js";import"./FSCheckbox-fb1efdda.js";import"./FSIcon-33b1b769.js";import"./FSSpan-8af5ddcc.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-09c80f59.js";import"./density-a7a72377.js";import"./index-1668950c.js";import"./VLabel-484dc627.js";import"./VInput-8f2c12b1.js";import"./index-3d73431e.js";import"./pathCrumb-3dbc85d5.js";import"./base-72a78366.js";import"./useAppOrganisationId-de810534.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:b},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=G();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(n(),s(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(n(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const ke={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
