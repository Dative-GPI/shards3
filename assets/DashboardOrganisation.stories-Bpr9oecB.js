import{d as c,c as F,y as s,z as d,A as l,m as g,o as T,w as V,D as C}from"./vue.esm-bundler-CLWyqtrq.js";import{F as $}from"./FSSimpleTileUI-C50-uYQj.js";import{C as m}from"./useColors-D61Fe1_L.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-CIavoD8j.js";import{a as w}from"./useDashboardOrganisations-BSwH7ugM.js";import"./FSCard-CtrctGW7.js";import"./FSCol-B1LPjIXg.js";import"./css-Ca-HPGcF.js";import"./FSRow-B7tdsi71.js";import"./FSIcon-nvjMvWEC.js";import"./VIcon-CTYwU69W.js";import"./color-CiZ0sQz8.js";import"./theme-bwyTeVCn.js";import"./useRender-BBsw_RbX.js";import"./tag-CMDXkDN7.js";import"./FSImage-D4YySTrV.js";import"./FSLoader-DpxcFPRZ.js";import"./dimensions-CApMEhqN.js";import"./elevation-CB-eCL4u.js";import"./locale-DAz5thp-.js";import"./proxiedModel-3ec75IAg.js";import"./base-BNnJ_ndD.js";import"./composableFactory-BGJVwV03.js";import"./serviceFactory-D_XwB3_y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-CU4XwkhE.js";import"./rounded-BEQ3HMtY.js";import"./transition-D0Fyuczc.js";import"./index-C8D2gGUS.js";import"./FSText-B9kmC_JD.js";import"./useSlots-YtBg7QOA.js";import"./FSTile-CTYdnlSf.js";import"./FSClickable-CX-mXFfM.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./FSCheckbox-Bp2dYBN8.js";import"./FSSpan-C4Iz3qX9.js";import"./useRules-D8GiojYJ.js";import"./VSelectionControl-CFm2WUhz.js";import"./density-BAQxqMxc.js";import"./index-CgBlQs6Z.js";import"./VLabel-CBBC7WmF.js";import"./VInput-CwrHorP9.js";import"./index-3KSGAm21.js";import"./index-DfSX31J9.js";import"./dashboardTranslation-BBvk7tfF.js";import"./pathCrumb-D0_87whe.js";import"./base-DgvHU1oF.js";import"./useAppOrganisationId-B5BDd-xv.js";const h=c({name:"FSDashboardOrganisationTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function k(e,o,r,t,S,I){const n=s("FSSimpleTileUI");return d(),l(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=b(h,[["render",k]]);h.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const y=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:U,FSLoadTile:D},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=w();return T(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:r,entity:t}}});function q(e,o,r,t,S,I){const n=s("FSLoadTile"),v=s("FSDashboardOrganisationTileUI");return e.getting?(d(),l(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),l(v,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const O=b(y,[["render",q]]);y.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisation",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:O},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var p,u,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        href="/"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Ue=["Variations"];export{a as Variations,Ue as __namedExportsOrder,ke as default};
