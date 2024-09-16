import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import o from"./FSSimpleUserOrganisationsList-DqCDf9mr.js";import{F as p}from"./FSSimpleList-OSO6s-7o.js";import{F as g}from"./FSTile-ClEhpyRn.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./useUserOrganisations-CrfAsfeZ.js";import"./permissionInfos-BPDgTHQl.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CA1vgNXx.js";import"./css-DLfrm0pR.js";import"./FSCol-DZA6pxA1.js";import"./FSIcon-DwJNOKvG.js";import"./useColors-DlnF7i6T.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./useSlots-P12pG1X5.js";import"./FSImage-BxDhaxzU.js";import"./FSImageUI-C0XOuHIu.js";import"./FSLoader-CtbqJzfZ.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./FSFadeOut-D96pvLZm.js";import"./uuid-DTaye2KM.js";import"./FSSearchField-Cjbg81V-.js";import"./FSTextField-DIyIIzs_.js";import"./FSBaseField-BkzmckaL.js";import"./VSpacer-C4plVoTE.js";import"./FSButton-CyN0itWL.js";import"./FSClickable-CS9kdIxp.js";import"./FSCard-Dakm4bPu.js";import"./VProgressCircular-Dh9H7lZx.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CdSqQFV3.js";import"./FSButtonEditIcon-Bj5j-S1b.js";import"./FSButtonRemoveIcon-zbowsA9L.js";import"./filter-CTnmeGG4.js";import"./FSCheckbox-DPKcfP0u.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";const Fe={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:p,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
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
    `}),args:{maxHeight:100,showEdit:!1,showRemove:!1,showDraggable:!1,direction:"row",itemLabel:"label",searchable:!0,tileHeight:"60px",tileProps:e=>({onClick:()=>t("onClick:item")(e)}),"click:edit":t("click:edit"),"click:remove":t("click:remove")}},r={args:{maxHeight:0,showEdit:!0,showRemove:!0,showDraggable:!1,direction:"row",itemLabel:"label",searchable:!1,tileHeight:"60px"},render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
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
    itemLabel: "label",
    searchable: true,
    tileHeight: '60px',
    tileProps: item => ({
      onClick: () => action("onClick:item")(item)
    }),
    "click:edit": action("click:edit"),
    "click:remove": action("click:remove")
  }
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,l,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    maxHeight: 0,
    showEdit: true,
    showRemove: true,
    showDraggable: false,
    direction: "row",
    itemLabel: "label",
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const Re=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,Re as __namedExportsOrder,Fe as default};
