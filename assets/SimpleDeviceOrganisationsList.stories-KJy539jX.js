import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import o from"./FSSimpleDeviceOrganisationsList-Bca0I3w1.js";import{F as l}from"./FSSimpleList-DjHJNdwx.js";import{F as g}from"./FSTile-dJi94q2j.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-Zcuj-zyO.js";import"./useDeviceOrganisations-Cu9g9TgR.js";import"./hubFactory-Z_MriFu2.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./base-DsQovONZ.js";import"./useAppOrganisationId-HHayVd6L.js";import"./serviceFactory-DTTRhbEw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-DJbHulE4.js";import"./pathCrumb-Db-cq5HI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./FSCol-DLyNVOXQ.js";import"./FSLoader-CRmsosiO.js";import"./useColors-Cz5tOQmp.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./color-mm3JSYKM.js";import"./dimensions-BWgpWc0X.js";import"./elevation-BrHPj82J.js";import"./locale-Beavd5eP.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSSlideGroup-CtBhRuPR.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./FSButton-BzTwanlk.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSCard-4bilSlvW.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./VIcon-DsLd3bsf.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSIcon-CKEWDmaC.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-D14OnwAh.js";import"./display-Db__yhk9.js";import"./FSSearchField-CB7t8Nmn.js";import"./FSTextField-BcsUOOXo.js";import"./FSBaseField-DHv7mzhZ.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./transition-shOmLEJh.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./density-DMrbDfgW.js";import"./form-ChxmsGl9.js";import"./loader-EtqkGPwj.js";import"./anchor-BS5WaiJh.js";import"./rounded-3VvIKpNW.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DnJxNQYu.js";import"./useTranslations-DN7QCs30.js";import"./FSImage-CJNmFlk_.js";import"./FSImageUI-Q0M2a9Ft.js";import"./VImg-DaKoZ_qJ.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSButtonEditIcon-BoE2qcID.js";import"./FSButtonRemoveIcon-DGvsyVY3.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-CunxM6rm.js";import"./VSelectionControl-u1dDpc9z.js";import"./index-CMMTOWvF.js";const Ae={title:"Foundation/Core/Lists/Simple Lists/SimpleDeviceOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
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
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const Be=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,Be as __namedExportsOrder,Ae as default};
