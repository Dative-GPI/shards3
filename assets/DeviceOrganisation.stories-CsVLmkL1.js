import{d as y,g as O,w as T,y as s,z as p,A as m,m as S,H as V}from"./vue.esm-bundler-D3ngFwGY.js";import{F}from"./FSDeviceOrganisationTileUI-DyYH9f2T.js";import{F as I}from"./FSLoadTile-Do7oqkpg.js";import{a as b}from"./useDeviceOrganisations-CII15Wc-.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-h-CAaSdy.js";import"./FSButton-D8KNVcat.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSCard-BZyb3dNk.js";import"./FSCol-CVj0zcU5.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./FSRow-CYD73_tT.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./VProgressCircular-DfVaP_TZ.js";import"./color-D4nM6Ihv.js";import"./resizeObserver-D4qCRTFx.js";import"./VIcon-DBlUULm8.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSIcon-C0akNC9K.js";import"./FSWindow-DqyIK3y_.js";import"./group-BJiCY4dd.js";import"./proxiedModel-BmbZrdih.js";import"./lazy-BmZjQX7F.js";import"./ssrBoot-Cn3QeRqO.js";import"./transition-DtcXiLpW.js";import"./locale-R8GaLlvb.js";import"./VBtn-DIpB4JrY.js";import"./border-DWowyKy3.js";import"./density-CRkSANTr.js";import"./elevation-C84Wb_jC.js";import"./rounded-CG6jOZvY.js";import"./dimensions-D-jSeqs8.js";import"./loader-BvdvxiyE.js";import"./anchor-BMg_Hu1U.js";import"./router-BPv_tYld.js";import"./index-CZbNBjVV.js";import"./VDefaultsProvider-EJiha1S2.js";import"./FSStatus-LfASusfJ.js";import"./FSChip-CyfHnFR3.js";import"./FSText-CcQBLJU9.js";import"./useDateFormat-C9QY5oFQ.js";import"./useAppLanguageCode-CbHleqYG.js";import"./useAppTimeZone-Cp_499X8.js";import"./startOfWeek-uXTpkxA4.js";import"./datesTools-jb_azIFs.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-Dmqoe3Kp.js";import"./FSColor-CoDQIbAu.js";import"./VMenu-DPuNMseR.js";import"./VOverlay-CsDtmGQB.js";import"./forwardRefs-DWGaNmQL.js";import"./display-1bSD02Hb.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-BS2bJTaH.js";import"./FSDivider-jFrTxQOo.js";import"./FSImage-BwiE9qIQ.js";import"./FSImageUI-DPxZyIow.js";import"./FSLoader-BdvsvlI6.js";import"./VImg-vN6S5DJZ.js";import"./index-BuamrmjQ.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./FSTile-Bl0RN2m-.js";import"./FSCheckbox-BdK031Hz.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./form-thVqu4eJ.js";import"./hubFactory-BFjCdo5p.js";import"./deviceConnectivityDetails-d_lSsQP-.js";import"./base-DtpW3JT2.js";import"./useAppOrganisationId-BemUUsho.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:I},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const v=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(p(),m(v,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(p(),m(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","alertTo","modelValue"])):V("",!0)}const g=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const pt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:g},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const mt=["Variations"];export{i as Variations,mt as __namedExportsOrder,pt as default};
