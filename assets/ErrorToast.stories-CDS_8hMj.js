import{F as n}from"./FSErrorToast-LUf0ByQJ.js";import{_ as i}from"./FSRow-CbEgVN08.js";import{F as p}from"./FSButton-DSUuKlnr.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSIcon-CvjHaRpL.js";import"./useBreakpoints-C5IzU8MC.js";import"./useColors-r8nvatqt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C2MnUTNI.js";import"./css-CP2C2-Fe.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-D6ql3n-m.js";import"./color-De-77ojK.js";import"./FSSpan-Di50moR2.js";import"./useSlots-C_N_WAus.js";import"./FSCol-BvqytbKT.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-Dv9jZ2SG.js";import"./FSCard-CBOjzTDC.js";import"./VProgressCircular-RI9KLr8_.js";import"./resizeObserver-CjMDZ25n.js";const D={title:"Foundation/Shared/ErrorToast",component:n,tags:["autodocs"]},r={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(a,{argTypes:s})=>({components:{FSErrorToast:n,FSRow:i,FSButton:p},props:Object.keys(s),setup(){return{...a}},template:`
      <FSRow gap="10px" align="bottom-center">
        <FSErrorToast
          :errorCode="args.code1"
          variant="standard"
        >
        <template #footer>
          <FSRow align="center-center">
            <FSButton
              color="error"
              label="Delete"
              variant="full"
            />
          </FSRow>
        </template>
        </FSErrorToast>
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </FSRow>`})};var o,e,t;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    args: {
      code1: "errors.missingorganisation",
      code2: "errors.noadminprivilege",
      code3: "errors.alreadyregistereduser"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSErrorToast,
      FSRow,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <FSRow gap="10px" align="bottom-center">
        <FSErrorToast
          :errorCode="args.code1"
          variant="standard"
        >
        <template #footer>
          <FSRow align="center-center">
            <FSButton
              color="error"
              label="Delete"
              variant="full"
            />
          </FSRow>
        </template>
        </FSErrorToast>
        <FSErrorToast
          :errorCode="args.code2"
        />
        <FSErrorToast
          :errorCode="args.code3"
        />
      </FSRow>\`
  })
}`,...(t=(e=r.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const V=["Variations"];export{r as Variations,V as __namedExportsOrder,D as default};
