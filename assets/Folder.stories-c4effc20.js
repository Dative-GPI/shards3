import{f as F,g as V,D as s,E as p,F as m,A as y,o as U,w as k,I as w}from"./vue.esm-bundler-f632b118.js";import{F as L}from"./FSSimpleTileUI-d6d7b452.js";import{C as n}from"./useColors-c1b539be.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-2c22d251.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as E}from"./base-dd7352d9.js";import{S as R}from"./serviceFactory-2dfad3af.js";import{C as x}from"./composableFactory-0b8943d1.js";import"./FSCard-75477b2b.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./FSRow-76f4ad1e.js";import"./FSIcon-110a991e.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./theme-a477330d.js";import"./useRender-7972ae0c.js";import"./tag-573fddf1.js";import"./FSImage-8cd50a0c.js";import"./FSLoader-af2e647d.js";import"./dimensions-44367821.js";import"./elevation-cd810633.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./base-0de1729e.js";import"./VImg-7d50303f.js";import"./rounded-ce7e598f.js";import"./transition-8112e83c.js";import"./index-cd1f7a70.js";import"./FSText-d2336987.js";import"./useSlots-de625f75.js";import"./FSTile-2bc63c46.js";import"./FSClickable-af644c0d.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./FSCheckbox-5ebd306d.js";import"./FSSpan-4ac1bb71.js";import"./useRules-31faed85.js";import"./VSelectionControl-c78f62cb.js";import"./density-78dfa9a7.js";import"./index-131c488a.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./index-6e5ff885.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";class b{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.path=o.path.map(r=>new _(r)).sort((r,t)=>t.index-r.index)}}class B extends b{constructor(o){super(o)}}const u=()=>`${E()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new R("folder",B).create(e=>e.build(e.addGet(d),e.addGetMany(u,b),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=x.get(N),S=F({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,r,t,v,T){const i=s("FSSimpleTileUI");return p(),m(i,y({iconBackgroundColor:!0,bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const A=I(S,[["render",P]]);S.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const h=F({name:"FSFolderTile",components:{FSFolderTileUI:A,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:r,entity:t}}});function D(e,o,r,t,v,T){const i=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(p(),m(i,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(p(),m($,y({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):w("",!0)}const C=I(h,[["render",D]]);h.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Ne={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
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
