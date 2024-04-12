import{j as y,o as I,w as b,H as l,I as a,J as s,x as v,M as S}from"./vue.esm-bundler-43a473fd.js";import{F as V}from"./FSSimpleIconTileUI-7cb2365a.js";import{F as T}from"./FSLoadTile-902d668c.js";import{P as k}from"./pathCrumb-3dbc85d5.js";import{C}from"./base-1344684c.js";import{S as $}from"./serviceFactory-3393b4e4.js";import{C as w}from"./composableFactory-cfaf9e24.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSCard-bab2eafe.js";import"./FSCol-3eed52f7.js";import"./css-18b0cf8e.js";import"./FSRow-ba466629.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./FSIcon-b00305b5.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./useRender-d2bddd17.js";import"./tag-2aee60b4.js";import"./FSText-146d16e4.js";import"./useSlots-e98bc591.js";import"./FSTile-2b5b1887.js";import"./FSClickable-83a8d600.js";import"./VProgressCircular-108a63fb.js";import"./intersectionObserver-6db224c5.js";import"./resizeObserver-059c00b3.js";import"./FSCheckbox-eda3e056.js";import"./FSSpan-f049a07d.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./proxiedModel-7eeaa9ef.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSLoader-75274e0e.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./useAppOrganisationId-1a1455ad.js";import"./lodash-569b8a6d.js";class u{constructor(o){this.id=o.id,this.organisationId=o.organisationId,this.parentId=o.parentId,this.parentLabel=o.parentLabel,this.parentIcon=o.parentIcon,this.label=o.label,this.icon=o.icon,this.code=o.code,this.tags=o.tags.slice(),this.colors=o.colors.slice(),this.imageId=o.imageId,this.imageBlurHash=o.imageBlurHash,this.imageHeight=o.imageHeight,this.imageWidth=o.imageWidth,this.path=o.path.map(t=>new k(t)).sort((t,r)=>r.index-t.index)}}class x extends u{constructor(o){super(o)}}const c=()=>`${C()}/folders`,U=e=>`${c()}/${encodeURIComponent(e)}`,B=new $("folder",x).create(e=>e.build(e.addGet(U),e.addGetMany(c,u),e.addNotify())),R=w.get(B),f=y({name:"FSDashboardTile",components:{FSSimpleIconTileUI:V,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:r}=R();return I(()=>{o(e.folderId)}),b(()=>e.folderId,()=>{o(e.folderId)}),{getting:t,entity:r}}});function q(e,o,t,r,O,D){const F=l("FSLoadTile"),h=l("FSSimpleIconTileUI");return e.getting?(a(),s(F,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):e.entity?(a(),s(h,v({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,iconBackgroundColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),null,16,["label","code","bottomColor","iconBackgroundColor","icon","editable","modelValue"])):S("",!0)}const g=L(f,[["render",q]]);f.__docgenInfo={displayName:"FSDashboardTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Le={title:"Foundation/Core/Tiles/Folder",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var d,p,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const xe=["Variations"];export{i as Variations,xe as __namedExportsOrder,Le as default};
