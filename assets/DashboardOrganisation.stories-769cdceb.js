import{f as c,g as v,D as s,E as d,F as l,A as g,o as T,w as V,I as C}from"./vue.esm-bundler-6f923154.js";import{F as $}from"./FSSimpleTileUI-7bb4aa95.js";import{C as m}from"./useColors-9144d90e.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-ed43800c.js";import{a as w}from"./useDashboardOrganisations-37bfe7a9.js";import"./FSCard-32925b42.js";import"./FSCol-5ed907ac.js";import"./css-0cf2e273.js";import"./FSRow-64caadb9.js";import"./FSIcon-93774118.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./theme-a8226b2e.js";import"./useRender-1cb09274.js";import"./tag-a7b67944.js";import"./FSImage-1529358f.js";import"./FSLoader-6b86cc0d.js";import"./dimensions-dec12c77.js";import"./elevation-2c5be1c3.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./VImg-8e65ad17.js";import"./rounded-1f8e51a9.js";import"./transition-e76cd387.js";import"./index-114ba00f.js";import"./FSText-eacee215.js";import"./useSlots-21493751.js";import"./FSTile-29567eff.js";import"./FSClickable-e71ee20f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./FSCheckbox-4fa3808a.js";import"./FSSpan-7bb94541.js";import"./useRules-8e3c4a4a.js";import"./VSelectionControl-40c897c6.js";import"./density-03404b67.js";import"./index-55248dcb.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./index-4caca680.js";import"./index-a0e5e2a3.js";import"./dashboardTranslation-1af96bca.js";import"./pathCrumb-3dbc85d5.js";import"./base-1b059240.js";import"./useAppOrganisationId-8a611d3f.js";const h=c({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:v(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function k(e,o,r,t,I,S){const n=s("FSSimpleTileUI");return d(),l(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=b(h,[["render",k]]);h.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const y=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:U,FSLoadTile:D},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=w();return T(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:r,entity:t}}});function q(e,o,r,t,I,S){const n=s("FSLoadTile"),F=s("FSDashboardOrganisationTileUI");return e.getting?(d(),l(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),l(F,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const O=b(y,[["render",q]]);y.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisation",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:O},props:Object.keys(o),setup(){return{...e}},template:`
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
