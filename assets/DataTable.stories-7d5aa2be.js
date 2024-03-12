import{G as z}from"./deviceOrganisations.mock-4109c01b.js";import{d as u,g as R,j as J,H as T,I as P,J as w,K as v,Q as A,z as a,o as K,a3 as Q,w as C,W,X,x as Y,P as Z,R as ee,S as te}from"./vue.esm-bundler-85c2ade9.js";import{u as oe}from"./vue-router-d81a5c9d.js";import{a as ae,V as re}from"./FSImage-10df5553.js";import{_ as D}from"./FSCol-caf5d8c8.js";import{_ as h}from"./FSRow-120b21e0.js";import{u as ne,C as se}from"./useColors-4bd4e66b.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-fb9707dd.js";import{F as le}from"./FSDataTableUI-900ec5e9.js";import{C as de,a as L}from"./base-d4674fde.js";import{S as me}from"./base-3cbdc314.js";import{F as pe}from"./FSGroupTileUI-22e10deb.js";import"./css-b4ee648a.js";import"./color-680672dd.js";import"./theme-0475544b.js";import"./dimensions-7d06aea5.js";import"./elevation-e7838e5f.js";import"./locale-cdd955a4.js";import"./useRender-22e01882.js";import"./VImg-8c7f30a9.js";import"./rounded-7d023c25.js";import"./transition-0e35e3a5.js";import"./index-160e8c08.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCard-18b81b74.js";import"./FSCheckbox-b029a3a5.js";import"./FSIcon-d4b06799.js";import"./VIcon-96eed797.js";import"./tag-fd98b684.js";import"./FSSpan-abd71399.js";import"./useSlots-58887162.js";import"./FSText-fc4c74c1.js";import"./FSSearchField-9c0936db.js";import"./FSTextField-5649ea31.js";import"./VField-3df13f61.js";import"./index-0b62f442.js";import"./VInput-9ba9caf6.js";import"./density-1bef1032.js";import"./loader-c17713e4.js";import"./forwardRefs-e658ad70.js";import"./VTextField-b1504f7b.js";import"./FSButton-571eabbd.js";import"./useTranslations-93c8b8c9.js";import"./FSSelectField-543cd2d8.js";import"./VSelect-fce534af.js";import"./VOverlay-e74fafd8.js";import"./display-d8c4b624.js";import"./lazy-4beaa7f3.js";import"./router-dfa38ec1.js";import"./VMenu-21a34864.js";import"./VDefaultsProvider-5f610042.js";import"./ssrBoot-fbecfb2e.js";import"./border-dbc038b8.js";import"./index-91896434.js";import"./VDivider-b26e5897.js";import"./resizeObserver-cbbc033b.js";import"./VSelectionControl-79492061.js";import"./VSlideGroup-88bc554d.js";import"./group-627b1a66.js";import"./FSFadeOut-73d4648d.js";import"./FSChip-3fda7fb3.js";import"./FSToggleSet-0840b65e.js";import"./FSSlideGroup-665b1e24.js";import"./FSButtonNextIcon-64172684.js";import"./FSWrapGroup-879528ab.js";import"./VBtn-aa5927a3.js";import"./VProgressCircular-c268a248.js";import"./filter-2aa245c1.js";import"./useOrganisationId-900f6afd.js";import"./lodash-569b8a6d.js";import"./FSColor-1540e79c.js";import"./FSTile-f129ea5c.js";class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){this.key=t.key,this.order=t.order}}class ge{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ue(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ce(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class be extends ge{constructor(t){super(t)}}const ve=()=>`${de()}/tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,$=new me("table",be).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),fe=L.get($),Se=L.update($),ye=()=>{const e=u(null),t=(n,l,...g)=>{s(),e.value=setTimeout(()=>n(...g),l)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},V=R({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:h},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,n,l,g){const r=T("FSLoader");return P(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(h,{align:"bottom-right"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(V,[["render",he]]);V.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const x=R({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=fe(),{debounce:l,cancel:g}=ye(),{update:r}=Se(),d=oe(),p=u([]),i=u(null),m=u("table"),c=u(10),f=u({}),S=u(1),G=()=>{if(d&&d.currentRoute.value.query[e.tableCode]){const o=JSON.parse(d.currentRoute.value.query[e.tableCode]);p.value=o.columns,c.value=o.rowsPerPage,i.value=o.sortBy,m.value=o.mode,f.value=o.filters,S.value=o.page}else p.value=n.value.columns,c.value=n.value.rowsPerPage,i.value=n.value.sortBy,m.value=n.value.mode},N=o=>{p.value=o,l(b,5e3)},q=o=>{m.value=o,l(b,5e3)},E=o=>{i.value=o,l(b,5e3)},H=o=>{c.value=o,l(b,5e3)},M=o=>{f.value=o,F()},j=o=>{S.value=o,F()},b=()=>{F(),r(e.tableCode,{columns:p.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:i.value,mode:m.value})},F=()=>{d&&d.replace({query:{...d.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:p.value,rowsPerPage:c.value,sortBy:i.value,mode:m.value,filters:f.value,page:S.value})}})};return K(()=>{t(e.tableCode)}),Q(()=>{g(),b()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:p,innerRowsPerPage:c,innerSortBy:i,innerMode:m,innerFilters:f,innerPage:S,updateHeaders:N,updateMode:q,updateSortBy:E,updateRowsPerPage:H,updateFilters:M,updatePage:j}}});function Te(e,t,s,n,l,g){const r=T("FSLoadDataTable"),d=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(d,Y({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(p,i)=>({name:i,fn:v(m=>[Z(e.$slots,i,ee(te(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(x,[["render",Te]]);x.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Mt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:pe},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})};var _,k,I;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(I=(k=y.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const jt=["Variations"];export{y as Variations,jt as __namedExportsOrder,Mt as default};
