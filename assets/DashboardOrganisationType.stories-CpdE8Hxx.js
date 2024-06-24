import{d as y,c as I,y as s,z as d,A as p,m as f,o as F,w as V,D as C}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as $}from"./FSSimpleTileUI-CJnke5zK.js";import{C as l}from"./useColors-Dc5IlaXx.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-DP0tIeIM.js";import{a as k}from"./useDashboardOrganisationTypes-Cbj7qCh2.js";import"./FSCard-BkPZ_hGw.js";import"./FSCol-BeN4b608.js";import"./css-CBTOQ7jk.js";import"./FSRow-a7Q-CB2x.js";import"./FSIcon-CcDweDXn.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./theme-C6UZcim6.js";import"./useRender-BYKEQvkC.js";import"./tag--UF77zYE.js";import"./FSImage-CFf2CEHx.js";import"./FSLoader-ByGG4nua.js";import"./dimensions-DMfhR1gp.js";import"./elevation-B-xdCICl.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./base-BNnJ_ndD.js";import"./composableFactory-C-hWj-Am.js";import"./serviceFactory-D_XwB3_y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-DJEDP7PW.js";import"./rounded-DApWaG-P.js";import"./transition-C9cC5SGI.js";import"./index-CiTrH3XV.js";import"./FSText-BSNRUZzw.js";import"./useSlots-CFCV5ffn.js";import"./FSTile-Ywc9KUiD.js";import"./FSClickable-heovQq91.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSSpan-CFY7ptgg.js";import"./useRules-CPnS0hXd.js";import"./VSelectionControl-DGpwRlBm.js";import"./density-BwHuOjo6.js";import"./index-C5RNyMWU.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./index-CZ5BSoIs.js";import"./index-DfSX31J9.js";import"./dashboardTranslation-BBvk7tfF.js";import"./base-DT4A-z-k.js";import"./useAppOrganisationId-BMb45lkt.js";const b=y({name:"FSDashboardOrganisationTypeTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:l.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:I(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?l.Primary:e.bottomColor)}}});function w(e,o,r,t,O,v){const n=s("FSSimpleTileUI");return d(),p(n,f({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=g(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=y({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:t}}});function q(e,o,r,t,O,v){const n=s("FSLoadTile"),S=s("FSDashboardOrganisationTypeTileUI");return e.getting?(d(),p(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),p(S,f({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const h=g(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
