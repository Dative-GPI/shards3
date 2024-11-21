import{F as m}from"./FSSelectField-ChNtQfMF.js";import{F as o}from"./FSButton-BzTwanlk.js";import{F as a}from"./FSImage-BYLHEFm3.js";import{F as l}from"./FSCol-DLyNVOXQ.js";import"./vue.esm-bundler-Zcuj-zyO.js";import"./VList-nN2lrumh.js";import"./FSCard-4bilSlvW.js";import"./FSRow-4Qz6Bbpg.js";import"./css-YWErTUWV.js";import"./useBreakpoints-IB1lZo1P.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Cz5tOQmp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DppimMvq.js";import"./VDialog-TaqcJ_9B.js";import"./VOverlay-CfTyIhml.js";import"./forwardRefs-DWGaNmQL.js";import"./color-mm3JSYKM.js";import"./proxiedModel-Xz4IZg0a.js";import"./anchor-BS5WaiJh.js";import"./dimensions-BWgpWc0X.js";import"./display-Db__yhk9.js";import"./scopeId-CPcZlDEY.js";import"./locale-Beavd5eP.js";import"./router-DnAkll3L.js";import"./transition-shOmLEJh.js";import"./VDefaultsProvider-BGrIgR0V.js";import"./index-D14OnwAh.js";import"./VIcon-DsLd3bsf.js";import"./ssrBoot-B8tyBOTn.js";import"./border-C0mvfulf.js";import"./density-DMrbDfgW.js";import"./elevation-BrHPj82J.js";import"./rounded-3VvIKpNW.js";import"./index-CMMTOWvF.js";import"./VImg-DaKoZ_qJ.js";import"./index-DnJxNQYu.js";import"./FSSlideGroup-CtBhRuPR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BV5U7bCA.js";import"./useSlots-DzOFTavN.js";import"./VSlideGroupItem-B0P2Hyp-.js";import"./group-ATTNrdHt.js";import"./resizeObserver-BOpsWgva.js";import"./FSToggleSet-DhGGvbF6.js";import"./FSWrapGroup-DSD82cKU.js";import"./VInput-DP_atbEr.js";import"./form-ChxmsGl9.js";import"./FSBaseField-DHv7mzhZ.js";import"./FSSpan-Bb6VK1Ws.js";import"./FSTextField-BcsUOOXo.js";import"./useRules-CvuqAlPS.js";import"./VField-BtCsV974.js";import"./VLabel-C9T0eyno.js";import"./loader-EtqkGPwj.js";import"./VProgressCircular-B73DQeX0.js";import"./FSCheckbox-CunxM6rm.js";import"./FSIcon-CKEWDmaC.js";import"./VSelectionControl-u1dDpc9z.js";import"./FSFadeOut-CeMJmSZZ.js";import"./FSLoader-CRmsosiO.js";import"./FSRadio-DnH66ibu.js";import"./VSelect-pAG77NtN.js";import"./VMenu-C3kJxa_y.js";import"./FSRouterLink-BdruYWDU.js";import"./vue-router-D-G4AqQz.js";import"./FSClickable-CUaqPDhz.js";import"./FSImageUI-Q0M2a9Ft.js";import"./useImages-B4PSfnOs.js";import"./base-CmdGny12.js";import"./serviceFactory-DTTRhbEw.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-DJbHulE4.js";import"./useAppAuthToken-yimxtjYQ.js";const Ue={title:"Foundation/Shared/Selects/SelectUserOrganisation",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",name:"Larmina El Akmar Betouche",imageId:"1"},{id:"2",name:"Hubert Bonnisseur de la Bath",imageId:"2"},{id:"3",name:"Jack Jefferson",imageId:"3"}],value1:null,value2:null,value3:null,value4:null}},render:(n,{argTypes:r})=>({components:{FSSelectField:m,FSButton:o,FSImage:a,FSCol:l},props:Object.keys(r),setup(){return{...n}},template:`
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
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Je=["Variations"];export{e as Variations,Je as __namedExportsOrder,Ue as default};
