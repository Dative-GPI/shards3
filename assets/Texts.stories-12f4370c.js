import{_ as n}from"./FSSpan-f8d57311.js";import{_ as l}from"./FSCol-a9e7dd6a.js";import"./vue.esm-bundler-bf312605.js";import"./_plugin-vue_export-helper-c27b6911.js";const c={title:"Foundation/Shared/Global/Texts",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={render:()=>({components:{FSSpan:n,FSCol:l},template:`
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
      </FSCol>`})};var a,o,S;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(S=(o=t.parameters)==null?void 0:o.docs)==null?void 0:S.source}}};var p,r,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const b=["AllFonts","VTextDirective"];export{t as AllFonts,e as VTextDirective,b as __namedExportsOrder,c as default};
