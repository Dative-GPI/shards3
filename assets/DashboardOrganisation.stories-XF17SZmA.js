import{d as c,c as F,y as s,z as d,A as l,m as g,o as T,w as V,D as C}from"./vue.esm-bundler-Cq4W5tyU.js";import{F as $}from"./FSSimpleTileUI-DdTTN6WG.js";import{C as m}from"./useColors-9ZzibzMy.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as D}from"./FSLoadTile-C89395Lq.js";import{a as w}from"./useDashboardOrganisations-BmH3tPlf.js";import"./FSIconCard-Cn8h43-2.js";import"./FSCard-Czuobvvo.js";import"./FSCol-DLJAvXXo.js";import"./css-DEg_ftav.js";import"./FSRow-unE_3RO6.js";import"./FSIcon-CO4wAGng.js";import"./VIcon-DEItKADI.js";import"./color-DRHDjI8D.js";import"./theme-C1riLSun.js";import"./tag-CMGfbRyB.js";import"./FSImage-BnHy2gIB.js";import"./FSImageUI-Cri7PIHl.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DYaDCbjS.js";import"./VImg-C2ZZ8L57.js";import"./dimensions-DmQ2LvlH.js";import"./elevation-D7qOrqBH.js";import"./locale-HbAtAWzw.js";import"./rounded-CT5UQ7DA.js";import"./transition-BzbLScdo.js";import"./index-BFUNLZ7G.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./FSTile-BWzdGs5O.js";import"./FSClickable-rknJFO_P.js";import"./VProgressCircular-D_7DfGyD.js";import"./FSCheckbox-D6cJ9jKZ.js";import"./useRules-Dr6aWKP3.js";import"./VSelectionControl-Cv0xTIuO.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./index-CrjNNQA3.js";import"./VLabel-m2J9LCHM.js";import"./VInput-B4B8eXxy.js";import"./index-CS87Qvuo.js";import"./form-BLrazfEI.js";import"./index-3zl-tJp_.js";import"./dashboardTranslation-TteDG7qe.js";import"./useAppLanguageCode-DB-OA7iE.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BbuH2dYw.js";import"./useAppOrganisationId-p6s5VcJd.js";const h=c({name:"FSDashboardOrganisationTileUI",components:{FSSimpleTileUI:$},props:{bottomColor:{type:[Array,String],required:!1,default:m.Primary},icon:{type:String,required:!1,default:"mdi-view-dashboard"}},setup(e){return{color:F(()=>Array.isArray(e.bottomColor)&&!e.bottomColor.length?m.Primary:e.bottomColor)}}});function k(e,o,r,t,S,I){const n=s("FSSimpleTileUI");return d(),l(n,g({bottomColor:e.color,icon:e.$props.icon},e.$attrs),null,16,["bottomColor","icon"])}const U=b(h,[["render",k]]);h.__docgenInfo={displayName:"FSDashboardOrganisationTileUI",exportName:"default",description:"",tags:{},props:[{name:"bottomColor",type:{name:"ColorBase | ColorBase[]"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"icon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"mdi-view-dashboard"'}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue"]};const y=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:U,FSLoadTile:D},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:r,entity:t}=w();return T(()=>{o(e.dashboardOrganisationId)}),V(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:r,entity:t}}});function q(e,o,r,t,S,I){const n=s("FSLoadTile"),v=s("FSDashboardOrganisationTileUI");return e.getting?(d(),l(n,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=i=>e.$emit("update:modelValue",i))},null,8,["editable","modelValue"])):e.entity?(d(),l(v,g({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=i=>e.$emit("update:modelValue",i))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):C("",!0)}const O=b(y,[["render",q]]);y.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const ke={title:"Foundation/Core/Tiles/DashboardOrganisation",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:O},props:Object.keys(o),setup(){return{...e}},template:`
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
