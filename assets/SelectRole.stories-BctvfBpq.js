import{F as l}from"./FSSelectField-Cg6Rj-c-.js";import{F as r}from"./FSButton-BsHdwUXb.js";import{F as m}from"./FSChip-QWvQ-7YA.js";import{_ as a}from"./FSIcon-BnX9YboA.js";import{_ as s}from"./FSCol-B2fYQH2g.js";import"./vue.esm-bundler-BSwA4uJo.js";import"./FSDialogMenu-g6t3pdyN.js";import"./FSCard-Dku7tZ0W.js";import"./FSRow-C55kyKDN.js";import"./css-DuQjrBfn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CVvq99EA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./theme-CJjFLd5E.js";import"./VDialog-Cfb5ruMd.js";import"./VOverlay-DiiSVz7E.js";import"./forwardRefs-DWGaNmQL.js";import"./color-D9V7QeIP.js";import"./proxiedModel-DL-L2p1V.js";import"./anchor-CkzTvcVP.js";import"./dimensions-BjZLW5mo.js";import"./display-CjnjtP-8.js";import"./lazy-9JS-XFcA.js";import"./locale-CpxwvVE1.js";import"./router-Cl1v_ijq.js";import"./transition-_APBsTwD.js";import"./VDefaultsProvider-DoLrCdpM.js";import"./FSSlideGroup-wzQo7jGf.js";import"./uuid-DTaye2KM.js";import"./useSlots-BFQFTsAj.js";import"./index-C3j_FW12.js";import"./group-CrHjrh7w.js";import"./VIcon-5UD9vI9m.js";import"./tag-VYeYJ1FC.js";import"./VProgressCircular-Dac4kH3U.js";import"./FSToggleSet-Da413psM.js";import"./FSWrapGroup-D1guK-6f.js";import"./VInput-QVRW4ijF.js";import"./density-DkgHqMu0.js";import"./form-DP5gBA00.js";import"./FSBaseField-DFSFck2t.js";import"./FSSpan-DVGtoaou.js";import"./VSpacer-Bggt-xuP.js";import"./FSTextField-CBBV8faX.js";import"./useRules-BFq3Zlaa.js";import"./VField-CfZoudOu.js";import"./VLabel-BifS6p-d.js";import"./loader-DjCr0vPF.js";import"./rounded-CO2AQG9_.js";import"./index-BhqZCjBr.js";import"./FSCheckbox-Biwr0a4k.js";import"./VSelectionControl-CoQs29sw.js";import"./index-YRxtzmsB.js";import"./FSFadeOut-uPE_tDk4.js";import"./VImg-DoSXtjfN.js";import"./elevation-CjdYMzTr.js";import"./FSRadio-BNYQ0jDS.js";import"./VList-CmQF8csV.js";import"./ssrBoot-rqOOPvOG.js";import"./border-D-bqjaHb.js";import"./VSelect-Fm84tqTh.js";import"./VMenu-B0NqnZmW.js";import"./FSClickable-DxIbWXqH.js";const fe={title:"Foundation/Shared/Selects/SelectRole",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"01",icon:"mdi-account",label:"Role 1",chipColor:"warning",chipLabel:"Custom",type:1},{id:"02",icon:"mdi-account-outline",label:"Role 2",chipColor:"warning",chipLabel:"Custom",type:1},{id:"11",icon:"mdi-account-circle",label:"Role 11",chipColor:"primary",chipLabel:"Shared",type:2},{id:"12",icon:"mdi-account-circle-outline",label:"Role 12",chipColor:"primary",chipLabel:"Shared",type:2}],value1:null,value2:null,value3:null,value4:null}},render:(i,{argTypes:n})=>({components:{FSSelectField:l,FSButton:r,FSChip:m,FSIcon:a,FSCol:s},props:Object.keys(n),setup(){return{...i}},template:`
    <FSCol>
      <FSSelectField
        label="Role"
        placeholder="One or more roles selected"
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
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with toggleset disabled"
        placeholder="One or more roles selected"
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
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple"
        placeholder="One or more roles selected"
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
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple and toggleSet disabled"
        placeholder="One or more roles selected"
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
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
    </FSCol>`})};var t,p,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "01",
        icon: "mdi-account",
        label: "Role 1",
        chipColor: "warning",
        chipLabel: "Custom",
        type: 1
      }, {
        id: "02",
        icon: "mdi-account-outline",
        label: "Role 2",
        chipColor: "warning",
        chipLabel: "Custom",
        type: 1
      }, {
        id: "11",
        icon: "mdi-account-circle",
        label: "Role 11",
        chipColor: "primary",
        chipLabel: "Shared",
        type: 2
      }, {
        id: "12",
        icon: "mdi-account-circle-outline",
        label: "Role 12",
        chipColor: "primary",
        chipLabel: "Shared",
        type: 2
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
      FSChip,
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
        label="Role"
        placeholder="One or more roles selected"
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
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with toggleset disabled"
        placeholder="One or more roles selected"
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
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple"
        placeholder="One or more roles selected"
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
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSSelectField
        label="Role with multiple and toggleSet disabled"
        placeholder="One or more roles selected"
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
        <template
          #item-append="{ item }"
        >
          <FSChip
            :color="item.chipColor"
            :label="item.chipLabel"
            :editable="false"
          />
        </template>
        <template
          #toggle-set-item="props"
        >
          <FSButton
            :prependIcon="props.item.icon"
            :variant="props.getVariant(props.item)"
            :color="props.getColor(props.item)"
            :class="props.getClass(props.item)"
            :label="props.item.label"
            @click="props.toggle(props.item)"
          >
            <template
              v-if="props.item.type"
              #append
            >
              <FSChip
                :color="props.item.chipColor"
                :label="props.item.chipLabel"
                :editable="false"
              />
            </template>
          </FSButton>
        </template>
      </FSSelectField>
    </FSCol>\`
  })
}`,...(o=(p=e.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const ye=["Variations"];export{e as Variations,ye as __namedExportsOrder,fe as default};
