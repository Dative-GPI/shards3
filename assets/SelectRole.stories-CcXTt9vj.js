import{F as l}from"./FSSelectField-CvyvsNwI.js";import{F as r}from"./FSButton-Bc8wnoJs.js";import{F as m}from"./FSChip-BRgg5HGZ.js";import{F as a}from"./FSIcon-CyS8zLbP.js";import{F as s}from"./FSCol-CvoATp5Q.js";import"./vue.esm-bundler-CWdIlc2r.js";import"./FSDialogMenu-D9HgWnX3.js";import"./FSCard-BxmDRzjE.js";import"./FSRow-BnsweOMX.js";import"./css-BWDYXGFo.js";import"./useBreakpoints-INFVV7da.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-CrLBSafx.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DkyKeiX7.js";import"./VDialog-B02D0PNk.js";import"./VOverlay-m3LxlMVX.js";import"./forwardRefs-DWGaNmQL.js";import"./color-B0htL_ZM.js";import"./proxiedModel-BN8GSVE7.js";import"./anchor-CiFPvmMB.js";import"./dimensions-Cku-Ba4r.js";import"./display-4460MzAg.js";import"./lazy-Bq8C33UW.js";import"./locale-BGMMnFfJ.js";import"./router-lEm-a6ws.js";import"./transition-BvKGRC-_.js";import"./VDefaultsProvider-DPT0EuQR.js";import"./FSSlideGroup-qOOOxz_-.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-DhMVExMM.js";import"./useSlots-zwOl0abH.js";import"./VSlideGroupItem-CGRm5ZGO.js";import"./group-D4GO8Lly.js";import"./index-D2mfwXxT.js";import"./VIcon-Bo7R9vIQ.js";import"./resizeObserver-CTZzan_-.js";import"./FSToggleSet-7WnTN5nE.js";import"./FSWrapGroup-BTCmZHSW.js";import"./VInput-Clj2quuL.js";import"./density-Cf5q3L_6.js";import"./form-D-VMHmUh.js";import"./FSBaseField-BlQcLyVQ.js";import"./FSSpan-Bnbdrku6.js";import"./VSpacer-DLFo12A6.js";import"./FSTextField-BLVYx7ij.js";import"./useRules-CY0rKEBQ.js";import"./VField-Bf3tV3N7.js";import"./VLabel-hsX9xD9s.js";import"./loader-DuCiGAVb.js";import"./VProgressCircular-CbhEC8Of.js";import"./rounded-C73YOAN4.js";import"./index-BPQCAcxH.js";import"./FSCheckbox-bKRtBqVc.js";import"./VSelectionControl-Bl6rLftH.js";import"./index-E_I8r0kf.js";import"./FSFadeOut-BhgieYVE.js";import"./FSLoader-h4slsrT9.js";import"./elevation-DH_sKWqU.js";import"./FSRadio-n9JXvfPW.js";import"./VList-Cl6AOEM5.js";import"./ssrBoot-QID7OAaG.js";import"./border-ByF30Ccd.js";import"./VImg-Bj7MyRJQ.js";import"./VSelect-D5P4hFmo.js";import"./VMenu-OPxqXTkz.js";import"./FSClickable-JTcIAbNo.js";const Be={title:"Foundation/Shared/Selects/SelectRole",component:l,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},e={args:{args:{items:[{id:"01",icon:"mdi-account",label:"Role 1",chipColor:"warning",chipLabel:"Custom",type:1},{id:"02",icon:"mdi-account-outline",label:"Role 2",chipColor:"warning",chipLabel:"Custom",type:1},{id:"11",icon:"mdi-account-circle",label:"Role 11",chipColor:"primary",chipLabel:"Shared",type:2},{id:"12",icon:"mdi-account-circle-outline",label:"Role 12",chipColor:"primary",chipLabel:"Shared",type:2}],value1:null,value2:null,value3:null,value4:null}},render:(i,{argTypes:n})=>({components:{FSSelectField:l,FSButton:r,FSChip:m,FSIcon:a,FSCol:s},props:Object.keys(n),setup(){return{...i}},template:`
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
}`,...(o=(p=e.parameters)==null?void 0:p.docs)==null?void 0:o.source}}};const Re=["Variations"];export{e as Variations,Re as __namedExportsOrder,Be as default};