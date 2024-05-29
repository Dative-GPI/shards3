import{G as z}from"./deviceOrganisations.mock-4ebc3d32.js";import{f as k,g as W,I,J as F,K as w,L as b,Z as J,A as a,j as c,$ as Q,w as P,X,Y,B as Z,V as ee,Q as te,R as oe}from"./vue.esm-bundler-cd768bc3.js";import{u as ae}from"./vue-router-66d8d4ca.js";import{F as re,V as ne}from"./FSLoader-c57e8f50.js";import{_ as D}from"./FSCol-ff457bc3.js";import{_ as S}from"./FSRow-1d7c2545.js";import{u as ie,C as se}from"./useColors-91ab292c.js";import{_ as L}from"./_plugin-vue_export-helper-c27b6911.js";import{V as le}from"./VSpacer-0c52efc7.js";import{F as de}from"./FSDataTableUI-ea991cd9.js";import{C as me}from"./base-a00c89a9.js";import{S as pe}from"./serviceFactory-2dfad3af.js";import{C as $}from"./composableFactory-c82cc213.js";import{u as ue}from"./useDebounce-8f204f15.js";import{F as ce}from"./FSGroupTileUI-eb2751e3.js";import"./css-c2ea3b68.js";import"./color-4e667524.js";import"./theme-33f5ac1a.js";import"./dimensions-9d1d90d7.js";import"./elevation-7537bf82.js";import"./locale-d1b7e37d.js";import"./proxiedModel-80cf7d0e.js";import"./useRender-b3fd6f8b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./FSCheckbox-0f33b66c.js";import"./FSIcon-203715fb.js";import"./VIcon-3b9ab711.js";import"./tag-bc86e39f.js";import"./FSSpan-da6dde8e.js";import"./useSlots-2af30a3d.js";import"./useRules-bb9e9594.js";import"./VSelectionControl-e9dab1c2.js";import"./density-80e773e2.js";import"./index-f4fa4c36.js";import"./VLabel-a834020c.js";import"./VInput-5fe9e616.js";import"./index-055d6469.js";import"./transition-2948fa2b.js";import"./FSCard-0de7b634.js";import"./FSText-92e9b97f.js";import"./FSSearchField-8c597939.js";import"./FSTextField-8af1deda.js";import"./VField-d090f013.js";import"./loader-3bcfb6cd.js";import"./VProgressCircular-f6ca2848.js";import"./resizeObserver-054c2f9a.js";import"./anchor-9469ffd7.js";import"./rounded-c9c22222.js";import"./VDefaultsProvider-22eb0e57.js";import"./forwardRefs-e658ad70.js";import"./FSButton-ecc11eb7.js";import"./FSClickable-95c940f4.js";import"./VTextField-d2eba149.js";import"./index-cc35ebf5.js";import"./useTranslations-3c37761e.js";import"./FSSelectField-b7cd016f.js";import"./FSDialogMenu-72c7cda0.js";import"./VDialog-c1d28576.js";import"./VOverlay-43a7a638.js";import"./display-23d3bc4a.js";import"./lazy-07480c2b.js";import"./router-12edcf18.js";import"./scopeId-7a393669.js";import"./FSRadioGroup-55d3a9e5.js";import"./FSFadeOut-ad56c427.js";import"./VSelect-9e784020.js";import"./VMenu-501341cc.js";import"./ssrBoot-a9e4f1d0.js";import"./border-d3eb62c5.js";import"./VImg-1d5e27a6.js";import"./VDivider-1fe66aeb.js";import"./VSlideGroup-cd82e4b3.js";import"./goto-fb9b6e06.js";import"./group-9e3f1093.js";import"./FSDivider-0f79eca0.js";import"./FSChip-0b35e4ee.js";import"./FSOptionGroup-1872d8bf.js";import"./FSSlideGroup-ce06c6c2.js";import"./FSButtonNextIcon-c5a49a0d.js";import"./VSlideGroupItem-249d9261.js";import"./FSWrapGroup-81657079.js";import"./FSToggleSet-a67ca94c.js";import"./VBtn-c02fe116.js";import"./filter-7dfa57ec.js";import"./useAppOrganisationId-7c704676.js";import"./lodash-569b8a6d.js";import"./FSImage-f2b07c4c.js";import"./base-0de1729e.js";import"./FSColor-24c53974.js";import"./FSTile-1d7371a7.js";class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var s;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((s=t.columns)==null?void 0:s.map(r=>new ge(r)))??[]}}class ve extends be{constructor(t){super(t)}}const fe=()=>`${me()}/user-organisation-tables`,O=e=>`${fe()}/${encodeURIComponent(e)}`,x=new pe("userOrgansiationTable",ve).create(e=>e.build(e.addGet(O),e.addUpdate(O),e.addNotify())),ye=$.get(x),Se=$.update(x),G=k({name:"FSLoadDataTable",components:{FSLoader:re,FSCol:D,FSRow:S},setup(){const{getColors:e}=ie(),t=e(se.Background);return{style:W(()=>({"--fs-load-data-table-background-color":t.base}))}}});function he(e,t,s,r,h,p){const n=I("FSLoader");return F(),w(D,{class:"fs-load-data-table",gap:"16px",style:J(e.style)},{default:b(()=>[a(S,{align:"bottom-center"},{default:b(()=>[a(n,{variant:"input"}),a(n,{variant:"button"}),a(le),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1}),a(S,null,{default:b(()=>[a(n,{variant:"chip"}),a(n,{variant:"chip"}),a(n,{variant:"chip"})]),_:1}),a(ne,{type:"table-row-divider@10"}),a(S,{align:"center-right"},{default:b(()=>[a(n,{height:"16px",width:"100px"}),a(n,{width:"120px",height:["40px","36px"]}),a(n,{variant:"button"}),a(n,{variant:"button"}),a(n,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Te=L(G,[["render",he]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const V=k({name:"FSDataTable",components:{FSLoadDataTable:Te,FSDataTableUI:de},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3}},setup(e){const{get:t,getting:s,entity:r}=ye(),{update:h}=Se(),{debounce:p,cancel:n}=ue(),l=ae(),m=c([]),i=c(null),d=c("table"),u=c(10),v=c({}),f=c(1),A=()=>{if(l&&l.currentRoute.value.meta[e.tableCode]){const o=l.currentRoute.value.meta[e.tableCode];m.value=o.columns,u.value=o.rowsPerPage,i.value=o.sortBy,d.value=o.mode,v.value=o.filters,f.value=o.page}else r.value&&(m.value=r.value.columns,u.value=r.value.rowsPerPage,r.value.sortByKey&&r.value.sortByOrder&&(i.value={key:r.value.sortByKey,order:r.value.sortByOrder}),d.value=r.value.mode)},E=o=>{m.value=o,p(g,e.debounceTime)},K=o=>{d.value=o,p(g,e.debounceTime)},M=o=>{i.value=o,p(g,e.debounceTime)},q=o=>{u.value=o,p(g,e.debounceTime)},H=o=>{v.value=o,T()},j=o=>{f.value=o,T()},g=()=>{var o,U;T(),h(e.tableCode,{columns:m.value.map(C=>({columnId:C.columnId,hidden:C.hidden,index:C.index})),rowsPerPage:u.value,sortByKey:((o=i.value)==null?void 0:o.key)??null,sortByOrder:((U=i.value)==null?void 0:U.order)??null,mode:d.value})},T=()=>{l&&(l.currentRoute.value.meta={...l.currentRoute.value.meta,[e.tableCode]:{columns:m.value,filters:v.value,rowsPerPage:u.value,sortBy:i.value,mode:d.value,page:f.value}})};return Q(()=>{n(),g()}),P(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),P(r,()=>{A()}),{gettingUserOrganisationTable:s,innerRowsPerPage:u,innerFilters:v,innerHeaders:m,innerSortBy:i,innerMode:d,innerPage:f,updateRowsPerPage:q,updateFilters:H,updateHeaders:E,updateSortBy:M,updateMode:K,updatePage:j}}});function Ce(e,t,s,r,h,p){const n=I("FSLoadDataTable"),l=I("FSDataTableUI");return e.gettingUserOrganisationTable?(F(),w(n,{key:0})):(F(),w(l,Z({key:1,headers:e.innerHeaders,mode:e.innerMode,sortBy:e.innerSortBy,rowsPerPage:e.innerRowsPerPage,filters:e.innerFilters,page:e.innerPage,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),X({_:2},[Y(e.$slots,(m,i)=>({name:i,fn:b(d=>[ee(e.$slots,i,te(oe(d)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const N=L(V,[["render",Ce]]);V.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const io={title:"Foundation/Core/Lists/DataTable",component:N,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={args:{args:{tableCode:"groups1",items:[...z,{id:"3",organisationId:"1",imageId:"1",icon:"mdi-numeric-1-circle",code:void 0,label:"With undefined filtrable/sortable",tags:[],path:[],groupsIds:["10","11"],deviceOrganisationsIds:["10","11","12"],modelsIds:[],recursiveGroupsIds:["10","11"],recursiveDeviceOrganisationsIds:["10","11","12"],recursiveModelsIds:[]}],value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:N,FSGroupTileUI:ce},props:Object.keys(t),setup(){return{...e,getColor:r=>{if(r)return r.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var R,_,B;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    args: {
      tableCode: "groups1",
      items: [...GROUPS, {
        id: "3",
        organisationId: "1",
        imageId: "1",
        icon: "mdi-numeric-1-circle",
        code: undefined,
        label: "With undefined filtrable/sortable",
        tags: [],
        path: [],
        groupsIds: ["10", "11"],
        deviceOrganisationsIds: ["10", "11", "12"],
        modelsIds: [],
        recursiveGroupsIds: ["10", "11"],
        recursiveDeviceOrganisationsIds: ["10", "11", "12"],
        recursiveModelsIds: []
      }],
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
}`,...(B=(_=y.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};const so=["Variations"];export{y as Variations,so as __namedExportsOrder,io as default};
