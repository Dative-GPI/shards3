import{d as f,c as F,y as s,z as i,A as d,m as h,o as T,w as V,D as C}from"./vue.esm-bundler-DC82FEWN.js";import{F as $}from"./FSSimpleTileUI-BeEXwABv.js";import{C as m}from"./useColors-DEq6MuQy.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-C1y9DE8d.js";import{a as k}from"./useDashboardShallows-DdGEDK7p.js";import"./FSCard-BzleLmPd.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./FSRow-DoCXWKDP.js";import"./FSIcon-uD_MRFdb.js";import"./VIcon-Dc-dFojD.js";import"./color-DvJT0EEa.js";import"./theme-B5x8xkbY.js";import"./FSImage-z4MzVpjg.js";import"./FSLoader-CbNdmyFm.js";import"./dimensions-Dnxg3zhh.js";import"./elevation-BTkUCD39.js";import"./locale-BC9z6YbT.js";import"./base-CmdGny12.js";import"./composableFactory-J8cSLWf9.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-DgHq50DD.js";import"./rounded-YB6K8mOp.js";import"./transition-yl3lVN6J.js";import"./index-DN-QUi1L.js";import"./FSText-xR-0o23P.js";import"./useSlots-V2mVelz6.js";import"./FSTile-BFrXuspw.js";import"./FSClickable-CNOWN-hR.js";import"./VProgressCircular-C-U4HXtE.js";import"./FSCheckbox-CFeLLHEx.js";import"./FSSpan-CwfDYIua.js";import"./useRules-DS9e5-1Q.js";import"./VSelectionControl-Btb9GcG5.js";import"./density-CFGlRMM_.js";import"./proxiedModel-slW9zgh3.js";import"./index-9jSorrJj.js";import"./VLabel-D_bmQQv3.js";import"./VInput-ClkK-yNd.js";import"./index-CvDsTioR.js";import"./index-3zl-tJp_.js";import"./base-CMiH1YbJ.js";import"./useAppOrganisationId-CkwgOwhD.js";import"./dashboardTranslation-CGe8lPc2.js";import"./pathCrumb-Db-cq5HI.js";const S=f({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function U(e,o,r,l,g,v){const t=s("FSSimpleTileUI");return i(),d(t,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const q=b(S,[["render",U]]);S.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const w=f({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:q,FSLoadTile:D},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:l}=k();return T(()=>{o(e.dashboardShallowId)}),V(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:r,entity:l}}});function B(e,o,r,l,g,v){const t=s("FSLoadTile"),I=s("FSDashboardShallowTileUI");return e.getting?(i(),d(t,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):e.entity?(i(),d(I,h({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const y=b(w,[["render",B]]);w.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const $e={title:"Foundation/Core/Tiles/DashboardShallow",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:y},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const De=["Variations"];export{a as Variations,De as __namedExportsOrder,$e as default};
