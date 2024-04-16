import{j as h,H as d,I as l,J as p,U as T,V as v,o as $,w as V,x as w,M as U}from"./vue.esm-bundler-9b0e8103.js";import{F as R}from"./FSSimpleIconTileUI-d7db3001.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{F as k}from"./FSLoadTile-c67d97c3.js";import{W as C}from"./widgetInfos-54fd0e9e.js";import{P as _}from"./pathCrumb-3dbc85d5.js";import{C as E}from"./base-63b12e08.js";import{S as A}from"./serviceFactory-3393b4e4.js";import{C as N}from"./composableFactory-3da3eea4.js";import"./FSCard-30518430.js";import"./FSCol-417d1c42.js";import"./css-a20776b9.js";import"./FSRow-efd9bf42.js";import"./useColors-c8cdc69f.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./FSIcon-42763d21.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./useRender-7c6c7a38.js";import"./tag-6bef4934.js";import"./FSText-84a86aec.js";import"./useSlots-bfff66e3.js";import"./FSTile-d6c9683f.js";import"./FSClickable-5ad64f7c.js";import"./VProgressCircular-a5b71e87.js";import"./intersectionObserver-569479cd.js";import"./resizeObserver-d1864ccd.js";import"./FSCheckbox-0f6bd9a8.js";import"./FSSpan-66c77817.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./proxiedModel-bfd89816.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./locale-e5242025.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./FSLoader-57df4c1d.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";class f{constructor(e){this.id=e.id,this.dashboardId=e.dashboardId,this.organisationId=e.organisationId,this.folderId=e.folderId,this.folderLabel=e.folderLabel,this.folderIcon=e.folderIcon,this.scope=e.scope,this.locked=e.locked,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice()}}class x extends f{constructor(e){super(e),this.path=e.path.map(t=>new _(t)).sort((t,a)=>a.index-t.index),this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(t=>new C(t))}}const m=()=>`${E()}/dashboard-organisations`,r=o=>`${m()}/${encodeURIComponent(o)}`,L=new A("dashboardOrganisation",x).create(o=>o.build(o.addGet(r),o.addGetMany(m,f),o.addCreate(m),o.addUpdate(r),o.addRemove(r),o.addNotify())),q=N.get(L),I=h({name:"FSDashboardOrganisationTileUI",components:{FSSimpleIconTileUI:R}});function B(o,e,t,a,y,D){const n=d("FSSimpleIconTileUI");return l(),p(n,T(v(o.$attrs)),null,16)}const P=b(I,[["render",B]]);I.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const O=h({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:P,FSLoadTile:k},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:a}=q();return $(()=>{e(o.dashboardOrganisationId)}),V(()=>o.dashboardOrganisationId,()=>{e(o.dashboardOrganisationId)}),{getting:t,entity:a}}});function G(o,e,t,a,y,D){const n=d("FSLoadTile"),F=d("FSDashboardOrganisationTileUI");return o.getting?(l(),p(n,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=s=>o.$emit("update:modelValue",s))},null,8,["editable","modelValue"])):o.entity?(l(),p(F,w({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=s=>o.$emit("update:modelValue",s))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):U("",!0)}const S=b(O,[["render",G]]);O.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ne={title:"Foundation/Core/Tiles/DashboardOrganisation",component:S,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardOrganisationTile:S},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var u,c,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=i.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const xe=["Variations"];export{i as Variations,xe as __namedExportsOrder,Ne as default};
