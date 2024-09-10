import{d as f,o as b,w as T,y as n,z as s,A as p,m as h,D as O}from"./vue.esm-bundler-Vj2X7okO.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-TlWWgYe_.js";import{F as I}from"./FSLoadTile-DdQlC1sa.js";import{a as V}from"./useDashboardOrganisationTypes-BMF3PKzV.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-B4QfB_a1.js";import"./FSIconCard-CDed-sJI.js";import"./FSCard-U7GdUEkx.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./FSRow-BuYwVvwM.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./FSIcon-uPx7S--r.js";import"./VIcon-DptP6m9n.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSImage-CBathzkQ.js";import"./FSImageUI-E0mf0Zhc.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./VImg-BUrdc1ij.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSTile-CkO82QFl.js";import"./FSClickable-B4ZW0Yow.js";import"./VProgressCircular-DnrgPZB3.js";import"./FSCheckbox-Bsnpn4tO.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./index-DjMs4W1j.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./index-joExpvzU.js";import"./form-CgybbRT3.js";import"./dashboardTranslation-DyHAGDCI.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:I},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=V();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const y=n("FSLoadTile"),c=n("FSDashboardOrganisationTypeTileUI");return e.getting?(s(),p(y,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(s(),p(c,h({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):O("",!0)}const g=F(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Se={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const ke=["Variations"];export{o as Variations,ke as __namedExportsOrder,Se as default};
