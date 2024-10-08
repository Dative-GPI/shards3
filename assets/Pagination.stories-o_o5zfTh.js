import{F as i}from"./FSPagination-DKF1xuzX.js";import{F as p}from"./FSButton-C0E8ILJw.js";import{F as s}from"./FSText-BprvNhQU.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSRow-BnsweOMX.js";import"./css-BWDYXGFo.js";import"./useBreakpoints-INFVV7da.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-3CjboYRA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DkyKeiX7.js";import"./FSClickable-DTqk3LMl.js";import"./FSCard-BOEac87c.js";import"./FSCol-CvoATp5Q.js";import"./VProgressCircular-CbhEC8Of.js";import"./color-B0htL_ZM.js";import"./resizeObserver-CTZzan_-.js";import"./VIcon-Bo7R9vIQ.js";import"./FSSpan-Bnbdrku6.js";import"./useSlots-zwOl0abH.js";import"./FSIcon-kERq0rd3.js";const N={title:"Foundation/Shared/Pagination",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{page1:0,pages1:3}},render:(r,{argTypes:o})=>({components:{FSPagination:i,FSButton:p,FSText:s},props:Object.keys(o),setup(){return{...r}},template:`
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
