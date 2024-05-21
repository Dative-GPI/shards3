import{j as f,e as T,I as d,J as l,K as m,B as b,o as $,w as V,N as w}from"./vue.esm-bundler-7c237656.js";import{F as U}from"./FSSimpleIconTileUI-432abe61.js";import{C as u}from"./useColors-0c4b5dc8.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as k}from"./FSLoadTile-ade7fecc.js";import{W as E}from"./widgetInfos-913cb8f0.js";import{P as R}from"./pathCrumb-3dbc85d5.js";import{C as A}from"./base-cc0281c0.js";import{S as _}from"./serviceFactory-7552fe10.js";import{C as N}from"./composableFactory-08360cd4.js";import"./FSCard-c7069f2a.js";import"./FSCol-76ddd6d9.js";import"./css-aa928277.js";import"./FSRow-0e15f868.js";import"./FSIcon-5ad13b7e.js";import"./VIcon-0c1eaee2.js";import"./color-8a2bce37.js";import"./theme-4dbecb8e.js";import"./useRender-e0e7d9de.js";import"./tag-7dab75b7.js";import"./FSText-fda370f0.js";import"./useSlots-338ea3fb.js";import"./FSTile-0130c8b5.js";import"./FSClickable-e8caff35.js";import"./VProgressCircular-4299d8b4.js";import"./resizeObserver-8e2b427f.js";import"./FSCheckbox-da06ce33.js";import"./FSSpan-661158f8.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-6d75a1db.js";import"./density-a5226544.js";import"./proxiedModel-6d49c8c9.js";import"./index-521b9cff.js";import"./VLabel-236d5849.js";import"./VInput-eed42ecd.js";import"./locale-ebeae402.js";import"./index-09a2de27.js";import"./transition-e42cd317.js";import"./dimensions-cb2de721.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-ef3e94c6.js";import"./elevation-785d47fb.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";class y{constructor(o){this.id=o.id,this.dashboardId=o.dashboardId,this.organisationId=o.organisationId,this.folderId=o.folderId,this.folderLabel=o.folderLabel,this.folderIcon=o.folderIcon,this.scope=o.scope,this.locked=o.locked,this.label=o.label,this.code=o.code,this.icon=o.icon,this.tags=o.tags.slice(),this.colors=o.colors.slice()}}class q extends y{constructor(o){super(o),this.path=o.path.map(t=>new R(t)).sort((t,a)=>a.index-t.index),this.singleEntity=o.singleEntity,this.dynamicEntities=o.dynamicEntities,this.globalSelectedEntities=o.globalSelectedEntities,this.globalEntitiesIds=o.globalEntitiesIds.slice(),this.dynamicDates=o.dynamicDates,this.globalStartDate=o.globalStartDate,this.globalEndDate=o.globalEndDate,this.useAutoRefresh=o.useAutoRefresh,this.autoRefresh=o.autoRefresh,this.widgets=o.widgets.map(t=>new E(t))}}const p=()=>`${A()}/dashboard-organisations`,s=e=>`${p()}/${encodeURIComponent(e)}`,B=new _("dashboardOrganisation",q).create(e=>e.build(e.addGet(s),e.addGetMany(p,y),e.addCreate(p),e.addUpdate(s),e.addRemove(s),e.addNotify())),L=N.get(B),O=f({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:u.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:U},setup(e){return{color:T(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?u.Primary:e.bottomColor)}}});function x(e,o,t,a,v,F){const n=d("FSSimpleIconTileUI");return l(),m(n,b({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const P=I(O,[["render",x]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const S=f({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:P,FSLoadTile:k},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:a}=L();return $(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:a}}});function G(e,o,t,a,v,F){const n=d("FSLoadTile"),C=d("FSDashboardOrganisationTileUI");return e.getting?(l(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(l(),m(C,b({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const D=I(S,[["render",G]]);S.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ae={title:"Foundation/Core/Tiles/DashboardOrganisation",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:D},props:Object.keys(o),setup(){return{...e}},template:`
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
