import e from"./FSIconField-Bd9KvcoT.js";import{F as a}from"./FSSlideGroup-Bp33T7bk.js";import{F}from"./FSFadeOut-DsjIuoaA.js";import{F as s}from"./FSButton-Cu9jUZ57.js";import{F as d}from"./FSWindow-C9BMKErq.js";import{F as S}from"./FSText-C3t035zl.js";import{F as p,a as l}from"./FSTab-BdZjQlRu.js";import{_ as c}from"./FSCol-B7HQy3FB.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSToggleSet-CXdjM80i.js";import"./FSWrapGroup-Bdea94sJ.js";import"./uuid-DTaye2KM.js";import"./useSlots-DN9F4SV8.js";import"./useColors-Hqqi3yfr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-B5x8xkbY.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-DIpxwRsS.js";import"./index-CvDsTioR.js";import"./color-DvJT0EEa.js";import"./display-B8HpKdBf.js";import"./group-szJg_hPo.js";import"./proxiedModel-slW9zgh3.js";import"./VIcon-Dc-dFojD.js";import"./locale-BC9z6YbT.js";import"./VProgressCircular-C-U4HXtE.js";import"./VInput-ClkK-yNd.js";import"./transition-yl3lVN6J.js";import"./density-CFGlRMM_.js";import"./FSTextField-p1CHyF0D.js";import"./FSBaseField-LXmJVZ7c.js";import"./FSSpan-CpNfN-10.js";import"./FSRow-DoCXWKDP.js";import"./VSpacer-BjECYW1K.js";import"./useRules-DS9e5-1Q.js";import"./VField-CAe7-ioi.js";import"./VLabel-D_bmQQv3.js";import"./loader-DENHXnzB.js";import"./anchor-C6LV5e1c.js";import"./rounded-YB6K8mOp.js";import"./VDefaultsProvider-4deG1Ppv.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DN-QUi1L.js";import"./FSIcon-BpYn3KOO.js";import"./FSClickable-CUFbKU14.js";import"./FSCard-Dlaftmmn.js";import"./VBtn-x8pr1gDk.js";import"./border-Be_f35HL.js";import"./elevation-BTkUCD39.js";import"./dimensions-Dnxg3zhh.js";import"./router-DFGAHh1d.js";import"./index-9jSorrJj.js";import"./lazy-Cw6rrZWC.js";import"./ssrBoot-D90vJCps.js";const go={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const To=["Variations"];export{o as Variations,To as __namedExportsOrder,go as default};
