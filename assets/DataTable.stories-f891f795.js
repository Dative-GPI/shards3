import{G as z}from"./deviceOrganisations.mock-a1cdf2c0.js";import{j as _,f as O,g as D,D as S,E as h,F as y,G as u,W as H,Q as n,Z as M,w as C,U as Q,V as W,A as Z,O as J,R as X,S as Y}from"./vue.esm-bundler-1de4ab84.js";import{F as ee,V as te}from"./FSLoader-404ee90e.js";import{_ as k}from"./FSCol-044a4f0a.js";import{_ as c}from"./FSRow-0f15051e.js";import{u as ae,C as oe}from"./useColors-6201f155.js";import{_ as I}from"./_plugin-vue_export-helper-c27b6911.js";import{V as re}from"./VSpacer-8f10d0b5.js";import{F as ne}from"./FSDataTableUI-63baba3f.js";import{C as se}from"./base-d4d5271d.js";import{S as ie}from"./serviceFactory-2dfad3af.js";import{C as R}from"./composableFactory-7269e9d8.js";import{u as le}from"./FSFadeOut-649e8ed5.js";import{F as me}from"./FSGroupTileUI-8783b494.js";import{F as ue}from"./FSSlideGroup-0176bc8d.js";import{F as pe}from"./FSTagGroup-6b1b7ab8.js";import{F as de}from"./FSButton-6b0685b3.js";import"./css-73f1b6e3.js";import"./color-69562b87.js";import"./theme-fee57059.js";import"./dimensions-60fb7050.js";import"./elevation-e7de2c09.js";import"./locale-f0128dd0.js";import"./proxiedModel-ef310637.js";import"./useRender-b44b777b.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./vue-router-627bc926.js";import"./uuid-08309875.js";import"./FSCheckbox-7bc44d7a.js";import"./FSIcon-08483052.js";import"./VIcon-9f1a137c.js";import"./tag-58633b3a.js";import"./FSSpan-c5b5f93b.js";import"./useSlots-78ee3d45.js";import"./useRules-14fb7f63.js";import"./VSelectionControl-8efa9c46.js";import"./density-99305267.js";import"./index-8cb030a7.js";import"./VLabel-3fa2f1ca.js";import"./VInput-73e9b49a.js";import"./index-00d0b77b.js";import"./transition-41c2ee15.js";import"./FSCard-23b564db.js";import"./FSText-3b69d1d8.js";import"./FSSearchField-3ae9dd15.js";import"./FSTextField-5eb8ba7e.js";import"./VField-c7605df9.js";import"./loader-16a3b845.js";import"./VProgressCircular-a8c57eaa.js";import"./resizeObserver-5af66ffc.js";import"./anchor-3e311b48.js";import"./rounded-aeb398ab.js";import"./VDefaultsProvider-4480b636.js";import"./forwardRefs-e658ad70.js";import"./index-bd033a0f.js";import"./useTranslations-df2010ef.js";import"./FSSelectField-72f459f2.js";import"./FSDialogMenu-a98f6da7.js";import"./VDialog-8d870cf0.js";import"./VOverlay-080218d9.js";import"./display-eddfdf3b.js";import"./lazy-927b6a5f.js";import"./router-69d8d382.js";import"./scopeId-de91819b.js";import"./FSRadioGroup-39907278.js";import"./VSelect-46cfbf6f.js";import"./VMenu-75bfc7ff.js";import"./ssrBoot-a25f980b.js";import"./border-5994344b.js";import"./VImg-4aa69f50.js";import"./VDivider-d8f9947c.js";import"./VSlideGroup-4741a491.js";import"./goto-b83004ce.js";import"./group-03874e1e.js";import"./FSDivider-1d40a351.js";import"./FSChip-5509d5fb.js";import"./FSOptionGroup-f5884c31.js";import"./FSClickable-00bc2ab2.js";import"./FSWrapGroup-d7bfa2ed.js";import"./FSToggleSet-e1e3b1e0.js";import"./VBtn-ccdb3dd4.js";import"./filter-6a45c8c8.js";import"./useAppOrganisationId-5f5d3bd0.js";import"./lodash-569b8a6d.js";import"./FSImage-1712f744.js";import"./base-0de1729e.js";import"./FSColor-a4479261.js";import"./FSTile-f9e03527.js";import"./FSTag-10c63139.js";class ce{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}class ge{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class be{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(s=>new ge(s)))??[]}}class fe extends be{constructor(t){super(t)}}const ve=()=>`${se()}/user-organisation-tables`,U=e=>`${ve()}/${encodeURIComponent(e)}`,G=new ie("userOrgansiationTable",fe).create(e=>e.build(e.addGet(U),e.addUpdate(U),e.addNotify())),Se=R.get(G),he=R.update(G),v=_({}),ye=new ce,Te=()=>ye.call(()=>({getTable:i=>v.value[i]!=null?v.value[i]:null,setTable:(i,s)=>{v.value[i]={...s}}})),L=O({name:"FSLoadDataTable",components:{FSLoader:ee,FSCol:k,FSRow:c},setup(){const{getColors:e}=ae(),t=e(oe.Background);return{style:D(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Fe(e,t,i,s,g,p){const o=S("FSLoader");return h(),y(k,{class:"fs-load-data-table",gap:"16px",style:H(e.style)},{default:u(()=>[n(c,{align:"bottom-center"},{default:u(()=>[n(o,{variant:"input"}),n(o,{variant:"button"}),n(re),n(o,{variant:"button"}),n(o,{variant:"button"})]),_:1}),n(c,null,{default:u(()=>[n(o,{variant:"chip"}),n(o,{variant:"chip"}),n(o,{variant:"chip"})]),_:1}),n(te,{type:"table-row-divider@10"}),n(c,{align:"center-right"},{default:u(()=>[n(o,{height:"16px",width:"100px"}),n(o,{width:"120px",height:["40px","36px"]}),n(o,{variant:"button"}),n(o,{variant:"button"}),n(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Ce=I(L,[["render",Fe]]);L.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const x=O({name:"FSDataTable",components:{FSLoadDataTable:Ce,FSDataTableUI:ne},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:s}=Se(),{update:g}=he(),{getTable:p,setTable:o}=Te(),{debounce:l,cancel:T}=le(),a=_({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),b=D(()=>a.value?a.value.headers.map(r=>({...r,sort:r.value&&e.customSorts[r.value]||null})):[]),N=()=>{p(e.tableCode)?a.value=p(e.tableCode):s.value&&(a.value={headers:s.value.columns,sortBy:{key:s.value.sortByKey,order:s.value.sortByOrder},mode:s.value.mode,rowsPerPage:s.value.rowsPerPage,filters:{},page:1})},V=r=>{a.value&&(a.value.headers=r,l(m,e.debounceTime))},E=r=>{a.value&&(a.value.mode=r,l(m,e.debounceTime))},A=r=>{a.value&&(a.value.sortBy=r,l(m,e.debounceTime))},q=r=>{a.value&&(a.value.rowsPerPage=r,l(m,e.debounceTime))},j=r=>{a.value&&(a.value.filters=r,o(e.tableCode,a.value))},K=r=>{a.value&&(a.value.page=r,o(e.tableCode,a.value))},m=()=>{var r,F;a.value&&(o(e.tableCode,a.value),g(e.tableCode,{columns:a.value.headers.map(f=>({columnId:f.columnId,hidden:f.hidden,index:f.index})),rowsPerPage:a.value.rowsPerPage,sortByKey:((r=a.value.sortBy)==null?void 0:r.key)??null,sortByOrder:((F=a.value.sortBy)==null?void 0:F.order)??null,mode:a.value.mode}))};return M(()=>{T(),m()}),C(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),C(s,()=>{N()}),{gettingUserOrganisationTable:i,headers:b,table:a,updateRowsPerPage:q,updateFilters:j,updateHeaders:V,updateSortBy:A,updateMode:E,updatePage:K}}});function Ue(e,t,i,s,g,p){const o=S("FSLoadDataTable"),l=S("FSDataTableUI");return e.gettingUserOrganisationTable?(h(),y(o,{key:0})):(h(),y(l,Z({key:1,headers:e.headers,mode:e.table.mode,sortBy:e.table.sortBy,rowsPerPage:e.table.rowsPerPage,filters:e.table.filters,page:e.table.page,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),Q({_:2},[W(e.$slots,(T,a)=>({name:a,fn:u(b=>[J(e.$slots,a,X(Y(b)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const $=I(x,[["render",Ue]]);x.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const ia={title:"Foundation/Core/Lists/DataTable",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{tableCode:"groups1",items:z,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:$,FSGroupTileUI:me,FSSlideGroup:ue,FSTagGroup:pe,FSButton:de},props:Object.keys(t),setup(){return{...e,getColor:s=>{if(s)return s.code==="number1"?"primary":"success"}}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSDataTable
          :tableCode="args.tableCode"
          :items="args.items"
          :mode="args.mode"
          :rowColor="getColor"
          :showSelect="true"
          :customSorts="args.customSorts"
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
        </FSDataTable>
      </div>
    </div>`})};var w,P,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
          rowGap="4px"
          v-model="args.value"
        >
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
          </template>
          <template #item.code="{ item }">
            <FSButton
              :label="item.code"
            />
          </template>
        </FSDataTable>
      </div>
    </div>\`
  })
}`,...(B=(P=d.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const la=["Variations"];export{d as Variations,la as __namedExportsOrder,ia as default};
