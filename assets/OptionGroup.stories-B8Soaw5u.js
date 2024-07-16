import{F as o,a as l}from"./FSOptionGroup-B-jP65K_.js";import{F as s}from"./FSText-ykiRuhwH.js";import"./vue.esm-bundler-DC82FEWN.js";import"./FSClickable-Bk5I2JN4.js";import"./FSCard-DJrzS8t_.js";import"./FSCol-B7HQy3FB.js";import"./css-DYOPUjjE.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DoCXWKDP.js";import"./useColors-ATxZ3nb1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DMal9AfS.js";import"./VProgressCircular-BvwZAexL.js";import"./color-C5d3UYhE.js";import"./VIcon-C6jgSf5f.js";import"./FSSpan-CwfDYIua.js";import"./useSlots-V2mVelz6.js";import"./FSIcon-2B0NN_at.js";import"./FSSlideGroup-Buay-X2i.js";import"./uuid-DTaye2KM.js";import"./FSButton-DQTNQ7w6.js";import"./VSlideGroup-Ch4AqzX6.js";import"./index-Drj2M_tW.js";import"./display-v5wGO8bo.js";import"./group-dnu-odUE.js";import"./proxiedModel-BHphZos0.js";import"./locale-BC9z6YbT.js";import"./FSWrapGroup-BG-AaJX-.js";const E={title:"Foundation/Shared/OptionGroup",component:o,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),icon:`mdi-numeric-${e+1}`})),value1:[],values2:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-dice-${e+1}-outline`})),value2:null,values3:[...Array(6).keys()].map(e=>({id:e.toString(),icon:`mdi-hexagon-slice-${e+1}`})),value3:[0],value4:"0"}},render:(e,{argTypes:a})=>({components:{FSOptionGroup:o,FSOptionItem:l,FSText:s},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const z=["Variations"];export{r as Variations,z as __namedExportsOrder,E as default};
