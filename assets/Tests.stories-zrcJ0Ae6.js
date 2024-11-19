import e from"./FSIconField-Dty-czGr.js";import{_ as a}from"./FSSlideGroup-bnXYYW-T.js";import{_ as F}from"./FSFadeOut-ClVU4caD.js";import{F as s}from"./FSButton-44O228oj.js";import{F as d}from"./FSWindow-ed6WJT5P.js";import{F as S}from"./FSText-CV92BjRj.js";import{F as p,a as l}from"./FSTab-C4FMe8T7.js";import{F as c}from"./FSCol-D8gLxM2E.js";import"./vue.esm-bundler-Ddr6MgcY.js";import"./FSToggleSet-Chnxajrx.js";import"./FSWrapGroup-mhpasbJF.js";import"./uuid-DTaye2KM.js";import"./useSlots-C9mZt9CQ.js";import"./useColors-C3GOyDHx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-D55tBrU4.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./proxiedModel-BYnu2EOK.js";import"./index-B-qTxNvr.js";import"./color-DdAXPAA0.js";import"./display-BUGvawh3.js";import"./VIcon-zho7mIKV.js";import"./locale-CA7yUTVs.js";import"./resizeObserver-wyIwxSZb.js";import"./VInput-D-xdUwRR.js";import"./transition-BtBp4lzQ.js";import"./density-B5LNz2JK.js";import"./form-vji0TmoR.js";import"./FSTextField-B9Yl6IUE.js";import"./FSBaseField-CPhXHC60.js";import"./FSSpan-Bh1X02mE.js";import"./FSRow-CSQtiyAx.js";import"./useRules-BfiZMl38.js";import"./VField-DrieYqTb.js";import"./VLabel-DauhzWNW.js";import"./loader-CNy9VCwd.js";import"./VProgressCircular-PqDihA6U.js";import"./anchor-BdD5yCeG.js";import"./rounded-BoPqla0T.js";import"./VDefaultsProvider-B6zOjuu3.js";import"./forwardRefs-DWGaNmQL.js";import"./index-lTYthPHq.js";import"./FSIcon-dnXFGGQr.js";import"./FSButtonNextIcon-D7F-G6Uh.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./FSClickable-Dz5j9aqP.js";import"./FSCard-CxH8ejsx.js";import"./VBtn-GP0Uljy4.js";import"./border-BiXRHevL.js";import"./elevation-BNOJtsSY.js";import"./dimensions-DL1AZk-8.js";import"./router-C4YP2PAT.js";import"./index-BF2Ge4Ib.js";import"./lazy-BsoIJm2g.js";import"./ssrBoot-BXK87sqN.js";const yo={title:"Foundation/Shared/Tests",component:p,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tab1:0,tab2:0}},render:(m,{argTypes:n})=>({components:{FSTabs:p,FSTab:l,FSText:S,FSWindow:d,FSCol:c,FSFadeOut:F,FSSlideGroup:a,FSButton:s,FSIconField:e},props:Object.keys(n),setup(){return{...m}},template:`
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
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const _o=["Variations"];export{o as Variations,_o as __namedExportsOrder,yo as default};
