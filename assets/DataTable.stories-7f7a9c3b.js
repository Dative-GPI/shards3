import{G as z}from"./deviceOrganisations.mock-4221ac3e.js";import{j as O,e as J,H as T,I as P,J as U,K as v,L as Y,z as a,d as c,o as Z,a2 as Q,w as _,Y as W,Z as X,x as ee,S as te,U as oe,V as ae}from"./vue.esm-bundler-96d0a5cc.js";import{u as re}from"./vue-router-acda3705.js";import{F as ne,V as se}from"./FSLoader-a4b17375.js";import{_ as D}from"./FSCol-71088900.js";import{_ as h}from"./FSRow-959288e5.js";import{u as ie,C as le}from"./useColors-a5c6eb1e.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VSpacer-f03e5178.js";import{F as de}from"./FSDataTableUI-8f95f2b8.js";import{C as me}from"./base-2afb0f10.js";import{S as ue}from"./serviceFactory-3393b4e4.js";import{C as x}from"./composableFactory-2f95db4a.js";import{u as ce}from"./FSFadeOut-bfd58420.js";import{F as ge}from"./FSGroupTileUI-2bfee17d.js";import"./css-187645c7.js";import"./color-0e7f3458.js";import"./theme-c90fedb5.js";import"./dimensions-f2761880.js";import"./elevation-23c434a7.js";import"./locale-ebcc9fd1.js";import"./proxiedModel-80fa8b72.js";import"./useRender-864589a6.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-b67eda6e.js";import"./FSIcon-1f958509.js";import"./VIcon-356fc7cc.js";import"./tag-2ee5b375.js";import"./FSSpan-572d1125.js";import"./useSlots-8f090340.js";import"./useRules-d4bb430c.js";import"./VCheckboxBtn-080209f7.js";import"./VSelectionControl-70f0f0e9.js";import"./density-9320d724.js";import"./index-b26b5e2a.js";import"./VLabel-6f956079.js";import"./VInput-b0770754.js";import"./index-09e6aad2.js";import"./transition-2009bd3b.js";import"./FSCard-907ca4bc.js";import"./FSText-8c2dec91.js";import"./FSSearchField-fcbd240e.js";import"./FSTextField-d99708c0.js";import"./FSButton-892461f4.js";import"./FSClickable-3046c0b6.js";import"./VProgressCircular-b96acd02.js";import"./resizeObserver-608b050a.js";import"./VTextField-10bbe6c7.js";import"./VField-12172b20.js";import"./loader-f509b4a4.js";import"./rounded-7d5adaf8.js";import"./VDefaultsProvider-638492ec.js";import"./forwardRefs-e658ad70.js";import"./index-ab6a3e98.js";import"./useTranslations-fea8acd8.js";import"./FSSelectField-1ad49228.js";import"./VSelect-a10f1a69.js";import"./VOverlay-511e4751.js";import"./border-66fb56b2.js";import"./display-382afec5.js";import"./lazy-e9f80e5f.js";import"./router-b0143796.js";import"./VMenu-564fd94d.js";import"./ssrBoot-67be078c.js";import"./VImg-7ef13259.js";import"./VDivider-5b8aa1c7.js";import"./VSlideGroup-56c5a05a.js";import"./group-f931bb93.js";import"./FSChip-207be7cf.js";import"./FSOptionGroup-3cedd5e0.js";import"./FSSlideGroup-ee02b27e.js";import"./FSButtonNextIcon-9bb04157.js";import"./FSWrapGroup-33fbf5d1.js";import"./FSToggleSet-89d4360e.js";import"./VBtn-502c193f.js";import"./filter-14ef3d92.js";import"./useAppOrganisationId-9f2bcdeb.js";import"./lodash-569b8a6d.js";import"./FSImage-7ee5f391.js";import"./base-0de1729e.js";import"./FSColor-8de659a3.js";import"./FSTile-8c27cda9.js";class be{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ve{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new be(n)))??[]}}class ye extends ve{constructor(t){super(t)}}const fe=()=>`${me()}/user-organisation-tables`,B=e=>`${fe()}/${encodeURIComponent(e)}`,$=new ue("userOrgansiationTable",ye).create(e=>e.build(e.addGet(B),e.addUpdate(B),e.addNotify())),Se=x.get($),he=x.update($),G=O({name:"FSLoadDataTable",components:{FSLoader:ne,FSCol:D,FSRow:h},setup(){const{getColors:e}=ie(),t=e(le.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Ce(e,t,i,n,C,m){const r=T("FSLoader");return P(),U(D,{class:"fs-load-data-table",gap:"16px",style:Y(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(pe),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(se,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=L(G,[["render",Ce]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=O({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:de},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:n}=Se(),{update:C}=he(),{debounce:m,cancel:r}=ce(),l=re(),d=c([]),s=c(null),p=c("table"),u=c(10),y=c({}),f=c(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);d.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.filters,f.value=o.page}else d.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortByKey?{key:n.value.sortByKey,order:n.value.sortByOrder}:null,p.value=n.value.mode},q=o=>{d.value=o,m(g,5e3)},E=o=>{p.value=o,m(g,5e3)},A=o=>{s.value=o,m(g,5e3)},H=o=>{u.value=o,m(g,5e3)},M=o=>{y.value=o,F()},j=o=>{f.value=o,F()},g=()=>{var o,b;F(),C(e.tableCode,{columns:d.value.map(w=>({columnId:w.columnId,hidden:w.hidden,index:w.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value})},F=()=>{var o,b;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:d.value,rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value,filters:y.value,page:f.value})}})};return Z(()=>{t(e.tableCode)}),Q(()=>{r(),g()}),_(()=>e.tableCode,()=>{t(e.tableCode)}),_(n,()=>{K()}),{getting:i,innerHeaders:d,innerRowsPerPage:u,innerSortBy:s,innerMode:p,innerFilters:y,innerPage:f,updateHeaders:q,updateMode:E,updateSortBy:A,updateRowsPerPage:H,updateFilters:M,updatePage:j}}});function we(e,t,i,n,C,m){const r=T("FSLoadDataTable"),l=T("FSDataTableUI");return e.getting?(P(),U(r,{key:0})):(P(),U(l,ee({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(d,s)=>({name:s,fn:v(p=>[te(e.$slots,s,oe(ae(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",we]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const Xt={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ge},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var I,R,k;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(k=(R=S.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const eo=["Variations"];export{S as Variations,eo as __namedExportsOrder,Xt as default};
