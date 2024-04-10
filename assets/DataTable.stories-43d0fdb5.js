import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{j as I,e as J,J as T,K as P,L as w,M as b,V as A,z as a,d as c,o as K,a2 as Y,w as C,Y as Z,Z as Q,x as W,R as X,S as ee,U as te}from"./vue.esm-bundler-8d1b7c9b.js";import{u as oe}from"./vue-router-2671d6ed.js";import{a as ae,V as re}from"./FSImage-86702691.js";import{_ as D}from"./FSCol-53c64bd8.js";import{_ as y}from"./FSRow-a391dd26.js";import{u as ne,C as se}from"./useColors-fe8562a0.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-089ee4d2.js";import{F as le}from"./FSDataTableUI-7ce706f0.js";import{C as pe}from"./base-18779850.js";import{S as me}from"./serviceFactory-3393b4e4.js";import{C as L}from"./composableFactory-fdc86242.js";import{u as de}from"./FSFadeOut-1158067e.js";import{F as ue}from"./FSGroupTileUI-74acdbf0.js";import"./css-19c8f0ab.js";import"./color-b802304c.js";import"./theme-82ddebf2.js";import"./dimensions-db4341a9.js";import"./elevation-7b9c5add.js";import"./locale-4596da4c.js";import"./proxiedModel-5e90dbf3.js";import"./useRender-7d329101.js";import"./base-55a66464.js";import"./VImg-82b274b6.js";import"./rounded-dfbce428.js";import"./transition-ec42203e.js";import"./index-78515ab6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-b3ab5f5c.js";import"./FSIcon-f1833eba.js";import"./VIcon-af7bd965.js";import"./tag-c9f6eb57.js";import"./FSSpan-54104d2b.js";import"./useSlots-36159ddf.js";import"./useRules-c9867f7f.js";import"./VCheckboxBtn-7de51bc9.js";import"./VSelectionControl-b7fc0cbe.js";import"./density-f72a6349.js";import"./index-9b4e1373.js";import"./VLabel-339e0c63.js";import"./VInput-e3eb2fdb.js";import"./index-03703da7.js";import"./FSCard-067bcc3b.js";import"./FSText-5d7b6cbb.js";import"./FSSearchField-2592564c.js";import"./FSTextField-869ddcdc.js";import"./VTextField-6f523597.js";import"./VField-0fe66054.js";import"./loader-883a5b9e.js";import"./intersectionObserver-872db127.js";import"./VDefaultsProvider-ec24aebb.js";import"./forwardRefs-e658ad70.js";import"./FSButton-24ac64b4.js";import"./FSClickable-40575f4d.js";import"./VProgressCircular-51b4f5f8.js";import"./resizeObserver-170e8e39.js";import"./useTranslations-f3c405d6.js";import"./FSSelectField-657910f0.js";import"./VSelect-51db2014.js";import"./VOverlay-3a319082.js";import"./display-599b850b.js";import"./lazy-f4975b14.js";import"./router-80533699.js";import"./VMenu-8a1eabd1.js";import"./ssrBoot-3bb665ae.js";import"./border-7e6623e1.js";import"./VDivider-dddb5e29.js";import"./VSlideGroup-b35e7181.js";import"./group-9a48651f.js";import"./FSChip-249b9d62.js";import"./FSOptionGroup-2d347a21.js";import"./FSSlideGroup-30ba9159.js";import"./FSButtonNextIcon-b889adf5.js";import"./FSWrapGroup-4d4c94ab.js";import"./FSToggleSet-d6bf238b.js";import"./VBtn-310a17a1.js";import"./filter-e5a473c5.js";import"./useAppOrganisationId-1be3da0b.js";import"./lodash-569b8a6d.js";import"./FSColor-c57d8014.js";import"./FSTile-401d76ce.js";class ce{constructor(t){this.languageCode=t.languageCode,this.label=t.label}}class ge{constructor(t){var s;this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden,this.translations=(s=t.translations)==null?void 0:s.map(n=>new ce(n))}}class be{constructor(t){this.key=t.key,this.order=t.order}}class ve{constructor(t){var s;this.id=t.id,this.code=t.code,this.columns=((s=t.columns)==null?void 0:s.map(n=>new ge(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new be(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class fe extends ve{constructor(t){super(t)}}const Se=()=>`${pe()}/tables`,U=e=>`${Se()}/${encodeURIComponent(e)}`,$=new me("table",fe).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),ye=L.get($),he=L.update($),x=I({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:y},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Fe(e,t,s,n,d,h){const r=T("FSLoader");return P(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:b(()=>[a(y,{align:"bottom-center"},{default:b(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(y,null,{default:b(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(y,{align:"center-right"},{default:b(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=B(x,[["render",Fe]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=I({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:s,entity:n}=ye(),{debounce:d,cancel:h}=de(),{update:r}=he(),l=oe(),m=c([]),i=c(null),p=c("table"),u=c(10),v=c({}),f=c(1),G=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,i.value=o.sortBy,p.value=o.mode,v.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,i.value=n.value.sortBy,p.value=n.value.mode},N=o=>{m.value=o,d(g,5e3)},q=o=>{p.value=o,d(g,5e3)},M=o=>{i.value=o,d(g,5e3)},E=o=>{u.value=o,d(g,5e3)},H=o=>{v.value=o,F()},j=o=>{f.value=o,F()},g=()=>{F(),r(e.tableCode,{columns:m.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:u.value,sortBy:i.value,mode:p.value})},F=()=>{l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortBy:i.value,mode:p.value,filters:v.value,page:f.value})}})};return K(()=>{t(e.tableCode)}),Y(()=>{h(),g()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:s,innerHeaders:m,innerRowsPerPage:u,innerSortBy:i,innerMode:p,innerFilters:v,innerPage:f,updateHeaders:N,updateMode:q,updateSortBy:M,updateRowsPerPage:E,updateFilters:H,updatePage:j}}});function Pe(e,t,s,n,d,h){const r=T("FSLoadDataTable"),l=T("FSDataTableUI");return e.getting?(P(),w(r,{key:0})):(P(),w(l,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Z({_:2},[Q(e.$slots,(m,i)=>({name:i,fn:b(p=>[X(e.$slots,i,ee(te(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Pe]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Xt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:ue},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(R=(k=S.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const eo=["Variations"];export{S as Variations,eo as __namedExportsOrder,Xt as default};
