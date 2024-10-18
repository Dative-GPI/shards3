import{F as i}from"./FSPagination-CSV_8bRN.js";import{F as p}from"./FSButton-AXdFIlyU.js";import{F as s}from"./FSText-gXvogAPJ.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSRow-DbyavHsS.js";import"./css-QbtOnfd3.js";import"./useBreakpoints-DVKeO9mp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-_VkINegi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C2MnUTNI.js";import"./FSClickable-DPklQL2R.js";import"./FSCard-z3C03PoX.js";import"./FSCol-1_uutz8i.js";import"./VProgressCircular-RI9KLr8_.js";import"./color-De-77ojK.js";import"./resizeObserver-CjMDZ25n.js";import"./VIcon-D6ql3n-m.js";import"./FSSpan-rLxUbVg1.js";import"./useSlots-C_N_WAus.js";import"./FSIcon-CkszfNjV.js";const N={title:"Foundation/Shared/Pagination",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{page1:0,pages1:3}},render:(r,{argTypes:o})=>({components:{FSPagination:i,FSButton:p,FSText:s},props:Object.keys(o),setup(){return{...r}},template:`
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const _=["Variations"];export{e as Variations,_ as __namedExportsOrder,N as default};
