import{j as f,e as C,I as d,J as n,K as h,B as S,o as E,w as $,N as V}from"./vue.esm-bundler-01006032.js";import{F as U}from"./FSSimpleIconTileUI-21207db5.js";import{C as m}from"./useColors-13ed6ee6.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{F as R}from"./FSLoadTile-7c55beb6.js";import{C as A}from"./base-d6256dbd.js";import{W as k}from"./widgetInfos-913cb8f0.js";import{P as L}from"./pathCrumb-3dbc85d5.js";import{S as O}from"./serviceFactory-7552fe10.js";import{C as _}from"./composableFactory-25aa3ef9.js";import"./FSCard-8fcd8e1e.js";import"./FSCol-c97fad61.js";import"./css-279a0029.js";import"./FSRow-83e75060.js";import"./FSIcon-15b738c8.js";import"./VIcon-17be8ae5.js";import"./color-8c62b342.js";import"./theme-a26d2375.js";import"./useRender-4bcbb6ac.js";import"./tag-1f5f74bd.js";import"./FSText-b54d9278.js";import"./useSlots-e0d7ab7c.js";import"./FSTile-1cd334db.js";import"./FSClickable-a0c1e9ef.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./FSCheckbox-40e0c55f.js";import"./FSSpan-6e79caf3.js";import"./useRules-54978858.js";import"./VSelectionControl-3e964160.js";import"./density-d09a1492.js";import"./proxiedModel-69023448.js";import"./index-89394051.js";import"./VLabel-f27c70ae.js";import"./VInput-50bb839f.js";import"./locale-903ef8d8.js";import"./index-491d6eb9.js";import"./transition-9c7eb302.js";import"./dimensions-4232d0fa.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-639650a7.js";import"./elevation-28c6fd5f.js";import"./useAppOrganisationId-2267e850.js";import"./lodash-569b8a6d.js";class y{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.dashboardOrganisationTypeId=e.dashboardOrganisationTypeId,this.dashboardOrganisationTypeLabel=e.dashboardOrganisationTypeLabel,this.folderId=e.folderId,this.folderLabel=e.folderLabel,this.folderIcon=e.folderIcon,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice(),this.dashboardId=e.dashboardId,this.scope=e.scope}}class G extends y{constructor(e){super(e),this.path=e.path.map(t=>new L(t)).sort((t,a)=>a.index-t.index),this.overrideSingleEntity=e.overrideSingleEntity,this.overrideDynamicEntities=e.overrideDynamicEntities,this.overrideGlobalSelectedEntities=e.overrideGlobalSelectedEntities,this.overrideGlobalEntitiesIds=e.overrideGlobalEntitiesIds?e.overrideGlobalEntitiesIds.slice():null,this.overrideDynamicDates=e.overrideDynamicDates,this.overrideGlobalStartDate=e.overrideGlobalStartDate,this.overrideGlobalEndDate=e.overrideGlobalEndDate,this.overrideUseAutoRefresh=e.overrideUseAutoRefresh,this.overrideAutoRefresh=e.overrideAutoRefresh,this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(t=>new k(t))}}const u=()=>`${A()}/dashboard-shallows`,s=o=>`${u()}/${encodeURIComponent(o)}`,q=new O("dashboardShallow",G).create(o=>o.build(o.addGet(s),o.addGetMany(u,y),o.addCreate(u),o.addUpdate(s),o.addRemove(s),o.addNotify())),B=_.get(q),w=f({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:U},setup(o){return{color:C(()=>Array.isArray(o.bottomColor)&&!o.bottomColor.length?m.Primary:o.bottomColor)}}});function x(o,e,t,a,D,F){const l=d("FSSimpleIconTileUI");return n(),h(l,S({bottomColor:o.color,icon:o.$props.icon},o.$attrs),null,16,["bottomColor","icon"])}const N=g(w,[["render",x]]);w.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const v=f({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:N,FSLoadTile:R},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:a}=B();return E(()=>{e(o.dashboardShallowId)}),$(()=>o.dashboardShallowId,()=>{e(o.dashboardShallowId)}),{getting:t,entity:a}}});function P(o,e,t,a,D,F){const l=d("FSLoadTile"),T=d("FSDashboardShallowTileUI");return o.getting?(n(),h(l,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=r=>o.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):o.entity?(n(),h(T,S({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=r=>o.$emit("update:modelValue",r))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):V("",!0)}const I=g(v,[["render",P]]);v.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Le={title:"Foundation/Core/Tiles/DashboardShallow",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardShallowTile:I},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var p,c,b;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(b=(c=i.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const Oe=["Variations"];export{i as Variations,Oe as __namedExportsOrder,Le as default};
