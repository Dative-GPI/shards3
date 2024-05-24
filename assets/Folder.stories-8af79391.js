import{j as g,e as V,I as s,J as p,K as m,B as y,o as U,w as k,N as w}from"./vue.esm-bundler-01006032.js";import{F as L}from"./FSSimpleIconTileUI-21207db5.js";import{C as n}from"./useColors-13ed6ee6.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-7c55beb6.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as x}from"./base-d6256dbd.js";import{S as B}from"./serviceFactory-7552fe10.js";import{C as R}from"./composableFactory-25aa3ef9.js";import"./FSCard-8fcd8e1e.js";import"./FSCol-c97fad61.js";import"./css-279a0029.js";import"./FSRow-83e75060.js";import"./FSIcon-15b738c8.js";import"./VIcon-17be8ae5.js";import"./color-8c62b342.js";import"./theme-a26d2375.js";import"./useRender-4bcbb6ac.js";import"./tag-1f5f74bd.js";import"./FSText-b54d9278.js";import"./useSlots-e0d7ab7c.js";import"./FSTile-1cd334db.js";import"./FSClickable-a0c1e9ef.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./FSCheckbox-40e0c55f.js";import"./FSSpan-6e79caf3.js";import"./useRules-54978858.js";import"./VSelectionControl-3e964160.js";import"./density-d09a1492.js";import"./proxiedModel-69023448.js";import"./index-89394051.js";import"./VLabel-f27c70ae.js";import"./VInput-50bb839f.js";import"./locale-903ef8d8.js";import"./index-491d6eb9.js";import"./transition-9c7eb302.js";import"./dimensions-4232d0fa.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-639650a7.js";import"./elevation-28c6fd5f.js";import"./useAppOrganisationId-2267e850.js";import"./lodash-569b8a6d.js";class b{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.path=o.path.map(r=>new _(r)).sort((r,t)=>t.index-r.index)}}class E extends b{constructor(o){super(o)}}const u=()=>`${x()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new B("folder",E).create(e=>e.build(e.addGet(d),e.addGetMany(u,b),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=R.get(N),S=g({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleIconTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,r,t,v,T){const i=s("FSSimpleIconTileUI");return p(),m(i,y({bottomColor:e.color,icon:e.$props.icon,iconBackgroundColor:!0},e.$attrs),null,16,["bottomColor","icon"])}const j=I(S,[["render",P]]);S.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const h=g({name:"FSFolderTile",components:{FSFolderTileUI:j,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:r,entity:t}}});function A(e,o,r,t,v,T){const i=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(p(),m(i,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(p(),m($,y({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const C=I(h,[["render",A]]);h.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const _e={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var c,f,F;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(F=(f=l.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const xe=["Variations"];export{l as Variations,xe as __namedExportsOrder,_e as default};
