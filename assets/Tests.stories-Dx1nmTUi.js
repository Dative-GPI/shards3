import e from"./FSIconField-BA0vpVQ4.js";import{_ as a}from"./FSSlideGroup-BpHGQHKq.js";import{_ as F}from"./FSFadeOut-BBhaIaFQ.js";import{F as s}from"./FSButton-D8KNVcat.js";import{F as d}from"./FSWindow-DqyIK3y_.js";import{F as S}from"./FSText-CcQBLJU9.js";import{F as p,a as l}from"./FSTab-CW1tAVqG.js";import{F as c}from"./FSCol-CVj0zcU5.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSToggleSet-VP5g9ok7.js";import"./FSWrapGroup-scy4OXYc.js";import"./uuid-DTaye2KM.js";import"./useSlots-BM37IFiq.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-Vj_p04Ex.js";import"./group-BJiCY4dd.js";import"./proxiedModel-BmbZrdih.js";import"./index-D1hHR51g.js";import"./color-D4nM6Ihv.js";import"./display-1bSD02Hb.js";import"./VIcon-DBlUULm8.js";import"./locale-R8GaLlvb.js";import"./resizeObserver-D4qCRTFx.js";import"./VInput-11LmaO3P.js";import"./transition-DtcXiLpW.js";import"./density-CRkSANTr.js";import"./form-thVqu4eJ.js";import"./FSTextField-knlUmIuH.js";import"./FSBaseField-cmky_v29.js";import"./FSSpan-BETzK1-3.js";import"./FSRow-CYD73_tT.js";import"./useRules-BmSxRe3B.js";import"./VField-Ddzu1ph-.js";import"./VLabel-D_hiLcnP.js";import"./loader-BvdvxiyE.js";import"./VProgressCircular-DfVaP_TZ.js";import"./anchor-BMg_Hu1U.js";import"./rounded-CG6jOZvY.js";import"./VDefaultsProvider-EJiha1S2.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BuamrmjQ.js";import"./FSIcon-C0akNC9K.js";import"./FSButtonNextIcon-DnaEojsM.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./FSClickable-Cf6v5KqZ.js";import"./FSCard-BZyb3dNk.js";import"./lazy-BmZjQX7F.js";import"./ssrBoot-Cn3QeRqO.js";import"./VBtn-DIpB4JrY.js";import"./border-DWowyKy3.js";import"./elevation-C84Wb_jC.js";import"./dimensions-D-jSeqs8.js";import"./router-BPv_tYld.js";import"./index-CZbNBjVV.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
