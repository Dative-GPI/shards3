import{j as S,H as n,I as h,J as p,U as F,V as T,o as E,w as $,x as U,M as V}from"./vue.esm-bundler-9b0e8103.js";import{F as R}from"./FSSimpleIconTileUI-4bd73361.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{F as k}from"./FSLoadTile-36bcd58a.js";import{C}from"./base-63b12e08.js";import{W as L}from"./widgetInfos-54fd0e9e.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{S as A}from"./serviceFactory-3393b4e4.js";import{C as O}from"./composableFactory-3da3eea4.js";import"./FSCard-bd4b7ce0.js";import"./FSCol-417d1c42.js";import"./css-a20776b9.js";import"./FSRow-efd9bf42.js";import"./useColors-c8cdc69f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./FSIcon-42763d21.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./useRender-7c6c7a38.js";import"./tag-6bef4934.js";import"./FSText-84a86aec.js";import"./useSlots-bfff66e3.js";import"./FSTile-aeae4abb.js";import"./FSClickable-154d7a9c.js";import"./VProgressCircular-a5b71e87.js";import"./intersectionObserver-569479cd.js";import"./resizeObserver-d1864ccd.js";import"./FSCheckbox-14fed4cc.js";import"./FSSpan-66c77817.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./proxiedModel-bfd89816.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./FSLoader-57df4c1d.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";class g{constructor(e){this.id=e.id,this.organisationId=e.organisationId,this.dashboardOrganisationTypeId=e.dashboardOrganisationTypeId,this.dashboardOrganisationTypeLabel=e.dashboardOrganisationTypeLabel,this.folderId=e.folderId,this.folderLabel=e.folderLabel,this.folderIcon=e.folderIcon,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice(),this.dashboardId=e.dashboardId,this.scope=e.scope}}class x extends g{constructor(e){var a;super(e),this.path=e.path.map(t=>new _(t)).sort((t,l)=>l.index-t.index),this.overrideSingleEntity=e.overrideSingleEntity,this.overrideDynamicEntities=e.overrideDynamicEntities,this.overrideGlobalSelectedEntities=e.overrideGlobalSelectedEntities,this.overrideGlobalEntitiesIds=(a=e.overrideGlobalEntitiesIds)==null?void 0:a.slice(),this.overrideDynamicDates=e.overrideDynamicDates,this.overrideGlobalStartDate=e.overrideGlobalStartDate,this.overrideGlobalEndDate=e.overrideGlobalEndDate,this.overrideUseAutoRefresh=e.overrideUseAutoRefresh,this.overrideAutoRefresh=e.overrideAutoRefresh,this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(t=>new L(t))}}const m=()=>`${C()}/dashboard-shallows`,d=o=>`${m()}/${encodeURIComponent(o)}`,G=new A("dashboardShallow",x).create(o=>o.build(o.addGet(d),o.addGetMany(m,g),o.addCreate(m),o.addUpdate(d),o.addRemove(d),o.addNotify())),q=O.get(G),w=S({name:"FSDashboardShallowTileUI",components:{FSSimpleIconTileUI:R}});function B(o,e,a,t,l,y){const s=n("FSSimpleIconTileUI");return h(),p(s,F(T(o.$attrs)),null,16)}const N=f(w,[["render",B]]);w.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const v=S({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:N,FSLoadTile:k},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:a,entity:t}=q();return E(()=>{e(o.dashboardShallowId)}),$(()=>o.dashboardShallowId,()=>{e(o.dashboardShallowId)}),{getting:a,entity:t}}});function H(o,e,a,t,l,y){const s=n("FSLoadTile"),D=n("FSDashboardShallowTileUI");return o.getting?(h(),p(s,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=r=>o.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):o.entity?(h(),p(D,U({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=r=>o.$emit("update:modelValue",r))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):V("",!0)}const I=f(v,[["render",H]]);v.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Oe={title:"Foundation/Core/Tiles/DashboardShallow",component:I,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardShallowTile:I},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var u,c,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(c=i.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const xe=["Variations"];export{i as Variations,xe as __namedExportsOrder,Oe as default};
