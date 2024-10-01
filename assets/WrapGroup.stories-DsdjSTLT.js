import{F as n}from"./FSWrapGroup-D3vzPBUf.js";import{_ as d}from"./FSRow-CmD7j8Pv.js";import"./vue.esm-bundler-DjjVIdVI.js";import"./uuid-DTaye2KM.js";import"./useSlots-DzSo5JdB.js";import"./useColors-CdvgF10X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-v7reDO7s.js";import"./css-BkQhD285.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./group-CgGrJ6ok.js";import"./proxiedModel-G1bil5DU.js";import"./index-DOC0sH28.js";import"./color-BKGJvBEr.js";import"./display-CRYv_UDL.js";import"./VIcon-CzaRZDPI.js";import"./tag-DT601Ssr.js";import"./locale-Dn84bpGK.js";import"./resizeObserver-C4lJhwTD.js";const _={title:"Foundation/Shared/Global/Containers/WrapGroup",component:n,tags:["autodocs"],argTypes:{width:{control:"text"},height:{control:"text"}}},e={render:o=>({components:{FSWrapGroup:n,FSRow:d},setup(){return{args:o}},template:`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div v-for="(item, index) in 25" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
      <div style="margin:40px" />
      <div style="display: flex; flex-direction: column; border: 1px dotted black; width: 50%">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div 
              v-for="(item, index) in 26" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"
              style="flex: 1 0 120px;"
            >
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
    `}),args:{width:"600px",height:"fit-content"}};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSWrapGroup,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div v-for="(item, index) in 25" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
      <div style="margin:40px" />
      <div style="display: flex; flex-direction: column; border: 1px dotted black; width: 50%">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div 
              v-for="(item, index) in 26" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"
              style="flex: 1 0 120px;"
            >
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
    \`
  }),
  args: {
    width: '600px',
    height: 'fit-content'
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,_ as default};
