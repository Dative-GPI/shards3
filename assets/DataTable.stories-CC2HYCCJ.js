import{G as l}from"./deviceOrganisations.mock-DefcSTE0.js";import{F as a}from"./FSDataTable-BTMRZtYS.js";import{F as p}from"./FSGroupTileUI-CLZnFFku.js";import{F as s}from"./FSSlideGroup-CaV4GRaB.js";import{F as u}from"./FSTagGroup-DN-ANLxP.js";import{F as d}from"./FSButton-BeXPz3qD.js";import"./vue.esm-bundler-Vj2X7okO.js";import"./VImg-iJp2dxPS.js";import"./css-CbCR1nbl.js";import"./useColors-ClGgFu9Q.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DqOMA9k1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-Dk23S21P.js";import"./dimensions-CBrtQk_X.js";import"./elevation-DH7kyzD7.js";import"./locale-CMOn_BOp.js";import"./rounded-B-50KYhN.js";import"./transition-Cs7QtK7U.js";import"./index-DQeMThUY.js";import"./FSCol-Bk577joi.js";import"./FSRow-BuYwVvwM.js";import"./VSpacer-BJ2TWwuy.js";import"./FSDataTableUI-CRQD7kcl.js";import"./vue-router-Cn9ishJ4.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BNEUzkt_.js";import"./FSIcon-CNrZYw3j.js";import"./VIcon-Dc5M3VhK.js";import"./tag-BDy8Psij.js";import"./FSSpan-etgUZXmX.js";import"./useSlots-DXmhvOIb.js";import"./useRules-DpnTqc7T.js";import"./VSelectionControl-BYXKZDmZ.js";import"./density-BWgXlOb-.js";import"./proxiedModel-CZPY81Tp.js";import"./index-BN7Lbnw3.js";import"./VLabel-CtKTiIK0.js";import"./VInput-CifUC8kS.js";import"./index-7QBgy7JM.js";import"./form-BN2rR47-.js";import"./FSCard-IkM7vPXg.js";import"./FSText-CWxdqVl0.js";import"./FSSearchField-D_cdyx7b.js";import"./FSTextField-CMP-67X5.js";import"./FSBaseField-Uq_chVlu.js";import"./VField-C1LOclAH.js";import"./loader-DsDTT_wf.js";import"./VProgressCircular-BALYDMME.js";import"./anchor-J8DF-zwD.js";import"./VDefaultsProvider-3kZaGa5j.js";import"./forwardRefs-DWGaNmQL.js";import"./useTranslations-DyPMaPr_.js";import"./FSSelectField-COuX4_2X.js";import"./FSDialogMenu-DJMBxSqq.js";import"./VDialog-skjiTtId.js";import"./VOverlay-Dml741yE.js";import"./display-B4Z--0w1.js";import"./lazy-Ceu0wY4v.js";import"./router-DPbzaFf1.js";import"./FSToggleSet-BQSY5XEo.js";import"./FSWrapGroup-DNGL2TLb.js";import"./FSFadeOut-CORcN4YC.js";import"./FSRadio-CMU-kDTj.js";import"./VList-6ZTQMrmw.js";import"./ssrBoot-D42UTWSS.js";import"./border-BD8WTLKh.js";import"./VSelect-C_IVisdW.js";import"./VMenu-BOpQjLNS.js";import"./group-CT1H1YXM.js";import"./FSDivider-CJ8R3g7K.js";import"./FSChip-c4zDvu8x.js";import"./FSOptionGroup-aO3arvhV.js";import"./FSClickable-B6i4bUTy.js";import"./VBtn-8V3HVfv8.js";import"./filter-KqM1uUBX.js";import"./base-Cf5ASDDk.js";import"./useAppOrganisationId-Cm3pwMtR.js";import"./serviceFactory-Bd5jifNi.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-B0937_6N.js";import"./FSImage-C2ooQW7b.js";import"./FSImageUI-CbS1ss7O.js";import"./base-CmdGny12.js";import"./FSColor-Cu2RLHbq.js";import"./FSTile-ChDO9HHG.js";import"./FSTag-CddFq-0w.js";const Qt={title:"Foundation/Core/Lists/DataTable",component:a,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{tableCode:"groups1",items:l,value:[],itemTo:t=>({name:"group",params:{groupId:t.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(t,e)=>{if(t==null&&e==null||t.length==e.length)return 0;if(t==null||t.length<e.length)return-1;if(e==null||t.length>e.length)return 1}},customSortRaws:{none:(t,e)=>{if((t==null?void 0:t.id)==null&&(e==null?void 0:e.id)==null)return 0;if((t==null?void 0:t.id)==null||parseFloat(t.id)<parseFloat(e.id))return-1;if((e==null?void 0:e.id)==null||parseFloat(t.id)>parseFloat(e.id))return 1}}}},render:(t,{argTypes:e})=>({components:{FSDataTable:a,FSGroupTileUI:p,FSSlideGroup:s,FSTagGroup:u,FSButton:d},props:Object.keys(e),setup(){return{...t,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
