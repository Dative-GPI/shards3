import{f as g,g as V,D as s,E as p,F as m,A as y,o as U,w as k,I as w}from"./vue.esm-bundler-838daa40.js";import{F as L}from"./FSSimpleIconTileUI-65c752bb.js";import{C as n}from"./useColors-95e93720.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as q}from"./FSLoadTile-b43f1af3.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as x}from"./base-ef43f4ed.js";import{S as E}from"./serviceFactory-2dfad3af.js";import{C as R}from"./composableFactory-5509dfbf.js";import"./FSCard-f7958fe9.js";import"./FSCol-44fe82a9.js";import"./css-67cfec15.js";import"./FSRow-753b58e5.js";import"./FSIcon-1edeb40e.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./useRender-f6a4770d.js";import"./tag-d73e64d5.js";import"./FSText-204f6595.js";import"./useSlots-6ce8c1a9.js";import"./FSTile-ffde2d98.js";import"./FSClickable-bdd487a6.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./FSCheckbox-ee47ff76.js";import"./FSSpan-3df08200.js";import"./useRules-cda8e231.js";import"./VSelectionControl-b5e8c167.js";import"./density-e1cdced2.js";import"./proxiedModel-3239cc3c.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./locale-5633e5ee.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./dimensions-be952165.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-b364a14e.js";import"./elevation-c2192325.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";class b{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.path=o.path.map(r=>new _(r)).sort((r,t)=>t.index-r.index)}}class B extends b{constructor(o){super(o)}}const u=()=>`${x()}/folders`,d=e=>`${u()}/${encodeURIComponent(e)}`,N=new E("folder",B).create(e=>e.build(e.addGet(d),e.addGetMany(u,b),e.addCreate(u),e.addUpdate(d),e.addRemove(d),e.addNotify())),O=R.get(N),S=g({name:"FSFolderTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:()=>[n.Light,n.Primary]},icon:{type:String,required:!1,default:"mdi-folder-outline"}},components:{FSSimpleIconTileUI:L},setup(e){return{color:V(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?[n.Light,n.Primary]:e.bottomColor)}}});function P(e,o,r,t,v,T){const i=s("FSSimpleIconTileUI");return p(),m(i,y({bottomColor:e.color,icon:e.$props.icon,iconBackgroundColor:!0},e.$attrs),null,16,["bottomColor","icon"])}const A=I(S,[["render",P]]);S.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!0,value:"() => [ColorEnum.Light, ColorEnum.Primary]"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-folder-outline"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const h=g({name:"FSFolderTile",components:{FSFolderTileUI:A,FSLoadTile:q},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=O();return U(()=>{o(e.folderId)}),k(()=>e.folderId,()=>{o(e.folderId)}),{getting:r,entity:t}}});function D(e,o,r,t,v,T){const i=s("FSLoadTile"),$=s("FSFolderTileUI");return e.getting?(p(),m(i,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["editable","modelValue"])):e.entity?(p(),m($,y({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const C=I(h,[["render",D]]);h.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const _e={title:"Foundation/Core/Tiles/Folder",component:C,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:C},props:Object.keys(o),setup(){return{...e}},template:`
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
