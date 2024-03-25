import{g as S,o as V,w as T,J as l,K as u,L as m,P as w}from"./vue.esm-bundler-a6679ce1.js";import{F as O}from"./FSGroupTileUI-9fe5f5a4.js";import{P as U,F as k}from"./FSLoadTile-4d00852d.js";import{C,a as $}from"./base-e3f9be94.js";import{S as c}from"./base-7f65d26c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-c53509b0.js";import"./css-39e888cb.js";import"./useColors-7bfbb133.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8c0eb56d.js";import"./color-3a7410fc.js";import"./dimensions-90886f46.js";import"./elevation-643b3bb1.js";import"./locale-06782a67.js";import"./proxiedModel-8c3bd5c0.js";import"./useRender-af29532b.js";import"./VImg-e080b924.js";import"./rounded-289ab918.js";import"./transition-8ea299cd.js";import"./index-35f785c5.js";import"./FSColor-f874a965.js";import"./FSCard-3545869e.js";import"./FSCol-c92bf913.js";import"./FSRow-cccb539d.js";import"./FSSpan-e5b0fe90.js";import"./useSlots-decb0027.js";import"./FSText-3a5d632d.js";import"./FSTile-d0b81586.js";import"./FSCheckbox-2651be11.js";import"./FSIcon-1a3e04ae.js";import"./VIcon-8b39f3af.js";import"./tag-c6e00dba.js";import"./useRules-581ea3e1.js";import"./VCheckboxBtn-3bbe63a0.js";import"./VSelectionControl-6ae224f7.js";import"./density-5c9f41ad.js";import"./index-9e1e9b7b.js";import"./VLabel-aa33b01a.js";import"./VInput-01377238.js";import"./index-3965c569.js";import"./useOrganisationId-1c6c03e8.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new U({...t})).sort((t,i)=>i.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class g extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const d=()=>`${C()}/groups`,r=o=>`${d()}/${encodeURIComponent(o)}`,R=new c("group",g).create(o=>o.build(o.addGet(r),o.addGetMany(d,h),o.addCreate(d),o.addUpdate(r),o.addRemove(r),o.addNotify(e=>({changeParent:async(t,i)=>{const p=await c.http.put(r(t),i),n=new g(p.data);return e.notify("update",n),n}})))),x=$.get(R),y=S({name:"FSGroupTile",components:{FSGroupTileUI:O,FSLoadTile:k},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:i}=x();return V(()=>{e(o.groupId)}),T(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:i}}});function q(o,e,t,i,p,n){const b=l("FSLoadTile"),F=l("FSGroupTileUI");return o.getting?(u(),m(b,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=a=>o.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):o.entity?(u(),m(F,{key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=a=>o.$emit("update:modelValue",a))},null,8,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):w("",!0)}const G=L(y,[["render",q]]);y.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const we={title:"Foundation/Core/Tiles/Group",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:G},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const Oe=["Variations"];export{s as Variations,Oe as __namedExportsOrder,we as default};
