import{G as z}from"./deviceOrganisations.mock-0893e91a.js";import{d as u,g as I,j as J,J as T,K as P,L as w,M as v,V as A,z as a,o as K,a5 as Y,w as C,Y as Z,Z as Q,x as W,R as X,S as ee,U as te}from"./vue.esm-bundler-0a1af505.js";import{u as oe}from"./vue-router-f60daad6.js";import{a as ae,V as re}from"./FSImage-01d95227.js";import{_ as D}from"./FSCol-5b91b447.js";import{_ as h}from"./FSRow-852c6353.js";import{u as ne,C as se}from"./useColors-128f3c4d.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-a7d8920b.js";import{F as le}from"./FSDataTableUI-436b6ea1.js";import{C as pe,a as L}from"./base-1e226b07.js";import{S as de}from"./base-3cbdc314.js";import{F as me}from"./FSGroupTileUI-9f4a171f.js";import"./css-415780ec.js";import"./color-68d45c69.js";import"./theme-2d24b19c.js";import"./dimensions-21b90dfd.js";import"./elevation-eb45930f.js";import"./locale-767f04a5.js";import"./proxiedModel-7a45f3f8.js";import"./useRender-cc726afb.js";import"./VImg-ef539901.js";import"./rounded-94c7156f.js";import"./transition-c9646b8b.js";import"./index-80f01c5b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCard-985d3fa3.js";import"./FSCheckbox-b11d0db8.js";import"./FSIcon-8481a0c6.js";import"./VIcon-a19d44fc.js";import"./tag-e48f136a.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./FSText-9a3c7352.js";import"./FSSearchField-ec880733.js";import"./FSTextField-78ab428e.js";import"./VField-66cf1d8d.js";import"./index-d90e6acb.js";import"./VInput-32e7bd1c.js";import"./density-99d9a31c.js";import"./loader-92dc0f32.js";import"./intersectionObserver-bdfff18f.js";import"./forwardRefs-e658ad70.js";import"./VTextField-bc89db2e.js";import"./FSButton-87a8d4ab.js";import"./VProgressCircular-1c311cd8.js";import"./resizeObserver-86c9045a.js";import"./useTranslations-c047d5be.js";import"./FSSelectField-2755d7c5.js";import"./VSelect-bb0c6f0e.js";import"./VOverlay-30c9fe4b.js";import"./display-b22dea51.js";import"./lazy-298c1133.js";import"./router-817fd49a.js";import"./VMenu-b8c93ac3.js";import"./VDefaultsProvider-0c713390.js";import"./ssrBoot-e032939a.js";import"./border-dd08b1f1.js";import"./index-0339a920.js";import"./VDivider-6d67e416.js";import"./VSelectionControl-ad73d0a2.js";import"./VSlideGroup-6393fefa.js";import"./group-439abacb.js";import"./FSFadeOut-36b993cf.js";import"./FSChip-d0735c34.js";import"./FSToggleSet-875fd83d.js";import"./FSSlideGroup-1589ffb4.js";import"./FSButtonNextIcon-6de2de76.js";import"./FSWrapGroup-c4cc1896.js";import"./VBtn-bd41b5e0.js";import"./filter-ce0454cd.js";import"./useOrganisationId-ec37ca94.js";import"./lodash-569b8a6d.js";import"./FSColor-071239eb.js";import"./FSTile-470fdf0a.js";class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){this.key=t.key,this.order=t.order}}class ge{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ue(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ce(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class be extends ge{constructor(t){super(t)}}const ve=()=>`${pe()}/tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,$=new de("table",be).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),fe=L.get($),Se=L.update($),ye=()=>{const e=u(null),t=(n,l,...g)=>{s(),e.value=setTimeout(()=>n(...g),l)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},x=I({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:h},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,n,l,g){const r=T("FSLoader");return P(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(x,[["render",he]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=I({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=fe(),{debounce:l,cancel:g}=ye(),{update:r}=Se(),p=oe(),m=u([]),i=u(null),d=u("table"),c=u(10),f=u({}),S=u(1),G=()=>{if(p&&p.currentRoute.value.query[e.tableCode]){const o=JSON.parse(p.currentRoute.value.query[e.tableCode]);m.value=o.columns,c.value=o.rowsPerPage,i.value=o.sortBy,d.value=o.mode,f.value=o.filters,S.value=o.page}else m.value=n.value.columns,c.value=n.value.rowsPerPage,i.value=n.value.sortBy,d.value=n.value.mode},N=o=>{m.value=o,l(b,5e3)},q=o=>{d.value=o,l(b,5e3)},M=o=>{i.value=o,l(b,5e3)},E=o=>{c.value=o,l(b,5e3)},H=o=>{f.value=o,F()},j=o=>{S.value=o,F()},b=()=>{F(),r(e.tableCode,{columns:m.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:i.value,mode:d.value})},F=()=>{p&&p.replace({query:{...p.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:c.value,sortBy:i.value,mode:d.value,filters:f.value,page:S.value})}})};return K(()=>{t(e.tableCode)}),Y(()=>{g(),b()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:m,innerRowsPerPage:c,innerSortBy:i,innerMode:d,innerFilters:f,innerPage:S,updateHeaders:N,updateMode:q,updateSortBy:M,updateRowsPerPage:E,updateFilters:H,updatePage:j}}});function Te(e,t,s,n,l,g){const r=T("FSLoadDataTable"),p=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(p,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Z({_:2},[Q(e.$slots,(m,i)=>({name:i,fn:v(d=>[X(e.$slots,i,ee(te(d)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Te]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const zt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:me},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})};var _,k,R;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(k=y.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const Jt=["Variations"];export{y as Variations,Jt as __namedExportsOrder,zt as default};
