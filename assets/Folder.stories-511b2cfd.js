import{j as g,H as d,I as s,J as p,x as F,o as V,w as U,M as k}from"./vue.esm-bundler-43a473fd.js";import{F as C}from"./FSSimpleIconTileUI-d6488ae1.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as w}from"./FSLoadTile-e4ac7423.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as x}from"./base-1344684c.js";import{S as L}from"./serviceFactory-3393b4e4.js";import{C as R}from"./composableFactory-cfaf9e24.js";import"./FSCard-36571157.js";import"./FSCol-3eed52f7.js";import"./css-18b0cf8e.js";import"./FSRow-ba466629.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./FSIcon-0563dc08.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./useRender-d2bddd17.js";import"./tag-2aee60b4.js";import"./FSText-e0cd8299.js";import"./useSlots-e98bc591.js";import"./FSTile-45bc1f38.js";import"./FSClickable-4c4a34e1.js";import"./VProgressCircular-108a63fb.js";import"./intersectionObserver-6db224c5.js";import"./resizeObserver-059c00b3.js";import"./FSCheckbox-3a944625.js";import"./FSSpan-f049a07d.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./proxiedModel-7eeaa9ef.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSLoader-75274e0e.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./useAppOrganisationId-1a1455ad.js";import"./lodash-569b8a6d.js";class h{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.path=o.path.map(t=>new _(t)).sort((t,r)=>r.index-t.index)}}class B extends h{constructor(o){super(o)}}const m=()=>`${x()}/folders`,a=e=>`${m()}/${encodeURIComponent(e)}`,q=new L("folder",B).create(e=>e.build(e.addGet(a),e.addGetMany(m,h),e.addCreate(m),e.addUpdate(a),e.addRemove(a),e.addNotify())),N=R.get(q),S=g({name:"FSFolderTileUI",components:{FSSimpleIconTileUI:C}});function O(e,o,t,r,b,T){const i=d("FSSimpleIconTileUI");return s(),p(i,F({iconBackgroundColor:!0},e.$attrs),null,16)}const H=I(S,[["render",O]]);S.__docgenInfo={displayName:"FSFolderTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSFolderTileUI.vue"]};const y=g({name:"FSFolderTile",components:{FSFolderTileUI:H,FSLoadTile:w},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:r}=N();return V(()=>{o(e.folderId)}),U(()=>e.folderId,()=>{o(e.folderId)}),{getting:t,entity:r}}});function E(e,o,t,r,b,T){const i=d("FSLoadTile"),$=d("FSFolderTileUI");return e.getting?(s(),p(i,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=l=>e.$emit("update:modelValue",l))},null,8,["editable","modelValue"])):e.entity?(s(),p($,F({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=l=>e.$emit("update:modelValue",l))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):k("",!0)}const v=I(y,[["render",E]]);y.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Le={title:"Foundation/Core/Tiles/Folder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:v},props:Object.keys(o),setup(){return{...e}},template:`
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
