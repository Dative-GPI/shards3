import{F as m}from"./FSSelectField-BxqOi3HU.js";import{F as o}from"./FSButton-BpyUfJIg.js";import{F as a}from"./FSImage-DYrQmZ2M.js";import{F as l}from"./FSCol-DyDZsJ9U.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSDialogMenu-B5BSmELO.js";import"./FSCard-CN9NbS7f.js";import"./FSRow-D9oM1Ufa.js";import"./css-rhgMLwoH.js";import"./useBreakpoints-DVmyWqF2.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./color-B0htL_ZM.js";import"./proxiedModel-BN8GSVE7.js";import"./anchor-CiFPvmMB.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./locale-BGMMnFfJ.js";import"./router-lEm-a6ws.js";import"./transition-BvKGRC-_.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-gtoPHKCV.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Czmt2YBZ.js";import"./useSlots-zwOl0abH.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./index-D2mfwXxT.js";import"./VIcon-Bo7R9vIQ.js";import"./resizeObserver-CTZzan_-.js";import"./FSToggleSet-C0KkFsPn.js";import"./FSWrapGroup-L0hGNovc.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./FSBaseField-CVTPeQEI.js";import"./FSSpan-WKxYfmnu.js";import"./VSpacer-DLFo12A6.js";import"./FSTextField-DiTX7r-c.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./VLabel-hsX9xD9s.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./rounded-C73YOAN4.js";import"./index-BPQCAcxH.js";import"./FSCheckbox-CaqPs9O0.js";import"./FSIcon-CF3g_zZI.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-BkMq8VeO.js";import"./FSLoader-BuPx1Vmx.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-vBBbKX-y.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-7B3TLkE6.js";import"./VMenu-OPxqXTkz.js";import"./FSClickable-CWKuMNrW.js";import"./FSImageUI-DRh0C2Kt.js";import"./useImages-Dec2UUgD.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-Dh-waxQE.js";import"./useAppAuthToken-BNiaspL4.js";const Ue={title:"Foundation/Shared/Selects/SelectUserOrganisation",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",name:"Larmina El Akmar Betouche",imageId:"1"},{id:"2",name:"Hubert Bonnisseur de la Bath",imageId:"2"},{id:"3",name:"Jack Jefferson",imageId:"3"}],value1:null,value2:null,value3:null,value4:null}},render:(n,{argTypes:r})=>({components:{FSSelectField:m,FSButton:o,FSImage:a,FSCol:l},props:Object.keys(r),setup(){return{...n}},template:`
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
