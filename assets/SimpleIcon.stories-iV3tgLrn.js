import{F as r}from"./FSSimpleTileUI-8WCo5BY2.js";import"./leaflet-src-CVI3lIVZ.js";import"./vue.esm-bundler-Zcuj-zyO.js";import"./FSIconCard-DXVTs4mo.js";import"./FSCard-Bzfi7uVq.js";import"./FSCol-DLyNVOXQ.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-4Qz6Bbpg.js";import"./useColors-ix1ChreS.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DppimMvq.js";import"./FSIcon-CgyPNi2H.js";import"./VIcon-DsLd3bsf.js";import"./color-mm3JSYKM.js";import"./FSImage-BP-XnLOC.js";import"./FSImageUI-DoJ4g_Bl.js";import"./FSLoader-_xEserk_.js";import"./dimensions-BWgpWc0X.js";import"./elevation-BrHPj82J.js";import"./locale-Beavd5eP.js";import"./VImg-DaKoZ_qJ.js";import"./rounded-3VvIKpNW.js";import"./transition-shOmLEJh.js";import"./index-DnJxNQYu.js";import"./imageDetails-BCoWH9MP.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./uuid-DTaye2KM.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";import"./FSSpan-Bb6VK1Ws.js";import"./useSlots-DzOFTavN.js";import"./FSTile-Doy-G9OU.js";import"./FSClickable-BAZBeMCh.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./VProgressCircular-B73DQeX0.js";import"./resizeObserver-BOpsWgva.js";import"./FSCheckbox-CjWE83-y.js";import"./useRules-CvuqAlPS.js";import"./VSelectionControl-u1dDpc9z.js";import"./density-DMrbDfgW.js";import"./proxiedModel-Xz4IZg0a.js";import"./index-CMMTOWvF.js";import"./VLabel-C9T0eyno.js";import"./VInput-DP_atbEr.js";import"./index-D14OnwAh.js";import"./form-ChxmsGl9.js";const pe={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2",icon:"mdi-account",singleSelect:!0},{id:"3",label:"Simple Icon tile with color",bottomColor:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(p,{argTypes:n})=>({components:{FSSimpleTileUI:r},props:Object.keys(n),setup(){return{...p}},template:`
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
