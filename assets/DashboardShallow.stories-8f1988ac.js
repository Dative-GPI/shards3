import{f,g as F,D as i,E as s,F as d,A as h,o as T,w as V,I as C}from"./vue.esm-bundler-1de4ab84.js";import{F as $}from"./FSSimpleTileUI-72339bfb.js";import{C as p}from"./useColors-6201f155.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-82842097.js";import{a as k}from"./useDashboardShallows-92a3255e.js";import"./FSCard-23b564db.js";import"./FSCol-044a4f0a.js";import"./css-73f1b6e3.js";import"./FSRow-0f15051e.js";import"./FSIcon-08483052.js";import"./VIcon-9f1a137c.js";import"./color-69562b87.js";import"./theme-fee57059.js";import"./useRender-b44b777b.js";import"./tag-58633b3a.js";import"./FSImage-1712f744.js";import"./FSLoader-404ee90e.js";import"./dimensions-60fb7050.js";import"./elevation-e7de2c09.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./base-0de1729e.js";import"./serviceFactory-2dfad3af.js";import"./_commonjsHelpers-725317a4.js";import"./lodash-569b8a6d.js";import"./composableFactory-7269e9d8.js";import"./VImg-4aa69f50.js";import"./rounded-aeb398ab.js";import"./transition-41c2ee15.js";import"./index-bd033a0f.js";import"./FSText-3b69d1d8.js";import"./useSlots-78ee3d45.js";import"./FSTile-f9e03527.js";import"./FSClickable-00bc2ab2.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./FSCheckbox-7bc44d7a.js";import"./FSSpan-c5b5f93b.js";import"./useRules-14fb7f63.js";import"./VSelectionControl-8efa9c46.js";import"./density-99305267.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./index-00d0b77b.js";import"./index-a0e5e2a3.js";import"./base-d4d5271d.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./widgetInfos-913cb8f0.js";import"./pathCrumb-3dbc85d5.js";const S=f({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:p.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?p.Primary:e.bottomColor)}}});function U(e,o,r,t,y,v){const l=i("FSSimpleTileUI");return s(),d(l,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const q=b(S,[["render",U]]);S.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const w=f({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:q,FSLoadTile:D},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return T(()=>{o(e.dashboardShallowId)}),V(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:r,entity:t}}});function B(e,o,r,t,y,v){const l=i("FSLoadTile"),I=i("FSDashboardShallowTileUI");return e.getting?(s(),d(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):e.entity?(s(),d(I,h({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const g=b(w,[["render",B]]);w.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
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
      FSDashboardShallowTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const qe=["Variations"];export{a as Variations,qe as __namedExportsOrder,Ue as default};
