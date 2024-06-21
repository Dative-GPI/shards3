import{d as y,c as I,y as s,z as d,A as p,m as f,o as F,w as V,D as C}from"./vue.esm-bundler-DUki7rNA.js";import{F as $}from"./FSSimpleTileUI-C4BdqrmY.js";import{C as l}from"./useColors-HWn2iBmk.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-BU-01dsL.js";import{a as k}from"./useDashboardOrganisationTypes-BvAll8_e.js";import"./FSCard-CqpJmiEC.js";import"./FSCol-BBaW1DrL.js";import"./css-BPLLlL3Y.js";import"./FSRow-CHgEOZQb.js";import"./FSIcon-CSwom3lG.js";import"./VIcon-BfI5ony8.js";import"./color-B6JLWHIR.js";import"./theme-BdipdDNo.js";import"./useRender-pAH_6Aah.js";import"./tag-BAqPjmMA.js";import"./FSImage-B5i4zCjK.js";import"./FSLoader-DSIWG3YN.js";import"./dimensions-BRqNSfbQ.js";import"./elevation-B5zwTzN8.js";import"./locale-BngQMCjE.js";import"./proxiedModel-C4hUsKQ6.js";import"./base-BNnJ_ndD.js";import"./composableFactory-cXrrETVr.js";import"./serviceFactory-D_XwB3_y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-C0UHAW7L.js";import"./rounded-CuOTz_ni.js";import"./transition-CAmaHrck.js";import"./index-CeJtk2ua.js";import"./FSText-CE19e0tM.js";import"./useSlots-BZu_lZyn.js";import"./FSTile-Ci-2C5M0.js";import"./FSClickable-FCUZtikK.js";import"./VProgressCircular-Cqa5rfFs.js";import"./resizeObserver-DQ47gJ8C.js";import"./FSCheckbox-CisQZrrP.js";import"./FSSpan-DUTdSgpN.js";import"./useRules-ChvLepw4.js";import"./VSelectionControl-D7t-g0gO.js";import"./density-CE9JT2ZV.js";import"./index-IoB6lNSN.js";import"./VLabel-URjizS1I.js";import"./VInput-qlcJwxYl.js";import"./index-zNldQLkd.js";import"./index-3zl-tJp_.js";import"./dashboardTranslation-ClUGC5Ug.js";import"./base-DlhEylMe.js";import"./useAppOrganisationId-CXBwfEoF.js";const b=y({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:l.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:I(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?l.Primary:e.bottomColor)}}});function w(e,o,r,t,O,v){const n=s("FSSimpleTileUI");return d(),p(n,f({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=g(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=y({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:t}}});function q(e,o,r,t,O,v){const n=s("FSLoadTile"),S=s("FSDashboardOrganisationTypeTileUI");return e.getting?(d(),p(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),p(S,f({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const h=g(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
