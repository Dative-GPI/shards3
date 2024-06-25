import{G as N}from"./deviceOrganisations.mock-C1XXV9ce.js";import{b as v,d as B,c as P,y,z as T,A as F,B as u,Q as q,K as a,V as A,w as C,O as E,P as z,m as K,L as j,M,N as Q}from"./vue.esm-bundler-DeSao-KJ.js";import{F as H,V as J}from"./FSLoader-D9Qf30aF.js";import{_ as k}from"./FSCol-CA6NzDpV.js";import{_ as d}from"./FSRow-JJutUvlP.js";import{u as W,C as X}from"./useColors-Btze6ZPu.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Y}from"./VSpacer-CFNx9InD.js";import{F as Z}from"./FSDataTableUI-BG6ftX3V.js";import{C as ee}from"./base-Db9bJp6t.js";import{S as te}from"./serviceFactory-Bd5jifNi.js";import{C as _}from"./composableFactory-rrf4GM2L.js";import{u as ae}from"./FSFadeOut-B4C8PvXF.js";import{F as oe}from"./FSGroupTileUI-e1BB9-RJ.js";import{F as re}from"./FSSlideGroup-C1zVEZNV.js";import{F as ne}from"./FSTagGroup-D9A71Nml.js";import{F as se}from"./FSButton-BtJceuDF.js";import"./css-BnhLLynS.js";import"./color-XZPyE2lN.js";import"./theme-RQK62Xub.js";import"./dimensions-aXABR5Zz.js";import"./elevation-BBJMtRPf.js";import"./locale-BTkT-VzI.js";import"./proxiedModel-B9H_VIYa.js";import"./useRender-CIdmfI-I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./vue-router--jrIq8Jc.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-BwmyFmSj.js";import"./FSIcon-CWQns0S0.js";import"./VIcon-B0BI55vc.js";import"./tag-BL1d6r1f.js";import"./FSSpan-t6bMdSRn.js";import"./useSlots-DPxV8yUU.js";import"./useRules-DQ31e--d.js";import"./VSelectionControl-DWVZmIhS.js";import"./density-4sjlTnVP.js";import"./index-BWi4ltEp.js";import"./VLabel-CWiDHCZM.js";import"./VInput-DX4N6NPh.js";import"./index-BIb3aONP.js";import"./transition-CTQG5_JK.js";import"./FSCard-D6pS8x-_.js";import"./FSText-v_SJXlm2.js";import"./FSSearchField-yn3fHufm.js";import"./FSTextField-CU6cCRma.js";import"./VField-Dwj56xae.js";import"./loader-CnGjHJ-m.js";import"./VProgressCircular-DA_NN_fl.js";import"./resizeObserver-euslJwVY.js";import"./anchor-LC_hEQAj.js";import"./rounded-BOBir3aK.js";import"./VDefaultsProvider-DHsFAklf.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CrTEBV4I.js";import"./useTranslations-DAApg7Ob.js";import"./FSSelectField-g7AJpuJD.js";import"./FSDialogMenu-CgLexdRK.js";import"./VDialog--AywZFlO.js";import"./VOverlay-Dh7x6Oij.js";import"./display-CUoCREED.js";import"./lazy-B9cZ4h7g.js";import"./router-Cr7df_Je.js";import"./FSRadioGroup-CQPEmvlt.js";import"./FSRadio-BDrxAKVF.js";import"./VList-CKDIvLuI.js";import"./ssrBoot-BXIJ_jLM.js";import"./border-IVtV0L-L.js";import"./VImg-BljrNAqA.js";import"./VDivider-CPb7S374.js";import"./VSelect-BmOD2N_I.js";import"./VMenu-CbRbHjmn.js";import"./VSlideGroup-C7Ln-DYU.js";import"./group-BqOqgFvy.js";import"./FSDivider-Aem_Ip--.js";import"./FSChip-BNPvpZZj.js";import"./FSOptionGroup-DVZfi_fJ.js";import"./FSClickable-DwPeAUYS.js";import"./FSWrapGroup-CO7LA3W5.js";import"./FSToggleSet-R36jrHdy.js";import"./VBtn-D2I7zlII.js";import"./filter-De_Yj-mJ.js";import"./useAppOrganisationId-JzV73dfQ.js";import"./lodash-BiW_TGGX.js";import"./FSImage-CRVnL0LE.js";import"./base-BNnJ_ndD.js";import"./FSColor-Ch-lkVbR.js";import"./FSTile-BQIHtkyK.js";import"./FSTag-DT_837Vw.js";class ie{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}const S=v({}),le=new ie,me=()=>le.call(()=>({getTable:i=>S.value[i]!=null?S.value[i]:null,setTable:(i,n)=>{S.value[i]={...n}}}));class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class pe{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new ue(n)))??[]}}class de extends pe{constructor(t){super(t)}}const ce=()=>`${ee()}/user-organisation-tables`,U=e=>`${ce()}/${encodeURIComponent(e)}`,x=new te("userOrgansiationTable",de).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),ge=_.get(x),be=_.update(x),G=B({name:"FSLoadDataTable",components:{FSLoader:H,FSCol:k,FSRow:d},setup(){const{getColors:e}=W(),t=e(X.Background);return{style:P(()=>({"--fs-load-data-table-background-color":t.base}))}}});function fe(e,t,i,n,c,g){const o=y("FSLoader");return T(),F(k,{class:"fs-load-data-table",gap:"16px",style:q(e.style)},{default:u(()=>[a(d,{align:"bottom-center"},{default:u(()=>[a(o,{variant:"input"}),a(o,{variant:"button"}),a(Y),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1}),a(d,null,{default:u(()=>[a(o,{variant:"chip"}),a(o,{variant:"chip"}),a(o,{variant:"chip"})]),_:1}),a(J,{type:"table-row-divider@10"}),a(d,{align:"center-right"},{default:u(()=>[a(o,{height:"16px",width:"100px"}),a(o,{width:"120px",height:["40px","36px"]}),a(o,{variant:"button"}),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Se=D(G,[["render",fe]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const L=B({name:"FSDataTable",components:{FSLoadDataTable:Se,FSDataTableUI:Z},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:n}=ge(),{update:c}=be(),{getTable:g,setTable:o}=me(),{debounce:b,cancel:s}=ae(),m=v(!1),r=v({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),V=P(()=>({...r.value,headers:r.value.headers.map(l=>({...l,sort:l.value&&e.customSorts[l.value]||null,sortRaw:l.value&&e.customSortRaws[l.value]||null}))})),h=()=>{var l,w;r.value&&(o(e.tableCode,r.value),c(e.tableCode,{columns:r.value.headers.map(f=>({columnId:f.columnId,hidden:f.hidden,index:f.index})),rowsPerPage:r.value.rowsPerPage,sortByKey:((l=r.value.sortBy)==null?void 0:l.key)??null,sortByOrder:((w=r.value.sortBy)==null?void 0:w.order)??null,mode:r.value.mode}))};return A(()=>{s(),h()}),C(()=>e.tableCode,async()=>{if(e.tableCode){const l=g(e.tableCode);l?r.value=l:(await t(e.tableCode),n.value&&(r.value={headers:n.value.columns,sortBy:{key:n.value.sortByKey,order:n.value.sortByOrder},mode:n.value.mode,rowsPerPage:n.value.rowsPerPage,filters:{},page:1}))}m.value=!0},{immediate:!0}),C(()=>r.value,()=>{r.value&&m.value&&b(h,e.debounceTime)},{deep:!0}),{gettingUserOrganisationTable:i,computedTable:V,initialized:m,table:r}}});function ve(e,t,i,n,c,g){const o=y("FSLoadDataTable"),b=y("FSDataTableUI");return!e.initialized||e.gettingUserOrganisationTable?(T(),F(o,{key:0})):(T(),F(b,K({key:1,"onUpdate:rowsPerPage":t[0]||(t[0]=s=>e.table.rowsPerPage=s),"onUpdate:filters":t[1]||(t[1]=s=>e.table.filters=s),"onUpdate:headers":t[2]||(t[2]=s=>e.table.headers=s),"onUpdate:sortBy":t[3]||(t[3]=s=>e.table.sortBy=s),"onUpdate:mode":t[4]||(t[4]=s=>e.table.mode=s),"onUpdate:page":t[5]||(t[5]=s=>e.table.page=s)},{...e.computedTable,...e.$attrs}),E({_:2},[z(e.$slots,(s,m)=>({name:m,fn:u(r=>[j(e.$slots,m,M(Q(r)))])}))]),1040))}const $=D(L,[["render",ve]]);L.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ta={title:"Foundation/Core/Lists/DataTable",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{tableCode:"groups1",items:N,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}},customSortRaws:{none:(e,t)=>{if((e==null?void 0:e.id)==null&&(t==null?void 0:t.id)==null)return 0;if((e==null?void 0:e.id)==null||parseFloat(e.id)<parseFloat(t.id))return-1;if((t==null?void 0:t.id)==null||parseFloat(e.id)>parseFloat(t.id))return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:$,FSGroupTileUI:oe,FSSlideGroup:re,FSTagGroup:ne,FSButton:se},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var O,I,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const aa=["Variations"];export{p as Variations,aa as __namedExportsOrder,ta as default};
