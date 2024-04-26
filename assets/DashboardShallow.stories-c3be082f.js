import{j as S,e as C,I as n,J as h,K as u,A as g,o as E,w as $,N as V}from"./vue.esm-bundler-3386cb71.js";import{F as U}from"./FSSimpleIconTileUI-c62126c6.js";import{C as p}from"./useColors-36e524b3.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as A}from"./FSLoadTile-5a660497.js";import{C as R}from"./base-4e5ccaa5.js";import{W as k}from"./widgetInfos-913cb8f0.js";import{P as L}from"./pathCrumb-3dbc85d5.js";import{S as O}from"./serviceFactory-3393b4e4.js";import{C as _}from"./composableFactory-0f23559b.js";import"./FSCard-a2619b8a.js";import"./FSCol-30a69fbd.js";import"./css-bcfd232c.js";import"./FSRow-9733beba.js";import"./FSIcon-d790d92f.js";import"./VIcon-abe9af82.js";import"./color-2c4e2e53.js";import"./theme-620a0d92.js";import"./useRender-09edae02.js";import"./tag-3fcf7e02.js";import"./FSText-81a21680.js";import"./useSlots-347b7354.js";import"./FSTile-d4670fc1.js";import"./FSClickable-9ac660a4.js";import"./VProgressCircular-14287b05.js";import"./resizeObserver-d0e0f324.js";import"./FSCheckbox-8b71851a.js";import"./FSSpan-ecd93ab1.js";import"./useRules-e6c68f0f.js";import"./VCheckboxBtn-dc9df55f.js";import"./VSelectionControl-37de442c.js";import"./density-e280830a.js";import"./proxiedModel-e633c715.js";import"./index-dcfb76a3.js";import"./VLabel-92708ef4.js";import"./VInput-567a126f.js";import"./locale-cd7ecdad.js";import"./index-8c130ea8.js";import"./transition-53ccad39.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-dfd50c8b.js";import"./dimensions-4c437c5c.js";import"./elevation-cadef23c.js";import"./useAppOrganisationId-1f8b1fee.js";import"./lodash-569b8a6d.js";class w{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.dashboardOrganisationTypeId=e.dashboardOrganisationTypeId,this.dashboardOrganisationTypeLabel=e.dashboardOrganisationTypeLabel,this.folderId=e.folderId,this.folderLabel=e.folderLabel,this.folderIcon=e.folderIcon,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice(),this.dashboardId=e.dashboardId,this.scope=e.scope}}class q extends w{constructor(e){var a;super(e),this.path=e.path.map(t=>new L(t)).sort((t,i)=>i.index-t.index),this.overrideSingleEntity=e.overrideSingleEntity,this.overrideDynamicEntities=e.overrideDynamicEntities,this.overrideGlobalSelectedEntities=e.overrideGlobalSelectedEntities,this.overrideGlobalEntitiesIds=(a=e.overrideGlobalEntitiesIds)==null?void 0:a.slice(),this.overrideDynamicDates=e.overrideDynamicDates,this.overrideGlobalStartDate=e.overrideGlobalStartDate,this.overrideGlobalEndDate=e.overrideGlobalEndDate,this.overrideUseAutoRefresh=e.overrideUseAutoRefresh,this.overrideAutoRefresh=e.overrideAutoRefresh,this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(t=>new k(t))}}const m=()=>`${R()}/dashboard-shallows`,d=o=>`${m()}/${encodeURIComponent(o)}`,G=new O("dashboardShallow",q).create(o=>o.build(o.addGet(d),o.addGetMany(m,w),o.addCreate(m),o.addUpdate(d),o.addRemove(d),o.addNotify())),x=_.get(G),v=S({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:p.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:U},setup(o){return{color:C(()=>Array.isArray(o.bottomColor)&&!o.bottomColor.length?p.Primary:o.bottomColor)}}});function B(o,e,a,t,i,F){const l=n("FSSimpleIconTileUI");return h(),u(l,g({bottomColor:o.color,icon:o.$props.icon},o.$attrs),null,16,["bottomColor","icon"])}const N=y(v,[["render",B]]);v.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const I=S({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:N,FSLoadTile:A},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:a,entity:t}=x();return E(()=>{e(o.dashboardShallowId)}),$(()=>o.dashboardShallowId,()=>{e(o.dashboardShallowId)}),{getting:a,entity:t}}});function P(o,e,a,t,i,F){const l=n("FSLoadTile"),T=n("FSDashboardShallowTileUI");return o.getting?(h(),u(l,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=s=>o.$emit("update:modelValue",s))},null,8,["editable","modelValue"])):o.entity?(h(),u(T,g({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=s=>o.$emit("update:modelValue",s))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):V("",!0)}const D=y(I,[["render",P]]);I.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Oe={title:"Foundation/Core/Tiles/DashboardShallow",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardShallowTile:D},props:Object.keys(e),setup(){return{...o}},template:`
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
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const _e=["Variations"];export{r as Variations,_e as __namedExportsOrder,Oe as default};
