import{f,g as S,I as s,J as l,K as d,B as y,o as F,w as V,N as C}from"./vue.esm-bundler-cd768bc3.js";import{F as $}from"./FSSimpleIconTileUI-bdda81e4.js";import{C as p}from"./useColors-91ab292c.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-767d5692.js";import{a as k}from"./useDashboardOrganisationTypes-60a2a85d.js";import"./FSCard-0de7b634.js";import"./FSCol-ff457bc3.js";import"./css-c2ea3b68.js";import"./FSRow-1d7c2545.js";import"./FSIcon-203715fb.js";import"./VIcon-3b9ab711.js";import"./color-4e667524.js";import"./theme-33f5ac1a.js";import"./useRender-b3fd6f8b.js";import"./tag-bc86e39f.js";import"./FSText-92e9b97f.js";import"./useSlots-2af30a3d.js";import"./FSTile-1d7371a7.js";import"./FSClickable-95c940f4.js";import"./VProgressCircular-f6ca2848.js";import"./resizeObserver-054c2f9a.js";import"./FSCheckbox-0f33b66c.js";import"./FSSpan-da6dde8e.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-e9dab1c2.js";import"./density-80e773e2.js";import"./proxiedModel-80cf7d0e.js";import"./index-f4fa4c36.js";import"./VLabel-a834020c.js";import"./VInput-5fe9e616.js";import"./locale-d1b7e37d.js";import"./index-055d6469.js";import"./transition-2948fa2b.js";import"./dimensions-9d1d90d7.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-c57e8f50.js";import"./elevation-7537bf82.js";import"./widgetInfos-913cb8f0.js";import"./base-a00c89a9.js";import"./useAppOrganisationId-7c704676.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-c82cc213.js";const b=f({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:p.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:$},setup(e){return{color:S(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?p.Primary:e.bottomColor)}}});function w(e,o,r,n,O,v){const t=s("FSSimpleIconTileUI");return l(),d(t,y({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=g(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:n}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:n}}});function q(e,o,r,n,O,v){const t=s("FSLoadTile"),I=s("FSDashboardOrganisationTypeTileUI");return e.getting?(l(),d(t,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(l(),d(I,y({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):C("",!0)}const h=g(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Fe={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
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
      FSDashboardOrganisationTypeTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const Ve=["Variations"];export{a as Variations,Ve as __namedExportsOrder,Fe as default};
