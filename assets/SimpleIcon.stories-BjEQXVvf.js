import{F as r}from"./FSSimpleTileUI-DHeC-qUD.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSIconCard-Duraa20s.js";import"./FSCard-BZyb3dNk.js";import"./FSCol-CVj0zcU5.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CYD73_tT.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./FSIcon-C0akNC9K.js";import"./VIcon-DBlUULm8.js";import"./color-D4nM6Ihv.js";import"./FSImage-BwiE9qIQ.js";import"./FSImageUI-DPxZyIow.js";import"./FSLoader-BdvsvlI6.js";import"./dimensions-D-jSeqs8.js";import"./elevation-C84Wb_jC.js";import"./locale-R8GaLlvb.js";import"./VImg-vN6S5DJZ.js";import"./rounded-CG6jOZvY.js";import"./transition-DtcXiLpW.js";import"./index-BuamrmjQ.js";import"./imageDetails-C5EQaPjz.js";import"./base-CmdGny12.js";import"./composableFactory-EyPZGUD9.js";import"./serviceFactory-DaitGIKt.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Bz9lL6G2.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSTile-Bl0RN2m-.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./VProgressCircular-DfVaP_TZ.js";import"./resizeObserver-D4qCRTFx.js";import"./FSCheckbox-BdK031Hz.js";import"./useRules-BmSxRe3B.js";import"./VSelectionControl-BGnnbZZk.js";import"./density-CRkSANTr.js";import"./proxiedModel-BmbZrdih.js";import"./index-CZbNBjVV.js";import"./VLabel-D_hiLcnP.js";import"./VInput-11LmaO3P.js";import"./index-D1hHR51g.js";import"./form-thVqu4eJ.js";const pe={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple Icon tile with color",bottomColor:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(p,{argTypes:n})=>({components:{FSSimpleTileUI:r},props:Object.keys(n),setup(){return{...p}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>`})};var i,t,o;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        code: "code"
      }, {
        id: "2",
        label: "Simple Icon tile 2",
        icon: "mdi-account",
        singleSelect: true
      }, {
        id: "3",
        label: "Simple Icon tile with color",
        bottomColor: ["#0000FF", "#FFFFFF"]
      }],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSimpleTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        v-model="args.selected[index]"
        v-bind="entity"
      />
    </div>\`
  })
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const ne=["Variations"];export{e as Variations,ne as __namedExportsOrder,pe as default};
