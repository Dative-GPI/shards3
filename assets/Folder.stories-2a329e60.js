import{j as F,e as V,I as s,J as m,K as p,A as h,o as U,w as k,N as w}from"./vue.esm-bundler-3386cb71.js";import{F as L}from"./FSSimpleIconTileUI-c62126c6.js";import{C as n}from"./useColors-36e524b3.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-5a660497.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as B}from"./base-4e5ccaa5.js";import{S as x}from"./serviceFactory-3393b4e4.js";import{C as R}from"./composableFactory-0f23559b.js";import"./FSCard-a2619b8a.js";import"./FSCol-30a69fbd.js";import"./css-bcfd232c.js";import"./FSRow-9733beba.js";import"./FSIcon-d790d92f.js";import"./VIcon-abe9af82.js";import"./color-2c4e2e53.js";import"./theme-620a0d92.js";import"./useRender-09edae02.js";import"./tag-3fcf7e02.js";import"./FSText-81a21680.js";import"./useSlots-347b7354.js";import"./FSTile-d4670fc1.js";import"./FSClickable-9ac660a4.js";import"./VProgressCircular-14287b05.js";import"./resizeObserver-d0e0f324.js";import"./FSCheckbox-8b71851a.js";import"./FSSpan-ecd93ab1.js";import"./useRules-e6c68f0f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./density-e280830a.js";import"./proxiedModel-e633c715.js";import"./index-dcfb76a3.js";import"./VLabel-92708ef4.js";import"./VInput-567a126f.js";import"./locale-cd7ecdad.js";import"./index-8c130ea8.js";import"./transition-53ccad39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";class I{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.path=o.path.map(t=>new _(t)).sort((t,r)=>r.index-t.index)}}class E extends I{constructor(o){super(o)}}const u=()=>`${B()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new x("folder",E).create(e=>e.build(e.addGet(d),e.addGetMany(u,I),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=R.get(N),b=F({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleIconTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,t,r,v,T){const l=s("FSSimpleIconTileUI");return m(),p(l,h({bottomColor:e.color,icon:e.$props.icon,iconBackgroundColor:!0},e.$attrs),null,16,["bottomColor","icon"])}const A=y(b,[["render",P]]);b.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"[ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=F({name:"FSFolderTile",components:{FSFolderTileUI:A,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:r}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:t,entity:r}}});function H(e,o,t,r,v,T){const l=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(m(),p(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(m(),p($,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const C=y(S,[["render",H]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Be={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const xe=["Variations"];export{i as Variations,xe as __namedExportsOrder,Be as default};
