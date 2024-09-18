import{F as m}from"./FSSelectField-R8OzCLdx.js";import{F as o}from"./FSButton-77cfmuX3.js";import{F as a}from"./FSImage-BSHLJI6z.js";import{F as l}from"./FSCol-BU2q2sTe.js";import"./vue.esm-bundler-BSyvBTC9.js";import"./FSDialogMenu-DSPGm4fK.js";import"./FSCard-BinAVVx_.js";import"./FSRow-DzlUM3r6.js";import"./css-0IiqzUPc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Ccf8xVyg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-D4rXHj3O.js";import"./VDialog-BkP6MFQ7.js";import"./VOverlay-CLFcrAVK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-BygXFKwQ.js";import"./proxiedModel-Bq4wip6p.js";import"./anchor-D9N-895C.js";import"./dimensions-DyYT4L19.js";import"./display-BMkR1-zV.js";import"./lazy-CAOrKziU.js";import"./locale-C-s_GJlL.js";import"./router-D2IrSaAD.js";import"./transition-CNA6wh-m.js";import"./VDefaultsProvider-YWdCRIjF.js";import"./FSSlideGroup-HxrzZDKP.js";import"./uuid-DTaye2KM.js";import"./useSlots-P12pG1X5.js";import"./index-CHbvZ5Sj.js";import"./group-CBCTR8u6.js";import"./VIcon-BIpY_noq.js";import"./tag-DB5D_XjQ.js";import"./VProgressCircular-Dh9H7lZx.js";import"./FSToggleSet-BDkTog43.js";import"./FSWrapGroup-DUGqUei2.js";import"./VInput-DO9fMQeR.js";import"./density-CDPzHPmZ.js";import"./form-B61Sg6X-.js";import"./FSBaseField-D7aNDTnY.js";import"./FSSpan-CCGpb4KF.js";import"./VSpacer-C4plVoTE.js";import"./FSTextField-BRxSBTNG.js";import"./useRules-B3HKjmia.js";import"./VField-DndYz9t7.js";import"./VLabel-owjBjdIA.js";import"./loader-pPiux2KM.js";import"./rounded-Dg8mz8II.js";import"./index-D_lBla-s.js";import"./FSCheckbox-ILpIKg_O.js";import"./FSIcon-D0oLoXA8.js";import"./VSelectionControl-BRDFiqFl.js";import"./index-DPxysH4G.js";import"./FSFadeOut-BJ1ngUIg.js";import"./FSLoader-hEATKEG-.js";import"./elevation-Ben4zuE4.js";import"./FSRadio-ByoRox_c.js";import"./VList-BSxk2mkg.js";import"./ssrBoot-SGvAq9J5.js";import"./border-njGtMOdT.js";import"./VImg-DW7Ik4XH.js";import"./VSelect-C2EXjQHz.js";import"./VMenu-BVgNprPc.js";import"./FSClickable-DytVXb9R.js";import"./FSImageUI-RgjYdf_W.js";import"./useImages-BaeRdzQ-.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-wHNy9kQa.js";const ke={title:"Foundation/Shared/Selects/SelectUserOrganisation",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",name:"Larmina El Akmar Betouche",imageId:"1"},{id:"2",name:"Hubert Bonnisseur de la Bath",imageId:"2"},{id:"3",name:"Jack Jefferson",imageId:"3"}],value1:null,value2:null,value3:null,value4:null}},render:(n,{argTypes:r})=>({components:{FSSelectField:m,FSButton:o,FSImage:a,FSCol:l},props:Object.keys(r),setup(){return{...n}},template:`
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
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Oe=["Variations"];export{e as Variations,Oe as __namedExportsOrder,ke as default};
