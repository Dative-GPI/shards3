import e from"./FSIconField-BfjAxG7Y.js";import{F as a}from"./FSSlideGroup-DlNGN2Nb.js";import{F}from"./FSFadeOut-CNI_FQpM.js";import{F as s}from"./FSButton-DS0wrBKk.js";import{F as d}from"./FSWindow-BQgkDhQ2.js";import{F as S}from"./FSText-Der-WemT.js";import{F as p,a as l}from"./FSTab-DVEdVykH.js";import{F as c}from"./FSCol-TPWSQPHs.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./FSToggleSet-CzRpQEWO.js";import"./FSWrapGroup-D3vzPBUf.js";import"./uuid-DTaye2KM.js";import"./useSlots-DzSo5JdB.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./css-BkQhD285.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./index-DOC0sH28.js";import"./color-BKGJvBEr.js";import"./display-CRYv_UDL.js";import"./VIcon-CzaRZDPI.js";import"./tag-DT601Ssr.js";import"./locale-Dn84bpGK.js";import"./resizeObserver-C4lJhwTD.js";import"./VInput-CYsTqNhA.js";import"./transition-C6adUwH7.js";import"./density-BPFRY_Tg.js";import"./form-B7NlTRtd.js";import"./FSTextField-DSbw_bnX.js";import"./FSBaseField-CruMavxg.js";import"./FSSpan-D1pceTli.js";import"./FSRow-CpogXLW8.js";import"./VSpacer-CrqXaTz-.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./VLabel-jMK3Bs2x.js";import"./loader-CiSVFYJ7.js";import"./VProgressCircular-D-6SFgJ3.js";import"./anchor-Bj7ImPZT.js";import"./rounded-Cely44IK.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./FSIcon-BCbpBdVG.js";import"./FSClickable-DnsFhA6_.js";import"./FSCard-C9IdgJNY.js";import"./VBtn-el1a73sG.js";import"./border-DUGfqaHN.js";import"./elevation-kEG7tFkj.js";import"./dimensions-DBrW1AO_.js";import"./router-Cjjv2JN-.js";import"./index-CN4E1Twd.js";import"./lazy-Dq_5BjJr.js";import"./ssrBoot-Ddid0i9S.js";const bo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const Wo=["Variations"];export{o as Variations,Wo as __namedExportsOrder,bo as default};
