import e from"./FSIconField-DsY6gHMc.js";import{F as a}from"./FSSlideGroup-PC9JFQCq.js";import{F}from"./FSFadeOut-DZ611XP-.js";import{F as s}from"./FSButton-DC-WKUnK.js";import{F as d}from"./FSWindow-SAzokL0I.js";import{F as S}from"./FSText-DQYBciAj.js";import{F as p,a as l}from"./FSTab-Csj4CvmV.js";import{_ as c}from"./FSCol-BA_LQqMv.js";import"./vue.esm-bundler--l9E1zCM.js";import"./FSToggleSet-BtiTla3P.js";import"./FSWrapGroup-CPrCAtj5.js";import"./uuid-DTaye2KM.js";import"./useSlots-sbMHjG0F.js";import"./useColors-Na5M-jYy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-uJWLcFzd.js";import"./css-CqyMbT8T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-exXSDqX0.js";import"./locale-DRqPrS0N.js";import"./VIcon-CRzxwZ_P.js";import"./color-DkN3uAGq.js";import"./index-U_F843Id.js";import"./transition-CYrBIr8o.js";import"./density-BES7uE0q.js";import"./proxiedModel-DBJRU-Dx.js";import"./form-26vhu4DQ.js";import"./FSTextField-DT4mycsE.js";import"./FSBaseField-DyRfpoCH.js";import"./FSSpan-Drxl5cqQ.js";import"./FSRow-DW_Nd3uI.js";import"./VSpacer-CY3ZXRlU.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./VLabel-CtWliwLG.js";import"./loader-BeDPJNvc.js";import"./VProgressCircular-DiflYTWZ.js";import"./anchor-CJDpEDtq.js";import"./rounded-B2xBfeOT.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CDY7nOpr.js";import"./FSIcon-CA5AHnUB.js";import"./display-8UJ6HxQ1.js";import"./group-DYO-GdsM.js";import"./FSClickable-CWlCNUE_.js";import"./FSCard-BmtixItE.js";import"./VBtn-Drw7FOOP.js";import"./border-CWknNQjA.js";import"./elevation-Cf1uc8UZ.js";import"./dimensions-BKNjgbGk.js";import"./router-B0OmHOdA.js";import"./index-mEzhRiE5.js";import"./lazy-Bq-CkOF6.js";import"./ssrBoot-De1byr4N.js";const go={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
