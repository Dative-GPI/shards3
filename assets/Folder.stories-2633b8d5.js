import{j as F,e as V,I as s,J as m,K as p,B as h,o as U,w as k,N as w}from"./vue.esm-bundler-41eda46b.js";import{F as L}from"./FSSimpleIconTileUI-1e360da0.js";import{C as n}from"./useColors-baaa98f5.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-1972612a.js";import{P as B}from"./pathCrumb-3dbc85d5.js";import{C as _}from"./base-72a78366.js";import{S as x}from"./serviceFactory-7552fe10.js";import{C as R}from"./composableFactory-00c2f0ee.js";import"./FSCard-8067a4d4.js";import"./FSCol-282cc158.js";import"./css-35e8563f.js";import"./FSRow-1508d56d.js";import"./FSIcon-713345eb.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./theme-be1bd2db.js";import"./useRender-dd35ddd1.js";import"./tag-64b4b0e7.js";import"./FSText-f60941a6.js";import"./useSlots-e8ea556e.js";import"./FSTile-d711885d.js";import"./FSClickable-416c7a7e.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./FSCheckbox-90b24572.js";import"./FSSpan-8af5ddcc.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-42a6862f.js";import"./density-b42ba92f.js";import"./proxiedModel-03601969.js";import"./index-4ba2035c.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./locale-84078765.js";import"./index-dc0570e5.js";import"./transition-695cd20f.js";import"./dimensions-5b54e342.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-5fe6d2d9.js";import"./elevation-878f110a.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";class I{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.path=o.path.map(t=>new B(t)).sort((t,r)=>r.index-t.index)}}class E extends I{constructor(o){super(o)}}const u=()=>`${_()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new x("folder",E).create(e=>e.build(e.addGet(d),e.addGetMany(u,I),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=R.get(N),b=F({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleIconTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,t,r,v,T){const l=s("FSSimpleIconTileUI");return m(),p(l,h({bottomColor:e.color,icon:e.$props.icon,iconBackgroundColor:!0},e.$attrs),null,16,["bottomColor","icon"])}const H=y(b,[["render",P]]);b.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const S=F({name:"FSFolderTile",components:{FSFolderTileUI:H,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:r}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:t,entity:r}}});function j(e,o,t,r,v,T){const l=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(m(),p(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(m(),p($,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const C=y(S,[["render",j]]);S.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Be={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
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
