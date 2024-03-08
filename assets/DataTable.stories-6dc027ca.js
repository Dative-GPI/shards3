import{G as j}from"./deviceOrganisations.mock-4109c01b.js";import{d as p,G as D,e as z,I as T,J as C,K as f,S as K,z as a,o as Q,y as W,w as F,_ as k,A as X}from"./vue.esm-bundler-588e96c7.js";import{F as Y,u as Z}from"./FSDataTableUI-01ee57a3.js";import{_ as I}from"./FSCol-07ad80b8.js";import{_ as S}from"./FSRow-e442cab6.js";import{u as ee,C as te}from"./useColors-0a17cef8.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{V as r}from"./VSkeletonLoader-2eb0f688.js";import{V as oe}from"./VSpacer-18a01036.js";import{C as ae,a as L}from"./base-ec35a5ce.js";import{S as re}from"./serviceFactory-25228cba.js";import"./FSCard-a59fef92.js";import"./css-50f0aa1d.js";import"./FSCheckbox-7ce6018a.js";import"./FSIcon-2736b3f2.js";import"./VIcon-56fbcc42.js";import"./color-56e2ae46.js";import"./theme-6917f69d.js";import"./FSSpan-3793c562.js";import"./useSlots-553f4fbf.js";import"./FSText-12fda099.js";import"./FSSearchField-7b4b90a3.js";import"./FSTextField-11217dd5.js";import"./VField-98fe1be9.js";import"./index-5292658a.js";import"./transition-28907f24.js";import"./VInput-4a9e0385.js";import"./locale-56b7257e.js";import"./density-79e1d57e.js";import"./loader-b5f87c49.js";import"./rounded-ef9fdb42.js";import"./forwardRefs-e658ad70.js";import"./VTextField-9257e797.js";import"./index-c8d171e2.js";import"./FSButton-03b2e657.js";import"./VBtn-b4a2fb00.js";import"./variant-5570e4c2.js";import"./elevation-1ac0f37f.js";import"./group-6ed4811d.js";import"./dimensions-e6c6eed7.js";import"./router-cfd7314c.js";import"./index-50a29978.js";import"./VDefaultsProvider-3b96cb3b.js";import"./VProgressCircular-33868664.js";import"./resizeObserver-54460412.js";import"./useTranslations-d310d0e5.js";import"./FSSelectField-36ddcd34.js";import"./VSelect-de3bdfba.js";import"./VOverlay-a56e8bf3.js";import"./display-8789070c.js";import"./lazy-8b651e92.js";import"./VMenu-d58a1340.js";import"./ssrBoot-f3867732.js";import"./VImg-3d3560c1.js";import"./VDivider-73ddadbd.js";import"./VSelectionControl-dca1f3ca.js";import"./VSlideGroup-7473545f.js";import"./FSFadeOut-36856569.js";import"./FSChip-21576c6e.js";import"./FSToggleSet-cf7ddd1e.js";import"./FSSlideGroup-35be04ff.js";import"./FSWrapGroup-6292d494.js";import"./useBreakpoints-952345a0.js";import"./filter-45910563.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useOrganisationId-8972b8b6.js";import"./lodash-569b8a6d.js";class ne{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class se{constructor(t){this.key=t.key,this.order=t.order}}class ie{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ne(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new se(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class le extends ie{constructor(t){super(t)}}const pe=()=>`${ae()}/tables`,U=e=>`${pe()}/${encodeURIComponent(e)}`,x=new re("table",le).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),de=L.get(x),ue=L.update(x),me=()=>{const e=p(null),t=(n,i,...g)=>{s(),e.value=setTimeout(()=>n(...g),i)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},O=D({name:"FSLoadDataTable",components:{FSCol:I,FSRow:S},setup(){const{getColors:e}=ee(),t=e(te.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function ce(e,t,s,n,i,g){return T(),C(I,{class:"fs-load-data-table",gap:"16px",style:K(e.style)},{default:f(()=>[a(S,{align:"bottom-center"},{default:f(()=>[a(r,{type:"button"}),a(r,{type:"button"}),a(oe),a(r,{type:"button"}),a(r,{type:"button"})]),_:1}),a(S,null,{default:f(()=>[a(r,{type:"chip"}),a(r,{type:"chip"}),a(r,{type:"chip"})]),_:1}),a(r,{type:"table-row-divider@10"}),a(S,{align:"bottom-right"},{default:f(()=>[a(r,{type:"button"}),a(r,{type:"button"}),a(r,{type:"button"}),a(r,{type:"button"})]),_:1})]),_:1},8,["style"])}const ge=$(O,[["render",ce]]);O.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=D({name:"FSDataTable",components:{FSLoadDataTable:ge,FSDataTableUI:Y},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=de(),{debounce:i,cancel:g}=me(),{update:P}=ue(),l=Z(),d=p([]),u=p(null),m=p("table"),c=p(10),y=p({}),v=p(1),V=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);d.value=o.columns,c.value=o.rowsPerPage,u.value=o.sortBy,m.value=o.mode,y.value=o.filters,v.value=o.page}else d.value=n.value.columns,c.value=n.value.rowsPerPage,u.value=n.value.sortBy,m.value=n.value.mode},E=o=>{d.value=o,i(b,5e3)},G=o=>{m.value=o,i(b,5e3)},M=o=>{u.value=o,i(b,5e3)},H=o=>{c.value=o,i(b,5e3)},A=o=>{y.value=o,w()},J=o=>{v.value=o,w()},b=()=>{w(),P(e.tableCode,{columns:d.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:u.value,mode:m.value})},w=()=>{l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:d.value,rowsPerPage:c.value,sortBy:u.value,mode:m.value,filters:y.value,page:v.value})}})};return Q(()=>{t(e.tableCode)}),W(()=>{g(),b()}),F(()=>e.tableCode,()=>{t(e.tableCode)}),F(n,()=>{V()}),{getting:s,innerHeaders:d,innerRowsPerPage:c,innerSortBy:u,innerMode:m,innerFilters:y,innerPage:v,updateHeaders:E,updateMode:G,updateSortBy:M,updateRowsPerPage:H,updateFilters:A,updatePage:J}}});function be(e,t,s,n,i,g){const P=k("FSLoadDataTable"),l=k("FSDataTableUI");return e.getting?(T(),C(P,{key:0})):(T(),C(l,X({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),null,16,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const q=$(N,[["render",be]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Bt={title:"Foundation/Core/Lists/DataTable",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},h={args:{args:{tableCode:"groups1",items:j,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:q},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :showSelect="true"
          @click:row="args.clickRow"
          v-model="args.value"
        />
      </div>
    </div>`})};var _,R,B;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
      FSDataTable
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
        />
      </div>
    </div>\`
  })
}`,...(B=(R=h.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Dt=["Variations"];export{h as Variations,Dt as __namedExportsOrder,Bt as default};
