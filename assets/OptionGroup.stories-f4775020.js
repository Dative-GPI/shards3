import{F as o,a as l}from"./FSOptionGroup-d8583fc0.js";import{F as s}from"./FSText-f60941a6.js";import"./vue.esm-bundler-41eda46b.js";import"./FSClickable-416c7a7e.js";import"./FSCard-8067a4d4.js";import"./FSCol-282cc158.js";import"./css-35e8563f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./FSRow-1508d56d.js";import"./useColors-baaa98f5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-be1bd2db.js";import"./VProgressCircular-58a86136.js";import"./color-45753032.js";import"./useRender-dd35ddd1.js";import"./resizeObserver-d58b88df.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./FSIcon-713345eb.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./FSButton-d0a22eb6.js";import"./VSlideGroup-aeb2e4a4.js";import"./index-dc0570e5.js";import"./display-4adc39d9.js";import"./goto-50a9e63e.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./group-2589989a.js";import"./FSWrapGroup-d3a1dbf2.js";const J={title:"Foundation/Shared/OptionGroup",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),icon:`mdi-numeric-${e+1}`})),value1:[],values2:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-dice-${e+1}-outline`})),value2:null,values3:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-hexagon-slice-${e+1}`})),value3:[0],value4:"0"}},render:(e,{argTypes:a})=>({components:{FSOptionGroup:o,FSOptionItem:l,FSText:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSOptionGroup
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="success"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="dark"
        :multiple="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSOptionItem
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSOptionGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSOptionGroup
        padding="8px"
        gap="8px"
        :modelValue="args.value4"
      >
        <FSOptionItem
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'success' : 'error'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'success' : 'error'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'success' : 'error'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'success' : 'error'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'success' : 'error'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSOptionGroup>
    </div>`})};var t,i,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      values1: [...Array(10).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-numeric-\${i + 1}\`
      })),
      value1: [],
      values2: [...Array(6).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-dice-\${i + 1}-outline\`
      })),
      value2: null,
      values3: [...Array(6).keys()].map(i => ({
        id: i.toString(),
        icon: \`mdi-hexagon-slice-\${i + 1}\`
      })),
      value3: [0],
      value4: "0"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSOptionGroup,
      FSOptionItem,
      FSText
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSOptionGroup
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="success"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSOptionGroup
        variant="slide"
        activeColor="dark"
        :multiple="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSOptionItem
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSOptionGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSOptionGroup
        padding="8px"
        gap="8px"
        :modelValue="args.value4"
      >
        <FSOptionItem
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'success' : 'error'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'success' : 'error'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'success' : 'error'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'success' : 'error'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'success' : 'error'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSOptionItem
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'success' : 'error'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSOptionGroup>
    </div>\`
  })
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const K=["Variations"];export{r as Variations,K as __namedExportsOrder,J as default};
