import{d as y,c as I,y as s,z as d,A as p,m as f,o as F,w as V,D as C}from"./vue.esm-bundler-DR8xMV81.js";import{F as $}from"./FSSimpleTileUI-CaI4qQCN.js";import{C as l}from"./useColors-nvbUnVB9.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-B1z9AYel.js";import{a as k}from"./useDashboardOrganisationTypes-CBFmeexU.js";import"./FSIconCard-ZGpLTjvh.js";import"./FSCard-CU93xE1v.js";import"./FSCol-CeBQ3oDD.js";import"./css-DYbKqpMF.js";import"./FSRow-Dfo2nEmE.js";import"./FSIcon-CYA01Pg8.js";import"./VIcon-CB8o8wL4.js";import"./color-DRqqT5iF.js";import"./theme-DvfleoEk.js";import"./FSImage-FnP2DM24.js";import"./FSImageUI-D9dXMF0c.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CS2nLnTC.js";import"./FSLoader-KrLuz6mY.js";import"./dimensions-C81rpiLV.js";import"./elevation-BS7jUP1v.js";import"./locale-x-KasAKq.js";import"./VImg-MapJeLY6.js";import"./rounded-DVRtD5BX.js";import"./transition-DYmm1B3d.js";import"./index-VkvlNmfl.js";import"./FSSpan-RI5Hh5xF.js";import"./useSlots-O0e9MAUJ.js";import"./FSTile-D_lRF0BY.js";import"./FSClickable-Bx8zcCZW.js";import"./VProgressCircular-CQOkkHxu.js";import"./FSCheckbox-DNmwW8YA.js";import"./useRules-Dm3K--o-.js";import"./VSelectionControl-CQKVm7EG.js";import"./density-DXTGgNtk.js";import"./proxiedModel-CfqC31JC.js";import"./index-Bfb9sPge.js";import"./VLabel-DZOpgwqd.js";import"./VInput-CHHLrGTr.js";import"./index-CtF1TxK6.js";import"./index-3zl-tJp_.js";import"./dashboardTranslation-DbOvPnXj.js";import"./useAppLanguageCode-B0gM_GlZ.js";import"./base-BZ9BoqOK.js";import"./useAppOrganisationId-D_AG8bST.js";const b=y({name:"FSDashboardOrganisationTypeTileUI",components:{FSSimpleTileUI:$},props:{bottomColor:{type:[Array,String],required:!1,default:l.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},setup(e){return{color:I(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?l.Primary:e.bottomColor)}}});function w(e,o,r,t,O,v){const n=s("FSSimpleTileUI");return d(),p(n,f({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=g(b,[["render",w]]);b.__docgenInfo={displayName:"FSDashboardOrganisationTypeTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue"]};const T=y({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:U,FSLoadTile:D},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=k();return F(()=>{o(e.dashboardOrganisationTypeId)}),V(()=>e.dashboardOrganisationTypeId,()=>{o(e.dashboardOrganisationTypeId)}),{getting:r,entity:t}}});function q(e,o,r,t,O,v){const n=s("FSLoadTile"),S=s("FSDashboardOrganisationTypeTileUI");return e.getting?(d(),p(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),p(S,f({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const h=g(T,[["render",q]]);T.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const De={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTypeTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const ke=["Variations"];export{a as Variations,ke as __namedExportsOrder,De as default};
