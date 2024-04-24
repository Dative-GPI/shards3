import{j as V,o as T,w,I as p,J as l,K as u,x as C,N as O}from"./vue.esm-bundler-0c8496bd.js";import{F as U}from"./FSGroupTileUI-96f1a412.js";import{F as $}from"./FSLoadTile-815b5b63.js";import{P as k}from"./pathCrumb-3dbc85d5.js";import{C as L}from"./base-d0065ec9.js";import{S as m}from"./serviceFactory-3393b4e4.js";import{C as f}from"./composableFactory-ad68cfdd.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-4c24fbb7.js";import"./FSLoader-6cae8fac.js";import"./css-0fb78066.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./color-e947437a.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./useRender-8701d95b.js";import"./base-0de1729e.js";import"./VImg-b480c03c.js";import"./rounded-6b3d6a43.js";import"./transition-893c383a.js";import"./index-68016ae5.js";import"./FSColor-6804a1f7.js";import"./FSCard-4f1ec4e8.js";import"./FSCol-0a323bdc.js";import"./FSRow-547598b4.js";import"./FSText-107f4924.js";import"./useSlots-d0001844.js";import"./FSTile-b2fd462f.js";import"./FSClickable-c9a0944c.js";import"./VProgressCircular-91035e99.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSCheckbox-9b9919c2.js";import"./FSIcon-e8919096.js";import"./FSSpan-dff588c4.js";import"./useRules-a67d9042.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./density-22f26472.js";import"./index-5120e393.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./index-5d52efe8.js";import"./useAppOrganisationId-df946d5a.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new k({...t})).sort((t,r)=>r.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class c extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const a=()=>`${L()}/groups`,i=o=>`${a()}/${encodeURIComponent(o)}`,y=new m("group",c).create(o=>o.build(o.addGet(i),o.addGetMany(a,h),o.addCreate(a),o.addUpdate(i),o.addRemove(i),o.addNotify(e=>({...m.addCustom("changeParent",(t,r,d)=>t.put(i(r),d),t=>{const r=new c(t);return e.notify("update",r),r})})))),x=f.get(y);f.custom(y.changeParent);const G=V({name:"FSGroupTile",components:{FSGroupTileUI:U,FSLoadTile:$},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:r}=x();return T(()=>{e(o.groupId)}),w(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:r}}});function P(o,e,t,r,d,q){const F=p("FSLoadTile"),S=p("FSGroupTileUI");return o.getting?(l(),u(F,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):o.entity?(l(),u(S,C({key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=n=>o.$emit("update:modelValue",n))},o.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):O("",!0)}const b=R(G,[["render",P]]);G.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const xe={title:"Foundation/Core/Tiles/Group",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:b},props:Object.keys(e),setup(){return{...o}},template:`
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
