import e from"./FSIconField-0AQsrDCK.js";import{_ as a}from"./FSSlideGroup-BC2CNv0p.js";import{_ as F}from"./FSFadeOut-K3Ty9hFX.js";import{F as s}from"./FSButton-v1WOpc1k.js";import{F as d}from"./FSWindow-cNx0VV78.js";import{F as S}from"./FSText-BwKgSTLP.js";import{F as p,a as l}from"./FSTab-DqsMNH5x.js";import{F as c}from"./FSCol-BvqytbKT.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./uuid-DTaye2KM.js";import"./useSlots-C_N_WAus.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./display-BWzbFTnS.js";import"./VIcon-D6ql3n-m.js";import"./locale-CTwwbPAi.js";import"./resizeObserver-CjMDZ25n.js";import"./VInput-BkciVi2d.js";import"./transition-AZsQzdUZ.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./FSTextField-CUJPYjwS.js";import"./FSBaseField-CpNJbDpF.js";import"./FSSpan-Di50moR2.js";import"./FSRow-CbEgVN08.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./VLabel-Dswg7Ov5.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSIcon-uIr9VdFq.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DbvAho3u.js";import"./FSCard-DL4SLpmS.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./dimensions-9QoL2_-9.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
