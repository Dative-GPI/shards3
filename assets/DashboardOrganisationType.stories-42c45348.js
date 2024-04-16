import{j as h,H as d,I as l,J as p,U as F,V as v,o as $,w as V,x as U,M as k}from"./vue.esm-bundler-9b0e8103.js";import{F as w}from"./FSSimpleIconTileUI-d7db3001.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as _}from"./FSLoadTile-c67d97c3.js";import{W as R}from"./widgetInfos-54fd0e9e.js";import{C as E}from"./base-63b12e08.js";import{S as C}from"./serviceFactory-3393b4e4.js";import{C as A}from"./composableFactory-3da3eea4.js";import"./FSCard-30518430.js";import"./FSCol-417d1c42.js";import"./css-a20776b9.js";import"./FSRow-efd9bf42.js";import"./useColors-c8cdc69f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./FSIcon-42763d21.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./useRender-7c6c7a38.js";import"./tag-6bef4934.js";import"./FSText-84a86aec.js";import"./useSlots-bfff66e3.js";import"./FSTile-d6c9683f.js";import"./FSClickable-5ad64f7c.js";import"./VProgressCircular-a5b71e87.js";import"./intersectionObserver-569479cd.js";import"./resizeObserver-d1864ccd.js";import"./FSCheckbox-0f6bd9a8.js";import"./FSSpan-66c77817.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./proxiedModel-bfd89816.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./FSLoader-57df4c1d.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";class b{constructor(e){this.id=e.id,this.dashboardId=e.dashboardId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.locked=e.locked,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice()}}class N extends b{constructor(e){super(e),this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(a=>new R(a))}}const m=()=>`${E()}/dashboard-organisation-types`,r=o=>`${m()}/${encodeURIComponent(o)}`,x=new C("dashboardOrganisationType",N).create(o=>o.build(o.addGet(r),o.addGetMany(m,b),o.addCreate(m),o.addUpdate(r),o.addRemove(r),o.addNotify())),L=A.get(x),T=h({name:"FSDashboardOrganisationTypeTileUI",components:{FSSimpleIconTileUI:w}});function q(o,e,a,i,I,S){const n=d("FSSimpleIconTileUI");return l(),p(n,F(v(o.$attrs)),null,16)}const B=y(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const f=h({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:B,FSLoadTile:_},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:a,entity:i}=L();return $(()=>{e(o.dashboardOrganisationTypeId)}),V(()=>o.dashboardOrganisationTypeId,()=>{e(o.dashboardOrganisationTypeId)}),{getting:a,entity:i}}});function P(o,e,a,i,I,S){const n=d("FSLoadTile"),D=d("FSDashboardOrganisationTypeTileUI");return o.getting?(l(),p(n,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=s=>o.$emit("update:modelValue",s))},null,8,["editable","modelValue"])):o.entity?(l(),p(D,U({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=s=>o.$emit("update:modelValue",s))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):k("",!0)}const O=y(f,[["render",P]]);f.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Ce={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardOrganisationTypeTile:O},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var u,c,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const Ae=["Variations"];export{t as Variations,Ae as __namedExportsOrder,Ce as default};
