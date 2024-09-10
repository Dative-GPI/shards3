import e from"./FSIconField-CKre-eOm.js";import{F as a}from"./FSSlideGroup-DIxTxi2r.js";import{F}from"./FSFadeOut-CB131b1X.js";import{F as s}from"./FSButton-BTMhVVG_.js";import{F as d}from"./FSWindow-Ctz2OUFZ.js";import{F as S}from"./FSText-DhsiUbil.js";import{F as p,a as l}from"./FSTab-UFoPeMaW.js";import{_ as c}from"./FSCol-Bk577joi.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./FSToggleSet-CIDzaDwe.js";import"./FSWrapGroup-DqR9bQla.js";import"./uuid-DTaye2KM.js";import"./useSlots-DXmhvOIb.js";import"./useColors-C8ZtkfWa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./css-CbCR1nbl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VInput-Dln06fOF.js";import"./locale-CMOn_BOp.js";import"./VIcon-DptP6m9n.js";import"./color-CxiNukW_.js";import"./tag-DxanhlL3.js";import"./index-joExpvzU.js";import"./transition-CQDsmRPd.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./form-CgybbRT3.js";import"./FSTextField-Mn4Vq1hb.js";import"./FSBaseField-DEWTBdWD.js";import"./FSSpan-etgUZXmX.js";import"./FSRow-BuYwVvwM.js";import"./VSpacer-YT0o3rZT.js";import"./useRules-DpnTqc7T.js";import"./VField-DaMwaaXY.js";import"./VLabel-BPqk0hPA.js";import"./loader-CbF0edCX.js";import"./VProgressCircular-DnrgPZB3.js";import"./anchor-DHDhudvL.js";import"./rounded-BWAMdTmW.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-jvVque46.js";import"./FSIcon-DYxpTLuT.js";import"./display-Cx0CWWL8.js";import"./group-DgCbl5w-.js";import"./FSClickable-9Zbg77oy.js";import"./FSCard--Cna8vUC.js";import"./VBtn-CJflX_3O.js";import"./border-CgF0busY.js";import"./elevation-BH8AnXAq.js";import"./dimensions-CzmId2tp.js";import"./router-CbAEScZe.js";import"./index-DjMs4W1j.js";import"./lazy-CqgcpKMK.js";import"./ssrBoot-D42UTWSS.js";const To={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
