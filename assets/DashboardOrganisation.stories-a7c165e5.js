import{j as I,o as y,w as O,H as s,I as r,J as d,x as S,M as v}from"./vue.esm-bundler-43a473fd.js";import{F as D}from"./FSSimpleIconTileUI-7cb2365a.js";import{F}from"./FSLoadTile-902d668c.js";import{W as T}from"./widgetInfos-54fd0e9e.js";import{P as V}from"./pathCrumb-3dbc85d5.js";import{C as w}from"./base-1344684c.js";import{S as k}from"./serviceFactory-3393b4e4.js";import{C as $}from"./composableFactory-cfaf9e24.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./FSCard-bab2eafe.js";import"./FSCol-3eed52f7.js";import"./css-18b0cf8e.js";import"./FSRow-ba466629.js";import"./useColors-a0d41f52.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-b11eeaee.js";import"./FSIcon-b00305b5.js";import"./VIcon-b50c364f.js";import"./color-8bc818ac.js";import"./useRender-d2bddd17.js";import"./tag-2aee60b4.js";import"./FSText-146d16e4.js";import"./useSlots-e98bc591.js";import"./FSTile-2b5b1887.js";import"./FSClickable-83a8d600.js";import"./VProgressCircular-108a63fb.js";import"./intersectionObserver-6db224c5.js";import"./resizeObserver-059c00b3.js";import"./FSCheckbox-eda3e056.js";import"./FSSpan-f049a07d.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./proxiedModel-7eeaa9ef.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./locale-d44d9622.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSLoader-75274e0e.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./useAppOrganisationId-1a1455ad.js";import"./lodash-569b8a6d.js";class u{constructor(e){this.id=e.id,this.dashboardId=e.dashboardId,this.organisationId=e.organisationId,this.folderId=e.folderId,this.folderLabel=e.folderLabel,this.folderIcon=e.folderIcon,this.scope=e.scope,this.locked=e.locked,this.label=e.label,this.code=e.code,this.icon=e.icon,this.tags=e.tags.slice(),this.colors=e.colors.slice()}}class R extends u{constructor(e){super(e),this.path=e.path.map(t=>new V(t)).sort((t,a)=>a.index-t.index),this.singleEntity=e.singleEntity,this.dynamicEntities=e.dynamicEntities,this.globalSelectedEntities=e.globalSelectedEntities,this.globalEntitiesIds=e.globalEntitiesIds.slice(),this.dynamicDates=e.dynamicDates,this.globalStartDate=e.globalStartDate,this.globalEndDate=e.globalEndDate,this.useAutoRefresh=e.useAutoRefresh,this.autoRefresh=e.autoRefresh,this.widgets=e.widgets.map(t=>new T(t))}}const c=()=>`${w()}/dashboard-organisations`,E=o=>`${c()}/${encodeURIComponent(o)}`,x=new k("dashboardOrganisation",R).create(o=>o.build(o.addGet(E),o.addGetMany(c,u),o.addNotify())),A=$.get(x),g=I({name:"FSDashboardOrganisationTile",components:{FSSimpleIconTileUI:D,FSLoadTile:F},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(o){const{get:e,getting:t,entity:a}=A();return y(()=>{e(o.dashboardOrganisationId)}),O(()=>o.dashboardOrganisationId,()=>{e(o.dashboardOrganisationId)}),{getting:t,entity:a}}});function U(o,e,t,a,L,N){const b=s("FSLoadTile"),f=s("FSSimpleIconTileUI");return o.getting?(r(),d(b,{key:0,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[0]||(e[0]=n=>o.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):o.entity?(r(),d(f,S({key:1,label:o.entity.label,code:o.entity.code,bottomColor:o.entity.colors,icon:o.entity.icon,editable:o.$props.editable,modelValue:o.$props.modelValue,"onUpdate:modelValue":e[1]||(e[1]=n=>o.$emit("update:modelValue",n))},o.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):v("",!0)}const h=C(g,[["render",U]]);g.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Re={title:"Foundation/Core/Tiles/DashboardOrganisation",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(o,{argTypes:e})=>({components:{FSDashboardOrganisationTile:h},props:Object.keys(e),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var l,p,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Ee=["Variations"];export{i as Variations,Ee as __namedExportsOrder,Re as default};
