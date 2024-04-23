import{F as i}from"./FSToggleSet-89d4360e.js";import{_ as o}from"./FSButton-892461f4.js";import{F as s}from"./FSText-8c2dec91.js";import"./vue.esm-bundler-96d0a5cc.js";import"./FSSlideGroup-ee02b27e.js";import"./FSButtonNextIcon-9bb04157.js";import"./useColors-a5c6eb1e.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./theme-c90fedb5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useSlots-8f090340.js";import"./css-187645c7.js";import"./VSlideGroup-56c5a05a.js";import"./index-09e6aad2.js";import"./useRender-864589a6.js";import"./display-382afec5.js";import"./group-f931bb93.js";import"./proxiedModel-80fa8b72.js";import"./tag-2ee5b375.js";import"./locale-ebcc9fd1.js";import"./resizeObserver-608b050a.js";import"./VIcon-356fc7cc.js";import"./color-0e7f3458.js";import"./FSWrapGroup-33fbf5d1.js";import"./VInput-b0770754.js";import"./transition-2009bd3b.js";import"./density-9320d724.js";import"./FSClickable-3046c0b6.js";import"./FSCard-907ca4bc.js";import"./FSCol-71088900.js";import"./FSRow-959288e5.js";import"./VProgressCircular-b96acd02.js";import"./FSSpan-572d1125.js";import"./FSIcon-1f958509.js";const L={title:"Foundation/Shared/ToggleSet",component:i,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{values1:[...Array(10).keys()].map(e=>({id:e.toString(),label:`Choice number ${e+1}`})),value1:[],values2:[{id:"1",prependIcon:"mdi-home-thermometer-outline",label:"Keep at room temperature"},{id:"2",prependIcon:"mdi-pool-thermometer",label:"Keep just nice for skinny dipping"},{id:"3",prependIcon:"mdi-snowflake-thermometer",label:"Keep cool"},{id:"4",prependIcon:"mdi-sun-thermometer-outline",label:"Keep at full power of the sun"}],value2:null,values3:[...Array(10).keys()].map(e=>({id:e.toString(),label:`Skier ${e+1}`})),value3:[],value4:"0"}},render:(e,{argTypes:l})=>({components:{FSToggleSet:i,FSButton:o,FSText:s},props:Object.keys(l),setup(){return{...e}},template:`
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
