import{j as S,e as C,I as n,J as h,K as u,B as g,o as E,w as $,N as V}from"./vue.esm-bundler-857e5af7.js";import{F as U}from"./FSSimpleIconTileUI-457c6291.js";import{C as p}from"./useColors-d77b9fa0.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as R}from"./FSLoadTile-7589dd12.js";import{C as A}from"./base-0cefeb30.js";import{W as k}from"./widgetInfos-913cb8f0.js";import{P as L}from"./pathCrumb-3dbc85d5.js";import{S as O}from"./serviceFactory-7552fe10.js";import{C as _}from"./composableFactory-64294cb0.js";import"./FSCard-c144a688.js";import"./FSCol-439c812a.js";import"./css-ab2bdb81.js";import"./FSRow-e30f1dcc.js";import"./FSIcon-faf0e444.js";import"./VIcon-2d4ba55d.js";import"./color-5d3cc229.js";import"./theme-83a4d379.js";import"./useRender-d5beceb3.js";import"./tag-7bd029e5.js";import"./FSText-e633ddca.js";import"./useSlots-8bee1a74.js";import"./FSTile-93fa380f.js";import"./FSClickable-d206c837.js";import"./VProgressCircular-593755b1.js";import"./resizeObserver-524fd734.js";import"./FSCheckbox-d1b08f47.js";import"./FSSpan-9f7a3096.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-11aadb82.js";import"./density-69cd8efb.js";import"./proxiedModel-1e29c8a1.js";import"./index-f95cc40a.js";import"./VLabel-820f7887.js";import"./VInput-6c2a4fd3.js";import"./locale-9a98f700.js";import"./index-d6be2044.js";import"./transition-2a27d0f7.js";import"./dimensions-d7f5c5ad.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-ff56dc12.js";import"./elevation-d5a2e352.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";class w{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.dashboardOrganisationTypeId=e.dashboardOrganisationTypeId,this.dashboardOrganisationTypeLabel=e.dashboardOrganisationTypeLabel,this.folderId=e.folderId,this.folderLabel=e.folderLabel,this.folderIcon=e.folderIcon,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice(),this.dashboardId=e.dashboardId,this.scope=e.scope}}class q extends w{constructor(e){var a;super(e),this.path=e.path.map(t=>new L(t)).sort((t,i)=>i.index-t.index),this.overrideSingleEntity=e.overrideSingleEntity,this.overrideDynamicEntities=e.overrideDynamicEntities,this.overrideGlobalSelectedEntities=e.overrideGlobalSelectedEntities,this.overrideGlobalEntitiesIds=(a=e.overrideGlobalEntitiesIds)==null?void 0:a.slice(),this.overrideDynamicDates=e.overrideDynamicDates,this.overrideGlobalStartDate=e.overrideGlobalStartDate,this.overrideGlobalEndDate=e.overrideGlobalEndDate,this.overrideUseAutoRefresh=e.overrideUseAutoRefresh,this.overrideAutoRefresh=e.overrideAutoRefresh,this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(t=>new k(t))}}const m=()=>`${A()}/dashboard-shallows`,d=o=>`${m()}/${encodeURIComponent(o)}`,G=new O("dashboardShallow",q).create(o=>o.build(o.addGet(d),o.addGetMany(m,w),o.addCreate(m),o.addUpdate(d),o.addRemove(d),o.addNotify())),B=_.get(G),v=S({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:p.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:U},setup(o){return{color:C(()=>Array.isArray(o.bottomColor)&&!o.bottomColor.length?p.Primary:o.bottomColor)}}});function x(o,e,a,t,i,F){const l=n("FSSimpleIconTileUI");return h(),u(l,g({bottomColor:o.color,icon:o.$props.icon},o.$attrs),null,16,["bottomColor","icon"])}const N=y(v,[["render",x]]);v.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const I=S({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:N,FSLoadTile:R},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:a,entity:t}=B();return E(()=>{e(o.dashboardShallowId)}),$(()=>o.dashboardShallowId,()=>{e(o.dashboardShallowId)}),{getting:a,entity:t}}});function P(o,e,a,t,i,F){const l=n("FSLoadTile"),T=n("FSDashboardShallowTileUI");return o.getting?(h(),u(l,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=s=>o.$emit("update:modelValue",s))},null,8,["editable","modelValue"])):o.entity?(h(),u(T,g({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=s=>o.$emit("update:modelValue",s))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):V("",!0)}const D=y(I,[["render",P]]);I.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Le={title:"Foundation/Core/Tiles/DashboardShallow",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardShallowTile:D},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var c,b,f;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const Oe=["Variations"];export{r as Variations,Oe as __namedExportsOrder,Le as default};
