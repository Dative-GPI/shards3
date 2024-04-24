import{G as J}from"./deviceOrganisations.mock-4221ac3e.js";import{j as O,e as z,I as T,J as P,K as U,L as b,M as W,v as a,d as c,o as X,a3 as Y,w as _,_ as Q,Y as Z,x as ee,R as te,W as oe,X as ae}from"./vue.esm-bundler-0c8496bd.js";import{u as re}from"./vue-router-6bb19ec3.js";import{F as ne,V as se}from"./FSLoader-6cae8fac.js";import{_ as D}from"./FSCol-0a323bdc.js";import{_ as h}from"./FSRow-547598b4.js";import{u as ie,C as le}from"./useColors-b1c35b1c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VSpacer-989c3452.js";import{F as me}from"./FSDataTableUI-1156c8a7.js";import{C as de}from"./base-d0065ec9.js";import{S as ue}from"./serviceFactory-3393b4e4.js";import{C as x}from"./composableFactory-ad68cfdd.js";import{u as ce}from"./useDebounce-9a2b81c6.js";import{F as ge}from"./FSGroupTileUI-96f1a412.js";import"./css-0fb78066.js";import"./color-e947437a.js";import"./theme-3745e9f1.js";import"./dimensions-13ab2ad3.js";import"./elevation-00653c06.js";import"./locale-4d9bcfcb.js";import"./proxiedModel-19525b39.js";import"./useRender-8701d95b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-9b9919c2.js";import"./FSIcon-e8919096.js";import"./VIcon-7bba82fc.js";import"./tag-0cc02cbd.js";import"./FSSpan-dff588c4.js";import"./useSlots-d0001844.js";import"./useRules-a67d9042.js";import"./VCheckboxBtn-430dae1f.js";import"./VSelectionControl-a5f9e869.js";import"./density-22f26472.js";import"./index-5120e393.js";import"./VLabel-e60bde78.js";import"./VInput-523a6986.js";import"./index-5d52efe8.js";import"./transition-893c383a.js";import"./FSCard-4f1ec4e8.js";import"./FSText-107f4924.js";import"./FSSearchField-334af9cf.js";import"./FSTextField-98f706c4.js";import"./FSButton-aca46646.js";import"./FSClickable-c9a0944c.js";import"./VProgressCircular-91035e99.js";import"./resizeObserver-98822b75.js";import"./VTextField-9ee89ab2.js";import"./VField-19439a85.js";import"./loader-4f914636.js";import"./rounded-6b3d6a43.js";import"./VDefaultsProvider-caefb467.js";import"./forwardRefs-e658ad70.js";import"./index-68016ae5.js";import"./useTranslations-e7f63e09.js";import"./FSSelectField-3d61a361.js";import"./VSelect-f6dc4f4d.js";import"./VOverlay-471318e4.js";import"./display-237b16bb.js";import"./lazy-a9df4664.js";import"./router-ad9465af.js";import"./VMenu-36a8b303.js";import"./ssrBoot-8013f04c.js";import"./border-f9cc1939.js";import"./VImg-b480c03c.js";import"./VDivider-bca4f35b.js";import"./VSlideGroup-8312a613.js";import"./group-8484219c.js";import"./FSFadeOut-6d4fdcb4.js";import"./FSChip-87a70f2d.js";import"./FSOptionGroup-8e7440bb.js";import"./FSSlideGroup-3bf9e88b.js";import"./FSButtonNextIcon-1274b69a.js";import"./FSWrapGroup-53ffd2f5.js";import"./FSToggleSet-f583e42c.js";import"./VBtn-728b3902.js";import"./filter-981204f7.js";import"./useAppOrganisationId-df946d5a.js";import"./lodash-569b8a6d.js";import"./FSImage-4c24fbb7.js";import"./base-0de1729e.js";import"./FSColor-6804a1f7.js";import"./FSTile-b2fd462f.js";class ve{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new ve(n)))??[]}}class ye extends be{constructor(t){super(t)}}const fe=()=>`${de()}/user-organisation-tables`,R=e=>`${fe()}/${encodeURIComponent(e)}`,$=new ue("userOrgansiationTable",ye).create(e=>e.build(e.addGet(R),e.addUpdate(R),e.addNotify())),Se=x.get($),he=x.update($),G=O({name:"FSLoadDataTable",components:{FSLoader:ne,FSCol:D,FSRow:h},setup(){const{getColors:e}=ie(),t=e(le.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Ce(e,t,i,n,C,d){const r=T("FSLoader");return P(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:b(()=>[a(h,{align:"bottom-center"},{default:b(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(pe),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:b(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(se,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:b(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=L(G,[["render",Ce]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=O({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:n}=Se(),{update:C}=he(),{debounce:d,cancel:r}=ce(),l=re(),m=c([]),s=c(null),p=c("table"),u=c(10),y=c({}),f=c(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortByKey?{key:n.value.sortByKey,order:n.value.sortByOrder}:null,p.value=n.value.mode},q=o=>{m.value=o,d(g,5e3)},E=o=>{p.value=o,d(g,5e3)},A=o=>{s.value=o,d(g,5e3)},M=o=>{u.value=o,d(g,5e3)},H=o=>{y.value=o,F()},j=o=>{f.value=o,F()},g=()=>{var o,v;F(),C(e.tableCode,{columns:m.value.map(w=>({columnId:w.columnId,hidden:w.hidden,index:w.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(v=s.value)==null?void 0:v.order,mode:p.value})},F=()=>{var o,v;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(v=s.value)==null?void 0:v.order,mode:p.value,filters:y.value,page:f.value})}})};return X(()=>{t(e.tableCode)}),Y(()=>{r(),g()}),_(()=>e.tableCode,()=>{t(e.tableCode)}),_(n,()=>{K()}),{getting:i,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:p,innerFilters:y,innerPage:f,updateHeaders:q,updateMode:E,updateSortBy:A,updateRowsPerPage:M,updateFilters:H,updatePage:j}}});function we(e,t,i,n,C,d){const r=T("FSLoadDataTable"),l=T("FSDataTableUI");return e.getting?(P(),U(r,{key:0})):(P(),U(l,ee({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Q({_:2},[Z(e.$slots,(m,s)=>({name:s,fn:b(p=>[te(e.$slots,s,oe(ae(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",we]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const eo={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:J,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ge},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
