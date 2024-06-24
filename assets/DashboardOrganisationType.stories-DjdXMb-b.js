import{d as y,c as I,y as s,z as d,A as p,m as f,o as F,w as V,D as C}from"./vue.esm-bundler-BLBBrD1D.js";import{F as $}from"./FSSimpleTileUI-EREw6pta.js";import{C as l}from"./useColors-CxkvBPqy.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-exN0IGu0.js";import{a as k}from"./useDashboardOrganisationTypes-Dcjquws8.js";import"./FSCard-fA5aX9kp.js";import"./FSCol-OnQTHx6W.js";import"./css-DU1X_fj1.js";import"./FSRow-BZVvIgLd.js";import"./FSIcon-CgTCRlvx.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./theme-BarOeKl-.js";import"./useRender-CTGr_J4i.js";import"./tag-kXOxSspb.js";import"./FSImage-DCiPMM8N.js";import"./FSLoader-wJOBxBqI.js";import"./dimensions-DNYoshM5.js";import"./elevation-0FWsrb7Y.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./base-BNnJ_ndD.js";import"./composableFactory-DeG9aq0N.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-BwDapMIg.js";import"./rounded-Ax8hVtG-.js";import"./transition-DqSOegbJ.js";import"./index-C6izM9Xn.js";import"./FSText-DOaWXjiL.js";import"./useSlots-CKjiHxqT.js";import"./FSTile-DZj0ToBy.js";import"./FSClickable-BcsUSOO8.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./FSCheckbox-DJm00ahm.js";import"./FSSpan-DNHXfhpi.js";import"./useRules-CaBH9gl0.js";import"./VSelectionControl-BO5kGMEg.js";import"./density-Dp1dzyfT.js";import"./index-BeqDwarK.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./index-Co1LeIbZ.js";import"./index-3zl-tJp_.js";import"./dashboardTranslation-BBvk7tfF.js";import"./base-B_HXG24o.js";import"./useAppOrganisationId-B9lMIXAZ.js";const b=y({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:l.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:I(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?l.Primary:e.bottomColor)}}});function w(e,o,r,t,O,v){const n=s("FSSimpleTileUI");return d(),p(n,f({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=g(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=y({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:t}}});function q(e,o,r,t,O,v){const n=s("FSLoadTile"),S=s("FSDashboardOrganisationTypeTileUI");return e.getting?(d(),p(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),p(S,f({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const h=g(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
