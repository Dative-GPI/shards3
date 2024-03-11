import{G as j}from"./deviceOrganisations.mock-4109c01b.js";import{d as u,G as R,e as z,H as T,I as P,J as w,K as v,Q as A,B as a,o as K,l as Q,w as C,X,Y,p as W,P as Z,R as ee,S as te}from"./vue.esm-bundler-cada065a.js";import{F as oe,u as ae}from"./FSDataTableUI-ef72fd0a.js";import{a as re,V as ne}from"./FSImage-26b18107.js";import{_ as B}from"./FSCol-630168ee.js";import{_ as h}from"./FSRow-4ed4317e.js";import{u as se,C as ie}from"./useColors-d76e62c3.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-417f2da8.js";import{C as de,a as L}from"./base-682e9c44.js";import{S as me}from"./base-3cbdc314.js";import{F as pe}from"./FSGroupTileUI-4baf3efe.js";import"./FSCard-274f3029.js";import"./css-50f0aa1d.js";import"./FSCheckbox-11da9bd1.js";import"./FSIcon-de67d9ac.js";import"./VIcon-f531f31f.js";import"./color-cac3f8b2.js";import"./theme-077d21c3.js";import"./useRender-aebc0214.js";import"./tag-84fe69a6.js";import"./FSSpan-898e6277.js";import"./useSlots-e34db436.js";import"./FSText-ac132797.js";import"./FSSearchField-a754a44e.js";import"./FSTextField-530e6f2e.js";import"./VField-8506902a.js";import"./index-127b1a3d.js";import"./transition-96405fc3.js";import"./VInput-0190379f.js";import"./locale-793e4951.js";import"./density-a3d9cfab.js";import"./loader-c6765802.js";import"./rounded-c91c5538.js";import"./forwardRefs-e658ad70.js";import"./VTextField-9f779e5f.js";import"./index-1890f982.js";import"./FSButton-184a6980.js";import"./VBtn-1fd3c917.js";import"./variant-c24223ea.js";import"./elevation-a65147a7.js";import"./group-52996811.js";import"./dimensions-bd9ae89e.js";import"./router-44442b4b.js";import"./index-79d9264f.js";import"./VDefaultsProvider-1e56270a.js";import"./VProgressCircular-de76cad3.js";import"./resizeObserver-1a024aa2.js";import"./useTranslations-d1fccfae.js";import"./FSSelectField-ea799dbc.js";import"./VSelect-5d0ed1d8.js";import"./VOverlay-bf937035.js";import"./display-5b38d177.js";import"./lazy-550f418a.js";import"./VMenu-6896ef8b.js";import"./ssrBoot-ac05136b.js";import"./VImg-61808023.js";import"./VDivider-f319f9e8.js";import"./VSelectionControl-59b3617a.js";import"./VSlideGroup-184702f6.js";import"./FSFadeOut-9f41b5df.js";import"./FSChip-587c2e24.js";import"./FSToggleSet-510c5589.js";import"./FSSlideGroup-d7a861e5.js";import"./FSWrapGroup-84508520.js";import"./useBreakpoints-19506ea5.js";import"./filter-98dcfaf1.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useOrganisationId-8b1fef51.js";import"./lodash-569b8a6d.js";import"./FSColor-6ccc3af1.js";import"./FSTile-7929d72f.js";class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){this.key=t.key,this.order=t.order}}class ge{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ue(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ce(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class be extends ge{constructor(t){super(t)}}const ve=()=>`${de()}/tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,$=new me("table",be).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),fe=L.get($),Se=L.update($),ye=()=>{const e=u(null),t=(n,l,...g)=>{s(),e.value=setTimeout(()=>n(...g),l)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},V=R({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:B,FSRow:h},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,n,l,g){const r=T("FSLoader");return P(),w(B,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(le),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(h,{align:"bottom-right"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=D(V,[["render",he]]);V.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const O=R({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:oe},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=fe(),{debounce:l,cancel:g}=ye(),{update:r}=Se(),d=ae(),p=u([]),i=u(null),m=u("table"),c=u(10),f=u({}),S=u(1),G=()=>{if(d&&d.currentRoute.value.query[e.tableCode]){const o=JSON.parse(d.currentRoute.value.query[e.tableCode]);p.value=o.columns,c.value=o.rowsPerPage,i.value=o.sortBy,m.value=o.mode,f.value=o.filters,S.value=o.page}else p.value=n.value.columns,c.value=n.value.rowsPerPage,i.value=n.value.sortBy,m.value=n.value.mode},N=o=>{p.value=o,l(b,5e3)},q=o=>{m.value=o,l(b,5e3)},E=o=>{i.value=o,l(b,5e3)},H=o=>{c.value=o,l(b,5e3)},M=o=>{f.value=o,F()},J=o=>{S.value=o,F()},b=()=>{F(),r(e.tableCode,{columns:p.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:i.value,mode:m.value})},F=()=>{d&&d.replace({query:{...d.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:p.value,rowsPerPage:c.value,sortBy:i.value,mode:m.value,filters:f.value,page:S.value})}})};return K(()=>{t(e.tableCode)}),Q(()=>{g(),b()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:p,innerRowsPerPage:c,innerSortBy:i,innerMode:m,innerFilters:f,innerPage:S,updateHeaders:N,updateMode:q,updateSortBy:E,updateRowsPerPage:H,updateFilters:M,updatePage:J}}});function Te(e,t,s,n,l,g){const r=T("FSLoadDataTable"),d=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(d,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),X({_:2},[Y(e.$slots,(p,i)=>({name:i,fn:v(m=>[Z(e.$slots,i,ee(te(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const x=D(O,[["render",Te]]);O.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Ht={title:"Foundation/Core/Lists/DataTable",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:j,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:x,FSGroupTileUI:pe},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(I=(k=y.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const Mt=["Variations"];export{y as Variations,Mt as __namedExportsOrder,Ht as default};
