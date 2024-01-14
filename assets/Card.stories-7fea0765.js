import{_ as C}from"./FSButton-c75448a6.js";import{n as b,t as T,f as h,q as o,K as g,x as r,B,v as a,u as i,F as d,A as _}from"./vue.esm-bundler-722d5586.js";import{C as p,u as c}from"./useTimeZone-e2d91037.js";import{_ as f}from"./FSCol-73c0912e.js";import{_ as t}from"./FSRow-adbe3642.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{F as w}from"./FSText-f2895473.js";import{V as $}from"./VDivider-fb65bdb2.js";import"./FSSpan-25dfede3.js";import"./FSIcon-420cc903.js";import"./VIcon-3294e246.js";import"./VBtn-6a2a5334.js";import"./rounded-0d60e9e4.js";import"./elevation-03171874.js";import"./group-a0dbf136.js";import"./locale-4b40caf6.js";import"./loader-40ab58f6.js";import"./VDefaultsProvider-ca83b848.js";import"./index-de6a3e08.js";import"./VProgressCircular-c301256c.js";import"./resizeObserver-c610ad12.js";import"./_commonjsHelpers-725317a4.js";import"./index-e7edda67.js";const x=b({name:"FSCard",components:{FSCol:f,FSRow:t},props:{color:{type:String,required:!1,default:p.Dark}},setup(e){const{color:l}=T(e),s=c().getColors(l.value),m=c().getColors(p.Background);return{style:h(()=>({"--fs-card-background-color":m.base,"--fs-card-border-color":s.base}))}}});function G(e,l,s,m,v,R){return o(),g("div",{class:"fs-card",style:_(e.style)},[r(e.$slots,"default",{},()=>[B(f,null,{default:a(()=>[e.$slots.header?(o(),i(t,{key:0},{default:a(()=>[r(e.$slots,"header")]),_:3})):d("",!0),e.$slots.body?(o(),i(t,{key:1},{default:a(()=>[r(e.$slots,"body")]),_:3})):d("",!0),e.$slots.footer?(o(),i(t,{key:2},{default:a(()=>[r(e.$slots,"footer")]),_:3})):d("",!0)]),_:3})])],4)}const y=k(x,[["render",G]]);x.__docgenInfo={displayName:"FSCard",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorBase.Dark"}}],slots:[{name:"default"},{name:"header"},{name:"body"},{name:"footer"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSCard.vue"]};const te={title:"Foundation/Shared/Card",component:y,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={render:()=>({components:{VDivider:$,FSCard:y,FSText:w,FSRow:t,FSButton:C},template:`
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
    </div>`})};var S,F,u;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(u=(F=n.parameters)==null?void 0:F.docs)==null?void 0:u.source}}};const oe=["Variations"];export{n as Variations,oe as __namedExportsOrder,te as default};
