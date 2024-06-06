import{f,g as S,D as s,E as p,F as d,A as g,o as F,w as V,I as C}from"./vue.esm-bundler-1de4ab84.js";import{F as $}from"./FSSimpleTileUI-72339bfb.js";import{C as l}from"./useColors-6201f155.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-82842097.js";import{a as k}from"./useDashboardOrganisationTypes-c331a166.js";import"./FSCard-23b564db.js";import"./FSCol-044a4f0a.js";import"./css-73f1b6e3.js";import"./FSRow-0f15051e.js";import"./FSIcon-08483052.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./theme-fee57059.js";import"./useRender-b44b777b.js";import"./tag-58633b3a.js";import"./FSImage-1712f744.js";import"./FSLoader-404ee90e.js";import"./dimensions-60fb7050.js";import"./elevation-e7de2c09.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-7269e9d8.js";import"./VImg-4aa69f50.js";import"./rounded-aeb398ab.js";import"./transition-41c2ee15.js";import"./index-bd033a0f.js";import"./FSText-3b69d1d8.js";import"./useSlots-78ee3d45.js";import"./FSTile-f9e03527.js";import"./FSClickable-00bc2ab2.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./FSCheckbox-7bc44d7a.js";import"./FSSpan-c5b5f93b.js";import"./useRules-14fb7f63.js";import"./VSelectionControl-8efa9c46.js";import"./density-99305267.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./index-00d0b77b.js";import"./index-a0e5e2a3.js";import"./widgetInfos-913cb8f0.js";import"./base-d4d5271d.js";import"./useAppOrganisationId-5f5d3bd0.js";const b=f({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:l.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:S(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?l.Primary:e.bottomColor)}}});function w(e,o,r,t,O,v){const n=s("FSSimpleTileUI");return p(),d(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=y(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:t}}});function q(e,o,r,t,O,v){const n=s("FSLoadTile"),I=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),d(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(p(),d(I,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const h=y(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
