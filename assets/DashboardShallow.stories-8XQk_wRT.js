import{d as b,o as S,w,z as i,A as s,B as d,m as g,E as y}from"./vue.esm-bundler-BwDfg4wG.js";import{F as v}from"./FSDashboardShallowTileUI-BsVzz_US.js";import{F as I}from"./FSLoadTile-DTjXqIhL.js";import{a as V}from"./useDashboardShallows-C7GVSJxt.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-QSU21UGp.js";import"./FSIconCard-B4Sv3DnZ.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./css-DTUiF03J.js";import"./FSRow-k5pgBhR1.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSImage-CtdLuckH.js";import"./FSImageUI-BAdgvYuR.js";import"./FSLoader-CBedVZCM.js";import"./dimensions-yOZi2HlQ.js";import"./elevation-Ba-uT6Vw.js";import"./locale-DTc71_bq.js";import"./VImg-DFtMr-E9.js";import"./rounded-NuUWeCiM.js";import"./transition-DbaVUv7M.js";import"./index-O1RQoaVh.js";import"./useImages-hJ8kAqsC.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-fou7heQy.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSTile-_9-fb_kX.js";import"./FSClickable-Y_T-Cq-9.js";import"./VProgressCircular-CmpAWY4m.js";import"./FSCheckbox-Up-USX9A.js";import"./useRules-CJCAsX67.js";import"./VSelectionControl-gUfFxYp8.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./index-BBm8PRb1.js";import"./VLabel-BAbVzo-k.js";import"./VInput-Bb_DU4hJ.js";import"./index-h4Pvk0JI.js";import"./form-CH3j37ax.js";import"./base-C7fpSlQX.js";import"./useAppOrganisationId-C2bN-F6j.js";import"./dashboardTranslation-B9c_-0IR.js";import"./useAppLanguageCode--ssgoHQ3.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:I},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:l}=V();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:t,entity:l}}});function T(e,o,t,l,k,D){const c=i("FSLoadTile"),f=i("FSDashboardShallowTileUI");return e.getting?(s(),d(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(s(),d(f,g({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):y("",!0)}const h=F(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const $e={title:"Foundation/Core/Tiles/DashboardShallow",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:h},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Ce=["Variations"];export{a as Variations,Ce as __namedExportsOrder,$e as default};
