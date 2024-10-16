import{F as i}from"./FSServiceAccountOrganisationTileUI-CCzGQGfG.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSImage-DX4PKeqX.js";import"./FSImageUI-DfvkwKR7.js";import"./FSLoader-CpOtM_ow.js";import"./useBreakpoints-ERBVGIQe.js";import"./useColors-B16sP4OM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BKYtCmay.js";import"./css-B7hQ34V-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-DBJfw4cY.js";import"./dimensions-C-vtuVn7.js";import"./elevation-RaRrQxn9.js";import"./locale-BJQwrXJ7.js";import"./VImg-I7jXrjsW.js";import"./rounded-DM_o2hWD.js";import"./transition-B83BVatf.js";import"./index-C31q_73Z.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSTile-HyyFIrRk.js";import"./FSClickable-BQ3H9eJY.js";import"./FSCard-DwYAEOV7.js";import"./FSCol-CYWCfIBP.js";import"./FSRow-CFFgZ74C.js";import"./VProgressCircular-cHoQoKlr.js";import"./resizeObserver-Bmwp6ruU.js";import"./VIcon-BCDp5TRU.js";import"./FSCheckbox-aOsAP6ny.js";import"./FSIcon-D2mo_-bk.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-tPPxW1bW.js";import"./density-CJqFEH6j.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CZlC8CZb.js";import"./VLabel-DFQa5Qos.js";import"./VInput-BwoMaTW2.js";import"./index-CiXeh9xR.js";import"./form-D8F-RrsG.js";const ie={title:"Foundation/Shared/Tiles/ServiceAccountOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog",imageId:"1"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog",imageId:"1"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog",imageId:"1"}],selected:[!1,!1,!1]}},render:(o,{argTypes:r})=>({components:{FSServiceAccountOrganisationTileUI:i},props:Object.keys(r),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :imageId="serviceAccountOrganisation.imageId"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`})},n={args:{args:{values:[{id:"1",label:"DB back-ups",roleLabel:"Back up service serviceAccount",roleIcon:"mdi-cog"},{id:"2",label:"TODO: delete",roleLabel:"TODO: delete too",roleIcon:"mdi-cog"},{id:"3",name:"This service account is used to make API calls to one of the third service apps we use",serviceAccountType:0,roleLabel:"API service serviceAccount",roleIcon:"mdi-cog"}],selected:[!1,!1]}},render:(o,{argTypes:r})=>({components:{FSServiceAccountOrganisationTileUI:i},props:Object.keys(r),setup(){return{...o}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>`})};var a,c,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog",
        imageId: "1"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog",
        imageId: "1"
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSServiceAccountOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :imageId="serviceAccountOrganisation.imageId"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(s=(c=e.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var t,l,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "DB back-ups",
        roleLabel: "Back up service serviceAccount",
        roleIcon: "mdi-cog"
      }, {
        id: "2",
        label: "TODO: delete",
        roleLabel: "TODO: delete too",
        roleIcon: "mdi-cog"
      }, {
        id: "3",
        name: "This service account is used to make API calls to one of the third service apps we use",
        serviceAccountType: 0,
        roleLabel: "API service serviceAccount",
        roleIcon: "mdi-cog"
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSServiceAccountOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSServiceAccountOrganisationTileUI
        v-for="(serviceAccountOrganisation, index) in args.values"
        :key="index"
        :label="serviceAccountOrganisation.label"
        :roleIcon="serviceAccountOrganisation.roleIcon"
        :roleLabel="serviceAccountOrganisation.roleLabel"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const ae=["Variations","Imageless"];export{n as Imageless,e as Variations,ae as __namedExportsOrder,ie as default};
