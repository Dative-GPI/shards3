import{d as f,g as b,w as T,y as n,z as s,A as p,m as h,F as O}from"./vue.esm-bundler-CWdIlc2r.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-CWrv1ek_.js";import{F}from"./FSLoadTile-9VaLxgED.js";import{a as I}from"./useDashboardOrganisationTypes-BvzdPd0m.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-BHnhCTjp.js";import"./FSIconCard-BQHJxY0n.js";import"./FSCard-CPhdbHks.js";import"./FSCol-Bj1WIVag.js";import"./css-DVhR3h-A.js";import"./FSRow-D4JfwQlG.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./FSIcon-DUHP8dRZ.js";import"./VIcon-Bo7R9vIQ.js";import"./color-B0htL_ZM.js";import"./FSImage-fu-NJHjv.js";import"./FSImageUI-CQtB8kyI.js";import"./FSLoader-S8abBhij.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./locale-BGMMnFfJ.js";import"./VImg-Bj7MyRJQ.js";import"./rounded-C73YOAN4.js";import"./transition-BvKGRC-_.js";import"./index-BPQCAcxH.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSTile-ENDmX5_M.js";import"./FSClickable-DB2xZ1ce.js";import"./VProgressCircular-CbhEC8Of.js";import"./resizeObserver-CTZzan_-.js";import"./FSCheckbox-DZWstXnV.js";import"./useRules-CY0rKEBQ.js";import"./VSelectionControl-Bl6rLftH.js";import"./density-Cf5q3L_6.js";import"./proxiedModel-BN8GSVE7.js";import"./index-E_I8r0kf.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./index-D2mfwXxT.js";import"./form-D-VMHmUh.js";import"./dashboardTranslation-DrunH9d2.js";import"./useAppLanguageCode-j4W_rwpi.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:F},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=I();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const y=n("FSLoadTile"),c=n("FSDashboardOrganisationTypeTileUI");return e.getting?(s(),p(y,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(s(),p(c,h({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):O("",!0)}const g=V(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const we={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const $e=["Variations"];export{o as Variations,$e as __namedExportsOrder,we as default};
