import e from"./FSIconField-CQjGa-D_.js";import{F as a}from"./FSSlideGroup-FmBZXb1C.js";import{F}from"./FSFadeOut-D8lX1YMU.js";import{F as s}from"./FSButton-jJkg4qCi.js";import{F as d}from"./FSWindow-Dmw4ayI4.js";import{F as S}from"./FSText-CwwFvnOv.js";import{F as p,a as l}from"./FSTab-CQRjoCG_.js";import{F as c}from"./FSCol-BEvj3we4.js";import"./vue.esm-bundler-BwDfg4wG.js";import"./FSToggleSet-nzyxIkxs.js";import"./FSWrapGroup-CzncWNtJ.js";import"./uuid-DTaye2KM.js";import"./useSlots-2JqallzA.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./css-DTUiF03J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-Bb_DU4hJ.js";import"./locale-DTc71_bq.js";import"./VIcon-D-JUvW-a.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./index-h4Pvk0JI.js";import"./transition-DbaVUv7M.js";import"./density-CY8ZwxUy.js";import"./proxiedModel-okNizC5Y.js";import"./form-CH3j37ax.js";import"./FSTextField-C_L-5gHA.js";import"./FSBaseField-3b1naUZS.js";import"./FSSpan-H3zJ0Cfa.js";import"./FSRow-k5pgBhR1.js";import"./VSpacer-C5S3LEb3.js";import"./useRules-CJCAsX67.js";import"./VField-C9nLiyrW.js";import"./VLabel-BAbVzo-k.js";import"./loader-ecE02KGk.js";import"./VProgressCircular-CmpAWY4m.js";import"./anchor-0YuAsO7w.js";import"./rounded-NuUWeCiM.js";import"./VDefaultsProvider-_csoeOf7.js";import"./forwardRefs-DWGaNmQL.js";import"./index-O1RQoaVh.js";import"./FSIcon-ChaYv6Le.js";import"./display-DC3KmzVA.js";import"./group-Co3yQlsH.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./VBtn-CAkWF00h.js";import"./border-CJvl-6Or.js";import"./elevation-Ba-uT6Vw.js";import"./dimensions-yOZi2HlQ.js";import"./router-CeBnHAqN.js";import"./index-BBm8PRb1.js";import"./lazy-MJJzC26k.js";import"./ssrBoot-D00LCOWZ.js";const To={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
