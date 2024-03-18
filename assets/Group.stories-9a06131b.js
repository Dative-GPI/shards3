import{g as S,o as V,w as T,J as p,K as u,L as m,P as w}from"./vue.esm-bundler-0a1af505.js";import{F as O}from"./FSGroupTileUI-2ef00589.js";import{P as U,F as k}from"./FSLoadTile-f75f8d11.js";import{C,a as $}from"./base-1e226b07.js";import{S as c}from"./base-3cbdc314.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-4ce18fa7.js";import"./css-72b65878.js";import"./useColors-90958e24.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-8d83670f.js";import"./color-84472fbe.js";import"./dimensions-41d36b25.js";import"./elevation-68e8c545.js";import"./locale-d3181d48.js";import"./proxiedModel-350eff8d.js";import"./useRender-76465e3d.js";import"./VImg-1b868636.js";import"./rounded-caec20b0.js";import"./transition-afc70ddd.js";import"./index-411e5c5c.js";import"./FSColor-1ccad9e8.js";import"./FSCard-55f650e4.js";import"./FSCol-202c8297.js";import"./FSRow-43a88505.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./FSText-9ed86449.js";import"./FSTile-7d514881.js";import"./FSCheckbox-5f65e7c1.js";import"./FSIcon-6a7ab6e0.js";import"./VIcon-4501998f.js";import"./tag-6ffe4ba6.js";import"./useOrganisationId-ec37ca94.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new U({...t})).sort((t,i)=>i.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class g extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const d=()=>`${C()}/groups`,r=o=>`${d()}/${encodeURIComponent(o)}`,R=new c("group",g).create(o=>o.build(o.addGet(r),o.addGetMany(d,h),o.addCreate(d),o.addUpdate(r),o.addRemove(r),o.addNotify(e=>({changeParent:async(t,i)=>{const l=await c.http.put(r(t),i),n=new g(l.data);return e.notify("update",n),n}})))),x=$.get(R),y=S({name:"FSGroupTile",components:{FSGroupTileUI:O,FSLoadTile:k},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:i}=x();return V(()=>{e(o.groupId)}),T(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:i}}});function q(o,e,t,i,l,n){const b=p("FSLoadTile"),F=p("FSGroupTileUI");return o.getting?(u(),m(b,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=a=>o.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):o.entity?(u(),m(F,{key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=a=>o.$emit("update:modelValue",a))},null,8,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):w("",!0)}const G=L(y,[["render",q]]);y.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const he={title:"Foundation/Core/Tiles/Group",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:G},props:Object.keys(e),setup(){return{...o}},template:`
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
