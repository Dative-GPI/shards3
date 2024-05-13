import{F as i}from"./FSText-f60941a6.js";import{_ as o}from"./FSIcon-713345eb.js";import{_ as l}from"./FSSpan-8af5ddcc.js";import{F as r}from"./FSChip-4ec1aacf.js";import"./vue.esm-bundler-41eda46b.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./useSlots-e8ea556e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./css-35e8563f.js";import"./VIcon-8cf7ec9e.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./tag-64b4b0e7.js";import"./FSRow-1508d56d.js";const k={title:"Foundation/Shared/Chip",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={render:()=>({components:{FSChip:r,FSText:i,FSSpan:l,FSIcon:o},template:`
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
