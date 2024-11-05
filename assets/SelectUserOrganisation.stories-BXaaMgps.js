import{F as m}from"./FSSelectField-D65DWRuU.js";import{F as o}from"./FSButton-v1WOpc1k.js";import{F as a}from"./FSImage-ffhN4Yyt.js";import{F as l}from"./FSCol-BvqytbKT.js";import"./vue.esm-bundler-l-siv0w9.js";import"./FSDialogMenu-2hgW8eHf.js";import"./FSCard-DL4SLpmS.js";import"./FSRow-CbEgVN08.js";import"./css-CP2C2-Fe.js";import"./useBreakpoints-C5IzU8MC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Bs2u1_6J.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-C2MnUTNI.js";import"./VDialog-BXBtUIC2.js";import"./VOverlay-Dwc5HfFO.js";import"./forwardRefs-DWGaNmQL.js";import"./color-De-77ojK.js";import"./proxiedModel-KpugNjnZ.js";import"./anchor-C2Y5FAYh.js";import"./dimensions-9QoL2_-9.js";import"./display-BWzbFTnS.js";import"./lazy-DuBjUwFb.js";import"./locale-CTwwbPAi.js";import"./router-CIHGWUSM.js";import"./transition-AZsQzdUZ.js";import"./VDefaultsProvider-CfqLszOw.js";import"./FSSlideGroup-BC2CNv0p.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-UXxoG-0T.js";import"./useSlots-C_N_WAus.js";import"./VSlideGroupItem-BXc1MbHI.js";import"./group-Dk9dfj8w.js";import"./index-B089V-om.js";import"./VIcon-D6ql3n-m.js";import"./resizeObserver-CjMDZ25n.js";import"./FSToggleSet-CIA7S_a2.js";import"./FSWrapGroup-cmIYWMlH.js";import"./VInput-BkciVi2d.js";import"./density-Dt_pQxP_.js";import"./form-CLJq5y5w.js";import"./FSBaseField-CpNJbDpF.js";import"./FSSpan-Di50moR2.js";import"./FSTextField-CUJPYjwS.js";import"./useRules-QHk8iD4m.js";import"./VField-DaI8sxeG.js";import"./VLabel-Dswg7Ov5.js";import"./loader-avZiZGL_.js";import"./VProgressCircular-RI9KLr8_.js";import"./rounded-uHrmshEX.js";import"./index-C6OXlV61.js";import"./FSCheckbox-BlsFOPfN.js";import"./FSIcon-uIr9VdFq.js";import"./VSelectionControl-Br2dHavx.js";import"./index-Cr304eD2.js";import"./FSFadeOut-K3Ty9hFX.js";import"./FSLoader-kY4Od3NB.js";import"./elevation-BZDXH0CP.js";import"./FSRadio-CqjI9hQz.js";import"./VList-Bzb582fb.js";import"./ssrBoot-DD96sY1N.js";import"./border-DXAdoVnk.js";import"./VImg-CZhZqiQJ.js";import"./VSelect-BKJXoopL.js";import"./VMenu-DQq2E1HW.js";import"./FSRouterLink-BeSr6Wr-.js";import"./vue-router-C4bv40Tb.js";import"./FSClickable-DbvAho3u.js";import"./FSImageUI-DrOfkU7V.js";import"./useImages-CdDysFg4.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-C5FI4e55.js";import"./useAppAuthToken-CwPnmj0J.js";const Je={title:"Foundation/Shared/Selects/SelectUserOrganisation",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",name:"Larmina El Akmar Betouche",imageId:"1"},{id:"2",name:"Hubert Bonnisseur de la Bath",imageId:"2"},{id:"3",name:"Jack Jefferson",imageId:"3"}],value1:null,value2:null,value3:null,value4:null}},render:(n,{argTypes:r})=>({components:{FSSelectField:m,FSButton:o,FSImage:a,FSCol:l},props:Object.keys(r),setup(){return{...n}},template:`
    <FSCol>
      <FSSelectField
        label="User"
        placeholder="One or more users selected"
        itemTitle="name"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSImage
            v-if="item.imageId"
            height="26px"
            width="26px"
            :imageId="item.imageId"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="User with toggleset disabled"
        placeholder="One or more users selected"
        itemTitle="name"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSImage
            v-if="item.imageId"
            height="26px"
            width="26px"
            :imageId="item.imageId"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="User with multiple"
        placeholder="One or more users selected"
        itemTitle="name"
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
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="User with multiple and toggleSet disabled"
        placeholder="One or more users selected"
        itemTitle="name"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSImage
            v-if="item.imageId"
            height="26px"
            width="26px"
            :imageId="item.imageId"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
    </FSCol>`})};var t,p,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "1",
        name: "Larmina El Akmar Betouche",
        imageId: "1"
      }, {
        id: "2",
        name: "Hubert Bonnisseur de la Bath",
        imageId: "2"
      }, {
        id: "3",
        name: "Jack Jefferson",
        imageId: "3"
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
      FSButton,
      FSImage,
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
        label="User"
        placeholder="One or more users selected"
        itemTitle="name"
        :toggleSet="true"
        :items="args.items"
        v-model="args.value1"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSImage
            v-if="item.imageId"
            height="26px"
            width="26px"
            :imageId="item.imageId"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="User with toggleset disabled"
        placeholder="One or more users selected"
        itemTitle="name"
        :items="args.items"
        v-model="args.value2"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSImage
            v-if="item.imageId"
            height="26px"
            width="26px"
            :imageId="item.imageId"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="User with multiple"
        placeholder="One or more users selected"
        itemTitle="name"
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
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="User with multiple and toggleSet disabled"
        placeholder="One or more users selected"
        itemTitle="name"
        :multiple="true"
        :items="args.items"
        v-model="args.value4"
      >
        <template
          #item-prepend="{ item }"
        >
          <FSImage
            v-if="item.imageId"
            height="26px"
            width="26px"
            :imageId="item.imageId"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.name"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.imageId"
              #prepend
            >
              <FSImage
                height="26px"
                width="26px"
                :imageId="props.item.imageId"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
    </FSCol>\`
  })
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Ee=["Variations"];export{e as Variations,Ee as __namedExportsOrder,Je as default};
