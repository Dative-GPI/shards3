import e from"./FSIconField-Cu_PXucW.js";import{F as a}from"./FSSlideGroup-Cl8iPAls.js";import{F}from"./FSFadeOut-L0LUgjsg.js";import{F as s}from"./FSButton-C0cjY78b.js";import{F as d}from"./FSWindow-4mngEPBS.js";import{F as S}from"./FSText-CvFl9H1C.js";import{F as p,a as l}from"./FSTab-iu6MzBk5.js";import{_ as c}from"./FSCol-DX423FHf.js";import"./vue.esm-bundler-gWFTcvUr.js";import"./FSToggleSet-BcrXmKwm.js";import"./FSWrapGroup-CRENaYi2.js";import"./uuid-DTaye2KM.js";import"./useSlots-qbJuQIJ1.js";import"./useColors-4hVwr1YC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-DA9ermhM.js";import"./css-Bc8dJONt.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroup-DIBYkq4d.js";import"./index-C2ELxjkU.js";import"./color-CI1OEbFE.js";import"./display-DIiwMx3y.js";import"./group-DEdtjQ6D.js";import"./proxiedModel-ClxH85aG.js";import"./VIcon-BiBYr0XY.js";import"./locale-C1ZNn_CS.js";import"./VProgressCircular-DqlO5PEF.js";import"./VInput-ClhP4L1h.js";import"./transition-14-CCvbq.js";import"./density-cGginCT8.js";import"./FSTextField-DmPsFJH8.js";import"./FSBaseField-C6NDZpLW.js";import"./FSSpan-BlywDO8Z.js";import"./FSRow-Bpa2jjpJ.js";import"./VSpacer-DqpPKsvm.js";import"./useRules-CMc02QlE.js";import"./VField-0o7ofOT0.js";import"./VLabel-B0q5I27e.js";import"./loader-DNzkAbrM.js";import"./anchor-D8sPv6Az.js";import"./rounded-DlJ8CYNz.js";import"./VDefaultsProvider-CYAySfh3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BHt-17iJ.js";import"./FSIcon-C7-l9IT-.js";import"./FSClickable-aki8YuqU.js";import"./FSCard-B-jXuIJy.js";import"./VBtn-BQZMGoLN.js";import"./border-CDY4nf3P.js";import"./elevation-B3TY2UXi.js";import"./dimensions-CmIA1DmV.js";import"./router-B2tkk-4w.js";import"./index-BTMLtsqI.js";import"./lazy-Cvx00My1.js";import"./ssrBoot-2G_E7J1h.js";const go={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(n,{argTypes:m})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(m),setup(){return{...n}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Two FSWindow </FSText>
        <FSWindow width="500px" :modelValue="args.tab1">
            <FSIconField />
        </FSWindow>
        <FSWindow width="500px" :modelValue="args.tab2">
            <template v-if="true">
              <FSCol>
                  <FSIconField />
              </FSCol>
            </template>
        </FSWindow>
      </div>
    `})};var t,r,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      tab1: 0,
      tab2: 0
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTabs,
      FSTab,
      FSText,
      FSWindow,
      FSCol,
      FSFadeOut,
      FSSlideGroup,
      FSButton,
      FSIconField
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSText> Two FSWindow </FSText>
        <FSWindow width="500px" :modelValue="args.tab1">
            <FSIconField />
        </FSWindow>
        <FSWindow width="500px" :modelValue="args.tab2">
            <template v-if="true">
              <FSCol>
                  <FSIconField />
              </FSCol>
            </template>
        </FSWindow>
      </div>
    \`
  })
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const To=["Variations"];export{o as Variations,To as __namedExportsOrder,go as default};
