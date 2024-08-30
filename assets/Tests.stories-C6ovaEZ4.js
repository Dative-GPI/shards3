import e from"./FSIconField-D5CVe4dZ.js";import{F as a}from"./FSSlideGroup-wzQo7jGf.js";import{F}from"./FSFadeOut-uPE_tDk4.js";import{F as s}from"./FSButton-BsHdwUXb.js";import{F as d}from"./FSWindow-C__ADisX.js";import{F as S}from"./FSText-Bql3IFAZ.js";import{F as p,a as l}from"./FSTab-Ce0QvSq0.js";import{_ as c}from"./FSCol-B2fYQH2g.js";import"./vue.esm-bundler-BSwA4uJo.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./uuid-DTaye2KM.js";import"./useSlots-BFQFTsAj.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./css-DuQjrBfn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-QVRW4ijF.js";import"./locale-CpxwvVE1.js";import"./VIcon-5UD9vI9m.js";import"./color-D9V7QeIP.js";import"./tag-VYeYJ1FC.js";import"./index-C3j_FW12.js";import"./transition-_APBsTwD.js";import"./density-DkgHqMu0.js";import"./proxiedModel-DL-L2p1V.js";import"./form-DP5gBA00.js";import"./FSTextField-CBBV8faX.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./FSRow-C55kyKDN.js";import"./VSpacer-Bggt-xuP.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./VLabel-BifS6p-d.js";import"./loader-DjCr0vPF.js";import"./VProgressCircular-Dac4kH3U.js";import"./anchor-CkzTvcVP.js";import"./rounded-CO2AQG9_.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BhqZCjBr.js";import"./FSIcon-BnX9YboA.js";import"./display-CjnjtP-8.js";import"./group-CrHjrh7w.js";import"./FSClickable-DxIbWXqH.js";import"./FSCard-Dku7tZ0W.js";import"./VBtn-CIMHOL7K.js";import"./border-D-bqjaHb.js";import"./elevation-CjdYMzTr.js";import"./dimensions-BjZLW5mo.js";import"./router-Cl1v_ijq.js";import"./index-YRxtzmsB.js";import"./lazy-9JS-XFcA.js";import"./ssrBoot-rqOOPvOG.js";const To={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const fo=["Variations"];export{o as Variations,fo as __namedExportsOrder,To as default};
