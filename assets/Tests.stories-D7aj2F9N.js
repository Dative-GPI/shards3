import e from"./FSIconField-CJgHWqEj.js";import{_ as a}from"./FSSlideGroup-DmKSX9y1.js";import{_ as F}from"./FSFadeOut-CQmN3qQC.js";import{F as s}from"./FSButton-CN1ZIktz.js";import{F as d}from"./FSWindow-DRuJd0N9.js";import{F as S}from"./FSText-DiZ1SltH.js";import{F as p,a as l}from"./FSTab-DpJjJgiQ.js";import{F as c}from"./FSCol-DdGVae5t.js";import"./vue.esm-bundler-DSwHwgKw.js";import"./FSToggleSet-Co6Wb6go.js";import"./FSWrapGroup-DErk_6Fw.js";import"./uuid-DTaye2KM.js";import"./useSlots-CKCq4R6P.js";import"./useColors-C4EmrkDp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-4AjdAhIV.js";import"./css-XXwFKvUE.js";import"./useBreakpoints-BjF6TIJH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-BZWOKBXv.js";import"./group-r_jY4ze7.js";import"./proxiedModel-D4Pgijkw.js";import"./index-GTe7atjb.js";import"./color-uBYwhjku.js";import"./display-CL7KZq5h.js";import"./locale-BsRwbRmi.js";import"./VIcon-CdjjMQ6V.js";import"./resizeObserver-A1vWEG-J.js";import"./VInput-21AfxGIO.js";import"./transition--2cAMn_j.js";import"./density-BfjPyHiq.js";import"./dimensions-CF0PFV-D.js";import"./form-BWUCG2_i.js";import"./FSTextField-CnPHb7kI.js";import"./FSBaseField-D2ow2gVm.js";import"./FSSpan-BoXQ4lG9.js";import"./FSRow-BtkEywPN.js";import"./useRules-CaMdh5L0.js";import"./VField-YT2KDH-x.js";import"./VLabel-DSPSNe0W.js";import"./loader-kTKV0tNq.js";import"./VProgressCircular-Cd-wheNV.js";import"./anchor-7worbrUf.js";import"./rounded-ZilIy1Oq.js";import"./VDefaultsProvider-BCaOgI0R.js";import"./forwardRefs-DWGaNmQL.js";import"./index-D4rR88Q2.js";import"./FSIcon-TpFvudaY.js";import"./FSButtonNextIcon-DY9rJY5p.js";import"./FSRouterLink-eAqg-msJ.js";import"./vue-router-jbf8yRwv.js";import"./FSClickable-Dg_E4dui.js";import"./FSCard-Dby8iWqU.js";import"./VBtn-WSruA80Q.js";import"./border-C-pp2UFW.js";import"./elevation-DiTecsj1.js";import"./router-C4I-dA4c.js";import"./index-BOr5YZLb.js";import"./scopeId-DneNdOj5.js";import"./ssrBoot-DEXW_-kf.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
