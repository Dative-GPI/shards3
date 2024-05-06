import{j as f,e as T,I as d,J as l,K as m,B as b,o as $,w as V,N as w}from"./vue.esm-bundler-3416a090.js";import{F as U}from"./FSSimpleIconTileUI-b8228c50.js";import{C as u}from"./useColors-1faf681b.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as k}from"./FSLoadTile-7c56106b.js";import{W as E}from"./widgetInfos-913cb8f0.js";import{P as R}from"./pathCrumb-3dbc85d5.js";import{C as A}from"./base-9a568e22.js";import{S as _}from"./serviceFactory-7552fe10.js";import{C as N}from"./composableFactory-8605555f.js";import"./FSCard-92f27951.js";import"./FSCol-5731c3c4.js";import"./css-69ed11d9.js";import"./FSRow-5edf997c.js";import"./FSIcon-f518d728.js";import"./VIcon-c583a5e4.js";import"./color-5c733e3b.js";import"./theme-2c100cd8.js";import"./useRender-fb717f1b.js";import"./tag-a6c90b0c.js";import"./FSText-4221a42d.js";import"./useSlots-7472d1e2.js";import"./FSTile-3c962ef7.js";import"./FSClickable-d5c04d60.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./FSCheckbox-422b3b91.js";import"./FSSpan-b519c994.js";import"./useRules-5e1988ee.js";import"./VSelectionControl-0b3e2526.js";import"./density-174ddef7.js";import"./proxiedModel-868611da.js";import"./index-a9118fe7.js";import"./VLabel-793ed17d.js";import"./VInput-77c4eaa4.js";import"./locale-be130c16.js";import"./index-46378e0b.js";import"./transition-6086c96b.js";import"./dimensions-97f2f62c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-22724035.js";import"./elevation-9288a0e5.js";import"./useAppOrganisationId-b06da61e.js";import"./lodash-569b8a6d.js";class y{constructor(o){this.id=o.id,this.dashboardId=o.dashboardId,this.organisationId=o.organisationId,this.folderId=o.folderId,this.folderLabel=o.folderLabel,this.folderIcon=o.folderIcon,this.scope=o.scope,this.locked=o.locked,this.label=o.label,this.code=o.code,this.icon=o.icon,this.tags=o.tags.slice(),this.colors=o.colors.slice()}}class q extends y{constructor(o){super(o),this.path=o.path.map(t=>new R(t)).sort((t,a)=>a.index-t.index),this.singleEntity=o.singleEntity,this.dynamicEntities=o.dynamicEntities,this.globalSelectedEntities=o.globalSelectedEntities,this.globalEntitiesIds=o.globalEntitiesIds.slice(),this.dynamicDates=o.dynamicDates,this.globalStartDate=o.globalStartDate,this.globalEndDate=o.globalEndDate,this.useAutoRefresh=o.useAutoRefresh,this.autoRefresh=o.autoRefresh,this.widgets=o.widgets.map(t=>new E(t))}}const p=()=>`${A()}/dashboard-organisations`,s=e=>`${p()}/${encodeURIComponent(e)}`,B=new _("dashboardOrganisation",q).create(e=>e.build(e.addGet(s),e.addGetMany(p,y),e.addCreate(p),e.addUpdate(s),e.addRemove(s),e.addNotify())),L=N.get(B),O=f({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:u.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:U},setup(e){return{color:T(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?u.Primary:e.bottomColor)}}});function x(e,o,t,a,v,F){const n=d("FSSimpleIconTileUI");return l(),m(n,b({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const P=I(O,[["render",x]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const S=f({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:P,FSLoadTile:k},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:a}=L();return $(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:a}}});function G(e,o,t,a,v,F){const n=d("FSLoadTile"),C=d("FSDashboardOrganisationTileUI");return e.getting?(l(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(l(),m(C,b({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const D=I(S,[["render",G]]);S.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ae={title:"Foundation/Core/Tiles/DashboardOrganisation",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:D},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var c,g,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const _e=["Variations"];export{i as Variations,_e as __namedExportsOrder,Ae as default};
