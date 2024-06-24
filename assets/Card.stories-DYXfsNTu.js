import{F as n}from"./FSButton-Ctk-czeT.js";import{F as a}from"./FSCard-fA5aX9kp.js";import{F as i}from"./FSText-DOaWXjiL.js";import{_ as d}from"./FSRow-BZVvIgLd.js";import{V as m}from"./VDivider-BDr2QhjS.js";import"./vue.esm-bundler-BLBBrD1D.js";import"./FSClickable-BcsUSOO8.js";import"./useColors-CxkvBPqy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-BarOeKl-.js";import"./css-DU1X_fj1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VProgressCircular-CvGEkpD-.js";import"./color-T1BTTgdX.js";import"./useRender-CTGr_J4i.js";import"./resizeObserver-DkufbBgm.js";import"./VIcon-Cq9uvnQL.js";import"./tag-kXOxSspb.js";import"./FSSpan-DNHXfhpi.js";import"./useSlots-CKjiHxqT.js";import"./FSIcon-CgTCRlvx.js";import"./FSCol-OnQTHx6W.js";const O={title:"Foundation/Shared/Card",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={render:()=>({components:{VDivider:m,FSCard:a,FSText:i,FSRow:d,FSButton:n},template:`
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
                    <FSText font="text-underline">(suprised)</FSText>
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
                    <FSText font="text-underline">(suprised)</FSText>
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const D=["Variations"];export{t as Variations,D as __namedExportsOrder,O as default};
