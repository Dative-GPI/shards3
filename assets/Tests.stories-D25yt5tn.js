import e from"./FSIconField-D7m_qF65.js";import{_ as a}from"./FSSlideGroup-ee8qfy-K.js";import{_ as F}from"./FSFadeOut-DmK3zGT8.js";import{F as s}from"./FSButton-C_Cm7MkX.js";import{F as d}from"./FSWindow-Bu-KU5xD.js";import{F as S}from"./FSText-WawUBmHY.js";import{F as p,a as l}from"./FSTab-DhrBrGuz.js";import{F as c}from"./FSCol-CYWCfIBP.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSToggleSet-Boww2xu7.js";import"./FSWrapGroup-WVEwtX4p.js";import"./uuid-DTaye2KM.js";import"./useSlots-BnylMYIF.js";import"./useColors-B16sP4OM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BKYtCmay.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-DLb7xqc9.js";import"./group-C1BQtzRQ.js";import"./proxiedModel-z3p0-M-h.js";import"./index-CiXeh9xR.js";import"./color-DBJfw4cY.js";import"./display-CKqU0R6P.js";import"./VIcon-BCDp5TRU.js";import"./locale-BJQwrXJ7.js";import"./resizeObserver-Bmwp6ruU.js";import"./VInput-BwoMaTW2.js";import"./transition-B83BVatf.js";import"./density-CJqFEH6j.js";import"./form-D8F-RrsG.js";import"./FSTextField-qQes8uOA.js";import"./FSBaseField-Dpf8Uwfy.js";import"./FSSpan-DGSHCe_l.js";import"./FSRow-CFFgZ74C.js";import"./VSpacer-y-n940VK.js";import"./useRules-D0gcbU57.js";import"./VField-2PlKy0GK.js";import"./VLabel-DFQa5Qos.js";import"./loader-Cs6S2SUJ.js";import"./VProgressCircular-cHoQoKlr.js";import"./anchor-Cu9IQeug.js";import"./rounded-DM_o2hWD.js";import"./VDefaultsProvider-S-S54iS4.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C31q_73Z.js";import"./FSIcon-D2mo_-bk.js";import"./FSButtonNextIcon-DPw1w2WV.js";import"./FSClickable-BQ3H9eJY.js";import"./FSCard-DwYAEOV7.js";import"./VBtn-CCHUxMdD.js";import"./border-mcG4sAce.js";import"./elevation-RaRrQxn9.js";import"./dimensions-C-vtuVn7.js";import"./router-DHMAfVHW.js";import"./index-CZlC8CZb.js";import"./lazy-k0fVkBtC.js";import"./ssrBoot-BTOmRKcz.js";import"./vue-router-Bp8FxDoy.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
