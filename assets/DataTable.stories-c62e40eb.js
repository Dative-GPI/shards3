import{G as z}from"./deviceOrganisations.mock-ce959f60.js";import{j as k,e as J,I as F,J as w,K as U,L as b,M as W,A as a,d as c,a2 as X,w as R,Y,Z,B as Q,R as ee,W as te,X as oe}from"./vue.esm-bundler-41eda46b.js";import{u as ae}from"./vue-router-14708880.js";import{F as re,V as ne}from"./FSLoader-5fe6d2d9.js";import{_ as D}from"./FSCol-282cc158.js";import{_ as S}from"./FSRow-1508d56d.js";import{u as se,C as ie}from"./useColors-baaa98f5.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-63a59a9e.js";import{F as me}from"./FSDataTableUI-8288c125.js";import{C as pe}from"./base-72a78366.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as x}from"./composableFactory-00c2f0ee.js";import{u as ue}from"./useDebounce-c713d9ff.js";import{F as ce}from"./FSGroupTileUI-054a50fb.js";import"./css-35e8563f.js";import"./color-45753032.js";import"./theme-be1bd2db.js";import"./dimensions-5b54e342.js";import"./elevation-878f110a.js";import"./locale-84078765.js";import"./proxiedModel-03601969.js";import"./useRender-dd35ddd1.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-90b24572.js";import"./FSIcon-713345eb.js";import"./VIcon-8cf7ec9e.js";import"./tag-64b4b0e7.js";import"./FSSpan-8af5ddcc.js";import"./useSlots-e8ea556e.js";import"./useRules-d33c1ab7.js";import"./VSelectionControl-42a6862f.js";import"./density-b42ba92f.js";import"./index-4ba2035c.js";import"./VLabel-19fa20ee.js";import"./VInput-4d87c32a.js";import"./index-dc0570e5.js";import"./transition-695cd20f.js";import"./FSCard-8067a4d4.js";import"./FSText-f60941a6.js";import"./FSSearchField-ffd8e882.js";import"./FSTextField-77636cac.js";import"./VField-c52f5557.js";import"./loader-e17cf3b4.js";import"./VProgressCircular-58a86136.js";import"./resizeObserver-d58b88df.js";import"./rounded-3de0fd3d.js";import"./VDefaultsProvider-7d12961d.js";import"./forwardRefs-e658ad70.js";import"./FSButton-d0a22eb6.js";import"./FSClickable-416c7a7e.js";import"./VTextField-d0219b08.js";import"./index-5d4def8c.js";import"./useTranslations-3bd97805.js";import"./FSSelectField-ee043228.js";import"./FSDialogMenu-8a197336.js";import"./VDialog-ecb58b76.js";import"./VOverlay-ac667fed.js";import"./display-4adc39d9.js";import"./lazy-12081f09.js";import"./router-09f0866b.js";import"./scopeId-2fcf2157.js";import"./FSRadioGroup-a60e03b4.js";import"./FSFadeOut-77aed403.js";import"./VSelect-defb5d1c.js";import"./VMenu-499c8185.js";import"./ssrBoot-5c61be23.js";import"./border-eea26164.js";import"./VImg-63ad34dc.js";import"./VDivider-d263d436.js";import"./VSlideGroup-aeb2e4a4.js";import"./goto-50a9e63e.js";import"./group-2589989a.js";import"./FSDivider-dcc8e3ce.js";import"./FSChip-4ec1aacf.js";import"./FSOptionGroup-d8583fc0.js";import"./FSSlideGroup-10d457fb.js";import"./FSButtonNextIcon-7fd41269.js";import"./FSWrapGroup-d3a1dbf2.js";import"./FSToggleSet-d7834bf3.js";import"./VBtn-66b397c8.js";import"./filter-133522f7.js";import"./useAppOrganisationId-de810534.js";import"./lodash-569b8a6d.js";import"./FSImage-563135ef.js";import"./base-0de1729e.js";import"./FSColor-c82589e4.js";import"./FSTile-d711885d.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/user-organisation-tables`,_=e=>`${fe()}/${encodeURIComponent(e)}`,$=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),ye=x.get($),Se=x.update($),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,d){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:b(()=>[a(S,{align:"bottom-center"},{default:b(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:b(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:b(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=ye(),{update:h}=Se(),{debounce:d,cancel:n}=ue(),l=ae(),p=c([]),s=c(null),m=c("table"),u=c(10),v=c({}),f=c(1),A=()=>{if(l&&l.currentRoute.value.meta[e.tableCode]){const o=l.currentRoute.value.meta[e.tableCode];p.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,m.value=o.mode,v.value=o.filters,f.value=o.page}else r.value&&(p.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(s.value={key:r.value.sortByKey,order:r.value.sortByOrder}),m.value=r.value.mode)},E=o=>{p.value=o,d(g,5e3)},K=o=>{m.value=o,d(g,5e3)},M=o=>{s.value=o,d(g,5e3)},H=o=>{u.value=o,d(g,5e3)},j=o=>{v.value=o,T()},q=o=>{f.value=o,T()},g=()=>{var o,P;T(),h(e.tableCode,{columns:p.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(P=s.value)==null?void 0:P.order,mode:m.value})},T=()=>{l&&(l.currentRoute.value.meta={...l.currentRoute.value.meta,[e.tableCode]:{columns:p.value,filters:v.value,rowsPerPage:u.value,sortBy:s.value,mode:m.value,page:f.value}})};return X(()=>{n(),g()}),R(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),R(r,()=>{A()}),{gettingUserOrganisationTable:i,innerRowsPerPage:u,innerFilters:v,innerHeaders:p,innerSortBy:s,innerMode:m,innerPage:f,updateRowsPerPage:H,updateFilters:j,updateHeaders:E,updateSortBy:M,updateMode:K,updatePage:q}}});function Ce(e,t,i,r,h,d){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Q({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(p,s)=>({name:s,fn:b(m=>[ee(e.$slots,s,te(oe(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=L(V,[["render",Ce]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ro={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
