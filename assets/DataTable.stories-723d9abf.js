import{G as z}from"./deviceOrganisations.mock-ce959f60.js";import{j as k,e as J,I as F,J as w,K as U,L as b,M as W,A as a,d as c,$ as X,w as R,Y,Z,B as Q,R as ee,W as te,X as oe}from"./vue.esm-bundler-7c237656.js";import{u as ae}from"./vue-router-0a0ca0f7.js";import{F as re,V as ne}from"./FSLoader-ff2c3104.js";import{_ as D}from"./FSCol-76ddd6d9.js";import{_ as S}from"./FSRow-0e15f868.js";import{u as se,C as ie}from"./useColors-8171fc39.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-5d7851f1.js";import{F as me}from"./FSDataTableUI-0cb7acee.js";import{C as pe}from"./base-cc0281c0.js";import{S as de}from"./serviceFactory-7552fe10.js";import{C as $}from"./composableFactory-08360cd4.js";import{u as ue}from"./useDebounce-3b8c8385.js";import{F as ce}from"./FSGroupTileUI-23236f3e.js";import"./css-aa928277.js";import"./color-8b3e8a76.js";import"./theme-6b978bcd.js";import"./dimensions-506d0d5f.js";import"./elevation-322d7ef7.js";import"./locale-842c83ae.js";import"./proxiedModel-255ed77f.js";import"./useRender-e696dd75.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-2107f3ac.js";import"./FSIcon-84236a8c.js";import"./VIcon-ea625dc1.js";import"./tag-d0e3859f.js";import"./FSSpan-661158f8.js";import"./useSlots-338ea3fb.js";import"./useRules-30f7bcaa.js";import"./VSelectionControl-4d654956.js";import"./density-ba2627df.js";import"./index-b834f342.js";import"./VLabel-25f2a1ef.js";import"./VInput-cb53917c.js";import"./index-bed3da0c.js";import"./transition-99224378.js";import"./FSCard-be090350.js";import"./FSText-c8879522.js";import"./FSSearchField-be33ceb2.js";import"./FSTextField-1126ba2f.js";import"./VField-1b5a23ea.js";import"./loader-1ca0c22d.js";import"./VProgressCircular-84d930cf.js";import"./resizeObserver-78a25be2.js";import"./anchor-4da81316.js";import"./rounded-5c48e6dc.js";import"./VDefaultsProvider-8ad05cd7.js";import"./forwardRefs-e658ad70.js";import"./FSButton-f0f5de23.js";import"./FSClickable-b2b2bac7.js";import"./VTextField-4e99c7f1.js";import"./index-8f8aa2a2.js";import"./useTranslations-5148abf7.js";import"./FSSelectField-87d9471e.js";import"./FSDialogMenu-de087113.js";import"./VDialog-ed113aaf.js";import"./VOverlay-215d3759.js";import"./display-f7c4d7d9.js";import"./lazy-ba583f92.js";import"./router-0c914c7c.js";import"./scopeId-01507e41.js";import"./FSRadioGroup-89330635.js";import"./FSFadeOut-0e321526.js";import"./VSelect-6f1247c6.js";import"./VMenu-ecd47b95.js";import"./ssrBoot-ce89aa70.js";import"./border-07f356f9.js";import"./VImg-b5b2f547.js";import"./VDivider-01b0de30.js";import"./VSlideGroup-688ca79d.js";import"./goto-5a330938.js";import"./group-114c8e76.js";import"./FSDivider-3ff5f8ef.js";import"./FSChip-eaba3369.js";import"./FSOptionGroup-6069d02d.js";import"./FSSlideGroup-3826bb87.js";import"./FSButtonNextIcon-c829e5dd.js";import"./FSWrapGroup-1451daa8.js";import"./FSToggleSet-60e07ad2.js";import"./VBtn-0c5a0e13.js";import"./filter-ec24e360.js";import"./useAppOrganisationId-db575a42.js";import"./lodash-569b8a6d.js";import"./FSImage-fff4b1cc.js";import"./base-0de1729e.js";import"./FSColor-dd53ee5a.js";import"./FSTile-869e6106.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${pe()}/user-organisation-tables`,_=e=>`${fe()}/${encodeURIComponent(e)}`,x=new de("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),ye=$.get(x),Se=$.update(x),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=se(),t=e(ie.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,i,r,h,d){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:W(e.style)},{default:b(()=>[a(S,{align:"bottom-center"},{default:b(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:b(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:b(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:me},props:{tableCode:{type:String,required:!0}},setup(e){const{get:t,getting:i,entity:r}=ye(),{update:h}=Se(),{debounce:d,cancel:n}=ue(),l=ae(),p=c([]),s=c(null),m=c("table"),u=c(10),v=c({}),f=c(1),A=()=>{if(l&&l.currentRoute.value.meta[e.tableCode]){const o=l.currentRoute.value.meta[e.tableCode];p.value=o.columns,u.value=o.rowsPerPage,s.value=o.sortBy,m.value=o.mode,v.value=o.filters,f.value=o.page}else r.value&&(p.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(s.value={key:r.value.sortByKey,order:r.value.sortByOrder}),m.value=r.value.mode)},E=o=>{p.value=o,d(g,5e3)},K=o=>{m.value=o,d(g,5e3)},M=o=>{s.value=o,d(g,5e3)},H=o=>{u.value=o,d(g,5e3)},j=o=>{v.value=o,T()},q=o=>{f.value=o,T()},g=()=>{var o,P;T(),h(e.tableCode,{columns:p.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:u.value,sortByKey:(o=s.value)==null?void 0:o.key,sortByOrder:(P=s.value)==null?void 0:P.order,mode:m.value})},T=()=>{l&&(l.currentRoute.value.meta={...l.currentRoute.value.meta,[e.tableCode]:{columns:p.value,filters:v.value,rowsPerPage:u.value,sortBy:s.value,mode:m.value,page:f.value}})};return X(()=>{n(),g()}),R(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),R(r,()=>{A()}),{gettingUserOrganisationTable:i,innerRowsPerPage:u,innerFilters:v,innerHeaders:p,innerSortBy:s,innerMode:m,innerPage:f,updateRowsPerPage:H,updateFilters:j,updateHeaders:E,updateSortBy:M,updateMode:K,updatePage:q}}});function Ce(e,t,i,r,h,d){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,Q({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(p,s)=>({name:s,fn:b(m=>[ee(e.$slots,s,te(oe(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=L(V,[["render",Ce]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const no={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
