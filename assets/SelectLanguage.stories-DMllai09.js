import{F as l}from"./FSSelectField-DVBWPSYv.js";import{_ as m}from"./FSIcon-CO4wAGng.js";import{_ as a}from"./FSCol-DLJAvXXo.js";import"./vue.esm-bundler-Cq4W5tyU.js";import"./FSDialogMenu-CwNpi4PZ.js";import"./FSCard-Czuobvvo.js";import"./FSRow-unE_3RO6.js";import"./css-DEg_ftav.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-9ZzibzMy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-C1riLSun.js";import"./VDialog-B52rGpGO.js";import"./VOverlay-BOOZPgii.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DRHDjI8D.js";import"./proxiedModel-GwPoz8hG.js";import"./anchor-BydgbQy2.js";import"./dimensions-DmQ2LvlH.js";import"./display-CuwymjaA.js";import"./lazy-BqN4G6w1.js";import"./locale-HbAtAWzw.js";import"./router-DTnNLfUf.js";import"./transition-BzbLScdo.js";import"./VDefaultsProvider-BkmqrQ_Z.js";import"./FSSlideGroup-DdgeZc-s.js";import"./uuid-DTaye2KM.js";import"./FSButton-C8WCeTIt.js";import"./FSClickable-rknJFO_P.js";import"./VProgressCircular-D_7DfGyD.js";import"./tag-CMGfbRyB.js";import"./FSSpan-D_j1_q9W.js";import"./useSlots-DT61BqFu.js";import"./index-CS87Qvuo.js";import"./group-Daa3BzEI.js";import"./VIcon-DEItKADI.js";import"./FSToggleSet-D9zoPLp2.js";import"./FSWrapGroup-CY7TtL3l.js";import"./VInput-B4B8eXxy.js";import"./density-qG_glApz.js";import"./form-BLrazfEI.js";import"./FSBaseField-CEaQuxbm.js";import"./VSpacer-CeIMSlXt.js";import"./FSTextField-CAIJ7Yct.js";import"./useRules-Dr6aWKP3.js";import"./VField-CN2Sm-Zz.js";import"./VLabel-m2J9LCHM.js";import"./loader-BrBoJqhy.js";import"./rounded-CT5UQ7DA.js";import"./index-BFUNLZ7G.js";import"./FSCheckbox-D6cJ9jKZ.js";import"./VSelectionControl-Cv0xTIuO.js";import"./index-CrjNNQA3.js";import"./FSFadeOut-CPTbsoJn.js";import"./VImg-C2ZZ8L57.js";import"./elevation-D7qOrqBH.js";import"./FSRadio-CZcII2-V.js";import"./VList-10owgtsE.js";import"./ssrBoot-B-1_IeCP.js";import"./border-9F-9anIp.js";import"./VSelect-BJiXcIcO.js";import"./VMenu-Cux52w-S.js";const he={title:"Foundation/Shared/Selects/SelectLanguage",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",label:"French (France)",icon:"$france"},{id:"2",label:"English (United States)",icon:"$unitedStates"},{id:"3",label:"Spanish (Spain)",icon:"$spain"}],value1:null,value2:null,value3:null,value4:null}},render:(o,{argTypes:r})=>({components:{FSSelectField:l,FSIcon:m,FSCol:a},props:Object.keys(r),setup(){return{...o}},template:`
    <FSCol>
      <FSSelectField
        label="Language"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with toggleset disabled"
        placeholder="One or more languages selected"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :multiple="true"
        :items="args.items"
        v-model="args.value3"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple and toggleSet disabled"
        placeholder="One or more languages selected"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
    </FSCol>`})};var t,n,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "1",
        label: "French (France)",
        icon: "$france"
      }, {
        id: "2",
        label: "English (United States)",
        icon: "$unitedStates"
      }, {
        id: "3",
        label: "Spanish (Spain)",
        icon: "$spain"
      }],
      value1: null,
      value2: null,
      value3: null,
      value4: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSSelectField,
      FSIcon,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSSelectField
        label="Language"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with toggleset disabled"
        placeholder="One or more languages selected"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple"
        placeholder="One or more languages selected"
        :toggleSet="true"
        :multiple="true"
        :items="args.items"
        v-model="args.value3"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Language with multiple and toggleSet disabled"
        placeholder="One or more languages selected"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSIcon
            v-if="item.icon"
          >
            {{ item.icon }}
          </FSIcon>
        </template>
      </FSSelectField>
    </FSCol>\`
  })
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const be=["Variations"];export{e as Variations,be as __namedExportsOrder,he as default};