import{F as r}from"./FSSimpleTileUI-EREw6pta.js";import"./vue.esm-bundler-BLBBrD1D.js";import"./FSCard-fA5aX9kp.js";import"./FSCol-OnQTHx6W.js";import"./css-DU1X_fj1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-BZVvIgLd.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./FSIcon-CgTCRlvx.js";import"./VIcon-Cq9uvnQL.js";import"./color-T1BTTgdX.js";import"./useRender-CTGr_J4i.js";import"./tag-kXOxSspb.js";import"./FSImage-DCiPMM8N.js";import"./FSLoader-wJOBxBqI.js";import"./dimensions-DNYoshM5.js";import"./elevation-0FWsrb7Y.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./base-BNnJ_ndD.js";import"./composableFactory-DeG9aq0N.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./VImg-BwDapMIg.js";import"./rounded-Ax8hVtG-.js";import"./transition-DqSOegbJ.js";import"./index-C6izM9Xn.js";import"./FSText-DOaWXjiL.js";import"./useSlots-CKjiHxqT.js";import"./FSTile-DZj0ToBy.js";import"./FSClickable-BcsUSOO8.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./FSCheckbox-DJm00ahm.js";import"./FSSpan-DNHXfhpi.js";import"./useRules-CaBH9gl0.js";import"./VSelectionControl-BO5kGMEg.js";import"./density-Dp1dzyfT.js";import"./index-BeqDwarK.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./index-Co1LeIbZ.js";const Z={title:"Foundation/Shared/Tiles/SimpleIcon",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{values:[{id:"1",label:"Tile 1",code:"code"},{id:"2",label:"Simple Icon tile 2"},{id:"3",label:"Simple Icon tile with color",colors:["#0000FF","#FFFFFF"]}],selected:[!1,!1,!1]}},render:(n,{argTypes:p})=>({components:{FSSimpleTileUI:r},props:Object.keys(p),setup(){return{...n}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSSimpleTileUI
        v-for="(entity, index) in args.values"
        :key="index"
        :label="entity.label"
        :code="entity.code"
        :color="entity.colors"
        v-model="args.selected[index]"
      />
    </div>`})};var i,o,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      values: [{
        id: "1",
        label: "Tile 1",
        code: "code"
      }, {
        id: "2",
        label: "Simple Icon tile 2"
      }, {
        id: "3",
        label: "Simple Icon tile with color",
        colors: ["#0000FF", "#FFFFFF"]
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
        :label="entity.label"
        :code="entity.code"
        :color="entity.colors"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const $=["Variations"];export{e as Variations,$ as __namedExportsOrder,Z as default};
