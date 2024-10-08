import e from"./FSIconField-CTZGskoW.js";import{_ as a}from"./FSSlideGroup-CDRvV-qZ.js";import{_ as F}from"./FSFadeOut-DxMiSoxL.js";import{F as s}from"./FSButton-C0E8ILJw.js";import{F as d}from"./FSWindow-u9yijpRq.js";import{F as S}from"./FSText-BprvNhQU.js";import{F as p,a as l}from"./FSTab-EYg6JeqG.js";import{F as c}from"./FSCol-CvoATp5Q.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSToggleSet-XllH3ja9.js";import"./FSWrapGroup-Cj-lYBpD.js";import"./uuid-DTaye2KM.js";import"./useSlots-zwOl0abH.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./css-BWDYXGFo.js";import"./useBreakpoints-INFVV7da.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./index-D2mfwXxT.js";import"./color-B0htL_ZM.js";import"./display-4460MzAg.js";import"./VIcon-Bo7R9vIQ.js";import"./locale-BGMMnFfJ.js";import"./resizeObserver-CTZzan_-.js";import"./VInput-Clj2quuL.js";import"./transition-BvKGRC-_.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./FSTextField-JGjjGRZ0.js";import"./FSBaseField-D0m8YJR6.js";import"./FSSpan-Bnbdrku6.js";import"./FSRow-BnsweOMX.js";import"./VSpacer-DLFo12A6.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./VLabel-hsX9xD9s.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSIcon-kERq0rd3.js";import"./FSButtonNextIcon-BAVwN0SI.js";import"./FSClickable-DTqk3LMl.js";import"./FSCard-BOEac87c.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./elevation-DH_sKWqU.js";import"./dimensions-Cku-Ba4r.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./lazy-Bq8C33UW.js";import"./ssrBoot-QID7OAaG.js";import"./vue-router-DThl0PGU.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
