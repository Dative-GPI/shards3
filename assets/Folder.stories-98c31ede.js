import{j as F,e as V,H as s,I as m,J as p,x as h,o as U,w as k,M as w}from"./vue.esm-bundler-9b0e8103.js";import{F as L}from"./FSSimpleIconTileUI-3f59106f.js";import{C as n}from"./useColors-92311d90.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-57d038ae.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as x}from"./base-63b12e08.js";import{S as B}from"./serviceFactory-3393b4e4.js";import{C as R}from"./composableFactory-3da3eea4.js";import"./FSCard-2aeec95e.js";import"./FSCol-417d1c42.js";import"./css-a20776b9.js";import"./FSRow-efd9bf42.js";import"./FSIcon-fb1e9586.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./theme-eb9d1a1f.js";import"./useRender-7c6c7a38.js";import"./tag-6bef4934.js";import"./FSText-ae8f3525.js";import"./useSlots-bfff66e3.js";import"./FSTile-34d141a4.js";import"./FSClickable-e19a2efb.js";import"./VProgressCircular-49cc274e.js";import"./resizeObserver-d1864ccd.js";import"./FSCheckbox-f5a78617.js";import"./FSSpan-66c77817.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./proxiedModel-bfd89816.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-1b8a1203.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";class I{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.path=o.path.map(t=>new _(t)).sort((t,r)=>r.index-t.index)}}class E extends I{constructor(o){super(o)}}const u=()=>`${x()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new B("folder",E).create(e=>e.build(e.addGet(d),e.addGetMany(u,I),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=R.get(N),b=F({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleIconTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,t,r,v,T){const l=s("FSSimpleIconTileUI");return m(),p(l,h({bottomColor:e.color,icon:e.$props.icon,iconBackgroundColor:!0},e.$attrs),null,16,["bottomColor","icon"])}const H=y(b,[["render",P]]);b.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"[ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=F({name:"FSFolderTile",components:{FSFolderTileUI:H,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:r}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:t,entity:r}}});function j(e,o,t,r,v,T){const l=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(m(),p(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(m(),p($,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const C=y(S,[["render",j]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const xe={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Be=["Variations"];export{i as Variations,Be as __namedExportsOrder,xe as default};
