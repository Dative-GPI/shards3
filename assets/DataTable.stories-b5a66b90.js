import{G as M}from"./deviceOrganisations.mock-a1cdf2c0.js";import{j as O,f as I,g as k,D as S,E as h,F as y,G as u,W as z,M as n,Z as H,w as C,U as W,V as Z,A as J,R as Q,N as X,O as Y}from"./vue.esm-bundler-838daa40.js";import{F as ee,V as te}from"./FSLoader-cd805965.js";import{_ as B}from"./FSCol-44fe82a9.js";import{_ as c}from"./FSRow-753b58e5.js";import{u as ae,C as oe}from"./useColors-4ac7c452.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{V as re}from"./VSpacer-7ad9c022.js";import{F as ne}from"./FSDataTableUI-f23ba63b.js";import{C as se}from"./base-ef43f4ed.js";import{S as ie}from"./serviceFactory-f4b29260.js";import{C as R}from"./composableFactory-5509dfbf.js";import{u as le}from"./FSFadeOut-afe887fc.js";import{F as me}from"./FSGroupTileUI-2708a38d.js";import{F as ue}from"./FSSlideGroup-136b708c.js";import{F as de}from"./FSTagGroup-37ebaf73.js";import"./css-67cfec15.js";import"./color-3e53cf3d.js";import"./theme-f9f3e2d4.js";import"./dimensions-be952165.js";import"./elevation-c2192325.js";import"./locale-5633e5ee.js";import"./proxiedModel-3239cc3c.js";import"./useRender-f6a4770d.js";import"./_commonjsHelpers-de833af9.js";import"./index-2f699bdb.js";import"./vue-router-06cd44be.js";import"./uuid-08309875.js";import"./FSCheckbox-42258fdd.js";import"./FSIcon-f74a02b4.js";import"./VIcon-281b119b.js";import"./tag-d73e64d5.js";import"./FSSpan-3df08200.js";import"./useSlots-6ce8c1a9.js";import"./useRules-cda8e231.js";import"./VSelectionControl-b5e8c167.js";import"./density-e1cdced2.js";import"./index-a755b9d6.js";import"./VLabel-907d1b92.js";import"./VInput-5523e371.js";import"./index-6fa9bdc1.js";import"./transition-ee4dd36d.js";import"./FSCard-1b892764.js";import"./FSText-e5eddad3.js";import"./FSSearchField-95a58430.js";import"./FSTextField-55dfca8e.js";import"./VField-b386f766.js";import"./loader-62f4df25.js";import"./VProgressCircular-95e816d7.js";import"./resizeObserver-21650322.js";import"./anchor-dbd6e54f.js";import"./rounded-94d04543.js";import"./VDefaultsProvider-a165414e.js";import"./forwardRefs-e658ad70.js";import"./FSButton-255c9a8d.js";import"./FSClickable-5b3f625e.js";import"./index-e75f540f.js";import"./useTranslations-419c1021.js";import"./FSSelectField-3ade4d29.js";import"./FSDialogMenu-0e4010b4.js";import"./VDialog-7d878a07.js";import"./VOverlay-a0b245b4.js";import"./display-ba09a035.js";import"./lazy-f517c978.js";import"./router-d69bdbea.js";import"./scopeId-02ca7b8d.js";import"./FSRadioGroup-a74abc32.js";import"./VSelect-d3bb8d0c.js";import"./VMenu-ec057191.js";import"./ssrBoot-00bf1891.js";import"./border-749eb26c.js";import"./VImg-26cf6021.js";import"./VDivider-7a82f108.js";import"./VSlideGroup-41b1c0c0.js";import"./goto-76862adb.js";import"./group-d31dd239.js";import"./FSDivider-0d8403a0.js";import"./FSChip-0ce38a8d.js";import"./FSOptionGroup-5f2cb7b2.js";import"./FSWrapGroup-ca330e4e.js";import"./FSToggleSet-269e3af4.js";import"./VBtn-a5dad0d3.js";import"./filter-e8ac40d9.js";import"./useAppOrganisationId-ac05104a.js";import"./lodash-ee9167ea.js";import"./FSImage-b9eff2a0.js";import"./base-0de1729e.js";import"./FSColor-9413b0fe.js";import"./FSTile-2d4dbc53.js";import"./FSTag-c25d6ace.js";class pe{constructor(){this.called=!1,this.result=null}call(t){return this.called?this.result:(this.called=!0,this.result=t(),this.result)}}class ce{constructor(t){this.columnId=t.columnId,this.text=t.text,this.value=t.value,this.sortable=t.sortable,this.filterable=t.filterable,this.index=t.index,this.hidden=t.hidden}}class ge{constructor(t){var i;this.id=t.id,this.code=t.code,this.mode=t.mode,this.rowsPerPage=t.rowsPerPage,this.sortByKey=t.sortByKey,this.sortByOrder=t.sortByOrder,this.columns=((i=t.columns)==null?void 0:i.map(s=>new ce(s)))??[]}}class be extends ge{constructor(t){super(t)}}const fe=()=>`${se()}/user-organisation-tables`,w=e=>`${fe()}/${encodeURIComponent(e)}`,G=new ie("userOrgansiationTable",be).create(e=>e.build(e.addGet(w),e.addUpdate(w),e.addNotify())),ve=R.get(G),Se=R.update(G),v=O({}),he=new pe,ye=()=>he.call(()=>({getTable:i=>v.value[i]!=null?v.value[i]:null,setTable:(i,s)=>{v.value[i]={...s}}})),L=I({name:"FSLoadDataTable",components:{FSLoader:ee,FSCol:B,FSRow:c},setup(){const{getColors:e}=ae(),t=e(oe.Background);return{style:k(()=>({"--fs-load-data-table-background-color":t.base}))}}});function Te(e,t,i,s,g,d){const o=S("FSLoader");return h(),y(B,{class:"fs-load-data-table",gap:"16px",style:z(e.style)},{default:u(()=>[n(c,{align:"bottom-center"},{default:u(()=>[n(o,{variant:"input"}),n(o,{variant:"button"}),n(re),n(o,{variant:"button"}),n(o,{variant:"button"})]),_:1}),n(c,null,{default:u(()=>[n(o,{variant:"chip"}),n(o,{variant:"chip"}),n(o,{variant:"chip"})]),_:1}),n(te,{type:"table-row-divider@10"}),n(c,{align:"center-right"},{default:u(()=>[n(o,{height:"16px",width:"100px"}),n(o,{width:"120px",height:["40px","36px"]}),n(o,{variant:"button"}),n(o,{variant:"button"}),n(o,{variant:"button"})]),_:1})]),_:1},8,["style"])}const Fe=D(L,[["render",Te]]);L.__docgenInfo={displayName:"FSLoadDataTable",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSLoadDataTable.vue"]};const x=I({name:"FSDataTable",components:{FSLoadDataTable:Fe,FSDataTableUI:ne},props:{tableCode:{type:String,required:!0},debounceTime:{type:Number,required:!1,default:1e3},customSorts:{type:Object,required:!1,default:()=>({})}},setup(e){const{get:t,getting:i,entity:s}=ve(),{update:g}=Se(),{getTable:d,setTable:o}=ye(),{debounce:l,cancel:T}=le(),a=O({headers:[],mode:"table",sortBy:null,rowsPerPage:10,filters:{},page:1}),b=k(()=>a.value?a.value.headers.map(r=>({...r,sort:r.value&&e.customSorts[r.value]||null})):[]),V=()=>{d(e.tableCode)?a.value=d(e.tableCode):s.value&&(a.value={headers:s.value.columns,sortBy:{key:s.value.sortByKey,order:s.value.sortByOrder},mode:s.value.mode,rowsPerPage:s.value.rowsPerPage,filters:{},page:1})},N=r=>{a.value&&(a.value.headers=r,l(m,e.debounceTime))},E=r=>{a.value&&(a.value.mode=r,l(m,e.debounceTime))},A=r=>{a.value&&(a.value.sortBy=r,l(m,e.debounceTime))},q=r=>{a.value&&(a.value.rowsPerPage=r,l(m,e.debounceTime))},j=r=>{a.value&&(a.value.filters=r,o(e.tableCode,a.value))},K=r=>{a.value&&(a.value.page=r,o(e.tableCode,a.value))},m=()=>{var r,F;a.value&&(o(e.tableCode,a.value),g(e.tableCode,{columns:a.value.headers.map(f=>({columnId:f.columnId,hidden:f.hidden,index:f.index})),rowsPerPage:a.value.rowsPerPage,sortByKey:((r=a.value.sortBy)==null?void 0:r.key)??null,sortByOrder:((F=a.value.sortBy)==null?void 0:F.order)??null,mode:a.value.mode}))};return H(()=>{T(),m()}),C(()=>e.tableCode,()=>{e.tableCode&&t(e.tableCode)},{immediate:!0}),C(s,()=>{V()}),{gettingUserOrganisationTable:i,headers:b,table:a,updateRowsPerPage:q,updateFilters:j,updateHeaders:N,updateSortBy:A,updateMode:E,updatePage:K}}});function Ce(e,t,i,s,g,d){const o=S("FSLoadDataTable"),l=S("FSDataTableUI");return e.gettingUserOrganisationTable?(h(),y(o,{key:0})):(h(),y(l,J({key:1,headers:e.headers,mode:e.table.mode,sortBy:e.table.sortBy,rowsPerPage:e.table.rowsPerPage,filters:e.table.filters,page:e.table.page,"onUpdate:headers":e.updateHeaders,"onUpdate:mode":e.updateMode,"onUpdate:sortBy":e.updateSortBy,"onUpdate:rowsPerPage":e.updateRowsPerPage,"onUpdate:filters":e.updateFilters,"onUpdate:page":e.updatePage},e.$attrs),W({_:2},[Z(e.$slots,(T,a)=>({name:a,fn:u(b=>[Q(e.$slots,a,X(Y(b)))])}))]),1040,["headers","mode","sortBy","rowsPerPage","filters","page","onUpdate:headers","onUpdate:mode","onUpdate:sortBy","onUpdate:rowsPerPage","onUpdate:filters","onUpdate:page"]))}const $=D(x,[["render",Ce]]);x.__docgenInfo={displayName:"FSDataTable",exportName:"default",description:"",tags:{},props:[{name:"tableCode",type:{name:"string"},required:!0},{name:"debounceTime",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1000"}},{name:"customSorts",type:{name:"{ [key: string]: any }"},required:!1,defaultValue:{func:!0,value:"() => ({})"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/FSDataTable.vue"]};const sa={title:"Foundation/Core/Lists/DataTable",component:$,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},p={args:{args:{tableCode:"groups1",items:M,value:[],itemTo:e=>({name:"group",params:{groupId:e.id}}),clickRow:()=>{console.log("clicked")},customSorts:{tags:(e,t)=>{if(e==null&&t==null||e.length==t.length)return 0;if(e==null||e.length<t.length)return-1;if(t==null||e.length>t.length)return 1}}}},render:(e,{argTypes:t})=>({components:{FSDataTable:$,FSGroupTileUI:me,FSSlideGroup:ue,FSTagGroup:de},props:Object.keys(t),setup(){return{...e,getColor:s=>{if(s)return s.code==="number1"?"primary":"success"}}},template:`
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
    </div>`})};var U,P,_;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
          :customSorts="args.customSorts"
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
}`,...(_=(P=p.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const ia=["Variations"];export{p as Variations,ia as __namedExportsOrder,sa as default};
