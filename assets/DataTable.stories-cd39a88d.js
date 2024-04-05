import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{j as I,e as J,J as P,K as T,L as w,M as b,V as A,z as a,d as c,o as K,a1 as X,w as C,X as Y,Y as Q,x as W,R as Z,S as ee,U as te}from"./vue.esm-bundler-37de1696.js";import{u as oe}from"./vue-router-f501b7d2.js";import{a as ae,V as re}from"./FSImage-2f97a576.js";import{_ as D}from"./FSCol-927ba931.js";import{_ as y}from"./FSRow-632ce14e.js";import{u as ne,C as se}from"./useColors-ba22af06.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import{V as ie}from"./VSpacer-63748a98.js";import{F as le}from"./FSDataTableUI-88fec9c3.js";import{C as pe}from"./base-ff9d7993.js";import{S as me}from"./serviceFactory-3393b4e4.js";import{C as L}from"./composableFactory-4cdb1715.js";import{u as de}from"./FSFadeOut-d87998fd.js";import{F as ue}from"./FSGroupTileUI-ae13f967.js";import"./css-cb27a64f.js";import"./color-efc02365.js";import"./theme-07d11e72.js";import"./dimensions-4b009e60.js";import"./elevation-66cfbdec.js";import"./locale-ee313da6.js";import"./proxiedModel-e8e26ca7.js";import"./useRender-ccb83440.js";import"./base-55a66464.js";import"./VImg-d6f10770.js";import"./rounded-7d64095f.js";import"./transition-4a8f6120.js";import"./index-90c07952.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-80166ed2.js";import"./FSIcon-486fd767.js";import"./VIcon-122293c7.js";import"./tag-9d688242.js";import"./FSSpan-ce1ed5e8.js";import"./useSlots-df9def22.js";import"./useRules-724d25b8.js";import"./VCheckboxBtn-ebaca132.js";import"./VSelectionControl-19e4ec9f.js";import"./density-ebf3f2c2.js";import"./index-737116aa.js";import"./VLabel-c64e48eb.js";import"./VInput-670d9bbb.js";import"./index-3a20b1dd.js";import"./FSCard-61ed401b.js";import"./FSText-13835655.js";import"./FSSearchField-d44ff07f.js";import"./FSTextField-39426dcd.js";import"./VTextField-03f06faf.js";import"./VField-83328994.js";import"./loader-e58dd003.js";import"./intersectionObserver-12fc3323.js";import"./VDefaultsProvider-062db757.js";import"./forwardRefs-e658ad70.js";import"./FSButton-d020b8fa.js";import"./VProgressCircular-aa80f032.js";import"./resizeObserver-8d36419f.js";import"./useTranslations-eec3878c.js";import"./FSSelectField-919ae91b.js";import"./VSelect-28b2c344.js";import"./VOverlay-8f6f9ccb.js";import"./display-62cdc35d.js";import"./lazy-193ed5d1.js";import"./router-ef1336ae.js";import"./VMenu-ecee0657.js";import"./ssrBoot-9a42e176.js";import"./border-fb870e60.js";import"./VDivider-c1bb8faa.js";import"./VSlideGroup-62b1ce2b.js";import"./group-bc028d0d.js";import"./FSChip-a0f93d15.js";import"./FSOptionGroup-3b9ee1f3.js";import"./FSSlideGroup-d397c1c0.js";import"./FSButtonNextIcon-a2de1883.js";import"./FSWrapGroup-603b7e9b.js";import"./FSToggleSet-57e3f73a.js";import"./VBtn-359968d9.js";import"./filter-fc138fb7.js";import"./useAppOrganisationId-7c06866a.js";import"./lodash-569b8a6d.js";import"./FSColor-bc8e13f7.js";import"./FSTile-a66f27c8.js";class ce{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ge{constructor(t){this.key=t.key,this.order=t.order}}class be{constructor(t){var p;this.id=t.id,this.code=t.code,this.columns=((p=t.columns)==null?void 0:p.map(n=>new ce(n)))??[],this.mode=t.mode,this.sortBy=t.sortBy?new ge(t.sortBy):void 0,this.rowsPerPage=t.rowsPerPage}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/tables`,U=e=>`${fe()}/${encodeURIComponent(e)}`,$=new me("table",ve).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),Se=L.get($),ye=L.update($),x=I({name:"FSLoadDataTable",components:{FSLoader:ae,FSCol:D,FSRow:y},setup(){const{getColors:e}=ne(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,p,n,d,h){const r=P("FSLoader");return T(),w(D,{class:"fs-load-data-table",gap:"16px",style:A(e.style)},{default:b(()=>[a(y,{align:"bottom-center"},{default:b(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(ie),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(y,null,{default:b(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(re,{type:"table-row-divider@10"}),a(y,{align:"center-right"},{default:b(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=B(x,[["render",he]]);x.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=I({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:le},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:p,entity:n}=Se(),{debounce:d,cancel:h}=de(),{update:r}=ye(),i=oe(),m=c([]),s=c(null),l=c("table"),u=c(10),v=c({}),f=c(1),G=()=>{if(i&&i.currentRoute.value.query[e.tableCode]){const o=JSON.parse(i.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,l.value=o.mode,v.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortBy,l.value=n.value.mode},N=o=>{m.value=o,d(g,5e3)},q=o=>{l.value=o,d(g,5e3)},M=o=>{s.value=o,d(g,5e3)},E=o=>{u.value=o,d(g,5e3)},H=o=>{v.value=o,F()},j=o=>{f.value=o,F()},g=()=>{F(),r(e.tableCode,{columns:m.value.map(o=>({columnId:o.columnId,hidden:o.hidden,index:o.index})),rowsPerPage:u.value,sortBy:s.value,mode:l.value})},F=()=>{i&&i.replace({query:{...i.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortBy:s.value,mode:l.value,filters:v.value,page:f.value})}})};return K(()=>{t(e.tableCode)}),X(()=>{h(),g()}),C(()=>e.tableCode,()=>{t(e.tableCode)}),C(n,()=>{G()}),{getting:p,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:l,innerFilters:v,innerPage:f,updateHeaders:N,updateMode:q,updateSortBy:M,updateRowsPerPage:E,updateFilters:H,updatePage:j}}});function Pe(e,t,p,n,d,h){const r=P("FSLoadDataTable"),i=P("FSDataTableUI");return e.getting?(T(),w(r,{key:0})):(T(),w(i,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Q(e.$slots,(m,s)=>({name:s,fn:b(l=>[Z(e.$slots,s,ee(te(l)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const O=B(V,[["render",Pe]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Qt={title:"Foundation/Core/Lists/DataTable",component:O,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:O,FSGroupTileUI:ue},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(R=(k=S.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};const Wt=["Variations"];export{S as Variations,Wt as __namedExportsOrder,Qt as default};
