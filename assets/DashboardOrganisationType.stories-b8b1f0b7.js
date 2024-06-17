import{f,g as S,D as s,E as p,F as d,A as g,o as F,w as V,I as C}from"./vue.esm-bundler-6f923154.js";import{F as $}from"./FSSimpleTileUI-7bb4aa95.js";import{C as l}from"./useColors-9144d90e.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-ed43800c.js";import{a as k}from"./useDashboardOrganisationTypes-6f823ca5.js";import"./FSCard-32925b42.js";import"./FSCol-5ed907ac.js";import"./css-0cf2e273.js";import"./FSRow-64caadb9.js";import"./FSIcon-93774118.js";import"./VIcon-d1c19518.js";import"./color-a262cadc.js";import"./theme-a8226b2e.js";import"./useRender-1cb09274.js";import"./tag-a7b67944.js";import"./FSImage-1529358f.js";import"./FSLoader-6b86cc0d.js";import"./dimensions-dec12c77.js";import"./elevation-2c5be1c3.js";import"./locale-577543b5.js";import"./proxiedModel-c8904091.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-85dd6557.js";import"./VImg-8e65ad17.js";import"./rounded-1f8e51a9.js";import"./transition-e76cd387.js";import"./index-114ba00f.js";import"./FSText-eacee215.js";import"./useSlots-21493751.js";import"./FSTile-29567eff.js";import"./FSClickable-e71ee20f.js";import"./VProgressCircular-78df7425.js";import"./resizeObserver-e79b2f69.js";import"./FSCheckbox-4fa3808a.js";import"./FSSpan-7bb94541.js";import"./useRules-8e3c4a4a.js";import"./VSelectionControl-40c897c6.js";import"./density-03404b67.js";import"./index-55248dcb.js";import"./VLabel-737017e3.js";import"./VInput-125993fa.js";import"./index-4caca680.js";import"./index-a0e5e2a3.js";import"./dashboardTranslation-1af96bca.js";import"./base-1b059240.js";import"./useAppOrganisationId-8a611d3f.js";const b=f({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:l.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:S(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?l.Primary:e.bottomColor)}}});function w(e,o,r,t,O,v){const n=s("FSSimpleTileUI");return p(),d(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=y(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:t}}});function q(e,o,r,t,O,v){const n=s("FSLoadTile"),I=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),d(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(p(),d(I,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const h=y(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var m,u,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const we=["Variations"];export{a as Variations,we as __namedExportsOrder,ke as default};
