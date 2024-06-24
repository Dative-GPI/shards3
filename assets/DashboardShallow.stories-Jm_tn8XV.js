import{d as f,c as F,y as i,z as s,A as d,m as h,o as T,w as V,D as C}from"./vue.esm-bundler-BLBBrD1D.js";import{F as $}from"./FSSimpleTileUI-EREw6pta.js";import{C as m}from"./useColors-CxkvBPqy.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-exN0IGu0.js";import{a as k}from"./useDashboardShallows-r8AXCo-N.js";import"./FSCard-fA5aX9kp.js";import"./FSCol-OnQTHx6W.js";import"./css-DU1X_fj1.js";import"./FSRow-BZVvIgLd.js";import"./FSIcon-CgTCRlvx.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./theme-BarOeKl-.js";import"./useRender-CTGr_J4i.js";import"./tag-kXOxSspb.js";import"./FSImage-DCiPMM8N.js";import"./FSLoader-wJOBxBqI.js";import"./dimensions-DNYoshM5.js";import"./elevation-0FWsrb7Y.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./base-BNnJ_ndD.js";import"./composableFactory-DeG9aq0N.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-BwDapMIg.js";import"./rounded-Ax8hVtG-.js";import"./transition-DqSOegbJ.js";import"./index-C6izM9Xn.js";import"./FSText-DOaWXjiL.js";import"./useSlots-CKjiHxqT.js";import"./FSTile-DZj0ToBy.js";import"./FSClickable-BcsUSOO8.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./FSCheckbox-DJm00ahm.js";import"./FSSpan-DNHXfhpi.js";import"./useRules-CaBH9gl0.js";import"./VSelectionControl-BO5kGMEg.js";import"./density-Dp1dzyfT.js";import"./index-BeqDwarK.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./index-Co1LeIbZ.js";import"./index-3zl-tJp_.js";import"./base-B_HXG24o.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./dashboardTranslation-BBvk7tfF.js";import"./pathCrumb-D0_87whe.js";const S=f({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function U(e,o,r,t,g,v){const l=i("FSSimpleTileUI");return s(),d(l,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const q=b(S,[["render",U]]);S.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const w=f({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:q,FSLoadTile:D},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return T(()=>{o(e.dashboardShallowId)}),V(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:r,entity:t}}});function B(e,o,r,t,g,v){const l=i("FSLoadTile"),I=i("FSDashboardShallowTileUI");return e.getting?(s(),d(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):e.entity?(s(),d(I,h({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const y=b(w,[["render",B]]);w.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:y},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var p,u,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
