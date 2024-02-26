import{_ as n}from"./FSSpan-2051def6.js";import{_ as l}from"./FSCol-03fc1f3a.js";import"./vue.esm-bundler-17cb12ce.js";import"./rules-8f4289e2.js";import"./useTimeZone-abc9a874.js";import"./lodash-569b8a6d.js";import"./_commonjsHelpers-725317a4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./LexicalSelection.prod-b0bd0f79.js";const g={title:"Foundation/Shared/Global/Texts",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={render:()=>({components:{FSSpan:n,FSCol:l},template:`
      <FSCol>
        <FSSpan font="text-h1"> text-h1</FSSpan>
        <FSSpan font="text-h2"> text-h2 </FSSpan>
        <FSSpan font="text-h3"> text-h3 </FSSpan>
        <FSSpan font="text-body"> text-body </FSSpan>
        <FSSpan font="text-button"> text-button </FSSpan>
        <FSSpan font="text-overline"> text-overline </FSSpan>
        <FSSpan font="text-underline"> text-underline </FSSpan>
      </FSCol>`})},e={render:()=>({components:{FSSpan:n,FSCol:l},template:`
      <FSCol>
        <pre>&lt;FSSpan font="text-body"&gt;
  Jumped a line
  Again Tabulated   3 Spaces
&lt;/FSSpan&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body">
          Jumped a line
          Again Tabulated   3 Spaces
        </FSSpan>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <pre>&lt;FSSpan font="text-body" v-text="'\\r\\nJumped a line\\r\\nAgain\\tTabulated   3 Spaces'" /&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body" v-text="'\\r\\nJumped a line\\r\\nAgain\\tTabulated   3 Spaces'" />
      </FSCol>`})};var o,a,S;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSSpan,
      FSCol
    },
    template: \`
      <FSCol>
        <FSSpan font="text-h1"> text-h1</FSSpan>
        <FSSpan font="text-h2"> text-h2 </FSSpan>
        <FSSpan font="text-h3"> text-h3 </FSSpan>
        <FSSpan font="text-body"> text-body </FSSpan>
        <FSSpan font="text-button"> text-button </FSSpan>
        <FSSpan font="text-overline"> text-overline </FSSpan>
        <FSSpan font="text-underline"> text-underline </FSSpan>
      </FSCol>\`
  })
}`,...(S=(a=t.parameters)==null?void 0:a.docs)==null?void 0:S.source}}};var p,r,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSSpan,
      FSCol
    },
    template: \`
      <FSCol>
        <pre>&lt;FSSpan font="text-body"&gt;
  Jumped a line
  Again Tabulated   3 Spaces
&lt;/FSSpan&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body">
          Jumped a line
          Again Tabulated   3 Spaces
        </FSSpan>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <pre>&lt;FSSpan font="text-body" v-text="'\\\\r\\\\nJumped a line\\\\r\\\\nAgain\\\\tTabulated   3 Spaces'" /&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body" v-text="'\\\\r\\\\nJumped a line\\\\r\\\\nAgain\\\\tTabulated   3 Spaces'" />
      </FSCol>\`
  })
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const y=["AllFonts","VTextDirective"];export{t as AllFonts,e as VTextDirective,y as __namedExportsOrder,g as default};
