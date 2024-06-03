import{G as K}from"./deviceOrganisations.mock-339d6ab6.js";import{j as O,f as I,g as j,D as S,E as T,F as y,G as d,W as M,M as r,Z as z,w as C,U as H,V as W,A as Z,R as J,N as Q,O as X}from"./vue.esm-bundler-838daa40.js";import{F as Y,V as ee}from"./FSLoader-e5a4173e.js";import{_ as B}from"./FSCol-44fe82a9.js";import{_ as c}from"./FSRow-753b58e5.js";import{u as te,C as ae}from"./useColors-9d29fce3.js";import{_ as k}from"./_plugin-vue_export-helper-c27b6911.js";import{V as oe}from"./VSpacer-7ad9c022.js";import{F as re}from"./FSDataTableUI-0bd32cc9.js";import{C as ne}from"./base-ef43f4ed.js";import{S as se}from"./serviceFactory-2dfad3af.js";import{C as D}from"./composableFactory-5509dfbf.js";import{u as ie}from"./FSFadeOut-ec9d1b7d.js";import{F as le}from"./FSGroupTileUI-1724b246.js";import{F as me}from"./FSSlideGroup-0181fe8e.js";import{F as de}from"./FSTagGroup-dd842bac.js";import"./css-67cfec15.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./dimensions-be952165.js";import"./elevation-c2192325.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./useRender-f6a4770d.js";import"./_commonjsHelpers-725317a4.js";import"./index-a0e5e2a3.js";import"./vue-router-06cd44be.js";import"./uuid-08309875.js";import"./FSCheckbox-c67676d0.js";import"./FSIcon-212b990d.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./useRules-cda8e231.js";import"./VSelectionControl-b5e8c167.js";import"./density-e1cdced2.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./FSCard-e5e470ea.js";import"./FSText-0819f919.js";import"./FSSearchField-5cea187d.js";import"./FSTextField-8a8a58fd.js";import"./VField-47939064.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-8a94f710.js";import"./FSClickable-80b82e76.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSSelectField-2649578c.js";import"./FSDialogMenu-79e8bccd.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-dc4503b8.js";import"./VSelect-bb6508eb.js";import"./VMenu-ec057191.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSDivider-4e9442e5.js";import"./FSChip-d01d58a4.js";import"./FSOptionGroup-c5857100.js";import"./FSWrapGroup-8fd0c06f.js";import"./FSToggleSet-e965e85d.js";import"./VBtn-a5dad0d3.js";import"./filter-e8ac40d9.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-569b8a6d.js";import"./FSImage-6d919371.js";import"./base-0de1729e.js";import"./FSColor-8a6026bc.js";import"./FSTile-a17dbbf3.js";import"./FSTag-d96d667c.js";class pe{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}class ue{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ce{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(n=>new ue(n)))??[]}}class ge extends ce{constructor(t){super(t)}}const be=()=>`${ne()}/user-organisation-tables`,w=e=>`${be()}/${encodeURIComponent(e)}`,R=new se("userOrgansiationTable",ge).create(e=>e.build(e.addGet(w),e.addUpdate(w),e.addNotify())),fe=D.get(R),ve=D.update(R),v=O({}),Se=new pe,Te=()=>Se.call(()=>({getTable:i=>v.value[i]!=null?v.value[i]:null,setTable:(i,n)=>{v.value[i]={...n}}})),G=I({name:"FSLoadDataTable",components:{FSLoader:Y,FSCol:B,FSRow:c},setup(){const{getColors:e}=te(),t=e(ae.Background);return{style:j(()=>({"--fs-load-data-table-background-color":t.base}))}}});function ye(e,t,i,n,g,p){const o=S("FSLoader");return T(),y(B,{class:"fs-load-data-table",gap:"16px",style:M(e.style)},{default:d(()=>[r(c,{align:"bottom-center"},{default:d(()=>[r(o,{variant:"input"}),r(o,{variant:"button"}),r(oe),r(o,{variant:"button"}),r(o,{variant:"button"})]),_:1}),r(c,null,{default:d(()=>[r(o,{variant:"chip"}),r(o,{variant:"chip"}),r(o,{variant:"chip"})]),_:1}),r(ee,{type:"table-row-divider@10"}),r(c,{align:"center-right"},{default:d(()=>[r(o,{height:"16px",width:"100px"}),r(o,{width:"120px",height:["40px","36px"]}),r(o,{variant:"button"}),r(o,{variant:"button"}),r(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const he=k(G,[["render",ye]]);G.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const L=I({name:"FSDataTable",components:{FSLoadDataTable:he,FSDataTableUI:re},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3}},setup(e){const{get:t,getting:i,entity:n}=fe(),{update:g}=ve(),{getTable:p,setTable:o}=Te(),{debounce:l,cancel:h}=ie(),a=O({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),b=()=>{p(e.tableCode)?a.value=p(e.tableCode):n.value&&(a.value={headers:n.value.columns,sortBy:{key:n.value.sortByKey,order:n.value.sortByOrder},mode:n.value.mode,rowsPerPage:n.value.rowsPerPage,filters:{},page:1})},$=s=>{a.value&&(a.value.headers=s,l(m,e.debounceTime))},V=s=>{a.value&&(a.value.mode=s,l(m,e.debounceTime))},N=s=>{a.value&&(a.value.sortBy=s,l(m,e.debounceTime))},E=s=>{a.value&&(a.value.rowsPerPage=s,l(m,e.debounceTime))},A=s=>{a.value&&(a.value.filters=s,o(e.tableCode,a.value))},q=s=>{a.value&&(a.value.page=s,o(e.tableCode,a.value))},m=()=>{var s,F;a.value&&(o(e.tableCode,a.value),g(e.tableCode,{columns:a.value.headers.map(f=>({columnId:f.columnId,hidden:f.hidden,index:f.index})),rowsPerPage:a.value.rowsPerPage,sortByKey:((s=a.value.sortBy)==null?void 0:s.key)??null,sortByOrder:((F=a.value.sortBy)==null?void 0:F.order)??null,mode:a.value.mode}))};return z(()=>{h(),m()}),C(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),C(n,()=>{b()}),{gettingUserOrganisationTable:i,table:a,updateRowsPerPage:E,updateFilters:A,updateHeaders:$,updateSortBy:N,updateMode:V,updatePage:q}}});function Fe(e,t,i,n,g,p){const o=S("FSLoadDataTable"),l=S("FSDataTableUI");return e.gettingUserOrganisationTable?(T(),y(o,{key:0})):(T(),y(l,Z({key:1,headers:e.table.headers,mode:e.table.mode,sortBy:e.table.sortBy,rowsPerPage:e.table.rowsPerPage,filters:e.table.filters,page:e.table.page,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),H({_:2},[W(e.$slots,(h,a)=>({name:a,fn:d(b=>[J(e.$slots,a,Q(X(b)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const x=k(L,[["render",Fe]]);L.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const na={title:"Foundation/Core/Lists/DataTable",component:x,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},u={args:{args:{tableCode:"groups1",items:K,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")}}},render:(e,{argTypes:t})=>({components:{FSDataTable:x,FSGroupTileUI:le,FSSlideGroup:me,FSTagGroup:de},props:Object.keys(t),setup(){return{...e,getColor:n=>{if(n)return n.code==="number1"?"primary":"success"}}},template:`
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
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
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
    </div>`})};var U,P,_;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      FSGroupTileUI,
      FSSlideGroup,
      FSTagGroup
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
          <template #item.tags="{ item }">
            <FSTagGroup
              variant="slide"
              :editable="false"
              :tags="item.tags"
            />
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
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const sa=["Variations"];export{u as Variations,sa as __namedExportsOrder,na as default};
