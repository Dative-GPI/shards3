import{f,g as F,D as i,E as s,F as d,A as h,o as T,w as V,I as C}from"./vue.esm-bundler-f632b118.js";import{F as $}from"./FSSimpleTileUI-d6d7b452.js";import{C as p}from"./useColors-c1b539be.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-2c22d251.js";import{a as k}from"./useDashboardShallows-492778a4.js";import"./FSCard-75477b2b.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./FSRow-76f4ad1e.js";import"./FSIcon-110a991e.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./theme-a477330d.js";import"./useRender-7972ae0c.js";import"./tag-573fddf1.js";import"./FSImage-8cd50a0c.js";import"./FSLoader-af2e647d.js";import"./dimensions-44367821.js";import"./elevation-cd810633.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./VImg-7d50303f.js";import"./rounded-ce7e598f.js";import"./transition-8112e83c.js";import"./index-cd1f7a70.js";import"./FSText-d2336987.js";import"./useSlots-de625f75.js";import"./FSTile-2bc63c46.js";import"./FSClickable-af644c0d.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./FSCheckbox-5ebd306d.js";import"./FSSpan-4ac1bb71.js";import"./useRules-31faed85.js";import"./VSelectionControl-c78f62cb.js";import"./density-78dfa9a7.js";import"./index-131c488a.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./index-6e5ff885.js";import"./index-a0e5e2a3.js";import"./base-dd7352d9.js";import"./useAppOrganisationId-0d113abb.js";import"./widgetInfos-913cb8f0.js";import"./pathCrumb-3dbc85d5.js";const S=f({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:p.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?p.Primary:e.bottomColor)}}});function U(e,o,r,t,y,v){const l=i("FSSimpleTileUI");return s(),d(l,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const q=b(S,[["render",U]]);S.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const w=f({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:q,FSLoadTile:D},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return T(()=>{o(e.dashboardShallowId)}),V(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:r,entity:t}}});function B(e,o,r,t,y,v){const l=i("FSLoadTile"),I=i("FSDashboardShallowTileUI");return e.getting?(s(),d(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):e.entity?(s(),d(I,h({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const g=b(w,[["render",B]]);w.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var m,u,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      FSDashboardShallowTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const qe=["Variations"];export{a as Variations,qe as __namedExportsOrder,Ue as default};
