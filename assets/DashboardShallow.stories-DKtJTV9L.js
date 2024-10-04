import{d as b,g as S,w,y as i,z as s,A as d,m as g,F as y}from"./vue.esm-bundler-CWdIlc2r.js";import{F as v}from"./FSDashboardShallowTileUI-CwIUrtdz.js";import{F}from"./FSLoadTile-9VaLxgED.js";import{a as I}from"./useDashboardShallows-CDfWwfZ-.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-BHnhCTjp.js";import"./FSIconCard-BQHJxY0n.js";import"./FSCard-CPhdbHks.js";import"./FSCol-Bj1WIVag.js";import"./css-DVhR3h-A.js";import"./FSRow-D4JfwQlG.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./FSIcon-DUHP8dRZ.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSImage-fu-NJHjv.js";import"./FSImageUI-CQtB8kyI.js";import"./FSLoader-S8abBhij.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./VImg-Bj7MyRJQ.js";import"./rounded-C73YOAN4.js";import"./transition-BvKGRC-_.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSTile-ENDmX5_M.js";import"./FSClickable-DB2xZ1ce.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSCheckbox-DZWstXnV.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./dashboardTranslation-DrunH9d2.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:F},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:l}=I();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:t,entity:l}}});function T(e,o,t,l,k,D){const c=i("FSLoadTile"),f=i("FSDashboardShallowTileUI");return e.getting?(s(),d(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(s(),d(f,g({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):y("",!0)}const h=V(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ce={title:"Foundation/Core/Tiles/DashboardShallow",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:h},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const qe=["Variations"];export{a as Variations,qe as __namedExportsOrder,Ce as default};
