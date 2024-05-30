import{f,g as F,I as s,J as i,K as d,B as h,o as T,w as V,N as C}from"./vue.esm-bundler-cd768bc3.js";import{F as $}from"./FSSimpleIconTileUI-541bfcac.js";import{C as p}from"./useColors-91ab292c.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{F as D}from"./FSLoadTile-eedfa3e5.js";import{a as k}from"./useDashboardShallows-521c35ab.js";import"./FSCard-0de7b634.js";import"./FSCol-ff457bc3.js";import"./css-c2ea3b68.js";import"./FSRow-1d7c2545.js";import"./FSIcon-5671b33c.js";import"./VIcon-95cdbe21.js";import"./color-4e667524.js";import"./theme-33f5ac1a.js";import"./useRender-d216bc3f.js";import"./tag-f5ad2c5e.js";import"./FSText-92e9b97f.js";import"./useSlots-2af30a3d.js";import"./FSTile-8ff7d311.js";import"./FSClickable-8effe836.js";import"./VProgressCircular-d119fa09.js";import"./resizeObserver-054c2f9a.js";import"./FSCheckbox-c69cb5d8.js";import"./FSSpan-da6dde8e.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-650165ff.js";import"./density-80e773e2.js";import"./proxiedModel-80cf7d0e.js";import"./index-f4fa4c36.js";import"./VLabel-ac265b88.js";import"./VInput-28424714.js";import"./locale-d1b7e37d.js";import"./index-b97c70d5.js";import"./transition-2948fa2b.js";import"./dimensions-9d1d90d7.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSLoader-bd777dc8.js";import"./elevation-7537bf82.js";import"./base-a00c89a9.js";import"./useAppOrganisationId-7c704676.js";import"./widgetInfos-913cb8f0.js";import"./pathCrumb-3dbc85d5.js";import"./serviceFactory-2dfad3af.js";import"./lodash-569b8a6d.js";import"./composableFactory-c82cc213.js";const S=f({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:p.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleIconTileUI:$},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?p.Primary:e.bottomColor)}}});function U(e,o,r,l,g,v){const t=s("FSSimpleIconTileUI");return i(),d(t,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const q=b(S,[["render",U]]);S.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const w=f({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:q,FSLoadTile:D},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:l}=k();return T(()=>{o(e.dashboardShallowId)}),V(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:r,entity:l}}});function B(e,o,r,l,g,v){const t=s("FSLoadTile"),I=s("FSDashboardShallowTileUI");return e.getting?(i(),d(t,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):e.entity?(i(),d(I,h({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),null,16,["label","code","bottomColor","icon","editable","modelValue"])):C("",!0)}const y=b(w,[["render",B]]);w.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ve={title:"Foundation/Core/Tiles/DashboardShallow",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:y},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const Ce=["Variations"];export{a as Variations,Ce as __namedExportsOrder,Ve as default};
