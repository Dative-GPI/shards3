import{G as l}from"./deviceOrganisations.mock-DefcSTE0.js";import{F as a}from"./FSDataTable-BB5-nK24.js";import{F as p}from"./FSGroupTileUI-DPH_xTuU.js";import{F as s}from"./FSSlideGroup-DIxTxi2r.js";import{F as u}from"./FSTagGroup-jalgxRo6.js";import{F as d}from"./FSButton-BTMhVVG_.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./VImg-Da3f9R37.js";import"./css-CbCR1nbl.js";import"./useColors-C8ZtkfWa.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D8Xq3tpQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-CxiNukW_.js";import"./dimensions-CzmId2tp.js";import"./elevation-BH8AnXAq.js";import"./locale-CMOn_BOp.js";import"./rounded-BWAMdTmW.js";import"./transition-CQDsmRPd.js";import"./index-jvVque46.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VSpacer-YT0o3rZT.js";import"./FSDataTableUI-DvtDcA0M.js";import"./vue-router-Cn9ishJ4.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-B0fh_Rt7.js";import"./FSIcon-DYxpTLuT.js";import"./VIcon-DptP6m9n.js";import"./tag-DxanhlL3.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-DcHbqw-H.js";import"./density-BM1QLeh4.js";import"./proxiedModel-BE9FlVMJ.js";import"./index-DjMs4W1j.js";import"./VLabel-BPqk0hPA.js";import"./VInput-Dln06fOF.js";import"./index-joExpvzU.js";import"./form-CgybbRT3.js";import"./FSCard--Cna8vUC.js";import"./FSText-DhsiUbil.js";import"./FSSearchField-CYZsKeA5.js";import"./FSTextField-Mn4Vq1hb.js";import"./FSBaseField-DEWTBdWD.js";import"./VField-DaMwaaXY.js";import"./loader-CbF0edCX.js";import"./VProgressCircular-DnrgPZB3.js";import"./anchor-DHDhudvL.js";import"./VDefaultsProvider-CztrVRTm.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DyPMaPr_.js";import"./FSSelectField-DWYJc-CP.js";import"./FSDialogMenu-qysyFDhf.js";import"./VDialog-1j0g9zHx.js";import"./VOverlay-BT06S-GU.js";import"./display-Cx0CWWL8.js";import"./lazy-CqgcpKMK.js";import"./router-CbAEScZe.js";import"./FSToggleSet-CIDzaDwe.js";import"./FSWrapGroup-DqR9bQla.js";import"./FSFadeOut-CB131b1X.js";import"./FSRadio-B3ak8RSo.js";import"./VList-DgcfM2IV.js";import"./ssrBoot-D42UTWSS.js";import"./border-CgF0busY.js";import"./VSelect-DRIwPunu.js";import"./VMenu-DOKVMVxb.js";import"./group-DgCbl5w-.js";import"./FSDivider-BJmJfrRD.js";import"./FSChip-BzumMGJt.js";import"./FSOptionGroup-WFCNk2ta.js";import"./FSClickable-9Zbg77oy.js";import"./VBtn-CJflX_3O.js";import"./filter-CkY1Z-lm.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./FSImage-GlEhSKTp.js";import"./FSImageUI-IzO1fAdz.js";import"./base-CmdGny12.js";import"./FSColor-CxWE2NHJ.js";import"./FSTile-4me5zwt1.js";import"./FSTag--B310hl1.js";const Qt={title:"Foundation/Core/Lists/DataTable",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tableCode:"groups1",items:l,value:[],itemTo:t=>({name:"group",params:{groupId:t.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(t,e)=>{if(t==null&&e==null||t.length==e.length)return 0;if(t==null||t.length<e.length)return-1;if(e==null||t.length>e.length)return 1}},customSortRaws:{none:(t,e)=>{if((t==null?void 0:t.id)==null&&(e==null?void 0:e.id)==null)return 0;if((t==null?void 0:t.id)==null||parseFloat(t.id)<parseFloat(e.id))return-1;if((e==null?void 0:e.id)==null||parseFloat(t.id)>parseFloat(e.id))return 1}}}},render:(t,{argTypes:e})=>({components:{FSDataTable:a,FSGroupTileUI:p,FSSlideGroup:s,FSTagGroup:u,FSButton:d},props:Object.keys(e),setup(){return{...t,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          :customSorts="args.customSorts"
          :customSortRaws="args.customSortRaws"
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.none="{ item }">
            {{ item.id }}
          </template>
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`})};var i,n,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    args: {
      tableCode: "groups1",
      items: GROUPS,
      value: [],
      itemTo: (item: any) => ({
        name: 'group',
        params: {
          groupId: item.id
        }
      }),
      clickRow: () => {
        console.log("clicked");
      },
      customSorts: {
        'tags': (a: any, b: any) => {
          if (a == null && b == null || a.length == b.length) {
            return 0;
          }
          if (a == null || a.length < b.length) {
            return -1;
          }
          if (b == null || a.length > b.length) {
            return 1;
          }
        }
      },
      customSortRaws: {
        'none': (a: any, b: any) => {
          if (a?.id == null && b?.id == null) {
            return 0;
          }
          if (a?.id == null || parseFloat(a.id) < parseFloat(b.id)) {
            return -1;
          }
          if (b?.id == null || parseFloat(a.id) > parseFloat(b.id)) {
            return 1;
          }
        }
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataTable,
      FSGroupTileUI,
      FSSlideGroup,
      FSTagGroup,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      const getColor = (row: any) => {
        if (row) {
          if (row.code === "number1") {
            return "primary";
          } else {
            return "success";
          }
        }
      };
      return {
        ...args,
        getColor
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          :customSorts="args.customSorts"
          :customSortRaws="args.customSortRaws"
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.none="{ item }">
            {{ item.id }}
          </template>
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>\`
  })
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};const Wt=["Variations"];export{o as Variations,Wt as __namedExportsOrder,Qt as default};
