import{F as x}from"./FSButton-Do7vvvNJ.js";import{F as p}from"./FSCard-PwHP1R85.js";import{F}from"./FSText-CvQJXkay.js";import{_ as f}from"./FSRow-DoCXWKDP.js";import{c as u,g as y,l as C,I as b}from"./vue.esm-bundler-DC82FEWN.js";import{d as h,i as l,a as g,p as T,g as k,b as B,m as w,c as R,e as G,f as V,u as D,h as d}from"./theme-ZEf9-fLI.js";import"./FSClickable-BbRY9BmN.js";import"./useColors-BCLFEGbK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DMal9AfS.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VProgressCircular-BvwZAexL.js";import"./color-C5d3UYhE.js";import"./VIcon-C6jgSf5f.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-CBfle4ZR.js";import"./FSCol-B7HQy3FB.js";function _(e){return h(()=>{const a=[],t={};if(e.value.background)if(l(e.value.background)){if(t.backgroundColor=e.value.background,!e.value.text&&g(e.value.background)){const o=T(e.value.background);if(o.a==null||o.a===1){const r=k(o);t.color=r,t.caretColor=r}}}else a.push(`bg-${e.value.background}`);return e.value.text&&(l(e.value.text)?(t.color=e.value.text,t.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:t}})}function P(e,a){const t=u(()=>({text:y(e)?e.value:null})),{colorClasses:o,colorStyles:r}=_(t);return{textColorClasses:o,textColorStyles:r}}const H=B({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...w(),...R()},"VDivider"),N=G()({name:"VDivider",props:H(),setup(e,a){let{attrs:t}=a;const{themeClasses:o}=V(e),{textColorClasses:r,textColorStyles:S}=P(C(e,"color")),v=u(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=d(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=d(e.thickness)),i});return D(()=>b("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,r.value,e.class],style:[v.value,S.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),oe={title:"Foundation/Shared/Card",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={render:()=>({components:{VDivider:N,FSCard:p,FSText:F,FSRow:f,FSButton:x},template:`
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
    </div>`})};var s,m,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ae=["Variations"];export{n as Variations,ae as __namedExportsOrder,oe as default};
