import e from"./FSIconField-DHKJ8EE-.js";import{_ as a}from"./FSSlideGroup-BR84Lg3c.js";import{_ as F}from"./FSFadeOut-BkUNDWQN.js";import{F as s}from"./FSButton-BDSx2V0J.js";import{F as d}from"./FSWindow-8pk6RNR3.js";import{F as S}from"./FSText-BhZd10FY.js";import{F as p,a as l}from"./FSTab-hiHGC3Eq.js";import{F as c}from"./FSCol-D35grUmj.js";import"./vue.esm-bundler-0BaZj8Cy.js";import"./FSToggleSet-CpTj-XdR.js";import"./FSWrapGroup-C7ZB1dX6.js";import"./uuid-DTaye2KM.js";import"./useSlots-16D6Zf08.js";import"./useColors-SBQj5l4a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DvDKaioG.js";import"./css-Bhvr2onI.js";import"./useBreakpoints-2HHUcVIh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-g9Eu1KOy.js";import"./group-BV8nssOR.js";import"./proxiedModel-gKZvE0id.js";import"./index-A-BnjIhl.js";import"./color-v9Utm2wX.js";import"./display-w-mPL_cH.js";import"./locale-CUGdfosF.js";import"./VIcon-_OtdNVUv.js";import"./resizeObserver-EZycJKNh.js";import"./VInput-Dz3e_hzB.js";import"./transition-CCJeTa-A.js";import"./density-P84-FGcF.js";import"./dimensions-BEVfeJxO.js";import"./form-BxXGwYee.js";import"./FSTextField-B8oyUUoT.js";import"./FSBaseField-BF3lF9xX.js";import"./FSSpan-BhEzkP-a.js";import"./FSRow-CAJM3FZ0.js";import"./useRules-B-2YsFdr.js";import"./VField-fH-IYcLo.js";import"./VLabel-B8m3kRrJ.js";import"./loader-BfrQsM5c.js";import"./VProgressCircular-NnNXhC5D.js";import"./anchor-B7sx4vRv.js";import"./rounded-BByw44D4.js";import"./VDefaultsProvider-DlfGiSFQ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BSIzjytc.js";import"./FSIcon-BwW5Hq8i.js";import"./FSButtonNextIcon-Cy8Jn5Tc.js";import"./FSRouterLink-T7XwQQbH.js";import"./vue-router-Rifkco1p.js";import"./FSClickable-CbOr5F2S.js";import"./FSCard-Dlw97Dqr.js";import"./VBtn-C1BhuyNn.js";import"./border-B7ttCXY5.js";import"./elevation-C2OyWM5g.js";import"./router-DTj21Dkp.js";import"./index-C_NEyI9V.js";import"./scopeId-DtuQcaKf.js";import"./ssrBoot-YHUJVgIR.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const _o=["Variations"];export{o as Variations,_o as __namedExportsOrder,yo as default};
