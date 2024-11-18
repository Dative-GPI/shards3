import{F as i}from"./FSUserOrganisationTileUI-DQfvihtk.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSImage-BwiE9qIQ.js";import"./FSImageUI-DPxZyIow.js";import"./FSLoader-BdvsvlI6.js";import"./useBreakpoints-DbdoA89o.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-D4nM6Ihv.js";import"./dimensions-D-jSeqs8.js";import"./elevation-C84Wb_jC.js";import"./locale-R8GaLlvb.js";import"./VImg-vN6S5DJZ.js";import"./rounded-CG6jOZvY.js";import"./transition-DtcXiLpW.js";import"./index-BuamrmjQ.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSTile-Bl0RN2m-.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSCard-BZyb3dNk.js";import"./FSCol-CVj0zcU5.js";import"./FSRow-CYD73_tT.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./VIcon-DBlUULm8.js";import"./FSCheckbox-BdK031Hz.js";import"./FSIcon-C0akNC9K.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./index-CZbNBjVV.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./form-thVqu4eJ.js";import"./useTranslations-Dmqoe3Kp.js";const le={title:"Foundation/Shared/Tiles/UserOrganisation",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",imageId:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",imageId:"1",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",imageId:"1",name:"Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1,!1]}},render:(a,{argTypes:r})=>({components:{FSUserOrganisationTileUI:i},props:Object.keys(r),setup(){return{...a}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})},n={args:{args:{values:[{id:"1",name:"Jean-Michel Quelqu'un",admin:!0},{id:"2",name:"Jean-Michel Personne",roleLabel:"Red shirt",roleIcon:"mdi-cog",admin:!1},{id:"3",name:"Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",roleLabel:"User",roleIcon:"mdi-account-outline",admin:!1}],selected:[!1,!1]}},render:(a,{argTypes:r})=>({components:{FSUserOrganisationTileUI:i},props:Object.keys(r),setup(){return{...a}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>`})};var o,s,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        imageId: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        imageId: "1",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        imageId: "1",
        name: "Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :imageId="userOrganisation.imageId"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        name: "Jean-Michel Quelqu'un",
        admin: true
      }, {
        id: "2",
        name: "Jean-Michel Personne",
        roleLabel: "Red shirt",
        roleIcon: "mdi-cog",
        admin: false
      }, {
        id: "3",
        name: "Maxence-Louis Charles-Edouard Lancelot Meniolles d'Hautuille de la Bintinaye de Saint Hugues de Montparnasse",
        roleLabel: "User",
        roleIcon: "mdi-account-outline",
        admin: false
      }],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSUserOrganisationTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSUserOrganisationTileUI
        v-for="(userOrganisation, index) in args.values"
        :key="index"
        :name="userOrganisation.name"
        :roleIcon="userOrganisation.roleIcon"
        :roleLabel="userOrganisation.roleLabel"
        :admin="userOrganisation.admin"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const de=["Variations","Imageless"];export{n as Imageless,e as Variations,de as __namedExportsOrder,le as default};
