import{G as z}from"./deviceOrganisations.mock-4109c01b.js";import{d as p,G as D,e as J,H as T,L as C,M as f,S as K,z as a,o as Q,m as W,w as F,_ as k,A as X}from"./vue.esm-bundler-d8049c85.js";import{F as Y,u as Z}from"./FSDataTableUI-3232bdda.js";import{_ as I}from"./FSCol-39bd052c.js";import{_ as S}from"./FSRow-b5482a77.js";import{u as ee,C as te}from"./useColors-5c9cff43.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as r}from"./VSkeletonLoader-d10ceb25.js";import{V as oe}from"./VSpacer-e253cf80.js";import{C as ae,a as $}from"./base-877dff84.js";import{S as re}from"./serviceFactory-25228cba.js";import"./FSCard-c2aada98.js";import"./css-50f0aa1d.js";import"./FSCheckbox-5f7311ce.js";import"./FSIcon-4847f868.js";import"./VIcon-76640d9b.js";import"./color-339b05ed.js";import"./theme-540b65c4.js";import"./useRender-29d234e5.js";import"./tag-fffb6ba6.js";import"./FSSpan-9f00eaf4.js";import"./useSlots-bdda8306.js";import"./FSText-776f12dd.js";import"./FSSearchField-6baa6eb4.js";import"./FSTextField-7a5a6ce0.js";import"./VField-98076a13.js";import"./index-a9977cc4.js";import"./transition-a0827c0d.js";import"./VInput-95d46afc.js";import"./locale-0b822523.js";import"./density-de8a38cb.js";import"./loader-cb170f8e.js";import"./rounded-0d200380.js";import"./forwardRefs-e658ad70.js";import"./VTextField-bdebe004.js";import"./index-d961be33.js";import"./FSButton-819b5655.js";import"./VBtn-05fbe885.js";import"./variant-ec540a43.js";import"./elevation-ef665fc6.js";import"./group-9e62ecfa.js";import"./dimensions-c0ade26a.js";import"./router-e2bea4dd.js";import"./index-ea9d807b.js";import"./VDefaultsProvider-2b53b1ea.js";import"./VProgressCircular-b08e7416.js";import"./resizeObserver-76cdf9c3.js";import"./useTranslations-503566cb.js";import"./FSSelectField-c0bef37d.js";import"./VSelect-4008bbf6.js";import"./VOverlay-0482e356.js";import"./display-bfe8ef0e.js";import"./lazy-a24e86b5.js";import"./VMenu-878df07f.js";import"./ssrBoot-93e7847f.js";import"./VImg-9cec152f.js";import"./VDivider-3e2a8435.js";import"./VSelectionControl-06ba5d17.js";import"./VSlideGroup-28438428.js";import"./FSFadeOut-1925c606.js";import"./FSChip-d5847dfd.js";import"./FSToggleSet-578c8507.js";import"./FSSlideGroup-c565556d.js";import"./FSWrapGroup-ef3a792c.js";import"./useBreakpoints-7d02383c.js";import"./filter-5c2b177b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./useOrganisationId-350bfc1f.js";import"./lodash-569b8a6d.js";class ne{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class se{constructor(t){this.key=t.key,this.order=t.order}}class ie{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ne(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new se(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class le extends ie{constructor(t){super(t)}}const pe=()=>`${ae()}/tables`,U=e=>`${pe()}/${encodeURIComponent(e)}`,x=new re("table",le).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),de=$.get(x),ue=$.update(x),me=()=>{const e=p(null),t=(n,i,...g)=>{s(),e.value=setTimeout(()=>n(...g),i)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},O=D({name:"FSLoadDataTable",components:{FSCol:I,FSRow:S},setup(){const{getColors:e}=ee(),t=e(te.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function ce(e,t,s,n,i,g){return T(),C(I,{class:"fs-load-data-table",gap:"16px",style:K(e.style)},{default:f(()=>[a(S,{align:"bottom-center"},{default:f(()=>[a(r,{type:"button"}),a(r,{type:"button"}),a(oe),a(r,{type:"button"}),a(r,{type:"button"})]),_:1}),a(S,null,{default:f(()=>[a(r,{type:"chip"}),a(r,{type:"chip"}),a(r,{type:"chip"})]),_:1}),a(r,{type:"table-row-divider@10"}),a(S,{align:"bottom-right"},{default:f(()=>[a(r,{type:"button"}),a(r,{type:"button"}),a(r,{type:"button"}),a(r,{type:"button"})]),_:1})]),_:1},8,["style"])}const ge=L(O,[["render",ce]]);O.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=D({name:"FSDataTable",components:{FSLoadDataTable:ge,FSDataTableUI:Y},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=de(),{debounce:i,cancel:g}=me(),{update:P}=ue(),l=Z(),d=p([]),u=p(null),m=p("table"),c=p(10),y=p({}),v=p(1),V=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);d.value=o.columns,c.value=o.rowsPerPage,u.value=o.sortBy,m.value=o.mode,y.value=o.filters,v.value=o.page}else d.value=n.value.columns,c.value=n.value.rowsPerPage,u.value=n.value.sortBy,m.value=n.value.mode},M=o=>{d.value=o,i(b,5e3)},E=o=>{m.value=o,i(b,5e3)},G=o=>{u.value=o,i(b,5e3)},H=o=>{c.value=o,i(b,5e3)},A=o=>{y.value=o,w()},j=o=>{v.value=o,w()},b=()=>{w(),P(e.tableCode,{columns:d.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:c.value,sortBy:u.value,mode:m.value})},w=()=>{l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:d.value,rowsPerPage:c.value,sortBy:u.value,mode:m.value,filters:y.value,page:v.value})}})};return Q(()=>{t(e.tableCode)}),W(()=>{g(),b()}),F(()=>e.tableCode,()=>{t(e.tableCode)}),F(n,()=>{V()}),{getting:s,innerHeaders:d,innerRowsPerPage:c,innerSortBy:u,innerMode:m,innerFilters:y,innerPage:v,updateHeaders:M,updateMode:E,updateSortBy:G,updateRowsPerPage:H,updateFilters:A,updatePage:j}}});function be(e,t,s,n,i,g){const P=k("FSLoadDataTable"),l=k("FSDataTableUI");return e.getting?(T(),C(P,{key:0})):(T(),C(l,X({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),null,16,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const q=L(N,[["render",be]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const It={title:"Foundation/Core/Lists/DataTable",component:q,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},h={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:q},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(B=(R=h.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const Lt=["Variations"];export{h as Variations,Lt as __namedExportsOrder,It as default};
