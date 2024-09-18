import e from"./FSIconField-DqH94BHv.js";import{F as a}from"./FSSlideGroup-BysYk75t.js";import{F}from"./FSFadeOut-Cf3XjCz3.js";import{F as s}from"./FSButton-DvVRr-Q9.js";import{F as d}from"./FSWindow-C_IuudQ-.js";import{F as S}from"./FSText-DyldgdXP.js";import{F as p,a as l}from"./FSTab-BEzabTVU.js";import{F as c}from"./FSCol-CtQDyyQv.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSToggleSet-CES2Gcvq.js";import"./FSWrapGroup-WxGi_YEL.js";import"./uuid-DTaye2KM.js";import"./useSlots-P12pG1X5.js";import"./useColors-DlnF7i6T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D4rXHj3O.js";import"./css-BRRCqIav.js";import"./useBreakpoints-B0zHkio6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./FSTextField-D-F2DIF_.js";import"./FSBaseField-D2YBKhIh.js";import"./FSSpan-CCGpb4KF.js";import"./FSRow-B3SJi8FA.js";import"./VSpacer-C4plVoTE.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./VLabel-owjBjdIA.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSIcon-DuyQgQFI.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./FSClickable-D9Ppoc0d.js";import"./FSCard-CjHnVBHV.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./elevation-Ben4zuE4.js";import"./dimensions-DyYT4L19.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";const fo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const bo=["Variations"];export{o as Variations,bo as __namedExportsOrder,fo as default};
