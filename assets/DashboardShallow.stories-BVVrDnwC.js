import{d as f,c as F,y as i,z as s,A as d,m as h,o as T,w as V,D as C}from"./vue.esm-bundler-ClF7U4Dq.js";import{F as $}from"./FSSimpleTileUI-CJnke5zK.js";import{C as m}from"./useColors-Dc5IlaXx.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-DP0tIeIM.js";import{a as k}from"./useDashboardShallows-e0SyZ7xF.js";import"./FSCard-BkPZ_hGw.js";import"./FSCol-BeN4b608.js";import"./css-CBTOQ7jk.js";import"./FSRow-a7Q-CB2x.js";import"./FSIcon-CcDweDXn.js";import"./VIcon-MLStchlj.js";import"./color-BdD0bzys.js";import"./theme-C6UZcim6.js";import"./useRender-BYKEQvkC.js";import"./tag--UF77zYE.js";import"./FSImage-CFf2CEHx.js";import"./FSLoader-ByGG4nua.js";import"./dimensions-DMfhR1gp.js";import"./elevation-B-xdCICl.js";import"./locale-B_wzRa96.js";import"./proxiedModel-D-52zHw6.js";import"./base-BNnJ_ndD.js";import"./composableFactory-C-hWj-Am.js";import"./serviceFactory-D_XwB3_y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./VImg-DJEDP7PW.js";import"./rounded-DApWaG-P.js";import"./transition-C9cC5SGI.js";import"./index-CiTrH3XV.js";import"./FSText-BSNRUZzw.js";import"./useSlots-CFCV5ffn.js";import"./FSTile-Ywc9KUiD.js";import"./FSClickable-heovQq91.js";import"./VProgressCircular-BkN7ESng.js";import"./resizeObserver-CVlMOAbf.js";import"./FSCheckbox-CFZ7ijaE.js";import"./FSSpan-CFY7ptgg.js";import"./useRules-CPnS0hXd.js";import"./VSelectionControl-DGpwRlBm.js";import"./density-BwHuOjo6.js";import"./index-C5RNyMWU.js";import"./VLabel-CjStEiK-.js";import"./VInput-XoycHJyG.js";import"./index-CZ5BSoIs.js";import"./index-DfSX31J9.js";import"./base-DT4A-z-k.js";import"./useAppOrganisationId-BMb45lkt.js";import"./dashboardTranslation-BBvk7tfF.js";import"./pathCrumb-D0_87whe.js";const S=f({name:"FSDashboardShallowTileUI",props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},components:{FSSimpleTileUI:$},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function U(e,o,r,t,g,v){const l=i("FSSimpleTileUI");return s(),d(l,h({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const q=b(S,[["render",U]]);S.__docgenInfo={displayName:"FSDashboardShallowTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue"]};const w=f({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:q,FSLoadTile:D},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return T(()=>{o(e.dashboardShallowId)}),V(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:r,entity:t}}});function B(e,o,r,t,g,v){const l=i("FSLoadTile"),I=i("FSDashboardShallowTileUI");return e.getting?(s(),d(l,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=n=>e.$emit("update:modelValue",n))},null,8,["editable","modelValue"])):e.entity?(s(),d(I,h({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=n=>e.$emit("update:modelValue",n))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const y=b(w,[["render",B]]);w.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:y},props:Object.keys(o),setup(){return{...e}},template:`
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
