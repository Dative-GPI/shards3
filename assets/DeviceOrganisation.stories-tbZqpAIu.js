import{d as y,o as O,w as S,y as s,z as p,A as m,m as I,D as V}from"./vue.esm-bundler-Vj2X7okO.js";import{F}from"./FSDeviceOrganisationTileUI-CaW18JVu.js";import{F as T}from"./FSLoadTile-D3YJwp4u.js";import{a as b}from"./useDeviceOrganisations-BKJ5AFp-.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-B7JDOxiX.js";import"./FSButton-fjod5ujP.js";import"./FSClickable-BcHZK6vu.js";import"./FSCard-CD3PuQHv.js";import"./FSCol-Bk577joi.js";import"./css-CbCR1nbl.js";import"./FSRow-BuYwVvwM.js";import"./useColors-ClJ5KOuK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DqOMA9k1.js";import"./VProgressCircular-BALYDMME.js";import"./color-Dk23S21P.js";import"./tag-BDy8Psij.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./FSIcon-C5J86pUk.js";import"./VIcon-Dc5M3VhK.js";import"./FSWindow-BXqAPvoy.js";import"./group-CT1H1YXM.js";import"./proxiedModel-CZPY81Tp.js";import"./locale-CMOn_BOp.js";import"./VBtn-8V3HVfv8.js";import"./border-BD8WTLKh.js";import"./density-BWgXlOb-.js";import"./elevation-DH7kyzD7.js";import"./rounded-B-50KYhN.js";import"./dimensions-CBrtQk_X.js";import"./loader-DsDTT_wf.js";import"./anchor-J8DF-zwD.js";import"./router-DPbzaFf1.js";import"./index-BN7Lbnw3.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./lazy-Ceu0wY4v.js";import"./ssrBoot-D42UTWSS.js";import"./transition-Cs7QtK7U.js";import"./FSChip-Cy1QD-MY.js";import"./FSText-BFkdlBCz.js";import"./useDateFormat-DAzSBSGK.js";import"./datesTools-BRWlXl6j.js";import"./useTranslations-DyPMaPr_.js";import"./useAppLanguageCode-Dd4JQvnz.js";import"./useAppTimeZone-ghwi0HtC.js";import"./FSColor-hFc9rTeQ.js";import"./VMenu-BOpQjLNS.js";import"./VOverlay-Dml741yE.js";import"./forwardRefs-DWGaNmQL.js";import"./display-B4Z--0w1.js";import"./FSDivider-D-_vZpJK.js";import"./FSImage-xcHxoARe.js";import"./FSImageUI-oKoqxlvk.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./VImg-BXfgvzNq.js";import"./index-DQeMThUY.js";import"./FSTile-B_dLRwrv.js";import"./FSCheckbox-CEveiKls.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./index-7QBgy7JM.js";import"./form-BN2rR47-.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:T},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:i,getting:r,entity:a}=b();return O(()=>{i(e.deviceOrganisationId)}),S(()=>e.deviceOrganisationId,()=>{i(e.deviceOrganisationId)}),{getting:r,entity:a}}});function D(e,i,r,a,w,$){var n;const v=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(p(),m(v,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[0]||(i[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(p(),m(f,I({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":i[1]||(i[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","modelValue"])):V("",!0)}const g=k(c,[["render",D]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const Qe={title:"Foundation/Core/Tiles/DeviceOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:i})=>({components:{FSDeviceOrganisationTile:g},props:Object.keys(i),setup(){return{...e}},template:`
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Re=["Variations"];export{t as Variations,Re as __namedExportsOrder,Qe as default};
