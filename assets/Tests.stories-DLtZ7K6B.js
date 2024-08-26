import e from"./FSIconField-CcjrYwy5.js";import{F as a}from"./FSSlideGroup-DzQLe6nE.js";import{F}from"./FSFadeOut-DfM6QCr8.js";import{F as s}from"./FSButton-dygcJigB.js";import{F as d}from"./FSWindow-IUIF0fSM.js";import{F as S}from"./FSText-BG5TFIna.js";import{F as p,a as l}from"./FSTab-BwX_Uzkg.js";import{_ as c}from"./FSCol-CeBQ3oDD.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSToggleSet-Cq5k0B3E.js";import"./FSWrapGroup-DcKuNYil.js";import"./uuid-DTaye2KM.js";import"./useSlots-O0e9MAUJ.js";import"./useColors-4gNoc1f6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DvfleoEk.js";import"./css-DYbKqpMF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-xubiTtnp.js";import"./index-CtF1TxK6.js";import"./color-DRqqT5iF.js";import"./display-CuCfKRZW.js";import"./group-C6nVA5p1.js";import"./proxiedModel-CfqC31JC.js";import"./VIcon-CB8o8wL4.js";import"./locale-x-KasAKq.js";import"./VProgressCircular-CQOkkHxu.js";import"./VInput-CHHLrGTr.js";import"./transition-DYmm1B3d.js";import"./density-DXTGgNtk.js";import"./FSTextField-D1knM6ZC.js";import"./FSBaseField-DHYm3Nnq.js";import"./FSSpan-RI5Hh5xF.js";import"./FSRow-Dfo2nEmE.js";import"./VSpacer-BxLG4kFi.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./VLabel-DZOpgwqd.js";import"./loader-C4nPQ1_b.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./FSIcon-Cgoa9X6m.js";import"./FSClickable-CP6bLZUE.js";import"./FSCard-Kv363PpN.js";import"./VBtn-BDhRXVNU.js";import"./border-BytU_KR8.js";import"./elevation-BS7jUP1v.js";import"./dimensions-C81rpiLV.js";import"./router-I0roKE-i.js";import"./index-Bfb9sPge.js";import"./lazy-B8zEEQrr.js";import"./ssrBoot-D_SIKPEL.js";const go={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Two FSWindow </FSText>
        <FSWindow width="500px" :modelValue="args.tab1">
            <FSIconField />
        </FSWindow>
        <FSWindow width="500px" :modelValue="args.tab2">
            <template v-if="true">
              <FSCol>
                  <FSIconField />
              </FSCol>
            </template>
        </FSWindow>
      </div>
    `})};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab,
      FSText,
      FSWindow,
      FSCol,
      FSFadeOut,
      FSSlideGroup,
      FSButton,
      FSIconField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Two FSWindow </FSText>
        <FSWindow width="500px" :modelValue="args.tab1">
            <FSIconField />
        </FSWindow>
        <FSWindow width="500px" :modelValue="args.tab2">
            <template v-if="true">
              <FSCol>
                  <FSIconField />
              </FSCol>
            </template>
        </FSWindow>
      </div>
    \`
  })
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const To=["Variations"];export{o as Variations,To as __namedExportsOrder,go as default};
