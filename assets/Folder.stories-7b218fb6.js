import{j as g,H as d,I as s,J as p,x as F,o as V,w as U,M as k}from"./vue.esm-bundler-9b0e8103.js";import{F as C}from"./FSSimpleIconTileUI-d7db3001.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as w}from"./FSLoadTile-c67d97c3.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as x}from"./base-63b12e08.js";import{S as L}from"./serviceFactory-3393b4e4.js";import{C as R}from"./composableFactory-3da3eea4.js";import"./FSCard-30518430.js";import"./FSCol-417d1c42.js";import"./css-a20776b9.js";import"./FSRow-efd9bf42.js";import"./useColors-c8cdc69f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./FSIcon-42763d21.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./useRender-7c6c7a38.js";import"./tag-6bef4934.js";import"./FSText-84a86aec.js";import"./useSlots-bfff66e3.js";import"./FSTile-d6c9683f.js";import"./FSClickable-5ad64f7c.js";import"./VProgressCircular-a5b71e87.js";import"./intersectionObserver-569479cd.js";import"./resizeObserver-d1864ccd.js";import"./FSCheckbox-0f6bd9a8.js";import"./FSSpan-66c77817.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./proxiedModel-bfd89816.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./FSLoader-57df4c1d.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";class h{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.path=o.path.map(t=>new _(t)).sort((t,r)=>r.index-t.index)}}class B extends h{constructor(o){super(o)}}const m=()=>`${x()}/folders`,a=e=>`${m()}/${encodeURIComponent(e)}`,q=new L("folder",B).create(e=>e.build(e.addGet(a),e.addGetMany(m,h),e.addCreate(m),e.addUpdate(a),e.addRemove(a),e.addNotify())),N=R.get(q),S=g({name:"FSFolderTileUI",components:{FSSimpleIconTileUI:C}});function O(e,o,t,r,b,T){const i=d("FSSimpleIconTileUI");return s(),p(i,F({iconBackgroundColor:!0},e.$attrs),null,16)}const H=I(S,[["render",O]]);S.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const y=g({name:"FSFolderTile",components:{FSFolderTileUI:H,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:r}=N();return V(()=>{o(e.folderId)}),U(()=>e.folderId,()=>{o(e.folderId)}),{getting:t,entity:r}}});function E(e,o,t,r,b,T){const i=d("FSLoadTile"),$=d("FSFolderTileUI");return e.getting?(s(),p(i,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},null,8,["editable","modelValue"])):e.entity?(s(),p($,F({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):k("",!0)}const v=I(y,[["render",E]]);y.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Le={title:"Foundation/Core/Tiles/Folder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:v},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var u,c,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(c=n.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};const Re=["Variations"];export{n as Variations,Re as __namedExportsOrder,Le as default};
