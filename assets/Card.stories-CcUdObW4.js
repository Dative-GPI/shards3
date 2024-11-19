import{F as n}from"./FSButton-DZMcpMR1.js";import{F as a}from"./FSCard-Bfo4Z0Zf.js";import{F as i}from"./FSText-CAGI2dEo.js";import{_ as d}from"./FSRow-CSQtiyAx.js";import{V as m}from"./VDivider-icOqF9nb.js";import"./vue.esm-bundler-Ddr6MgcY.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-D7sul-uP.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSIcon-DfjSexyz.js";import"./FSCol-D8gLxM2E.js";import"./theme-DrZhiCRi.js";const H={title:"Foundation/Shared/Card",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={render:()=>({components:{VDivider:m,FSCard:a,FSText:i,FSRow:d,FSButton:n},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;">
            <FSCard>
                <template #header>
                    <FSText font="text-button">Obiwan kenobi</FSText>
                </template>
                <template #body>
                    <FSText> - Hello there!</FSText>
                </template>
            </FSCard>
        </div>
        <div style="display: flex; gap: 10px;">
            <FSCard>
                <template #header>
                    <FSText font="text-button">General Grievous</FSText>
                </template>
                <template #body>
                    <FSText> - General Kenobi!</FSText>
                </template>
                <template #footer>
                    <FSText font="text-overline">(suprised)</FSText>
                </template>
            </FSCard>
            <FSCard>
                <template #header>
                    <FSText font="text-button">General Grievous</FSText>
                </template>
                <template #body>
                    <FSText> - You are a bold one.</FSText>
                </template>
            </FSCard>
        </div>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <div style="display: flex; gap: 10px;">
            <FSCard color="primary">
                <FSRow>
                    <FSButton color="primary" variant="icon" icon="mdi-format-header-1" />
                    <FSButton color="primary" variant="icon" icon="mdi-format-header-2" />
                    <FSButton color="primary" variant="icon" icon="mdi-format-header-3" />
                    <v-divider vertical />
                    <FSButton color="primary" variant="icon" icon="mdi-format-bold" />
                    <FSButton color="primary" variant="icon" icon="mdi-format-italic" />
                </FSRow>
            </FSCard>
        </div>
    </div>`})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VDivider,
      FSCard,
      FSText,
      FSRow,
      FSButton
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
        <div style="display: flex; gap: 10px;">
            <FSCard>
                <template #header>
                    <FSText font="text-button">Obiwan kenobi</FSText>
                </template>
                <template #body>
                    <FSText> - Hello there!</FSText>
                </template>
            </FSCard>
        </div>
        <div style="display: flex; gap: 10px;">
            <FSCard>
                <template #header>
                    <FSText font="text-button">General Grievous</FSText>
                </template>
                <template #body>
                    <FSText> - General Kenobi!</FSText>
                </template>
                <template #footer>
                    <FSText font="text-overline">(suprised)</FSText>
                </template>
            </FSCard>
            <FSCard>
                <template #header>
                    <FSText font="text-button">General Grievous</FSText>
                </template>
                <template #body>
                    <FSText> - You are a bold one.</FSText>
                </template>
            </FSCard>
        </div>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <div style="display: flex; gap: 10px;">
            <FSCard color="primary">
                <FSRow>
                    <FSButton color="primary" variant="icon" icon="mdi-format-header-1" />
                    <FSButton color="primary" variant="icon" icon="mdi-format-header-2" />
                    <FSButton color="primary" variant="icon" icon="mdi-format-header-3" />
                    <v-divider vertical />
                    <FSButton color="primary" variant="icon" icon="mdi-format-bold" />
                    <FSButton color="primary" variant="icon" icon="mdi-format-italic" />
                </FSRow>
            </FSCard>
        </div>
    </div>\`
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const K=["Variations"];export{t as Variations,K as __namedExportsOrder,H as default};
