import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{g as I,j as J,J as P,K as T,L as w,M as b,V as A,z as a,d as c,o as K,a5 as X,w as C,X as Y,Y as Q,x as W,R as Z,S as ee,U as te}from"./vue.esm-bundler-a6679ce1.js";import{u as oe}from"./vue-router-c202c6d9.js";import{a as ae,V as re}from"./FSImage-c53509b0.js";import{_ as D}from"./FSCol-c92bf913.js";import{_ as y}from"./FSRow-cccb539d.js";import{u as ne,C as se}from"./useColors-7bfbb133.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-972c619d.js";import{F as le}from"./FSDataTableUI-98f42b73.js";import{C as pe,a as L}from"./base-e3f9be94.js";import{S as me}from"./base-7f65d26c.js";import{u as de}from"./FSFadeOut-072298de.js";import{F as ue}from"./FSGroupTileUI-9fe5f5a4.js";import"./css-39e888cb.js";import"./color-3a7410fc.js";import"./theme-8c0eb56d.js";import"./dimensions-90886f46.js";import"./elevation-643b3bb1.js";import"./locale-06782a67.js";import"./proxiedModel-8c3bd5c0.js";import"./useRender-af29532b.js";import"./VImg-e080b924.js";import"./rounded-289ab918.js";import"./transition-8ea299cd.js";import"./index-35f785c5.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCard-3545869e.js";import"./FSCheckbox-2651be11.js";import"./FSIcon-1a3e04ae.js";import"./VIcon-8b39f3af.js";import"./tag-c6e00dba.js";import"./FSSpan-e5b0fe90.js";import"./useSlots-decb0027.js";import"./useRules-581ea3e1.js";import"./VCheckboxBtn-3bbe63a0.js";import"./VSelectionControl-6ae224f7.js";import"./density-5c9f41ad.js";import"./index-9e1e9b7b.js";import"./VLabel-aa33b01a.js";import"./VInput-01377238.js";import"./index-3965c569.js";import"./FSText-3a5d632d.js";import"./FSSearchField-62d0cf12.js";import"./FSTextField-bcb74959.js";import"./VTextField-d692f7b9.js";import"./VField-b3e35bb0.js";import"./loader-837c299d.js";import"./intersectionObserver-68b7d7a3.js";import"./forwardRefs-e658ad70.js";import"./FSButton-58d7615b.js";import"./VProgressCircular-f3d28a40.js";import"./resizeObserver-692bfe96.js";import"./useTranslations-a25d50f5.js";import"./FSSelectField-b1a6fc67.js";import"./VSelect-889f5fb3.js";import"./VOverlay-7446e2bd.js";import"./display-4e3f6834.js";import"./lazy-05051c22.js";import"./router-d9b0c695.js";import"./VMenu-b64c5aea.js";import"./VDefaultsProvider-7c4e7670.js";import"./ssrBoot-c8405da8.js";import"./border-c8fc0b9b.js";import"./VDivider-d17a9bc3.js";import"./VSlideGroup-3b5b0f7a.js";import"./group-a71d090a.js";import"./FSChip-1ff3e1b9.js";import"./FSOptionGroup-17e1f6be.js";import"./FSSlideGroup-66499013.js";import"./FSButtonNextIcon-38eef036.js";import"./FSWrapGroup-78dfd04f.js";import"./FSToggleSet-0843ac5b.js";import"./VBtn-7c947ff4.js";import"./filter-cc8758ca.js";import"./useOrganisationId-1c6c03e8.js";import"./lodash-569b8a6d.js";import"./FSColor-f874a965.js";import"./FSTile-d0b81586.js";class ce{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ge{constructor(t){this.key=t.key,this.order=t.order}}class be{constructor(t){var p;this.id=t.id,this.code=t.code,this.columns=((p=t.columns)==null?void 0:p.map(n=>new ce(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ge(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/tables`,U=e=>`${fe()}/${encodeURIComponent(e)}`,$=new me("table",ve).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),Se=L.get($),ye=L.update($),x=I({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:y},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,p,n,d,h){const r=P("FSLoader");return T(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:b(()=>[a(y,{align:"bottom-center"},{default:b(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(y,null,{default:b(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(y,{align:"center-right"},{default:b(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(x,[["render",he]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=I({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:p,entity:n}=Se(),{debounce:d,cancel:h}=de(),{update:r}=ye(),i=oe(),m=c([]),s=c(null),l=c("table"),u=c(10),v=c({}),f=c(1),G=()=>{if(i&&i.currentRoute.value.query[e.tableCode]){const o=JSON.parse(i.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,l.value=o.mode,v.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortBy,l.value=n.value.mode},N=o=>{m.value=o,d(g,5e3)},q=o=>{l.value=o,d(g,5e3)},M=o=>{s.value=o,d(g,5e3)},E=o=>{u.value=o,d(g,5e3)},H=o=>{v.value=o,F()},j=o=>{f.value=o,F()},g=()=>{F(),r(e.tableCode,{columns:m.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:u.value,sortBy:s.value,mode:l.value})},F=()=>{i&&i.replace({query:{...i.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortBy:s.value,mode:l.value,filters:v.value,page:f.value})}})};return K(()=>{t(e.tableCode)}),X(()=>{h(),g()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:p,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:l,innerFilters:v,innerPage:f,updateHeaders:N,updateMode:q,updateSortBy:M,updateRowsPerPage:E,updateFilters:H,updatePage:j}}});function Pe(e,t,p,n,d,h){const r=P("FSLoadDataTable"),i=P("FSDataTableUI");return e.getting?(T(),w(r,{key:0})):(T(),w(i,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Q(e.$slots,(m,s)=>({name:s,fn:b(l=>[Z(e.$slots,s,ee(te(l)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Pe]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Xt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:ue},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(R=(k=S.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const Yt=["Variations"];export{S as Variations,Yt as __namedExportsOrder,Xt as default};
