import{j as h,H as d,I as l,J as p,U as F,V as v,o as $,w as V,x as U,M as k}from"./vue.esm-bundler-43a473fd.js";import{F as w}from"./FSSimpleIconTileUI-d6488ae1.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as _}from"./FSLoadTile-e4ac7423.js";import{W as R}from"./widgetInfos-54fd0e9e.js";import{C as E}from"./base-1344684c.js";import{S as C}from"./serviceFactory-3393b4e4.js";import{C as A}from"./composableFactory-cfaf9e24.js";import"./FSCard-36571157.js";import"./FSCol-3eed52f7.js";import"./css-18b0cf8e.js";import"./FSRow-ba466629.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./FSIcon-0563dc08.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./useRender-d2bddd17.js";import"./tag-2aee60b4.js";import"./FSText-e0cd8299.js";import"./useSlots-e98bc591.js";import"./FSTile-45bc1f38.js";import"./FSClickable-4c4a34e1.js";import"./VProgressCircular-108a63fb.js";import"./intersectionObserver-6db224c5.js";import"./resizeObserver-059c00b3.js";import"./FSCheckbox-3a944625.js";import"./FSSpan-f049a07d.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./proxiedModel-7eeaa9ef.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSLoader-75274e0e.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./useAppOrganisationId-1a1455ad.js";import"./lodash-569b8a6d.js";class b{constructor(e){this.id=e.id,this.dashboardId=e.dashboardId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.locked=e.locked,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice()}}class N extends b{constructor(e){super(e),this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(a=>new R(a))}}const m=()=>`${E()}/dashboard-organisation-types`,r=o=>`${m()}/${encodeURIComponent(o)}`,x=new C("dashboardOrganisationType",N).create(o=>o.build(o.addGet(r),o.addGetMany(m,b),o.addCreate(m),o.addUpdate(r),o.addRemove(r),o.addNotify())),L=A.get(x),T=h({name:"FSDashboardOrganisationTypeTileUI",components:{FSSimpleIconTileUI:w}});function q(o,e,a,i,I,S){const n=d("FSSimpleIconTileUI");return l(),p(n,F(v(o.$attrs)),null,16)}const B=y(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const f=h({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:B,FSLoadTile:_},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:a,entity:i}=L();return $(()=>{e(o.dashboardOrganisationTypeId)}),V(()=>o.dashboardOrganisationTypeId,()=>{e(o.dashboardOrganisationTypeId)}),{getting:a,entity:i}}});function P(o,e,a,i,I,S){const n=d("FSLoadTile"),D=d("FSDashboardOrganisationTypeTileUI");return o.getting?(l(),p(n,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=s=>o.$emit("update:modelValue",s))},null,8,["editable","modelValue"])):o.entity?(l(),p(D,U({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=s=>o.$emit("update:modelValue",s))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):k("",!0)}const O=y(f,[["render",P]]);f.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Ce={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardOrganisationTypeTile:O},props:Object.keys(e),setup(){return{...o}},template:`
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
