import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import o from"./FSSimpleDeviceOrganisationsList-BFVk5suf.js";import{F as l}from"./FSSimpleList-CET6gE1l.js";import{F as g}from"./FSTile-BSOUNQQx.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./useDeviceOrganisations-LAHjjwf3.js";import"./hubFactory-BG4vFkeF.js";import"./deviceConnectivityDetails-C8LcbwOg.js";import"./datesTools-CGhnvN9k.js";import"./startOfWeek-uXTpkxA4.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./pathCrumb-Db-cq5HI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BkWeXIi_.js";import"./css-i8JhJBs1.js";import"./useBreakpoints-BGn0bPYv.js";import"./FSCol-B-Vfvg0L.js";import"./FSFadeOut-CRwwg4VQ.js";import"./uuid-DTaye2KM.js";import"./useColors-Du1QHlOW.js";import"./index-DfSX31J9.js";import"./theme-BKYtCmay.js";import"./FSSlideGroup-CuNxa7LX.js";import"./FSButtonNextIcon-Df26-_J5.js";import"./FSButton-BQje8JZk.js";import"./FSClickable-Dnlrfn2W.js";import"./FSCard-DrQswI-1.js";import"./VProgressCircular-cHoQoKlr.js";import"./color-DBJfw4cY.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSSpan-CHspDDbd.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-CtLYuQJX.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CiXeh9xR.js";import"./display-CKqU0R6P.js";import"./locale-BJQwrXJ7.js";import"./FSSearchField-DJ1HQDjY.js";import"./FSTextField-DPsTjA6v.js";import"./FSBaseField-DL008ZG5.js";import"./VSpacer-y-n940VK.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./transition-B83BVatf.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./density-CJqFEH6j.js";import"./form-D8F-RrsG.js";import"./loader-Cs6S2SUJ.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./useTranslations-BehwFxDb.js";import"./FSImage-n23S65yP.js";import"./FSImageUI-Ck5osTsj.js";import"./FSLoader-DQSvmWsx.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./VImg-I7jXrjsW.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSButtonEditIcon-CkvAMuZH.js";import"./FSButtonRemoveIcon-B2qPDLyB.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-BLdBQVgd.js";import"./VSelectionControl-tPPxW1bW.js";import"./index-CZlC8CZb.js";const ze={title:"Foundation/Core/Lists/Simple Lists/SimpleDeviceOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const Ae=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,Ae as __namedExportsOrder,ze as default};
