import{d as y,g as O,w as T,y as s,z as p,A as m,m as S,F as V}from"./vue.esm-bundler-Ddr6MgcY.js";import{F}from"./FSDeviceOrganisationTileUI-Buv9flsd.js";import{F as I}from"./FSLoadTile-DDJcKjGJ.js";import{a as b}from"./useDeviceOrganisations-Dk3fRQr5.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-CqLLAKeP.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-D7sul-uP.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSCol-D8gLxM2E.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./FSRow-CSQtiyAx.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSIcon-DfjSexyz.js";import"./FSWindow-ed6WJT5P.js";import"./group-Chxk22vU.js";import"./proxiedModel-BYnu2EOK.js";import"./locale-CA7yUTVs.js";import"./VBtn-GP0Uljy4.js";import"./border-BiXRHevL.js";import"./density-B5LNz2JK.js";import"./elevation-BNOJtsSY.js";import"./rounded-BoPqla0T.js";import"./dimensions-DL1AZk-8.js";import"./loader-CNy9VCwd.js";import"./anchor-BdD5yCeG.js";import"./router-C4YP2PAT.js";import"./index-BF2Ge4Ib.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./lazy-BsoIJm2g.js";import"./ssrBoot-BXK87sqN.js";import"./transition-BtBp4lzQ.js";import"./FSStatus-DUg0YFF5.js";import"./FSChip-B-qI2KQy.js";import"./FSText-CAGI2dEo.js";import"./useDateFormat-DxxoI3Q6.js";import"./useAppLanguageCode-C2XicOK_.js";import"./useAppTimeZone-Bno6Crzp.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-DgvmBCqU.js";import"./FSColor-CAGSG5Uy.js";import"./VMenu-CkU-g4Hp.js";import"./VOverlay-C5IcMf4o.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BUGvawh3.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-KPdDZdOJ.js";import"./FSDivider-CDvYXrsD.js";import"./FSImage-9J49soYl.js";import"./FSImageUI-CifHzJ5L.js";import"./FSLoader-PksHGtEK.js";import"./VImg-Bi-pKvLj.js";import"./index-lTYthPHq.js";import"./imageDetails-C93ayhcT.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-H3XPfy7N.js";import"./useAppAuthToken-BhmYrSKL.js";import"./FSTile-BHCSbyjx.js";import"./FSCheckbox-3iIuKfLX.js";import"./useRules-BfiZMl38.js";import"./VSelectionControl-DbX2q5FD.js";import"./VLabel-DauhzWNW.js";import"./VInput-D-xdUwRR.js";import"./index-B-qTxNvr.js";import"./form-vji0TmoR.js";import"./hubFactory-CKRKrh7_.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./base-DCZJTx46.js";import"./useAppOrganisationId-4oKdl_5X.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:I},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const v=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(p(),m(v,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(p(),m(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","alertTo","modelValue"])):V("",!0)}const g=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const pt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:g},props:Object.keys(t),setup(){return{...e}},template:`
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
