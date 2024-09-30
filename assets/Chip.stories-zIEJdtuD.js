import{F as i}from"./FSText-CnF0GPuv.js";import{F as o}from"./FSIcon-C8jESFXA.js";import{_ as l}from"./FSSpan-3STIP-79.js";import{F as r}from"./FSChip-cbDRAwPU.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./useColors-CaDWSZLL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BEfrBPRQ.js";import"./useSlots-BHms3Yb6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-D18ueKtB.js";import"./VIcon-C65wMs2G.js";import"./color-DpQhyQC8.js";import"./tag-ByYBjpGI.js";import"./FSRow-D546kqFt.js";const I={title:"Foundation/Shared/Chip",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={render:()=>({components:{FSChip:r,FSText:i,FSSpan:l,FSIcon:o},template:`
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const k=["Variations"];export{e as Variations,k as __namedExportsOrder,I as default};
