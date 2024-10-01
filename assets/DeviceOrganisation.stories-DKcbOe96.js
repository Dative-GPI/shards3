import{d as y,g as O,w as T,y as s,z as p,A as l,m as S,D as V}from"./vue.esm-bundler-CxS4_7kK.js";import{F}from"./FSDeviceOrganisationTileUI-DhSHko6i.js";import{F as I}from"./FSLoadTile-DvBgvjvx.js";import{a as b}from"./useDeviceOrganisations-BYKr8QWC.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-_Xh8fsZP.js";import"./FSButton-D4qgd2ja.js";import"./FSClickable-xECbCdT3.js";import"./FSCard-uGx4g-q0.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./FSRow-D546kqFt.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./VProgressCircular-BpEvERgl.js";import"./color-DpQhyQC8.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSIcon-DKHuRfPI.js";import"./VIcon-C65wMs2G.js";import"./FSWindow-CI0pCdxo.js";import"./group-Bl9vmDol.js";import"./proxiedModel-DAUSUEYq.js";import"./locale-DgxPCyxi.js";import"./VBtn-Cg1UOEjx.js";import"./border-yULewhCr.js";import"./density-CY0EC5jE.js";import"./elevation-8SXivnh1.js";import"./rounded-Cd5tqTfa.js";import"./dimensions-DBaG2oVF.js";import"./loader-BoG0AaGl.js";import"./anchor-CfU9RSql.js";import"./router-C4cLtMAM.js";import"./index-Dx6GtDlm.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./lazy-DlJBGmKZ.js";import"./ssrBoot-hTBI6W7o.js";import"./transition-DZ-8zzo1.js";import"./FSStatus-GtDsACE4.js";import"./FSChip-Dvm8S3l9.js";import"./FSText-CETLcZv7.js";import"./useDateFormat-3O5RagjD.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-wQ6k6F6B.js";import"./useAppTimeZone-CIW33DGM.js";import"./useTranslations-ZMyFjr19.js";import"./FSColor-v9frFHZv.js";import"./VMenu-CCWiAq1W.js";import"./VOverlay-D-6__nW6.js";import"./forwardRefs-DWGaNmQL.js";import"./display-B-O23xq9.js";import"./alertsTools-Ea17MnXY.js";import"./FSDivider-BkjjDvS3.js";import"./FSImage-B8BZKIvS.js";import"./FSImageUI-S1V1r0uW.js";import"./FSLoader-BMQDJgx0.js";import"./VImg-616TDJo4.js";import"./index-CQjBi2ms.js";import"./useImages-DkNM0cBn.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-935AgDKu.js";import"./FSTile-C18qmuVB.js";import"./FSCheckbox-BJ0zq37S.js";import"./useRules-o706rtr1.js";import"./VSelectionControl-CGo5bYGX.js";import"./VLabel-DuhHDssR.js";import"./VInput-BdNbghoa.js";import"./index-D0m5TbR6.js";import"./form-lyoENh9E.js";import"./hubFactory-CORDCgPG.js";import"./base-CaOb73CX.js";import"./useAppOrganisationId-DHO07ZDR.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:I},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function D(e,t,r,a,w,$){var n;const v=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(p(),l(v,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(p(),l(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","alertTo","modelValue"])):V("",!0)}const g=k(c,[["render",D]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const it={title:"Foundation/Core/Tiles/DeviceOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:g},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var m,d,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const ot=["Variations"];export{i as Variations,ot as __namedExportsOrder,it as default};
