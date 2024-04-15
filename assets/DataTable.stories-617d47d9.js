import{G as z}from"./deviceOrganisations.mock-89cf74cf.js";import{j as O,e as J,H as T,I as P,J as U,K as v,L as Y,z as a,d as c,o as Z,a2 as Q,w as _,Y as W,Z as X,x as ee,S as te,U as oe,V as ae}from"./vue.esm-bundler-43a473fd.js";import{u as re}from"./vue-router-c18e9f37.js";import{F as ne,V as se}from"./FSLoader-75274e0e.js";import{_ as D}from"./FSCol-3eed52f7.js";import{_ as h}from"./FSRow-ba466629.js";import{u as ie,C as le}from"./useColors-a0d41f52.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as pe}from"./VSpacer-051f3349.js";import{F as me}from"./FSDataTableUI-703ff9f8.js";import{C as de}from"./base-1344684c.js";import{S as ue}from"./serviceFactory-3393b4e4.js";import{C as x}from"./composableFactory-cfaf9e24.js";import{u as ce}from"./FSFadeOut-55a08a3b.js";import{F as ge}from"./FSGroupTileUI-4290e965.js";import"./css-18b0cf8e.js";import"./color-8bc818ac.js";import"./theme-b11eeaee.js";import"./dimensions-42b1c23f.js";import"./elevation-494cacfb.js";import"./locale-d44d9622.js";import"./proxiedModel-7eeaa9ef.js";import"./useRender-d2bddd17.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-62ae2fe1.js";import"./FSIcon-0563dc08.js";import"./VIcon-b50c364f.js";import"./tag-2aee60b4.js";import"./FSSpan-f049a07d.js";import"./useSlots-e98bc591.js";import"./useRules-b8c9f7a6.js";import"./VCheckboxBtn-1a59748a.js";import"./VSelectionControl-380f46a9.js";import"./density-c9a73c91.js";import"./index-33b2c13d.js";import"./VLabel-96df6c46.js";import"./VInput-a94a37bb.js";import"./index-112138db.js";import"./transition-83682335.js";import"./FSCard-bab2eafe.js";import"./FSText-e0cd8299.js";import"./FSSearchField-70e73c8a.js";import"./FSTextField-c919a6ef.js";import"./VTextField-3e42e74d.js";import"./VField-13e4da9c.js";import"./loader-e3f3ed5e.js";import"./intersectionObserver-6db224c5.js";import"./rounded-c06207e9.js";import"./VDefaultsProvider-6b919627.js";import"./forwardRefs-e658ad70.js";import"./index-52cd98ce.js";import"./FSButton-6a76966b.js";import"./FSClickable-83d2402d.js";import"./VProgressCircular-108a63fb.js";import"./resizeObserver-059c00b3.js";import"./useTranslations-e519a668.js";import"./FSSelectField-84394bb7.js";import"./VSelect-2a3f4796.js";import"./VOverlay-5d77bca3.js";import"./display-20e87f67.js";import"./lazy-7d7adcb2.js";import"./router-1edc30ca.js";import"./VMenu-7b829308.js";import"./ssrBoot-a35ae173.js";import"./border-fe1feda5.js";import"./VImg-ded4a17b.js";import"./VDivider-d035c0db.js";import"./VSlideGroup-d5f10b34.js";import"./group-b2be58db.js";import"./FSChip-cc0db57e.js";import"./FSOptionGroup-a7e19a32.js";import"./FSSlideGroup-941a584d.js";import"./FSButtonNextIcon-7148ebb2.js";import"./FSWrapGroup-2cb62ab2.js";import"./FSToggleSet-e44a58b1.js";import"./VBtn-f3ae59be.js";import"./filter-d21d4ed2.js";import"./useAppOrganisationId-1a1455ad.js";import"./lodash-569b8a6d.js";import"./FSImage-41d39ff5.js";import"./base-0de1729e.js";import"./FSColor-829e4a2c.js";import"./FSTile-de48b569.js";class be{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ve{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new be(n)))??[]}}class ye extends ve{constructor(t){super(t)}}const fe=()=>`${de()}/user-organisation-tables`,B=e=>`${fe()}/${encodeURIComponent(e)}`,$=new ue("userOrgansiationTable",ye).create(e=>e.build(e.addGet(B),e.addUpdate(B),e.addNotify())),Se=x.get($),he=x.update($),G=O({name:"FSLoadDataTable",components:{FSLoader:ne,FSCol:D,FSRow:h},setup(){const{getColors:e}=ie(),t=e(le.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Ce(e,t,i,n,C,d){const r=T("FSLoader");return P(),U(D,{class:"fs-load-data-table",gap:"16px",style:Y(e.style)},{default:v(()=>[a(h,{align:"bottom-center"},{default:v(()=>[a(r,{variant:"input"}),a(r,{variant:"button"}),a(pe),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1}),a(h,null,{default:v(()=>[a(r,{variant:"chip"}),a(r,{variant:"chip"}),a(r,{variant:"chip"})]),_:1}),a(se,{type:"table-row-divider@10"}),a(h,{align:"center-right"},{default:v(()=>[a(r,{height:"16px",width:"100px"}),a(r,{width:"120px",height:["40px","36px"]}),a(r,{variant:"button"}),a(r,{variant:"button"}),a(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=L(G,[["render",Ce]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=O({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:n}=Se(),{update:C}=he(),{debounce:d,cancel:r}=ce(),l=re(),m=c([]),s=c(null),p=c("table"),u=c(10),y=c({}),f=c(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);m.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.filters,f.value=o.page}else m.value=n.value.columns,u.value=n.value.rowsPerPage,s.value=n.value.sortByKey?{key:n.value.sortByKey,order:n.value.sortByOrder}:null,p.value=n.value.mode},q=o=>{m.value=o,d(g,5e3)},E=o=>{p.value=o,d(g,5e3)},A=o=>{s.value=o,d(g,5e3)},H=o=>{u.value=o,d(g,5e3)},M=o=>{y.value=o,F()},j=o=>{f.value=o,F()},g=()=>{var o,b;F(),C(e.tableCode,{columns:m.value.map(w=>({columnId:w.columnId,hidden:w.hidden,index:w.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value})},F=()=>{var o,b;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({columns:m.value,rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value,filters:y.value,page:f.value})}})};return Z(()=>{t(e.tableCode)}),Q(()=>{r(),g()}),_(()=>e.tableCode,()=>{t(e.tableCode)}),_(n,()=>{K()}),{getting:i,innerHeaders:m,innerRowsPerPage:u,innerSortBy:s,innerMode:p,innerFilters:y,innerPage:f,updateHeaders:q,updateMode:E,updateSortBy:A,updateRowsPerPage:H,updateFilters:M,updatePage:j}}});function we(e,t,i,n,C,d){const r=T("FSLoadDataTable"),l=T("FSDataTableUI");return e.getting?(P(),U(r,{key:0})):(P(),U(l,ee({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[X(e.$slots,(m,s)=>({name:s,fn:v(p=>[te(e.$slots,s,oe(ae(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",we]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const eo={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},S={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ge},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
