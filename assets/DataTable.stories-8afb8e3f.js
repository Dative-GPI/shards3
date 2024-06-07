import{G as z}from"./deviceOrganisations.mock-a1cdf2c0.js";import{j as O,f as R,g as _,D as v,E as y,F as h,G as u,W as H,Q as n,Z as M,w,U as Q,V as W,A as Z,O as J,R as X,S as Y}from"./vue.esm-bundler-1de4ab84.js";import{F as ee,V as te}from"./FSLoader-404ee90e.js";import{_ as I}from"./FSCol-044a4f0a.js";import{_ as c}from"./FSRow-0f15051e.js";import{u as ae,C as oe}from"./useColors-6201f155.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{V as re}from"./VSpacer-8f10d0b5.js";import{F as ne}from"./FSDataTableUI-63baba3f.js";import{C as se}from"./base-d4d5271d.js";import{S as ie}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-7269e9d8.js";import{u as le}from"./FSFadeOut-649e8ed5.js";import{F as me}from"./FSGroupTileUI-8783b494.js";import{F as ue}from"./FSSlideGroup-0176bc8d.js";import{F as de}from"./FSTagGroup-6b1b7ab8.js";import{F as pe}from"./FSButton-6b0685b3.js";import"./css-73f1b6e3.js";import"./color-69562b87.js";import"./theme-fee57059.js";import"./dimensions-60fb7050.js";import"./elevation-e7de2c09.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./useRender-b44b777b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./vue-router-627bc926.js";import"./uuid-08309875.js";import"./FSCheckbox-7bc44d7a.js";import"./FSIcon-08483052.js";import"./VIcon-9f1a137c.js";import"./tag-58633b3a.js";import"./FSSpan-c5b5f93b.js";import"./useSlots-78ee3d45.js";import"./useRules-14fb7f63.js";import"./VSelectionControl-8efa9c46.js";import"./density-99305267.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./FSCard-23b564db.js";import"./FSText-3b69d1d8.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./index-bd033a0f.js";import"./useTranslations-df2010ef.js";import"./FSSelectField-72f459f2.js";import"./FSDialogMenu-a98f6da7.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./VSelect-46cfbf6f.js";import"./VMenu-75bfc7ff.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSDivider-1d40a351.js";import"./FSChip-5509d5fb.js";import"./FSOptionGroup-f5884c31.js";import"./FSClickable-00bc2ab2.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSToggleSet-e1e3b1e0.js";import"./VBtn-ccdb3dd4.js";import"./filter-6a45c8c8.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./lodash-569b8a6d.js";import"./FSImage-1712f744.js";import"./base-0de1729e.js";import"./FSColor-a4479261.js";import"./FSTile-f9e03527.js";import"./FSTag-10c63139.js";class ce{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class fe{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(s=>new ge(s)))??[]}}class be extends fe{constructor(t){super(t)}}const Se=()=>`${se()}/user-organisation-tables`,C=e=>`${Se()}/${encodeURIComponent(e)}`,G=new ie("userOrgansiationTable",be).create(e=>e.build(e.addGet(C),e.addUpdate(C),e.addNotify())),ve=D.get(G),ye=D.update(G),S=O({}),he=new ce,Fe=()=>he.call(()=>({getTable:i=>S.value[i]!=null?S.value[i]:null,setTable:(i,s)=>{S.value[i]={...s}}})),L=R({name:"FSLoadDataTable",components:{FSLoader:ee,FSCol:I,FSRow:c},setup(){const{getColors:e}=ae(),t=e(oe.Background);return{style:_(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Te(e,t,i,s,g,d){const r=v("FSLoader");return y(),h(I,{class:"fs-load-data-table",gap:"16px",style:H(e.style)},{default:u(()=>[n(c,{align:"bottom-center"},{default:u(()=>[n(r,{variant:"input"}),n(r,{variant:"button"}),n(re),n(r,{variant:"button"}),n(r,{variant:"button"})]),_:1}),n(c,null,{default:u(()=>[n(r,{variant:"chip"}),n(r,{variant:"chip"}),n(r,{variant:"chip"})]),_:1}),n(te,{type:"table-row-divider@10"}),n(c,{align:"center-right"},{default:u(()=>[n(r,{height:"16px",width:"100px"}),n(r,{width:"120px",height:["40px","36px"]}),n(r,{variant:"button"}),n(r,{variant:"button"}),n(r,{variant:"button"})]),_:1})]),_:1},8,["style"])}const we=k(L,[["render",Te]]);L.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const x=R({name:"FSDataTable",components:{FSLoadDataTable:we,FSDataTableUI:ne},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})},customSortRaws:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:s}=ve(),{update:g}=ye(),{getTable:d,setTable:r}=Fe(),{debounce:l,cancel:F}=le(),a=O({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),f=_(()=>a.value?a.value.headers.map(o=>({...o,sort:o.value&&e.customSorts[o.value]||null,sortRaw:o.value&&e.customSortRaws[o.value]||null})):[]),V=()=>{d(e.tableCode)?a.value=d(e.tableCode):s.value&&(a.value={headers:s.value.columns,sortBy:{key:s.value.sortByKey,order:s.value.sortByOrder},mode:s.value.mode,rowsPerPage:s.value.rowsPerPage,filters:{},page:1})},N=o=>{a.value&&(a.value.headers=o,l(m,e.debounceTime))},q=o=>{a.value&&(a.value.mode=o,l(m,e.debounceTime))},E=o=>{a.value&&(a.value.sortBy=o,l(m,e.debounceTime))},A=o=>{a.value&&(a.value.rowsPerPage=o,l(m,e.debounceTime))},j=o=>{a.value&&(a.value.filters=o,r(e.tableCode,a.value))},K=o=>{a.value&&(a.value.page=o,r(e.tableCode,a.value))},m=()=>{var o,T;a.value&&(r(e.tableCode,a.value),g(e.tableCode,{columns:a.value.headers.map(b=>({columnId:b.columnId,hidden:b.hidden,index:b.index})),rowsPerPage:a.value.rowsPerPage,sortByKey:((o=a.value.sortBy)==null?void 0:o.key)??null,sortByOrder:((T=a.value.sortBy)==null?void 0:T.order)??null,mode:a.value.mode}))};return M(()=>{F(),m()}),w(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),w(s,()=>{V()}),{gettingUserOrganisationTable:i,headers:f,table:a,updateRowsPerPage:A,updateFilters:j,updateHeaders:N,updateSortBy:E,updateMode:q,updatePage:K}}});function Ce(e,t,i,s,g,d){const r=v("FSLoadDataTable"),l=v("FSDataTableUI");return e.gettingUserOrganisationTable?(y(),h(r,{key:0})):(y(),h(l,Z({key:1,headers:e.headers,mode:e.table.mode,sortBy:e.table.sortBy,rowsPerPage:e.table.rowsPerPage,filters:e.table.filters,page:e.table.page,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Q({_:2},[W(e.$slots,(F,a)=>({name:a,fn:u(f=>[J(e.$slots,a,X(Y(f)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const $=k(x,[["render",Ce]]);x.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"customSortRaws",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ia={title:"Foundation/Core/Lists/DataTable",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}},customSortRaws:{none:(e,t)=>{if((e==null?void 0:e.id)==null&&(t==null?void 0:t.id)==null)return 0;if((e==null?void 0:e.id)==null||parseFloat(e.id)<parseFloat(t.id))return-1;if((t==null?void 0:t.id)==null||parseFloat(e.id)>parseFloat(t.id))return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:$,FSGroupTileUI:me,FSSlideGroup:ue,FSTagGroup:de,FSButton:pe},props:Object.keys(t),setup(){return{...e,getColor:s=>{if(s)return s.code==="number1"?"primary":"success"}}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          :customSorts="args.customSorts"
          :customSortRaws="args.customSortRaws"
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.none="{ item }">
            {{ item.id }}
          </template>
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
    </div>`})};var U,P,B;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      },
      customSorts: {
        'tags': (a: any, b: any) => {
          if (a == null && b == null || a.length == b.length) {
            return 0;
          }
          if (a == null || a.length < b.length) {
            return -1;
          }
          if (b == null || a.length > b.length) {
            return 1;
          }
        }
      },
      customSortRaws: {
        'none': (a: any, b: any) => {
          if (a?.id == null && b?.id == null) {
            return 0;
          }
          if (a?.id == null || parseFloat(a.id) < parseFloat(b.id)) {
            return -1;
          }
          if (b?.id == null || parseFloat(a.id) > parseFloat(b.id)) {
            return 1;
          }
        }
      }
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDataTable,
      FSGroupTileUI,
      FSSlideGroup,
      FSTagGroup,
      FSButton
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
          :customSorts="args.customSorts"
          :customSortRaws="args.customSortRaws"
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.none="{ item }">
            {{ item.id }}
          </template>
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
}`,...(B=(P=p.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const la=["Variations"];export{p as Variations,la as __namedExportsOrder,ia as default};
