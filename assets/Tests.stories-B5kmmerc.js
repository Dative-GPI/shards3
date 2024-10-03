import e from"./FSIconField-DSAgI5XK.js";import{_ as a}from"./FSSlideGroup-C1Kipqmu.js";import{_ as F}from"./FSFadeOut-Bx7JPxYi.js";import{F as s}from"./FSButton-D64P3bCo.js";import{F as d}from"./FSWindow-CI0pCdxo.js";import{F as S}from"./FSText-BmTpjyov.js";import{F as p,a as l}from"./FSTab-dzmD4dlF.js";import{F as c}from"./FSCol-Co9r7Klj.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./FSToggleSet-BeXfNSJj.js";import"./FSWrapGroup-BLPJiM21.js";import"./uuid-DTaye2KM.js";import"./useSlots-BHms3Yb6.js";import"./useColors-BoRVwO74.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BEfrBPRQ.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./proxiedModel-DAUSUEYq.js";import"./index-D0m5TbR6.js";import"./color-DpQhyQC8.js";import"./display-B-O23xq9.js";import"./VIcon-C65wMs2G.js";import"./tag-ByYBjpGI.js";import"./locale-DgxPCyxi.js";import"./resizeObserver-CogQzEnD.js";import"./VInput-BdNbghoa.js";import"./transition-DZ-8zzo1.js";import"./density-CY0EC5jE.js";import"./form-lyoENh9E.js";import"./FSTextField-BUbFMs1s.js";import"./FSBaseField-DRP7kP50.js";import"./FSSpan-3STIP-79.js";import"./FSRow-D546kqFt.js";import"./VSpacer-DaRxrr8q.js";import"./useRules-o706rtr1.js";import"./VField-Cs2kmeSz.js";import"./VLabel-DuhHDssR.js";import"./loader-BoG0AaGl.js";import"./VProgressCircular-BpEvERgl.js";import"./anchor-CfU9RSql.js";import"./rounded-Cd5tqTfa.js";import"./VDefaultsProvider-CZhGM_PV.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CQjBi2ms.js";import"./FSIcon-BHUJU4iP.js";import"./FSButtonNextIcon-DoEp6YQk.js";import"./FSClickable-CusxsKEA.js";import"./FSCard-BOmUSPlM.js";import"./VBtn-Cg1UOEjx.js";import"./border-yULewhCr.js";import"./elevation-8SXivnh1.js";import"./dimensions-DBaG2oVF.js";import"./router-C4cLtMAM.js";import"./index-Dx6GtDlm.js";import"./lazy-DlJBGmKZ.js";import"./ssrBoot-hTBI6W7o.js";import"./vue-router-DwCyYn3Y.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
