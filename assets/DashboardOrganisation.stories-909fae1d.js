import{f as c,g as v,D as s,E as d,F as l,x as g,o as T,w as V,I as C}from"./vue.esm-bundler-a0893183.js";import{F as $}from"./FSSimpleTileUI-7253815c.js";import{C as m}from"./useColors-6c375bb5.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-8a173a90.js";import{a as w}from"./useDashboardOrganisations-6c61a4e6.js";import"./FSCard-c200753c.js";import"./FSCol-e45ac157.js";import"./css-03aed76d.js";import"./FSRow-821d23a1.js";import"./FSIcon-9d61ed62.js";import"./VIcon-3d9c1c96.js";import"./color-d0fba9db.js";import"./theme-41eca2c8.js";import"./useRender-13ac3742.js";import"./tag-c957791e.js";import"./FSImage-4d011f0d.js";import"./FSLoader-5eac453d.js";import"./dimensions-b1078284.js";import"./elevation-7d7e39c3.js";import"./locale-ece9a1bb.js";import"./proxiedModel-59232916.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-2d4a69cc.js";import"./VImg-941bd94b.js";import"./rounded-4c492e72.js";import"./transition-36d39bce.js";import"./index-01bbf789.js";import"./FSText-46c134d7.js";import"./useSlots-d5b57407.js";import"./FSTile-b1132c28.js";import"./FSClickable-550391c2.js";import"./VProgressCircular-94f3850c.js";import"./resizeObserver-7a348d53.js";import"./FSCheckbox-358f34d9.js";import"./FSSpan-4daadeb4.js";import"./useRules-8ba0ecf4.js";import"./VSelectionControl-df8a6f90.js";import"./density-fc3376dc.js";import"./index-8d9a280b.js";import"./VLabel-6aa65fe2.js";import"./VInput-cbd9f0c3.js";import"./index-ec7e733e.js";import"./index-a0e5e2a3.js";import"./dashboardTranslation-1af96bca.js";import"./pathCrumb-3dbc85d5.js";import"./dashboardEntityPresetInfos-755dd1fe.js";import"./base-168b8f74.js";import"./useAppOrganisationId-a0837ade.js";const h=c({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:v(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function k(e,o,r,t,I,S){const n=s("FSSimpleTileUI");return d(),l(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=b(h,[["render",k]]);h.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const y=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:U,FSLoadTile:D},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=w();return T(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:r,entity:t}}});function q(e,o,r,t,I,S){const n=s("FSLoadTile"),F=s("FSDashboardOrganisationTileUI");return e.getting?(d(),l(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),l(F,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const O=b(y,[["render",q]]);y.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardOrganisation",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:O},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const qe=["Variations"];export{a as Variations,qe as __namedExportsOrder,Ue as default};
