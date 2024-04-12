import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{j as O,e as J,J as U,K as w,L as C,M as v,V as Y,z as a,d as c,o as Z,a2 as Q,w as _,Y as W,Z as X,x as ee,R as te,S as oe,U as ae}from"./vue.esm-bundler-a79f6a7e.js";import{u as re}from"./vue-router-1e38bc6f.js";import{a as ne,V as se}from"./FSImage-f9ed15d3.js";import{_ as D}from"./FSCol-bf5a0ca3.js";import{_ as h}from"./FSRow-997087e7.js";import{u as ie,C as le}from"./useColors-060213ee.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VSpacer-0bffa310.js";import{F as de}from"./FSDataTableUI-d26fe30b.js";import{C as me}from"./base-d9e97873.js";import{S as ue}from"./serviceFactory-3393b4e4.js";import{C as $}from"./composableFactory-a4dd44af.js";import{u as ce}from"./FSFadeOut-04530e74.js";import{F as ge}from"./FSGroupTileUI-e04f72a0.js";import"./css-6f95cab1.js";import"./color-4fa560db.js";import"./theme-1ec486f5.js";import"./dimensions-ba559413.js";import"./elevation-3507830c.js";import"./locale-9003447c.js";import"./proxiedModel-550eb350.js";import"./useRender-b11abf1d.js";import"./base-0de1729e.js";import"./VImg-679a1f09.js";import"./rounded-5d5afca1.js";import"./transition-5598497b.js";import"./index-3d25a1c3.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-d6b02950.js";import"./FSIcon-92b3f0ab.js";import"./VIcon-9404a2c9.js";import"./tag-f688eb88.js";import"./FSSpan-6870f5d7.js";import"./useSlots-6a823081.js";import"./useRules-f2fe91c3.js";import"./VCheckboxBtn-03eab5ea.js";import"./VSelectionControl-afed9b27.js";import"./density-4d7bebe4.js";import"./index-755a3767.js";import"./VLabel-e2aed9e2.js";import"./VInput-6b3c87b1.js";import"./index-21b5e00b.js";import"./FSCard-a614faf8.js";import"./FSText-fa0cf7e3.js";import"./FSSearchField-8198deda.js";import"./FSTextField-6ab47c6b.js";import"./VTextField-31dab154.js";import"./VField-311790ee.js";import"./loader-5621d579.js";import"./intersectionObserver-ca237ead.js";import"./VDefaultsProvider-151583b9.js";import"./forwardRefs-e658ad70.js";import"./FSButton-01495d76.js";import"./FSClickable-4d3bdcc0.js";import"./VProgressCircular-e686f53b.js";import"./resizeObserver-c5cea584.js";import"./useTranslations-2ad33056.js";import"./FSSelectField-0551c6f1.js";import"./VSelect-a1c81aab.js";import"./VOverlay-d699aad9.js";import"./display-7eefeb5d.js";import"./lazy-1267f9fb.js";import"./router-8d3884f9.js";import"./VMenu-84de242c.js";import"./ssrBoot-4b3aca91.js";import"./border-775a28ed.js";import"./VDivider-6955d14a.js";import"./VSlideGroup-f0d4a7a0.js";import"./group-49850006.js";import"./FSChip-ba78b951.js";import"./FSOptionGroup-04b75737.js";import"./FSSlideGroup-aecd30d4.js";import"./FSButtonNextIcon-ecae72e3.js";import"./FSWrapGroup-b9e67664.js";import"./FSToggleSet-1770d675.js";import"./VBtn-eb81c914.js";import"./filter-9c4a1f76.js";import"./useAppOrganisationId-1c07824a.js";import"./lodash-569b8a6d.js";import"./FSColor-945b9cad.js";import"./FSTile-669f0003.js";class be{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ve{constructor(t){var p;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((p=t.columns)==null?void 0:p.map(n=>new be(n)))??[]}}class ye extends ve{constructor(t){super(t)}}const fe=()=>`${me()}/user-organisation-tables`,R=e=>`${fe()}/${encodeURIComponent(e)}`,x=new ue("userOrgansiationTable",ye).create(e=>e.build(e.addGet(R),e.addUpdate(R),e.addNotify())),Se=$.get(x),he=$.update(x),N=O({name:"FSLoadDataTable",components:{FSLoader:ne,FSCol:D,FSRow:h},setup(){const{getColors:e}=ie(),t=e(le.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Fe(e,t,p,n,F,m){const r=U("FSLoader");return w(),C(D,{class:"fs-load-data-table",gap:"16px",style:Y(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(pe),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(se,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(N,[["render",Fe]]);N.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=O({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:de},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:p,entity:n}=Se(),{update:F}=he(),{debounce:m,cancel:r}=ce(),i=re(),d=c([]),s=c(null),l=c("table"),u=c(10),y=c({}),f=c(1),K=()=>{if(i&&i.currentRoute.value.query[e.tableCode]){const o=JSON.parse(i.currentRoute.value.query[e.tableCode]);d.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,l.value=o.mode,y.value=o.filters,f.value=o.page}else d.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortByKey?{key:n.value.sortByKey,order:n.value.sortByOrder}:null,l.value=n.value.mode},q=o=>{d.value=o,m(g,5e3)},E=o=>{l.value=o,m(g,5e3)},A=o=>{s.value=o,m(g,5e3)},M=o=>{u.value=o,m(g,5e3)},H=o=>{y.value=o,T()},j=o=>{f.value=o,T()},g=()=>{var o,b;T(),F(e.tableCode,{columns:d.value.map(P=>({columnId:P.columnId,hidden:P.hidden,index:P.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:l.value})},T=()=>{var o,b;i&&i.replace({query:{...i.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:d.value,rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:l.value,filters:y.value,page:f.value})}})};return Z(()=>{t(e.tableCode)}),Q(()=>{r(),g()}),_(()=>e.tableCode,()=>{t(e.tableCode)}),_(n,()=>{K()}),{getting:p,innerHeaders:d,innerRowsPerPage:u,innerSortBy:s,innerMode:l,innerFilters:y,innerPage:f,updateHeaders:q,updateMode:E,updateSortBy:A,updateRowsPerPage:M,updateFilters:H,updatePage:j}}});function Pe(e,t,p,n,F,m){const r=U("FSLoadDataTable"),i=U("FSDataTableUI");return e.getting?(w(),C(r,{key:0})):(w(),C(i,ee({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(d,s)=>({name:s,fn:v(l=>[te(e.$slots,s,oe(ae(l)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const G=L(V,[["render",Pe]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Xt={title:"Foundation/Core/Lists/DataTable",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:G,FSGroupTileUI:ge},props:Object.keys(t),setup(){return{...e}},template:`
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
          <template #item.tile="{ item, toggleSelect }">
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
    </div>`})};var B,k,I;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
          <template #item.tile="{ item, toggleSelect }">
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
}`,...(I=(k=S.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const eo=["Variations"];export{S as Variations,eo as __namedExportsOrder,Xt as default};
