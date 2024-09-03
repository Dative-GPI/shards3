import e from"./FSIconField-COK8t1SK.js";import{F as a}from"./FSSlideGroup-Cw0TLTWz.js";import{F}from"./FSFadeOut-PkHtV3O5.js";import{F as s}from"./FSButton-CsvAshDj.js";import{F as d}from"./FSWindow-Dt_ZDxfb.js";import{F as S}from"./FSText-DO8RG5fr.js";import{F as p,a as l}from"./FSTab-Bex1l0Bm.js";import{_ as c}from"./FSCol-DLJAvXXo.js";import"./vue.esm-bundler-Cq4W5tyU.js";import"./FSToggleSet-DUUGlQED.js";import"./FSWrapGroup-B_OxD2yR.js";import"./uuid-DTaye2KM.js";import"./useSlots-DT61BqFu.js";import"./useColors-BeCeu6HX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C1riLSun.js";import"./css-DEg_ftav.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-B4B8eXxy.js";import"./locale-HbAtAWzw.js";import"./VIcon-DEItKADI.js";import"./color-DRHDjI8D.js";import"./tag-CMGfbRyB.js";import"./index-CS87Qvuo.js";import"./transition-BzbLScdo.js";import"./density-qG_glApz.js";import"./proxiedModel-GwPoz8hG.js";import"./form-BLrazfEI.js";import"./FSTextField-CPBF15FZ.js";import"./FSBaseField-95ZFXhTZ.js";import"./FSSpan-D_j1_q9W.js";import"./FSRow-unE_3RO6.js";import"./VSpacer-CeIMSlXt.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./VLabel-m2J9LCHM.js";import"./loader-BrBoJqhy.js";import"./VProgressCircular-D_7DfGyD.js";import"./anchor-BydgbQy2.js";import"./rounded-CT5UQ7DA.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BFUNLZ7G.js";import"./FSIcon-BhYLJFwS.js";import"./display-CuwymjaA.js";import"./group-Daa3BzEI.js";import"./FSClickable-CT4CAD0O.js";import"./FSCard-B0a7crHg.js";import"./VBtn-BzEyEYeh.js";import"./border-9F-9anIp.js";import"./elevation-D7qOrqBH.js";import"./dimensions-DmQ2LvlH.js";import"./router-DTnNLfUf.js";import"./index-CrjNNQA3.js";import"./lazy-BqN4G6w1.js";import"./ssrBoot-B-1_IeCP.js";const To={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
