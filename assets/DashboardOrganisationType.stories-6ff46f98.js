import{f,g as S,D as s,E as p,F as d,A as g,o as F,w as V,I as C}from"./vue.esm-bundler-f632b118.js";import{F as $}from"./FSSimpleTileUI-bdc67d26.js";import{C as l}from"./useColors-5866e399.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-a7e64fe9.js";import{a as k}from"./useDashboardOrganisationTypes-1a74cdf6.js";import"./FSCard-491552ba.js";import"./FSCol-606e8271.js";import"./css-185b4786.js";import"./FSRow-76f4ad1e.js";import"./FSIcon-8032a9d1.js";import"./VIcon-31ae1cc1.js";import"./color-8a5e0dbc.js";import"./theme-7fcd5c30.js";import"./useRender-e08116dd.js";import"./tag-f52d5248.js";import"./FSImage-7e26743e.js";import"./FSLoader-6ced331e.js";import"./dimensions-655ad4fc.js";import"./elevation-f0466824.js";import"./locale-4446cda9.js";import"./proxiedModel-4a0e4d22.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-0b8943d1.js";import"./VImg-82f9d308.js";import"./rounded-83656db8.js";import"./transition-c0ed457c.js";import"./index-c976eaf6.js";import"./FSText-09696756.js";import"./useSlots-de625f75.js";import"./FSTile-718b43b1.js";import"./FSClickable-4011125f.js";import"./VProgressCircular-5f2acd26.js";import"./resizeObserver-e215d892.js";import"./FSCheckbox-bde4293d.js";import"./FSSpan-4ac1bb71.js";import"./useRules-89bf8a4c.js";import"./VSelectionControl-27ff8605.js";import"./density-2a21ba5c.js";import"./index-5c2ea69f.js";import"./VLabel-19a0ad6a.js";import"./VInput-b20e1912.js";import"./index-f6c0e33a.js";import"./index-a0e5e2a3.js";import"./dashboardTranslation-1af96bca.js";import"./base-dd7352d9.js";import"./useAppOrganisationId-0d113abb.js";const b=f({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:l.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:S(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?l.Primary:e.bottomColor)}}});function w(e,o,r,t,O,v){const n=s("FSSimpleTileUI");return p(),d(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=y(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:t}}});function q(e,o,r,t,O,v){const n=s("FSLoadTile"),I=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),d(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(p(),d(I,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const h=y(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
