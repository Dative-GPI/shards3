import{G as z}from"./deviceOrganisations.mock-0893e91a.js";import{g as I,j as J,J as P,K as T,L as w,M as b,V as A,z as a,d as c,o as K,a5 as Y,w as C,Y as Z,Z as Q,x as W,R as X,S as ee,U as te}from"./vue.esm-bundler-0a1af505.js";import{u as oe}from"./vue-router-f60daad6.js";import{a as ae,V as re}from"./FSImage-32f5ef32.js";import{_ as D}from"./FSCol-5b91b447.js";import{_ as y}from"./FSRow-852c6353.js";import{u as ne,C as se}from"./useColors-128f3c4d.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-a7d8920b.js";import{F as le}from"./FSDataTableUI-2e3d385c.js";import{C as pe,a as L}from"./base-e9787f35.js";import{S as de}from"./base-7f65d26c.js";import{u as me}from"./FSFadeOut-0da67b28.js";import{F as ue}from"./FSGroupTileUI-09c8863f.js";import"./css-415780ec.js";import"./color-68d45c69.js";import"./theme-2d24b19c.js";import"./dimensions-21b90dfd.js";import"./elevation-eb45930f.js";import"./locale-767f04a5.js";import"./proxiedModel-7a45f3f8.js";import"./useRender-cc726afb.js";import"./VImg-ef539901.js";import"./rounded-94c7156f.js";import"./transition-c9646b8b.js";import"./index-80f01c5b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCard-985d3fa3.js";import"./FSCheckbox-b11d0db8.js";import"./FSIcon-8481a0c6.js";import"./VIcon-a19d44fc.js";import"./tag-e48f136a.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./FSText-9a3c7352.js";import"./FSSearchField-ec880733.js";import"./FSTextField-78ab428e.js";import"./VField-66cf1d8d.js";import"./index-d90e6acb.js";import"./VInput-32e7bd1c.js";import"./density-99d9a31c.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./forwardRefs-e658ad70.js";import"./VTextField-bc89db2e.js";import"./FSButton-87a8d4ab.js";import"./VProgressCircular-1c311cd8.js";import"./resizeObserver-86c9045a.js";import"./useTranslations-c047d5be.js";import"./FSSelectField-2755d7c5.js";import"./VSelect-bb0c6f0e.js";import"./VOverlay-30c9fe4b.js";import"./display-b22dea51.js";import"./lazy-298c1133.js";import"./router-817fd49a.js";import"./VMenu-b8c93ac3.js";import"./VDefaultsProvider-0c713390.js";import"./ssrBoot-e032939a.js";import"./border-dd08b1f1.js";import"./index-0339a920.js";import"./VDivider-6d67e416.js";import"./VSelectionControl-ad73d0a2.js";import"./VSlideGroup-6393fefa.js";import"./group-439abacb.js";import"./FSChip-d0735c34.js";import"./FSOptionGroup-ccd22034.js";import"./FSSlideGroup-1589ffb4.js";import"./FSButtonNextIcon-6de2de76.js";import"./FSWrapGroup-c4cc1896.js";import"./FSToggleSet-875fd83d.js";import"./VBtn-bd41b5e0.js";import"./filter-ce0454cd.js";import"./useOrganisationId-ec37ca94.js";import"./lodash-569b8a6d.js";import"./FSColor-071239eb.js";import"./FSTile-470fdf0a.js";class ce{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ge{constructor(t){this.key=t.key,this.order=t.order}}class be{constructor(t){var p;this.id=t.id,this.code=t.code,this.columns=((p=t.columns)==null?void 0:p.map(n=>new ce(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ge(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/tables`,U=e=>`${fe()}/${encodeURIComponent(e)}`,$=new de("table",ve).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),Se=L.get($),ye=L.update($),x=I({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:y},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,p,n,m,h){const r=P("FSLoader");return T(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:b(()=>[a(y,{align:"bottom-center"},{default:b(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(y,null,{default:b(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(y,{align:"center-right"},{default:b(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(x,[["render",he]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=I({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:p,entity:n}=Se(),{debounce:m,cancel:h}=me(),{update:r}=ye(),i=oe(),d=c([]),s=c(null),l=c("table"),u=c(10),v=c({}),f=c(1),G=()=>{if(i&&i.currentRoute.value.query[e.tableCode]){const o=JSON.parse(i.currentRoute.value.query[e.tableCode]);d.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,l.value=o.mode,v.value=o.filters,f.value=o.page}else d.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortBy,l.value=n.value.mode},N=o=>{d.value=o,m(g,5e3)},q=o=>{l.value=o,m(g,5e3)},M=o=>{s.value=o,m(g,5e3)},E=o=>{u.value=o,m(g,5e3)},H=o=>{v.value=o,F()},j=o=>{f.value=o,F()},g=()=>{F(),r(e.tableCode,{columns:d.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:u.value,sortBy:s.value,mode:l.value})},F=()=>{i&&i.replace({query:{...i.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:d.value,rowsPerPage:u.value,sortBy:s.value,mode:l.value,filters:v.value,page:f.value})}})};return K(()=>{t(e.tableCode)}),Y(()=>{h(),g()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:p,innerHeaders:d,innerRowsPerPage:u,innerSortBy:s,innerMode:l,innerFilters:v,innerPage:f,updateHeaders:N,updateMode:q,updateSortBy:M,updateRowsPerPage:E,updateFilters:H,updatePage:j}}});function Pe(e,t,p,n,m,h){const r=P("FSLoadDataTable"),i=P("FSDataTableUI");return e.getting?(T(),w(r,{key:0})):(T(),w(i,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Z({_:2},[Q(e.$slots,(d,s)=>({name:s,fn:b(l=>[X(e.$slots,s,ee(te(l)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Pe]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Jt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:ue},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #[\`item.tile\`]="{ item, toggleSelect }">
            <FSGroupTileUI
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`})};var _,k,R;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataTable,
      FSGroupTileUI
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #[\\\`item.tile\\\`]="{ item, toggleSelect }">
            <FSGroupTileUI
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
}`,...(R=(k=S.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const At=["Variations"];export{S as Variations,At as __namedExportsOrder,Jt as default};
