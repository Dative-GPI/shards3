import{G as z}from"./deviceOrganisations.mock-ce959f60.js";import{j as k,e as J,I as F,J as w,K as U,L as b,M as W,A as a,d as c,a1 as X,w as R,Y,Z,B as Q,R as ee,W as te,X as oe}from"./vue.esm-bundler-857e5af7.js";import{u as ae}from"./vue-router-ed53a856.js";import{F as re,V as ne}from"./FSLoader-da23fb58.js";import{_ as D}from"./FSCol-439c812a.js";import{_ as S}from"./FSRow-e30f1dcc.js";import{u as se,C as ie}from"./useColors-17643043.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-2ef0dee2.js";import{F as me}from"./FSDataTableUI-db054996.js";import{C as pe}from"./base-0cefeb30.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as x}from"./composableFactory-64294cb0.js";import{u as ue}from"./useDebounce-3221123d.js";import{F as ce}from"./FSGroupTileUI-5fe3c9f4.js";import"./css-ab2bdb81.js";import"./color-3025502c.js";import"./theme-d5133154.js";import"./dimensions-946cb0c4.js";import"./elevation-c9d86896.js";import"./locale-54c2c8ba.js";import"./proxiedModel-c6c1514f.js";import"./useRender-1606c976.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-54879197.js";import"./FSIcon-d0ab000b.js";import"./VIcon-77d6c341.js";import"./tag-41ce785e.js";import"./FSSpan-9f7a3096.js";import"./useSlots-8bee1a74.js";import"./useRules-b3d475c7.js";import"./VSelectionControl-ac658b6e.js";import"./density-9a54c498.js";import"./index-1a539509.js";import"./VLabel-5378811f.js";import"./VInput-7e8bc521.js";import"./index-900eb6c5.js";import"./transition-8ae71e6c.js";import"./FSCard-e175fef9.js";import"./FSText-0e9e862b.js";import"./FSSearchField-6f5a4233.js";import"./FSTextField-4b6701c3.js";import"./VField-05970d63.js";import"./loader-c881e63b.js";import"./VProgressCircular-b85c805e.js";import"./resizeObserver-3e02ea9a.js";import"./rounded-751db039.js";import"./VDefaultsProvider-e6a6e57a.js";import"./forwardRefs-e658ad70.js";import"./FSButton-0aa1c2d4.js";import"./FSClickable-450f52d6.js";import"./VTextField-75c75d12.js";import"./index-60cd2499.js";import"./useTranslations-4ae50e1a.js";import"./FSSelectField-75ed8494.js";import"./FSDialogMenu-b044c7fa.js";import"./VDialog-443e0499.js";import"./VOverlay-e7c006b1.js";import"./display-cdda29b9.js";import"./lazy-414691fc.js";import"./router-8ce361c1.js";import"./scopeId-f802239b.js";import"./FSRadioGroup-05bed391.js";import"./FSFadeOut-88b721d8.js";import"./VSelect-aabfcd61.js";import"./VMenu-1d4626f8.js";import"./ssrBoot-4aec2e0b.js";import"./border-adb63d5e.js";import"./VImg-617a4396.js";import"./VDivider-54e4b012.js";import"./VSlideGroup-09af52b3.js";import"./goto-9c8518f8.js";import"./group-db11312a.js";import"./FSDivider-71f667f3.js";import"./FSChip-16722832.js";import"./FSOptionGroup-903ac90d.js";import"./FSSlideGroup-5383341a.js";import"./FSButtonNextIcon-32c0573f.js";import"./FSWrapGroup-79594a2b.js";import"./FSToggleSet-d37d9311.js";import"./VBtn-cc1ad22a.js";import"./filter-621d2885.js";import"./useAppOrganisationId-9a072404.js";import"./lodash-569b8a6d.js";import"./FSImage-0a0b90ec.js";import"./base-0de1729e.js";import"./FSColor-14106fad.js";import"./FSTile-75725fa5.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/user-organisation-tables`,_=e=>`${fe()}/${encodeURIComponent(e)}`,$=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),ye=x.get($),Se=x.update($),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,d){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:b(()=>[a(S,{align:"bottom-center"},{default:b(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:b(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:b(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=ye(),{update:h}=Se(),{debounce:d,cancel:n}=ue(),l=ae(),p=c([]),s=c(null),m=c("table"),u=c(10),v=c({}),f=c(1),A=()=>{if(l&&l.currentRoute.value.meta[e.tableCode]){const o=l.currentRoute.value.meta[e.tableCode];p.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,m.value=o.mode,v.value=o.filters,f.value=o.page}else r.value&&(p.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(s.value={key:r.value.sortByKey,order:r.value.sortByOrder}),m.value=r.value.mode)},E=o=>{p.value=o,d(g,5e3)},K=o=>{m.value=o,d(g,5e3)},M=o=>{s.value=o,d(g,5e3)},H=o=>{u.value=o,d(g,5e3)},j=o=>{v.value=o,T()},q=o=>{f.value=o,T()},g=()=>{var o,P;T(),h(e.tableCode,{columns:p.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(P=s.value)==null?void 0:P.order,mode:m.value})},T=()=>{l&&(l.currentRoute.value.meta={...l.currentRoute.value.meta,[e.tableCode]:{columns:p.value,filters:v.value,rowsPerPage:u.value,sortBy:s.value,mode:m.value,page:f.value}})};return X(()=>{n(),g()}),R(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),R(r,()=>{A()}),{gettingUserOrganisationTable:i,innerRowsPerPage:u,innerFilters:v,innerHeaders:p,innerSortBy:s,innerMode:m,innerPage:f,updateRowsPerPage:H,updateFilters:j,updateHeaders:E,updateSortBy:M,updateMode:K,updatePage:q}}});function Ce(e,t,i,r,h,d){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Q({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(p,s)=>({name:s,fn:b(m=>[ee(e.$slots,s,te(oe(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=L(V,[["render",Ce]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ro={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
}`,...(B=(O=y.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const no=["Variations"];export{y as Variations,no as __namedExportsOrder,ro as default};
