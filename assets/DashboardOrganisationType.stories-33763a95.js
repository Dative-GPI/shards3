import{j as b,e as C,I as d,J as l,K as p,B as h,o as $,w as V,N as w}from"./vue.esm-bundler-7c237656.js";import{F as k}from"./FSSimpleIconTileUI-432abe61.js";import{C as u}from"./useColors-0c4b5dc8.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{F as E}from"./FSLoadTile-ade7fecc.js";import{W as U}from"./widgetInfos-913cb8f0.js";import{C as R}from"./base-cc0281c0.js";import{S as _}from"./serviceFactory-7552fe10.js";import{C as A}from"./composableFactory-08360cd4.js";import"./FSCard-c7069f2a.js";import"./FSCol-76ddd6d9.js";import"./css-aa928277.js";import"./FSRow-0e15f868.js";import"./FSIcon-5ad13b7e.js";import"./VIcon-0c1eaee2.js";import"./color-8a2bce37.js";import"./theme-4dbecb8e.js";import"./useRender-e0e7d9de.js";import"./tag-7dab75b7.js";import"./FSText-fda370f0.js";import"./useSlots-338ea3fb.js";import"./FSTile-0130c8b5.js";import"./FSClickable-e8caff35.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./FSCheckbox-da06ce33.js";import"./FSSpan-661158f8.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-6d75a1db.js";import"./density-a5226544.js";import"./proxiedModel-6d49c8c9.js";import"./index-521b9cff.js";import"./VLabel-236d5849.js";import"./VInput-eed42ecd.js";import"./locale-ebeae402.js";import"./index-09a2de27.js";import"./transition-e42cd317.js";import"./dimensions-cb2de721.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";class T{constructor(o){this.id=o.id,this.dashboardId=o.dashboardId,this.organisationTypeId=o.organisationTypeId,this.organisationTypeLabel=o.organisationTypeLabel,this.scope=o.scope,this.locked=o.locked,this.label=o.label,this.code=o.code,this.icon=o.icon,this.tags=o.tags.slice(),this.colors=o.colors.slice()}}class N extends T{constructor(o){super(o),this.singleEntity=o.singleEntity,this.dynamicEntities=o.dynamicEntities,this.globalSelectedEntities=o.globalSelectedEntities,this.globalEntitiesIds=o.globalEntitiesIds.slice(),this.dynamicDates=o.dynamicDates,this.globalStartDate=o.globalStartDate,this.globalEndDate=o.globalEndDate,this.useAutoRefresh=o.useAutoRefresh,this.autoRefresh=o.autoRefresh,this.widgets=o.widgets.map(a=>new U(a))}}const m=()=>`${R()}/dashboard-organisation-types`,s=e=>`${m()}/${encodeURIComponent(e)}`,q=new _("dashboardOrganisationType",N).create(e=>e.build(e.addGet(s),e.addGetMany(m,T),e.addCreate(m),e.addUpdate(s),e.addRemove(s),e.addNotify())),B=A.get(q),O=b({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:u.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:k},setup(e){return{color:C(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?u.Primary:e.bottomColor)}}});function L(e,o,a,i,v,D){const n=d("FSSimpleIconTileUI");return l(),p(n,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const x=f(O,[["render",L]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const I=b({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:x,FSLoadTile:E},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:i}=B();return $(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:a,entity:i}}});function P(e,o,a,i,v,D){const n=d("FSLoadTile"),F=d("FSDashboardOrganisationTypeTileUI");return e.getting?(l(),p(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(l(),p(F,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const S=f(I,[["render",P]]);I.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:S},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Re=["Variations"];export{t as Variations,Re as __namedExportsOrder,Ue as default};
