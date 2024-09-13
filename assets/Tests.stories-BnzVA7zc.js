import e from"./FSIconField-NTMFMBff.js";import{F as a}from"./FSSlideGroup-DCqEyw4i.js";import{F}from"./FSFadeOut-I9nnIcBb.js";import{F as s}from"./FSButton-BVWlNylM.js";import{F as d}from"./FSWindow-BMzav7Sc.js";import{F as S}from"./FSText-8i4Fp1Ld.js";import{F as p,a as l}from"./FSTab-Zq0HAP6y.js";import{_ as c}from"./FSCol-YmDykHL-.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSToggleSet-Y4-ows8F.js";import"./FSWrapGroup-DnBpx7nY.js";import"./uuid-DTaye2KM.js";import"./useSlots-P12pG1X5.js";import"./useColors-B5ivMAr9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D4rXHj3O.js";import"./css-DLfrm0pR.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-DO9fMQeR.js";import"./locale-C-s_GJlL.js";import"./VIcon-BIpY_noq.js";import"./color-BygXFKwQ.js";import"./tag-DB5D_XjQ.js";import"./index-CHbvZ5Sj.js";import"./transition-CNA6wh-m.js";import"./density-CDPzHPmZ.js";import"./proxiedModel-Bq4wip6p.js";import"./form-B61Sg6X-.js";import"./FSTextField-zMIFz9nB.js";import"./FSBaseField-DnC2dzvH.js";import"./FSSpan-CCGpb4KF.js";import"./FSRow-CVY2l52N.js";import"./VSpacer-C4plVoTE.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./VLabel-owjBjdIA.js";import"./loader-pPiux2KM.js";import"./VProgressCircular-Dh9H7lZx.js";import"./anchor-D9N-895C.js";import"./rounded-Dg8mz8II.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D_lBla-s.js";import"./FSIcon-DHDofKUo.js";import"./display-BMkR1-zV.js";import"./group-CBCTR8u6.js";import"./FSClickable-DVS7KdyM.js";import"./FSCard-DAS46KTX.js";import"./VBtn-CC1p3R0h.js";import"./border-njGtMOdT.js";import"./elevation-Ben4zuE4.js";import"./dimensions-DyYT4L19.js";import"./router-D2IrSaAD.js";import"./index-DPxysH4G.js";import"./lazy-CAOrKziU.js";import"./ssrBoot-SGvAq9J5.js";const To={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
