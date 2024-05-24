import{G as z}from"./deviceOrganisations.mock-4ebc3d32.js";import{j as k,e as J,I as F,J as w,K as U,L as b,S as Q,A as a,d as c,$ as W,w as R,Y,Z,B as X,W as ee,Q as te,R as oe}from"./vue.esm-bundler-01006032.js";import{u as ae}from"./vue-router-390107f0.js";import{F as re,V as ne}from"./FSLoader-639650a7.js";import{_ as D}from"./FSCol-c97fad61.js";import{_ as S}from"./FSRow-83e75060.js";import{u as se,C as ie}from"./useColors-13ed6ee6.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-78b81ef3.js";import{F as me}from"./FSDataTableUI-90b55f97.js";import{C as pe}from"./base-d6256dbd.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-25aa3ef9.js";import{u as ue}from"./useDebounce-ff82ad1d.js";import{F as ce}from"./FSGroupTileUI-d1608c37.js";import"./css-279a0029.js";import"./color-8c62b342.js";import"./theme-a26d2375.js";import"./dimensions-4232d0fa.js";import"./elevation-28c6fd5f.js";import"./locale-903ef8d8.js";import"./proxiedModel-69023448.js";import"./useRender-4bcbb6ac.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-40e0c55f.js";import"./FSIcon-15b738c8.js";import"./VIcon-17be8ae5.js";import"./tag-1f5f74bd.js";import"./FSSpan-6e79caf3.js";import"./useSlots-e0d7ab7c.js";import"./useRules-54978858.js";import"./VSelectionControl-3e964160.js";import"./density-d09a1492.js";import"./index-89394051.js";import"./VLabel-f27c70ae.js";import"./VInput-50bb839f.js";import"./index-491d6eb9.js";import"./transition-9c7eb302.js";import"./FSCard-8fcd8e1e.js";import"./FSText-b54d9278.js";import"./FSSearchField-e4b36b56.js";import"./FSTextField-4ac67195.js";import"./VField-f1a9daf9.js";import"./loader-878147ed.js";import"./VProgressCircular-f05fef1e.js";import"./resizeObserver-308bb976.js";import"./anchor-1cd9d9ab.js";import"./rounded-9001edc0.js";import"./VDefaultsProvider-d99c6ff5.js";import"./forwardRefs-e658ad70.js";import"./FSButton-be94d44f.js";import"./FSClickable-a0c1e9ef.js";import"./VTextField-f4d9b05c.js";import"./index-4a977ff0.js";import"./useTranslations-e38f43a5.js";import"./FSSelectField-6c305e90.js";import"./FSDialogMenu-aa70b58d.js";import"./VDialog-7227fab4.js";import"./VOverlay-d4d3a71f.js";import"./display-77f43728.js";import"./lazy-d0bac168.js";import"./router-5e751bda.js";import"./scopeId-3678c7b9.js";import"./FSRadioGroup-bdbad880.js";import"./FSFadeOut-f03472dd.js";import"./VSelect-450b500f.js";import"./VMenu-4c05ddd6.js";import"./ssrBoot-b1480e9f.js";import"./border-10554549.js";import"./VImg-f5b3db66.js";import"./VDivider-10bc2e69.js";import"./VSlideGroup-e0f01fc0.js";import"./goto-9bab4060.js";import"./group-e9c3615d.js";import"./FSDivider-df47992b.js";import"./FSChip-f497d1b7.js";import"./FSOptionGroup-383f9465.js";import"./FSSlideGroup-8aec8bc5.js";import"./FSButtonNextIcon-3107391f.js";import"./FSWrapGroup-83a13764.js";import"./FSToggleSet-be653781.js";import"./VBtn-dbaccc27.js";import"./filter-9717b913.js";import"./useAppOrganisationId-2267e850.js";import"./lodash-569b8a6d.js";import"./FSImage-bcb6e763.js";import"./base-0de1729e.js";import"./FSColor-16596ebd.js";import"./FSTile-1cd334db.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/user-organisation-tables`,_=e=>`${fe()}/${encodeURIComponent(e)}`,x=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),ye=$.get(x),Se=$.update(x),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,d){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:Q(e.style)},{default:b(()=>[a(S,{align:"bottom-center"},{default:b(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:b(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:b(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=ye(),{update:h}=Se(),{debounce:d,cancel:n}=ue(),l=ae(),p=c([]),s=c(null),m=c("table"),u=c(10),v=c({}),f=c(1),A=()=>{if(l&&l.currentRoute.value.meta[e.tableCode]){const o=l.currentRoute.value.meta[e.tableCode];p.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,m.value=o.mode,v.value=o.filters,f.value=o.page}else r.value&&(p.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(s.value={key:r.value.sortByKey,order:r.value.sortByOrder}),m.value=r.value.mode)},E=o=>{p.value=o,d(g,5e3)},K=o=>{m.value=o,d(g,5e3)},H=o=>{s.value=o,d(g,5e3)},M=o=>{u.value=o,d(g,5e3)},j=o=>{v.value=o,T()},q=o=>{f.value=o,T()},g=()=>{var o,P;T(),h(e.tableCode,{columns:p.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(P=s.value)==null?void 0:P.order,mode:m.value})},T=()=>{l&&(l.currentRoute.value.meta={...l.currentRoute.value.meta,[e.tableCode]:{columns:p.value,filters:v.value,rowsPerPage:u.value,sortBy:s.value,mode:m.value,page:f.value}})};return W(()=>{n(),g()}),R(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),R(r,()=>{A()}),{gettingUserOrganisationTable:i,innerRowsPerPage:u,innerFilters:v,innerHeaders:p,innerSortBy:s,innerMode:m,innerPage:f,updateRowsPerPage:M,updateFilters:j,updateHeaders:E,updateSortBy:H,updateMode:K,updatePage:q}}});function Ce(e,t,i,r,h,d){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,X({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(p,s)=>({name:s,fn:b(m=>[ee(e.$slots,s,te(oe(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=L(V,[["render",Ce]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const no={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          rowGap="4px"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
              :imageId="item.imageId"
              :label="item.label"
              :code="item.code"
              :modelValue="args.value.includes(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`})};var I,O,B;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      const getColor = (row: any) => {
        if (row) {
          if (row.code === "number1") {
            return "primary";
          } else {
            return "success";
          }
        }
      };
      return {
        ...args,
        getColor
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          rowGap="4px"
          @click:row="args.clickRow"
          v-model="args.value"
        >
          <template #item.tile="{ item, toggleSelect }">
            <FSGroupTileUI
              variant="standard"
              :color="getColor(item)"
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
}`,...(B=(O=y.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const so=["Variations"];export{y as Variations,so as __namedExportsOrder,no as default};
