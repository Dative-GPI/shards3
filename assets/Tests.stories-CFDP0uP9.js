import e from"./FSIconField-Cd0hKRwg.js";import{_ as a}from"./FSSlideGroup-CntZC7f2.js";import{_ as F}from"./FSFadeOut-CszUv8uk.js";import{F as s}from"./FSButton-cXGosxtu.js";import{F as d}from"./FSWindow-RglzuROT.js";import{F as S}from"./FSText-4yVUx1mI.js";import{F as p,a as l}from"./FSTab-B9diENcB.js";import{F as c}from"./FSCol-DD5MeAoT.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSToggleSet-92mUnG-8.js";import"./FSWrapGroup-CgUIplkM.js";import"./uuid-DTaye2KM.js";import"./useSlots-C_N_WAus.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./css-C_oz6kYw.js";import"./useBreakpoints-mbnqo5a1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./proxiedModel-KpugNjnZ.js";import"./index-B089V-om.js";import"./color-De-77ojK.js";import"./display-BWzbFTnS.js";import"./VIcon-D6ql3n-m.js";import"./locale-CTwwbPAi.js";import"./resizeObserver-CjMDZ25n.js";import"./VInput-BkciVi2d.js";import"./transition-AZsQzdUZ.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./FSTextField-CIXfVN3n.js";import"./FSBaseField-CfZ7AiUY.js";import"./FSSpan-DwE651wI.js";import"./FSRow-BjeBkMPV.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./VLabel-Dswg7Ov5.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./anchor-C2Y5FAYh.js";import"./rounded-uHrmshEX.js";import"./VDefaultsProvider-CfqLszOw.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6OXlV61.js";import"./FSIcon-DfqW6nqQ.js";import"./FSButtonNextIcon-F5m9he5w.js";import"./FSClickable-B8_y_vmt.js";import"./FSCard-Cocsqd0c.js";import"./VBtn-9DyKx9D6.js";import"./border-DXAdoVnk.js";import"./elevation-BZDXH0CP.js";import"./dimensions-9QoL2_-9.js";import"./router-CIHGWUSM.js";import"./index-Cr304eD2.js";import"./lazy-DuBjUwFb.js";import"./ssrBoot-DD96sY1N.js";import"./vue-router-C4bv40Tb.js";const Wo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const yo=["Variations"];export{o as Variations,yo as __namedExportsOrder,Wo as default};
