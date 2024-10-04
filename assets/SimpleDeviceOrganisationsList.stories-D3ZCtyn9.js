import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import o from"./FSSimpleDeviceOrganisationsList-D3Z5DsHu.js";import{F as p}from"./FSSimpleList-Vpk590vz.js";import{F as g}from"./FSTile-CBWW7c3A.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./useDeviceOrganisations-eVcYZlMe.js";import"./hubFactory-BKr-Plm6.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./base-Dqld2mbm.js";import"./useAppOrganisationId-BmirlPAl.js";import"./serviceFactory-DAEdCiSt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./pathCrumb-Db-cq5HI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-D4JfwQlG.js";import"./css-DVhR3h-A.js";import"./FSCol-Bj1WIVag.js";import"./FSFadeOut-wBxXm2Rc.js";import"./uuid-DTaye2KM.js";import"./useColors-CrLBSafx.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./FSSlideGroup-CcLnrzQE.js";import"./FSButtonNextIcon-CAmf97OC.js";import"./FSButton-C5MQI7ea.js";import"./FSClickable-D_ads5r5.js";import"./FSCard-D8qRc7rc.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-DpOLTsx1.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-vAlkpflo.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./index-D2mfwXxT.js";import"./display-4460MzAg.js";import"./locale-BGMMnFfJ.js";import"./FSSearchField-C0n2-EIx.js";import"./FSTextField-D5y-h9FL.js";import"./FSBaseField-CMqv-0AW.js";import"./VSpacer-DLFo12A6.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./transition-BvKGRC-_.js";import"./VLabel-hsX9xD9s.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./loader-DuCiGAVb.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./useTranslations-CEnu7PZQ.js";import"./FSImage-D-VbLOPJ.js";import"./FSImageUI-D64m-s1x.js";import"./FSLoader-DxfJongP.js";import"./dimensions-Cku-Ba4r.js";import"./elevation-DH_sKWqU.js";import"./VImg-Bj7MyRJQ.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BNiaspL4.js";import"./FSButtonEditIcon-Cka-cukL.js";import"./FSButtonRemoveIcon-g_1rl0y2.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-18K-cCtB.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";const je={title:"Foundation/Core/Lists/Simple Lists/SimpleDeviceOrganisationsList",component:o,subcomponents:{FSSimpleList:p,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `}),args:{maxHeight:100,showEdit:!1,showRemove:!1,showDraggable:!1,direction:"column",itemLabel:"label",searchable:!0,tileProps:e=>({onClick:()=>t("onClick:item")(e)}),"click:edit":t("click:edit"),"click:remove":t("click:remove")}},r={args:{maxHeight:0,showEdit:!0,showRemove:!0,showDraggable:!1,direction:"column",itemLabel:"label",searchable:!1},render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `})};var a,s,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSimpleDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    \`
  }),
  args: {
    maxHeight: 100,
    showEdit: false,
    showRemove: false,
    showDraggable: false,
    direction: "column",
    itemLabel: "label",
    searchable: true,
    tileProps: item => ({
      onClick: () => action("onClick:item")(item)
    }),
    "click:edit": action("click:edit"),
    "click:remove": action("click:remove")
  }
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,c,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    maxHeight: 0,
    showEdit: true,
    showRemove: true,
    showDraggable: false,
    direction: "column",
    itemLabel: "label",
    searchable: false
  },
  render: args => ({
    components: {
      FSSimpleDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    \`
  })
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const qe=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,qe as __namedExportsOrder,je as default};
