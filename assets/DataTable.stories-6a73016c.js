import{G as z}from"./deviceOrganisations.mock-0893e91a.js";import{d as u,g as I,j as J,J as T,K as P,L as w,M as v,V as A,z as a,o as K,a5 as Y,w as C,Y as Z,Z as Q,x as W,R as X,S as ee,U as te}from"./vue.esm-bundler-0a1af505.js";import{u as oe}from"./vue-router-f60daad6.js";import{a as ae,V as re}from"./FSImage-3ecc2d88.js";import{_ as D}from"./FSCol-0a1a151b.js";import{_ as h}from"./FSRow-f7e9ea33.js";import{u as ne,C as se}from"./useColors-1745df70.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-638ccd4e.js";import{F as le}from"./FSDataTableUI-81657a66.js";import{C as pe,a as L}from"./base-1e226b07.js";import{S as de}from"./base-3cbdc314.js";import{F as me}from"./FSGroupTileUI-6ebffc77.js";import"./css-403c87e6.js";import"./color-84472fbe.js";import"./theme-8d83670f.js";import"./dimensions-41d36b25.js";import"./elevation-68e8c545.js";import"./locale-d3181d48.js";import"./proxiedModel-350eff8d.js";import"./useRender-76465e3d.js";import"./VImg-1b868636.js";import"./rounded-caec20b0.js";import"./transition-afc70ddd.js";import"./index-411e5c5c.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCard-2d7fb699.js";import"./FSCheckbox-d8f415f8.js";import"./FSIcon-61d2f8ac.js";import"./VIcon-4501998f.js";import"./tag-6ffe4ba6.js";import"./FSSpan-50615fe3.js";import"./useSlots-de2ef136.js";import"./FSText-fa675dd3.js";import"./FSSearchField-d6ce7f94.js";import"./FSTextField-579f05ad.js";import"./VField-96becc41.js";import"./index-9b6ba610.js";import"./VInput-4e45c526.js";import"./density-cfa18558.js";import"./loader-780645af.js";import"./forwardRefs-e658ad70.js";import"./VTextField-4fd69d43.js";import"./FSButton-2b68b6f0.js";import"./useTranslations-c047d5be.js";import"./FSSelectField-09a9aa59.js";import"./VSelect-52b15ff5.js";import"./VOverlay-5bb0ade1.js";import"./display-58dfd5ea.js";import"./lazy-2c8cbded.js";import"./router-1b110d23.js";import"./VMenu-35d64e8e.js";import"./VDefaultsProvider-76561179.js";import"./ssrBoot-e032939a.js";import"./border-70ae5555.js";import"./index-ee92f8e8.js";import"./VDivider-f90b9c24.js";import"./resizeObserver-366ccb2e.js";import"./VSelectionControl-5a22cf17.js";import"./VSlideGroup-c413928b.js";import"./group-197554d7.js";import"./FSFadeOut-e098a2fd.js";import"./FSChip-da66bf2a.js";import"./FSToggleSet-5325189f.js";import"./FSSlideGroup-dc3b1cad.js";import"./FSButtonNextIcon-857763e2.js";import"./FSWrapGroup-c4c96fbe.js";import"./VBtn-bc3cd0df.js";import"./VProgressCircular-67340a4b.js";import"./filter-9db9d00a.js";import"./useOrganisationId-ec37ca94.js";import"./lodash-569b8a6d.js";import"./FSColor-67b11ed8.js";import"./FSTile-e502e6a9.js";class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){this.key=t.key,this.order=t.order}}class ge{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ue(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ce(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class be extends ge{constructor(t){super(t)}}const ve=()=>`${pe()}/tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,$=new de("table",be).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),fe=L.get($),Se=L.update($),ye=()=>{const e=u(null),t=(n,l,...g)=>{s(),e.value=setTimeout(()=>n(...g),l)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},x=I({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:h},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,n,l,g){const r=T("FSLoader");return P(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(x,[["render",he]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=I({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=fe(),{debounce:l,cancel:g}=ye(),{update:r}=Se(),p=oe(),m=u([]),i=u(null),d=u("table"),c=u(10),f=u({}),S=u(1),G=()=>{if(p&&p.currentRoute.value.query[e.tableCode]){const o=JSON.parse(p.currentRoute.value.query[e.tableCode]);m.value=o.columns,c.value=o.rowsPerPage,i.value=o.sortBy,d.value=o.mode,f.value=o.filters,S.value=o.page}else m.value=n.value.columns,c.value=n.value.rowsPerPage,i.value=n.value.sortBy,d.value=n.value.mode},N=o=>{m.value=o,l(b,5e3)},q=o=>{d.value=o,l(b,5e3)},M=o=>{i.value=o,l(b,5e3)},E=o=>{c.value=o,l(b,5e3)},H=o=>{f.value=o,F()},j=o=>{S.value=o,F()},b=()=>{F(),r(e.tableCode,{columns:m.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:i.value,mode:d.value})},F=()=>{p&&p.replace({query:{...p.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:c.value,sortBy:i.value,mode:d.value,filters:f.value,page:S.value})}})};return K(()=>{t(e.tableCode)}),Y(()=>{g(),b()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:m,innerRowsPerPage:c,innerSortBy:i,innerMode:d,innerFilters:f,innerPage:S,updateHeaders:N,updateMode:q,updateSortBy:M,updateRowsPerPage:E,updateFilters:H,updatePage:j}}});function Te(e,t,s,n,l,g){const r=T("FSLoadDataTable"),p=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(p,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Z({_:2},[Q(e.$slots,(m,i)=>({name:i,fn:v(d=>[X(e.$slots,i,ee(te(d)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Te]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const jt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:me},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(R=(k=y.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const zt=["Variations"];export{y as Variations,zt as __namedExportsOrder,jt as default};
