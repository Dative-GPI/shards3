import{j as V,o as T,w,J as p,K as l,L as u,x as C,P as O}from"./vue.esm-bundler-8d1b7c9b.js";import{F as U}from"./FSGroupTileUI-74acdbf0.js";import{P as $,F as k}from"./FSLoadTile-f60f63f6.js";import{C as L}from"./base-18779850.js";import{S as m}from"./serviceFactory-3393b4e4.js";import{C as f}from"./composableFactory-fdc86242.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-86702691.js";import"./css-19c8f0ab.js";import"./useColors-fe8562a0.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-82ddebf2.js";import"./color-b802304c.js";import"./dimensions-db4341a9.js";import"./elevation-7b9c5add.js";import"./locale-4596da4c.js";import"./proxiedModel-5e90dbf3.js";import"./useRender-7d329101.js";import"./base-55a66464.js";import"./VImg-82b274b6.js";import"./rounded-dfbce428.js";import"./transition-ec42203e.js";import"./index-78515ab6.js";import"./FSColor-c57d8014.js";import"./FSCard-067bcc3b.js";import"./FSCol-53c64bd8.js";import"./FSRow-a391dd26.js";import"./FSSpan-54104d2b.js";import"./useSlots-36159ddf.js";import"./FSText-5d7b6cbb.js";import"./FSTile-401d76ce.js";import"./FSClickable-40575f4d.js";import"./VProgressCircular-51b4f5f8.js";import"./intersectionObserver-872db127.js";import"./resizeObserver-170e8e39.js";import"./VIcon-af7bd965.js";import"./tag-c9f6eb57.js";import"./FSCheckbox-b3ab5f5c.js";import"./FSIcon-f1833eba.js";import"./useRules-c9867f7f.js";import"./VCheckboxBtn-7de51bc9.js";import"./VSelectionControl-b7fc0cbe.js";import"./density-f72a6349.js";import"./index-9b4e1373.js";import"./VLabel-339e0c63.js";import"./VInput-e3eb2fdb.js";import"./index-03703da7.js";import"./useAppOrganisationId-1be3da0b.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new $({...t})).sort((t,r)=>r.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class c extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const a=()=>`${L()}/groups`,i=o=>`${a()}/${encodeURIComponent(o)}`,y=new m("group",c).create(o=>o.build(o.addGet(i),o.addGetMany(a,h),o.addCreate(a),o.addUpdate(i),o.addRemove(i),o.addNotify(e=>({...m.addCustom("changeParent",(t,r,d)=>t.put(i(r),d),t=>{const r=new c(t);return e.notify("update",r),r})})))),R=f.get(y);f.custom(y.changeParent);const G=V({name:"FSGroupTile",components:{FSGroupTileUI:U,FSLoadTile:k},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:r}=R();return T(()=>{e(o.groupId)}),w(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:r}}});function x(o,e,t,r,d,q){const F=p("FSLoadTile"),S=p("FSGroupTileUI");return o.getting?(l(),u(F,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):o.entity?(l(),u(S,C({key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=n=>o.$emit("update:modelValue",n))},o.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):O("",!0)}const b=P(G,[["render",x]]);G.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Pe={title:"Foundation/Core/Tiles/Group",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:b},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(v=(I=s.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const Re=["Variations"];export{s as Variations,Re as __namedExportsOrder,Pe as default};
