import e from"./FSIconField-DShi6Pq9.js";import{F as a}from"./FSSlideGroup-CAnEdTCM.js";import{F}from"./FSFadeOut-DVFTxjCH.js";import{F as s}from"./FSButton-Bvd0naOX.js";import{F as d}from"./FSWindow-IUIF0fSM.js";import{F as S}from"./FSText-ZRfoDIrD.js";import{F as p,a as l}from"./FSTab-BxX50GV_.js";import{_ as c}from"./FSCol-CeBQ3oDD.js";import"./vue.esm-bundler-DR8xMV81.js";import"./FSToggleSet-WVf1v7XO.js";import"./FSWrapGroup-DmnpIXuG.js";import"./uuid-DTaye2KM.js";import"./useSlots-O0e9MAUJ.js";import"./useColors-nvbUnVB9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DvfleoEk.js";import"./css-DYbKqpMF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-xubiTtnp.js";import"./index-CtF1TxK6.js";import"./color-DRqqT5iF.js";import"./display-CuCfKRZW.js";import"./group-C6nVA5p1.js";import"./proxiedModel-CfqC31JC.js";import"./VIcon-CB8o8wL4.js";import"./locale-x-KasAKq.js";import"./VProgressCircular-CQOkkHxu.js";import"./VInput-CHHLrGTr.js";import"./transition-DYmm1B3d.js";import"./density-DXTGgNtk.js";import"./FSTextField-Cu62_PPc.js";import"./FSBaseField-DzPQwNFv.js";import"./FSSpan-RI5Hh5xF.js";import"./FSRow-Dfo2nEmE.js";import"./VSpacer-BxLG4kFi.js";import"./useRules-Dm3K--o-.js";import"./VField-CVKE5aGR.js";import"./VLabel-DZOpgwqd.js";import"./loader-C4nPQ1_b.js";import"./anchor-C7LpDu09.js";import"./rounded-DVRtD5BX.js";import"./VDefaultsProvider-DDpAuHMK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-VkvlNmfl.js";import"./FSIcon-CYA01Pg8.js";import"./FSClickable-Bx8zcCZW.js";import"./FSCard-CU93xE1v.js";import"./VBtn-BDhRXVNU.js";import"./border-BytU_KR8.js";import"./elevation-BS7jUP1v.js";import"./dimensions-C81rpiLV.js";import"./router-I0roKE-i.js";import"./index-Bfb9sPge.js";import"./lazy-B8zEEQrr.js";import"./ssrBoot-D_SIKPEL.js";const go={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
