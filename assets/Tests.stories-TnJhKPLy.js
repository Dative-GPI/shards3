import m from"./FSIconField-D5u3VSZ2.js";import{F as a}from"./FSSlideGroup-B6I8kdKO.js";import{F}from"./FSFadeOut-CJxs5U7i.js";import{F as s}from"./FSButton-CSLtAyqZ.js";import{F as d}from"./FSWindow-BiROX96o.js";import{F as S}from"./FSText-C1354nJ4.js";import{F as p,a as l}from"./FSTab-B5HJ-z00.js";import{_ as c}from"./FSCol-DXkP6ARl.js";import"./vue.esm-bundler-B8zP9crO.js";import"./FSToggleSet-BlitZcd6.js";import"./FSWrapGroup-iC8XkZDM.js";import"./uuid-DTaye2KM.js";import"./useSlots-D_RceZ7l.js";import"./useColors-CHFZqh9D.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DtZVHDBt.js";import"./css-B1GBcH8c.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-D_C8Fpgx.js";import"./locale-FYv4GhYY.js";import"./VIcon-FsSVL6vQ.js";import"./color-DErt19fL.js";import"./index-C_7y45B_.js";import"./transition-CsS1sKoI.js";import"./density-DkfqnNyD.js";import"./proxiedModel-odqKlXbh.js";import"./FSTextField-RqWidZvM.js";import"./FSBaseField-NTkLVYiV.js";import"./FSSpan-CVrAqAZB.js";import"./FSRow-D-NDNvrc.js";import"./VSpacer-qnIi_Uu8.js";import"./useRules-8tDFqsxq.js";import"./VField-DIx0x5Km.js";import"./VLabel-nohB6Jca.js";import"./loader-B8FgLuVw.js";import"./VProgressCircular-DxDQ8azE.js";import"./anchor-OrAzIpfB.js";import"./rounded-Bso5Gdmg.js";import"./VDefaultsProvider-NbOoODyK.js";import"./forwardRefs-DWGaNmQL.js";import"./index-vockUB0G.js";import"./FSIcon-DoasTXhc.js";import"./display-DU3NkqOC.js";import"./group-C3Zad-0v.js";import"./FSClickable-CRLy4U08.js";import"./FSCard-BQ4UALgc.js";import"./VBtn-CeVXW7Ts.js";import"./border-BWgmXatz.js";import"./elevation-B_HXnKlm.js";import"./dimensions-DJJFaY_J.js";import"./router-BFpFBb4L.js";import"./index-D-9FNlZD.js";import"./lazy-7Hvmw8pl.js";import"./ssrBoot-DcIjCPDT.js";const xo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:e})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:m},props:Object.keys(e),setup(){return{...n}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const go=["Variations"];export{o as Variations,go as __namedExportsOrder,xo as default};
