import{F as i}from"./FSToggleSet-f583e42c.js";import{_ as o}from"./FSButton-aca46646.js";import{F as s}from"./FSText-107f4924.js";import"./vue.esm-bundler-0c8496bd.js";import"./FSSlideGroup-3bf9e88b.js";import"./FSButtonNextIcon-1274b69a.js";import"./useColors-b1c35b1c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-3745e9f1.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useSlots-d0001844.js";import"./css-0fb78066.js";import"./VSlideGroup-8312a613.js";import"./index-5d52efe8.js";import"./useRender-8701d95b.js";import"./display-237b16bb.js";import"./group-8484219c.js";import"./proxiedModel-19525b39.js";import"./tag-0cc02cbd.js";import"./locale-4d9bcfcb.js";import"./resizeObserver-98822b75.js";import"./VIcon-7bba82fc.js";import"./color-e947437a.js";import"./FSWrapGroup-53ffd2f5.js";import"./VInput-523a6986.js";import"./transition-893c383a.js";import"./density-22f26472.js";import"./FSClickable-c9a0944c.js";import"./FSCard-4f1ec4e8.js";import"./FSCol-0a323bdc.js";import"./FSRow-547598b4.js";import"./VProgressCircular-91035e99.js";import"./FSSpan-dff588c4.js";import"./FSIcon-e8919096.js";const L={title:"Foundation/Shared/ToggleSet",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),value1:[],values2:[{id:"1",prependIcon:"mdi-home-thermometer-outline",label:"Keep at room temperature"},{id:"2",prependIcon:"mdi-pool-thermometer",label:"Keep just nice for skinny dipping"},{id:"3",prependIcon:"mdi-snowflake-thermometer",label:"Keep cool"},{id:"4",prependIcon:"mdi-sun-thermometer-outline",label:"Keep at full power of the sun"}],value2:null,values3:[...Array(10).keys()].map(e=>({id:e.toString(),label:`Skier ${e+1}`})),value3:[],value4:"0"}},render:(e,{argTypes:l})=>({components:{FSToggleSet:i,FSButton:o,FSText:s},props:Object.keys(l),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 30px;">
      <FSText> Props only, wrap, single selection, not required </FSText>
      <FSToggleSet
        variant="wrap"
        buttonVariant="standard"
        activeVariant="standard"
        buttonColor="light"
        activeColor="primary"
        :multiple="false"
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="full"
        buttonColor="warning"
        activeColor="success"
        :multiple="false"
        :required="true"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="standard"
        buttonColor="dark"
        activeColor="light"
        :multiple="true"
        :required="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSButton
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSToggleSet>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSToggleSet
        gap="24px"
        :modelValue="args.value4"
      >
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'primary' : 'light'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'primary' : 'light'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'primary' : 'light'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'primary' : 'light'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'primary' : 'light'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'primary' : 'light'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSToggleSet>
    </div>`})};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    args: {
      values1: [...Array(10).keys()].map(i => ({
        id: i.toString(),
        label: \`Choice number \${i + 1}\`
      })),
      value1: [],
      values2: [{
        id: "1",
        prependIcon: "mdi-home-thermometer-outline",
        label: "Keep at room temperature"
      }, {
        id: "2",
        prependIcon: "mdi-pool-thermometer",
        label: "Keep just nice for skinny dipping"
      }, {
        id: "3",
        prependIcon: "mdi-snowflake-thermometer",
        label: "Keep cool"
      }, {
        id: "4",
        prependIcon: "mdi-sun-thermometer-outline",
        label: "Keep at full power of the sun"
      }],
      value2: null,
      values3: [...Array(10).keys()].map(i => ({
        id: i.toString(),
        label: \`Skier \${i + 1}\`
      })),
      value3: [],
      value4: "0"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSToggleSet,
      FSButton,
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
      <FSToggleSet
        variant="wrap"
        buttonVariant="standard"
        activeVariant="standard"
        buttonColor="light"
        activeColor="primary"
        :multiple="false"
        :required="false"
        :values="args.values1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props only, slide, single selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="full"
        buttonColor="warning"
        activeColor="success"
        :multiple="false"
        :required="true"
        :values="args.values2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Props & item template, slide, multiple selection, required </FSText>
      <FSToggleSet
        variant="slide"
        buttonVariant="standard"
        activeVariant="standard"
        buttonColor="dark"
        activeColor="light"
        :multiple="true"
        :required="true"
        :values="args.values3"
        v-model="args.value3"
      >
        <template #item>
          <FSButton
            appendIcon="mdi-ski-water"
          />
        </template>
      </FSToggleSet>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Default template, slide, single selection, not required </FSText>
      <FSToggleSet
        gap="24px"
        :modelValue="args.value4"
      >
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-off-outline"
          :color="(args.value4 === '0') ? 'primary' : 'light'"
          @click="() => args.value4 === '0' ? args.value4 = null : args.value4 = '0'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-outline"
          :color="(args.value4 === '1') ? 'primary' : 'light'"
          @click="() => args.value4 === '1' ? args.value4 = null : args.value4 = '1'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-1"
          :color="(args.value4 === '2') ? 'primary' : 'light'"
          @click="() => args.value4 === '2' ? args.value4 = null : args.value4 = '2'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-2"
          :color="(args.value4 === '3') ? 'primary' : 'light'"
          @click="() => args.value4 === '3' ? args.value4 = null : args.value4 = '3'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-3"
          :color="(args.value4 === '4') ? 'primary' : 'light'"
          @click="() => args.value4 === '4' ? args.value4 = null : args.value4 = '4'"
        />
        <FSButton
          variant="icon"
          icon="mdi-wifi-strength-4"
          :color="(args.value4 === '5') ? 'primary' : 'light'"
          @click="() => args.value4 === '5' ? args.value4 = null : args.value4 = '5'"
        />
      </FSToggleSet>
    </div>\`
  })
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const M=["Variations"];export{t as Variations,M as __namedExportsOrder,L as default};
