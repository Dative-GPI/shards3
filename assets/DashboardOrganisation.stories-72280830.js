import{j as f,e as T,I as d,J as l,K as m,B as b,o as $,w as V,N as w}from"./vue.esm-bundler-7c237656.js";import{F as U}from"./FSSimpleIconTileUI-2411b1c7.js";import{C as u}from"./useColors-8171fc39.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as k}from"./FSLoadTile-ae373814.js";import{W as E}from"./widgetInfos-913cb8f0.js";import{P as R}from"./pathCrumb-3dbc85d5.js";import{C as A}from"./base-cc0281c0.js";import{S as _}from"./serviceFactory-7552fe10.js";import{C as N}from"./composableFactory-08360cd4.js";import"./FSCard-be090350.js";import"./FSCol-76ddd6d9.js";import"./css-aa928277.js";import"./FSRow-0e15f868.js";import"./FSIcon-84236a8c.js";import"./VIcon-ea625dc1.js";import"./color-8b3e8a76.js";import"./theme-6b978bcd.js";import"./useRender-e696dd75.js";import"./tag-d0e3859f.js";import"./FSText-c8879522.js";import"./useSlots-338ea3fb.js";import"./FSTile-869e6106.js";import"./FSClickable-b2b2bac7.js";import"./VProgressCircular-84d930cf.js";import"./resizeObserver-78a25be2.js";import"./FSCheckbox-2107f3ac.js";import"./FSSpan-661158f8.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-4d654956.js";import"./density-ba2627df.js";import"./proxiedModel-255ed77f.js";import"./index-b834f342.js";import"./VLabel-25f2a1ef.js";import"./VInput-cb53917c.js";import"./locale-842c83ae.js";import"./index-bed3da0c.js";import"./transition-99224378.js";import"./dimensions-506d0d5f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-ff2c3104.js";import"./elevation-322d7ef7.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";class y{constructor(o){this.id=o.id,this.dashboardId=o.dashboardId,this.organisationId=o.organisationId,this.folderId=o.folderId,this.folderLabel=o.folderLabel,this.folderIcon=o.folderIcon,this.scope=o.scope,this.locked=o.locked,this.label=o.label,this.code=o.code,this.icon=o.icon,this.tags=o.tags.slice(),this.colors=o.colors.slice()}}class q extends y{constructor(o){super(o),this.path=o.path.map(t=>new R(t)).sort((t,a)=>a.index-t.index),this.singleEntity=o.singleEntity,this.dynamicEntities=o.dynamicEntities,this.globalSelectedEntities=o.globalSelectedEntities,this.globalEntitiesIds=o.globalEntitiesIds.slice(),this.dynamicDates=o.dynamicDates,this.globalStartDate=o.globalStartDate,this.globalEndDate=o.globalEndDate,this.useAutoRefresh=o.useAutoRefresh,this.autoRefresh=o.autoRefresh,this.widgets=o.widgets.map(t=>new E(t))}}const p=()=>`${A()}/dashboard-organisations`,s=e=>`${p()}/${encodeURIComponent(e)}`,B=new _("dashboardOrganisation",q).create(e=>e.build(e.addGet(s),e.addGetMany(p,y),e.addCreate(p),e.addUpdate(s),e.addRemove(s),e.addNotify())),L=N.get(B),O=f({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:u.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:U},setup(e){return{color:T(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?u.Primary:e.bottomColor)}}});function x(e,o,t,a,v,F){const n=d("FSSimpleIconTileUI");return l(),m(n,b({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const P=I(O,[["render",x]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const S=f({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:P,FSLoadTile:k},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:a}=L();return $(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:a}}});function G(e,o,t,a,v,F){const n=d("FSLoadTile"),C=d("FSDashboardOrganisationTileUI");return e.getting?(l(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(l(),m(C,b({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const D=I(S,[["render",G]]);S.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ae={title:"Foundation/Core/Tiles/DashboardOrganisation",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:D},props:Object.keys(o),setup(){return{...e}},template:`
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
