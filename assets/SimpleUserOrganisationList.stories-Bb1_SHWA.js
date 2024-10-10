import{a as t}from"./chunk-MZXVCX43-CM0pFb8Z.js";import o from"./FSSimpleUserOrganisationsList-DV_mnFrd.js";import{F as l}from"./FSSimpleList-3zhDOLlO.js";import{F as g}from"./FSTile-CnycmvQF.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./useUserOrganisations-B4HIo215.js";import"./permissionInfos-BPDgTHQl.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";import"./serviceFactory-DAEdCiSt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CFFgZ74C.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSCol-CYWCfIBP.js";import"./FSFadeOut-h32PDSwF.js";import"./uuid-DTaye2KM.js";import"./useColors-DTi99Ybi.js";import"./index-_Z9wfsFC.js";import"./theme-CX_N7n5F.js";import"./FSSlideGroup-DB-VrkfJ.js";import"./FSButtonNextIcon-CTPOL1ok.js";import"./FSButton-QMwUyqLg.js";import"./FSClickable-BE7nqA8Z.js";import"./FSCard-BJoqsHyz.js";import"./VProgressCircular-DjSdELIn.js";import"./color-Du5JXqac.js";import"./resizeObserver-BhfhgZOk.js";import"./VIcon-DzZvThha.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSIcon-bZBIO--g.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-UH0ZuYvc.js";import"./display-BhWGQDVt.js";import"./locale-BJQwrXJ7.js";import"./FSSearchField-ONB_Kbwq.js";import"./FSTextField-DxizsfKE.js";import"./FSBaseField-Dg_2QPSd.js";import"./VSpacer-Di7g3RCw.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./transition-DhTIerNz.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./loader-BYp4SDfR.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./useTranslations-BehwFxDb.js";import"./FSImage-C7sfzp_G.js";import"./FSImageUI-CVEMGwzn.js";import"./FSLoader-rPZmak_e.js";import"./dimensions-CqoZOW6j.js";import"./elevation-JfXKLVfD.js";import"./VImg-C1aVTsth.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSButtonEditIcon-DWUcAIMF.js";import"./FSButtonRemoveIcon-cw-QRS7Q.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-OT0jrbQK.js";import"./VSelectionControl-CFrRrZff.js";import"./index-DMxVfgfA.js";const We={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
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
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _e=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,_e as __namedExportsOrder,We as default};
