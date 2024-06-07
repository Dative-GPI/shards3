import{F as i}from"./FSText-d2336987.js";import{_ as o}from"./FSIcon-110a991e.js";import{_ as l}from"./FSSpan-4ac1bb71.js";import{F as r}from"./FSChip-b2b5f621.js";import"./vue.esm-bundler-f632b118.js";import"./useColors-c1b539be.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-a477330d.js";import"./useSlots-de625f75.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./css-185b4786.js";import"./VIcon-c02af0e0.js";import"./color-1b8c6bf4.js";import"./useRender-7972ae0c.js";import"./tag-573fddf1.js";import"./FSRow-76f4ad1e.js";const k={title:"Foundation/Shared/Chip",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={render:()=>({components:{FSChip:r,FSText:i,FSSpan:l,FSIcon:o},template:`
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
