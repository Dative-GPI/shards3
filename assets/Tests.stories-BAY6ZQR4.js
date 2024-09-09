import e from"./FSIconField-BHcgDrAX.js";import{F as a}from"./FSSlideGroup-DyM4bozv.js";import{F}from"./FSFadeOut-CORcN4YC.js";import{F as s}from"./FSButton-BxokHo9i.js";import{F as d}from"./FSWindow-BXqAPvoy.js";import{F as S}from"./FSText-CWxdqVl0.js";import{F as p,a as l}from"./FSTab-fsSH-eLz.js";import{_ as c}from"./FSCol-Bk577joi.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSToggleSet-CD-Kwtma.js";import"./FSWrapGroup-B5xxx5Ka.js";import"./uuid-DTaye2KM.js";import"./useSlots-DXmhvOIb.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./css-CbCR1nbl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-CifUC8kS.js";import"./locale-CMOn_BOp.js";import"./VIcon-Dc5M3VhK.js";import"./color-Dk23S21P.js";import"./tag-BDy8Psij.js";import"./index-7QBgy7JM.js";import"./transition-Cs7QtK7U.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./form-BN2rR47-.js";import"./FSTextField-BHgcmBCX.js";import"./FSBaseField-Uq_chVlu.js";import"./FSSpan-etgUZXmX.js";import"./FSRow-BuYwVvwM.js";import"./VSpacer-BJ2TWwuy.js";import"./useRules-DpnTqc7T.js";import"./VField-C1LOclAH.js";import"./VLabel-CtKTiIK0.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./rounded-B-50KYhN.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DQeMThUY.js";import"./FSIcon-CNrZYw3j.js";import"./display-B4Z--0w1.js";import"./group-CT1H1YXM.js";import"./FSClickable-DTGM1ZCA.js";import"./FSCard-BxEZp4pO.js";import"./VBtn-8V3HVfv8.js";import"./border-BD8WTLKh.js";import"./elevation-DH7kyzD7.js";import"./dimensions-CBrtQk_X.js";import"./router-DPbzaFf1.js";import"./index-BN7Lbnw3.js";import"./lazy-Ceu0wY4v.js";import"./ssrBoot-D42UTWSS.js";const To={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
