import e from"./FSIconField-D7RENgtI.js";import{_ as a}from"./FSSlideGroup-l9gZ_81L.js";import{_ as F}from"./FSFadeOut-BVg8JJoP.js";import{F as s}from"./FSButton-CVLEcQTp.js";import{F as d}from"./FSWindow-DDikhtYS.js";import{F as S}from"./FSText-CNEZo4Pd.js";import{F as p,a as l}from"./FSTab-FD8wSPhf.js";import{F as c}from"./FSCol-Bj1WIVag.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSToggleSet-D1nUZzQm.js";import"./FSWrapGroup-C-l9ybIX.js";import"./uuid-DTaye2KM.js";import"./useSlots-zwOl0abH.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./css-DVhR3h-A.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./proxiedModel-BN8GSVE7.js";import"./index-D2mfwXxT.js";import"./color-B0htL_ZM.js";import"./display-4460MzAg.js";import"./VIcon-Bo7R9vIQ.js";import"./locale-BGMMnFfJ.js";import"./resizeObserver-CTZzan_-.js";import"./VInput-Clj2quuL.js";import"./transition-BvKGRC-_.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./FSTextField-KbqtOOXa.js";import"./FSBaseField-CkKSPx2p.js";import"./FSSpan-DpOLTsx1.js";import"./FSRow-D4JfwQlG.js";import"./VSpacer-DLFo12A6.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./VLabel-hsX9xD9s.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./anchor-CiFPvmMB.js";import"./rounded-C73YOAN4.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BPQCAcxH.js";import"./FSIcon-DUHP8dRZ.js";import"./FSButtonNextIcon-Byp9YOIJ.js";import"./FSClickable-DB2xZ1ce.js";import"./FSCard-CPhdbHks.js";import"./VBtn-B6If6-we.js";import"./border-ByF30Ccd.js";import"./elevation-DH_sKWqU.js";import"./dimensions-Cku-Ba4r.js";import"./router-lEm-a6ws.js";import"./index-E_I8r0kf.js";import"./lazy-Bq8C33UW.js";import"./ssrBoot-QID7OAaG.js";import"./vue-router-DThl0PGU.js";const Wo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
