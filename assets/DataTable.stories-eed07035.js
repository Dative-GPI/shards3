import{G as J}from"./deviceOrganisations.mock-4221ac3e.js";import{j as O,e as z,I as T,J as P,K as U,L as b,M as W,v as a,d as c,o as X,a3 as Y,w as _,_ as Q,Y as Z,x as ee,R as te,W as oe,X as ae}from"./vue.esm-bundler-b2d5d1a7.js";import{u as re}from"./vue-router-cdd78553.js";import{F as ne,V as se}from"./FSLoader-d736f414.js";import{_ as D}from"./FSCol-8af42802.js";import{_ as h}from"./FSRow-ad0fe7ea.js";import{u as ie,C as le}from"./useColors-1799ca43.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VSpacer-73e95d50.js";import{F as me}from"./FSDataTableUI-843f5460.js";import{C as de}from"./base-647aa1fa.js";import{S as ue}from"./serviceFactory-3393b4e4.js";import{C as x}from"./composableFactory-6dbd7c00.js";import{u as ce}from"./useDebounce-f8cba0e6.js";import{F as ge}from"./FSGroupTileUI-abda966c.js";import"./css-9d61559d.js";import"./color-1b074b3b.js";import"./theme-66179376.js";import"./dimensions-31f51931.js";import"./elevation-b9c046ce.js";import"./locale-602cc07b.js";import"./proxiedModel-92ce7dab.js";import"./useRender-3dd3f3c7.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-cb8c7fe9.js";import"./FSIcon-6a2b7637.js";import"./VIcon-18e13c83.js";import"./tag-33f1d162.js";import"./FSSpan-2ee73edb.js";import"./useSlots-0e4d21ee.js";import"./useRules-999feed4.js";import"./VCheckboxBtn-87c4493b.js";import"./VSelectionControl-27b8b6a4.js";import"./density-aec4d930.js";import"./index-7713af82.js";import"./VLabel-fe75201b.js";import"./VInput-16b8deac.js";import"./index-c0240410.js";import"./transition-42bdb3ea.js";import"./FSCard-c003de31.js";import"./FSText-747b43d9.js";import"./FSSearchField-c3d8dd07.js";import"./FSTextField-c3a4d26e.js";import"./FSButton-c6abd92f.js";import"./FSClickable-f13d43bf.js";import"./VProgressCircular-b30bdd5e.js";import"./resizeObserver-b444ab71.js";import"./VTextField-6a1548fe.js";import"./VField-b51718cc.js";import"./loader-b58e9405.js";import"./rounded-5a33644a.js";import"./VDefaultsProvider-37d19a63.js";import"./forwardRefs-e658ad70.js";import"./index-4361ac4f.js";import"./useTranslations-5ccc1c67.js";import"./FSSelectField-7cc1c304.js";import"./VSelect-13b35610.js";import"./VOverlay-9625a4d7.js";import"./display-5af9f9da.js";import"./lazy-a6d13163.js";import"./router-668d1803.js";import"./VMenu-03edebad.js";import"./ssrBoot-593c2d04.js";import"./border-dbfd717a.js";import"./VImg-ba624ef1.js";import"./VDivider-79192a29.js";import"./VSlideGroup-7f8275f9.js";import"./group-d1f5e06d.js";import"./FSFadeOut-6d4aaf03.js";import"./FSChip-3e3e79fe.js";import"./FSOptionGroup-7db7fd83.js";import"./FSSlideGroup-a03e159b.js";import"./FSButtonNextIcon-23a13277.js";import"./FSWrapGroup-983c1296.js";import"./FSToggleSet-d64083d4.js";import"./VBtn-1107c213.js";import"./filter-dab5f9d0.js";import"./useAppOrganisationId-66e3eeba.js";import"./lodash-569b8a6d.js";import"./FSImage-42c24b58.js";import"./base-0de1729e.js";import"./FSColor-33363c0a.js";import"./FSTile-02e00a03.js";class ve{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new ve(n)))??[]}}class ye extends be{constructor(t){super(t)}}const fe=()=>`${de()}/user-organisation-tables`,R=e=>`${fe()}/${encodeURIComponent(e)}`,$=new ue("userOrgansiationTable",ye).create(e=>e.build(e.addGet(R),e.addUpdate(R),e.addNotify())),Se=x.get($),he=x.update($),G=O({name:"FSLoadDataTable",components:{FSLoader:ne,FSCol:D,FSRow:h},setup(){const{getColors:e}=ie(),t=e(le.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Ce(e,t,i,n,C,d){const r=T("FSLoader");return P(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:b(()=>[a(h,{align:"bottom-center"},{default:b(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(pe),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:b(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(se,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:b(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=L(G,[["render",Ce]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=O({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:n}=Se(),{update:C}=he(),{debounce:d,cancel:r}=ce(),l=re(),m=c([]),s=c(null),p=c("table"),u=c(10),y=c({}),f=c(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortByKey?{key:n.value.sortByKey,order:n.value.sortByOrder}:null,p.value=n.value.mode},q=o=>{m.value=o,d(g,5e3)},E=o=>{p.value=o,d(g,5e3)},A=o=>{s.value=o,d(g,5e3)},M=o=>{u.value=o,d(g,5e3)},H=o=>{y.value=o,F()},j=o=>{f.value=o,F()},g=()=>{var o,v;F(),C(e.tableCode,{columns:m.value.map(w=>({columnId:w.columnId,hidden:w.hidden,index:w.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(v=s.value)==null?void 0:v.order,mode:p.value})},F=()=>{var o,v;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(v=s.value)==null?void 0:v.order,mode:p.value,filters:y.value,page:f.value})}})};return X(()=>{t(e.tableCode)}),Y(()=>{r(),g()}),_(()=>e.tableCode,()=>{t(e.tableCode)}),_(n,()=>{K()}),{getting:i,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:p,innerFilters:y,innerPage:f,updateHeaders:q,updateMode:E,updateSortBy:A,updateRowsPerPage:M,updateFilters:H,updatePage:j}}});function we(e,t,i,n,C,d){const r=T("FSLoadDataTable"),l=T("FSDataTableUI");return e.getting?(P(),U(r,{key:0})):(P(),U(l,ee({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Q({_:2},[Z(e.$slots,(m,s)=>({name:s,fn:b(p=>[te(e.$slots,s,oe(ae(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",we]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const eo={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:J,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ge},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var B,I,k;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(I=S.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};const to=["Variations"];export{S as Variations,to as __namedExportsOrder,eo as default};
