import{G as S,o as V,w as T,_ as p,I as u,J as m,L as w}from"./vue.esm-bundler-588e96c7.js";import{F as O}from"./FSGroupTileUI-5f93a61e.js";import{P as U,F as k}from"./FSLoadTile-6b03af90.js";import{C,a as $}from"./base-ec35a5ce.js";import{S as c}from"./serviceFactory-25228cba.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-59d2453d.js";import"./base-5094c3fa.js";import"./css-50f0aa1d.js";import"./VImg-3d3560c1.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./dimensions-e6c6eed7.js";import"./rounded-ef9fdb42.js";import"./transition-28907f24.js";import"./index-c8d171e2.js";import"./VSkeletonLoader-2eb0f688.js";import"./elevation-1ac0f37f.js";import"./locale-56b7257e.js";import"./FSColor-a78c68a0.js";import"./FSRow-e442cab6.js";import"./useColors-0a17cef8.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./FSText-12fda099.js";import"./FSTile-38c739ae.js";import"./FSCard-a59fef92.js";import"./FSCol-07ad80b8.js";import"./FSCheckbox-7ce6018a.js";import"./FSIcon-2736b3f2.js";import"./VIcon-56fbcc42.js";import"./useBreakpoints-952345a0.js";import"./useOrganisationId-8972b8b6.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new U({...t})).sort((t,i)=>i.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class g extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const d=()=>`${C()}/groups`,r=o=>`${d()}/${encodeURIComponent(o)}`,R=new c("group",g).create(o=>o.build(o.addGet(r),o.addGetMany(d,h),o.addCreate(d),o.addUpdate(r),o.addRemove(r),o.addNotify(e=>({changeParent:async(t,i)=>{const l=await c.http.put(r(t),i),n=new g(l.data);return e.notify("update",n),n}})))),x=$.get(R),y=S({name:"FSGroupTile",components:{FSGroupTileUI:O,FSLoadTile:k},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:i}=x();return V(()=>{e(o.groupId)}),T(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:i}}});function q(o,e,t,i,l,n){const b=p("FSLoadTile"),F=p("FSGroupTileUI");return o.getting?(u(),m(b,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=a=>o.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):o.entity?(u(),m(F,{key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=a=>o.$emit("update:modelValue",a))},null,8,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):w("",!0)}const G=L(y,[["render",q]]);y.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const he={title:"Foundation/Core/Tiles/Group",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:G},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var I,v,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const ye=["Variations"];export{s as Variations,ye as __namedExportsOrder,he as default};
