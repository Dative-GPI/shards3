import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{j as O,e as J,H as T,I as P,J as U,K as v,L as Y,z as a,d as c,o as Z,a2 as Q,w as _,Y as W,Z as X,x as ee,S as te,U as oe,V as ae}from"./vue.esm-bundler-9b0e8103.js";import{u as re}from"./vue-router-50477f25.js";import{F as ne,V as se}from"./FSLoader-57df4c1d.js";import{_ as D}from"./FSCol-417d1c42.js";import{_ as h}from"./FSRow-efd9bf42.js";import{u as ie,C as le}from"./useColors-c8cdc69f.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VSpacer-fd2fc595.js";import{F as me}from"./FSDataTableUI-991cd4c3.js";import{C as de}from"./base-63b12e08.js";import{S as ue}from"./serviceFactory-3393b4e4.js";import{C as x}from"./composableFactory-3da3eea4.js";import{u as ce}from"./FSFadeOut-f06ce89c.js";import{F as ge}from"./FSGroupTileUI-278a9a9f.js";import"./css-a20776b9.js";import"./color-8a9bca19.js";import"./theme-eb9d1a1f.js";import"./dimensions-a3779498.js";import"./elevation-9129e0f4.js";import"./locale-e5242025.js";import"./proxiedModel-bfd89816.js";import"./useRender-7c6c7a38.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-0f6bd9a8.js";import"./FSIcon-42763d21.js";import"./VIcon-dbd6f8e0.js";import"./tag-6bef4934.js";import"./FSSpan-66c77817.js";import"./useSlots-bfff66e3.js";import"./useRules-1f7652b9.js";import"./VCheckboxBtn-98bb56cd.js";import"./VSelectionControl-615916fb.js";import"./density-104762f9.js";import"./index-5b7905d8.js";import"./VLabel-2c7c7f15.js";import"./VInput-9743ddde.js";import"./index-f5f914d5.js";import"./transition-6fc66ff9.js";import"./FSCard-30518430.js";import"./FSText-84a86aec.js";import"./FSSearchField-1ea50e27.js";import"./FSTextField-458b2a19.js";import"./VTextField-abdb6d44.js";import"./VField-0cfa6d9e.js";import"./loader-ce3d0f3e.js";import"./intersectionObserver-569479cd.js";import"./rounded-f08b035c.js";import"./VDefaultsProvider-b110751b.js";import"./forwardRefs-e658ad70.js";import"./index-d737aecc.js";import"./FSButton-c932337d.js";import"./FSClickable-5ad64f7c.js";import"./VProgressCircular-a5b71e87.js";import"./resizeObserver-d1864ccd.js";import"./useTranslations-8945c1d2.js";import"./FSSelectField-57386754.js";import"./VSelect-4f4576d7.js";import"./VOverlay-b685a01d.js";import"./border-e6ad3d9a.js";import"./display-cd82cc66.js";import"./lazy-9297b748.js";import"./router-cb82541f.js";import"./VMenu-38668fe2.js";import"./ssrBoot-3ada7612.js";import"./VImg-6b167a7c.js";import"./VDivider-ae04fd3f.js";import"./VSlideGroup-ffd03f93.js";import"./group-76451b20.js";import"./FSChip-f8eb388b.js";import"./FSOptionGroup-a4e4ace5.js";import"./FSSlideGroup-5fdab08b.js";import"./FSButtonNextIcon-c2097c21.js";import"./FSWrapGroup-0cd3a162.js";import"./FSToggleSet-7aa8f5d2.js";import"./VBtn-6366fd39.js";import"./filter-4fbddaea.js";import"./useAppOrganisationId-01d8acad.js";import"./lodash-569b8a6d.js";import"./FSImage-1e3157f3.js";import"./base-0de1729e.js";import"./FSColor-f9bbe852.js";import"./FSTile-d6c9683f.js";class be{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ve{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new be(n)))??[]}}class ye extends ve{constructor(t){super(t)}}const fe=()=>`${de()}/user-organisation-tables`,B=e=>`${fe()}/${encodeURIComponent(e)}`,$=new ue("userOrgansiationTable",ye).create(e=>e.build(e.addGet(B),e.addUpdate(B),e.addNotify())),Se=x.get($),he=x.update($),G=O({name:"FSLoadDataTable",components:{FSLoader:ne,FSCol:D,FSRow:h},setup(){const{getColors:e}=ie(),t=e(le.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Ce(e,t,i,n,C,d){const r=T("FSLoader");return P(),U(D,{class:"fs-load-data-table",gap:"16px",style:Y(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(pe),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(se,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=L(G,[["render",Ce]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=O({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:n}=Se(),{update:C}=he(),{debounce:d,cancel:r}=ce(),l=re(),m=c([]),s=c(null),p=c("table"),u=c(10),y=c({}),f=c(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortByKey?{key:n.value.sortByKey,order:n.value.sortByOrder}:null,p.value=n.value.mode},q=o=>{m.value=o,d(g,5e3)},E=o=>{p.value=o,d(g,5e3)},A=o=>{s.value=o,d(g,5e3)},H=o=>{u.value=o,d(g,5e3)},M=o=>{y.value=o,F()},j=o=>{f.value=o,F()},g=()=>{var o,b;F(),C(e.tableCode,{columns:m.value.map(w=>({columnId:w.columnId,hidden:w.hidden,index:w.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value})},F=()=>{var o,b;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value,filters:y.value,page:f.value})}})};return Z(()=>{t(e.tableCode)}),Q(()=>{r(),g()}),_(()=>e.tableCode,()=>{t(e.tableCode)}),_(n,()=>{K()}),{getting:i,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:p,innerFilters:y,innerPage:f,updateHeaders:q,updateMode:E,updateSortBy:A,updateRowsPerPage:H,updateFilters:M,updatePage:j}}});function we(e,t,i,n,C,d){const r=T("FSLoadDataTable"),l=T("FSDataTableUI");return e.getting?(P(),U(r,{key:0})):(P(),U(l,ee({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(m,s)=>({name:s,fn:v(p=>[te(e.$slots,s,oe(ae(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",we]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const eo={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ge},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
}`,...(k=(R=S.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const to=["Variations"];export{S as Variations,to as __namedExportsOrder,eo as default};
