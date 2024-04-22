import{j as b,e as C,H as d,I as l,J as p,x as h,o as $,w as V,M as w}from"./vue.esm-bundler-96d0a5cc.js";import{F as k}from"./FSSimpleIconTileUI-3db07e5f.js";import{C as u}from"./useColors-a5c6eb1e.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{F as E}from"./FSLoadTile-b46e558f.js";import{W as U}from"./widgetInfos-54fd0e9e.js";import{C as R}from"./base-2afb0f10.js";import{S as _}from"./serviceFactory-3393b4e4.js";import{C as A}from"./composableFactory-2f95db4a.js";import"./FSCard-907ca4bc.js";import"./FSCol-71088900.js";import"./css-187645c7.js";import"./FSRow-959288e5.js";import"./FSIcon-1f958509.js";import"./VIcon-356fc7cc.js";import"./color-0e7f3458.js";import"./theme-c90fedb5.js";import"./useRender-864589a6.js";import"./tag-2ee5b375.js";import"./FSText-8c2dec91.js";import"./useSlots-8f090340.js";import"./FSTile-8c27cda9.js";import"./FSClickable-3046c0b6.js";import"./VProgressCircular-b96acd02.js";import"./resizeObserver-608b050a.js";import"./FSCheckbox-b67eda6e.js";import"./FSSpan-572d1125.js";import"./useRules-d4bb430c.js";import"./VCheckboxBtn-080209f7.js";import"./VSelectionControl-70f0f0e9.js";import"./density-9320d724.js";import"./proxiedModel-80fa8b72.js";import"./index-b26b5e2a.js";import"./VLabel-6f956079.js";import"./VInput-b0770754.js";import"./locale-ebcc9fd1.js";import"./index-09e6aad2.js";import"./transition-2009bd3b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-a4b17375.js";import"./dimensions-f2761880.js";import"./elevation-23c434a7.js";import"./useAppOrganisationId-9f2bcdeb.js";import"./lodash-569b8a6d.js";class T{constructor(o){this.id=o.id,this.dashboardId=o.dashboardId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.locked=o.locked,this.label=o.label,this.code=o.code,this.icon=o.icon,this.tags=o.tags.slice(),this.colors=o.colors.slice()}}class q extends T{constructor(o){super(o),this.singleEntity=o.singleEntity,this.dynamicEntities=o.dynamicEntities,this.globalSelectedEntities=o.globalSelectedEntities,this.globalEntitiesIds=o.globalEntitiesIds.slice(),this.dynamicDates=o.dynamicDates,this.globalStartDate=o.globalStartDate,this.globalEndDate=o.globalEndDate,this.useAutoRefresh=o.useAutoRefresh,this.autoRefresh=o.autoRefresh,this.widgets=o.widgets.map(a=>new U(a))}}const m=()=>`${R()}/dashboard-organisation-types`,s=e=>`${m()}/${encodeURIComponent(e)}`,N=new _("dashboardOrganisationType",q).create(e=>e.build(e.addGet(s),e.addGetMany(m,T),e.addCreate(m),e.addUpdate(s),e.addRemove(s),e.addNotify())),B=A.get(N),O=b({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:u.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:k},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?u.Primary:e.bottomColor)}}});function L(e,o,a,i,v,D){const n=d("FSSimpleIconTileUI");return l(),p(n,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const x=f(O,[["render",L]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const I=b({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:x,FSLoadTile:E},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=B();return $(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:a,entity:i}}});function P(e,o,a,i,v,D){const n=d("FSLoadTile"),F=d("FSDashboardOrganisationTypeTileUI");return e.getting?(l(),p(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(l(),p(F,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const S=f(I,[["render",P]]);I.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Re={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:S},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var c,g,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const _e=["Variations"];export{t as Variations,_e as __namedExportsOrder,Re as default};
