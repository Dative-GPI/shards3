import{G as j}from"./deviceOrganisations.mock-4109c01b.js";import{d as p,E as D,e as z,H as T,I as C,J as f,R as Z,z as a,o as K,y as Q,w as F,Z as k,A as W}from"./vue.esm-bundler-a27e881e.js";import{F as X,u as Y}from"./FSDataTableUI-a75727cb.js";import{_ as I}from"./FSCol-5941d279.js";import{_ as S}from"./FSRow-e0b07355.js";import{u as ee,C as te}from"./useColors-64c3c523.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import{V as r}from"./VSkeletonLoader-6bc87f83.js";import{V as oe}from"./VSpacer-0b076bec.js";import{C as ae,a as L}from"./base-9154e607.js";import{S as re}from"./serviceFactory-25228cba.js";import"./FSCard-05da5310.js";import"./css-fb381997.js";import"./FSCheckbox-c90e713c.js";import"./FSIcon-98d9a930.js";import"./VIcon-05012a67.js";import"./color-17bc18af.js";import"./theme-40a9efa2.js";import"./FSSpan-23926a6a.js";import"./useSlots-f8c8bb5a.js";import"./FSText-5f7ad050.js";import"./FSSearchField-db26fa0a.js";import"./FSTextField-9e0cc675.js";import"./VTextField-9d0c72c8.js";import"./VField-78590269.js";import"./index-1c023ca5.js";import"./transition-91aa1796.js";import"./VInput-932b5afe.js";import"./locale-d8beded1.js";import"./density-9e64face.js";import"./loader-34392cbd.js";import"./rounded-acf264a5.js";import"./forwardRefs-e658ad70.js";import"./index-e8bb7e10.js";import"./FSButton-d1cb7f94.js";import"./VBtn-2c9b0d3f.js";import"./variant-43fdd0d6.js";import"./elevation-c3b2bd24.js";import"./group-9102b821.js";import"./dimensions-59e3b80b.js";import"./router-952fd40f.js";import"./index-d3298e01.js";import"./VDefaultsProvider-34413012.js";import"./VProgressCircular-e23b48e3.js";import"./resizeObserver-f6ddbc93.js";import"./useTranslations-0799e799.js";import"./FSFadeOut-89e5dcca.js";import"./FSChip-ab98b52d.js";import"./VMenu-7f762766.js";import"./VOverlay-1baa69a1.js";import"./display-dfdccc0e.js";import"./lazy-e46c79b0.js";import"./VDivider-a406fa8c.js";import"./FSSelectField-d29fd7e8.js";import"./VSelect-5b6a3eb4.js";import"./ssrBoot-3aa6a9b0.js";import"./VImg-52b1b44b.js";import"./VSelectionControl-cdba1a53.js";import"./VSlideGroup-6834ac05.js";import"./FSToggleSet-86e08492.js";import"./FSSlideGroup-e42d8ef2.js";import"./FSWrapGroup-77dd91c4.js";import"./useBreakpoints-ce1b45c7.js";import"./filter-0b9201b4.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useOrganisationId-a0b617c4.js";import"./lodash-569b8a6d.js";class ne{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class se{constructor(t){this.key=t.key,this.order=t.order}}class ie{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ne(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new se(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class le extends ie{constructor(t){super(t)}}const pe=()=>`${ae()}/tables`,U=e=>`${pe()}/${encodeURIComponent(e)}`,x=new re("table",le).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),de=L.get(x),ue=L.update(x),me=()=>{const e=p(null),t=(n,i,...g)=>{s(),e.value=setTimeout(()=>n(...g),i)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},O=D({name:"FSLoadDataTable",components:{FSCol:I,FSRow:S},setup(){const{getColors:e}=ee(),t=e(te.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function ce(e,t,s,n,i,g){return T(),C(I,{class:"fs-load-data-table",gap:"16px",style:Z(e.style)},{default:f(()=>[a(S,{align:"bottom-center"},{default:f(()=>[a(r,{type:"button"}),a(r,{type:"button"}),a(oe),a(r,{type:"button"}),a(r,{type:"button"})]),_:1}),a(S,null,{default:f(()=>[a(r,{type:"chip"}),a(r,{type:"chip"}),a(r,{type:"chip"})]),_:1}),a(r,{type:"table-row-divider@10"}),a(S,{align:"bottom-right"},{default:f(()=>[a(r,{type:"button"}),a(r,{type:"button"}),a(r,{type:"button"}),a(r,{type:"button"})]),_:1})]),_:1},8,["style"])}const ge=$(O,[["render",ce]]);O.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=D({name:"FSDataTable",components:{FSLoadDataTable:ge,FSDataTableUI:X},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=de(),{debounce:i,cancel:g}=me(),{update:P}=ue(),l=Y(),d=p([]),u=p(null),m=p("table"),c=p(10),y=p({}),v=p(1),V=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);d.value=o.columns,c.value=o.rowsPerPage,u.value=o.sortBy,m.value=o.mode,y.value=o.filters,v.value=o.page}else d.value=n.value.columns,c.value=n.value.rowsPerPage,u.value=n.value.sortBy,m.value=n.value.mode},E=o=>{d.value=o,i(b,5e3)},H=o=>{m.value=o,i(b,5e3)},M=o=>{u.value=o,i(b,5e3)},G=o=>{c.value=o,i(b,5e3)},A=o=>{y.value=o,w()},J=o=>{v.value=o,w()},b=()=>{w(),P(e.tableCode,{columns:d.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:u.value,mode:m.value})},w=()=>{l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:d.value,rowsPerPage:c.value,sortBy:u.value,mode:m.value,filters:y.value,page:v.value})}})};return K(()=>{t(e.tableCode)}),Q(()=>{g(),b()}),F(()=>e.tableCode,()=>{t(e.tableCode)}),F(n,()=>{V()}),{getting:s,innerHeaders:d,innerRowsPerPage:c,innerSortBy:u,innerMode:m,innerFilters:y,innerPage:v,updateHeaders:E,updateMode:H,updateSortBy:M,updateRowsPerPage:G,updateFilters:A,updatePage:J}}});function be(e,t,s,n,i,g){const P=k("FSLoadDataTable"),l=k("FSDataTableUI");return e.getting?(T(),C(P,{key:0})):(T(),C(l,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),null,16,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const q=$(N,[["render",be]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Bt={title:"Foundation/Core/Lists/DataTable",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},h={args:{args:{tableCode:"groups1",items:j,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:q},props:Object.keys(t),setup(){return{...e}},template:`
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
    </div>`})};var R,_,B;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(B=(_=h.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const Dt=["Variations"];export{h as Variations,Dt as __namedExportsOrder,Bt as default};
