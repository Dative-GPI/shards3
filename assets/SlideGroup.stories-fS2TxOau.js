import{_ as r}from"./FSSlideGroup-8udoapu6.js";import{_ as p}from"./FSRow-CSQtiyAx.js";import"./vue.esm-bundler-Ddr6MgcY.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-C4Myj5uR.js";import"./FSButton-DZMcpMR1.js";import"./FSRouterLink-BEGxvgrv.js";import"./vue-router-9d6tV3EF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSClickable-D7sul-uP.js";import"./FSCard-Bfo4Z0Zf.js";import"./FSCol-D8gLxM2E.js";import"./css-CxoeZkpP.js";import"./useBreakpoints-BMg9gIvD.js";import"./useColors-DnoeDx-P.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D55tBrU4.js";import"./VProgressCircular-PqDihA6U.js";import"./color-DdAXPAA0.js";import"./resizeObserver-wyIwxSZb.js";import"./VIcon-zho7mIKV.js";import"./FSSpan-Bh1X02mE.js";import"./useSlots-C9mZt9CQ.js";import"./FSIcon-DfjSexyz.js";import"./VSlideGroupItem-DFjaovtS.js";import"./group-Chxk22vU.js";import"./proxiedModel-BYnu2EOK.js";import"./index-B-qTxNvr.js";import"./display-BUGvawh3.js";import"./locale-CA7yUTVs.js";const H={title:"Foundation/Shared/Global/Containers/SlideGroup",component:r,tags:["autodocs"],argTypes:{}},t={render:n=>({components:{FSSlideGroup:r,FSRow:p},setup(){return{args:n}},template:`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSSlideGroup 
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </div>
    `}),args:{width:"600px",height:"fit-content"}};var o,i,e;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSlideGroup,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSSlideGroup 
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </div>
    \`
  }),
  args: {
    width: '600px',
    height: 'fit-content'
  }
}`,...(e=(i=t.parameters)==null?void 0:i.docs)==null?void 0:e.source}}};const I=["Default"];export{t as Default,I as __namedExportsOrder,H as default};
