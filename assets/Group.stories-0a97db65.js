import{j as V,o as T,w,H as p,I as l,J as u,x as C,M as O}from"./vue.esm-bundler-96d0a5cc.js";import{F as U}from"./FSGroupTileUI-2bfee17d.js";import{F as $}from"./FSLoadTile-b46e558f.js";import{P as k}from"./pathCrumb-3dbc85d5.js";import{C as L}from"./base-2afb0f10.js";import{S as m}from"./serviceFactory-3393b4e4.js";import{C as f}from"./composableFactory-2f95db4a.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-7ee5f391.js";import"./FSLoader-a4b17375.js";import"./css-187645c7.js";import"./useColors-a5c6eb1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c90fedb5.js";import"./color-0e7f3458.js";import"./dimensions-f2761880.js";import"./elevation-23c434a7.js";import"./locale-ebcc9fd1.js";import"./proxiedModel-80fa8b72.js";import"./useRender-864589a6.js";import"./base-0de1729e.js";import"./VImg-7ef13259.js";import"./rounded-7d5adaf8.js";import"./transition-2009bd3b.js";import"./index-ab6a3e98.js";import"./FSColor-8de659a3.js";import"./FSCard-907ca4bc.js";import"./FSCol-71088900.js";import"./FSRow-959288e5.js";import"./FSText-8c2dec91.js";import"./useSlots-8f090340.js";import"./FSTile-8c27cda9.js";import"./FSClickable-3046c0b6.js";import"./VProgressCircular-b96acd02.js";import"./resizeObserver-608b050a.js";import"./VIcon-356fc7cc.js";import"./tag-2ee5b375.js";import"./FSCheckbox-b67eda6e.js";import"./FSIcon-1f958509.js";import"./FSSpan-572d1125.js";import"./useRules-d4bb430c.js";import"./VCheckboxBtn-080209f7.js";import"./VSelectionControl-70f0f0e9.js";import"./density-9320d724.js";import"./index-b26b5e2a.js";import"./VLabel-6f956079.js";import"./VInput-b0770754.js";import"./index-09e6aad2.js";import"./useAppOrganisationId-9f2bcdeb.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new k({...t})).sort((t,r)=>r.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class c extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const a=()=>`${L()}/groups`,i=o=>`${a()}/${encodeURIComponent(o)}`,y=new m("group",c).create(o=>o.build(o.addGet(i),o.addGetMany(a,h),o.addCreate(a),o.addUpdate(i),o.addRemove(i),o.addNotify(e=>({...m.addCustom("changeParent",(t,r,d)=>t.put(i(r),d),t=>{const r=new c(t);return e.notify("update",r),r})})))),x=f.get(y);f.custom(y.changeParent);const G=V({name:"FSGroupTile",components:{FSGroupTileUI:U,FSLoadTile:$},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:r}=x();return T(()=>{e(o.groupId)}),w(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:r}}});function P(o,e,t,r,d,q){const F=p("FSLoadTile"),S=p("FSGroupTileUI");return o.getting?(l(),u(F,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):o.entity?(l(),u(S,C({key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=n=>o.$emit("update:modelValue",n))},o.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):O("",!0)}const b=R(G,[["render",P]]);G.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const xe={title:"Foundation/Core/Tiles/Group",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:b},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var g,I,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const Pe=["Variations"];export{s as Variations,Pe as __namedExportsOrder,xe as default};
