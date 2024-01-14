import{F as a}from"./FSColor-f6026768.js";import{_ as d}from"./FSRow-adbe3642.js";import"./vue.esm-bundler-722d5586.js";import"./useTimeZone-e2d91037.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={title:"Foundation/Shared/Global/Colors",tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={render:()=>({components:{FSColor:a,FSRow:d},template:`
    <div style="display: flex; flex-wrap: wrap; gap: 20px;  margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        primary #0059E5
        <FSColor color="primary" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        success #6DE038
        <FSColor color="success" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        warning #E5A139
        <FSColor color="warning" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        error #E01212
        <FSColor color="error" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        light #DEE0E3
        <FSColor color="light" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        dark #676E7A
        <FSColor color="dark" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>`})};var r,t,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSColor,
      FSRow
    },
    template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 20px;  margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        primary #0059E5
        <FSColor color="primary" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        success #6DE038
        <FSColor color="success" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        warning #E5A139
        <FSColor color="warning" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        error #E01212
        <FSColor color="error" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 40px; align-items: center;">
      <div style="display: flex; flex-direction: column;">
        light #DEE0E3
        <FSColor color="light" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
      <div style="display: flex; flex-direction: column;">
        dark #676E7A
        <FSColor color="dark" style="background-color: transparent !important; border: 1px dotted black;" gap="0">
          <FSRow style="background-color: transparent !important;" gap="0">
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-light);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-base);"></div>
            <div style="width: 50px; height: 50px; background-color: var(--fs-color-dark);"></div>
          </FSRow>
        </FSColor>
      </div>
    </div>\`
  })
}`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const h=["DefaultTheme"];export{o as DefaultTheme,h as __namedExportsOrder,v as default};
