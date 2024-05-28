import{G as z}from"./deviceOrganisations.mock-4ebc3d32.js";import{f as k,g as J,I as F,J as w,K as U,L as b,Z as Q,A as a,j as c,$ as X,w as R,X as Y,Y as Z,B as W,V as ee,Q as te,R as oe}from"./vue.esm-bundler-cd768bc3.js";import{u as ae}from"./vue-router-66d8d4ca.js";import{F as re,V as ne}from"./FSLoader-c57e8f50.js";import{_ as D}from"./FSCol-ff457bc3.js";import{_ as S}from"./FSRow-1d7c2545.js";import{u as ie,C as se}from"./useColors-91ab292c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-0c52efc7.js";import{F as me}from"./FSDataTableUI-8f8c4cf2.js";import{C as de}from"./base-a00c89a9.js";import{S as pe}from"./serviceFactory-2dfad3af.js";import{C as $}from"./composableFactory-c82cc213.js";import{u as ue}from"./useDebounce-8f204f15.js";import{F as ce}from"./FSGroupTileUI-eb2751e3.js";import"./css-c2ea3b68.js";import"./color-4e667524.js";import"./theme-33f5ac1a.js";import"./dimensions-9d1d90d7.js";import"./elevation-7537bf82.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./useRender-b3fd6f8b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-0f33b66c.js";import"./FSIcon-203715fb.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-e9dab1c2.js";import"./density-80e773e2.js";import"./index-f4fa4c36.js";import"./VLabel-a834020c.js";import"./VInput-5fe9e616.js";import"./index-055d6469.js";import"./transition-2948fa2b.js";import"./FSCard-0de7b634.js";import"./FSText-92e9b97f.js";import"./FSSearchField-8c597939.js";import"./FSTextField-8af1deda.js";import"./VField-d090f013.js";import"./loader-3bcfb6cd.js";import"./VProgressCircular-f6ca2848.js";import"./resizeObserver-054c2f9a.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./useTranslations-3c37761e.js";import"./FSSelectField-b12274a3.js";import"./FSDialogMenu-72c7cda0.js";import"./VDialog-c1d28576.js";import"./VOverlay-43a7a638.js";import"./display-23d3bc4a.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./FSRadioGroup-55d3a9e5.js";import"./FSFadeOut-ad56c427.js";import"./VSelect-faa1eb31.js";import"./VMenu-501341cc.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";import"./VSlideGroup-61bc8bc9.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./FSDivider-0f79eca0.js";import"./FSChip-0b35e4ee.js";import"./FSOptionGroup-680b550d.js";import"./FSSlideGroup-df6ede8b.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./FSWrapGroup-8dc071a4.js";import"./FSToggleSet-ab7c55f3.js";import"./VBtn-c02fe116.js";import"./filter-7dfa57ec.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./FSImage-f2b07c4c.js";import"./base-0de1729e.js";import"./FSColor-24c53974.js";import"./FSTile-1d7371a7.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var s;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((s=t.columns)==null?void 0:s.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${de()}/user-organisation-tables`,_=e=>`${fe()}/${encodeURIComponent(e)}`,x=new pe("userOrgansiationTable",ve).create(e=>e.build(e.addGet(_),e.addUpdate(_),e.addNotify())),ye=$.get(x),Se=$.update(x),V=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=ie(),t=e(se.Background);return{style:J(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Te(e,t,s,r,T,p){const n=F("FSLoader");return w(),U(D,{class:"fs-load-data-table",gap:"16px",style:Q(e.style)},{default:b(()=>[a(S,{align:"bottom-center"},{default:b(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:b(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:b(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const he=L(V,[["render",Te]]);V.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const G=k({name:"FSDataTable",components:{FSLoadDataTable:he,FSDataTableUI:me},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3}},setup(e){const{get:t,getting:s,entity:r}=ye(),{update:T}=Se(),{debounce:p,cancel:n}=ue(),l=ae(),d=c([]),i=c(null),m=c("table"),u=c(10),v=c({}),f=c(1),A=()=>{if(l&&l.currentRoute.value.meta[e.tableCode]){const o=l.currentRoute.value.meta[e.tableCode];d.value=o.columns,u.value=o.rowsPerPage,i.value=o.sortBy,m.value=o.mode,v.value=o.filters,f.value=o.page}else r.value&&(d.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(i.value={key:r.value.sortByKey,order:r.value.sortByOrder}),m.value=r.value.mode)},E=o=>{d.value=o,p(g,e.debounceTime)},K=o=>{m.value=o,p(g,e.debounceTime)},q=o=>{i.value=o,p(g,e.debounceTime)},H=o=>{u.value=o,p(g,e.debounceTime)},M=o=>{v.value=o,h()},j=o=>{f.value=o,h()},g=()=>{var o,P;h(),T(e.tableCode,{columns:d.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:u.value,sortByKey:((o=i.value)==null?void 0:o.key)??null,sortByOrder:((P=i.value)==null?void 0:P.order)??null,mode:m.value})},h=()=>{l&&(l.currentRoute.value.meta={...l.currentRoute.value.meta,[e.tableCode]:{columns:d.value,filters:v.value,rowsPerPage:u.value,sortBy:i.value,mode:m.value,page:f.value}})};return X(()=>{n(),g()}),R(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),R(r,()=>{A()}),{gettingUserOrganisationTable:s,innerRowsPerPage:u,innerFilters:v,innerHeaders:d,innerSortBy:i,innerMode:m,innerPage:f,updateRowsPerPage:H,updateFilters:M,updateHeaders:E,updateSortBy:q,updateMode:K,updatePage:j}}});function Ce(e,t,s,r,T,p){const n=F("FSLoadDataTable"),l=F("FSDataTableUI");return e.gettingUserOrganisationTable?(w(),U(n,{key:0})):(w(),U(l,W({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Y({_:2},[Z(e.$slots,(d,i)=>({name:i,fn:b(m=>[ee(e.$slots,i,te(oe(m)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=L(G,[["render",Ce]]);G.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const no={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
}`,...(B=(O=y.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const io=["Variations"];export{y as Variations,io as __namedExportsOrder,no as default};
