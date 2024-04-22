import{j as f,e as T,H as d,I as l,J as m,x as b,o as $,w as V,M as w}from"./vue.esm-bundler-9b0e8103.js";import{F as U}from"./FSSimpleIconTileUI-3f59106f.js";import{C as u}from"./useColors-92311d90.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{F as k}from"./FSLoadTile-57d038ae.js";import{W as E}from"./widgetInfos-54fd0e9e.js";import{P as R}from"./pathCrumb-3dbc85d5.js";import{C as A}from"./base-63b12e08.js";import{S as _}from"./serviceFactory-3393b4e4.js";import{C as q}from"./composableFactory-3da3eea4.js";import"./FSCard-2aeec95e.js";import"./FSCol-417d1c42.js";import"./css-a20776b9.js";import"./FSRow-efd9bf42.js";import"./FSIcon-fb1e9586.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./theme-eb9d1a1f.js";import"./useRender-7c6c7a38.js";import"./tag-6bef4934.js";import"./FSText-ae8f3525.js";import"./useSlots-bfff66e3.js";import"./FSTile-34d141a4.js";import"./FSClickable-e19a2efb.js";import"./VProgressCircular-49cc274e.js";import"./resizeObserver-d1864ccd.js";import"./FSCheckbox-f5a78617.js";import"./FSSpan-66c77817.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./proxiedModel-bfd89816.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-1b8a1203.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";class y{constructor(o){this.id=o.id,this.dashboardId=o.dashboardId,this.organisationId=o.organisationId,this.folderId=o.folderId,this.folderLabel=o.folderLabel,this.folderIcon=o.folderIcon,this.scope=o.scope,this.locked=o.locked,this.label=o.label,this.code=o.code,this.icon=o.icon,this.tags=o.tags.slice(),this.colors=o.colors.slice()}}class N extends y{constructor(o){super(o),this.path=o.path.map(t=>new R(t)).sort((t,a)=>a.index-t.index),this.singleEntity=o.singleEntity,this.dynamicEntities=o.dynamicEntities,this.globalSelectedEntities=o.globalSelectedEntities,this.globalEntitiesIds=o.globalEntitiesIds.slice(),this.dynamicDates=o.dynamicDates,this.globalStartDate=o.globalStartDate,this.globalEndDate=o.globalEndDate,this.useAutoRefresh=o.useAutoRefresh,this.autoRefresh=o.autoRefresh,this.widgets=o.widgets.map(t=>new E(t))}}const p=()=>`${A()}/dashboard-organisations`,s=e=>`${p()}/${encodeURIComponent(e)}`,B=new _("dashboardOrganisation",N).create(e=>e.build(e.addGet(s),e.addGetMany(p,y),e.addCreate(p),e.addUpdate(s),e.addRemove(s),e.addNotify())),L=q.get(B),O=f({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:u.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:U},setup(e){return{color:T(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?u.Primary:e.bottomColor)}}});function x(e,o,t,a,v,F){const n=d("FSSimpleIconTileUI");return l(),m(n,b({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const P=I(O,[["render",x]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const S=f({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:P,FSLoadTile:k},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:a}=L();return $(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:a}}});function G(e,o,t,a,v,F){const n=d("FSLoadTile"),C=d("FSDashboardOrganisationTileUI");return e.getting?(l(),m(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(l(),m(C,b({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):w("",!0)}const D=I(S,[["render",G]]);S.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const _e={title:"Foundation/Core/Tiles/DashboardOrganisation",component:D,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:D},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const qe=["Variations"];export{i as Variations,qe as __namedExportsOrder,_e as default};
