import{d as y,o as O,w as S,y as s,z as p,A as m,m as I,D as V}from"./vue.esm-bundler-Vj2X7okO.js";import{F}from"./FSDeviceOrganisationTileUI-C3XsYDwm.js";import{F as T}from"./FSLoadTile-DdQlC1sa.js";import{a as b}from"./useDeviceOrganisations-BzcT3TFS.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-C4Xbc4pB.js";import"./FSButton-9Jyc5oF6.js";import"./FSClickable-B4ZW0Yow.js";import"./FSCard-U7GdUEkx.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./FSRow-BuYwVvwM.js";import"./useColors-Bw2ZR-m1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D8Xq3tpQ.js";import"./VProgressCircular-DnrgPZB3.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSIcon-uPx7S--r.js";import"./VIcon-DptP6m9n.js";import"./FSWindow-Ctz2OUFZ.js";import"./group-DgCbl5w-.js";import"./proxiedModel-BE9FlVMJ.js";import"./locale-CMOn_BOp.js";import"./VBtn-CJflX_3O.js";import"./border-CgF0busY.js";import"./density-BM1QLeh4.js";import"./elevation-BH8AnXAq.js";import"./rounded-BWAMdTmW.js";import"./dimensions-CzmId2tp.js";import"./loader-CbF0edCX.js";import"./anchor-DHDhudvL.js";import"./router-CbAEScZe.js";import"./index-DjMs4W1j.js";import"./VDefaultsProvider-CztrVRTm.js";import"./lazy-CqgcpKMK.js";import"./ssrBoot-D42UTWSS.js";import"./transition-CQDsmRPd.js";import"./FSChip-Bhktj6Ea.js";import"./FSText-aZSl7JAe.js";import"./useDateFormat-DAzSBSGK.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./FSColor-Lyepgel_.js";import"./VMenu-DOKVMVxb.js";import"./VOverlay-BT06S-GU.js";import"./forwardRefs-DWGaNmQL.js";import"./display-Cx0CWWL8.js";import"./alerts-pw2xvgtT.js";import"./FSDivider-BzbNCf6i.js";import"./FSImage-CBathzkQ.js";import"./FSImageUI-E0mf0Zhc.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./VImg-BUrdc1ij.js";import"./index-jvVque46.js";import"./FSTile-CkO82QFl.js";import"./FSCheckbox-Bsnpn4tO.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./index-joExpvzU.js";import"./form-CgybbRT3.js";import"./hubFactory-BC_RzFMH.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:T},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:i,getting:r,entity:a}=b();return O(()=>{i(e.deviceOrganisationId)}),S(()=>e.deviceOrganisationId,()=>{i(e.deviceOrganisationId)}),{getting:r,entity:a}}});function D(e,i,r,a,w,$){var n;const v=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(p(),m(v,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(p(),m(f,I({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[1]||(i[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","modelValue"])):V("",!0)}const g=k(c,[["render",D]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const Xe={title:"Foundation/Core/Tiles/DeviceOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:i})=>({components:{FSDeviceOrganisationTile:g},props:Object.keys(i),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      FSDeviceOrganisationTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Ye=["Variations"];export{t as Variations,Ye as __namedExportsOrder,Xe as default};
