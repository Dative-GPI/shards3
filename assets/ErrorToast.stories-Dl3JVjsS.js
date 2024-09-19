import{F as n}from"./FSErrorToast-CaxdBc4J.js";import{F as i}from"./FSRow-k5pgBhR1.js";import{F as p}from"./FSButton-jJkg4qCi.js";import"./vue.esm-bundler-BwDfg4wG.js";import"./FSIcon-ChaYv6Le.js";import"./css-DTUiF03J.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-D-JUvW-a.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSCol-BEvj3we4.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./VProgressCircular-CmpAWY4m.js";const j={title:"Foundation/Shared/ErrorToast",component:n,tags:["autodocs"]},r={args:{args:{code1:"errors.missingorganisation",code2:"errors.noadminprivilege",code3:"errors.alreadyregistereduser"}},render:(a,{argTypes:s})=>({components:{FSErrorToast:n,FSRow:i,FSButton:p},props:Object.keys(s),setup(){return{...a}},template:`
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
}`,...(t=(e=r.parameters)==null?void 0:e.docs)==null?void 0:t.source}}};const k=["Variations"];export{r as Variations,k as __namedExportsOrder,j as default};
