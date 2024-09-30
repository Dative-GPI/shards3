import{_ as r}from"./FSSlideGroup-DhNsnnDZ.js";import{_ as p}from"./FSRow-D546kqFt.js";import"./vue.esm-bundler-CxS4_7kK.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-3a_bTLDz.js";import"./FSButton-DAhZ0Raz.js";import"./FSClickable-DxBn6HxC.js";import"./FSCard-BjvZ5YiQ.js";import"./FSCol-Co9r7Klj.js";import"./css-D18ueKtB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CaDWSZLL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BEfrBPRQ.js";import"./VProgressCircular-BpEvERgl.js";import"./color-DpQhyQC8.js";import"./resizeObserver-CogQzEnD.js";import"./tag-ByYBjpGI.js";import"./FSSpan-3STIP-79.js";import"./useSlots-BHms3Yb6.js";import"./FSIcon-C8jESFXA.js";import"./VIcon-C65wMs2G.js";import"./VSlideGroupItem-CtpoFhNR.js";import"./group-Bl9vmDol.js";import"./proxiedModel-DAUSUEYq.js";import"./index-D0m5TbR6.js";import"./display-B-O23xq9.js";import"./locale-DgxPCyxi.js";const A={title:"Foundation/Shared/Global/Containers/SlideGroup",component:r,tags:["autodocs"],argTypes:{}},t={render:n=>({components:{FSSlideGroup:r,FSRow:p},setup(){return{args:n}},template:`
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
    `}),args:{width:"600px",height:"fit-content"}};var o,e,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=t.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,A as default};
