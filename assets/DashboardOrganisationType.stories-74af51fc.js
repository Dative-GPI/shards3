import{j as f,o as T,w as O,H as s,I as r,J as d,x as I,M as S}from"./vue.esm-bundler-43a473fd.js";import{F as v}from"./FSSimpleIconTileUI-7cb2365a.js";import{F as D}from"./FSLoadTile-902d668c.js";import{W as F}from"./widgetInfos-54fd0e9e.js";import{C as V}from"./base-1344684c.js";import{S as k}from"./serviceFactory-3393b4e4.js";import{C as w}from"./composableFactory-cfaf9e24.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSCard-bab2eafe.js";import"./FSCol-3eed52f7.js";import"./css-18b0cf8e.js";import"./FSRow-ba466629.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./FSIcon-b00305b5.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./useRender-d2bddd17.js";import"./tag-2aee60b4.js";import"./FSText-146d16e4.js";import"./useSlots-e98bc591.js";import"./FSTile-2b5b1887.js";import"./FSClickable-83a8d600.js";import"./VProgressCircular-108a63fb.js";import"./intersectionObserver-6db224c5.js";import"./resizeObserver-059c00b3.js";import"./FSCheckbox-eda3e056.js";import"./FSSpan-f049a07d.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./proxiedModel-7eeaa9ef.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSLoader-75274e0e.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./useAppOrganisationId-1a1455ad.js";import"./lodash-569b8a6d.js";class u{constructor(e){this.id=e.id,this.dashboardId=e.dashboardId,this.organisationTypeId=e.organisationTypeId,this.organisationTypeLabel=e.organisationTypeLabel,this.scope=e.scope,this.locked=e.locked,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice()}}class $ extends u{constructor(e){super(e),this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(t=>new F(t))}}const c=()=>`${V()}/dashboard-organisation-types`,R=o=>`${c()}/${encodeURIComponent(o)}`,C=new k("dashboardOrganisationType",$).create(o=>o.build(o.addGet(R),o.addGetMany(c,u),o.addNotify())),A=w.get(C),g=f({name:"FSDashboardOrganisationTypeTile",components:{FSSimpleIconTileUI:v,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:n}=A();return T(()=>{e(o.dashboardOrganisationTypeId)}),O(()=>o.dashboardOrganisationTypeId,()=>{e(o.dashboardOrganisationTypeId)}),{getting:t,entity:n}}});function U(o,e,t,n,x,L){const b=s("FSLoadTile"),h=s("FSSimpleIconTileUI");return o.getting?(r(),d(b,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=i=>o.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):o.entity?(r(),d(h,I({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=i=>o.$emit("update:modelValue",i))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):S("",!0)}const y=E(g,[["render",U]]);g.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Ee={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardOrganisationTypeTile:y},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const $e=["Variations"];export{a as Variations,$e as __namedExportsOrder,Ee as default};
