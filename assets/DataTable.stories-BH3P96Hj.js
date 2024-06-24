import{G as N}from"./deviceOrganisations.mock-C1XXV9ce.js";import{b as v,d as B,c as P,y,z as T,A as F,B as u,Q as q,K as a,V as A,w as C,O as E,P as z,m as K,L as j,M,N as Q}from"./vue.esm-bundler-BLBBrD1D.js";import{F as H,V as J}from"./FSLoader-wJOBxBqI.js";import{_ as k}from"./FSCol-OnQTHx6W.js";import{_ as d}from"./FSRow-BZVvIgLd.js";import{u as W,C as X}from"./useColors-CxkvBPqy.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Y}from"./VSpacer-C8vjG_Ri.js";import{F as Z}from"./FSDataTableUI-Ba5E-H10.js";import{C as ee}from"./base-B_HXG24o.js";import{S as te}from"./serviceFactory-Bd5jifNi.js";import{C as _}from"./composableFactory-DeG9aq0N.js";import{u as ae}from"./FSFadeOut-NO6SWErB.js";import{F as oe}from"./FSGroupTileUI--uGtHVF5.js";import{F as re}from"./FSSlideGroup-Cw9KgMxr.js";import{F as ne}from"./FSTagGroup-B5P8g0-0.js";import{F as se}from"./FSButton-Ctk-czeT.js";import"./css-DU1X_fj1.js";import"./color-T1BTTgdX.js";import"./theme-BarOeKl-.js";import"./dimensions-DNYoshM5.js";import"./elevation-0FWsrb7Y.js";import"./locale-Cf2S8s-Z.js";import"./proxiedModel-BG8nj0M_.js";import"./useRender-CTGr_J4i.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-3zl-tJp_.js";import"./vue-router-DIgVXaZ7.js";import"./uuid-DTaye2KM.js";import"./FSCheckbox-DJm00ahm.js";import"./FSIcon-CgTCRlvx.js";import"./VIcon-Cq9uvnQL.js";import"./tag-kXOxSspb.js";import"./FSSpan-DNHXfhpi.js";import"./useSlots-CKjiHxqT.js";import"./useRules-CaBH9gl0.js";import"./VSelectionControl-BO5kGMEg.js";import"./density-Dp1dzyfT.js";import"./index-BeqDwarK.js";import"./VLabel-wbs_UrmL.js";import"./VInput-DwN0FzsD.js";import"./index-Co1LeIbZ.js";import"./transition-DqSOegbJ.js";import"./FSCard-fA5aX9kp.js";import"./FSText-DOaWXjiL.js";import"./FSSearchField-B6OTU-GY.js";import"./FSTextField-Czy1Uao0.js";import"./VField-B7mGtqRI.js";import"./loader-FLWPcWRx.js";import"./VProgressCircular-CvGEkpD-.js";import"./resizeObserver-DkufbBgm.js";import"./anchor-3JQV6orx.js";import"./rounded-Ax8hVtG-.js";import"./VDefaultsProvider-O9GsbpKE.js";import"./forwardRefs-DWGaNmQL.js";import"./index-C6izM9Xn.js";import"./useTranslations-CT7kkIpn.js";import"./FSSelectField-C0X9CiK6.js";import"./FSDialogMenu-DdgKI6bE.js";import"./VDialog-D4ZljmXU.js";import"./VOverlay-6m9RWc9-.js";import"./display-CmJVsopJ.js";import"./lazy-BsW_HNaI.js";import"./router-Ce0kmIVt.js";import"./FSRadioGroup-DdyptP-D.js";import"./FSRadio-CNInwCt1.js";import"./VList-CoTUwsMv.js";import"./ssrBoot-BC9AlB5N.js";import"./border-ChMgRsg0.js";import"./VImg-BwDapMIg.js";import"./VDivider-BDr2QhjS.js";import"./VSelect-DjiDlqwN.js";import"./VMenu-BeRcuKeG.js";import"./VSlideGroup-L33WvfT3.js";import"./group-BPLcoGlv.js";import"./FSDivider-BPCfmGuF.js";import"./FSChip-DA7j5rr-.js";import"./FSOptionGroup-D3_7GDwl.js";import"./FSClickable-BcsUSOO8.js";import"./FSWrapGroup-C0fzjWQA.js";import"./FSToggleSet-CzyrnPJD.js";import"./VBtn-KXFWn89r.js";import"./filter-CPgh2H3B.js";import"./useAppOrganisationId-B9lMIXAZ.js";import"./lodash-BiW_TGGX.js";import"./FSImage-DCiPMM8N.js";import"./base-BNnJ_ndD.js";import"./FSColor-Dp-Z1efC.js";import"./FSTile-DZj0ToBy.js";import"./FSTag-C3kTEXS0.js";class ie{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}const S=v({}),le=new ie,me=()=>le.call(()=>({getTable:i=>S.value[i]!=null?S.value[i]:null,setTable:(i,n)=>{S.value[i]={...n}}}));class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class pe{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new ue(n)))??[]}}class de extends pe{constructor(t){super(t)}}const ce=()=>`${ee()}/user-organisation-tables`,U=e=>`${ce()}/${encodeURIComponent(e)}`,x=new te("userOrgansiationTable",de).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),ge=_.get(x),be=_.update(x),G=B({name:"FSLoadDataTable",components:{FSLoader:H,FSCol:k,FSRow:d},setup(){const{getColors:e}=W(),t=e(X.Background);return{style:P(()=>({"--fs-load-data-table-background-color":t.base}))}}});function fe(e,t,i,n,c,g){const o=y("FSLoader");return T(),F(k,{class:"fs-load-data-table",gap:"16px",style:q(e.style)},{default:u(()=>[a(d,{align:"bottom-center"},{default:u(()=>[a(o,{variant:"input"}),a(o,{variant:"button"}),a(Y),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1}),a(d,null,{default:u(()=>[a(o,{variant:"chip"}),a(o,{variant:"chip"}),a(o,{variant:"chip"})]),_:1}),a(J,{type:"table-row-divider@10"}),a(d,{align:"center-right"},{default:u(()=>[a(o,{height:"16px",width:"100px"}),a(o,{width:"120px",height:["40px","36px"]}),a(o,{variant:"button"}),a(o,{variant:"button"}),a(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Se=D(G,[["render",fe]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const L=B({name:"FSDataTable",components:{FSLoadDataTable:Se,FSDataTableUI:Z},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:n}=ge(),{update:c}=be(),{getTable:g,setTable:o}=me(),{debounce:b,cancel:s}=ae(),m=v(!1),r=v({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),V=P(()=>({...r.value,headers:r.value.headers.map(l=>({...l,sort:l.value&&e.customSorts[l.value]||null,sortRaw:l.value&&e.customSortRaws[l.value]||null}))})),h=()=>{var l,w;r.value&&(o(e.tableCode,r.value),c(e.tableCode,{columns:r.value.headers.map(f=>({columnId:f.columnId,hidden:f.hidden,index:f.index})),rowsPerPage:r.value.rowsPerPage,sortByKey:((l=r.value.sortBy)==null?void 0:l.key)??null,sortByOrder:((w=r.value.sortBy)==null?void 0:w.order)??null,mode:r.value.mode}))};return A(()=>{s(),h()}),C(()=>e.tableCode,async()=>{if(e.tableCode){const l=g(e.tableCode);l?r.value=l:(await t(e.tableCode),n.value&&(r.value={headers:n.value.columns,sortBy:{key:n.value.sortByKey,order:n.value.sortByOrder},mode:n.value.mode,rowsPerPage:n.value.rowsPerPage,filters:{},page:1}))}m.value=!0},{immediate:!0}),C(()=>r.value,()=>{r.value&&m.value&&b(h,e.debounceTime)},{deep:!0}),{gettingUserOrganisationTable:i,computedTable:V,initialized:m,table:r}}});function ve(e,t,i,n,c,g){const o=y("FSLoadDataTable"),b=y("FSDataTableUI");return!e.initialized||e.gettingUserOrganisationTable?(T(),F(o,{key:0})):(T(),F(b,K({key:1,"onUpdate:rowsPerPage":t[0]||(t[0]=s=>e.table.rowsPerPage=s),"onUpdate:filters":t[1]||(t[1]=s=>e.table.filters=s),"onUpdate:headers":t[2]||(t[2]=s=>e.table.headers=s),"onUpdate:sortBy":t[3]||(t[3]=s=>e.table.sortBy=s),"onUpdate:mode":t[4]||(t[4]=s=>e.table.mode=s),"onUpdate:page":t[5]||(t[5]=s=>e.table.page=s)},{...e.computedTable,...e.$attrs}),E({_:2},[z(e.$slots,(s,m)=>({name:m,fn:u(r=>[j(e.$slots,m,M(Q(r)))])}))]),1040))}const $=D(L,[["render",ve]]);L.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ta={title:"Foundation/Core/Lists/DataTable",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{tableCode:"groups1",items:N,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}},customSortRaws:{none:(e,t)=>{if((e==null?void 0:e.id)==null&&(t==null?void 0:t.id)==null)return 0;if((e==null?void 0:e.id)==null||parseFloat(e.id)<parseFloat(t.id))return-1;if((t==null?void 0:t.id)==null||parseFloat(e.id)>parseFloat(t.id))return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:$,FSGroupTileUI:oe,FSSlideGroup:re,FSTagGroup:ne,FSButton:se},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
