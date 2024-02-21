import{_ as i}from"./FSButton-35c738ab.js";import{F as a}from"./FSCard-7c6eaa72.js";import{F as n}from"./FSText-0291b8bd.js";import{_ as m}from"./FSRow-40eef247.js";import{V as p}from"./VDivider-28cd5332.js";import"./vue.esm-bundler-6746129d.js";import"./useColors-af9c4499.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./rules-1d0b59d0.js";import"./useTimeZone-147b7e03.js";import"./lodash-569b8a6d.js";import"./theme-dcffbbe6.js";import"./FSSpan-636f18e6.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSIcon-e171104f.js";import"./VIcon-bfd3bf26.js";import"./color-28636d86.js";import"./VBtn-28e6871b.js";import"./variant-06fe573f.js";import"./density-0267c9a3.js";import"./elevation-6127bd0f.js";import"./rounded-4ccd8171.js";import"./group-6b499f9e.js";import"./locale-6d7be75c.js";import"./dimensions-b4b52e44.js";import"./loader-ad3b4aa2.js";import"./router-6af7a2c9.js";import"./index-a12920e9.js";import"./VDefaultsProvider-4443303c.js";import"./VProgressCircular-91c9055e.js";import"./resizeObserver-2d06e994.js";import"./LexicalSelection.prod-bad52e97.js";import"./FSCol-7dad0d26.js";const J={title:"Foundation/Shared/Card",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={render:()=>({components:{VDivider:p,FSCard:a,FSText:n,FSRow:m,FSButton:i},template:`
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
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const L=["Variations"];export{t as Variations,L as __namedExportsOrder,J as default};
