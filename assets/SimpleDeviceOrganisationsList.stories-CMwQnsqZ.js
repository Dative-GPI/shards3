import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import a from"./FSSimpleDeviceOrganisationsList-CWWgVE1-.js";import{F as p}from"./FSSimpleList-DwOOuEWW.js";import{F as g}from"./FSTile-BxIJyXna.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./useDeviceOrganisations-CvIgpWuO.js";import"./hubFactory-CTsGCpS5.js";import"./datesTools-BRWlXl6j.js";import"./base-1FyQZYnT.js";import"./useAppOrganisationId-BfPsGMlN.js";import"./serviceFactory-Bd5jifNi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";import"./pathCrumb-Db-cq5HI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CVY2l52N.js";import"./css-DLfrm0pR.js";import"./FSCol-YmDykHL-.js";import"./FSText-8i4Fp1Ld.js";import"./useColors-B5ivMAr9.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./useSlots-P12pG1X5.js";import"./FSIcon-DHDofKUo.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./FSSpan-CCGpb4KF.js";import"./FSImage-CFc3JLJw.js";import"./FSImageUI-BgfW-D59.js";import"./base-CmdGny12.js";import"./FSLoader-DIRgKG_M.js";import"./dimensions-DyYT4L19.js";import"./elevation-Ben4zuE4.js";import"./locale-C-s_GJlL.js";import"./VImg-DW7Ik4XH.js";import"./rounded-Dg8mz8II.js";import"./transition-CNA6wh-m.js";import"./index-D_lBla-s.js";import"./FSFadeOut-I9nnIcBb.js";import"./uuid-DTaye2KM.js";import"./FSSearchField-DFF89qPo.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./VSpacer-C4plVoTE.js";import"./FSButton-BVWlNylM.js";import"./FSClickable-DVS7KdyM.js";import"./FSCard-DAS46KTX.js";import"./VProgressCircular-Dh9H7lZx.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./index-CHbvZ5Sj.js";import"./VLabel-owjBjdIA.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./loader-pPiux2KM.js";import"./anchor-D9N-895C.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-CdSqQFV3.js";import"./FSButtonEditIcon-Bu4_DC1O.js";import"./FSButtonRemoveIcon-C7euGplk.js";import"./filter-CTnmeGG4.js";import"./FSCheckbox-YoHHo_JV.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";const Oe={title:"Foundation/Core/Lists/Simple Lists/SimpleDeviceOrganisationsList",component:a,subcomponents:{FSSimpleList:p,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"},"click:item":{action:"click:item"}}},e={render:r=>({components:{FSSimpleDeviceOrganisationsList:a},setup(){return{args:r}},template:`
      <FSSimpleDeviceOrganisationsList
        :label="args.label"
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :clickable="args.clickable"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
        @click:item="args['click:item']"
      />
    `}),args:{label:"Liste des équipements",maxHeight:100,showEdit:!1,showRemove:!1,showDraggable:!1,direction:"column",itemLabel:"label",clickable:!0,searchable:!0,"click:edit":t("click:edit"),"click:remove":t("click:remove"),"click:item":t("click:item")}},i={args:{label:"",maxHeight:0,showEdit:!0,showRemove:!0,showDraggable:!1,direction:"column",itemLabel:"label",clickable:!1,searchable:!1},render:r=>({components:{FSSimpleDeviceOrganisationsList:a},setup(){return{args:r}},template:`
      <FSSimpleDeviceOrganisationsList
        :label="args.label"
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :clickable="args.clickable"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
        @click:item="args['click:item']"
      />
    `})};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        :label="args.label"
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :clickable="args.clickable"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
        @click:item="args['click:item']"
      />
    \`
  }),
  args: {
    label: "Liste des équipements",
    maxHeight: 100,
    showEdit: false,
    showRemove: false,
    showDraggable: false,
    direction: "column",
    itemLabel: "label",
    clickable: true,
    searchable: true,
    "click:edit": action("click:edit"),
    "click:remove": action("click:remove"),
    "click:item": action("click:item")
  }
}`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var m,l,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "",
    maxHeight: 0,
    showEdit: true,
    showRemove: true,
    showDraggable: false,
    direction: "column",
    itemLabel: "label",
    clickable: false,
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
        :label="args.label"
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :clickable="args.clickable"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
        @click:item="args['click:item']"
      />
    \`
  })
}`,...(n=(l=i.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const qe=["Default","ListWithoutSearch"];export{e as Default,i as ListWithoutSearch,qe as __namedExportsOrder,Oe as default};
