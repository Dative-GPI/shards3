import{F as i}from"./FSPagination-Bh1FvUux.js";import{F as p}from"./FSButton-jJkg4qCi.js";import{F as s}from"./FSText-CwwFvnOv.js";import"./vue.esm-bundler-BwDfg4wG.js";import"./FSRow-k5pgBhR1.js";import"./css-DTUiF03J.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-tmPxRJAs.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkbGhe4v.js";import"./FSClickable-Y_T-Cq-9.js";import"./FSCard-ENPT7Hcj.js";import"./FSCol-BEvj3we4.js";import"./VProgressCircular-CmpAWY4m.js";import"./color-BnvS3YzF.js";import"./tag-Ceq3l71M.js";import"./FSSpan-H3zJ0Cfa.js";import"./useSlots-2JqallzA.js";import"./FSIcon-ChaYv6Le.js";import"./VIcon-D-JUvW-a.js";const O={title:"Foundation/Shared/Pagination",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{page1:0,pages1:3}},render:(r,{argTypes:o})=>({components:{FSPagination:i,FSButton:p,FSText:s},props:Object.keys(o),setup(){return{...r}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            :modelValue="args.page1"
            :pages="args.pages1"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :editable="args.page1 > 0"
              @click="args.page1--"
            />
            <FSButton
              label="Next"
              :editable="args.page1 < args.pages1 - 1"
              @click="args.page1++"
            />
          </div>
        </div>
      </div>
    `})};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      page1: 0,
      pages1: 3
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSPagination,
      FSButton,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; justify-content: center;">
          <FSPagination
            :modelValue="args.page1"
            :pages="args.pages1"
          />
          <div style="display: flex; width: 100%; gap: 8px; justify-content: center;">
            <FSButton
              label="Previous"
              :editable="args.page1 > 0"
              @click="args.page1--"
            />
            <FSButton
              label="Next"
              :editable="args.page1 < args.pages1 - 1"
              @click="args.page1++"
            />
          </div>
        </div>
      </div>
    \`
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const N=["Variations"];export{e as Variations,N as __namedExportsOrder,O as default};
