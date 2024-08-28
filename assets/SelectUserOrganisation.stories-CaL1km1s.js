import{F as m}from"./FSSelectField-DQs1YWn8.js";import{F as r}from"./FSButton-DC-WKUnK.js";import{F as a}from"./FSImage-Bxc569qS.js";import{_ as l}from"./FSCol-BA_LQqMv.js";import"./vue.esm-bundler--l9E1zCM.js";import"./FSDialogMenu-2Sog7wcL.js";import"./FSCard-BmtixItE.js";import"./FSRow-DW_Nd3uI.js";import"./css-CqyMbT8T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-Na5M-jYy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-uJWLcFzd.js";import"./VDialog-CEZ-m3nI.js";import"./VOverlay-CiTOWjN9.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DkN3uAGq.js";import"./proxiedModel-DBJRU-Dx.js";import"./anchor-CJDpEDtq.js";import"./dimensions-BKNjgbGk.js";import"./display-8UJ6HxQ1.js";import"./lazy-Bq-CkOF6.js";import"./locale-DRqPrS0N.js";import"./router-B0OmHOdA.js";import"./transition-CYrBIr8o.js";import"./VDefaultsProvider-Dnoh-HtE.js";import"./FSSlideGroup-PC9JFQCq.js";import"./uuid-DTaye2KM.js";import"./useSlots-sbMHjG0F.js";import"./index-U_F843Id.js";import"./group-DYO-GdsM.js";import"./VIcon-CRzxwZ_P.js";import"./VProgressCircular-DiflYTWZ.js";import"./FSToggleSet-BtiTla3P.js";import"./FSWrapGroup-CPrCAtj5.js";import"./VInput-exXSDqX0.js";import"./density-BES7uE0q.js";import"./form-26vhu4DQ.js";import"./FSBaseField-DyRfpoCH.js";import"./FSSpan-Drxl5cqQ.js";import"./VSpacer-CY3ZXRlU.js";import"./FSTextField-DT4mycsE.js";import"./useRules-eaGGgTH2.js";import"./VField-4heSQh6E.js";import"./VLabel-CtWliwLG.js";import"./loader-BeDPJNvc.js";import"./rounded-B2xBfeOT.js";import"./index-CDY7nOpr.js";import"./FSCheckbox-CuaZdV3q.js";import"./FSIcon-CA5AHnUB.js";import"./VSelectionControl-CjbL6NQr.js";import"./index-mEzhRiE5.js";import"./FSFadeOut-DZ611XP-.js";import"./VImg-BDKzFUYZ.js";import"./elevation-Cf1uc8UZ.js";import"./FSRadio-gVzwmWVQ.js";import"./VList-DEWTNoUD.js";import"./ssrBoot-De1byr4N.js";import"./border-CWknNQjA.js";import"./VSelect-BDwb1eeM.js";import"./VMenu-DGJWui2w.js";import"./FSClickable-CWlCNUE_.js";import"./FSImageUI-BbHPabXL.js";import"./base-CmdGny12.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-BJn24iiy.js";const Be={title:"Foundation/Shared/Selects/SelectUserOrganisation",component:m,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"1",name:"Larmina El Akmar Betouche",imageId:"1"},{id:"2",name:"Hubert Bonnisseur de la Bath",imageId:"2"},{id:"3",name:"Jack Jefferson",imageId:"3"}],value1:null,value2:null,value3:null,value4:null}},render:(n,{argTypes:o})=>({components:{FSSelectField:m,FSButton:r,FSImage:a,FSCol:l},props:Object.keys(o),setup(){return{...n}},template:`
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
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const Ce=["Variations"];export{e as Variations,Ce as __namedExportsOrder,Be as default};
