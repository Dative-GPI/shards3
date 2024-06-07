import{G as K}from"./deviceOrganisations.mock-a1cdf2c0.js";import{j as B,f as R,g as _,D as v,E as y,F as h,G as u,W as z,P as n,Z as H,w as M,U as Q,V as W,A as Z,Q as J,R as X,S as Y}from"./vue.esm-bundler-f632b118.js";import{F as ee,V as te}from"./FSLoader-af2e647d.js";import{_ as O}from"./FSCol-606e8271.js";import{_ as p}from"./FSRow-76f4ad1e.js";import{u as ae,C as oe}from"./useColors-c1b539be.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{V as re}from"./VSpacer-e4feda29.js";import{F as ne}from"./FSDataTableUI-ad75be69.js";import{C as se}from"./base-dd7352d9.js";import{S as ie}from"./serviceFactory-2dfad3af.js";import{C as k}from"./composableFactory-0b8943d1.js";import{u as le}from"./FSFadeOut-0ebdb15e.js";import{F as me}from"./FSGroupTileUI-5943e2c5.js";import{F as ue}from"./FSSlideGroup-3d07e2c7.js";import{F as de}from"./FSTagGroup-b2c41aa5.js";import{F as pe}from"./FSButton-1e8cfafa.js";import"./css-185b4786.js";import"./color-1b8c6bf4.js";import"./theme-a477330d.js";import"./dimensions-44367821.js";import"./elevation-cd810633.js";import"./locale-b2746b51.js";import"./proxiedModel-f3c71c8a.js";import"./useRender-7972ae0c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./vue-router-59257536.js";import"./uuid-08309875.js";import"./FSCheckbox-5ebd306d.js";import"./FSIcon-110a991e.js";import"./VIcon-c02af0e0.js";import"./tag-573fddf1.js";import"./FSSpan-4ac1bb71.js";import"./useSlots-de625f75.js";import"./useRules-31faed85.js";import"./VSelectionControl-c78f62cb.js";import"./density-78dfa9a7.js";import"./index-131c488a.js";import"./VLabel-4204a481.js";import"./VInput-253f9c13.js";import"./index-6e5ff885.js";import"./transition-8112e83c.js";import"./FSCard-75477b2b.js";import"./FSText-d2336987.js";import"./FSSearchField-214f8d7b.js";import"./FSTextField-cc4424b2.js";import"./VField-77215d36.js";import"./loader-b8e78e76.js";import"./VProgressCircular-aebe9788.js";import"./resizeObserver-8d8e6196.js";import"./anchor-c0c71d87.js";import"./rounded-ce7e598f.js";import"./VDefaultsProvider-7c3b8e30.js";import"./forwardRefs-e658ad70.js";import"./index-cd1f7a70.js";import"./useTranslations-f6aba3ae.js";import"./FSSelectField-ad340f06.js";import"./FSDialogMenu-7826371b.js";import"./VDialog-3f81a10d.js";import"./VOverlay-f24c941b.js";import"./display-219b55f3.js";import"./lazy-2bcc6dac.js";import"./router-84f1e0ce.js";import"./scopeId-6b409971.js";import"./FSRadioGroup-b87c20cc.js";import"./VSelect-00399f8e.js";import"./VMenu-99bc218e.js";import"./ssrBoot-8619e9d9.js";import"./border-462a71d7.js";import"./VImg-7d50303f.js";import"./VDivider-268fa528.js";import"./VSlideGroup-e23bcde7.js";import"./goto-8c61ef4d.js";import"./group-e84b8205.js";import"./FSDivider-ee821f1b.js";import"./FSChip-b2b5f621.js";import"./FSOptionGroup-17d3d7ec.js";import"./FSClickable-af644c0d.js";import"./FSWrapGroup-d96e0ce8.js";import"./FSToggleSet-e691b0b6.js";import"./VBtn-2954513d.js";import"./filter-ad9d8f4b.js";import"./useAppOrganisationId-0d113abb.js";import"./lodash-569b8a6d.js";import"./FSImage-8cd50a0c.js";import"./base-0de1729e.js";import"./FSColor-af65425e.js";import"./FSTile-2bc63c46.js";import"./FSTag-f7723dc6.js";class ce{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}const S=B({}),ge=new ce,fe=()=>ge.call(()=>({getTable:i=>S.value[i]!=null?S.value[i]:null,setTable:(i,s)=>{S.value[i]={...s}}}));class be{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class Se{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(s=>new be(s)))??[]}}class ve extends Se{constructor(t){super(t)}}const ye=()=>`${se()}/user-organisation-tables`,w=e=>`${ye()}/${encodeURIComponent(e)}`,D=new ie("userOrgansiationTable",ve).create(e=>e.build(e.addGet(w),e.addUpdate(w),e.addNotify())),he=k.get(D),Fe=k.update(D),G=R({name:"FSLoadDataTable",components:{FSLoader:ee,FSCol:O,FSRow:p},setup(){const{getColors:e}=ae(),t=e(oe.Background);return{style:_(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Te(e,t,i,s,c,g){const r=v("FSLoader");return y(),h(O,{class:"fs-load-data-table",gap:"16px",style:z(e.style)},{default:u(()=>[n(p,{align:"bottom-center"},{default:u(()=>[n(r,{variant:"input"}),n(r,{variant:"button"}),n(re),n(r,{variant:"button"}),n(r,{variant:"button"})]),_:1}),n(p,null,{default:u(()=>[n(r,{variant:"chip"}),n(r,{variant:"chip"}),n(r,{variant:"chip"})]),_:1}),n(te,{type:"table-row-divider@10"}),n(p,{align:"center-right"},{default:u(()=>[n(r,{height:"16px",width:"100px"}),n(r,{width:"120px",height:["40px","36px"]}),n(r,{variant:"button"}),n(r,{variant:"button"}),n(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const we=I(G,[["render",Te]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const L=R({name:"FSDataTable",components:{FSLoadDataTable:we,FSDataTableUI:ne},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:s}=he(),{update:c}=Fe(),{getTable:g,setTable:r}=fe(),{debounce:l,cancel:F}=le(),a=B({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),f=_(()=>a.value?a.value.headers.map(o=>({...o,sort:o.value&&e.customSorts[o.value]||null,sortRaw:o.value&&e.customSortRaws[o.value]||null})):[]),$=async()=>{const o=g(e.tableCode);o?a.value=o:(await t(e.tableCode),s.value&&(a.value={headers:s.value.columns,sortBy:{key:s.value.sortByKey,order:s.value.sortByOrder},mode:s.value.mode,rowsPerPage:s.value.rowsPerPage,filters:{},page:1}))},V=o=>{a.value&&(a.value.headers=o,l(m,e.debounceTime))},N=o=>{a.value&&(a.value.mode=o,l(m,e.debounceTime))},q=o=>{a.value&&(a.value.sortBy=o,l(m,e.debounceTime))},E=o=>{a.value&&(a.value.rowsPerPage=o,l(m,e.debounceTime))},A=o=>{a.value&&(a.value.filters=o,r(e.tableCode,a.value))},j=o=>{a.value&&(a.value.page=o,r(e.tableCode,a.value))},m=()=>{var o,T;a.value&&(r(e.tableCode,a.value),c(e.tableCode,{columns:a.value.headers.map(b=>({columnId:b.columnId,hidden:b.hidden,index:b.index})),rowsPerPage:a.value.rowsPerPage,sortByKey:((o=a.value.sortBy)==null?void 0:o.key)??null,sortByOrder:((T=a.value.sortBy)==null?void 0:T.order)??null,mode:a.value.mode}))};return H(()=>{F(),m()}),M(()=>e.tableCode,()=>{e.tableCode&&$()},{immediate:!0}),{gettingUserOrganisationTable:i,headers:f,table:a,updateRowsPerPage:E,updateFilters:A,updateHeaders:V,updateSortBy:q,updateMode:N,updatePage:j}}});function Ce(e,t,i,s,c,g){const r=v("FSLoadDataTable"),l=v("FSDataTableUI");return e.gettingUserOrganisationTable?(y(),h(r,{key:0})):(y(),h(l,Z({key:1,headers:e.headers,mode:e.table.mode,sortBy:e.table.sortBy,rowsPerPage:e.table.rowsPerPage,filters:e.table.filters,page:e.table.page,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Q({_:2},[W(e.$slots,(F,a)=>({name:a,fn:u(f=>[J(e.$slots,a,X(Y(f)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const x=I(L,[["render",Ce]]);L.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ia={title:"Foundation/Core/Lists/DataTable",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{tableCode:"groups1",items:K,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}},customSortRaws:{none:(e,t)=>{if((e==null?void 0:e.id)==null&&(t==null?void 0:t.id)==null)return 0;if((e==null?void 0:e.id)==null||parseFloat(e.id)<parseFloat(t.id))return-1;if((t==null?void 0:t.id)==null||parseFloat(e.id)>parseFloat(t.id))return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:x,FSGroupTileUI:me,FSSlideGroup:ue,FSTagGroup:de,FSButton:pe},props:Object.keys(t),setup(){return{...e,getColor:s=>{if(s)return s.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var C,U,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(U=d.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};const la=["Variations"];export{d as Variations,la as __namedExportsOrder,ia as default};
