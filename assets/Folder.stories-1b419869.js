import{f as F,g as V,D as s,E as p,F as m,A as y,o as U,w as k,I as w}from"./vue.esm-bundler-f632b118.js";import{F as L}from"./FSSimpleTileUI-bdc67d26.js";import{C as n}from"./useColors-5866e399.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-a7e64fe9.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as E}from"./base-dd7352d9.js";import{S as R}from"./serviceFactory-2dfad3af.js";import{C as x}from"./composableFactory-0b8943d1.js";import"./FSCard-491552ba.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./FSRow-76f4ad1e.js";import"./FSIcon-8032a9d1.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./theme-7fcd5c30.js";import"./useRender-e08116dd.js";import"./tag-f52d5248.js";import"./FSImage-7e26743e.js";import"./FSLoader-6ced331e.js";import"./dimensions-655ad4fc.js";import"./elevation-f0466824.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./base-0de1729e.js";import"./VImg-82f9d308.js";import"./rounded-83656db8.js";import"./transition-c0ed457c.js";import"./index-c976eaf6.js";import"./FSText-09696756.js";import"./useSlots-de625f75.js";import"./FSTile-718b43b1.js";import"./FSClickable-4011125f.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./FSCheckbox-bde4293d.js";import"./FSSpan-4ac1bb71.js";import"./useRules-89bf8a4c.js";import"./VSelectionControl-27ff8605.js";import"./density-2a21ba5c.js";import"./index-5c2ea69f.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./index-f6c0e33a.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";class b{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.path=o.path.map(r=>new _(r)).sort((r,t)=>t.index-r.index)}}class B extends b{constructor(o){super(o)}}const u=()=>`${E()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new R("folder",B).create(e=>e.build(e.addGet(d),e.addGetMany(u,b),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=x.get(N),S=F({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,r,t,v,T){const i=s("FSSimpleTileUI");return p(),m(i,y({iconBackgroundColor:!0,bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const A=I(S,[["render",P]]);S.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const h=F({name:"FSFolderTile",components:{FSFolderTileUI:A,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:r,entity:t}}});function D(e,o,r,t,v,T){const i=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(p(),m(i,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(p(),m($,y({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):w("",!0)}const C=I(h,[["render",D]]);h.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Ne={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var c,f,g;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Oe=["Variations"];export{l as Variations,Oe as __namedExportsOrder,Ne as default};
