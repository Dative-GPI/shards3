import{j as V,o as T,w,I as p,J as l,K as u,x as C,N as O}from"./vue.esm-bundler-b2d5d1a7.js";import{F as U}from"./FSGroupTileUI-abda966c.js";import{F as $}from"./FSLoadTile-d62ea037.js";import{P as k}from"./pathCrumb-3dbc85d5.js";import{C as L}from"./base-647aa1fa.js";import{S as m}from"./serviceFactory-3393b4e4.js";import{C as f}from"./composableFactory-6dbd7c00.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSImage-42c24b58.js";import"./FSLoader-d736f414.js";import"./css-9d61559d.js";import"./useColors-1799ca43.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-66179376.js";import"./color-1b074b3b.js";import"./dimensions-31f51931.js";import"./elevation-b9c046ce.js";import"./locale-602cc07b.js";import"./proxiedModel-92ce7dab.js";import"./useRender-3dd3f3c7.js";import"./base-0de1729e.js";import"./VImg-ba624ef1.js";import"./rounded-5a33644a.js";import"./transition-42bdb3ea.js";import"./index-4361ac4f.js";import"./FSColor-33363c0a.js";import"./FSCard-c003de31.js";import"./FSCol-8af42802.js";import"./FSRow-ad0fe7ea.js";import"./FSText-747b43d9.js";import"./useSlots-0e4d21ee.js";import"./FSTile-02e00a03.js";import"./FSClickable-f13d43bf.js";import"./VProgressCircular-b30bdd5e.js";import"./resizeObserver-b444ab71.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./FSCheckbox-cb8c7fe9.js";import"./FSIcon-6a2b7637.js";import"./FSSpan-2ee73edb.js";import"./useRules-999feed4.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./density-aec4d930.js";import"./index-7713af82.js";import"./VLabel-fe75201b.js";import"./VInput-16b8deac.js";import"./index-c0240410.js";import"./useAppOrganisationId-66e3eeba.js";import"./lodash-569b8a6d.js";class h{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.parentId=e.parentId,this.imageId=e.imageId,this.imageBlurHash=e.imageBlurHash,this.imageHeight=e.imageHeight,this.imageWidth=e.imageWidth,this.icon=e.icon,this.code=e.code,this.label=e.label,this.tags=e.tags,this.path=e.path.map(t=>new k({...t})).sort((t,r)=>r.index-t.index),this.groupsIds=e.groupsIds.slice(),this.deviceOrganisationsIds=e.deviceOrganisationsIds.slice(),this.modelsIds=e.modelsIds.slice(),this.recursiveGroupsIds=e.recursiveGroupsIds.slice(),this.recursiveDeviceOrganisationsIds=e.recursiveDeviceOrganisationsIds.slice(),this.recursiveModelsIds=e.recursiveModelsIds.slice()}}class c extends h{constructor(e){super(e),this.parentIcon=e.parentIcon,this.parentLabel=e.parentLabel}}const a=()=>`${L()}/groups`,i=o=>`${a()}/${encodeURIComponent(o)}`,y=new m("group",c).create(o=>o.build(o.addGet(i),o.addGetMany(a,h),o.addCreate(a),o.addUpdate(i),o.addRemove(i),o.addNotify(e=>({...m.addCustom("changeParent",(t,r,d)=>t.put(i(r),d),t=>{const r=new c(t);return e.notify("update",r),r})})))),x=f.get(y);f.custom(y.changeParent);const G=V({name:"FSGroupTile",components:{FSGroupTileUI:U,FSLoadTile:$},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:r}=x();return T(()=>{e(o.groupId)}),w(()=>o.groupId,()=>{e(o.groupId)}),{getting:t,entity:r}}});function P(o,e,t,r,d,q){const F=p("FSLoadTile"),S=p("FSGroupTileUI");return o.getting?(l(),u(F,{key:0,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):o.entity?(l(),u(S,C({key:1,imageId:o.entity.imageId,label:o.entity.label,code:o.entity.code,recursiveGroupsIds:o.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:o.entity.recursiveDeviceOrganisationsIds,editable:o.$props.editable,modelValue:o.modelValue,"onUpdate:modelValue":e[1]||(e[1]=n=>o.$emit("update:modelValue",n))},o.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):O("",!0)}const b=R(G,[["render",P]]);G.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const xe={title:"Foundation/Core/Tiles/Group",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},s={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(o,{argTypes:e})=>({components:{FSGroupTile:b},props:Object.keys(e),setup(){return{...o}},template:`
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
