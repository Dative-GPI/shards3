import{F as n}from"./FSButton-D8KNVcat.js";import{F as a}from"./FSCard-BZyb3dNk.js";import{F as i}from"./FSText-CcQBLJU9.js";import{_ as d}from"./FSRow-CYD73_tT.js";import{V as m}from"./VDivider-_-MdB90R.js";import"./vue.esm-bundler-D3ngFwGY.js";import"./FSRouterLink-4CaYWHac.js";import"./vue-router-DrtreIio.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-Cf6v5KqZ.js";import"./useColors-B-331F-F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DFFIkVWm.js";import"./css-BOQ-6X_w.js";import"./useBreakpoints-DbdoA89o.js";import"./VProgressCircular-DfVaP_TZ.js";import"./color-D4nM6Ihv.js";import"./resizeObserver-D4qCRTFx.js";import"./VIcon-DBlUULm8.js";import"./FSSpan-BETzK1-3.js";import"./useSlots-BM37IFiq.js";import"./FSIcon-C0akNC9K.js";import"./FSCol-CVj0zcU5.js";import"./theme-CbzhUSTm.js";const H={title:"Foundation/Shared/Card",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={render:()=>({components:{VDivider:m,FSCard:a,FSText:i,FSRow:d,FSButton:n},template:`
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
