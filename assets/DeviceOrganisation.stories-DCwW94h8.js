import{d as y,g as O,w as T,y as s,z as p,A as m,m as S,F as V}from"./vue.esm-bundler-DTB_q9xr.js";import{F}from"./FSDeviceOrganisationTileUI-CgJ1HhlQ.js";import{F as I}from"./FSLoadTile-C_Hn3J8j.js";import{a as b}from"./useDeviceOrganisations-DYYfdIWi.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-BeAsjQlc.js";import"./FSButton-tjzQSrUn.js";import"./FSClickable-BWJokye8.js";import"./FSCard-C6D9gNrD.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSRow-CFFgZ74C.js";import"./useColors-BWKJNLz8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CaaGuK6D.js";import"./FSWindow-Brcf5j8v.js";import"./group-CBQYGNTq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./locale-BJQwrXJ7.js";import"./VBtn-BUwP05fv.js";import"./border-Va--AsO6.js";import"./density-CmGe4Vfq.js";import"./elevation-JfXKLVfD.js";import"./rounded-ErtzAGHK.js";import"./dimensions-CqoZOW6j.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./router-DxFny788.js";import"./index-DMxVfgfA.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./lazy-CgkI0iJG.js";import"./ssrBoot-BTOmRKcz.js";import"./transition-DhTIerNz.js";import"./FSStatus-BVJrOVj6.js";import"./FSChip-D8HPW226.js";import"./FSText-7jyalPrS.js";import"./useDateFormat-0HRqVufQ.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./useAppTimeZone-ByDiY2xy.js";import"./useTranslations-BehwFxDb.js";import"./FSColor-BQxGv4SQ.js";import"./VMenu-CuKNZEBs.js";import"./VOverlay-Coy41zxg.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BhWGQDVt.js";import"./alertsTools-DD6cQ03p.js";import"./FSDivider-BNA1ohhL.js";import"./FSImage-vG2AQfVz.js";import"./FSImageUI-DUeC9pFd.js";import"./FSLoader-BFHjXl9p.js";import"./VImg-C1aVTsth.js";import"./index-DS9MhfY5.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSTile-dxsyidoQ.js";import"./FSCheckbox-Bdwx0Alv.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./index-UH0ZuYvc.js";import"./form-_oo3cshG.js";import"./hubFactory-BG4vFkeF.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:I},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const v=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(p(),m(v,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(p(),m(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","alertTo","modelValue"])):V("",!0)}const g=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const ot={title:"Foundation/Core/Tiles/DeviceOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:g},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const rt=["Variations"];export{i as Variations,rt as __namedExportsOrder,ot as default};
