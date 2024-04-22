import{F as i}from"./FSText-ae8f3525.js";import{_ as o}from"./FSIcon-fb1e9586.js";import{_ as l}from"./FSSpan-66c77817.js";import{F as r}from"./FSChip-cf14b851.js";import"./vue.esm-bundler-9b0e8103.js";import"./useColors-92311d90.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-eb9d1a1f.js";import"./useSlots-bfff66e3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./css-a20776b9.js";import"./VIcon-dbd6f8e0.js";import"./color-8a9bca19.js";import"./useRender-7c6c7a38.js";import"./tag-6bef4934.js";import"./FSRow-efd9bf42.js";const k={title:"Foundation/Shared/Chip",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={render:()=>({components:{FSChip:r,FSText:i,FSSpan:l,FSIcon:o},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" :editable="true">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full, editable </FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard">
          <FSSpan font="text-overline"> Success, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="warning" :editable="true">
          <FSSpan font="text-overline"> Warning, full, editable </FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="light">
          <FSSpan font="text-overline"> Light, full, uneditable </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" :editable="true">
          <FSSpan font="text-overline"> Dark, standard, editable </FSSpan>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard, uneditable" />
        <FSChip color="success" :editable="true" prependIcon="mdi-check" label="Success, full, editable"     />
        <FSChip color="warning" variant="standard" label="Warning, standard, uneditable" />
        <FSChip color="error" :editable="true" label="Error, full, editable" appendIcon="mdi-close" />
        <FSChip color="light" variant="standard" :editable="true" label="Light, standard, editable" />
        <FSChip color="dark" label="Dark, full, uneditable" />
      </div>
    </div>`})};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSChip,
      FSText,
      FSSpan,
      FSIcon
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" :editable="true">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full, editable </FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard">
          <FSSpan font="text-overline"> Success, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="warning" :editable="true">
          <FSSpan font="text-overline"> Warning, full, editable </FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard, uneditable </FSSpan>
        </FSChip>
        <FSChip color="light">
          <FSSpan font="text-overline"> Light, full, uneditable </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" :editable="true">
          <FSSpan font="text-overline"> Dark, standard, editable </FSSpan>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard, uneditable" />
        <FSChip color="success" :editable="true" prependIcon="mdi-check" label="Success, full, editable"     />
        <FSChip color="warning" variant="standard" label="Warning, standard, uneditable" />
        <FSChip color="error" :editable="true" label="Error, full, editable" appendIcon="mdi-close" />
        <FSChip color="light" variant="standard" :editable="true" label="Light, standard, editable" />
        <FSChip color="dark" label="Dark, full, uneditable" />
      </div>
    </div>\`
  })
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const T=["Variations"];export{e as Variations,T as __namedExportsOrder,k as default};
