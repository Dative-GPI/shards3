import{j as F,e as V,I as s,J as m,K as p,B as h,o as U,w as k,N as w}from"./vue.esm-bundler-857e5af7.js";import{F as L}from"./FSSimpleIconTileUI-bb384922.js";import{C as n}from"./useColors-17643043.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-f286015b.js";import{P as B}from"./pathCrumb-3dbc85d5.js";import{C as _}from"./base-0cefeb30.js";import{S as x}from"./serviceFactory-7552fe10.js";import{C as R}from"./composableFactory-64294cb0.js";import"./FSCard-e175fef9.js";import"./FSCol-439c812a.js";import"./css-ab2bdb81.js";import"./FSRow-e30f1dcc.js";import"./FSIcon-d0ab000b.js";import"./VIcon-77d6c341.js";import"./color-3025502c.js";import"./theme-d5133154.js";import"./useRender-1606c976.js";import"./tag-41ce785e.js";import"./FSText-0e9e862b.js";import"./useSlots-8bee1a74.js";import"./FSTile-75725fa5.js";import"./FSClickable-450f52d6.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./FSCheckbox-54879197.js";import"./FSSpan-9f7a3096.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-ac658b6e.js";import"./density-9a54c498.js";import"./proxiedModel-c6c1514f.js";import"./index-1a539509.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./locale-54c2c8ba.js";import"./index-900eb6c5.js";import"./transition-8ae71e6c.js";import"./dimensions-946cb0c4.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-da23fb58.js";import"./elevation-c9d86896.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";class I{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.path=o.path.map(t=>new B(t)).sort((t,r)=>r.index-t.index)}}class E extends I{constructor(o){super(o)}}const u=()=>`${_()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new x("folder",E).create(e=>e.build(e.addGet(d),e.addGetMany(u,I),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=R.get(N),b=F({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleIconTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,t,r,v,T){const l=s("FSSimpleIconTileUI");return m(),p(l,h({bottomColor:e.color,icon:e.$props.icon,iconBackgroundColor:!0},e.$attrs),null,16,["bottomColor","icon"])}const H=y(b,[["render",P]]);b.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=F({name:"FSFolderTile",components:{FSFolderTileUI:H,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:r}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:t,entity:r}}});function j(e,o,t,r,v,T){const l=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(m(),p(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(m(),p($,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const C=y(S,[["render",j]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Be={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var c,f,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2", "3"],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSFolderTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const _e=["Variations"];export{i as Variations,_e as __namedExportsOrder,Be as default};
