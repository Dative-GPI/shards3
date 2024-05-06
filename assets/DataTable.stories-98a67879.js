import{G as J}from"./deviceOrganisations.mock-ce959f60.js";import{j as k,e as z,I as F,J as w,K as U,L as v,M as W,A as a,d as u,a2 as X,w as O,_ as Y,Y as Q,B as Z,R as ee,W as te,X as oe}from"./vue.esm-bundler-3416a090.js";import{u as ae}from"./vue-router-e3a4d835.js";import{F as re,V as ne}from"./FSLoader-22724035.js";import{_ as D}from"./FSCol-5731c3c4.js";import{_ as S}from"./FSRow-5edf997c.js";import{u as se,C as ie}from"./useColors-1faf681b.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-819449a6.js";import{F as pe}from"./FSDataTableUI-6ec8e05c.js";import{C as me}from"./base-9a568e22.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as x}from"./composableFactory-8605555f.js";import{u as ue}from"./useDebounce-736cfd0a.js";import{F as ce}from"./FSGroupTileUI-57ff1db4.js";import"./css-69ed11d9.js";import"./color-5c733e3b.js";import"./theme-2c100cd8.js";import"./dimensions-97f2f62c.js";import"./elevation-9288a0e5.js";import"./locale-be130c16.js";import"./proxiedModel-868611da.js";import"./useRender-fb717f1b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-422b3b91.js";import"./FSIcon-f518d728.js";import"./VIcon-c583a5e4.js";import"./tag-a6c90b0c.js";import"./FSSpan-b519c994.js";import"./useSlots-7472d1e2.js";import"./useRules-5e1988ee.js";import"./VSelectionControl-0b3e2526.js";import"./density-174ddef7.js";import"./index-a9118fe7.js";import"./VLabel-793ed17d.js";import"./VInput-77c4eaa4.js";import"./index-46378e0b.js";import"./transition-6086c96b.js";import"./FSCard-92f27951.js";import"./FSText-4221a42d.js";import"./FSSearchField-fd4da165.js";import"./FSTextField-bb895cdf.js";import"./VField-d3f61dc4.js";import"./loader-b2c56b78.js";import"./VProgressCircular-22b061ae.js";import"./resizeObserver-999a6c5c.js";import"./rounded-e101edac.js";import"./VDefaultsProvider-ef2fd514.js";import"./forwardRefs-e658ad70.js";import"./FSButton-6f3d0d12.js";import"./FSClickable-d5c04d60.js";import"./VTextField-7e74284c.js";import"./index-6dca750b.js";import"./useTranslations-ff263049.js";import"./FSSelectField-a5281e4f.js";import"./FSDialogMenu-7a6cda41.js";import"./VDialog-601b035f.js";import"./VOverlay-61ba3ae0.js";import"./display-00a40b50.js";import"./lazy-939e8bde.js";import"./router-b1b24156.js";import"./FSRadioGroup-185a97ce.js";import"./FSFadeOut-8955926a.js";import"./VSelect-f25e0916.js";import"./VMenu-39a0be1f.js";import"./ssrBoot-c0668163.js";import"./border-1657a325.js";import"./VImg-cd6fa030.js";import"./VDivider-5604872c.js";import"./VSlideGroup-057adefe.js";import"./goto-8a93c650.js";import"./group-f3cba4ff.js";import"./FSChip-e95fe78b.js";import"./FSOptionGroup-7150b884.js";import"./FSSlideGroup-e4eb99d4.js";import"./FSButtonNextIcon-4c5573bf.js";import"./FSWrapGroup-367aabb9.js";import"./FSToggleSet-ec2870f8.js";import"./VBtn-f59107e2.js";import"./filter-d102117b.js";import"./useAppOrganisationId-b06da61e.js";import"./lodash-569b8a6d.js";import"./FSImage-fc61eb00.js";import"./base-0de1729e.js";import"./FSColor-1f93e461.js";import"./FSTile-3c962ef7.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const ye=()=>`${me()}/user-organisation-tables`,_=e=>`${ye()}/${encodeURIComponent(e)}`,$=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),fe=x.get($),Se=x.update($),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:z(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,m){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:v(()=>[a(S,{align:"bottom-center"},{default:v(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:v(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:v(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const N=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:pe},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=fe(),{update:h}=Se(),{debounce:m,cancel:n}=ue(),l=ae(),c=u([]),s=u(null),p=u("table"),d=u(10),P=u({}),y=u(1),K=()=>{if(l&&l.currentRoute.value.query[e.tableCode]){const o=JSON.parse(l.currentRoute.value.query[e.tableCode]);d.value=o.rowsPerPage,s.value=o.sortByKey?{key:o.sortByKey,order:o.sortByOrder}:null,p.value=o.mode,y.value=o.page}else r.value&&(d.value=r.value.rowsPerPage,s.value=r.value.sortByKey?{key:r.value.sortByKey,order:r.value.sortByOrder}:null,p.value=r.value.mode);r.value&&(c.value=r.value.columns)},q=o=>{c.value=o,m(g,5e3)},A=o=>{p.value=o,m(g,5e3)},E=o=>{s.value=o,m(g,5e3)},M=o=>{d.value=o,m(g,5e3)},H=o=>{P.value=o,T()},j=o=>{y.value=o,T()},g=()=>{var o,b;T(),h(e.tableCode,{columns:c.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:d.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value})},T=()=>{var o,b;l&&l.replace({query:{...l.currentRoute.value.query,[e.tableCode]:JSON.stringify({rowsPerPage:d.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(b=s.value)==null?void 0:b.order,mode:p.value,page:y.value})}})};return X(()=>{n(),g()}),O(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),O(r,()=>{K()}),{gettingUserOrganisationTable:i,innerRowsPerPage:d,innerFilters:P,innerHeaders:c,innerSortBy:s,innerMode:p,innerPage:y,updateRowsPerPage:M,updateFilters:H,updateHeaders:q,updateSortBy:E,updateMode:A,updatePage:j}}});function Ce(e,t,i,r,h,m){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Z({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Q(e.$slots,(c,s)=>({name:s,fn:v(p=>[ee(e.$slots,s,te(oe(p)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const V=L(N,[["render",Ce]]);N.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const oo={title:"Foundation/Core/Lists/DataTable",component:V,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},f={args:{args:{tableCode:"groups1",items:J,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:V,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var B,R,I;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(R=f.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const ao=["Variations"];export{f as Variations,ao as __namedExportsOrder,oo as default};
