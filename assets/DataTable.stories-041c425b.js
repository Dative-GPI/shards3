import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{j as O,e as J,H as U,I as w,J as C,K as v,L as Y,z as a,d as c,o as Z,a2 as Q,w as _,Y as W,Z as X,x as ee,S as te,U as oe,V as ae}from"./vue.esm-bundler-43a473fd.js";import{u as re}from"./vue-router-c18e9f37.js";import{F as ne,V as se}from"./FSLoader-75274e0e.js";import{_ as D}from"./FSCol-3eed52f7.js";import{_ as h}from"./FSRow-ba466629.js";import{u as ie,C as le}from"./useColors-a0d41f52.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VSpacer-051f3349.js";import{F as me}from"./FSDataTableUI-a71f74a6.js";import{C as de}from"./base-1344684c.js";import{S as ue}from"./serviceFactory-3393b4e4.js";import{C as $}from"./composableFactory-cfaf9e24.js";import{u as ce}from"./FSFadeOut-55a08a3b.js";import{F as ge}from"./FSGroupTileUI-3f6ae17a.js";import"./css-18b0cf8e.js";import"./color-8bc818ac.js";import"./theme-b11eeaee.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./locale-d44d9622.js";import"./proxiedModel-7eeaa9ef.js";import"./useRender-d2bddd17.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-eda3e056.js";import"./FSIcon-b00305b5.js";import"./VIcon-b50c364f.js";import"./tag-2aee60b4.js";import"./FSSpan-f049a07d.js";import"./useSlots-e98bc591.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSCard-bab2eafe.js";import"./FSText-146d16e4.js";import"./FSSearchField-5cca30cc.js";import"./FSTextField-c919a6ef.js";import"./VTextField-3e42e74d.js";import"./VField-13e4da9c.js";import"./loader-e3f3ed5e.js";import"./intersectionObserver-6db224c5.js";import"./rounded-c06207e9.js";import"./VDefaultsProvider-6b919627.js";import"./forwardRefs-e658ad70.js";import"./index-52cd98ce.js";import"./FSButton-7c569e4d.js";import"./FSClickable-83a8d600.js";import"./VProgressCircular-108a63fb.js";import"./resizeObserver-059c00b3.js";import"./useTranslations-e519a668.js";import"./FSSelectField-84394bb7.js";import"./VSelect-2a3f4796.js";import"./VOverlay-5d77bca3.js";import"./display-20e87f67.js";import"./lazy-7d7adcb2.js";import"./router-1edc30ca.js";import"./VMenu-7b829308.js";import"./ssrBoot-a35ae173.js";import"./border-fe1feda5.js";import"./VImg-ded4a17b.js";import"./VDivider-d035c0db.js";import"./VSlideGroup-d5f10b34.js";import"./group-b2be58db.js";import"./FSChip-0f94faf2.js";import"./FSOptionGroup-786f041c.js";import"./FSSlideGroup-4408c29d.js";import"./FSButtonNextIcon-1a38d932.js";import"./FSWrapGroup-2cb62ab2.js";import"./FSToggleSet-359d728a.js";import"./VBtn-f3ae59be.js";import"./filter-d21d4ed2.js";import"./useAppOrganisationId-1a1455ad.js";import"./lodash-569b8a6d.js";import"./FSImage-41d39ff5.js";import"./base-0de1729e.js";import"./FSColor-829e4a2c.js";import"./FSTile-2b5b1887.js";class be{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ve{constructor(t){var p;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((p=t.columns)==null?void 0:p.map(n=>new be(n)))??[]}}class ye extends ve{constructor(t){super(t)}}const fe=()=>`${de()}/user-organisation-tables`,B=e=>`${fe()}/${encodeURIComponent(e)}`,x=new ue("userOrgansiationTable",ye).create(e=>e.build(e.addGet(B),e.addUpdate(B),e.addNotify())),Se=$.get(x),he=$.update(x),N=O({name:"FSLoadDataTable",components:{FSLoader:ne,FSCol:D,FSRow:h},setup(){const{getColors:e}=ie(),t=e(le.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Fe(e,t,p,n,F,d){const r=U("FSLoader");return w(),C(D,{class:"fs-load-data-table",gap:"16px",style:Y(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(pe),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(se,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(N,[["render",Fe]]);N.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=O({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:p,entity:n}=Se(),{update:F}=he(),{debounce:d,cancel:r}=ce(),i=re(),m=c([]),s=c(null),l=c("table"),u=c(10),y=c({}),f=c(1),K=()=>{if(i&&i.currentRoute.value.query[e.tableCode]){const o=JSON.parse(i.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,l.value=o.mode,y.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortByKey?{key:n.value.sortByKey,order:n.value.sortByOrder}:null,l.value=n.value.mode},q=o=>{m.value=o,d(g,5e3)},E=o=>{l.value=o,d(g,5e3)},A=o=>{s.value=o,d(g,5e3)},H=o=>{u.value=o,d(g,5e3)},M=o=>{y.value=o,T()},j=o=>{f.value=o,T()},g=()=>{var o,b;T(),F(e.tableCode,{columns:m.value.map(P=>({columnId:P.columnId,hidden:P.hidden,index:P.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:l.value})},T=()=>{var o,b;i&&i.replace({query:{...i.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:l.value,filters:y.value,page:f.value})}})};return Z(()=>{t(e.tableCode)}),Q(()=>{r(),g()}),_(()=>e.tableCode,()=>{t(e.tableCode)}),_(n,()=>{K()}),{getting:p,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:l,innerFilters:y,innerPage:f,updateHeaders:q,updateMode:E,updateSortBy:A,updateRowsPerPage:H,updateFilters:M,updatePage:j}}});function Pe(e,t,p,n,F,d){const r=U("FSLoadDataTable"),i=U("FSDataTableUI");return e.getting?(w(),C(r,{key:0})):(w(),C(i,ee({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(m,s)=>({name:s,fn:v(l=>[te(e.$slots,s,oe(ae(l)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const G=L(V,[["render",Pe]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const eo={title:"Foundation/Core/Lists/DataTable",component:G,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:G,FSGroupTileUI:ge},props:Object.keys(t),setup(){return{...e}},template:`
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
          <template #item.tile="{ item, toggleSelect }">
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
          <template #item.tile="{ item, toggleSelect }">
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
}`,...(k=(R=S.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const to=["Variations"];export{S as Variations,to as __namedExportsOrder,eo as default};
