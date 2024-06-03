import{f as c,g as v,D as s,E as d,F as l,A as g,o as T,w as V,I as C}from"./vue.esm-bundler-838daa40.js";import{F as $}from"./FSSimpleTileUI-551a99f9.js";import{C as m}from"./useColors-9d29fce3.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-c8c97c9d.js";import{a as w}from"./useDashboardOrganisations-657c793b.js";import"./FSCard-e5e470ea.js";import"./FSCol-44fe82a9.js";import"./css-67cfec15.js";import"./FSRow-753b58e5.js";import"./FSIcon-212b990d.js";import"./VIcon-281b119b.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./useRender-f6a4770d.js";import"./tag-d73e64d5.js";import"./FSImage-6d919371.js";import"./FSLoader-e5a4173e.js";import"./dimensions-be952165.js";import"./elevation-c2192325.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-5509dfbf.js";import"./VImg-26cf6021.js";import"./rounded-94d04543.js";import"./transition-ee4dd36d.js";import"./index-e75f540f.js";import"./FSText-0819f919.js";import"./useSlots-6ce8c1a9.js";import"./FSTile-a17dbbf3.js";import"./FSClickable-80b82e76.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./FSCheckbox-c67676d0.js";import"./FSSpan-3df08200.js";import"./useRules-cda8e231.js";import"./VSelectionControl-b5e8c167.js";import"./density-e1cdced2.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./index-6fa9bdc1.js";import"./index-a0e5e2a3.js";import"./widgetInfos-913cb8f0.js";import"./pathCrumb-3dbc85d5.js";import"./base-ef43f4ed.js";import"./useAppOrganisationId-ac05104a.js";const h=c({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:v(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function k(e,o,r,t,I,S){const n=s("FSSimpleTileUI");return d(),l(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=b(h,[["render",k]]);h.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const y=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:U,FSLoadTile:D},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=w();return T(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:r,entity:t}}});function q(e,o,r,t,I,S){const n=s("FSLoadTile"),F=s("FSDashboardOrganisationTileUI");return e.getting?(d(),l(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),l(F,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const O=b(y,[["render",q]]);y.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisation",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:O},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      FSDashboardOrganisationTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Ue=["Variations"];export{a as Variations,Ue as __namedExportsOrder,ke as default};
