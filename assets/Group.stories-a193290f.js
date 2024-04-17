import{j as V,o as T,w,H as p,I as l,J as u,x as C,M as O}from"./vue.esm-bundler-9b0e8103.js";import{F as U}from"./FSGroupTileUI-abfbc9eb.js";import{F as $}from"./FSLoadTile-36bcd58a.js";import{P as k}from"./pathCrumb-3dbc85d5.js";import{C as L}from"./base-63b12e08.js";import{S as m}from"./serviceFactory-3393b4e4.js";import{C as f}from"./composableFactory-3da3eea4.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-c426a442.js";import"./FSLoader-57df4c1d.js";import"./css-a20776b9.js";import"./useColors-c8cdc69f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./color-8a9bca19.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./locale-e5242025.js";import"./proxiedModel-bfd89816.js";import"./useRender-7c6c7a38.js";import"./base-0de1729e.js";import"./VImg-6b167a7c.js";import"./rounded-f08b035c.js";import"./transition-6fc66ff9.js";import"./index-d737aecc.js";import"./FSColor-e5d06d59.js";import"./FSCard-bd4b7ce0.js";import"./FSCol-417d1c42.js";import"./FSRow-efd9bf42.js";import"./FSText-84a86aec.js";import"./useSlots-bfff66e3.js";import"./FSTile-aeae4abb.js";import"./FSClickable-154d7a9c.js";import"./VProgressCircular-a5b71e87.js";import"./intersectionObserver-569479cd.js";import"./resizeObserver-d1864ccd.js";import"./VIcon-dbd6f8e0.js";import"./tag-6bef4934.js";import"./FSCheckbox-14fed4cc.js";import"./FSIcon-42763d21.js";import"./FSSpan-66c77817.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./index-f5f914d5.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new k({...t})).sort((t,r)=>r.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class c extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const a=()=>`${L()}/groups`,i=o=>`${a()}/${encodeURIComponent(o)}`,y=new m("group",c).create(o=>o.build(o.addGet(i),o.addGetMany(a,h),o.addCreate(a),o.addUpdate(i),o.addRemove(i),o.addNotify(e=>({...m.addCustom("changeParent",(t,r,d)=>t.put(i(r),d),t=>{const r=new c(t);return e.notify("update",r),r})})))),x=f.get(y);f.custom(y.changeParent);const G=V({name:"FSGroupTile",components:{FSGroupTileUI:U,FSLoadTile:$},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:r}=x();return T(()=>{e(o.groupId)}),w(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:r}}});function P(o,e,t,r,d,q){const F=p("FSLoadTile"),S=p("FSGroupTileUI");return o.getting?(l(),u(F,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):o.entity?(l(),u(S,C({key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=n=>o.$emit("update:modelValue",n))},o.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):O("",!0)}const b=R(G,[["render",P]]);G.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Pe={title:"Foundation/Core/Tiles/Group",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:b},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const qe=["Variations"];export{s as Variations,qe as __namedExportsOrder,Pe as default};
