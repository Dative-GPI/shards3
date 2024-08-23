import e from"./FSIconField-DY3-WFU4.js";import{F as a}from"./FSSlideGroup-BpTb0q2K.js";import{F}from"./FSFadeOut-CJjgZkSF.js";import{F as s}from"./FSButton-CvqXFT9l.js";import{F as d}from"./FSWindow-DzZfyLfc.js";import{F as S}from"./FSText-CnDPSmPj.js";import{F as p,a as l}from"./FSTab-L9sXPUiB.js";import{_ as c}from"./FSCol-D9tDKebi.js";import"./vue.esm-bundler-BATn8cDU.js";import"./FSToggleSet-DeQ0ec5F.js";import"./FSWrapGroup-DvqdQnms.js";import"./uuid-DTaye2KM.js";import"./useSlots-iSUV1mlj.js";import"./useColors-BHn59yMM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C-7Kj0lB.js";import"./css-C5boehQC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-CFGEqcRJ.js";import"./index-BJgqyIck.js";import"./color-jM82jTdX.js";import"./display-BemOzMYh.js";import"./group-CBtViAyU.js";import"./proxiedModel-D0bPfire.js";import"./VIcon-BgP_kyAH.js";import"./locale-Cm_eUAdw.js";import"./VProgressCircular-Bi_qA2kG.js";import"./VInput-sarfrtTX.js";import"./transition-O2x8Myu8.js";import"./density-BzC6UB2b.js";import"./FSTextField-CICw89u7.js";import"./FSBaseField-Dd85ojn4.js";import"./FSSpan-C8YxV3Vj.js";import"./FSRow-Gvoj2sTW.js";import"./VSpacer-Bp_e_Kvt.js";import"./useRules-C6ry6kys.js";import"./VField-36dIboNy.js";import"./VLabel-Bh2Q5uKK.js";import"./loader-YJ_823dI.js";import"./anchor-CBLqXyZM.js";import"./rounded-BwvX6bZn.js";import"./VDefaultsProvider-DeTRucHm.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bv2UUMCu.js";import"./FSIcon-CM3DCfji.js";import"./FSClickable-B9o4BEyu.js";import"./FSCard-DuDQq8Pz.js";import"./VBtn-DCaqYD99.js";import"./border-BU-G8uSh.js";import"./elevation-oWdkHiXv.js";import"./dimensions-viHtPIHZ.js";import"./router-BSq-7NWC.js";import"./index-RhlTNW4L.js";import"./lazy-Ck43itqa.js";import"./ssrBoot-DsRDMYEb.js";const go={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
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
