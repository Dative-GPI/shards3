import e from"./FSIconField-DFKgfTuS.js";import{_ as a}from"./FSSlideGroup-Cseplt4t.js";import{_ as F}from"./FSFadeOut-D40FnrcD.js";import{F as s}from"./FSButton-D4qgd2ja.js";import{F as d}from"./FSWindow-CI0pCdxo.js";import{F as S}from"./FSText-CETLcZv7.js";import{F as p,a as l}from"./FSTab-DEbG6-l4.js";import{F as c}from"./FSCol-Co9r7Klj.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSToggleSet-B3_GSV0X.js";import"./FSWrapGroup-BvLmYzz8.js";import"./uuid-DTaye2KM.js";import"./useSlots-BHms3Yb6.js";import"./useColors-CVdO3CcM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BEfrBPRQ.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./proxiedModel-DAUSUEYq.js";import"./index-D0m5TbR6.js";import"./color-DpQhyQC8.js";import"./display-B-O23xq9.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./locale-DgxPCyxi.js";import"./resizeObserver-CogQzEnD.js";import"./VInput-BdNbghoa.js";import"./transition-DZ-8zzo1.js";import"./density-CY0EC5jE.js";import"./form-lyoENh9E.js";import"./FSTextField-DxJVxYys.js";import"./FSBaseField-lEL5efap.js";import"./FSSpan-3STIP-79.js";import"./FSRow-D546kqFt.js";import"./VSpacer-DaRxrr8q.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./VLabel-DuhHDssR.js";import"./loader-BoG0AaGl.js";import"./VProgressCircular-BpEvERgl.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./FSIcon-DKHuRfPI.js";import"./FSButtonNextIcon-BfAmq6H5.js";import"./FSClickable-xECbCdT3.js";import"./FSCard-uGx4g-q0.js";import"./VBtn-Cg1UOEjx.js";import"./border-yULewhCr.js";import"./elevation-8SXivnh1.js";import"./dimensions-DBaG2oVF.js";import"./router-C4cLtMAM.js";import"./index-Dx6GtDlm.js";import"./lazy-DlJBGmKZ.js";import"./ssrBoot-hTBI6W7o.js";import"./vue-router-DwCyYn3Y.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
