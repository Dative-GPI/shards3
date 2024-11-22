import{d as y,g as O,w as T,A as s,B as p,C as m,j as S,H as V}from"./vue.esm-bundler-Zcuj-zyO.js";import{F}from"./FSDeviceOrganisationTileUI-CBBAzURG.js";import{F as I}from"./FSLoadTile-CSNmMQ7h.js";import{a as b}from"./useDeviceOrganisations-Cu9g9TgR.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-KgZ0CuD7.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./FSCol-DLyNVOXQ.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./FSRow-4Qz6Bbpg.js";import"./useColors-Cz5tOQmp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./VProgressCircular-B73DQeX0.js";import"./color-mm3JSYKM.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSIcon-CKEWDmaC.js";import"./FSWindow-CJWM8-SG.js";import"./FSText-DqK2dTtm.js";import"./group-ATTNrdHt.js";import"./proxiedModel-Xz4IZg0a.js";import"./locale-Beavd5eP.js";import"./VBtn-CKg6JYm3.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./dimensions-BWgpWc0X.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./router-DnAkll3L.js";import"./index-CMMTOWvF.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./scopeId-CPcZlDEY.js";import"./ssrBoot-B8tyBOTn.js";import"./transition-shOmLEJh.js";import"./FSStatus-3QrK5b4W.js";import"./FSChip-DMpdcIDo.js";import"./useDateFormat-CYsDMoti.js";import"./useAppLanguageCode-DjpqeQYI.js";import"./useAppTimeZone-F2KFQp0H.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-DN7QCs30.js";import"./FSColor-B8iHsn2b.js";import"./VMenu-C3kJxa_y.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./display-Db__yhk9.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DpPwu707.js";import"./FSDivider-DOHnDXxM.js";import"./FSImage-CJNmFlk_.js";import"./FSImageUI-Q0M2a9Ft.js";import"./FSLoader-CRmsosiO.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSTile-dJi94q2j.js";import"./FSCheckbox-CunxM6rm.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./index-D14OnwAh.js";import"./form-ChxmsGl9.js";import"./hubFactory-Z_MriFu2.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:I},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const v=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(p(),m(v,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(p(),m(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","alertTo","modelValue"])):V("",!0)}const g=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const pt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:g},props:Object.keys(t),setup(){return{...e}},template:`
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
