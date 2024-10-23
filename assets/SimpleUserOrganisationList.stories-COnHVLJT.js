import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import o from"./FSSimpleUserOrganisationsList-1jgmqGcz.js";import{F as p}from"./FSSimpleList-BOj1Lt4R.js";import{F as g}from"./FSTile-j5yKVznv.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-l-siv0w9.js";import"./useUserOrganisations-Ds2BTiaH.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BWToAT4M.js";import"./useAppOrganisationId-Cv6r7Qq7.js";import"./serviceFactory-DAEdCiSt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BjeBkMPV.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./FSCol-DD5MeAoT.js";import"./FSFadeOut-BSloJqBX.js";import"./uuid-DTaye2KM.js";import"./useColors-_VkINegi.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./FSSlideGroup-CHXCfQIs.js";import"./FSButtonNextIcon-Oq-oGe9E.js";import"./FSButton-BJI5MpMt.js";import"./FSClickable-V0Na2XEk.js";import"./FSCard-DID5L9tx.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-DwE651wI.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-sBizf6C-.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./display-BWzbFTnS.js";import"./locale-CTwwbPAi.js";import"./FSSearchField-BEe0Y2QL.js";import"./FSTextField-DvwDf1ul.js";import"./FSBaseField-lAwl7qG_.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./transition-AZsQzdUZ.js";import"./VLabel-Dswg7Ov5.js";import"./VInput-BkciVi2d.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./loader-avZiZGL_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./useTranslations-CJK8D24x.js";import"./FSImage-ihV3tsSh.js";import"./FSImageUI-D_PUGA5p.js";import"./FSLoader-N5M2d1wd.js";import"./dimensions-9QoL2_-9.js";import"./elevation-BZDXH0CP.js";import"./VImg-CZhZqiQJ.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CwPnmj0J.js";import"./FSButtonEditIcon-BS6g1a7I.js";import"./FSButtonRemoveIcon-ErqvaQEl.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-CdzKHZh_.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";const Te={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:p,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        direction="row"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `}),args:{maxHeight:100,showEdit:!1,showRemove:!1,showDraggable:!1,direction:"row",itemLabel:"name",searchable:!0,tileHeight:"60px",tileProps:e=>({onClick:()=>t("onClick:item")(e)}),"click:edit":t("click:edit"),"click:remove":t("click:remove")}},r={args:{maxHeight:0,showEdit:!0,showRemove:!0,showDraggable:!1,direction:"row",itemLabel:"name",searchable:!1,tileHeight:"60px"},render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `})};var a,s,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSimpleUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        direction="row"
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
    direction: "row",
    itemLabel: "name",
    searchable: true,
    tileHeight: '60px',
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
    direction: "row",
    itemLabel: "name",
    searchable: false,
    tileHeight: '60px'
  },
  render: args => ({
    components: {
      FSSimpleUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    \`
  })
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const We=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,We as __namedExportsOrder,Te as default};
