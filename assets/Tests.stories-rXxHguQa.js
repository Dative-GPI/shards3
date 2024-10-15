import e from"./FSIconField-BWyE83co.js";import{_ as a}from"./FSSlideGroup-CkmcxhiK.js";import{_ as F}from"./FSFadeOut-BcBUJmEE.js";import{F as s}from"./FSButton-D5EwxixH.js";import{F as d}from"./FSWindow-Brcf5j8v.js";import{F as S}from"./FSText-GEqj0Yf_.js";import{F as p,a as l}from"./FSTab-Blpibai9.js";import{F as c}from"./FSCol-CYWCfIBP.js";import"./vue.esm-bundler-DTB_q9xr.js";import"./FSToggleSet-BfQXxOjP.js";import"./FSWrapGroup-DVMuqcCh.js";import"./uuid-DTaye2KM.js";import"./useSlots-BnylMYIF.js";import"./useColors-CeHYzu6a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CX_N7n5F.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-D8F5yfrm.js";import"./group-CBQYGNTq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-UH0ZuYvc.js";import"./color-Du5JXqac.js";import"./display-BhWGQDVt.js";import"./VIcon-DzZvThha.js";import"./locale-BJQwrXJ7.js";import"./resizeObserver-BhfhgZOk.js";import"./VInput-DGUvNq3c.js";import"./transition-DhTIerNz.js";import"./density-CmGe4Vfq.js";import"./form-_oo3cshG.js";import"./FSTextField-CB_VZ4XI.js";import"./FSBaseField-CMNvz_3q.js";import"./FSSpan-DGSHCe_l.js";import"./FSRow-CFFgZ74C.js";import"./VSpacer-Di7g3RCw.js";import"./useRules-D0gcbU57.js";import"./VField-Do2gtyNA.js";import"./VLabel-33JaQml4.js";import"./loader-BYp4SDfR.js";import"./VProgressCircular-DjSdELIn.js";import"./anchor-0mwNUa2-.js";import"./rounded-ErtzAGHK.js";import"./VDefaultsProvider-B8_oQgnX.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DS9MhfY5.js";import"./FSIcon-8KdV556C.js";import"./FSButtonNextIcon-DTv-WVMA.js";import"./FSClickable-BhVwKM7P.js";import"./FSCard-B1dz5tzT.js";import"./VBtn-BUwP05fv.js";import"./border-Va--AsO6.js";import"./elevation-JfXKLVfD.js";import"./dimensions-CqoZOW6j.js";import"./router-DxFny788.js";import"./index-DMxVfgfA.js";import"./lazy-CgkI0iJG.js";import"./ssrBoot-BTOmRKcz.js";import"./vue-router-Bp8FxDoy.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
